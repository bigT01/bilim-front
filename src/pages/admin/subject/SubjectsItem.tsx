import AdminIndex from "../index";
import {Link, useParams} from "react-router-dom";

import '../styles/subjectItem.scss'
import {useDispatch, useSelector} from "react-redux";
import LessonsItem from "../../../components/lesson/LessonsItem";
import {useEffect} from "react";
import {fetchSubjectLesson} from "../../../Redux/slices/lessons";

const SubjectsItem = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const {lessons} = useSelector((state:any) => state.subjectLessons)

    useEffect(() =>{
        // @ts-ignore
        dispatch(fetchSubjectLesson(id))
    } ,[])


    return(
        <AdminIndex>
            <div className="subject_item_wrapper">
                <div className="header">
                    <h2>Course Name</h2>
                    <Link to={`/admin/subject/${id}/addLesson`} className={'btn_add'}>добавить урок</Link>
                </div>

                <div className="lessons_wrapper">
                    {lessons.items.map((elem: any) => (
                        <LessonsItem key={elem.lesson_id} id={elem.lesson_id} name={elem.title} added={elem.preview_image}/>
                    ))}
                </div>
            </div>
        </AdminIndex>
    )
}

export default SubjectsItem