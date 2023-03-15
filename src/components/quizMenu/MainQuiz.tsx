import axios from "../../axios";
import {Button, Input, message, TimePicker} from "antd";
import dayjs from "dayjs";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {fetchDeleteQuiz, fetchSaveQuiz} from "../../Redux/slices/quiz";

type MainQuizProps = {
    quizId: string
}

const MainQuiz = ({quizId}: MainQuizProps) => {
    const {quiz} = useSelector((state:any) => state.quiz)
    const [title, setTitle] = useState('')
    const dispatch = useDispatch()


    useEffect(() => {
        setTitle(quiz.items?.title)
    }, [quiz])

    const onSaveHandler = () => {
        const params = {
            id: quizId,
            title: title
        }
        // @ts-ignore
        dispatch(fetchSaveQuiz(params))
    }

    const onDeleteHandler = () =>{
        // @ts-ignore
        dispatch(fetchDeleteQuiz(quizId))
    }

    return(
        <>
            <div className='quiz_information'>
                <label style={{width: '280px'}}>Дайте название квизу</label>
                <Input value={title} onChange={e => setTitle(e.target.value)}/>

            </div>
            <Button style={{backgroundColor: '#00bb00', color: "#ffffff", marginRight: 30}} onClick={() => onSaveHandler()}>Сохранить</Button>
            <Button type="primary" danger onClick={() =>onDeleteHandler()}>Удалить</Button>
        </>
    )
}

export default MainQuiz