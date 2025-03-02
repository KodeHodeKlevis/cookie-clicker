import React, { useState } from "react";

const mockData = [
  { username: "Ola Normann", email: "ola.normann@norge.no" },
  { username: "Torleif", email: "torleif@kodehode.no" },
  { username: "Jan Egil", email: "jan.egil@kodehode.no" },
  { username: "Sander", email: "sander@kodehode.no" },
];

const Users = () => {
  const [users, setUsers] = useState(mockData);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const addUser = () => {
    if (username && email) {
      setUsers([...users, { username, email }]);
      setUsername("");
      setEmail("");
    }
  };

  const removeUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  return (
    <div className="users">
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.username} - {user.email}
            <button className="btn1" onClick={() => removeUser(index)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={addUser}>Add User</button>
    </div>
  );
};

export default Users;
