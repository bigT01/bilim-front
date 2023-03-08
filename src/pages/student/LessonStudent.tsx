import StudentIndex from "./index";
import {Link, useParams} from "react-router-dom";
import LessonsItem from "../../components/lesson/LessonsItem";
import {useEffect, useState} from "react";
import axios from "../../axios";
import {Edit, Trash} from "../../components/assets/MainAssets";


const LessonStudent = () => {
    const {id} = useParams()
    const [data, setData] = useState<any>()

    useEffect(() => {
        axios.get(`/course/${id}`)
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[])
    return(
        <StudentIndex>
            <div className="subject_item_wrapper">
                <div className="header">
                    <h2>Course Name</h2>
                </div>

                <div className="lessons_wrapper">
                    {data?.map((elem: any) => (
                        <div className="lesson_item">
                            <div className="lesson_picture_wrapper">
                                <img src={`http://localhost:4444${elem.preview_image}`} alt="pictureLesson"/>
                            </div>
                            <div className="lesson_body">
                                <div className="body_information">
                                    <Link to={`/student/subject/${elem.lesson_id}`} className='lesson_name' style={{textDecoration: 'none', color: 'blue'}}>{elem.title}</Link>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </StudentIndex>
    )
}
export default LessonStudent