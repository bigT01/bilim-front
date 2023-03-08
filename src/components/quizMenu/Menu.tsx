import s from './QuizMenu.module.scss'
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchCreateQuestion, fetchQuestion} from "../../Redux/slices/questions";

type MenuQuizProps = {
    quizId: string,
    setValue: ((id:string) => void)
}

const MenuQuiz = ({quizId, setValue}:MenuQuizProps) => {
    const {question} = useSelector((state:any) => state.question)
    const [data, setData] = useState<any>(question.items)
    const [activeBtn, setActiveBtn] = useState('1')
    const dispatch = useDispatch()

    useEffect(() => {
        // @ts-ignore
        dispatch(fetchQuestion(quizId))
    }, [])

    useEffect(() => {
        if(activeBtn === '-1'){
            // @ts-ignore
            dispatch(fetchCreateQuestion(quizId))
        }
    }, [activeBtn])

    useEffect(() => {
        if(question.status === 'loaded'){
            setData(question.items)
        }
    }, [question])


    return(
        <div className={s.menuWrapper}>
            <button className={`${s.Btn} ${activeBtn === '1' ?s.active: null}`} onClick={() => {
                setValue('1')
                setActiveBtn('1')}}>Квиз</button>
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