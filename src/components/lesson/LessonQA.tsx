import {Button, Input, InputNumber, Radio, RadioChangeEvent, Select, Space} from "antd";
import {useEffect, useState} from "react";
import {Trash} from "../assets/MainAssets";

const { Option } = Select;
const LessonQA = () =>{
    const [radioQuestions, setRadioQuestions] = useState([{value: 1, variant: 'Option 1'}])
    const [value, setValue] = useState(1);
    const [typeQuestion, setTypeQuestion] = useState<'checkbox' | 'drop'>('checkbox')
    const [Property, setProperty] = useState([{property:1, variant: 'option 1'}])


    const onChange = (e: RadioChangeEvent) => {
        setValue(e.target.value)
        if(e.target.value === 1000){
            setRadioQuestions(old => [...old, {value:(radioQuestions.length + 1), variant: `Option ${radioQuestions.length+1}`}])
            setValue(1)
        }
    };

    const addVariantHandler = () => {
        setProperty(old => [...old, {property: (Property.length+1), variant: `option ${(Property.length+1)}`}])
    }
    // @ts-ignore
    const removeVariantHandler = (e) => {
        if(Property.length > 1){
            const name = e.target.getAttribute("name")
            console.log(name)
            setProperty(Property.filter(item => item.variant !== name));
        }

    }



    return(
        <>
            <div className="type_of_quiz">
                <p>Выберите тип Квиза:</p>
                <Select defaultValue={typeQuestion} onChange={e => setTypeQuestion(e)}>
                    <Option value="checkbox">checkbox</Option>
                    <Option value="drop">drop</Option>
                </Select>
            </div>
            <div className="quiz_qa">
                {typeQuestion === 'checkbox' ? <>
                    <Input placeholder={'Напишите вопрос ...'} style={{width: '70%', height: 45, marginBottom: 20}}/>
                    <div className="variant_list">
                        <Radio.Group onChange={onChange} value={value}>
                            <Space direction="vertical">
                                <p>правильный вариант укажите</p>
                                {radioQuestions.map(elem => (
                                    <Radio value={elem.value}><Input placeholder={elem.variant} defaultValue={elem.variant} style={{width: '120%'}}/></Radio>
                                ))}

                                <Radio value={1000}>more</Radio>
                            </Space>
                        </Radio.Group>
                    </div>
                </>: null}
                {typeQuestion === 'drop' ? <>
                    <Input placeholder={'Напишите инструкцую'} style={{width: '70%', height: 20, marginBottom: 20}}/>
                    <Input placeholder={'Напишите вопрос ...'} style={{width: '100%', height: 45, marginBottom: 40}}/>
                    <div className="variant_list">

                        {Property.map((elem) => (
                            <div className="drop_variant_wrapper">
                                <Input/>
                                <Button className='remove_variant' name={elem.variant} onClick={removeVariantHandler}>
                                    <Trash color={'#ffffff'}/>
                                </Button>
                            </div>
                        ))}
                    </div>
                    <Button className='add_variant' onClick={addVariantHandler}>
                        + добавить вариант
                    </Button>

                </>: null}

            </div>

        </>
    )
}

export default LessonQA