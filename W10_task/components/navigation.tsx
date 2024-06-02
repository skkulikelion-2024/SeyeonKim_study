"use client";
// --> backend에서 render, frontend에서 hydrate & interactive된다
// use client가 붙어있는 것들만 downloaded by browser & hydrated

import Link from "next/link";
import { usePathname } from "next/navigation";
// import { useState } from "react";
import styles from "../styles/navigation.module.css"

export default function Navigation() {
    const path = usePathname();
    // usePathname: 현재 위치한 URL의 pathname 읽을 수 있게 해주는 client component hook
        // if w/o "use client" string, "Error: usePathname only used in a client component"
    // const [count, setCount] = useState(0)
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link href="/">Home</Link> 
                    {path === "/" ? "🐾" : ""}
                    {/* 특이점: react-router처럼, a 태그 대신 Link 컴포넌트 import */}
                    {/* 브라우저의 내비게이션 대신 프레임워크의 내비게이션 사용 */}
                </li>
                <li>
                    <Link href="/about-us">About Us</Link> 
                    {path === "/about-us" ? "🐾" : ""}
                </li>
                {/* <li>
                    <button onClick={() => setCount(c => c+1)}>
                        {count}
                    </button>
                </li> */}
            </ul>
        </nav>
    );
}

// "Rendering" -- components를 브라우저가 이해할 수 있는 html로 변환
// Dif rendering method btw Next & React
    // React rendering -- client side rendering
        // all rendering done by client(browser)
        // client가 JS 로드하고, JS가 UI 빌드
    // Next rendering -- server side rendering (default)
        // 백엔드에서 렌더링 수행, JS 없어도 됨

// Hydration
    // "dehydrated 컴포넌트를 hydrate시키는 것"
    // (SSR로) non interactive한 HTML을 먼저 렌더링하고
    // (client 측 JS로) 나중에 React를 붙임

// server component 안에 client component --> O
// client component 안에 server component --> X