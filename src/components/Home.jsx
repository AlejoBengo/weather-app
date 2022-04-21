//_______________________________________________________________________
/*IMPORT DE UTILS*/
import React from "react";
import { useSelector } from "react-redux";
/*IMPORT DE COMPONENTES*/
import SearchBar from "./SearchBar";
import Card from "./Card";
/*IMPORT DE CSS*/
import s from "../estilos/home.module.css";
//_______________________________________________________________________

export default function Home() {
  const { city } = useSelector((state) => {
    return state;
  });
  return (
    <div className={s.container}>
      <SearchBar />

      <div className={s.cardsContainer}>
        {city.length > 0 &&
          city.map((data) => (
            <div key={data.id}>
              <Card data={data} />
            </div>
          ))}
      </div>
    </div>
  );
}
