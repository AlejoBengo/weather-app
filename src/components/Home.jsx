//_______________________________________________________________________
/*IMPORT DE UTILS*/
import React from "react";
/*IMPORT DE COMPONENTES*/
import SearchBar from "./SearchBar";
import Cards from "./Cards";
/*IMPORT DE CSS*/
import s from "../estilos/home.module.css";
//_______________________________________________________________________

export default function Home() {
  return (
    <div>
      <SearchBar />
      <div className={s.cardsContainer}>
        <Cards />
      </div>
    </div>
  );
}
