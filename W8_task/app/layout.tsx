// 재사용되는 컴포넌트 한 번만 작성하기 위해 layout 사용
// layout 컴포넌트 먼저 렌더링하고 그 다음 URL 따라가서 렌더링
  // 이때 
// layout 중첩 가능 (상위 layout 렌더링한 다음 하위 폴더인 layout.tsx 렌더링)

import { Metadata } from "next"
import Navigation from "../components/navigation"

export const metadata :Metadata= {
  title: {
    template: '%s | Next Movies',   // metadata에 대한 템플릿
    default: 'Loading...'
  },
  description: 'The best movies on the best framework',
}
// Metadata는 document의 head에 들어갈 내용 정의
  // layout 시스템과 비슷, 단 layout은 중첩되지 않고 병합됨
  // layout과 page 파일에만 (서버 컴포넌트에만) 있을 수 있음!

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}  
        {/* 페이지를 로드할 때마다 Layout 안에 이동하려는 페이지를 children prop으로 넣음 */}
      </body>
    </html>
  )
}
