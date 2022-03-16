import PreviewElements from "./PreviewElements"

export default function Preview() {
    const elements=JSON.parse(localStorage.getItem('previewItems'))
    // console.log('elements', elements)
    
    return <>
        {elements.map((element) => {
           return <PreviewElements element={element} editable={false} /> 
    })}
    </>
}