import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"

export default function Home() {
  if (typeof window !== "undefined") {
    window.onscroll = function () {
      topFunc()
    }
  }
  function topFunc() {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      document.getElementById("topBtn").classList.add("fedeIn")
    } else {
      document.getElementById("topBtn").classList.remove("fedeIn")
    }
  }
  return (
    <a href="#body" className="topBtn" id="topBtn">
      <span>
        <FontAwesomeIcon icon={faChevronUp} />
        <i className="fas fa-chevron-up" />
      </span>
    </a>
  )
}
