import styled from "styled-components";

export default function DispalyUsers({ users, handleClickEdit, deleteUser }) {
  return (
    <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Username</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(users).map((key) => {
          return (
            <tr onClick={() => handleClickEdit(key)} key={key}>
              <td>{key}</td>
              <td>{users[key].name}</td>
              <td>{users[key].email}</td>
              <td>{users[key].username}</td>
              <td>{users[key].password}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

const Table = styled.table`
  /* border: 1px solid black; */
  border-spacing: 0;
  overflow: hidden;
  margin: 0 auto;
  border-radius: 10px;
  background-color: white;
  td, th {
    padding: 15px;
  }


  thead {
    font-size: 22px;
    background-color: #1b1b30;
    color: #fff;
  }

  tbody {
    font-size: 20px;
    tr:nth-child(even) {
      td {
        background-color: lightgray;
      }
      background-color: lightgray;
    }
    tr:nth-child(odd) {
      td {
        background-color: white;
      }
      background-color: white;
    }
    
    tr:hover {
      transform: scale(1.04);
      transition-duration: 0.3s
    
    }

  }
`;

{
  /* <div key={key}>
<ul onClick={() => handleClickEdit(key)}>
  <li>name: {users[key].name}</li>
  <li>name: {users[key].email}</li>
  <li>name: {users[key].username}</li>
  <li>name: {users[key].password}</li>
</ul>
<button onClick={() => deleteUser(key)}>X</button>
</div> */
}
