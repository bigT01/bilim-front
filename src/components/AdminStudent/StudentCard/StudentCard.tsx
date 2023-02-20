import {Avatar, Edit, Eye, Student, UserRemove} from "../../assets/MainAssets";

type StudentCardProps = {
    id: string,
    name: string,
    age: number,
    grade: string,
    rating: number,
    avgGrade: number
}

const StudentCard = ({id, name, age, grade, rating, avgGrade}:StudentCardProps) => {
    return(
        <div className="student_card">
            <div className="card-header">
                <button className='card-btn'>
                    <Eye color={'#706f6f'}/>
                </button>
                <button className='card-btn'>
                    <Edit color={'#706f6f'}/>
                </button>
                <button className='card-btn'>
                    <UserRemove color={'#706f6f'}/>
                </button>
            </div>
            <div className="card_user_info">
                <div className="user_avatar">
                    <Avatar color={'#2c0101'} background={'#c50303'}/>
                </div>
                <div className="user_info">
                    <p className="info_name">{name}</p>
                    <p className="info_age">{age} лет</p>
                </div>
            </div>
            <div className="card_additional_info">
                <div className="info_wrapper">
                    <div className="info_img">
                        <Student color={'#706f6f'}/>
                    </div>
                    <p>{grade} класс</p>
                </div>
                <div className="info_wrapper">
                    <div className="info_img">
                        <Student color={'#706f6f'}/>
                    </div>
                    <p>общ оценки: {avgGrade}</p>
                </div>
                <div className="info_wrapper">
                    <div className="info_img">
                        <Student color={'#706f6f'}/>
                    </div>
                    <p>рейтинг: {rating}</p>
                </div>
            </div>
        </div>
    )
}

export default StudentCard