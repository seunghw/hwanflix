import React, { useEffect, useState } from "react";
import "./Movies.scss";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "./Config";
import MainImage from "./MainImage";
import GridCards from "./GridCards";
import { Row } from "antd";
import Navbar from "./common/Navbar";

function Movies(props) {
  const [Movies, setMovies] = useState([]);
  const [MainMovieImage, setMainMovieImage] = useState(null);
  const [CurrentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=ko-US&page=1`;

    fetchMovies(endpoint);
  }, []);

  const fetchMovies = (endpoint) => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((response) => {
        console.log(response.results);
        setMovies([...Movies, ...response.results]);
        setMainMovieImage(response.results[8]);
        setCurrentPage(response.page);
      });
  };

  const loadMoreItems = () => {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=ko-US&page=${
      CurrentPage + 1
    }`;

    fetchMovies(endpoint);
  };

  return (
    <div style={{ width: "100%", margin: "0" }}>
      {MainMovieImage && (
        <MainImage
          image={`${IMAGE_BASE_URL}w1280${MainMovieImage.backdrop_path}`}
          title={MainMovieImage.original_title}
          text={MainMovieImage.overview}
        />
      )}
      <div style={{ width: "85%", margin: "1rem auto" }}>
        <h2 style={{ color: "white" }}>Movies by lastest</h2>

        <Row gutter={[16, 16]}>
          {Movies &&
            Movies.map((movie, index) => (
              <React.Fragment key={index}>
                <GridCards
                  image={
                    movie.poster_path
                      ? `${IMAGE_BASE_URL}w500${movie.poster_path}`
                      : null
                  }
                  movieId={movie.id}
                  movieName={movie.original_title}
                />
              </React.Fragment>
            ))}
        </Row>
      </div>

      <div className="profile_set" style={{ padding: "1rem" }}>
        <button className="profile_button" onClick={loadMoreItems}>
          더보기
        </button>
      </div>

      <Navbar />
    </div>
  );
}

export default Movies;
