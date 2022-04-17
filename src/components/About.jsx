//_______________________________________________________________________
/*IMPORT DE UTILS*/
import React from "react";
import { Link } from "react-router-dom";
/*IMPORT DE CSS*/
import s from "../estilos/about.module.css";
import perfil from "../estilos/imagenes/perfil.jpg";
import linkedin from "../estilos/imagenes/linkedIn.png";
import github from "../estilos/imagenes/gitHub.png";
import instagram from "../estilos/imagenes/instagram.png";
import twitter from "../estilos/imagenes/twitter.png";
import whatsapp from "../estilos/imagenes/whatsapp.png";
//_______________________________________________________________________

export default function About() {
  return (
    <div className={s.container}>
      <div className={s.perfilContainer}>
        <img className={s.perfil} src={perfil} alt="" />
      </div>

      <div className={s.redesContainer}>
        <div className={s.neon}>
          <a href="wa.link/d70cq2" target="_blank">
            <img
              className={s.red}
              src={whatsapp}
              alt=""
              target="_blank"
              rel="noreferrer"
            />
          </a>
        </div>
        <div className={s.neon}>
          <a
            href="https://www.linkedin.com/in/alejobengo/"
            target="_blank"
            rel="noreferrer"
          >
            <img className={s.linkedin} src={linkedin} alt="" />
          </a>
        </div>
        <div className={s.neon}>
          <a
            href="https://github.com/AlejoBengo"
            target="_blank"
            rel="noreferrer"
          >
            <img className={s.red} src={github} alt="" />
          </a>
        </div>
        <div className={s.neon}>
          <a
            href="https://www.instagram.com/alejobengo/"
            target="_blank"
            rel="noreferrer"
          >
            <img className={s.red} src={instagram} alt="" />
          </a>
        </div>
        <div className={s.neon}>
          <a
            href="https://twitter.com/AlejoBengoMusic"
            target="_blank"
            rel="noreferrer"
          >
            <img className={s.red} src={twitter} alt="" />
          </a>
        </div>
      </div>

      <div className={s.volver}>
        <Link to="/">
          <button className={s.back}>Volver</button>
        </Link>
      </div>

      <div className={s.about}>
        <div className={s.letrasBox}>
          <h1 className={s.letra}>S</h1>
          <h1 className={s.letra}>O</h1>
          <h1 className={s.letra}>B</h1>
          <h1 className={s.letra}>R</h1>
          <h1 className={s.letra}>E</h1>
        </div>
        <br></br>
        <div className={s.text}>
          <p className={s.texto}>
            👋Hi! My name is Alejo and I'm from Argentina. Being deeply
            passionate about learning techniques, skills and new technologies, I
            became a Full Stack Developer, a journalist and, currently, I'm
            studing Economics Sciense. I'm also introducing myself into crypto
            and cybersecurity.
          </p>
          <p className={s.texto}>
            🔎I am looking for a job offer where I could accomplish the aims
            while evolving and acquiring new knowledge.
          </p>
          <p className={s.texto}>
            🗣softSkills I'm a fast learning person who face challenges with
            vehemence, curiosity and creativity. Leadershiping and integration
            are some of my motivations. I can assist and coordinate groups of
            people.
          </p>
          <p className={s.texto}>
            I have worked as a CM. I am experienced in multimedia editing and
            creating (videos, images, redaction, posts). I handle Adobe Package
            and other proggrams like GIMP.
          </p>
        </div>
      </div>
    </div>
  );
}
