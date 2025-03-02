import React from "react";
import CookieClicker from "./components/CookieClicker";
import CatFacts from "./components/CatFacts";
import Users from "./components/Users";

const App = () => {
  return (
    <div>
      <h1>Cookie Clicker</h1>
      <CookieClicker />

      <h1>Cat Facts</h1>
      <CatFacts />

      <h1>Users</h1>
      <Users />
    </div>
  );
};

export default App;
