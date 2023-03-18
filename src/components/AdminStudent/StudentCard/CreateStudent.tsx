import s from "./createStudent.module.scss"
import {CloseButton} from "../../assets/MainAssets";
import {SubmitHandler, useForm} from "react-hook-form";
import axios from "axios";
import {message} from "antd";
import {useDispatch, useSelector} from "react-redux";
import AdminIndex from "../../../pages/admin";
import {Link, useNavigate} from "react-router-dom";
import {fetchCreateStudent} from "../../../Redux/slices/students";
import {useEffect} from "react";

type FormValues = {
    full_name: string;
    attend: string;
    login: string;
    password: string;
};

// (updatePageNumber: (prevPageNumber: number) => number) => void;


const CreateStudent = () => {
    const { register, handleSubmit,formState: { errors } } = useForm<FormValues>();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const status = useSelector((state:any, ) => state.students.students.status)

    const onSubmit: SubmitHandler<FormValues> =  data => {
        // @ts-ignore
        dispatch(fetchCreateStudent(data))
    };

    useEffect(() => {
        if(status === 'created'){
            message.success('Ученик успешно был создан')
            navigate('/admin/students')
        }
    }, [status])
    return(
        <AdminIndex>
            <div className={s.wrapper}>
                <div className={s.header}>
                    <h2>Создать нового пользователья</h2>
                    <Link to={'/admin/students'} className={s.close} ><CloseButton color={'#f61e1e'}/></Link>
                </div>
                <div className={s.body}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={s.inputWrapper}>
                            <label>Логин для входа</label>
                            <input className={`${errors.login ? null: s.error}`} type="text" {...register('login', { required: true })}/>
                        </div>
                        <div className={s.inputWrapper}>
                            <label>Пароль</label>
                            <input className={`${errors.password ? null: s.error}`} type="text" {...register('password', { required: true })}/>
                        </div>
                        <div className={s.inputWrapper}>
                            <label>Имя ученика</label>
                            <input className={`${errors.full_name ? null: s.error}`} type="text" {...register('full_name', { required: true })}/>
                        </div>
                        <div className={s.inputWrapper}>
                            <label>в каком классе учиться</label>
                            <input className={`${errors.attend ? null: s.error}`} type="text" {...register('attend', { required: true })}/>
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