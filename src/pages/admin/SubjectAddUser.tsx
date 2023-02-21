import AdminIndex from "./index";
import {UserAdd} from "../../components/assets/MainAssets";
import './styles/adminSubjectUser.scss'
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {StudentItem} from "../../constants/Interfaces";
import {search} from "../../Redux/actions/searchActions";
import {useNavigate, useParams} from "react-router-dom";
import axios from "../../axios";
import {useMessageContext} from "../../context/MessageContext";


const SubjectAddUser = () => {
    const {id} = useParams()
    const [checkedStudent, setCheckedStudent] = useState<string[]>([])
    const {students} = useSelector((state:any) => state.students)
    const {subjectStudents} = useSelector((state:any) => state.subjectStudents)
    const searchQuery = useSelector((state:any) => state.search);
    const {setMessage} = useMessageContext()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onChange = (e: CheckboxChangeEvent, id: string) => {
        if(e.target.checked){

            setCheckedStudent(old => [...old, id])
        }
        else{
            setCheckedStudent(old => old.filter(elem => elem !== id))
        }
    };


    const SearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        dispatch(search(query));
    }

    const filteredStudents = students.items.filter((student:StudentItem) =>
        student.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const SubmitHandler = (checkedStudent:string[]) => {
        if(checkedStudent[0]){
            axios.post(`/subject/${id}/student`, {
                userId: checkedStudent
            })
                .then(req => {
                    setMessage('участники были добавлены','success')
                    navigate('/admin/subjects')
                })
                .catch(err => {
                    setMessage('Ошибка сети попробуйте еще раз','error')
                })
        }
    }

    return(
        <AdminIndex>
            <div className="table_wrapper">
                <div className="header">
                    <div className="search_wrapper">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.9268 17.0401L20.4 20.4001M19.28 11.4401C19.28 15.77 15.7699 19.2801 11.44 19.2801C7.11006 19.2801 3.59998 15.77 3.59998 11.4401C3.59998 7.11019 7.11006 3.6001 11.44 3.6001C15.7699 3.6001 19.28 7.11019 19.28 11.4401Z" stroke="black" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                        <input type="text" className={"search_input"} onChange={SearchHandler}/>
                    </div>
                    <Checkbox>
                        Check all
                    </Checkbox>
                    <button className={`btn_add ${checkedStudent[0] ? 'able': 'disable'}`} onClick={() => SubmitHandler(checkedStudent)}>Добавить</button>
                </div>
                <table className='table'>
                    <tr className='table_header'>
                        <th className='table_header__cail checkbox'>

                        </th>
                        <th className='table_header__cail id'>
                            id
                        </th>
                        <th className='table_header__cail name'>
                            name
                        </th>
                        <th className='table_header__cail'>
                            grade
                        </th>
                    </tr>
                    {filteredStudents.map((elem:StudentItem) => (
                        <tr className='table_row' key={elem.id}>
                            <td className='table_row__cail'><Checkbox onChange={e => onChange(e, elem.id)} /></td>
                            <td className='table_row__cail'>{elem.id}</td>
                            <td className='table_row__cail'>{elem.name}</td>
                            <td className='table_row__cail'>{elem.grade}</td>
                        </tr>
                    ))}
                </table>
            </div>

        </AdminIndex>
    )
}

export default SubjectAddUser