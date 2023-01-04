import './Menu.scss'
import {CloseButton, Dashboard, Settings, Student, Teacher} from "./assets/MenuAssets";
import {NavLink, useParams} from "react-router-dom";

const Menu = () =>{

    const {params} = useParams()

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
                        <NavLink to={'/admin/dashboard'} className={'nav_link_a'}>
                            <Dashboard/>
                            <p>Dashboard</p>
                        </NavLink>
                    </li>
                    <li className={'nav_link'}>
                        <NavLink to={'/admin/teachers'} className={'nav_link_a'}>
                            <Teacher/>
                            <p>Teachers</p>
                        </NavLink>
                    </li>
                    <li className={'nav_link'}>
                        <NavLink to={'/admin/students'} className={'nav_link_a'}>
                            <Student/>
                            <p>Students</p>
                        </NavLink>
                    </li>
                    <li className={'nav_link'}>
                        <NavLink to={'/admin/settings'} className={'nav_link_a'}>
                            <Settings/>
                            <p>Settings</p>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu