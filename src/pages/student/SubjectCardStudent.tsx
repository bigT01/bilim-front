import StudentIndex from "./index";
import {Idea, Laptop, Power} from "../../components/assets/MainAssets";
import math from './assets/math.webp'
import {useState} from "react";
import RadioComponent from "../../components/Buttons/RadioComponent";


const SubjectCardStudent = () =>{
    const [pageNumber, setPageNumber] = useState(0)

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
                            <li className="nav_link_wrapper little">
                                <Idea/>
                                <span>1 quiz</span>
                            </li>
                            <li className="nav_link_wrapper little">
                                <Idea/>
                                <span>2 quiz</span>
                            </li>
                            <li className="nav_link_wrapper little">
                                <Idea/>
                                <span>3 quiz</span>
                            </li>
                            <li className="nav_link_wrapper disabled">
                                <Power color={'#ffffff'}/>
                                <span>overall</span>
                            </li>
                        </ul>
                    </div>
                    {pageNumber === 0 && <div className="content">
                        <div className="image_wrapper">
                            <img src={math} alt="img:math-1"/>
                        </div>
                        <div className="description">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen
                                book. </p>
                            <p> It has survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged.
                                It was popularised in the 1960s with the release of Letraset sheets containing
                                Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                                PageMaker
                                including versions of Lorem Ipsum.</p>
                            <p>Why do we use it?
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                        </div>
                        <div className="btn_wrapper">
                            <button onClick={() => setPageNumber(oldState => oldState + 1)}>next</button>
                        </div>
                    </div>}
                    {pageNumber === 1 && <div className='content'>
                        <h3 className="question">Question: 2+2=?</h3>
                        <div className="answer_list">
                            <RadioComponent/>
                        </div>
                        <div className="btn_wrapper center">
                            <button onClick={() => setPageNumber(oldState => oldState - 1)}>prev</button>
                            <button onClick={() => setPageNumber(oldState => oldState + 1)}>next</button>
                        </div>
                    </div>}
                    {pageNumber === 2 && <div className='content'>
                        <h3 className="question">Question: 2+3=?</h3>
                        <div className="answer_list">
                            <RadioComponent/>
                        </div>
                        <div className="btn_wrapper center">
                            <button onClick={() => setPageNumber(oldState => oldState - 1)}>prev</button>
                            <button onClick={() => setPageNumber(oldState => oldState + 1)}>next</button>
                        </div>
                    </div>}
                </div>
            </div>
        </StudentIndex>
    )
}

export default SubjectCardStudent