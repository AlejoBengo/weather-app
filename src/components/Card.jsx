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

  function closeHandler(e) {
    e.preventDefault();
    dispatch(closeCard(e.target.value));
  }

  return (
    <div className={s.card}>
      <button
        value={data.id}
        onClick={(e) => closeHandler(e)}
        className={s.noselect}
      >
        <span className={s.text}>Close</span>
        <span className={s.icon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
          </svg>
        </span>
      </button>

      <div className={s.dataBox}>
        <h1 className={s.title}>{data.name}</h1>
        <h4 className={s.max}>MAX: {data.main.temp_max} </h4>
        <h4 className={s.min}>MIN: {data.main.temp_min}</h4>
        <h4 className={s.wind}>WIND: {data.wind.speed} km/h</h4>
      </div>

      <div className={s.imgBox}>
        <img className={s.img} src={data.icono} alt="" />
      </div>
    </div>
  );
}
