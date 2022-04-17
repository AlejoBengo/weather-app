//_______________________________________________________________________
/*IMPORT DE UTILS*/
import React from "react";
/*IMPORT DE COMPONENTES*/
import SearchBar from "./SearchBar";
import Cards from "./Cards";
//_______________________________________________________________________

export default function Home() {
  return (
    <div>
      <SearchBar />
      <Cards />
    </div>
  );
}
