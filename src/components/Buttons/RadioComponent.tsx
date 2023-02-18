import {Radio} from "antd";
import {useState} from "react";

interface variantSelection{
    id: string,
    answer: string
}

type RadioComponentProps = {
    variants : variantSelection[]
}

const RadioComponent = ({variants}:RadioComponentProps) =>{
    const [value, setValue] = useState('');
    const onChange = (e:any) => {
        setValue(e.target.value);
    };
    return(
        <Radio.Group onChange={onChange} value={value} className='radio_wrapper'>
            {variants.map(element => (
                <div key={element.id} className={`radio_container ${value === element.id && 'active'}`} onClick={() => {setValue(element.id)}}>
                    <Radio value={element.id}>{element.answer}</Radio>
                </div>
            ))}
        </Radio.Group>
    )
}

export default RadioComponent