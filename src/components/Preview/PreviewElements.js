import { ELEMENTS_STORE } from "../../store/elements";

export default function PreviewElements({element, editable, id}) {
    const handleChange = (id, element) => {
        ELEMENTS_STORE.update((state) => {
                    state.elements[id] = { type:element.type, text:document.getElementById(id).innerHTML}
                })
    }
    let displayElem = null;
    switch (element.type) {
        case 'h1':
            displayElem = <h1 id={id} onBlur={() => {
                handleChange(id,element)
            }} contentEditable={editable}>{element.text}</h1>
            break;
        case 'p':
            displayElem = <p  onBlur={() => {
                handleChange(id,element)
            }}  id={id} contentEditable={editable}>{element.text}</p>
            break;
        default:
            break;
    }
    return <div>

        {displayElem }
    </div>
}