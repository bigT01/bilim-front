import {useParams} from "react-router-dom";
import {UseAuthContext} from "../../context/AuthContext";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {fetchMessage, fetchMessageCreate} from "../../Redux/slices/message";
import AdminIndex from "./index";
import {Button, Input} from "antd";

const AdminMessageTo = () =>{
    const {id} = useParams()
    const {userId} = UseAuthContext()
    const dispatch = useDispatch()
    const {message} = useSelector((state:any) => state.message)

    const [messageData, setMessageData] = useState([])
    const [value, setValue] = useState('')

    useEffect(() => {
        if(id && userId){
            const params = {id, userId}
            // @ts-ignore
            dispatch(fetchMessage(params))
        }
    }, [id, userId])

    const onSendHandler = () => {
        if(value){
            const params = {userId, id, value}
            // @ts-ignore
            dispatch(fetchMessageCreate(params))
            setValue('')
        }
    }

    useEffect(() => {
        setMessageData(message.items)
    },[message])
    return(
        <AdminIndex>
            <div className='bg-gray-400 rounded-xl p-10 h-full relative flex gap-5 scroll-m-0 flex-col' style={{paddingBottom: '85px'}}>
                {messageData[0] && messageData.map((item:any) => (item.sender === userId? <div className="flex w-full justify-end" key={item.id}>
                    <div className="bg-white rounded-tl-xl rounded-br-xl rounded-bl-xl px-4 py-2 w-fit max-w-[300px]">
                        <p>{item.message_content}</p>
                    </div>
                </div>: <div className="flex w-full justify-start" key={item.id}>
                    <div className="bg-white rounded-tr-xl rounded-br-xl rounded-bl-xl px-4 py-2 w-fit max-w-[300px]">
                        <p>{item.message_content}</p>
                    </div>
                </div>) )}

                <div className="flex absolute bottom-0 w-full px-4 py-2 items-center bg-gray-300 h-[80px] rounded-tl-2xl rounded-tr-2xl left-0 justify-between ">
                    <div className="flex w-2/3  rounded-2xl py-2 px-4 bg-white">
                        <Input style={{border: 'none'}} value={value} onChange={e => setValue(e.target.value)}/>
                    </div>
                    <Button type={'primary'} style={{borderRadius: 10}} onClick={() => onSendHandler()}>Отправить</Button>
                </div>
            </div>
        </AdminIndex>
    )
}

export default AdminMessageTo