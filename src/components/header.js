import React from "react"
import NavBtn from "../components/navBtn"
import { Link } from "gatsby"

export default function Home() {
  return (
    <header className="header">
      <div className="inner">
        <div className="header-top partsGrid">
          <div className="inner">
            <Link to={`/`} className="sitename">
              <span>FITNESS</span>
            </Link>
            <NavBtn />
          </div>
        </div>
        <nav className="nav">
          <div className="nav-placeholder" />
          <div className="content">
            <ul className="inner">
              <li>
                <Link to={`/`}>TOP</Link>
              </li>
              <li>
                <a href="#">FITNESSについて</a>
              </li>
              <li>
                <a href="#">特徴</a>
              </li>
              <li>
                <a href="#">マシン一覧</a>
              </li>
              <li>
                <a href="#">料金プラン</a>
              </li>
              <li>
                <a href="#">入会申込み</a>
              </li>
              <li>
                <a href="#">お問い合わせ</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}
