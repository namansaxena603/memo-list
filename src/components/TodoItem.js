import React from 'react'

function TodoItem({ todo, onDelete }) {
  return (
    <div className='main'>

      <h4><b className='bold mx-3' style={{ color: "gray" }}>Title :</b> {todo.title}</h4>
      <h4><b className='bold mx-3' style={{ color: "gray" }}>Description :</b> {todo.description}</h4>
      <i className="fa-sharp fa-solid fa-trash-can fa-xl" id='trash' onClick={() => { onDelete(todo) }}></i>
      <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">Mark As Done</label>
      </div>
      <hr className='hr' style={{ backgroundColor: "white" }} />
    </div>
  )

}
export default TodoItem
