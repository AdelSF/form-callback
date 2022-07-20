import { useState, useRef } from 'react';

import Form from './Form';
import DispalyUsers from './DisplayUsers';


function App() {
  let id = useRef(4);
  const [selectedUserKey, setSelectedUserKey] = useState(-1);
  

  const [allUsers , setAllUsers] = useState(
    {
      1: {
        name: "adel",
        email: "asda@adsasd",
        username: "Adelius",
        password: "123"
      }, 
      2: {
        name: "Maj",
        email: "aa@adsasd",
        username: "As",
        password: "12345",
        namepedar: 'sadasd'
      }, 
      3: {
        name: "jasem",
        email: "aa@adsasd",
        username: "As",
        password: "12345",
        namepedar: 'sadasd'
      }, 
  });


  const onSubmitForm = (userData, selectedUserKey) => {
    if (selectedUserKey !== -1) {
      setAllUsers({...allUsers, [selectedUserKey] : userData})
      setSelectedUserKey(-1);
    } else {
      setAllUsers({...allUsers, [id.current] : userData})
      id.current += 1;
    }
  }

  async function handleClickEdit(key) {
    if (selectedUserKey === -1) {
      await setSelectedUserKey(key);
      deleteUser(key);
    } 
  }

  function deleteUser(key) {
    let currUsersObj = {...allUsers};
    delete currUsersObj[key];
    setAllUsers(currUsersObj);
  }


  return (
    <div className="App">
      <Form onSubmitForm={onSubmitForm} selectedUserData={allUsers[selectedUserKey]} selectedUserKey={selectedUserKey}/>
      <DispalyUsers users={allUsers} handleClickEdit={handleClickEdit} deleteUser={deleteUser}/>
    </div>
  );
}

export default App;
