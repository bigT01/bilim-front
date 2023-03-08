import {useForm, SubmitHandler} from 'react-hook-form';
import "./Login.scss"
import { useEffect} from "react";
import {UseAuthContext} from "../../context/AuthContext";
import {useNavigate} from "react-router-dom";
import {useMessageContext} from "../../context/MessageContext";
import {useDispatch, useSelector} from "react-redux";
import {fetchAuth, SelectIsAuth} from "../../Redux/slices/auth";
import LoginPage from './loginPage.png'
import axios from "../../axios";
import {message} from "antd";

type FormValues = {
    login: string;
    password: string;
};

const Login = () =>{
    const { register, handleSubmit } = useForm<FormValues>();
    const dispatch = useDispatch()
    // const isAuthRedux = useSelector(SelectIsAuth)
    const {setMessage} = useMessageContext()
    const navigate = useNavigate()
    const {setAuth, isAuth} = UseAuthContext()

    const onSubmit: SubmitHandler<FormValues> = data => {
        axios.post('/login', {
            login: data.login,
            password: data.password
        })
            .then(res => {
                setAuth({
                    id: res.data.id,
                    token: res.data.token,
                    role: res.data.role
                })
                message.success('вы успешно прошли авторизацию')
                navigate('/')

            })
            .catch(err => {
                console.log(err)
                message.error('пароль или логин неверно')
            })


    };


    useEffect(() => {
        axios.get('/auth/me')
            .then(res => {
                setAuth({
                    id: res.data.id,
                    token: res.data.token,
                    role: res.data.role
                })
                navigate('/')
            })
            .catch(err => {
                message.error('не удалось авторизоваться пожалуйста ведите пароль')
            })
    }, [])
    return(
        <div className={'login_wrapper'}>
            <div className="login_container">
                <div className="login_container_information">
                    <h3 className={'header'}>Welcome to <br/><span className={'mainWord'}>BILIM</span> <br/>online platform</h3>
                    <img src={LoginPage} alt="img:login-page" width={300} height={300}/>
                </div>
                <div className="login_container_login">
                    <div className="header">
                        <h1>Sign in</h1>
                    </div>
                    <form className={'form_signUp'} onSubmit={handleSubmit(onSubmit)}>
                        <div className="input_wrapper">
                            <label className={'signUp_label'}>E-mail</label>
                            <input type="text" {...register('login')} className={'signUp_input'}/>
                        </div>
                        <div className="input_wrapper">
                            <label className={'signUp_label'}>password</label>
                            <input type="password" {...register("password")} className={'signUp_input'}/>
                        </div>
                        <div className="submit_wrapper">
                            <a href="#">forgot your email?</a>
                            <button type={'submit'} className={'submit'}>Submit</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login