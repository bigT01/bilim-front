import {Avatar, Edit, Eye, Student, UserRemove} from "../../assets/MainAssets";
import {useDispatch} from "react-redux";
import {fetchRemoveStudent} from "../../../Redux/slices/students";
import {Link} from "react-router-dom";
import axios from "../../../axios";
import {message} from "antd";

type StudentCardProps = {
    id: string,
    name: string,
    age: number,
    grade: string,
    rating: number,
    avgGrade: number
}

const StudentCard = ({id, name, age, grade, rating, avgGrade}:StudentCardProps) => {
    const dispatch = useDispatch()

    const handleRemove = (id:string) =>{
        axios.delete(`/user/${id}`)
            .then(req => {
                // @ts-ignore
                dispatch(fetchRemoveStudent(id))
                message.success('ученик был успешно удалено')
            })
            .catch(err => message.error('ошибка сервера попробуйте поздее'))
    }
    return(
        <div className="student_card">
            <div className="card-header">
                <Link to={`/admin/students/${id}`} className='card-btn'>
                    <Eye color={'#706f6f'}/>
                </Link>
                <button className='card-btn'>
                    <Edit color={'#706f6f'}/>
                </button>
                <button className='card-btn' onClick={() => handleRemove(id)}>
                    <UserRemove color={'#706f6f'}/>
                </button>
            </div>
            <div className="card_user_info">
                <div className="user_avatar">
                    <Avatar color={'#2c0101'} background={'#c50303'}/>
                </div>
                <div className="user_info">
                    <p className="info_name">{name}</p>
                    <p className="info_age">{grade} класс</p>
                </div>
            </div>
        </div>
    )
}

export default StudentCard