// about-us 페이지에서만 적용되는 레이아웃 (root layout에 대한 하위 layout)

export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div>
            {children}  
            &copy; Next JS is great!
        </div> 
    )
  }
  