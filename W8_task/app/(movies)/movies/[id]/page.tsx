// Dynamic route -- URL이 동적으로 정의되는 경우
    // [id]라는 폴더를 만듦으로써 / 뒤에 변수가 올 것을 알려줌 
    // 후에 이 id 이용해서 what data to fetch 결정됨

export default function MovieDetail({
    params: {id}
}: {
    params: {id: string}
}) {
    return <h1>Movie {id}</h1>
}