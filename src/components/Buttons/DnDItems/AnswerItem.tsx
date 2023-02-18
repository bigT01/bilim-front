import s from "../Dnd.module.scss";
import {useState} from "react";

const AnswerItem = () =>{
    const [isEnter, setIsEnter] = useState(false)
    const [data, setData] = useState<any>()


    return(
        <span>
            <div
                className={`${s.element} ${isEnter? s.enter: null}`}
                id={'ele1'}
                onDragEnter={() => setIsEnter(true)}
                onDragLeave={() => setIsEnter(false)}
                onDrop={e => {
                    let data = e.dataTransfer.getData("text");
                    if(data){
                        e.preventDefault();
                        // @ts-ignore
                        e.target.appendChild(document.getElementById(data));
                    }
                }}

                onDragOver={e => {
                    e.preventDefault();
                }}
            />
        </span>
    )
}

export default AnswerItem