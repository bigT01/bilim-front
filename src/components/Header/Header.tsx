import './Header.scss'
import {Avatar, Bell, More} from "../assets/MainAssets";


const Header = () =>{
    return(
        <div className={'header_main'}>
            <div className="notification_wrapper">
                <Bell/>
                <div className="notification_number">
                    3
                </div>
            </div>
            <div className="profile_wrapper">
                <div className="avatar">
                    <Avatar/>
                </div>
                <button className={'button_more'}>
                    <More/>
                </button>
            </div>
        </div>
    )
}

export default Header