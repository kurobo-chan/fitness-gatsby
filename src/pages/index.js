import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <div className="hero">
        <figure className="hero-img">
          <StaticImage
            src="../images/hero.jpg"
            alt="FITNESS"
            placeholder="blurred"
            layout="fullWidth"
            formats={["auto", "webp", "avif"]}
          />
        </figure>
        <div className="hero-placeholder" />
        <div className="content">
          <h1>
            <span className="main-msg">SPECIAL FITNESS SPACE</span>
            <span className="sub-msg">楽しくなるフィットネススペース</span>
          </h1>
          <a href="#" className="tryBtn">
            <span>体験してみたい</span>
          </a>
        </div>
      </div>
      <section className="menu">
        <div className="partsGrid">
          <div className="grid12 menu-contents">
            <a href="#" className="contents">
              <figure>
                <StaticImage
                  src="../images/menuA.jpg"
                  alt="menu1"
                  placeholder="blurred"
                  layout="fullWidth"
                  formats={["auto", "webp", "avif"]}
                />
              </figure>
              <div className="text">
                <h2 className="menuTitle">FITNESSについて</h2>
                <p>
                  初心者から本格的に鍛えたい人まで、地域の人の健康づくりに役立ちます！
                </p>
              </div>
            </a>
            <a href="#" className="contents">
              <figure>
                <StaticImage
                  src="../images/menuB.jpg"
                  alt="menu2"
                  placeholder="blurred"
                  layout="fullWidth"
                  formats={["auto", "webp", "avif"]}
                />
              </figure>
              <div className="text">
                <h2 className="menuTitle">マシン一覧</h2>
                <p>当店常設のマシンを動画でご紹介します！</p>
              </div>
            </a>
            <a href="#" className="contents">
              <figure>
                <StaticImage
                  src="../images/menuC.jpg"
                  alt="menu3"
                  placeholder="blurred"
                  layout="fullWidth"
                  formats={["auto", "webp", "avif"]}
                />
              </figure>
              <div className="text">
                <h2 className="menuTitle">入会手続きについて</h2>
                <p>ご入会方法などをご案内します！</p>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="msg">
        <div className="partsGrid">
          <div className="grid12 msg-contents">
            <h2>はじめてのジム</h2>
            <p>
              ダイエットや健康寿命を延ばすためという方から、本格的に身体を鍛えたい人まで、あなたに合った利用方法で活用できる、近くに合って良かったというフィットネスジムを目指します。
            </p>
          </div>
        </div>
      </section>
      <section className="news">
        <div className="partsGrid">
          <div className="grid12">
            <h2 className="contentsTitle">お知らせ</h2>
            <div className="posts">
              <article className="post">
                <a href="#">
                  <time className="time">2020.11.11</time>
                  <h3 className="postTitle">
                    ウィルス対応HEPAフィルター搭載空気清浄機の設置
                  </h3>
                </a>
              </article>
              <article className="post">
                <a href="#">
                  <time className="time">2020.11.11</time>
                  <h3 className="postTitle">
                    ウィルス対応HEPAフィルター搭載空気清浄機の設置
                  </h3>
                </a>
              </article>
              <article className="post">
                <a href="#">
                  <time className="time">2020.11.11</time>
                  <h3 className="postTitle">
                    ウィルス対応HEPAフィルター搭載空気清浄機の設置
                  </h3>
                </a>
              </article>
              <article className="post">
                <a href="#">
                  <time className="time">2020.11.11</time>
                  <h3 className="postTitle">
                    ウィルス対応HEPAフィルター搭載空気清浄機の設置
                  </h3>
                </a>
              </article>
            </div>
          </div>
        </div>
      </section>
      <section className="feedback">
        <div className="partsGrid">
          <div className="grid12">
            <h2 className="contentsTitle">お客様の声</h2>
            <div className="reviews">
              <div className="review">
                <div className="photo">
                  <figure>
                    <StaticImage
                      src="../images/review.jpg"
                      alt=""
                      placeholder="blurred"
                      layout="fullWidth"
                      formats={["auto", "webp", "avif"]}
                    />
                  </figure>
                  <h3 className="reviewTitle">Ｓさん（男性）</h3>
                </div>
                <p>
                  久しぶりにジムに通いたくなり、見学に行ったところスタッフの方と話が盛り上がり長い事お話をしてしまいました。
                  室内の雰囲気も良く、水素水も飲み放題だったので即決…
                </p>
              </div>
              <div className="review">
                <div className="photo">
                  <figure>
                    <StaticImage
                      src="../images/review.jpg"
                      alt=""
                      placeholder="blurred"
                      layout="fullWidth"
                      formats={["auto", "webp", "avif"]}
                    />
                  </figure>
                  <h3 className="reviewTitle">Ｓさん（男性）</h3>
                </div>
                <p>
                  久しぶりにジムに通いたくなり、見学に行ったところスタッフの方と話が盛り上がり長い事お話をしてしまいました。
                  室内の雰囲気も良く、水素水も飲み放題だったので即決…
                </p>
              </div>
              <div className="review">
                <div className="photo">
                  <figure>
                    <StaticImage
                      src="../images/review.jpg"
                      alt=""
                      placeholder="blurred"
                      layout="fullWidth"
                      formats={["auto", "webp", "avif"]}
                    />
                  </figure>
                  <h3 className="reviewTitle">Ｓさん（男性）</h3>
                </div>
                <p>
                  久しぶりにジムに通いたくなり、見学に行ったところスタッフの方と話が盛り上がり長い事お話をしてしまいました。
                  室内の雰囲気も良く、水素水も飲み放題だったので即決…
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
