import { useEffect } from "react";
import { useDrop } from "react-dnd";
import { ITEM_TYPE } from "../../../constants/itemType";
import { ELEMENTS_STORE } from "../../../store/elements";
import PreviewElements from "../../Preview/PreviewElements";

export default function DropZone() {
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: ITEM_TYPE.ELEM,
        drop: () => ({ name: 'Dustbin' }),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }));
    const {elements} = ELEMENTS_STORE.useState(); 
    const isActive = canDrop && isOver;

    useEffect(() => {
      localStorage.setItem("previewItems", JSON.stringify(elements));
    }, [elements])
    

    return  <div style={{ height:'100vh'}} ref={drop}>
        {elements.map((element, index) => {
            return <PreviewElements id={index} element={element} editable={true} />
        })}
        {isActive ? 'Release to drop' : 'Drag your element here'}
    </div>
}