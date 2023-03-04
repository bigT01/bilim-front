import {Button, Input, InputNumber, message, Radio, RadioChangeEvent, Select, Space} from "antd";
import {useEffect, useState} from "react";
import {Trash} from "../assets/MainAssets";
import axios from "../../axios";
import SimpleQuestion from "../adminQuestionTypes/SimpleQuestion";

const { Option } = Select;
type LessonQAProps = {
    id:string
}

const LessonQA = ({id}:LessonQAProps) =>{
    const [typeQuestion, setTypeQuestion] = useState<'checkbox' | 'drop' | 'multiple'>('checkbox')
    const [isLoaded, setIsLoaded] = useState(false)


    useEffect(() => {
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
    }, [])




    return(
        !isLoaded ? <h1>loading</h1> :
        <>
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
        </>
    )
}

export default LessonQA