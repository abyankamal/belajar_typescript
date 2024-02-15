interface ChildProps{
    color: string
    onClick: () => void;
    children?: React.ReactNode;
}

// cara 1
export const Child = ({color, onClick, children} : ChildProps) => {
    return (
        <div>
            <h1>{color}</h1>
            <button onClick={onClick}></button>
            {children}
        </div>
    )
}


// cara 2
export const ChildAsFC: React.FC<ChildProps> = ({color, onClick, children}) => {
    return (
        <div>
            <h1>{color}</h1>
            <button onClick={onClick}></button>
            {children}
        </div>
    )
}