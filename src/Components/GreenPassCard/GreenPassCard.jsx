import React from "react";
import styles from "./GreenPassCard.module.css";
import { BsGlobe } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const GreenPassCard = ({ code, titulo, descricao, data, showAllWinners }) => {
   const navegar = useNavigate();

   return (
      <div id={styles.container}>
         <div id={styles.left}>
            <BsGlobe style={{ fontSize: "2.4em" }} />

            <p>PASS</p>
            <span>{code}</span>
         </div>
         <div id={styles.right}>
            <div>
               <h5>{titulo}</h5>
               <p>Next</p>
               <p>{descricao}</p>
               <span>{data}</span>
            </div>
            {showAllWinners === true ? (
               <p
                  onClick={() => {
                     navegar("/winners");
                  }}
               >
                  All Winners
               </p>
            ) : undefined}
         </div>
      </div>
   );
};

export default GreenPassCard;
