import { useEffect, useState } from "react";
import Movie from "../components/Project - Movie";
import styles from "./Project - Home.css";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([])
    // async-await -- 요즘 좀 더 보편적으로 사용하는 방법
    const getMovies = async() => {
        const response = await fetch(
            `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
        );
        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false);
    };
    useEffect(() => {
        // then -- 잘 사용하지 않는 방법
        // fetch(
        //     `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
        // )
        //     .then((response) = response(json))
        //     .then((json) => setMovies(json.data.movies));
        //         setMovies(json.data.movies);
        //         setLoading(false);
        getMovies();
    }, []);
    return (
        <div>
            {loading ? (
                <h1>Loading</h1>
            ) : (
                <div>
                    {movies.map((movie) => (
                        <Movie 
                            key={movie.id}
                            coverImg={movie.medium_cover_image} 
                            title={movie.title} 
                            summary={movie.summary} 
                            genres={movie.genres}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;