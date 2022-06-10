import { createContext, useState, useContext, useMemo } from 'react';
const UserContext = createContext({
  userName: '',
  setUserName: () => {},
});
export default function Application() {
  const [userName, setUserName] = useState('John Smith');
  const value = useMemo(
    () => ({ userName, setUserName }), 
    [userName]
  );
  
  return (
    <UserContext.Provider value={value}>
      <UserNameInput />
    </UserContext.Provider>
  );
}
function UserNameInput() {
  const { userName, setUserName } = useContext(UserContext);
  const changeHandler = event => setUserName(event.target.value);
  return (
    <input
      type="text"
      value={userName}
      onChange={changeHandler}
    />
  );
}
function UserInfo() {
  const { userName } = useContext(UserContext);
  return <span>{userName}</span>;
}