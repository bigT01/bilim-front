import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

type StudentLessonItemProps = {
    lesson_id: string,
    title: string,
    preview_image: string,
    start_time:string,
    end_time:string,
    isGraded?: boolean
}

const StudentLessonItem = ({lesson_id, start_time, end_time, title, preview_image, isGraded}:StudentLessonItemProps) =>{
    const [status, setStatus] = useState<'soon' | 'active' | 'disable'>('active')
    useEffect(() => {
        const StartTime = new Date(start_time)
        const EndTime = new Date(end_time)
        const now = new Date()
        if (now.getTime() > EndTime.getTime()) {
            setStatus('disable');
        }
        if (now.getTime() < StartTime.getTime()) {
            setStatus('soon');
        }
        if (now.getTime() > StartTime.getTime() && now.getTime() < EndTime.getTime()){
            setStatus('active');
        }
    }, [])



    return(
        <div className='relative'>
            <div className={`lesson_item ${isGraded? 'opacity-40' : 'opacity-100'} `}>
                <div className="lesson_picture_wrapper">
                    <img src={`http://localhost:4444${preview_image}`} alt="pictureLesson"/>
                </div>
                <div className="lesson_body">
                    <div className="body_information">
                        <Link to={`/student/subject/${lesson_id}`} className='lesson_name' style={{textDecoration: 'none', color: 'Black', fontWeight: '700'}}>{title}</Link>
                    </div>
                </div>

            </div>
            {isGraded && (
                <div className='absolute left-0 top-0 w-full h-full z-10 flex justify-center items-center'>
                    <p className='text-xl text-green-800 font-bold rotate-[-15deg]'>вы уже сдали эгзамен</p>
                </div>
            )}
        </div>
    )
}

export default StudentLessonItem