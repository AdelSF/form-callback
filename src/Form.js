
import { useState, useEffect } from "react"



export default function Form({ onSubmitForm, selectedUserData, selectedUserKey }) {

  const defaultForm = {'name' : '', 'email' : '', 'password' : '', 'username' : ''};
  const [user, setUser] = useState(defaultForm);


  useEffect(() => {
    if (selectedUserData){
      setUser(selectedUserData)
    } 
  }, [selectedUserData])


  const handelChange = (evt) => {
    const value = evt.target.value;
    const name = evt.target.name;
    setUser({ ...user, [name]: value });
  }


  function handleSubmit(e) {
    e.preventDefault();
    onSubmitForm(user, selectedUserKey)
    setUser(defaultForm);
  }

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name">
          Name:
          <input type="text" name="name" onChange={handelChange} value={user.name} required/>
        </label>

        <label htmlFor="email">
          email:
          <input type="email" name="email" onChange={handelChange} value={user.email} required/>
        </label>

        <label htmlFor="pwd">
          password:
          <input
            name="password"
            type="password"
            onChange={handelChange}
            value={user.password}
            required
          />
        </label>

        <label htmlFor="username">
          username:
          <input type="text" name="username" onChange={handelChange} value={user.username} required/>
        </label>
        <input type="submit" />
      </form>
    </>
  );
}