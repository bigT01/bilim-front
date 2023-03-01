import AdminIndex from "./index";
import './styles/adminSubjects.scss'
import CourseItem from "../../components/course/CourseItem";
import {useDispatch, useSelector} from "react-redux";
import {CourseItemProps} from "../../constants/Interfaces";
import {useEffect} from "react";
import {fetchSubjects} from "../../Redux/slices/subject";
import {Link} from "react-router-dom";

const Subjects = () =>{
    const dispatch = useDispatch()
    const {subjects} = useSelector((state:any) => state.subjects)

    useEffect(() => {
        // @ts-ignore
        dispatch(fetchSubjects())
    }, [])

    return(
        <AdminIndex>
            <div className="admin_subject">
                <div className="table_wrapper">
                    <div className="header">
                        <div className="search_wrapper">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.9268 17.0401L20.4 20.4001M19.28 11.4401C19.28 15.77 15.7699 19.2801 11.44 19.2801C7.11006 19.2801 3.59998 15.77 3.59998 11.4401C3.59998 7.11019 7.11006 3.6001 11.44 3.6001C15.7699 3.6001 19.28 7.11019 19.28 11.4401Z" stroke="black" stroke-width="2" stroke-linecap="round"/>
                            </svg>
                            <input type="text" className={"search_input"}/>
                        </div>
                        <Link to={'/admin/subjects/addSubject'} className="btn_add">
                            +
                        </Link>
                    </div>
                    <div className="courses_wrapper">
                        <div className="header">
                            <p className='name'>Называние курса</p>
                            <p className='count'>Количество студенов</p>
                        </div>
                        {subjects.items.map((elem: CourseItemProps) => (
                            <CourseItem key={elem.id} id={elem.id} name={elem.name} num_lessons={elem.num_lessons} num_students={elem.num_students}/>
                        ))}
                    </div>
                </div>
            </div>
        </AdminIndex>
    )
}

export default Subjects