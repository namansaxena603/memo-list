import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";
import Footer from "./components/Footer";
import AddTodo from "./components/AddTodo";
function App() {
  const [mode, setMode] = useState("light");
  const [edit, setEdit] = useState(false);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const onEdit = (id, todo) => {
    setEdit(true);
    let newTitle = prompt("Enter new title");
    let newDesc = prompt("Enter new description");
    let newTodo = { sno: id, title: newTitle, description: newDesc };
    setTodos(
      todos.map((e) => {
        return e === todo ? newTodo : e;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      description: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <div className="App" style={{ fontFamily: "Poppins, sansSerif" }}>
      <Navbar
        title="Memo-List"
        mode={mode}
        toggleMode={toggleMode}
        searchBar={false}
      />
      <AddTodo addTodo={addTodo} />
      <Todo todo={todos} onDelete={onDelete} onEdit={onEdit} />
      <Footer />
    </div>
  );
}
export default App;
