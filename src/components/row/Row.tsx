import React from "react";
import IMovieCard from "../../interfaces/movie-card";
import { BASE_IMAGE_PATH } from "../../utils/constants";
import Card from "../card/Card";
import styles from "./Row.module.css";

export interface IRowProps {
  title: string;
  movies: IMovieCard[];
}

const Row: React.FunctionComponent<IRowProps> = ({ title, movies }) => {
  return (
    <section style={{ marginTop: "40px", padding: "10px" }}>
      <p className="text-primary" style={{ marginBottom: "40px" }}>
        {title}
      </p>

      <div className={styles.container}>
        {movies.slice(0, 9).map(({ id, poster_path }) => (
          <Card
            key={id}
            id={id}
            poster_path={`${BASE_IMAGE_PATH}/${poster_path}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Row;
