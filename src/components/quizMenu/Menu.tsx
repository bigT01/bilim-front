import s from './QuizMenu.module.scss'
import {BiArrowToBottom, BiDownArrow} from "react-icons/bi";
import {BsArrowDown} from "react-icons/bs";
import AnimateHeight from "react-animate-height";
import {useEffect, useState} from "react";
import axios from "../../axios";
import {message} from "antd";

type MenuQuizProps = {
    quizId: string,
    setValue: ((id:string) => void)
}

const MenuQuiz = ({quizId, setValue}:MenuQuizProps) => {
    const [data, setData] = useState<any>()
    const [activeBtn, setActiveBtn] = useState('1')
    useEffect(() => {
        axios.get(`http://localhost:4444/api/${quizId}/question`)
            .then(res => setData(res.data))
            .catch(err => {
                console.log(err)
                message.error('ошибка сервера')
            })
    }, [])


    return(
        <div className={s.menuWrapper}>
            <button className={`${s.Btn} ${activeBtn === 'menu' ?s.active: null}`} onClick={() => {setActiveBtn('menu')}}>Квиз</button>
            {data ? data.map((item: any, index:number) =>(
                <button
                    className={`${s.Btn} ${activeBtn === item.question_id ?s.active: null}`}
                    key={item.question_id}
                    onClick={() => {
                        setValue(item.question_id)
                        setActiveBtn(item.question_id)
                    }}>Вопрос {index+1} </button>
            )) :null}
            <button className={s.Btn} onClick={() => {setActiveBtn('-1')}}>+ Добавить вопрос</button>
        </div>
    )
}

export default MenuQuiz