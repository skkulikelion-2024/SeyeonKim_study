// Dynamic route -- URL이 동적으로 정의되는 경우
    // [id]라는 폴더를 만듦으로써 / 뒤에 변수가 올 것을 알려줌 
    // 후에 이 id 이용해서 what data to fetch 결정됨

import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
// 질문할 거 - components에 파일 만들기

interface IParams {
    params: {id: string};   
}

export async function generateMetadata({params: {id}}: IParams) {
    const movie = await getMovie(id)
    return {
        title: movie.title
    };
}

// Suspense
export default async function MovieDetailPage({params: {id}}: IParams) {
    return (
        <div>
            <Suspense fallback={<h1>Loading movie info</h1>}>
                <MovieInfo id={id} />
            </Suspense>
            <Suspense fallback={<h1>Loading movie videos</h1>}>
                <MovieVideos id={id} />
            </Suspense>
        </div>
    )
}