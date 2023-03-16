import TeacherIndex from "./index";
import {useEffect, useState} from "react";
import axios from "../../axios";
import {Link} from "react-router-dom";
import {BiDockRight, BiDownload, BiTrash} from "react-icons/bi";
import {AiFillEye} from "react-icons/ai";

const TeacherStadards = () =>{
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
        fetch(`http://localhost:4444${url}`).then(response => {
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
    return(
        <TeacherIndex>
            <div className="mb-10 flex justify-between items-center">
                <h3 className='font-bold text-2xl'>Стандарты</h3>
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
                                <a href={`http://localhost:4444${item.material}`} target={'_blank'} className='rounded-xl px-4 py-2 bg-green-800 text-white'><AiFillEye/></a>
                            </div>

                        </div>
                    </div>
                ))
            )}
        </TeacherIndex>
    )
}

export default TeacherStadards