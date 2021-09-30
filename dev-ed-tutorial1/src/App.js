import React, { useState } from "react";
import Tweet from "./Tweet";

const App = () => {
  const [users, setUsers] = useState([
    { name: "Chef", message: "Yo my people" },
    { name: "Ahmed", message: "Join RGA" },
    { name: "Abdullahi", message: "Jameeel" },
  ]);
  return (
    <div className="App">
      {users.map((user) => (
        <Tweet name={user.name} message={user.message} />
      ))}
    </div>
  );
};

export default App;
