import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../../../Config";
import MainImage from "../../../MainImage";
import MovieInfo from "./Section/MovieInfo";
import Navbar from "../../../common/Navbar";

function MovieDetail(props) {
  //   let movieId = props.match.params.movieId;
  let { movieId } = useParams();

  const [movie, setmovie] = useState([]);
  const [morecontent, setmorecontent] = useState([]);

  useEffect(() => {
    const endpointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=ko`;

    const endpointOthers = `${API_URL}movie/popular?api_key=${API_KEY}&language=ko-US&page=1`;

    fetch(endpointInfo)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setmovie(response);
      });

    fetch(endpointOthers)
      .then((response) => response.json())
      .then((response) => {
        console.log("이거거덩", response);
        setmorecontent(response);
      });
  }, []);

  return (
    <div>
      <Navbar />
      {/* Header */}
      {movie.backdrop_path && (
        <MainImage
          image={`${IMAGE_BASE_URL}w1280${movie.backdrop_path}`}
          title={movie.original_title}
          text={movie.overview}
        />
      )}

      {/* body */}
      <div style={{ width: "85%", margin: "1rem auto" }}>
        {/* Movie Info */}
        <MovieInfo movie={movie} />
        <br />

        <Navbar />
        {/* <Row gutter={[16, 16]}>
          {morecontent &&
            morecontent.map((others, index) => (
              <React.Fragment key={index}>
                <GridCards
                  image={
                    others.poster_path
                      ? `${IMAGE_BASE_URL}w500${others.poster_path}`
                      : null
                  }
                  movieId={others.id}
                  movieName={others.original_title}
                />
              </React.Fragment>
            ))}
        </Row> */}
      </div>
    </div>
  );
}

export default MovieDetail;
