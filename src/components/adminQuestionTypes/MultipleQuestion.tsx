import {RcFile} from "antd/es/upload";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {Button, Checkbox, Input, Modal, Upload, UploadFile, UploadProps} from "antd";
import {fetchDeleteQuestion, fetchUpdateQuestion} from "../../Redux/slices/questions";
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

const MultipleQuestion = ({id, typeQuestion}:LessonQAProps) => {
    const {question} = useSelector((state:any) => state.question)
    const [Variants, setVariants] = useState([{value: '1', variant: 'Option 1'}, {value: '2', variant: 'Option 1'}])
    const [value, setValue] = useState<string[]>([]);
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
            const correct_answer = certainQuestion[0].correct_answer ? JSON.parse(certainQuestion[0].correct_answer) : []
            setPhoto(certainQuestion[0].photo)
            options ? setVariants(options) : null
            setValue(correct_answer)
            setQuestionSender(certainQuestion[0].question ? certainQuestion[0].question : '')
        }
    }, [])

    useEffect(() => {
        if(fileList[0]?.response?.url){
            setPhoto(fileList[0]?.response?.url)
        }
    }, [fileList])


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

    const AddQuestionHandler = () => {
        setVariants((old:any) => {
            return [...old, {value: (Variants.length + 1), variant: `Option ${Variants.length + 1}`}];
        })
    }

    const saveHandler = () =>{
        const questionJSON = JSON.stringify(Variants).trim()
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

    const CheckBoxHandler = (value: any, isChecked: boolean) => {
        const origin = value.split('abc')
        if (isChecked) {
            setValue(oldData => {
                if (Array.isArray(oldData)) {
                    return [...oldData, origin[0]];
                }
                return [origin[0]];
            })
        }
        else{
            setValue(oldData => {
                if (Array.isArray(oldData)) {
                    return oldData.filter((elem: any) => elem !== origin[0]);
                }
                return [origin[0]];
            })
        }

    }

    const CheckBoxInputHandler = (id:any, value:string) => {
        const origin = id.split('abcd')
        setVariants(prevQuestions => {
            return prevQuestions.map(question => {
                if (question.value.toString() === origin[0]) {
                    return { ...question, variant: value };
                } else {
                    return question;
                }
            });
        });
    }


    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );


    return(
        <>
            <Input placeholder={'Напишите вопрос ...'} onChange={e =>setQuestionSender(e.target.value)} value={questionSender} style={{width: '70%', height: 45, marginBottom: 20}}/>
            {photo ? <div style={{display: 'flex', alignItems: 'center', justifyContent:'space-between'}}><img src={`http://localhost:4444${photo}`} alt='img:preview' width={250} height={200} style={{objectFit:'cover', marginRight: '2rem'}}/> <Button type={'primary'} onClick={() => setPhoto('')} danger>удалить</Button></div> : <>
                <Upload
                    action="http://localhost:4444/upload"
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
                {Variants.map(elem => (
                    <Checkbox key={elem.value} onChange={(e) => CheckBoxHandler(e.target.id, e.target.checked)} id={elem.value+'abc'}><Input id={elem.value+'abcd'} value={elem.variant} onChange={e => CheckBoxInputHandler(e.target.id, e.target.value)}/></Checkbox>
                ))}
                <Button type={"primary"} onClick={() => AddQuestionHandler()}>Добавить вариант</Button>
            </div>
            <Button style={{backgroundColor: '#00bb00', color: "#ffffff", marginRight: 30}} onClick={() => saveHandler()}>Сохранить</Button>
            <Button type="primary" danger onClick={e => deleteQuestionHandler()}>Удалить</Button>
        </>
    )
}

export default MultipleQuestion