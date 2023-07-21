import React from "react";
import styles from "./Footer.module.css";
import { BsDiscord, BsTelegram, BsTwitter,  } from "react-icons/bs";
import { GrMail} from "react-icons/gr";

const Footer = () => {
   return (
      <footer id={styles.container}>
         <ul>
            <a href="https://twitter.com/bigplayer_io">
               <BsTwitter />
            </a>
            <a href="https://t.me/bigplayer_io">
               <BsTelegram />
            </a>
            <a href="https://discord.com">
               <BsDiscord />
            </a>
            <a href="mailto:info@bigplayer.io">
               <GrMail />
            </a>
         </ul>
         <p>© 2023 copyright - BigPlayer.io</p>
      </footer>
   );
};

export default Footer;
