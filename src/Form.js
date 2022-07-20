import { useState, useEffect } from "react"
import styled from "styled-components";



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
      <FormComponent onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name" >Name:</label>
        <input type="text" name="name" onChange={handelChange} value={user.name} required/>

        <label htmlFor="email">Email:</label>
        <input type="email" name="email" onChange={handelChange} value={user.email} required/>

        <label htmlFor="pwd">Password:</label>
        <input name="password" type="password" onChange={handelChange} value={user.password} required/>

        <label htmlFor="username">Username:</label>
        <input type="text" name="username" onChange={handelChange} value={user.username} required/>

        <input type="submit" />
      </FormComponent>
    </>
  );
}

const FormComponent = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  padding: 50px;
  margin: 20px auto;
  background-color: #1b1b30;
  color:#fff;
  border-radius: 10px;

  label {
    font-size: 16px;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 2px;
  }
  input {
    padding: 10px;
    border-radius: 8px;
    background-color: #35354a;
    color: white;
    font-size: 18px;
  }
  input[type='submit'] {
    width: 50%;
    background-color: #2d93dc;
    min-width: 100px;
    margin: 30px auto -15px auto;
    /* margin: 20px; */
  }
`

