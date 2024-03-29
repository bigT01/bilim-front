import StudentIndex from "./index";
import './student.scss'
import {UseAuthContext} from "../../context/AuthContext";
import {useEffect, useState} from "react";
import axios from "../../axios";

const DashboardStudent =() =>{
    const {userId} = UseAuthContext()
    const [gradeData, setGradeData] = useState([])

    useEffect(() => {
        axios.get(`/user/${userId}/grade/lessons`)
            .then(res => {
                setGradeData(res.data)
            })
    }, [])


    return(
        <StudentIndex>
            <h1 className="font-bold text-2xl mb-10">Оценки</h1>
            <div className="grid grid-cols-4 gap-10">
                {gradeData[0] && gradeData.map((element:any) => (
                    <div key={element.id} className={`shadow-xl py-2 px-4 w-full rounded-xl ${element.grade >= 80 ? 'bg-[#afffc133]' : ''} ${element.grade < 80 && element.grade >= 50? 'bg-[#ffdcaf33]' : ''} ${element.grade < 50? 'bg-[#ffafaf33]' : ''}`}>
                        <div className="flex justify-between">
                            <p>{element.title}</p>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="percent">
                                <div className="single-chart">
                                    <svg viewBox="0 0 36 36"
                                         className={`circular-chart ${element.grade >= 80 ? 'green' : ''} ${element.grade < 80 && element.grade >= 50 ? 'orange' : ''} ${element.grade < 50 ? 'red' : ''}`}>
                                        <path className="circle-bg"
                                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                        <path className="circle" strokeDasharray={`${element.grade}, 100`}
                                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                        <text x="18" y="20.35" className="percentage">{element.grade}%</text>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </StudentIndex>
    )
}

export default DashboardStudent;