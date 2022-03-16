import PreviewButton from "../../components/Preview/PreviewButton";
import DropZone from "../../components/RightPanel/DropZone/DropZone";


export default function RightPanel() {
    return <div style={{ height:'100vh'}}>
        <DropZone />
        <PreviewButton/>
    </div>
}