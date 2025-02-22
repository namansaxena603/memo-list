import React from 'react'
import TodoItem from "../components/TodoItem";

function todo(props) {
  return (
    <>
      <div className="container">
        <h3 className="text-center" style={{ fontSize: "1.8rem", fontWeight: "bold" }}>Your Memos</h3>
        {props.todo.length === 0 ? <b>NO Memos TO DISPLAY</b> :
          props.todo.map((todo) => {
            return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
          })
        }
      </div>
    </>
  )
}
export default todo