import s from "./createStudent.module.scss"
import {CloseButton} from "../../assets/MainAssets";
import {SubmitHandler, useForm} from "react-hook-form";
import axios from "axios";
import {message} from "antd";
import {useDispatch} from "react-redux";
import AdminIndex from "../../../pages/admin";
import {Link, useNavigate} from "react-router-dom";

type FormValues = {
    full_name: string;
    attend: string;
    login: string;
    password: string;
};

// (updatePageNumber: (prevPageNumber: number) => number) => void;


const CreateStudent = () => {
    const { register, handleSubmit } = useForm<FormValues>();
    const navigate = useNavigate()

    const onSubmit: SubmitHandler<FormValues> =  data => {
        axios.post('http://localhost:4444/api/user', {
            login: data.login,
            full_name: data.full_name,
            password: data.password,
            attend : data.attend
        }).then(res => {

            message.success('Ученик успешно был создан')
        })
            .catch(err => message.error('ошибка с сервером'))

        navigate('/admin/dashboard')

    };
    return(
        <AdminIndex>
            <div className={s.wrapper}>
                <div className={s.header}>
                    <h2>Create Student</h2>
                    <Link to={'/admin/students'} className={s.close} ><CloseButton color={'#f61e1e'}/></Link>
                </div>
                <div className={s.body}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={s.inputWrapper}>
                            <label>Логин для входа</label>
                            <input type="text" {...register('login')}/>
                        </div>
                        <div className={s.inputWrapper}>
                            <label>Пароль</label>
                            <input type="text" {...register('password')}/>
                        </div>
                        <div className={s.inputWrapper}>
                            <label>Имя ученика</label>
                            <input type="text" {...register('full_name')}/>
                        </div>
                        <div className={s.inputWrapper}>
                            <label>в каком классе учиться</label>
                            <input type="text" {...register('attend')}/>
                        </div>
                        <div className={s.btnWrapper}>
                            <button className={s.formButton} type={'submit'}>Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </AdminIndex>
    )
}

export default CreateStudent