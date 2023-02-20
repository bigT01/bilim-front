import {useForm, SubmitHandler} from 'react-hook-form';
import "./Login.scss"
import { useEffect} from "react";
import axios from "axios";
import {UseAuthContext} from "../../context/AuthContext";
import {useNavigate} from "react-router-dom";
import {useMessageContext} from "../../context/MessageContext";
import {useDispatch, useSelector} from "react-redux";
import {fetchAuth, SelectIsAuth} from "../../Redux/slices/auth";

type FormValues = {
    email: string;
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
        // @ts-ignore
        dispatch(fetchAuth({data}))
        setAuth({
            id: 'kmvdfkvmdlfkmvdfvmdkf',
            token: 'skjfbnkjsnfnjkff',
            role: 'admin'
        })
        navigate('/')
    };

    // if(isAuthRedux){
    //     navigate('/')
    // }
    return(
        <div className={'login_wrapper'}>
            <div className="login_container">
                <div className="login_container_information">
                    <h3 className={'header'}>Welcome to <br/><span className={'mainWord'}>BILIM</span> <br/>online platform</h3>
                    <p></p>
                </div>
                <div className="login_container_login">
                    <div className="header">
                        <h1>Sign in</h1>
                    </div>
                    <form className={'form_signUp'} onSubmit={handleSubmit(onSubmit)}>
                        <div className="input_wrapper">
                            <label className={'signUp_label'}>E-mail</label>
                            <input type="email" {...register('email')} className={'signUp_input'}/>
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