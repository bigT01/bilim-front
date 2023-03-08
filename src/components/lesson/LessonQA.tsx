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

const { Option } = Select;
type LessonQAProps = {
    id:string,
    quizId: string
}


const LessonQA = ({id, quizId}:LessonQAProps) =>{
    const {quiz} = useSelector((state:any) => state.quiz)

    const [typeQuestion, setTypeQuestion] = useState<'checkbox' | 'drop' | 'multiple'>('checkbox')
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
                            setTypeQuestion(res.data.type)
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


    return(
        !isLoaded ? <h1>loading</h1> :
        <>
            {id === '1' ? (
                <MainQuiz quizId={quizId}/>
            ) : <>
                <div className="type_of_quiz">
                    <p>Выберите тип Квиза:</p>
                    <Select defaultValue={typeQuestion} onChange={e => setTypeQuestion(e)}>
                        <Option value="checkbox">checkbox</Option>
                        <Option value="drop">drop</Option>
                        <Option value="multiple">multiple</Option>
                    </Select>
                </div>
                <div className="quiz_qa">
                    {typeQuestion === 'checkbox' ? <>
                        <SimpleQuestion id={id} typeQuestion={typeQuestion}/>
                    </>: null}
                    {/*{typeQuestion === 'drop' ? <>*/}
                    {/*    <Input placeholder={'Напишите инструкцую'} style={{width: '70%', height: 20, marginBottom: 20}}/>*/}
                    {/*    <Input placeholder={'Напишите вопрос ...'} style={{width: '100%', height: 45, marginBottom: 40}}/>*/}
                    {/*    <div className="variant_list">*/}

                    {/*        {Property.map((elem) => (*/}
                    {/*            <div className="drop_variant_wrapper">*/}
                    {/*                <Input/>*/}
                    {/*                <Button className='remove_variant' name={elem.variant} onClick={removeVariantHandler}>*/}
                    {/*                    <Trash color={'#ffffff'}/>*/}
                    {/*                </Button>*/}
                    {/*            </div>*/}
                    {/*        ))}*/}
                    {/*    </div>*/}
                    {/*    <Button className='add_variant' onClick={addVariantHandler}>*/}
                    {/*        + добавить вариант*/}
                    {/*    </Button>*/}

                    {/*</>: null}*/}

                </div>
            </>}
        </>
    )
}

export default LessonQA