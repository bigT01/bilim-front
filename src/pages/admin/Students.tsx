import AdminIndex from "./index";
import './adminStudents.scss'
import {Avatar, Edit, Student, UserAdd, UserRemove} from "../../components/assets/MainAssets";

const Students = () =>{
    return(
        <AdminIndex>
            <div className="admin_students">

                <div className="table_wrapper">
                    <div className="header">
                        <div className="search_wrapper">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.9268 17.0401L20.4 20.4001M19.28 11.4401C19.28 15.77 15.7699 19.2801 11.44 19.2801C7.11006 19.2801 3.59998 15.77 3.59998 11.4401C3.59998 7.11019 7.11006 3.6001 11.44 3.6001C15.7699 3.6001 19.28 7.11019 19.28 11.4401Z" stroke="black" stroke-width="2" stroke-linecap="round"/>
                            </svg>
                            <input type="text" className={"search_input"}/>
                        </div>
                        <button className="btn_add">
                            <UserAdd color={'#FFFFFF'} />
                        </button>
                    </div>

                    <div className='students_wrapper'>
                        <div className="student_card">
                            <div className="card-header">
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
                                    <p className="info_name">Tanat Azan</p>
                                    <p className="info_age">18 лет</p>
                                </div>
                            </div>
                            <div className="card_additional_info">
                                <div className="info_wrapper">
                                    <div className="info_img">
                                        <Student color={'#706f6f'}/>
                                    </div>
                                    <p>11 A класс</p>
                                </div>
                                <div className="info_wrapper">
                                    <div className="info_img">
                                        <Student color={'#706f6f'}/>
                                    </div>
                                    <p>общ оценки: 99</p>
                                </div>
                                <div className="info_wrapper">
                                    <div className="info_img">
                                        <Student color={'#706f6f'}/>
                                    </div>
                                    <p>рейтинг: 10</p>
                                </div>
                            </div>
                        </div>
                        <div className="student_card">
                            <div className="card-header">
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
                                    <p className="info_name">Tanat Azan</p>
                                    <p className="info_age">18 лет</p>
                                </div>
                            </div>
                            <div className="card_additional_info">
                                <div className="info_wrapper">
                                    <div className="info_img">
                                        <Student color={'#706f6f'}/>
                                    </div>
                                    <p>11 A класс</p>
                                </div>
                                <div className="info_wrapper">
                                    <div className="info_img">
                                        <Student color={'#706f6f'}/>
                                    </div>
                                    <p>общ оценки: 99</p>
                                </div>
                                <div className="info_wrapper">
                                    <div className="info_img">
                                        <Student color={'#706f6f'}/>
                                    </div>
                                    <p>рейтинг: 10</p>
                                </div>
                            </div>
                        </div>
                        <div className="student_card">
                            <div className="card-header">
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
                                    <p className="info_name">Tanat Azan</p>
                                    <p className="info_age">18 лет</p>
                                </div>
                            </div>
                            <div className="card_additional_info">
                                <div className="info_wrapper">
                                    <div className="info_img">
                                        <Student color={'#706f6f'}/>
                                    </div>
                                    <p>11 A класс</p>
                                </div>
                                <div className="info_wrapper">
                                    <div className="info_img">
                                        <Student color={'#706f6f'}/>
                                    </div>
                                    <p>общ оценки: 99</p>
                                </div>
                                <div className="info_wrapper">
                                    <div className="info_img">
                                        <Student color={'#706f6f'}/>
                                    </div>
                                    <p>рейтинг: 10</p>
                                </div>
                            </div>
                        </div>
                        <div className="student_card">
                            <div className="card-header">
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
                                    <p className="info_name">Tanat Azan</p>
                                    <p className="info_age">18 лет</p>
                                </div>
                            </div>
                            <div className="card_additional_info">
                                <div className="info_wrapper">
                                    <div className="info_img">
                                        <Student color={'#706f6f'}/>
                                    </div>
                                    <p>11 A класс</p>
                                </div>
                                <div className="info_wrapper">
                                    <div className="info_img">
                                        <Student color={'#706f6f'}/>
                                    </div>
                                    <p>общ оценки: 99</p>
                                </div>
                                <div className="info_wrapper">
                                    <div className="info_img">
                                        <Student color={'#706f6f'}/>
                                    </div>
                                    <p>рейтинг: 10</p>
                                </div>
                            </div>
                        </div>
                        <div className="student_card">
                            <div className="card-header">
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
                                    <p className="info_name">Tanat Azan</p>
                                    <p className="info_age">18 лет</p>
                                </div>
                            </div>
                            <div className="card_additional_info">
                                <div className="info_wrapper">
                                    <div className="info_img">
                                        <Student color={'#706f6f'}/>
                                    </div>
                                    <p>11 A класс</p>
                                </div>
                                <div className="info_wrapper">
                                    <div className="info_img">
                                        <Student color={'#706f6f'}/>
                                    </div>
                                    <p>общ оценки: 99</p>
                                </div>
                                <div className="info_wrapper">
                                    <div className="info_img">
                                        <Student color={'#706f6f'}/>
                                    </div>
                                    <p>рейтинг: 10</p>
                                </div>
                            </div>
                        </div>
                        <div className="student_card">
                            <div className="card-header">
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
                                    <p className="info_name">Tanat Azan</p>
                                    <p className="info_age">18 лет</p>
                                </div>
                            </div>
                            <div className="card_additional_info">
                                <div className="info_wrapper">
                                    <div className="info_img">
                                        <Student color={'#706f6f'}/>
                                    </div>
                                    <p>11 A класс</p>
                                </div>
                                <div className="info_wrapper">
                                    <div className="info_img">
                                        <Student color={'#706f6f'}/>
                                    </div>
                                    <p>общ оценки: 99</p>
                                </div>
                                <div className="info_wrapper">
                                    <div className="info_img">
                                        <Student color={'#706f6f'}/>
                                    </div>
                                    <p>рейтинг: 10</p>
                                </div>
                            </div>
                        </div>
                        <div className="student_card">
                            <div className="card-header">
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
                                    <p className="info_name">Tanat Azan</p>
                                    <p className="info_age">18 лет</p>
                                </div>
                            </div>
                            <div className="card_additional_info">
                                <div className="info_wrapper">
                                    <div className="info_img">
                                        <Student color={'#706f6f'}/>
                                    </div>
                                    <p>11 A класс</p>
                                </div>
                                <div className="info_wrapper">
                                    <div className="info_img">
                                        <Student color={'#706f6f'}/>
                                    </div>
                                    <p>общ оценки: 99</p>
                                </div>
                                <div className="info_wrapper">
                                    <div className="info_img">
                                        <Student color={'#706f6f'}/>
                                    </div>
                                    <p>рейтинг: 10</p>
                                </div>
                            </div>
                        </div>
                        <div className="student_card">
                            <div className="card-header">
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
                                    <p className="info_name">Tanat Azan</p>
                                    <p className="info_age">18 лет</p>
                                </div>
                            </div>
                            <div className="card_additional_info">
                                <div className="info_wrapper">
                                    <div className="info_img">
                                        <Student color={'#706f6f'}/>
                                    </div>
                                    <p>11 A класс</p>
                                </div>
                                <div className="info_wrapper">
                                    <div className="info_img">
                                        <Student color={'#706f6f'}/>
                                    </div>
                                    <p>общ оценки: 99</p>
                                </div>
                                <div className="info_wrapper">
                                    <div className="info_img">
                                        <Student color={'#706f6f'}/>
                                    </div>
                                    <p>рейтинг: 10</p>
                                </div>
                            </div>
                        </div>
                        <div className="student_card">
                            <div className="card-header">
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
                                    <p className="info_name">Tanat Azan</p>
                                    <p className="info_age">18 лет</p>
                                </div>
                            </div>
                            <div className="card_additional_info">
                                <div className="info_wrapper">
                                    <div className="info_img">
                                        <Student color={'#706f6f'}/>
                                    </div>
                                    <p>11 A класс</p>
                                </div>
                                <div className="info_wrapper">
                                    <div className="info_img">
                                        <Student color={'#706f6f'}/>
                                    </div>
                                    <p>общ оценки: 99</p>
                                </div>
                                <div className="info_wrapper">
                                    <div className="info_img">
                                        <Student color={'#706f6f'}/>
                                    </div>
                                    <p>рейтинг: 10</p>
                                </div>
                            </div>
                        </div>
                        <div className="student_card">
                            <div className="card-header">
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
                                    <p className="info_name">Tanat Azan</p>
                                    <p className="info_age">18 лет</p>
                                </div>
                            </div>
                            <div className="card_additional_info">
                                <div className="info_wrapper">
                                    <div className="info_img">
                                        <Student color={'#706f6f'}/>
                                    </div>
                                    <p>11 A класс</p>
                                </div>
                                <div className="info_wrapper">
                                    <div className="info_img">
                                        <Student color={'#706f6f'}/>
                                    </div>
                                    <p>общ оценки: 99</p>
                                </div>
                                <div className="info_wrapper">
                                    <div className="info_img">
                                        <Student color={'#706f6f'}/>
                                    </div>
                                    <p>рейтинг: 10</p>
                                </div>
                            </div>
                        </div>
                        <div className="student_card">
                            <div className="card-header">
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
                                    <p className="info_name">Tanat Azan</p>
                                    <p className="info_age">18 лет</p>
                                </div>
                            </div>
                            <div className="card_additional_info">
                                <div className="info_wrapper">
                                    <div className="info_img">
                                        <Student color={'#706f6f'}/>
                                    </div>
                                    <p>11 A класс</p>
                                </div>
                                <div className="info_wrapper">
                                    <div className="info_img">
                                        <Student color={'#706f6f'}/>
                                    </div>
                                    <p>общ оценки: 99</p>
                                </div>
                                <div className="info_wrapper">
                                    <div className="info_img">
                                        <Student color={'#706f6f'}/>
                                    </div>
                                    <p>рейтинг: 10</p>
                                </div>
                            </div>
                        </div>
                        <div className="student_card">
                            <div className="card-header">
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
                                    <p className="info_name">Tanat Azan</p>
                                    <p className="info_age">18 лет</p>
                                </div>
                            </div>
                            <div className="card_additional_info">
                                <div className="info_wrapper">
                                    <div className="info_img">
                                        <Student color={'#706f6f'}/>
                                    </div>
                                    <p>11 A класс</p>
                                </div>
                                <div className="info_wrapper">
                                    <div className="info_img">
                                        <Student color={'#706f6f'}/>
                                    </div>
                                    <p>общ оценки: 99</p>
                                </div>
                                <div className="info_wrapper">
                                    <div className="info_img">
                                        <Student color={'#706f6f'}/>
                                    </div>
                                    <p>рейтинг: 10</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminIndex>
    )
}

export default Students