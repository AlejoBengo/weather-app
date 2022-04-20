//_______________________________________________________________________
/*IMPORT DE UTILS*/
import React from "react";
import { Link } from "react-router-dom";
/*IMPORT DE CSS*/
import s from "../estilos/landingpage.module.css";
import one from "../estilos/imagenes/1.jpg";
import two from "../estilos/imagenes/2.jpg";
import three from "../estilos/imagenes/3.jpg";
import four from "../estilos/imagenes/4.jpg";
import five from "../estilos/imagenes/5.jpg";
//_______________________________________________________________________

export default function LandingPage() {
  return (
    <div className={s.container}>
      <div className={s.subContainer}>
        <div className={s.startBox}>
          <h1 className={s.title}>Flow Climate</h1>
          <Link to="home">
            <button className={s.iniciar}>Iniciar</button>
          </Link>
        </div>
        <div className={s.startBox}>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <h1 className={s.about}>About Me</h1>
          </Link>
        </div>
      </div>
      <ul className={s.listado}>
        <li className={s.eachSlide}>
          <img className={s.eachImg} src={one} alt="" />
        </li>

        <li className={s.eachSlide}>
          <img className={s.eachImg} src={two} alt="" />
        </li>

        <li className={s.eachSlide}>
          <img className={s.eachImg} src={three} alt="" />
        </li>

        <li className={s.eachSlide}>
          <img className={s.eachImg} src={four} alt="" />
        </li>

        <li className={s.eachSlide}>
          <img className={s.eachImg} src={five} alt="" />
        </li>
      </ul>
    </div>
  );
}
