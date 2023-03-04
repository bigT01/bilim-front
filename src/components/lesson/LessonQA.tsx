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

const { Option } = Select;
type LessonQAProps = {
    id:string,
    quizId: string
}


const LessonQA = ({id, quizId}:LessonQAProps) =>{
    const [typeQuestion, setTypeQuestion] = useState<'checkbox' | 'drop' | 'multiple'>('checkbox')
    const [isLoaded, setIsLoaded] = useState(false)
    const [time, setTime] = useState('')
    const [title, setTitle] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        if(id === '1'){
            axios.get(`/quiz/${quizId}`)
                .then(res => {
                    if(res.data.title && res.data.duration){
                        setTime(res.data.duration)
                        setTitle(res.data.title)
                    }
                    setIsLoaded(true)
                })
                .catch(err =>{
                    console.log(err)
                    message.error('не удалось найти квиз')
                })
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
    }, [id])

    const onSaveHandler = () => {
        axios.put(`/quiz/${quizId}`, {
            title: title,
            duration: time,
            total_points: 100,
            is_active: false
        })
            .then(() =>{
                message.success('квиз успешно было обновлено')
            })
            .catch(() =>{
                message.error('ошибка сети')
            })

    }

    const onDeleteHandler = () =>{
        axios.delete(`/quiz/${quizId}`)
            .then(() =>{
                message.success('квиз успешно было удалено')
                navigate('/admin/subjects')
            })
            .catch(() =>{
                message.error('ошибка сети')
            })
    }

    const onChangeTime = (value: TimePickerProps['value'], dateString: string,) => {
        setTime(dateString)
    };

    return(
        !isLoaded ? <h1>loading</h1> :
        <>
            {id === '1' ? (
                <>
                    <div className='quiz_information'>

                        <label style={{width: '280px'}}>Дайте название квизу</label>
                        <Input value={title} onChange={e => setTitle(e.target.value)}/>

                        <label style={{width: '280px'}}>Сколько оно длиться</label>

                        {time? <TimePicker defaultValue={dayjs(time, 'HH:mm:ss')}  onChange={onChangeTime}/> :<TimePicker onChange={onChangeTime}/>}

                    </div>
                    <Button style={{backgroundColor: '#00bb00', color: "#ffffff", marginRight: 30}} onClick={() => onSaveHandler()}>Сохранить</Button>
                    <Button type="primary" danger onClick={() =>onDeleteHandler()}>Удалить</Button>
                </>
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