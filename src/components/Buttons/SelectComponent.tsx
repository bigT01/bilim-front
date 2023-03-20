import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {fetchStudentAnswersCreate} from "../../Redux/slices/StudentAnswers";
import {CheckboxValueType} from "antd/es/checkbox/Group";
import {Checkbox, Select} from "antd";

const SelectComponent = ({variants, id, selectVar}:any) => {
    const dispatch = useDispatch()
    const {StudentAnswers} = useSelector((state:any) => state.StudentAnswers)
    const [value, setValue] = useState<any>([]);

    useEffect(() => {
        // @ts-ignore
        dispatch(fetchStudentAnswersCreate({id, value: value}))
    }, [value])


    const handleChange = (value1: string, id:string) => {
        const index = value.findIndex((item: any) => item?.id === id);
        if (index >= 0) {
            // Update the existing object with the matching id
            setValue((oldData: any) =>
                oldData.map((item: any, i: number) =>
                    i === index ? { ...item, value: value1 } : item
                )
            );
        } else {
            // Add a new object to the array
            setValue((oldData: any) => [...oldData, { id, value: value1 }]);
        }
    };

    useEffect(() => {
        if(StudentAnswers.items[0]){
            const IdCheck = StudentAnswers.items.filter((element:any) => element?.id === id)[0]
            setValue(IdCheck?.value)
        }
    }, [StudentAnswers, id])
    return(
        <div className='flex flex-col gap-5' >
            {variants.map((element:any) => (
                <div key={element?.value} className={`rounded-2xl py-2 px-4 bg-white flex justify-between`}>
                    <p>{element?.question}</p>
                    <Select
                        defaultValue="выберите"
                        style={{ width: 'fit-content' }}
                        onChange={(e) => handleChange(e, element?.value)}
                        options={selectVar.map((item:any) => ({ value: item }))}
                    />
                </div>
            ))}
        </div>
    )
}

export default SelectComponent