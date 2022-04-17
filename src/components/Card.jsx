//_______________________________________________________________________
/*IMPORT DE UTILS*/
import React from "react";
import { useDispatch } from "react-redux";
/*IMPORT DE ACTIONS*/
import { closeCard } from "../redux/actions/index";
/*IMPORT DE CSS*/
import s from "../estilos/card.module.css";
//_______________________________________________________________________

export default function Card({ data }) {
  const dispatch = useDispatch();

  function closeHandler(name) {
    dispatch(closeCard(name));
  }

  return (
    <div key={data.name} className={s.container}>
      <button className={s.close} onClick={() => closeHandler(data.name)}>
        X
      </button>
      <div className={s.dataBox}>
        <h1 className={s.title}>{data.name}</h1>
        <h4>MAX: {data.main.temp_max} </h4>
        <h4>MIN: {data.main.temp_min}</h4>
        <h4>WIND: {data.wind.speed} km/h</h4>
      </div>
      <div className={s.imgBox}>
        <img className={s.img} src={data.icono} alt="" />
      </div>
    </div>
  );
}
