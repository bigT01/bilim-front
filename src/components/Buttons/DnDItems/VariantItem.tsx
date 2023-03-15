import {useState} from "react";
import s from "../Dnd.module.scss";

type VariantItemProps = {
    variant: string,
    id: string
}

const VariantItem = ({variant, id}:VariantItemProps) => {
    const [isStart, setIsStart] = useState(false)
    return(
            <div
                draggable="true"
                className={`${s.box} ${isStart ? s.moving : null} `}
                id={id}
                onDragStart={(e) => {
                    setIsStart(true)
                    // @ts-ignore
                    e.dataTransfer.setData("text", e.target.id);
                }}
                onDragEnd={() => setIsStart(false)}
                onDragOver={e => {
                    e.preventDefault();
                }}
                onDrop={e => {
                    e.stopPropagation();
                    return false;
                }}

            >
                <p >{variant}</p>
            </div>
    )
}

export default VariantItem