import React from "react";
// import {hot} from "react-hot-loader";
import TodoApp from "./components/TodoApp";
import "./App.css";

const App = () => {
  return(
    <div className="App">
      <h1 style={{textAlign:'center'}}>     Todo App 
      </h1>
      <TodoApp />
    </div>
  );
}

export default App;