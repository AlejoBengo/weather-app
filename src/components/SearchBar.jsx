//_______________________________________________________________________
/*IMPORT DE UTILS*/
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
/*IMPORT DE ACTIONS*/
import { callApi } from "../redux/actions/index";
/*IMPORT DE CSS*/
import s from "../estilos/searchbar.module.css";
//_______________________________________________________________________

export default function SearchBar() {
  const dispatch = useDispatch();

  const { city } = useSelector((state) => {
    return state;
  });

  let arr = [];
  for (let i = 0; i < city.length; i++) {
    arr.push(city[i].name);
  }

  const [aux, setAux] = useState(false);

  const [input, setInput] = useState("");

  function handlerInput(e) {
    e.preventDefault();
    setInput(e.target.value);
  }

  function handlerCloseModal(e) {
    e.preventDefault();
    setAux(false);
  }

  function handlerSubmit(e) {
    e.preventDefault();
    if (
      input.length === 0 ||
      city.length > 5 ||
      arr.includes(e.target.value) ||
      arr.includes(e.target.value.toLowerCase())
    ) {
      setAux(true);
    } else {
      dispatch(callApi(input));
      setInput("");
    }
  }

  return (
    <div className={s.container}>
      <Link to="/">
        <button className={s.back}>Volver</button>
      </Link>
      <h3 className={s.aviso}>Puede buscar hasta 6 ciudades</h3>
      <div className={s.searcherBox}>
        <input
          onChange={(e) => handlerInput(e)}
          value={input}
          className={s.searcher}
          type="search"
          placeholder="Ciudad..."
        ></input>
        <button
          onClick={(e) => handlerSubmit(e)}
          className={s.submit}
          type="submit"
        >
          Bucar
        </button>
      </div>
      <h1 className={s.title}>Flow Climate</h1>

      <dialog open={aux} className={s.modelContainer}>
        <div className={s.modal}>
          <header className={s.modalHeader}>
            <h3 className={s.modalTitle}>Error</h3>

            <button
              className={s.noselect}
              onClick={(e) => handlerCloseModal(e)}
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
          </header>
          <p className={s.modalText}>No puede buscar esto!</p>
        </div>
      </dialog>
    </div>
  );
}
