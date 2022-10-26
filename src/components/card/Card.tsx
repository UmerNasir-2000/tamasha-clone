import React from "react";
import IMovieCard from "../../interfaces/movie-card";
import styles from "./Card.module.css";

const Card: React.FunctionComponent<IMovieCard> = (movie) => {
  return (
    <article className={styles.item}>
      <img src={movie.poster_path} />
    </article>
  );
};

export default Card;
