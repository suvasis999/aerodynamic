import React from 'react'
import headerCss from "./header.module.css";

function Header() {
  return (
    <nav className={headerCss.navbar}>
        <img src="../../assets/navLogo.png" />
        <img src="../../assets/text.svg" />
    </nav>
  )
}

export default Header