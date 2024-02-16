export const EventComponent: React.FC = () => {
    function onChange(event: React.ChangeEvent<HTMLInputElement>){
        console.log(event)
    }

    function onDragStart(event: React.DragEvent<HTMLDivElement>){
        console.log(event)
    }


    return <div> 
        <input type="text" onChange={onChange} />
        <div draggable onDragStart={onDragStart}>
            Drag Me!
        </div>
    </div>
}