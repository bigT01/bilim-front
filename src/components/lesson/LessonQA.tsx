import {
    Button, DatePicker,
    Input,
    InputNumber,
    message,
    Radio,
    RadioChangeEvent,
    Select,
    Space,
    TimePicker,
    TimePickerProps
} from "antd";
import {useEffect, useState} from "react";
import {Trash} from "../assets/MainAssets";
import axios from "../../axios";
import SimpleQuestion from "../adminQuestionTypes/SimpleQuestion";
import {DatePickerProps, RangePickerProps} from "antd/es/date-picker";
import dayjs, {Dayjs} from "dayjs";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchQuiz} from "../../Redux/slices/quiz";
import MainQuiz from "../quizMenu/MainQuiz";
import MultipleQuestion from "../adminQuestionTypes/MultipleQuestion";
import DropQuestion from "../adminQuestionTypes/DropQuestion";
import SelectQuestion from "../adminQuestionTypes/SelectQuestion";

const { Option } = Select;
type LessonQAProps = {
    id:string,
    quizId: string
}


const LessonQA = ({id, quizId}:LessonQAProps) =>{
    const {quiz} = useSelector((state:any) => state.quiz)
    const {question} = useSelector((state:any) => state.question)
    const [typeQuestion, setTypeQuestion] = useState<'checkbox' | 'drop' | 'multiple' | 'select'>('checkbox')
    const [isDisable, setIsDisable] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)
    const navigate = useNavigate()

    const dispatch = useDispatch()

    useEffect(() => {
        if(quizId){
            if(id === '1'){
                // @ts-ignore
                dispatch(fetchQuiz(quizId))
            }
            else{
                axios.get(`/question/${id}`)
                    .then(res => {
                        setIsLoaded(true)
                        if(res.data.type){
                            setTypeQuestion(res.data.type.trim())
                            setIsDisable(true)
                        }
                    })
                    .catch(err => {
                        console.log(err)
                        message.error('не удалось загрузить вопрос')
                    })
            }
        }
    }, [id])

    useEffect(() => {
        if(quiz.status === 'loaded'){
            setIsLoaded(true)
        }
        if(quiz.status === 'deleted'){
            navigate('/admin/dashboard')
        }
    }, [quiz])

    useEffect(() => {
        if(id !== '1'){
            const certainQuestion = question.items.filter((item:any) => item.question_id === id)
            if(certainQuestion[0]){
                if(certainQuestion[0].type){
                    setTypeQuestion(certainQuestion[0].type.trim())
                }
            }
        }
    }, [question])


    return(
        !isLoaded ? <h1>loading</h1> :
        <>
            {id === '1' ? (
                <MainQuiz quizId={quizId}/>
            ) : <>
                <div className="type_of_quiz">
                    <p>Выберите тип Квиза:</p>
                    <Select disabled={isDisable} value={typeQuestion} onChange={e => setTypeQuestion(e)}>
                        <Option value="checkbox">checkbox</Option>
                        <Option value="drop">drop</Option>
                        <Option value="multiple">multiple</Option>
                        <Option value="select">select</Option>
                    </Select>
                </div>
                <div className="quiz_qa">
                    {typeQuestion === 'checkbox' ? <>
                        <SimpleQuestion id={id} typeQuestion={typeQuestion} />
                    </>: null}
                    {typeQuestion === 'multiple' ? <>
                        <MultipleQuestion id={id} typeQuestion={typeQuestion} />
                    </>: null}
                    {typeQuestion === 'drop' ? <>
                        <DropQuestion id={id} typeQuestion={typeQuestion} />
                    </>: null}
                    {typeQuestion === 'select' ? <>
                        <SelectQuestion id={id} typeQuestion={typeQuestion} />
                    </>: null}
                </div>
            </>}
        </>
    )
}

export default LessonQA