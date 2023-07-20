import React from "react";
import styles from "./Home.module.css";
import avatar from "../../assets/avatar.svg";
import iconStart from "../../assets/iconStart.png";
import { Link } from "react-router-dom";
import GreenPassCard from "../../Components/GreenPassCard/GreenPassCard";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
   return (
      <div id={styles.container}>
         {/*Secao do hero */}
         <section id={styles.hero}>
            <div>
               <div>
                  <div id={styles.left}>
                     <h1 className={styles.titulo1}>Earn</h1>
                     <h2 className={styles.titulo2}>Infinity</h2>
                     <p>Game, Play To Earn, In Terra Classic.</p>
                     <Link to={"#start"}>Start</Link>
                  </div>
                  <div id={styles.right}>
                     <img src={avatar} alt="Ilustração do avatar do site" />
                  </div>
               </div>
            </div>
         </section>

         {/*Secao sobre */}
         <section id={styles.sobre}>
            <h2 className={styles.titulo2}>About us</h2>
            <div>
               <p>Big Player is a pioneering game never seen before. A growth economy</p>
               <span>Your Power in the game increases every day.</span>
               <p>
                  Create account, <span>Adjust your probability</span>
               </p>
               <p>Get advantages, Earn daily</p>
            </div>
         </section>

         {/*Secao de start */}
         <section id={styles.startContainer}>
            <div className={styles.greyBar}>
               <img src={iconStart} alt="Icone do site Big Player" />
               <p>Start Here</p>
            </div>
            <div className={styles.box}>
               <p>
                  Delegate your lunc to Big Player Node
                  <br />
                  <br />- Delegate and gain acess to an account, first
                  <br />- Delegate to participate in the daily draw*
                  <br />
                  <br />
                  *Every 200.000 delegates receive 1 ticket. More lunc delegated, more tockets Daily draw for a $122 Green Pass that will give
                  you acess to all $ prize tournments
               </p>
               <a href="#">Delegate</a>
            </div>

            <div className={styles.box1}>
               <div className={styles.greyBar}>
                  <p>Winner</p>
               </div>
               <GreenPassCard titulo={"Green Pass"} code={"0002"} key={"0002"} data={"01/08/23"} showAllWinners={true} />
            </div>

            <h2 className={styles.titulo2}>Road Map</h2>
            <p>Q3 2023</p>

         </section>
      </div>
   );
};

export default Home;
