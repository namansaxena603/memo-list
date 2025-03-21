import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function TodoItem({ todo, onDelete, onEdit, id }) {
  return (
    <div className="main">
      <h4>
        <b className="bold mx-3" style={{ color: "gray" }}>
          Title :
        </b>{" "}
        {todo.title}
      </h4>
      <h4>
        <b className="bold mx-3" style={{ color: "gray" }}>
          Description :
        </b>
        {todo.description}
      </h4>
      <EditIcon
        sx={{ color: "goldenrod", marginRight: "50px" }}
        onClick={() => {
          onEdit(id, todo);
        }}
      />

      <DeleteIcon
        sx={{ color: "red" }}
        onClick={() => {
          onDelete(todo);
        }}
      />

      <div className="form-group form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Mark As Done
        </label>
      </div>
      <hr className="hr" style={{ backgroundColor: "white" }} />
    </div>
  );
}
export default TodoItem;
