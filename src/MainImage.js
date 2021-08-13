// eslint-disable-next-line
import React from "react";
import { FaPlay } from "react-icons/fa";
function MainImage(props) {
  return (
    <div
      style={{
        background: `linear-gradient(to bottom, rgba(0,0,0,0)
    39%,rgba(0,0,0,0)
    41%,rgba(0,0,0,0.65)
    71%,rgba(0,0,0,0.65)
    100%),
    url('${props.image}'), #1c1c1c`,
        height: "500px",
        backgroundSize: "100%, cover",
        backgroundPosition: "center, center",
        width: "100%",
        position: "relative",
      }}
    >
      <div>
        <div
          style={{
            position: "absolute",
            maxWidth: "400px",
            bottom: "2rem",
            marginLeft: "2rem",
          }}
        >
          <h1 style={{ color: "white", paddingBottom: "1rem" }}>
            {props.title}
          </h1>
          <p
            style={{
              color: "white",
              fontSize: "0.9rem",
              paddingBottom: "1rem",
            }}
          >
            {" "}
            {props.text}
          </p>
          <button
            className="Manage_profile_button"
            onClick={() => {
              alert("준비중입니다!");
            }}
          >
            <FaPlay size="10" />
            재생
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainImage;
