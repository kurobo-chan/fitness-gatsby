import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons"

export default function Home() {
  function navFunc() {
    document.querySelector("html").classList.toggle("open")
  }

  return (
    <div style={{ position: "relative", zIndex: "1000" }}>
      <button className="openIcon navBtn" onClick={navFunc}>
        <span className="sr-only">MENU</span>
        <span>
          <FontAwesomeIcon icon={faBars} />
        </span>
      </button>
      <button className="closeIcon navBtn" onClick={navFunc}>
        <span className="sr-only">MENU</span>
        <span>
          <FontAwesomeIcon icon={faTimes} />
        </span>
      </button>
    </div>
  )
}
