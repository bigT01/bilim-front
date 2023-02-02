import './Menu.scss'
import {CloseButton, Dashboard} from "../assets/MainAssets";
import {NavLink} from "react-router-dom";
import {ReactNode} from "react";

interface MenuParams{
    to : string,
    icon ?: ReactNode,
    name: string
}

type MenuProps = {
    Links: MenuParams[]
}

const Menu = ({Links}: MenuProps) =>{

    // const {params} = useParams()

    return(
        <div className={'menu_wrapper'}>
            <div className="header">
                <button className={'close_btn'}>
                    <CloseButton />
                </button>
            </div>
            <nav className={'navbar'}>
                <ul className={'navbar_wrapper'}>
                    {Links.map(element => (
                        <li className={'nav_link'}>
                            <NavLink to={element.to} className={'nav_link_a'}>
                                {element?.icon ? element?.icon :<Dashboard/>}
                                <p>{element.name}</p>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Menu