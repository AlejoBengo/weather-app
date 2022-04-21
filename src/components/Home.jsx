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

  let arr = [];
  let arr2 = [];
  for (let i = 0; i < city.length; i++) {
    if (!arr2.includes(city[i].id)) {
      arr2.push(city[i].id);
      arr.push(city[i]);
    }
  }

  return (
    <div className={s.container}>
      <SearchBar />

      <div className={s.cardsContainer}>
        {arr.length > 0 &&
          arr.map((data) => (
            <div className={s.eachCardContainer} key={data.id}>
              <Card data={data} />
            </div>
          ))}
      </div>
    </div>
  );
}
