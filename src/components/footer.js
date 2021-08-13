import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faInstagram, faFacebookF } from "@fortawesome/free-brands-svg-icons"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"
import TopBtn from "../components/topBtn"

export default function Home() {
  return (
    <footer className="footer">
      <div className="f-head">
        <div className="partsGrid">
          <div className="grid12">
            <p className="sitename">FITNESS</p>
            <div className="address">
              <p>FITNESS（フィットネス）</p>
              <p>沖縄県鳥尻分群久米鳥町字鳥鳥グスク</p>
              <p>0000-0000-0000</p>
            </div>
            <ul className="sns">
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faFacebookF} />
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                  <i className="fab fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="f-foot">
        <p className="copylight">©2021 FITNESS</p>
       <TopBtn/>
      </div>
    </footer>
  )
}
