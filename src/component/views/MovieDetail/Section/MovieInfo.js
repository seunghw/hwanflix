import React from "react";

function MovieInfo(props) {
  let { movie } = props;

  return (
    <div style={{ color: "white", paddingBottom: "2rem" }}>
      <div
        className="MainInfo"
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "2rem",
          paddingBottom: "2rem",
        }}
      >
        <div style={{ fontSize: "20px", paddingRight: "2.2rem" }}>개요 :</div>
        <div style={{ fontSize: "20px", paddingRight: "2.2rem" }}>
          {movie.release_date}
        </div>
        <div style={{ fontSize: "20px", paddingRight: "2.2rem" }}>
          {movie.runtime}분
        </div>
        <div style={{ fontSize: "20px", paddingRight: "2.2rem" }}>
          {movie.vote_average}
        </div>
        <div style={{ fontSize: "20px", paddingRight: "2.2rem" }}>
          {movie.status}
        </div>
        <div style={{ fontSize: "20px", paddingRight: "2.2rem" }}>
          {movie.original_language}
        </div>
        {/* <div style={{}}>설명 : {movie.overview}</div> */}
      </div>
      <div
        style={{
          fontSize: "15px",
          paddingRight: "2rem",
          paddingBottom: "2rem",
        }}
      >
        <h2
          style={{
            paddingBottom: "1rem",
          }}
        >
          TAG LINE
        </h2>
        <p
          style={{
            fontSize: "17px",
          }}
        >
          "{movie.tagline}"
        </p>
        <span
          style={{
            fontSize: "12px",
          }}
        >
          -영화 {movie.title} 중에서-
        </span>
      </div>
      <div className="OtherContents">
        <h2>개봉 예정작</h2>
        <div style={{ fontSize: "1rem", position: "center" }}>
          준비중입니다.
        </div>
      </div>
    </div>
  );
}

export default MovieInfo;
