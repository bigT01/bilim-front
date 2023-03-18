import AdminIndex from "./admin";
import {Link} from "react-router-dom";
import {AiFillEye} from "react-icons/ai";
import {BiDockRight, BiDownload, BiTrash} from "react-icons/bi";
import {useEffect, useState} from "react";
import axios from "../axios";
import {Trash} from "../components/assets/MainAssets";
import {message} from "antd";

const Standards = () => {
    const [data, setData] = useState<any>([])

    useEffect(() => {
        axios.get('/standard')
            .then(response => {
                setData(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const onDownloadHandler = (url:string, name:string) => {
        fetch(`https://bilimplace.kz${url}`).then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = `${name.split(' ').join('_')}.pdf`;
                alink.click();
            })
        })
    }

    const onDeleteHandler = (id:string) => {
        axios.delete(`/standard/${id}`)
            .then(response => {
                message.success('успешно удалено')
            })
            .catch(err => {
                console.log(err)
                message.error('не удалось удалить')
            })
    }



    return(
        <AdminIndex>
            <div className="mb-10 flex justify-between items-center">
                <h3 className='font-bold text-2xl'>Стандарты</h3>
                <Link to={'/admin/addStandards'} className='rounded-xl px-4 py-2 bg-green-600 text-white'>+</Link>
            </div>
            {data[0] && (
                data.map((item:any) => (
                    <div className="flex flex-col w-full gap-5" key={item.id}>
                        <div className="bg-blue-200 flex items-center justify-between rounded-2xl shadow-2xl w-full px-8 py-4">
                            <div className='flex gap-5 items-center'>
                                <div className='rounded-xl px-4 py-2 bg-blue-900 text-white'><BiDockRight/></div>
                                <p className='font-bold'>{item.name}</p>
                            </div>

                            <div className='flex gap-5'>
                                <button className='rounded-xl px-4 py-2 bg-orange-500 text-white' onClick={() => onDownloadHandler(item.material, item.name)}><BiDownload/></button>
                                <a href={`https://bilimplace.kz${item.material}`} target={'_blank'} className='rounded-xl px-4 py-2 bg-green-800 text-white'><AiFillEye/></a>
                                <button className='rounded-xl px-4 py-2 bg-red-500 text-white' onClick={() => onDeleteHandler(item.id)}><BiTrash/></button>
                            </div>

                        </div>
                    </div>
                ))
            )}
        </AdminIndex>
    )
}

export default Standards