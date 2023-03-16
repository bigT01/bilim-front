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
            name: 'Dashboard'
        },
        {
            to: '/admin/teachers',
            icon: <Teacher color={'black'}/>,
            name: 'Teachers'
        },
        {
            to: '/admin/students',
            icon: <Student/>,
            name: 'Students'
        },
        {
            to: '/admin/subjects',
            icon: <Subjects/>,
            name: 'Subjects'
        },
        {
            to: '/admin/message',
            icon:  <FiMail />,
            name: "сообщения"
        },
        {
            to: '/admin/standards',
            icon:  <BiDockLeft />,
            name: "стандарты"
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