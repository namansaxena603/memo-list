import React from "react";

function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
        style={{ height: "10vh" }}
      >
        <a className="navbar-brand" style={{ fontWeight: "bold" }} href="#">
          {props.title}
        </a>

        <div className="custom-control custom-switch">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customSwitch1"
          />
          <label
            className="custom-control-label"
            onClick={props.toggleMode}
            htmlFor="customSwitch1"
          >
            {props.mode === "light" ? "Enable Dark Mode" : "Disable Dark Mode"}
          </label>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
