import AdminIndex from "../index";
import SimpleMDE from "react-simplemde-editor";
import {message, Modal, Upload, UploadFile, UploadProps} from 'antd';
import "easymde/dist/easymde.min.css";
import '../styles/Addlesson.scss'
import {useEffect, useState} from "react";
import {RcFile} from "antd/es/upload";
import { PlusOutlined } from '@ant-design/icons';
import Dragger from "antd/es/upload/Dragger";
import { InboxOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import {useNavigate, useParams} from "react-router-dom";


const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });

const AddLesson = () => {
    const {id} = useParams()
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [loadings, setLoadings] = useState<boolean[]>([]);
    const handleCancel = () => setPreviewOpen(false);
    const [fileList, setFileList] = useState<UploadFile[]>([]);
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


    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );


    const { Dragger } = Upload;

    const props: UploadProps = {
        name: 'file',
        multiple: true,
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };
    const enterLoading = (index: number) => {
        setLoadings((prevLoadings) => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = true;
            return newLoadings;
        });

        setTimeout(() => {
            setLoadings((prevLoadings) => {
                const newLoadings = [...prevLoadings];
                newLoadings[index] = false;
                navigate(`/admin/subject/${id}/addLesson/2345678/quiz`)
                return newLoadings;
            });
        }, 6000);
    };
    return(
        <AdminIndex>
            <div className="addLesson_wrapper">
                <form className='lesson_form'>
                    <div className="input_wrapper">
                        <label>Название урока<span className='require'>*</span></label>
                        <input type="text" className='lesson_input'/>
                    </div>
                    <div className="input_wrapper">
                        <label className='preview_text'>превию фото</label>
                        <Upload
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            listType="picture-card"
                            fileList={fileList}
                            onPreview={handlePreview}
                            onChange={handleChange}
                        >
                            {fileList.length >= 8 ? null : uploadButton}
                        </Upload>
                        <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                            <img alt="example" style={{ width: '100%'}} src={previewImage} />
                        </Modal>
                    </div>

                    <div className="input_wrapper">
                        <label className='preview_text'>фото или файл для урока</label>
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
                    </div>

                    <div className="input_wrapper">
                        <label>материал для обучения<span className='require'>*</span></label>
                        <SimpleMDE />
                    </div>
                    <div className="btn_wrapper">
                        <Button type="primary" size={"large"} loading={loadings[0]} onClick={() => enterLoading(0)}>Создавть Квиз</Button>
                    </div>
                </form>
            </div>
        </AdminIndex>
    )
}

export default AddLesson