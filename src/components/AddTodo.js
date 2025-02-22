import React, { useState } from "react";
// import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";
// import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";

function AddTodo(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Memo TITLE OR Memo DESCRIPTION CANNOT BE BLANK");
    } else {
      props.addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  };
  return (
    <div className="container my-3">
      <form onSubmit={submit}>
        <div className="form-group" style={{ fontWeight: "bold" }}>
          <label htmlFor="title">Memo Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group" style={{ fontWeight: "bold" }}>
          <label htmlFor="desc">Memo Description</label>
          <input
            type="text"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            className="form-control"
            id="desc"
          />
        </div>
        <button
          type="submit"
          className="btn btn-success rounded-pill"
          style={{ border: "1px solid black" }}
        >
          {/* <AddCircleOutlineRoundedIcon /> */}+
        </button>
      </form>
    </div>
  );
}
export default AddTodo;
