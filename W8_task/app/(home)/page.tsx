// 무조건 app/page라는 이름이어야 함
    // 폴더(경로) 안에 page 파일 없으면 invisible
    // NextJS가 알아서 layout과 page 파일을 찾아냄

// function 이름은 상관없지만 무조건 default로 설정되어야 함
 
// 파일 이름을 괄호로 묶어 저장하면 URL 바뀌지 않음 (프레임워크가 무시)

export const metadata = {
    title: 'Home',
  }
  
export default function Amugona() {
    return (
        <div>
            <h1>Hello!</h1>
        </div>
    )
}

