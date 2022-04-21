//_______________________________________________________________________
/*IMPORT DE UTILS*/
import React from "react";
/*IMPORT DE CSS*/
import s from "../estilos/footer.module.css";
import image from "../estilos/imagenes/logo.png";
import linkedIn from "../estilos/imagenes/linkedIn.png";
import gitHub from "../estilos/imagenes/gitHub.png";
//_______________________________________________________________________

export default function Footer() {
  const linkedin = "https://www.linkedin.com/in/alejobengo/";
  const github = "https://github.com/AlejoBengo";
  return (
    <div className={s.container}>
      <div className={s.climateBox}>
        <img className={s.img} src={image} alt="" />
        <h2 className={s.title}>Flow Climate</h2>
      </div>

      <div className={s.imgContainer}>
        <a href={linkedin} target="_blank" rel="noreferrer">
          <img className={s.linkedIn} src={linkedIn} alt="" />
        </a>
        <a href={github} target="_blank" rel="noreferrer">
          <img className={s.github} src={gitHub} alt="" />
        </a>
      </div>
      <div className={s.mineBox}>
        <h2 className={s.mine}>Powered by</h2>
        <h2 className={s.mine}>Alejo Bengoechea</h2>
      </div>
    </div>
  );
}
