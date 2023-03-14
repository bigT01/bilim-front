import StudentIndex from "./index";
import './student.scss'
import {UseAuthContext} from "../../context/AuthContext";
import {useEffect, useState} from "react";
import axios from "../../axios";
import StudentSubjectItem from "../../components/StudentSubjectItem/StudentSubjectItem";


const SubjectStudent = () => {
    const {userId} = UseAuthContext()
    const [subjects, setSubjects] = useState([])


    useEffect(() => {
        if(userId){
            axios.get(`/course/student/${userId}`)
                .then(res => {
                    setSubjects(res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [userId])

    return(
        <StudentIndex>
            <h1 className="font-bold text-2xl mb-10">Ваши предметы</h1>

            <div className="flex flex-col gap-5">
                <div className="flex ">
                    <p className='w-1/3 text-xl font-bold'>Называние курса</p>
                    <p className='w-2/3 text-xl font-bold'>Количество уроков</p>
                </div>
                <div className="flex flex-col gap-5">
                    {subjects.map((item: any) => (
                        <StudentSubjectItem key={item.id} id={item.id} name={item.name} lessons={item.num_lessons}/>
                    ))}
                </div>
            </div>


        </StudentIndex>
    )
}

export default SubjectStudent