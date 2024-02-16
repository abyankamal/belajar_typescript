import { useRef, useState } from 'react';

const users = [
  { name: 'Sarah', age: 20 },
  { name: 'Alex', age: 20 },
  { name: 'Michael', age: 20 },
];

const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [name, setName] = useState('');
  const [user, setUser] = useState<{name : string, age : number} | undefined>()

  const onClick = () => {
    const foundUser = users.find(user => user.name === name);
    if (foundUser) {
      setUser(foundUser);
    }  
  };

  return (
    <div>
      User Search
      <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Find User</button>
      <div>
        <h1>Name : {user && user.name}</h1>
        <h1>Age : {user && user.age}</h1>
      </div>
    </div>
  );
};

export default UserSearch;
