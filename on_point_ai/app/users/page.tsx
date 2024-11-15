import React from "react";

interface User {
  id: string;
  name: string;
}

const UsersPage = async () => {
  // Fetch is allowed to be used on the server side (SSR)

  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });

  // Data caching only works for the fetch method, it does not work with Axios or any other 3rd party library

  const users: User[] = await res.json();

  return (
    <div>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
