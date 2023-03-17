import Layout from "../../components/Layout/Layout";
import Menu from "../../components/Menu/Menu";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import { Dashboard,Teacher, Student, Subjects, Settings } from "../../components/assets/MainAssets";
import {ReactNode} from "react";
import {FiMail} from "react-icons/fi";
import {BiDockLeft} from "react-icons/bi";

type AdminIndex = {
    children: ReactNode;
}

const AdminIndex = ({children}: AdminIndex) =>{

    const links = [
        {
            to: '/admin/dashboard',
            icon: <Dashboard/>,
            name: 'Главная'
        },
        {
            to: '/admin/teachers',
            icon: <Teacher color={'black'}/>,
            name: 'Учители'
        },
        {
            to: '/admin/students',
            icon: <Student/>,
            name: 'Ученики'
        },
        {
            to: '/admin/subjects',
            icon: <Subjects/>,
            name: 'Курсы'
        },
        {
            to: '/admin/message',
            icon:  <FiMail />,
            name: "Сообщения"
        },
        {
            to: '/admin/standards',
            icon:  <BiDockLeft />,
            name: "Стандарты"
        },
    ]

    return(
        <Layout>
            <Menu Links={links}/>
            <Header />
            <Main>
                {children}
            </Main>
        </Layout>
    )
}

export default AdminIndex