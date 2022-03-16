import { DndProvider, useDrag } from 'react-dnd'
import { ITEM_TYPE } from '../../../constants/itemType';
import { ELEMENTS_STORE } from '../../../store/elements';

export default function DraggableComponent({elemType}) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ITEM_TYPE.ELEM,
        item: { elemType },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if (item && dropResult) {
                
                ELEMENTS_STORE.update((state) => {
                    state.elements.push({ type:elemType , text:`Click to edit your ${elemType} element`})
                })
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
        }),
    }));
    return <button ref={drag} style={{height:'3rem',backgroundColor:'red', marginBottom:'1rem'}}>{elemType}</button>
}