import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {Button, Input, Modal, Upload, UploadFile, UploadProps} from "antd";
import {RcFile} from "antd/es/upload";
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

const SelectQuestion = ({id, typeQuestion}:LessonQAProps) => {
    const {question} = useSelector((state:any) => state.question)
    const [Variants, setVariants] = useState([{value: '1', question: 'Option 1', variant: ''}])
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
            options ? setVariants(options) : null
            setPhoto(certainQuestion[0].photo)
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
            return [...old, {value: (Variants.length + 1), question:`Option ${Variants.length + 1}`, variant: ''}];
        })
    }

    const saveHandler = () =>{
        const questionJSON = JSON.stringify(Variants).trim()
        const params = {
            id: id,
            question: questionSender.trim(),
            options:questionJSON.trim(),
            correct_answer: '',
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

    const CheckBoxInputHandler = (id:any, value:string) => {
        setVariants(prevQuestions => {
            return prevQuestions.map(question => {
                if (question.value === id) {
                    return { ...question, question: value };
                } else {
                    return question;
                }
            });
        });
    }

    const CheckBoxInputVariantHandler = (id:any, value:string) => {
        setVariants(prevQuestions => {
            return prevQuestions.map(question => {
                if (question.value === id) {
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
                {Variants.map(elem => (
                    <div style={{display:'flex', gap: 10}}>
                        <Input value={elem.value} style={{width: 40, padding: 5}}/>
                        <Input value={elem.question} onChange={e => CheckBoxInputHandler(elem.value ,e.target.value)}/>
                        <Input value={elem.variant} style={{width: "40%", padding: 5}} onChange={e => CheckBoxInputVariantHandler(elem.value ,e.target.value)}/>
                    </div>
                ))}
                <Button type={"primary"} onClick={() => AddQuestionHandler()}>Добавить вариант</Button>
            </div>
            <Button style={{backgroundColor: '#00bb00', color: "#ffffff", marginRight: 30}} onClick={() => saveHandler()}>Сохранить</Button>
            <Button type="primary" danger onClick={e => deleteQuestionHandler()}>Удалить</Button>
        </>
    )
}

export default SelectQuestion