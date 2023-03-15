import StudentIndex from "./index";
import {Link, useParams} from "react-router-dom";
import LessonsItem from "../../components/lesson/LessonsItem";
import {useEffect, useState} from "react";
import axios from "../../axios";
import {Edit, Trash} from "../../components/assets/MainAssets";
import StudentLessonItem from "../../components/StudentLessonItem/StudentLessonItem";
import {UseAuthContext} from "../../context/AuthContext";


const LessonStudent = () => {
    const {userId} = UseAuthContext()
    const {id} = useParams()
    const [data, setData] = useState<any>()
    const [grades, setGrades] = useState([])

    useEffect(() => {
        if(userId){
            axios.get(`/course/${id}/lesson`)
                .then(res => {
                    setData(res.data)
                })
                .catch(err => {
                    console.log(err)
                })
            axios.get(`/user/${userId}/grade`)
                .then(res => {
                    setGrades(res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    },[userId])

    useEffect(() => {
        if(grades[0] && data[0]){
            const filteredData = data.map((elem:any) => {
                const isGraded = grades.some((item: any) => item.lesson_id === elem.lesson_id);
                return { ...elem, isGraded };
            })
            setData(filteredData)
        }
    }, [grades])


    return(
        <StudentIndex>
            <div className="subject_item_wrapper">
                <div className="header">
                    <h2 className='font-bold text-2xl mb-10'>Уроки</h2>
                </div>

                <div className="lessons_wrapper">
                    {Array.isArray(data) && data?.map((elem: any) => (
                        <StudentLessonItem lesson_id={elem.lesson_id} title={elem.title} preview_image={elem.preview_image} start_time={elem.start_time} end_time={elem.end_time} isGraded={elem?.isGraded}/>
                    ))}
                </div>
            </div>
        </StudentIndex>
    )
}
export default LessonStudent