import DraggableComponent from "../../components/LeftPanel/draggable/draggable";
import { DRAGGABLE_TYPES } from "../../constants/draggableTypes";

export default function LeftPanel() {
    return <div style={{display:'flex', flexDirection:'column'}}>
        
        {DRAGGABLE_TYPES.map((dragType) => {
            return <DraggableComponent elemType={dragType} />
        })}
    </div>
}