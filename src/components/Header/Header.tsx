import './Header.scss'
import {Avatar, Bell, More, Trash, UserAdd} from "../assets/MainAssets";
import {useEffect, useRef, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {Button} from "antd";
import {UseAuthContext} from "../../context/AuthContext";


const Header = () =>{
    const [isClick, setIsClick] = useState(false);
    const more = useRef(null);
    const navigate = useNavigate()
    const {setAuth} = UseAuthContext()

    useEffect(() => {
        function handleClickOutside(event: any) {
            // @ts-ignore
            if (more.current && !more.current.contains(event.target)) {
                setIsClick(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [more, isClick]);

    const LogOutHandler = () => {
        setAuth({
            id: '',
            token: '',
            role: ''
        })
        window.localStorage.setItem('token', '')
        navigate('/login')
    }

    return(
        <div className={'header_main'} style={{position: 'relative'}}>
            <div className="notification_wrapper">
                <Bell/>
                <div className="notification_number">
                    3
                </div>
            </div>
            <div className="profile_wrapper" onClick={() => setIsClick(oldValue => !oldValue)}>
                <div className="avatar">
                    <Avatar/>
                </div>
                <button className={'button_more'}>
                    <More/>
                </button>
            </div>
            {isClick && <>
                <div style={{position:'absolute', bottom: '-15px'}}  className={`more ${isClick? 'show': 'disable'}` } ref={more}>
                    {isClick && <>
                        <Button type={'primary'} danger={true} onClick={() => LogOutHandler()}>выйти</Button>
                    </>}
                </div>
            </>}
        </div>
    )
}

export default Header