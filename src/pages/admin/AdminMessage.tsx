import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import axios from "../../axios";
import {fetchMessageUpdate} from "../../Redux/slices/message";
import AdminIndex from "./index";
import {Link} from "react-router-dom";

const AdminMessage = () =>{
    const [user, setUser] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get('/user/student')
            .then(response => {
                setUser(response.data)
            })
            .catch(err => {
                console.log(err)
            })
        // @ts-ignore
        dispatch(fetchMessageUpdate())
    }, [])
    return(
        <AdminIndex>
            <div className="flex flex-col w-full gap-5">
                {user[0] && (
                    user.map((item:any) => (
                        <div key={item.id} className="bg-blue-200 flex items-center justify-between rounded-2xl shadow-2xl w-full px-8 py-4">
                            <p className='font-bold'>{item.full_name}</p>
                            <Link to={`/admin/message/${item.id}`} className='rounded-xl px-4 py-2 bg-green-800 text-white'>написать сообщения</Link>
                        </div>
                    ))
                )}
            </div>
        </AdminIndex>
    )
}

export default AdminMessage