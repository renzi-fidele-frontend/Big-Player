import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"

const Header = () => {
   return (
      <header id={styles.container}>
         <nav>
            <Link>
               <img id={styles.logo} src={logo} alt="Logo do Big Game" />
            </Link>
            <Link to={"/#about"}>About</Link>
            <Link to={"/#roadmap"}>Road map</Link>
         </nav>
      </header>
   );
};

export default Header;
