import React from "react";
import Login from "./Login";

const isLoggedIn = false;
const currentTime = new Date().getHours();

console.log(currentTime);

function App() {
  return (
    <div className="container">{isLoggedIn ? <h1>Hello</h1> : <Login />}</div>
    //currentTime > 18 ? <h1>Why are you still working?!</h1> : null
    //currentTime > 18 && <h1>Why are you still working?!</h1>
  );
}

export default App;
