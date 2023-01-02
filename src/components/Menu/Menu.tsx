import './Menu.scss'
import {CloseButton, Dashboard, Settings, Student, Teacher} from "./assets/MenuAssets";

const Menu = () =>{


    return(
        <div className={'menu_wrapper'}>
            <div className="header">
                <button className={'close_btn'}>
                    <CloseButton />
                </button>
            </div>
            <nav className={'navbar'}>
                <ul className={'navbar_wrapper'}>
                    <li className={'nav_link'}>
                        <Dashboard/>
                        <p>Dashboard</p>
                    </li>
                    <li className={'nav_link'}>
                        <Teacher/>
                        <p>Teachers</p>
                    </li>
                    <li className={'nav_link'}>
                        <Student/>
                        <p>Students</p>
                    </li>
                    <li className={'nav_link'}>
                        <Settings/>
                        <p>Settings</p>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu