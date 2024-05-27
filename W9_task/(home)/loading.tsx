// W9 -- loading component
    // backend가 fetching하기 전에 즉시 렌더링됨
export default function Loading() {
    return <h2>Loading...</h2>
}

{/* 원리 설명: 
    <Loading />
    const html = await HomePage()
    isLoading ? <Loading /> : html 
*/}