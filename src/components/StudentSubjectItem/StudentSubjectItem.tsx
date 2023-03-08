import {useEffect, useState} from "react";
import axios from "../../axios";
import {Link} from "react-router-dom";

type StudentSubjectItemProps = {
    id:string
}

const StudentSubjectItem = ({id}:StudentSubjectItemProps) =>{
    const [data, setData] = useState<any>()

    useEffect(() => {
        if(id){
            axios.get(`/courseId/${id}`)
                .then(res => {
                    setData(res.data[0])
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [id])



    return(
        <div className="student_subject_item">
            <div className="lesson_body">
                <div className="body_information">
                    <Link to={`/student/subject/lesson/${data?.id}`} className='lesson_name'>{data?.name}</Link>
                    <p className={'description'}>{data?.description}</p>
                </div>
            </div>
        </div>
    )
}

export default StudentSubjectItem