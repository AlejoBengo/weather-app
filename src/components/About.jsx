//_______________________________________________________________________
/*IMPORT DE UTILS*/
import React from "react";
import { Link } from "react-router-dom";
/*IMPORT DE CSS*/
import s from "../estilos/about.module.css";
import e from "../estilos/logos.module.css";
import perfil from "../estilos/imagenes/perfil.jpg";
import linkedin from "../estilos/imagenes/linkedin.png";
import github from "../estilos/imagenes/github.png";
import instagram from "../estilos/imagenes/instagram.png";
import twitter from "../estilos/imagenes/twitter.png";
import whatsapp from "../estilos/imagenes/whatsapp.png";
import css from "../estilos/imagenes/logos/css.png";
import express from "../estilos/imagenes/logos/express.png";
import firebase from "../estilos/imagenes/logos/firebase.png";
import git from "../estilos/imagenes/logos/git.png";
import heroku from "../estilos/imagenes/logos/heroku.png";
import html from "../estilos/imagenes/logos/html.png";
import javascript from "../estilos/imagenes/logos/javascript.png";
import jquery from "../estilos/imagenes/logos/jquery.png";
import node from "../estilos/imagenes/logos/node.png";
import postgresql from "../estilos/imagenes/logos/postgresql.png";
import react from "../estilos/imagenes/logos/react.png";
import redux from "../estilos/imagenes/logos/redux.png";
import sequelize from "../estilos/imagenes/logos/sequelize.png";
//_______________________________________________________________________

export default function About() {
  return (
    <div className={s.container}>
      <div className={s.itemsLand}>
        <Link className={s.backBox} to="/" style={{ textDecoration: "none" }}>
          <button className={s.back}>Back</button>
        </Link>
        <div className={s.itemsBox}>
          <img className={e.css} src={css} alt="" />
          <img className={e.express} src={express} alt="" />
          <img className={e.firebase} src={firebase} alt="" />
          <img className={e.git} src={git} alt="" />

          <img className={e.sequelize} src={sequelize} alt="" />
        </div>
        <div className={s.itemsBox2}>
          <img className={e.heroku} src={heroku} alt="" />
          <img className={e.html} src={html} alt="" />
          <img className={e.javascript} src={javascript} alt="" />
          <img className={e.jquery} src={jquery} alt="" />
        </div>
        <div className={s.itemsBox3}>
          <img className={e.node} src={node} alt="" />
          <img className={e.postgresql} src={postgresql} alt="" />
          <img className={e.react} src={react} alt="" />
          <img className={e.redux} src={redux} alt="" />
        </div>
        <div className={s.redesBox}>
          <a
            href="https://www.linkedin.com/in/alejobengo/"
            target="_blank"
            rel="noreferrer"
          >
            <img className={e.linkedin} src={linkedin} alt="" />
          </a>
          <a
            href="https://github.com/AlejoBengo"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img className={e.github} src={github} alt="" />
          </a>
          <a
            href="https://www.instagram.com/alejobengo/?hl=es"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img className={e.instagram} src={instagram} alt="" />
          </a>
          <a
            href="https://twitter.com/AlejoBengoMusic"
            target="_blank"
            rel="noreferrer"
          >
            <img className={e.twitter} src={twitter} alt="" />
          </a>
          <a href="wa.link/91l2fd" target="_blank" rel="noreferrer">
            <img className={e.whatsapp} src={whatsapp} alt="" />
          </a>
        </div>
      </div>
      <div className={s.aboutMe}>
        <div className={s.letrasBox}>
          <h1 className={s.letra}>A</h1>
          <h1 className={s.letra}>B</h1>
          <h1 className={s.letra}>O</h1>
          <h1 className={s.letra}>U</h1>
          <h1 className={s.letraT}>T</h1>
          <h1 className={s.letra}>M</h1>
          <h1 className={s.letra}>E</h1>
        </div>
        <img className={s.perfil} src={perfil} alt="" />
        <h3 className={s.name}>Alejo Bengoechea</h3>
        <p className={s.text}>
          He is 20 years old and lives in Argentina. Deeply passionate about
          learning techniques, skills and new technologies, Alejo became a Full
          Stack Developer, a journalist and, in an near future, an economist. He
          is also introducing into crypto and cybersecurity. Alejo is a fast
          learning person who faces challenges with vehemence, curiosity and
          creativity. Leadershiping and integration are some of his motivations.
          He assist and coordinate groups of people. Has worked as a CM and is
          experienced in multimedia editing and creating (videos, images,
          redaction, posts). Furthermore, can handle the Adobe Package and other
          proggrams like GIMP.
        </p>
      </div>
    </div>
  );
}
