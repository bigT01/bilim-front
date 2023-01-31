import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";
import Items from "./Items";

const Dnd = () =>{
    return(
        <DndProvider backend={HTML5Backend}>
            <Items />
        </DndProvider>
    )
}

export default Dnd