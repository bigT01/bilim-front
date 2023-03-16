import TeacherIndex from "./index";
import {UseAuthContext} from "../../context/AuthContext";
import {useEffect, useState} from "react";
import axios from "../../axios";

const TeacherDashboard = () =>{
    const [data, setData] = useState<any>()
    const {userId} = UseAuthContext()

    useEffect(() =>{
        axios.get(`/average/${userId}`)
            .then(res => {
                setData(res.data[0])
                console.log(res.data[0])
            })
            .catch(err =>{console.log(err)})
    }, [])

    return(
        <TeacherIndex>
            <h3 className='font-bold text-2xl mb-24'>Главная страница</h3>
            <div className='flex items-center'>
                <p className='font-bold text-xl'>сердний оценки ваших студенов</p>
                {data?.avg_score ?(
                    <svg viewBox="0 0 36 36"
                         className={`circular-chart ${data?.avg_score >= 80 ? 'green' : ''} ${data?.avg_score < 80 && data?.avg_score >= 50 ? 'orange' : ''} ${data?.avg_score < 50 ? 'red' : ''}`}>
                        <path className="circle-bg"
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                        <path className="circle" strokeDasharray={`${data?.avg_score}, 100`}
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                        <text x="18" y="20.35" className="percentage">{data?.avg_score}%</text>
                    </svg>) : (
                    <svg viewBox="0 0 36 36"
                         className={`circular-chart ${0 >= 80 ? 'green' : ''} ${0 < 80 && 0 >= 50 ? 'orange' : ''} ${0 < 50 ? 'red' : ''}`}>
                        <path className="circle-bg"
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                        <path className="circle" strokeDasharray={`${0}, 100`}
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                        <text x="18" y="20.35" className="percentage">{0}%</text>
                    </svg>
                )
                }
            </div>
        </TeacherIndex>
    )
}

export default TeacherDashboard