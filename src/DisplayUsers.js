export default function DispalyUsers({users, handleClickEdit, deleteUser }) {

// console.log("users in display", users)



    return( 
    <>
        <h1>List</h1>
        {
            Object.keys(users).map((key) => {
                
              return (
                <div key={key}>
                  <ul  onClick={() => handleClickEdit(key)}> 
                      <li>name: {users[key].name}</li>
                      <li>name: {users[key].email}</li>
                      <li>name: {users[key].username}</li>
                      <li>name: {users[key].password}</li>
                  </ul>
                  <button onClick={() => deleteUser(key)}>X</button>
                </div>
              )
            }) 

        }
    </>
    )
}
