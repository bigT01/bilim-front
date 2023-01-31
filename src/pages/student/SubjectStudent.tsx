import StudentIndex from "./index";
import './student.scss'
import {Check, SlideArrow} from "../../components/assets/MainAssets";
import {Link} from "react-router-dom";

const SubjectStudent = () => {
    const fakeData = [
        {
            id: 7343234,
            subjectName: "Math",
            description: "loream ipsum is not found page none of them for example long term time and it is nice thing what can make me fill nice",
            isChecked: false
        },
        {
            id: 832784982,
            subjectName: "History",
            description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classica",
            isChecked: true
        },
        {
            id: 39024809234,
            subjectName: "Information Technology",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            isChecked: false
        },
        {
            id: 2089842,
            subjectName: "Biology",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            isChecked: false
        }
    ]

    return(
        <StudentIndex>
            <div className="subject_student">
                <div className="date">
                    <button className="btn_prev"><SlideArrow/></button>
                    <h1>11 december</h1>
                    <button className="btn_next"><SlideArrow/></button>
                </div>
                <div className="subjects">
                    {fakeData.map(element => (
                        <div className="subject">
                            <div className="information">
                                <div className="subject_name">{element.subjectName}</div>
                                <div className="subject_description">{element.description}</div>
                            </div>
                            {element.isChecked ?
                            <div className="checked">
                                 <Check color={'green'}/>
                            </div>: null}
                            <Link to={`/student/subject/${element.id}`} className="link">link</Link>
                        </div>
                    ))}

                </div>
            </div>
        </StudentIndex>
    )
}

export default SubjectStudent