//_______________________________________________________________________
/*IMPORT DE UTILS*/
import React from "react";
import { useSelector } from "react-redux";
/*IMPORT DE COMPONENTES*/
import Card from "./Card";
//_______________________________________________________________________

export default function Cards() {
  const { city } = useSelector((state) => {
    return state;
  });

  return (
    <div>
      {city[0] &&
        city.map((pais) => (
          <div key={pais.id}>
            {console.log(pais.id)}
            <Card data={pais} />;
          </div>
        ))}
    </div>
  );
}
