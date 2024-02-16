import { useState } from "react"

export const GuestList : React.FC = () => {
    const [name, setName] = useState('');
    const [guests, setGuests] = useState<string[]>([]);

    function onClick(){
        setGuests([...guests, name]);
        setName('');
    }

    return (
        <div>
            <h3>Guest List</h3>
            <ul>
                {guests.map(guest => <li key={guest}>{guest}</li>)}
            </ul>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={onClick}>Add Name</button>
        </div>
    )
}