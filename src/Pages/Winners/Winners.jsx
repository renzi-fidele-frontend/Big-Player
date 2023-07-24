import React from "react";
import styles from "./Winners.module.css";
import estiloHome from "../Home/Home.module.css";
import GreenPassCard from "../../Components/GreenPassCard/GreenPassCard";

const Winners = () => {
   return (
      <div id={estiloHome.container} className={styles.container}>
         <section id={estiloHome.hero} className={styles.hero}>
            <div id={estiloHome.startContainer} className={styles.break}>
               <div id={styles.break} className={estiloHome.box1}>
                  <div className={estiloHome.greyBar}>
                     <p>Winners</p>
                  </div>
                  <GreenPassCard titulo={"Green Pass"} descricao={"alterar"} code={"0002"} key={"0002"} data={"01/08/23"} showAllWinners={false} />
                  <hr style={{ color: "grey", height: "1px", marginBlock: "15px", width: "100%" }} />
                  <GreenPassCard titulo={"Green Pass"} descricao={"alterar"} code={"0002"} key={"0002"} data={"01/08/23"} showAllWinners={false} />
               </div>
            </div>
         </section>
      </div>
   );
};

export default Winners;
