import {Radio} from "antd";
import {useState} from "react";

const RadioComponent = () =>{
    const [value, setValue] = useState(0);
    const onChange = (e:any) => {
        setValue(e.target.value);
    };
    return(
        <Radio.Group onChange={onChange} value={value} className='radio_wrapper'>
            <div className={`radio_container ${value === 1 && 'active'}`} onClick={() => {setValue(1)}}>
                <Radio value={1}>A</Radio>
            </div>
            <div className={`radio_container ${value === 2 && 'active'}`} onClick={() => {setValue(2)}}>
                <Radio value={2}>B</Radio>
            </div>
            <div className={`radio_container ${value === 3 && 'active'}`} onClick={() => {setValue(3)}}>
                <Radio value={3}>C</Radio>
            </div>
            <div className={`radio_container ${value === 4 && 'active'}`} onClick={() => {setValue(4)}}>
                <Radio value={4}>D</Radio>
            </div>
        </Radio.Group>
    )
}

export default RadioComponent