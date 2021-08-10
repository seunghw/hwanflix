import React from "react";

function MovieInfo(props) {
  let { movie } = props;

  return (
    <div style={{ color: "white", paddingBottom: "2rem" }}>
      <div className="MainInfo">
        <div>제목 : {movie.original_title}</div>
        <div>재생버튼</div>
        <div>년도 : {movie.release_date}</div>
        <div>런타임 : {movie.runtime}분</div>
        <div>평점 : {movie.vote_average}</div>
        <div>설명 : {movie.overview}</div>
      </div>
      <div className="OtherContents">
        <h2>개봉 예정작</h2>
      </div>
    </div>
  );
}

export default MovieInfo;
