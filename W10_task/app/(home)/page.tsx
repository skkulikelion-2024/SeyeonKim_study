// 무조건 app/page라는 이름이어야 함
    // 폴더(경로) 안에 page 파일 없으면 invisible
    // NextJS가 알아서 layout과 page 파일을 찾아냄

// function 이름은 상관없지만 무조건 default로 설정되어야 함
 
// 파일 이름을 괄호로 묶어 저장하면 URL 바뀌지 않음 (프레임워크가 무시)

import Link from "next/link";
import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";

export const metadata = {
    title: 'Home',
}
  
export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies"

// W9 update -- data fetching
async function getMovies() {
    // 옛날 방식: client side. useState, useEffect 사용해서 data fetch
    // 이번 방식: server side. 백엔드에서 실행
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch(API_URL);
    const json = await response.json();
    return json;
}

export default async function HomePage() {
    const movies = await getMovies();
    return (
        <div>
            {movies.map(
                movie => (
                    <div key={movie.id}>
                        <img src={movie.poster_path} alt={movie.title} />
                        <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
                    </div>
                ))
            }
        </div>
    )
}

