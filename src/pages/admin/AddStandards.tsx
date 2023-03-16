import AdminIndex from "./index";
import {Button, Input, message, Upload, UploadProps} from "antd";
import {InboxOutlined} from "@ant-design/icons";
import {useState} from "react";

import {useNavigate} from "react-router-dom";
import axios from "../../axios";

const { Dragger } = Upload;



const AddStandards = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [material, setMaterial] = useState('')

    const saveHandler = () => {
        axios.post('/standard', {
            name: name,
            material: material
        })
            .then(response => {
                message.success('успешно было закгружено')
                navigate('/admin/dashboard')
            })
            .catch(err => {
                console.log(err)
                message.error('ошибка сети попробуйте позднее')
            })
    }


    const props: UploadProps = {
        name: 'file',
        multiple: false,
        action: 'http://localhost:4444/upload',
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                setMaterial(info?.file?.response?.url);
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
    return(
        <AdminIndex>
            <div className='p-10 bg-white w-full h-full rounded-2xl flex flex-col gap-10'>
                <div className="grid grid-cols-2 items-center">
                    <p className='font-bold text-2xl'>Назывние:</p>
                    <Input value={name} onChange={e => setName(e.target.value)}/>
                </div>
                <div className="grid grid-cols-2 items-center">
                    <p className='font-bold text-2xl'>Файл:</p>
                    <Dragger {...props}>
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Нажмите или перетащите файл</p>
                    </Dragger>
                </div>
                <div className='w-full flex h-full items-end justify-center'>
                    <Button type={'primary'} onClick={() => {saveHandler()}}>сохранить</Button>
                </div>
            </div>
        </AdminIndex>
    )
}

export default AddStandards