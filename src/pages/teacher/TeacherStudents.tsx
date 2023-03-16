import TeacherIndex from "./index";
import {useEffect, useState} from "react";
import axios from "../../axios";
import {UseAuthContext} from "../../context/AuthContext";
import {BiDockRight, BiDownload} from "react-icons/bi";
import {AiFillEye} from "react-icons/ai";
import {Link} from "react-router-dom";
import {CiUser} from "react-icons/ci";

const TeacherStudents = () =>{
    const [data, setData] = useState([])
    const {userId} = UseAuthContext()

    useEffect(() => {
        axios.get(`/attends/${userId}`)
            .then(res => {
                setData(res.data)
            })
            .catch(err =>{console.log(err)})
    }, [])
    return(
        <TeacherIndex>
            <div className="mb-10 flex justify-between items-center">
                <h3 className='font-bold text-2xl'>Ученики</h3>
            </div>
            {data[0] && (
                data.map((item:any) => (
                    <div className="flex flex-col w-full gap-5" key={item.id}>
                        <div className="bg-blue-200 flex items-center justify-between rounded-2xl shadow-2xl w-full px-8 py-4">
                            <div className='flex gap-5 items-center'>
                                <div className='rounded-xl px-4 py-2 bg-blue-900 text-white'><CiUser/></div>
                                <p className='font-bold'>{item?.full_name}</p>
                                <p className='font-bold'>{item?.attend}</p>
                            </div>

                            <div className='flex gap-5'>
                                <Link to={`/teacher/student/${item.id}`}  className='rounded-xl px-4 py-2 bg-green-800 text-white'><AiFillEye/></Link>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </TeacherIndex>
    )
}

export default TeacherStudents