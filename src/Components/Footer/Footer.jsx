import React from "react";
import styles from "./Footer.module.css";
import { BsDiscord, BsMailbox, BsTelegram, BsTwitter } from "react-icons/bs";

const Footer = () => {
   return (
      <footer id={styles.container}>
         <ul>
            <a href="#">
               <BsTwitter />
            </a>
            <a href="#">
               <BsTelegram />
            </a>
            <a href="#">
               <BsDiscord />
            </a>
            <a href="#">
               <BsMailbox />
            </a>
         </ul>
         <p>© 2023 copyright - BigPlayer.io</p>
      </footer>
   );
};

export default Footer;
