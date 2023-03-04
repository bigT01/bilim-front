import AdminIndex from "../index";
import '../styles/addQuiz.scss'
import LessonQA from "../../../components/lesson/LessonQA";
import {useParams} from "react-router-dom";
import MenuQuiz from "../../../components/quizMenu/Menu";
import {useEffect, useState} from "react";


const AddQuiz = () => {
    const {quizId} = useParams()
    const [value, setValue] = useState('')


    return(
        <AdminIndex>
            <div className="addQuiz_wrapper">
                {quizId?<MenuQuiz quizId={quizId} setValue={setValue}/>:<>Loading...</>}
                <div className="lesson_body">
                    <LessonQA key={value} id={value}/>
                </div>
            </div>
        </AdminIndex>
    )
}

export default AddQuiz