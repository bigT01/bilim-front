import AdminIndex from "./index";
import './styles/adminStudents.scss'
import {Avatar, Edit, Student, UserAdd, UserRemove} from "../../components/assets/MainAssets";
import StudentCard from "../../components/AdminStudent/StudentCard/StudentCard";
import CreateStudent from "../../components/AdminStudent/StudentCard/CreateStudent";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchStudents} from "../../Redux/slices/students";
import {Link} from "react-router-dom";

const Students = () =>{
    const dispatch = useDispatch()
    const {students} = useSelector((state:any) => state.students)


    useEffect(() =>{
        // @ts-ignore
        dispatch(fetchStudents())
    },[])




    return(
        <AdminIndex>
            <div className="admin_students">

                <div className="table_wrapper">
                    <div className="header">
                        <div className="search_wrapper">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.9268 17.0401L20.4 20.4001M19.28 11.4401C19.28 15.77 15.7699 19.2801 11.44 19.2801C7.11006 19.2801 3.59998 15.77 3.59998 11.4401C3.59998 7.11019 7.11006 3.6001 11.44 3.6001C15.7699 3.6001 19.28 7.11019 19.28 11.4401Z" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                            <input type="text" className={"search_input"}/>
                        </div>
                        <Link to={'/admin/students/createStudent'} className="btn_add" >
                            <UserAdd color={'#FFFFFF'} />
                        </Link>
                    </div>

                    <div className='students_wrapper'>
                        {students.items.map((elem: any) => (
                            <StudentCard key={elem.id} id={elem.id} name={elem.full_name} age={elem.age} grade={elem.attend} avgGrade={elem.avgGrade} rating={elem.rating}/>
                        ))}
                    </div>
                </div>
            </div>
        </AdminIndex>
    )
}

export default Students