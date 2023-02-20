import s from "./createStudent.module.scss"
import {CloseButton} from "../../assets/MainAssets";
import {SubmitHandler, useForm} from "react-hook-form";

type FormValues = {
    name: string;
    grade: string;
    login: string;
    password: string;
};

// (updatePageNumber: (prevPageNumber: number) => number) => void;

type CreateStudentProps = {
    setIsCreate:(updateIsCreate: (prevIsCreate: boolean) => boolean) => void;
}
const CreateStudent = ({setIsCreate}:CreateStudentProps) => {
    const { register, handleSubmit } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = data => {
        console.log(data)

        setIsCreate(old => !old)
    };
    return(
        <div className={s.wrapper}>
            <div className={s.header}>
                <h2>Create Student</h2>
                <button className={s.close} onClick={() => setIsCreate(old => !old)}><CloseButton color={'#f61e1e'}/></button>
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
                        <input type="text" {...register('name')}/>
                    </div>
                    <div className={s.inputWrapper}>
                        <label>в каком классе учиться</label>
                        <input type="text" {...register('grade')}/>
                    </div>
                    <div className={s.btnWrapper}>
                        <button className={s.formButton} type={'submit'}>Create</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateStudent