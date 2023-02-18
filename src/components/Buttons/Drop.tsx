import VariantItem from "./DnDItems/VariantItem";
import s from "./Dnd.module.scss"
import {useState} from "react";
import AnswerItem from "./DnDItems/AnswerItem";

type SubjectQuestionCardProps = {
    DropQuestion?: string
}

const Drop = ({DropQuestion}:SubjectQuestionCardProps) =>{
    if (DropQuestion){
        const splited = DropQuestion?.split('[]')

        const word = splited.length - 1

        const concatenatedItems = splited.reduce((acc, item):any => {
            return acc === null ? [item] : [...acc, <AnswerItem/>, item];
        }, null);


        return(
            <div className={s.container}>
                <div className={`${s.variantsMatch}`}>
                    {/*<p className={s.answerText}>some text is going and this part should {<AnswerItem/>} drop text</p>*/}
                    {word ? <p className={s.answerText}>{concatenatedItems}</p>:null}
                </div>
                <div
                    className={`${s.variants} `}
                    onDrop={e => {
                        e.preventDefault();
                        let data = e.dataTransfer.getData("text");
                        // @ts-ignore
                        e.target.appendChild(document.getElementById(data));
                    }}
                    onDragOver={e => {
                        e.preventDefault();
                    }}
                >
                    <VariantItem variant={'dropingSizenf dkmdkmffdf'} id='ele2'/>
                    <VariantItem variant={'B'} id='ele3'/>
                    <VariantItem variant={'C'} id='ele4'/>
                    <VariantItem variant={'dropingSizenfdkmdkmffdf'} id='ele10'/>
                    <VariantItem variant={'B'} id='ele9'/>
                    <VariantItem variant={'C'} id='ele6'/>
                </div>
            </div>
        )
    }
    else{
        return null
    }
}

export default Drop