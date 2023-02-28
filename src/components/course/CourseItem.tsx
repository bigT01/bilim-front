import {useEffect, useRef, useState} from "react";
import {Edit, Trash, UserAdd} from "../assets/MainAssets";
import {Link} from "react-router-dom";
import {CourseItemProps} from "../../constants/Interfaces";
import {useDispatch} from "react-redux";
import {fetchRemoveSubjects} from "../../Redux/slices/subject";



const CourseItem = ({id, name, num_lessons, num_students}:CourseItemProps) => {
    const [isClick, setIsClick] = useState(false)
    const dispatch = useDispatch()
    const more = useRef(null);


    useEffect(() => {
        function handleClickOutside(event: any) {
            // @ts-ignore
            if (more.current && !more.current.contains(event.target)) {
                setIsClick(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [more, isClick]);

    const handleRemove = (id:string) =>{
        // @ts-ignore
        dispatch(fetchRemoveSubjects(id))
    }
    return(
        <div className="course">
            <div className="picture">
                <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 21.5C7.8 20.3667 6.425 19.5 4.875 18.9C3.325 18.3 1.7 18 0 18V7C1.68333 7 3.3 7.304 4.85 7.912C6.4 8.52067 7.78333 9.4 9 10.55C10.2167 9.4 11.6 8.52067 13.15 7.912C14.7 7.304 16.3167 7 18 7V18C16.2833 18 14.6543 18.3 13.113 18.9C11.571 19.5 10.2 20.3667 9 21.5ZM9 18.9C10.05 18.1167 11.1667 17.4917 12.35 17.025C13.5333 16.5583 14.75 16.25 16 16.1V9.2C14.7833 9.41667 13.5877 9.854 12.413 10.512C11.2377 11.1707 10.1 12.05 9 13.15C7.9 12.05 6.76267 11.1707 5.588 10.512C4.41267 9.854 3.21667 9.41667 2 9.2V16.1C3.25 16.25 4.46667 16.5583 5.65 17.025C6.83333 17.4917 7.95 18.1167 9 18.9ZM9 8C7.9 8 6.95833 7.60833 6.175 6.825C5.39167 6.04167 5 5.1 5 4C5 2.9 5.39167 1.95833 6.175 1.175C6.95833 0.391667 7.9 0 9 0C10.1 0 11.0417 0.391667 11.825 1.175C12.6083 1.95833 13 2.9 13 4C13 5.1 12.6083 6.04167 11.825 6.825C11.0417 7.60833 10.1 8 9 8ZM9 6C9.55 6 10.021 5.804 10.413 5.412C10.8043 5.02067 11 4.55 11 4C11 3.45 10.8043 2.979 10.413 2.587C10.021 2.19567 9.55 2 9 2C8.45 2 7.97933 2.19567 7.588 2.587C7.196 2.979 7 3.45 7 4C7 4.55 7.196 5.02067 7.588 5.412C7.97933 5.804 8.45 6 9 6Z" fill="#82ACF5"/>
                </svg>
            </div>
            <div className="name">
                <Link to={`/admin/subjects/${id}`} className="course_name">{name}</Link>
                <p className="course_lessons">{num_lessons} lessons</p>
            </div>
            <div className="student_number">
                <p>{num_students}</p>
            </div>
            <div className="btn_wrapper">
                <button onClick={() => setIsClick(true)} >...</button>
                <div className={`more ${isClick? 'show': 'disable'}`} ref={more}>
                    {isClick && <>
                        <Link to={`/admin/subjects/${id}/adduser`} className='add'><UserAdd/> изменить участников</Link>
                        <button onClick={() => handleRemove(id)} className='delete'><Trash/> удалить курс</button>
                    </>}
                </div>
            </div>
        </div>
    )
}

export default CourseItem