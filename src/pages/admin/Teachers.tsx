import AdminIndex from "./index";
import './styles/adminTeachers.scss'
import {Edit, UserAdd, UserRemove} from "../../components/assets/MainAssets";
import {Link} from "react-router-dom";
import {BiDockRight, BiDownload, BiTrash} from "react-icons/bi";
import {AiFillEye} from "react-icons/ai";
import {useEffect, useState} from "react";
import axios from "../../axios";
import {CiUser} from "react-icons/ci";
import {message} from "antd";

const Teachers = () =>{
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('/user/teacher')
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const onDeleteHandler = (id:string) =>{
        axios.delete(`/user/${id}`)
            .then(res => {
                message.success('успешно удалено')
            })
            .catch(err => {
                message.error('не удалось удалить')
            })
    }
    return(
        <AdminIndex>
            <div className="mb-10 flex justify-between items-center">
                <h3 className='font-bold text-2xl'>Учители</h3>
                <Link to={'/admin/addTeachers'} className='rounded-xl px-4 py-2 bg-green-600 text-white'>+</Link>
            </div>
            {data[0] && (
                data.map((item:any) => (
                    <div className="flex flex-col w-full mb-5" key={item?.id}>
                        <div className="bg-blue-200 flex items-center justify-between rounded-2xl shadow-2xl w-full px-8 py-4">
                            <div className='flex gap-5 items-center'>
                                <div className='rounded-xl px-4 py-2 bg-blue-900 text-white'><CiUser/></div>
                                <p className='font-bold'>{item?.full_name}</p>
                                <p className='font-bold'>{item?.attend}</p>
                            </div>

                            <div className='flex gap-5'>
                                <button className='rounded-xl px-4 py-2 bg-red-500 text-white' onClick={() => onDeleteHandler(item.id)}><BiTrash/></button>
                            </div>

                        </div>
                    </div>
                ))
            )}
        </AdminIndex>
    )
}

export default Teachers