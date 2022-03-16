import { DndProvider } from "react-dnd"; 
import { HTML5Backend } from 'react-dnd-html5-backend'
import LeftPanel from "./Panels/LeftPanel";
import RightPanel from "./Panels/RightPanel";

export default function MainLayout() {
    return <div style={{ display: 'flex', flexDirection: 'row' }}>
        				<DndProvider backend={HTML5Backend}>
        <div style={{ backgroundColor: '#aaa', height: '100vh', width: '30vw' }}>
            <LeftPanel/>
        </div>
        <div style={{ backgroundColor: '#ddd', height: '100vh', width: '70vw' }}>
            <RightPanel/>
        </div></DndProvider>
    </div>
}