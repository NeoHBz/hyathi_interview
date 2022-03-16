
import { ELEMENTS_STORE } from "../../store/elements"

export default function PreviewButton() {
        const {elements} = ELEMENTS_STORE.useState(); 
        console.log('elements', elements)

    return <button onClick={() => {
        localStorage.setItem("previewItems", JSON.stringify(elements));
        window.open('http://localhost:3000/preview')
    }} style={{ height:'2rem', width:'12rem', position:'fixed', bottom:10, right:10}}>Preview</button>
}