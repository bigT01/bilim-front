import StudentIndex from "./index";
import './student.scss'
import {Check, SlideArrow} from "../../components/assets/MainAssets";
import {Link} from "react-router-dom";
import {UseAuthContext} from "../../context/AuthContext";
import {useEffect, useState} from "react";
import axios from "../../axios";
import StudentSubjectItem from "../../components/StudentSubjectItem/StudentSubjectItem";

const SubjectStudent = () => {
    const {userId} = UseAuthContext()
    const [subjectId, setSubjectId] = useState([])

    useEffect(() => {
        if(userId){
            axios.get(`/course/user/${userId}`)
                .then(res => {
                    setSubjectId(res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [userId])

    return(
        <StudentIndex>
            <div className="subject_student">
                <h1 style={{marginBottom: '2rem'}}>Ваши предметы</h1>
                <div className="lessons_wrapper">
                    {subjectId.map((item:any) => (
                        <StudentSubjectItem key={item.course_id} id={item.course_id} />
                    ))}
                </div>
            </div>
        </StudentIndex>
    )
}

export default SubjectStudent