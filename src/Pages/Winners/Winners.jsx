import React from "react";
import styles from "./Winners.module.css";
import estiloHome from "../Home/Home.module.css";
import GreenPassCard from "../../Components/GreenPassCard/GreenPassCard";

const Winners = () => {
   return (
      <div id={styles.container}>
         <div id={estiloHome.startContainer}>
            <div className={estiloHome.box1}>
               <div className={estiloHome.greyBar}>
                  <p>Winners</p>
               </div>
               <GreenPassCard titulo={"Green Pass"} code={"0002"} key={"0002"} data={"01/08/23"} showAllWinners={true} />
               <hr style={{ color: "grey", height: "1px", marginBlock: "15px", width: "100%" }} />
               <GreenPassCard titulo={"Green Pass"} code={"0002"} key={"0002"} data={"01/08/23"} showAllWinners={true} />
            </div>
         </div>
      </div>
   );
};

export default Winners;
