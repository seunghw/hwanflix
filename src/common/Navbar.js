import React from "react";
import { useHistory } from "react-router-dom";
import { FaSearch, FaBell, FaCaretDown } from "react-icons/fa";
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

        <div
          className="menu"
          style={{
            display: "flex",
            color: "white",
            marginLeft: "3rem",
          }}
        >
          <div>홈</div>
          <div>TV 프로그램</div>
          <div>영화</div>
          <div>NEW! 요즘 대세 콘텐츠</div>
          <div>내가 찜한 콘텐츠</div>
        </div>
        <div
          className="menu"
          style={{
            display: "flex",
            color: "white",
            marginLeft: "2rem",
            textAlign: "right",
          }}
        >
          <FaSearch color="white" size="20" />
          <FaBell color="white" size="20" />
          <FaCaretDown color="white" size="20" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
