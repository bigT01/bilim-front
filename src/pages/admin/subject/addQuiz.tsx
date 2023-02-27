import AdminIndex from "../index";
import {useState} from "react";
import {Menu, MenuProps, Select, Input, Radio, Space, RadioChangeEvent} from "antd";
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';


const { Option } = Select;

import '../styles/addQuiz.scss'
import LessonQA from "../../../components/lesson/LessonQA";



const AddQuiz = () => {
    const [quizNumber, setQuizNumber] = useState(1)
    const [Items, setItems] = useState([getItem('Option 1', '1'), getItem('Option 2', '2'),  getItem('+ add one more', '1000')])


    type MenuItem = Required<MenuProps>['items'][number];

    function getItem(
        label: React.ReactNode,
        key: React.Key,
        icon?: React.ReactNode,
        children?: MenuItem[],
        type?: 'group',
    ): MenuItem {
        return {
            key,
            icon,
            children,
            label,
            type,
        } as MenuItem;
    }



    const items: MenuProps['items'] = [
        getItem('Квиз', 'sub1', <MailOutlined />, [
            getItem('Item 1', 'g1', null, Items, 'group'),
        ]),
    ];

    const onClick: MenuProps['onClick'] = (e) => {

        if(e.key === '1000'){
            const oldArray = Items
            oldArray.pop()

            // @ts-ignore
            oldArray.push(getItem(`Option ${Items.length+1}`, `${Items.length+1}`))

            // // @ts-ignore
            setItems(oldArray)
            setItems(old => [...old, getItem('+ add one more', '1000')])
        }
    };


    return(
        <AdminIndex>
            <div className="addQuiz_wrapper">
                <form className='lesson_form'>
                    <Menu
                        onClick={onClick}
                        style={{ width: 256 }}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        items={items}
                    />
                    <div className="lesson_body">
                        <LessonQA/>
                    </div>
                </form>
            </div>
        </AdminIndex>
    )
}

export default AddQuiz