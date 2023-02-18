import StudentIndex from "./index";
import {Idea, Laptop, Power} from "../../components/assets/MainAssets";
import math from './assets/math.webp'
import {useEffect, useState} from "react";
import RadioComponent from "../../components/Buttons/RadioComponent";
import Drop from "../../components/Buttons/Drop";
import SubjectQuestionCard from "../../components/SubjectQuestionCard/SubjectQuestionCard";


const FakeData = {
    id: "1",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n" +
        "                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,\n" +
        "                                when an unknown printer took a galley of type and scrambled it to make a type specimen\n" +
        "                                book.",
    image: math,
    questions: 4
}

const FakeQuiz = [
    {
        id: 123,
        type: 'checkbox',
        question: 'Question: 2+2=?',
        variants: [
            {
                id: "4234",
                answer: "11"
            },
            {
                id: "9421",
                answer: "5"
            },
            {
                id: "2342",
                answer: "4"
            },
        ],
        // backend should not give this information
        correct: "2342"
    },
    {
        id: 2345,
        type: 'checkbox',
        question: 'Question: 2+2=?',
        variants: [
            {
                id: "4234",
                answer: "11"
            },
            {
                id: "9421",
                answer: "5"
            },
            {
                id: "2342",
                answer: "4"
            },
        ],
        // backend should not give this information
        correct: "2342"
    },
    {
        id: 94353,
        type: 'checkbox',
        question: 'Question: 2+2=?',
        variants: [
            {
                id: "4234",
                answer: "11"
            },
            {
                id: "9421",
                answer: "5"
            },
            {
                id: "2342",
                answer: "4"
            },
        ],
        // backend should not give this information
        correct: "2342"
    },
    {
        id: 3452,
        type: 'drop',
        question: 'Question: palace with correct place',
        DropQuestion: "some people [] love this place [] jnjkdnkdfsdf [] sdjnjsdnl",
        variants: [
            {
                id: "4234",
                answer: "most"
            },
            {
                id: "9421",
                answer: "very"
            },
            {
                id: "2342",
                answer: "high"
            },
        ],
        // backend should not give this information
        correct: "2342"
    },
]

const SubjectCardStudent = () =>{
    const [pageNumber, setPageNumber] = useState(0)
    const [isFinish, setIsFinish] = useState(false)

    useEffect(() => {
        if(pageNumber === FakeData.questions){
            setIsFinish(true)
        }
        else{
            setIsFinish(false)
        }
    }, [pageNumber])

    return(
        <StudentIndex>
            <div className="subject_card">
                <div className="header">
                    <div className="subject_name">Math:</div>
                    <div className="subject_description">loream ipsum</div>
                </div>
                <div className="body">
                    <div className="navbar">
                        <ul className="navbar_wrapper">
                            <li className="nav_link_wrapper">
                                <Laptop/>
                                <span>preview</span>
                            </li>
                            {FakeQuiz.map((element, index) => (
                                <li className="nav_link_wrapper little">
                                    <Idea/>
                                    <span>{index+1} quiz</span>
                                </li>
                            ))}

                            <li className="nav_link_wrapper disabled">
                                <Power color={'#ffffff'}/>
                                <span>overall</span>
                            </li>
                        </ul>
                    </div>
                    {pageNumber === 0 && <div className="content">
                        <div className="image_wrapper">
                            <img src={FakeData.image} alt="img:math-1"/>
                        </div>
                        <div className="description">
                            <p>{FakeData.description}</p>
                        </div>
                        <div className="btn_wrapper">
                            <button onClick={() => setPageNumber(oldState => oldState + 1)}>next</button>
                        </div>
                    </div>}

                    {FakeQuiz.map((element, index) =>(
                        pageNumber === index+1 && <SubjectQuestionCard key={element.id} isFinish={isFinish} setPageNumber={setPageNumber} DropQuestion={element?.DropQuestion} question={element.question} type={element.type} variant={element.variants}/>
                    ))}
                </div>
            </div>
        </StudentIndex>
    )
}

export default SubjectCardStudent