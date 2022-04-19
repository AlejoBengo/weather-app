//_______________________________________________________________________
/*IMPORT DE UTILS*/
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
/*IMPORT DE ACTIONS*/
import { callApi } from "../redux/actions/index";
/*IMPORT DE CSS*/
import s from "../estilos/searchbar.module.css";
//_______________________________________________________________________

export default function SearchBar() {
  const dispatch = useDispatch();

  const [input, setInput] = useState("");

  function handlerInput(e) {
    e.preventDefault();
    setInput(e.target.value);
  }

  function handlerSubmit(e) {
    e.preventDefault();
    if (input.length !== 0) {
      dispatch(callApi(input));
      setInput("");
    } else {
      alert("No dejar el input vacío");
    }
  }

  return (
    <div className={s.container}>
      <Link to="/">
        <button className={s.back}>Volver</button>
      </Link>
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
    </div>
  );
}
