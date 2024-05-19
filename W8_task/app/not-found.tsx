// layout, page, "not-found" -- 특수한 파일 이름
    // 존재하지 않는 모든 경로에 대해 출력됨

import { Metadata } from "next"
import Navigation from "../components/navigation"

export const metadata: Metadata = {
    title: "Not found",
}

export default function NotFound() {
    return (
        <div>
            <Navigation />
            <h1>Not Found!</h1>
        </div>
    )
}