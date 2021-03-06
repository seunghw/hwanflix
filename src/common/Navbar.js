import React from "react";
import { useHistory } from "react-router-dom";
import { FaSearch, FaBell, FaCaretDown } from "react-icons/fa";
function Navbar() {
  let history = useHistory();

  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
      }}
    >
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
            alignItems: "center",
          }}
        >
          <div className="profile_name" style={{ marginLeft: "17px" }}>
            홈
          </div>
          <div style={{ marginLeft: "17px" }}>TV 프로그램</div>
          <div style={{ marginLeft: "17px" }}>영화</div>
          <div style={{ marginLeft: "17px" }}>NEW! 요즘 대세 콘텐츠</div>
          <div style={{ marginLeft: "17px" }}>내가 찜한 콘텐츠</div>
        </div>
        <div
          className="menu"
          style={{
            position: "absolute",
            display: "flex",
            right: "8%",
            height: "100%",
            color: "white",
            marginLeft: "2rem",
            textAlign: "right",
          }}
        >
          <div style={{ marginLeft: "20px" }}>
            <FaSearch color="white" size="20" />
          </div>
          <div style={{ marginLeft: "20px" }}>
            <FaBell color="white" size="20" />
          </div>
          <div style={{ marginLeft: "20px" }}>
            <FaCaretDown color="white" size="20" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
