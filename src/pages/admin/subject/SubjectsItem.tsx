import AdminIndex from "../index";
import {Link, useParams} from "react-router-dom";

import '../styles/subjectItem.scss'
import {useSelector} from "react-redux";
import LessonsItem from "../../../components/lesson/LessonsItem";

const SubjectsItem = () => {
    const {id} = useParams()
    const {lessons} = useSelector((state:any) => state.subjectLessons)

    return(
        <AdminIndex>
            <div className="subject_item_wrapper">
                <div className="header">
                    <h2>Course Name</h2>
                    <Link to={`/admin/subject/${id}/addLesson`} className={'btn_add'}>добавить урок</Link>
                </div>

                <div className="lessons_wrapper">
                    {lessons.items.map((elem: any) => (
                        <LessonsItem key={elem.id} id={elem.id} name={elem.name} added={elem.addedTime}/>
                    ))}
                </div>
            </div>
        </AdminIndex>
    )
}

export default SubjectsItem