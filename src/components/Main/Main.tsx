import './Main.scss'
import {ReactNode} from "react";

type MainProps = {
    children:ReactNode
}

const Main = ({children}:MainProps) =>{
    return(
        <div className="main_container">
            {children}
        </div>
    )
}

export default Main