import './styles/adminDashboard.scss'
import {useEffect, useRef, useState} from "react";
import StudentsChart from "../../components/Charts/StudentsChart";
import {More} from "../../components/assets/MainAssets";
import AdminIndex from "./index";

const Dashboard = () =>{
    const [grade, setGrade] = useState(11)
    const [IsMoreGrade, setIsMoreGrade] = useState(false)


    const [data, setData] = useState([
        {
            "class": "11A",
            "average grade": 78,
        },
        {
            "class": "11B",
            "average grade": 90,
        },
        {
            "class": "11C",
            "average grade": 88,
        },
        {
            "class": "11D",
            "average grade": 60,
        },
    ])

    useEffect(() =>{

    }, [])


    useEffect(() =>{
        if(grade === 5){
            setData([
                {
                    "class": "5A",
                    "average grade": 44,
                },
                {
                    "class": "5G",
                    "average grade": 90,
                },
                {
                    "class": "5L",
                    "average grade": 75,
                },
                {
                    "class": "5P",
                    "average grade": 69,
                },
            ])
        }
        if(grade === 8){
            setData([
                {
                    "class": "8A",
                    "average grade": 90,
                },
                {
                    "class": "8G",
                    "average grade": 88,
                },
                {
                    "class": "8L",
                    "average grade": 67,
                },
                {
                    "class": "8P",
                    "average grade": 55,
                },
                {
                    "class": "8C",
                    "average grade": 44,
                },
                {
                    "class": "8B",
                    "average grade": 85,
                },
            ])
        }
        if(grade === 10){
            setData([
                {
                    "class": "10A",
                    "average grade": 54,
                },
                {
                    "class": "10G",
                    "average grade": 94,
                },
                {
                    "class": "10L",
                    "average grade": 100,
                },
                {
                    "class": "10P",
                    "average grade": 87,
                },
            ])
        }
        if(grade === 11){
            setData([
                {
                    "class": "11A",
                    "average grade": 78,
                },
                {
                    "class": "11B",
                    "average grade": 90,
                },
                {
                    "class": "11C",
                    "average grade": 88,
                },
                {
                    "class": "11D",
                    "average grade": 60,
                },
            ])
        }
    }, [grade])
    return(
        <AdminIndex>
            <div className='admin_dashboard'>
                <h3 className='header'>Dashboard</h3>

                <div className="card_wrapper">
                    <div className="card">
                        <div className="header">
                            <h3>Количество учеников</h3>
                        </div>
                        <div className="body">
                            <h2>1000</h2>
                        </div>
                    </div>
                    <div className="card">
                        <div className="header">
                            <h3>Количество преподователей</h3>
                        </div>
                        <div className="body">
                            <h2>167</h2>
                        </div>
                    </div>
                    <div className="card">
                        <div className="header">
                            <h3>Количество учеников</h3>
                        </div>
                        <div className="body">
                            <h2>1000</h2>
                        </div>
                    </div>
                </div>
                <div className="chart_wrapper">
                    <div className="chart" style={{width:500, height: 400}}>
                        <StudentsChart data={data}/>
                    </div>
                    <div className="grade_btn_wrapper">
                        <label>Выберите классы который вы хотите уведить</label>
                        <button className={'grade_btn'} onClick={() => setIsMoreGrade(oldData => !oldData)}>
                            Класс 11
                            <span className={'more'}>
                            <More />
                        </span>
                        </button>
                        {IsMoreGrade && <div className={'select_more'}>
                            <button className={'select_btn'} onClick={() => setGrade(5)}>Класс 5</button>
                            <button className={'select_btn'} onClick={() => setGrade(8)}>Класс 8</button>
                            <button className={'select_btn'} onClick={() => setGrade(10)}>Класс 10</button>
                            <button className={'select_btn'} onClick={() => setGrade(11)}>Класс 11</button>
                        </div>}
                    </div>
                </div>
            </div>
        </AdminIndex>
    )
}

export default Dashboard