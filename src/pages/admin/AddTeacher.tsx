import AdminIndex from "./index";
import {Button, Input, message} from "antd";
import {InboxOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "../../axios";

const AddTeacher = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [attend, setAttend] = useState('')
    const [password, setPassword] = useState('')
    const [login, setLogin] = useState('')


    const saveHandler = () => {
        axios.post(`/user`, {
            login: login,
            full_name: name,
            password: password,
            attend : `${number} ${attend}-t`,
            role: 'teacher'
        })
            .then(res => {
                navigate('/admin/dashboard')
            })
            .catch(err => {
                console.log(err)
            })
    }
    return(
        <AdminIndex>
            <div className='p-10 bg-white w-full h-full rounded-2xl flex flex-col gap-10 bg-gray-200 shadow-2xl'>
                <div className="grid grid-cols-2 items-center">
                    <p className='font-bold text-2xl'>логин:</p>
                    <Input value={login} onChange={e => setLogin(e.target.value)}/>
                </div>
                <div className="grid grid-cols-2 items-center">
                    <p className='font-bold text-2xl'>имя:</p>
                    <Input value={name} onChange={e => setName(e.target.value)}/>
                </div>
                <div className="grid grid-cols-2 items-center">
                    <p className='font-bold text-2xl'>класс:</p>
                    <div className="flex gap-5">
                        <Input value={number} onChange={e => setNumber(e.target.value)} style={{width: 50}}/>
                        <Input value={attend} onChange={e => setAttend(e.target.value)} style={{width: 80}}/>
                    </div>
                </div>
                <div className="grid grid-cols-2 items-center">
                    <p className='font-bold text-2xl'>пароль:</p>
                    <Input value={password} onChange={e => setPassword(e.target.value)}/>
                </div>
                <div className='w-full flex h-full items-end justify-center'>
                    <Button type={'primary'} onClick={() => {saveHandler()}}>сохранить</Button>
                </div>
            </div>
        </AdminIndex>
    )
}

export default AddTeacher