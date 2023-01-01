import {ReactNode} from "react";
import s from './Layout.module.scss'

type LayoutProps = {
    children: ReactNode
}

const Layout = ({children}: LayoutProps) =>{
    return(
        <div className={s.layoutWrapper}>
            {children}
        </div>
    )
}

export default Layout