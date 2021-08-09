import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../../../Config";
import MainImage from "../../../MainImage";

function MovieDetail(props) {
  //   let movieId = props.match.params.movieId;
  let { movieId } = useParams();

  const [movie, setmovie] = useState([]);

  useEffect(() => {
    let endpointCrew = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;

    let endpointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=ko`;

    fetch(endpointInfo)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setmovie(response);
      });
  }, []);

  return (
    <div>
      {/* Header */}
      {MainImage && (
        <MainImage
          image={`${IMAGE_BASE_URL}w1280${movie.backdrop_path}`}
          title={movie.original_title}
          text={movie.overview}
        />
      )}

      {/* body */}
      <div style={{ width: "85%", margin: "1rem auto" }}>
        {/* Movie Info */}

        <br />
        {/* Action Grid */}
        <div
          style={{ display: "flex", justifyContent: "center", margin: "2rem" }}
        >
          <button> Toggle actor view </button>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
