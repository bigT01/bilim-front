import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {fetchStudentAnswersCreate} from "../../Redux/slices/StudentAnswers";
import {Checkbox, } from "antd";
import {CheckboxValueType} from "antd/es/checkbox/Group";

const Multiple = ({variants, id}:any) => {
    const dispatch = useDispatch()
    const {StudentAnswers} = useSelector((state:any) => state.StudentAnswers)
    const [value, setValue] = useState<any>([]);

    useEffect(() => {
        // @ts-ignore
        dispatch(fetchStudentAnswersCreate({id, value: value}))
    }, [value])

    const onChange = (checkedValues: CheckboxValueType[]) => {
        setValue(checkedValues);
    };

    useEffect(() => {
        if(StudentAnswers.items[0]){
            const IdCheck = StudentAnswers.items.filter((element:any) => element?.id === id)[0]
            setValue(IdCheck?.value)
        }
    }, [StudentAnswers, id])

    return(
        <>
            <Checkbox.Group className='flex flex-col gap-5' onChange={onChange} value={value}>
                {variants.map((element:any) => (
                    <div key={element.value} className={`rounded-2xl py-2 px-4 bg-white`} onClick={() => {setValue(element.value)}}>
                        <Checkbox value={element.value}>{element.variant}</Checkbox>
                    </div>
                ))}
            </Checkbox.Group>
        </>
    )
}

export default Multiple