import {Dashboard, Student, Subjects, Teacher} from "../../components/assets/MainAssets";
import {BiDockLeft} from "react-icons/bi";
import Menu from "../../components/Menu/Menu";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Layout from "../../components/Layout/Layout";
import {ReactNode} from "react";

type TeacherIndex = {
    children: ReactNode;
}
const TeacherIndex = ({children}: TeacherIndex) =>{
    const links = [
        {
            to: '/teacher/dashboard',
            icon: <Dashboard/>,
            name: 'главная'
        },
        {
            to: '/teacher/student',
            icon: <Student/>,
            name: 'ученики'
        },
        {
            to: '/teacher/standards',
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

export default TeacherIndex