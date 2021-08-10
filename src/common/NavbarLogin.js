import React from "react";
import { useHistory } from "react-router-dom";

function Navbar() {
  let history = useHistory();

  return (
    <div>
      <div className="Navbar">
        <img
          src="/img/logo.png"
          alt=""
          width="100px"
          onClick={() => {
            history.push("/");
          }}
        ></img>
      </div>
    </div>
  );
}

export default Navbar;
