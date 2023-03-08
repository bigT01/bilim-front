import SimpleMDE from "react-simplemde-editor";
import {message, Modal, Upload, UploadFile, UploadProps, DatePicker, Space} from 'antd';
import "easymde/dist/easymde.min.css";
import '../styles/Addlesson.scss'
import {useCallback, useEffect, useState} from "react";
import {RcFile} from "antd/es/upload";
import { PlusOutlined } from '@ant-design/icons';
import Dragger from "antd/es/upload/Dragger";
import { InboxOutlined } from '@ant-design/icons';
import type { DatePickerProps, RangePickerProps } from 'antd/es/date-picker';
import { Button } from 'antd';
import {useNavigate, useParams} from "react-router-dom";
import AdminIndex from "../index";
import axios from "../../../axios";
import dayjs, {Dayjs} from "dayjs";
import {BiPaperclip} from "react-icons/bi";
import advancedFormat from "dayjs/plugin/advancedFormat";
import moment, {Moment} from "moment";
import {useDispatch} from "react-redux";
import {fetchUpdateQuiz} from "../../../Redux/slices/quiz";



const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });

const { RangePicker } = DatePicker;

dayjs.extend(advancedFormat);

const UpdateLesson = () => {
    const {id} = useParams()
    const [quizId, setQuizId] = useState('')
    const [title, setTitle] = useState('')
    const [previewURL, setPreviewURL] = useState('')
    const [description, setDescription] = useState('')
    const [materialURL, setMaterialURL] = useState('')
    const [startTime, setStartTime] = useState('')
    const [endTime, setEndTime] = useState('')

    const [lessonId, setLessonId] = useState('')
    const [isSuccess, setIsSuccess] = useState(false)

    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState<UploadFile[]>([]);

    const dispatch = useDispatch()


    useEffect(() => {
        axios.get(`/lesson/${id}`)
            .then(res => {
                setTitle(res.data.title)
                setPreviewURL(res.data.preview_image)
                setDescription(res.data.description)
                setMaterialURL(res.data.material)
                setStartTime((res.data.start_time))
                setEndTime((res.data.end_time))
            })
            .catch(err => {
                console.log(err)
                message.error('не удалось найти урок попробуйте позднее')
            })
        axios.get(`/lesson/${id}/quiz`)
            .then(res => {
                setQuizId(res.data.quiz_id)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    const [loadings, setLoadings] = useState<boolean[]>([]);


    const handleCancel = () => setPreviewOpen(false);
    const navigate = useNavigate()

    const handlePreview = async (file: UploadFile) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj as RcFile);
        }

        setPreviewImage(file.url || (file.preview as string));
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
    };

    const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => setFileList(newFileList);

    const onChangeDescription = useCallback((value:string) => {
        setDescription(value)
    }, [])

    const onChangeStartDate = (
        value: DatePickerProps['value'] | RangePickerProps['value'],
        dateString: [string, string] | string,
    ) => {
        setStartTime(dateString[0])
        setEndTime(dateString[0])
    };




    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

    useEffect(() => {
        setPreviewURL(fileList[0]?.response?.url)
    }, [fileList])


    const { Dragger } = Upload;

    const props: UploadProps = {
        name: 'file',
        multiple: true,
        action: 'http://localhost:4444/upload',
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                setMaterialURL(info?.file?.response?.url);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            e.dataTransfer.files
        },
    };

    const CreateLesson = (index: number) => {
        setLoadings((prevLoadings) => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = true;
            return newLoadings;
        });

        axios.put(`/lesson/${id}`, {
            title: title,
            preview_image: previewURL,
            description: description,
            material: materialURL,
            start_time: startTime,
            end_time: endTime
        })
            .then((res:any) => {
                message.success('урок успешно был обновлено')
                // navigate(`/admin/subjects/${id}`)
            })
            .catch(err => {
                message.error('Ошибка с сервером попробуйте позднее')

            })
            .finally(() =>{
                setLoadings((prevLoadings) => {
                    const newLoadings = [...prevLoadings];
                    newLoadings[index] = false;
                    return newLoadings;
                });
            })

    }

    const enterLoading = (index: number) => {
        setLoadings((prevLoadings) => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = true;
            return newLoadings;
        });

        axios.put(`/lesson/${id}`, {
            title: title,
            preview_image: previewURL,
            description: description,
            material: materialURL,
            start_time: startTime,
            end_time: endTime
        })
            .then((res:any) => {
                message.success('урок успешно был создан')
                // @ts-ignore
                setLessonId(id)
                setIsSuccess(true)
                // navigate(`/admin/subject/${id}/addLesson/${res.data.lesson_id}/quiz`)
            })
            .catch(err => {
                message.error('Ошибка с сервером попробуйте позднее')

            })
            .finally(() =>{
                setLoadings((prevLoadings) => {
                    const newLoadings = [...prevLoadings];
                    newLoadings[index] = false;
                    return newLoadings;
                });
            })
    };


    const updateQuiz = (index: number) =>{
        if(quizId){
            navigate(`/admin/subjects/quiz/${quizId}`)
            setLoadings((prevLoadings) => {
                const newLoadings = [...prevLoadings];
                newLoadings[index] = true;
                return newLoadings;
            });
        }
    }



    useEffect(() => {
        if(isSuccess && lessonId && !quizId){
            // @ts-ignore
            dispatch(fetchUpdateQuiz())
            
            axios.post(`/lesson/${lessonId}/quiz`)
                .then(res => {
                    message.success('квиз был успешно создан')
                    navigate(`/admin/subjects/quiz/${res.data.quiz_id}`)
                })
                .catch(err => {
                    console.log(err)
                    message.error('не удалось создать квиз')
                })
        }
    }, [isSuccess])


    // @ts-ignore
    const defaultValue: [EventValue<Dayjs>, EventValue<Dayjs>] = [
        dayjs(endTime),
        dayjs(startTime)
    ];

    return(
        <AdminIndex>
            <div className="addLesson_wrapper">
                <form className='lesson_form'>
                    <div className="input_wrapper">
                        <label>Название урока<span className='require'>*</span></label>
                        <input type="text" className='lesson_input' value={title} onChange={e => setTitle(e.target.value)}/>
                    </div>
                    <div className="input_wrapper">
                        <label className='preview_text'>превию фото</label>
                        {previewURL ? <div style={{display: 'flex', alignItems: 'center', justifyContent:'space-between'}}><img src={`http://localhost:4444${previewURL}`} alt='img:preview' width={250} height={200} style={{objectFit:'cover', marginRight: '2rem'}}/> <Button type={'primary'} onClick={() => setPreviewURL('')} danger>удалить</Button></div> : <>
                            <Upload
                                action="http://localhost:4444/upload"
                                listType="picture-card"
                                fileList={fileList}
                                onPreview={handlePreview}
                                onChange={handleChange}
                            >
                                {fileList.length >= 1 ? null : uploadButton}
                            </Upload>
                            <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                                <img alt="example" style={{width: '100%'}} src={previewImage} />
                            </Modal>
                        </>}

                    </div>

                    <div className="input_wrapper">
                        <label className='preview_text'>фото или файл для урока</label>
                        {materialURL ? <div style={{display: 'flex', alignItems: 'center', justifyContent:'space-between'}}><div style={{display:'flex', gap: '2rem'}}><BiPaperclip/> <p>{materialURL}</p></div> <Button type={'primary'} onClick={() => setMaterialURL('')} danger>удалить</Button></div> : <>
                            <Dragger {...props}>
                                <p className="ant-upload-drag-icon">
                                    <InboxOutlined />
                                </p>
                                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                <p className="ant-upload-hint">
                                    Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                                    band files
                                </p>
                            </Dragger>
                            <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                                <img alt="example" style={{ width: '100%'}} src={previewImage} />
                            </Modal>
                        </>}
                    </div>

                    <div className="input_wrapper">
                        <label>материал для обучения<span className='require'>*</span></label>
                        <SimpleMDE value={description} onChange={onChangeDescription}/>
                    </div>

                    <div className="input_wrapper">
                        <label>дата началы  обучение<span className='require'>*</span></label>
                        <Space direction="vertical" size={12}>
                            {startTime && endTime ? (
                                <RangePicker
                                    value={defaultValue}
                                    showTime={{ format: 'HH:mm' }}
                                    format="YYYY-MM-DD HH:mm"
                                    onChange={onChangeStartDate}
                                />
                            ): (
                                <RangePicker
                                    // defaultValue={defaultRangeValue}
                                    showTime={{ format: 'HH:mm' }}
                                    format="YYYY-MM-DD HH:mm"
                                    onChange={onChangeStartDate}
                                />
                            )}

                        </Space>
                    </div>

                    <div className="btn_wrapper">
                        {quizId ? <Button type="primary" size={"large"} style={{backgroundColor: 'rgb(246 153 16)'}} loading={loadings[2]} onClick={() => updateQuiz(2)}>Обновить Квиз</Button> :<Button type="primary" size={"large"} loading={loadings[0]} onClick={() => enterLoading(0)}>Создавть
                            Квиз</Button>}
                        <Button type="primary" style={{backgroundColor: '#00bb00'}} size={"large"} loading={loadings[1]} onClick={() => CreateLesson(1)}>Сохранить</Button>
                    </div>
                </form>
            </div>
        </AdminIndex>
    )
}

export default UpdateLesson