import './styles/adminDashboard.scss'
import {useEffect, useRef, useState} from "react";
import StudentsChart from "../../components/Charts/StudentsChart";
import {More} from "../../components/assets/MainAssets";
import AdminIndex from "./index";
import axios from "../../axios";

const Dashboard = () =>{
    const [data, setData] = useState([])
    const [lenStudent, setLenStudent] = useState(0)
    const [lenTeacher, setLenTeacher] = useState(0)
    const [lenCourse, setLenCourse] = useState(0)

    useEffect(() =>{
        axios.get('/statistic/user')
            .then(res => {
                setData(res.data)
            })
            .catch(err =>{console.log(err)})
        axios.get('/user/student')
            .then(res => {
                setLenStudent(res.data.length)
            })
            .catch(err =>{console.log(err)})
        axios.get('/user/teacher')
            .then(res => {
                setLenTeacher(res.data.length)
            })
            .catch(err =>{console.log(err)})
        axios.get('/course')
            .then(res => {
                setLenCourse(res.data.length)
            })
            .catch(err =>{console.log(err)})

    }, [])


    return(
        <AdminIndex>
            <div className='admin_dashboard'>
                <h3 className='font-bold text-2xl mb-10'>Главная страница</h3>

                <div className="card_wrapper ">
                    <div className="card shadow-2xl">
                        <div className="header">
                            <h3>Количество учеников</h3>
                        </div>
                        <div className="body">
                            <h2>{lenStudent}</h2>
                        </div>
                    </div>
                    <div className="card shadow-2xl">
                        <div className="header">
                            <h3>Количество преподователей</h3>
                        </div>
                        <div className="body">
                            <h2>{lenTeacher}</h2>
                        </div>
                    </div>
                    <div className="card shadow-2xl">
                        <div className="header">
                            <h3>Количество предметов</h3>
                        </div>
                        <div className="body">
                            <h2>{lenCourse}</h2>
                        </div>
                    </div>
                </div>
                <div className="chart_wrapper shadow-2xl">
                    <div className="chart" style={{width:500, height: 400}}>
                        <StudentsChart data={data}/>
                    </div>
                </div>
            </div>
        </AdminIndex>
    )
}

export default Dashboard