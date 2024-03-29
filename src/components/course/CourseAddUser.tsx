import {Checkbox} from "antd";
import React, {useEffect, useState} from "react";
import {CheckboxChangeEvent} from "antd/es/checkbox";

type CourseAddUser = {
    id: string,
    name: string,
    attend: string,
    checked: any,
    onChange: ( id:string) => void
}

const CourseAddUser = ({id, name, attend, onChange, checked,}:CourseAddUser) => {
    const [isChecked, setIsChecked] = useState(false)


    useEffect(() => {
        const fil = checked.filter((item: any) => item.student_id === id)
        if (fil[0]) {
            setIsChecked(true)
        } else {
            setIsChecked(false)
        }

    }, [checked])
    return(
        <tr className='table_row' key={id}>
            <td className='table_row__cail'><Checkbox checked={isChecked} onChange={() => onChange( id )} /></td>
            <td className='table_row__cail'>{id}</td>
            <td className='table_row__cail'>{name}</td>
            <td className='table_row__cail'>{attend}</td>
        </tr>
    )
}

export default CourseAddUser