// Dynamic route -- URL이 동적으로 정의되는 경우
    // [id]라는 폴더를 만듦으로써 / 뒤에 변수가 올 것을 알려줌 
    // 후에 이 id 이용해서 what data to fetch 결정됨

import { URL } from "../../../(home)/page";
import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
// 질문할 거 - import 안됨

// W9 -- parallel requests
async function getMovie(id: string) {
    console.log(`Fetching movies: ${Date.now()}`);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch(`${URL}/${id}`);
    // 질문할 거 - URL 대신 API_URL
    return response.json();
}

async function getVideos(id: string) {
    console.log(`Fetching movies: ${Date.now()}`);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    throw new Error("Something broke...");
    const response = await fetch(`${URL}/${id}`);
    return response.json();
}

// W9 update -- Suspense
export default async function MovieDetail({
    params: {id}
}: {
    params: {id: string };
}) {
    const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
    return (
        <div>
            <h3>Movie detail page</h3>
            <Suspense fallback={<h1>Loading movie info</h1>}>
                <MovieInfo id={id} />
            </Suspense>
            <Suspense fallback={<h1>Loading movie videos</h1>}>
                <MovieVideos id={id} />
            </Suspense>
        </div>
    )
}