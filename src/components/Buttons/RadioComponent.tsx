import {Radio} from "antd";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchStudentAnswersCreate} from "../../Redux/slices/StudentAnswers";



const RadioComponent = ({variants, id}:any) =>{
    const dispatch = useDispatch()
    const {StudentAnswers} = useSelector((state:any) => state.StudentAnswers)
    const [value, setValue] = useState('');
    const onChange = (e:any) => {
        setValue(e.target.value);
    };

    useEffect(() => {
        // @ts-ignore
        dispatch(fetchStudentAnswersCreate({id, value: value}))
    }, [value])

    useEffect(() => {
        if(StudentAnswers.items[0]){
            const IdCheck = StudentAnswers.items.filter((element:any) => element?.id === id)[0]
            setValue(IdCheck?.value)
        }
    }, [StudentAnswers, id])

    return(
        <Radio.Group onChange={onChange} value={value} className='flex flex-col gap-5'>
            {variants.map((element:any) => (
                <div key={element.value} className={`rounded-2xl py-2 px-4 bg-white`} onClick={() => {setValue(element.value)}}>
                    <Radio value={element.value} className="text-[14px]" >{element.variant}</Radio>
                </div>
            ))}
        </Radio.Group>
    )
}

export default RadioComponent