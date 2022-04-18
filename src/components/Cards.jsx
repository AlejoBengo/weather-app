//_______________________________________________________________________
/*IMPORT DE UTILS*/
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
/*IMPORT DE COMPONENTES*/
import Card from "./Card";
/*IMPORT DE CSS*/
import s from "../estilos/cards.module.css";
//_______________________________________________________________________

export default function Cards() {
  const { city } = useSelector((state) => {
    return state;
  });

  return (
    <div className={s.container}>
      {city.length > 0 &&
        city.map((data) => (
          <div key={data.id}>
            <Card data={data} />
          </div>
        ))}
    </div>
  );
}
