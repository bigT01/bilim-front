import {Button, Input, message, Radio, RadioChangeEvent, Space} from "antd";
import {useEffect, useState} from "react";
import axios from "../../axios";

type LessonQAProps = {
    id:string,
    typeQuestion: 'checkbox' | 'drop' | 'multiple'
}
const SimpleQuestion = ({id, typeQuestion}:LessonQAProps) => {
    const [radioQuestions, setRadioQuestions] = useState([{value: 1, variant: 'Option 1'}])
    const [value, setValue] = useState(1);
    const [question, setQuestion] = useState('')


    useEffect(() => {
        axios.get(`/question/${id}`)
            .then(res => {
                if(res.data.options && res.data.correct_answer && res.data.question){
                    const options = JSON.parse(res.data.options)
                    const correct_answer = JSON.parse(res.data.correct_answer)
                    console.log(correct_answer)
                    setRadioQuestions(options)
                    setValue(correct_answer)
                    setQuestion(res.data.question)
                }
            })
            .catch(err => {
                console.log(err)
                message.error('ошибка сети')
            })
    }, [])


    const onChange = (e: RadioChangeEvent) => {
        setValue(e.target.value)
        if(e.target.value === 1000){
            setRadioQuestions(old => [...old, {value:(radioQuestions.length + 1), variant: `Option ${radioQuestions.length+1}`}])
            setValue(old => 1)
        }
    };

    // @ts-ignore
    const QuestionHandler = (e, id) => {
        setRadioQuestions(prevQuestions => {
            return prevQuestions.map(question => {
                if (question.value === id) {
                    return { ...question, variant: e.target.value };
                } else {
                    return question;
                }
            });
        });
    }

    const saveHandler = () =>{
        const questionJSON = JSON.stringify(radioQuestions).trim()
        const answerJSON = JSON.stringify(value).trim()

        axios.put(`/question/${id}`, {
            question: question.trim(),
            options:questionJSON,
            correct_answer: answerJSON,
            type: typeQuestion
        })
            .then(res => {
                console.log(res)
                message.success('вопрос было обновлено')
            })
            .catch(err =>{
                console.log(err)
                message.error('ошибка сервера')
            })

    }

    const deleteQuestionHandler = () =>{
        axios.delete(`/question/${id}`)
            .then(() => {message.success('вопрос успешно удалено')})
            .catch(() => {message.error('ошибка сервера попробуйте позднее')})
    }


    return (
        <>
            <Input placeholder={'Напишите вопрос ...'} onChange={e =>setQuestion(e.target.value)} value={question} style={{width: '70%', height: 45, marginBottom: 20}}/>
            <div className="variant_list">
                <Radio.Group onChange={onChange} value={value}>
                    <Space direction="vertical">
                        <p>правильный вариант укажите</p>
                        {radioQuestions.map(elem => (
                            <Radio value={elem.value}><Input onChange={e => QuestionHandler(e, elem.value)} placeholder={elem.variant} value={elem.variant} style={{width: '120%'}}/></Radio>))}

                        <Radio value={1000}>more</Radio>
                    </Space>
                </Radio.Group>
            </div>
            <Button style={{backgroundColor: '#00bb00', color: "#ffffff", marginRight: 30}} onClick={() => saveHandler()}>Сохранить</Button>
            <Button type="primary" danger onClick={e => deleteQuestionHandler()}>Удалить</Button>
        </>
    );
}

export default SimpleQuestion