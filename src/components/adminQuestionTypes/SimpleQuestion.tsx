import {Button, Input, message, Modal, Radio, RadioChangeEvent, Space, Upload, UploadFile, UploadProps} from "antd";
import {useEffect, useState} from "react";
import axios from "../../axios";
import {useDispatch, useSelector} from "react-redux";
import {fetchDeleteQuestion, fetchUpdateQuestion} from "../../Redux/slices/questions";
import {RcFile} from "antd/es/upload";
import {PlusOutlined} from "@ant-design/icons";

type LessonQAProps = {
    id:string,
    typeQuestion: string,
}

const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });

const SimpleQuestion = ({id, typeQuestion}:LessonQAProps) => {
    const {question} = useSelector((state:any) => state.question)
    const [radioQuestions, setRadioQuestions] = useState([{value: 1, variant: 'Option 1'}])
    const [value, setValue] = useState(1);
    const [questionSender, setQuestionSender] = useState('')
    const [photo, setPhoto] = useState('')

    const [previewImage, setPreviewImage] = useState('');
    const [isPhoto, setIsPhoto] = useState(false);
    const [photoTitle, setPhotoTitle] = useState('');
    const [fileList, setFileList] = useState<UploadFile[]>([]);
    const dispatch = useDispatch()

    useEffect(() => {
        const certainQuestion = question.items.filter((item:any) => item.question_id === id)
        if(certainQuestion[0]){
            const options = certainQuestion[0].options ? JSON.parse(certainQuestion[0].options) : null
            const correct_answer = certainQuestion[0].correct_answer ? JSON.parse(certainQuestion[0].correct_answer) : 1
            options ? setRadioQuestions(options) : null
            setPhoto(certainQuestion[0].photo)
            setValue(correct_answer)
            setQuestionSender(certainQuestion[0].question ? certainQuestion[0].question : '')
        }
    }, [])


    useEffect(() => {
        if(fileList[0]?.response?.url){
            setPhoto(fileList[0]?.response?.url)
        }
    }, [fileList])

    const onChange = (e: RadioChangeEvent) => {
        setValue(e.target.value)
        if(e.target.value === 1000){
            setRadioQuestions(old => [...old, {value:(radioQuestions.length + 1), variant: `Option ${radioQuestions.length+1}`}])
            setValue(old => 1)
        }
    };

    // @ts-ignore
    const QuestionHandler = (e, id) => {
        setRadioQuestions(prevQuestions => {
            return prevQuestions.map(question => {
                if (question.value === id) {
                    return { ...question, variant: e.target.value };
                } else {
                    return question;
                }
            });
        });
    }

    const handlePreview = async (file: UploadFile) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj as RcFile);
        }

        setPreviewImage(file.url || (file.preview as string));
        setIsPhoto(true);
        setPhotoTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
    };

    const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => setFileList(newFileList);

    const handleCancel = () => setIsPhoto(false);

    const saveHandler = () =>{
        const questionJSON = JSON.stringify(radioQuestions).trim()
        const answerJSON = JSON.stringify(value).trim()
        const params = {
            id: id,
            question: questionSender.trim(),
                options:questionJSON.trim(),
                correct_answer: answerJSON.trim(),
                type: typeQuestion.trim(),
                photo: photo
        }
        // @ts-ignore
        dispatch(fetchUpdateQuestion(params))
    }

    const deleteQuestionHandler = () =>{
        // @ts-ignore
        dispatch((fetchDeleteQuestion(id)))
    }


    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

    return (
        <>
            <Input placeholder={'Напишите вопрос ...'} onChange={e =>setQuestionSender(e.target.value)} value={questionSender} style={{width: '70%', height: 45, marginBottom: 20}}/>
            {photo ? <div style={{display: 'flex', alignItems: 'center', justifyContent:'space-between'}}><img src={`https://bilimplace.kz${photo}`} alt='img:preview' width={250} height={200} style={{objectFit:'cover', marginRight: '2rem'}}/> <Button type={'primary'} onClick={() => setPhoto('')} danger>удалить</Button></div> : <>
                <Upload
                    action="https://bilimplace.kz/upload"
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={handlePreview}
                    onChange={handleChange}
                >
                    {fileList.length >= 1 ? null : uploadButton}
                </Upload>
                <Modal open={isPhoto} title={photoTitle} footer={null} onCancel={handleCancel}>
                    <img alt="example" style={{width: '100%'}} src={previewImage} />
                </Modal>
            </>}
            <div className="variant_list">
                <Radio.Group onChange={onChange} value={value}>
                    <Space direction="vertical">
                        <p>правильный вариант укажите</p>
                        {radioQuestions.map(elem => (
                            <Radio value={elem.value}><Input onChange={e => QuestionHandler(e, elem.value)} placeholder={elem.variant} value={elem.variant} style={{width: '120%'}}/></Radio>))}

                        <Radio value={1000}>more</Radio>
                    </Space>
                </Radio.Group>
            </div>
            <Button style={{backgroundColor: '#00bb00', color: "#ffffff", marginRight: 30}} onClick={() => saveHandler()}>Сохранить</Button>
            <Button type="primary" danger onClick={e => deleteQuestionHandler()}>Удалить</Button>
        </>
    );
}

export default SimpleQuestion