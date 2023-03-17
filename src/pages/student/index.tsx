import {ReactNode} from "react";
import Layout from "../../components/Layout/Layout";
import Menu from "../../components/Menu/Menu";
import {Dashboard, Settings, Student, Subjects, Teacher} from "../../components/assets/MainAssets";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import {FiMail} from "react-icons/fi";

type StudentIndexProps = {
    children: ReactNode
}

const StudentIndex = ({children}:StudentIndexProps) =>{
    const link = [
        {
            to: '/student/dashboard',
            icon: <Dashboard/>,
            name: 'Главная'
        },
        {
            to: '/student/subject',
            icon:  <Subjects/>,
            name: "Курсы"
        },
            {
                to: '/student/message',
                icon:  <FiMail />,
                name: "Сообщения"
            },
    ]


    return(
        <Layout>
            <Menu Links={link}/>
            <Header />
            <Main>
                {children}
            </Main>
        </Layout>
    )
}

export default StudentIndex