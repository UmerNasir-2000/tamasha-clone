import { useEffect, useState } from "react";
import AxiosInstance from "../config/axios";
import CarouselSlider from "../shared/components/Carousel/CarouselSlider";
import Row from "../components/row/Row";

const Home = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  const fetchPopularMovies = async () => {
    const { data } = await AxiosInstance.get("/movie/upcoming");
    console.log(data.results);
    setUpcomingMovies(data.results);
  };

  return (
    <>
      <CarouselSlider />
      <Row title="Latest Movies" movies={upcomingMovies} />
      <Row title="Popular Movies" movies={upcomingMovies} />
      <Row title="Upcoming Movies" movies={upcomingMovies} />
      <Row title="Thriller Movies" movies={upcomingMovies} />
    </>
  );
};

export default Home;
