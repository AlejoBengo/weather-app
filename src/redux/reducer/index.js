//_______________________________________________________________________
/*IMPORT DE CSS*/
import lightRain from "../../estilos/imagenes/iconos/500.png";
import moderateRain from "../../estilos/imagenes/iconos/501.png";
import heavyRain from "../../estilos/imagenes/iconos/502.png";
import clear from "../../estilos/imagenes/iconos/800.png";
import fewClouds from "../../estilos/imagenes/iconos/801.png";
import scatteredClouds from "../../estilos/imagenes/iconos/802.png";
import brokenClouds from "../../estilos/imagenes/iconos/803.png";
import overcastClouds from "../../estilos/imagenes/iconos/804.png";
//_______________________________________________________________________

//_______________________________ S T O R E _____________________________
const initialState = {
  city: [],
};
//_______________________________ S T O R E _____________________________

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "CALL_API":
      const condition = action.payload.weather[0].id;
      let icono;
      if (condition === "500") {
        icono = lightRain;
      } else if (condition === "501") {
        icono = moderateRain;
      } else if (condition === "502") {
        icono = heavyRain;
      } else if (condition === "801") {
        icono = fewClouds;
      } else if (condition === "802") {
        icono = scatteredClouds;
      } else if (condition === "803") {
        icono = brokenClouds;
      } else if (condition === "804") {
        icono = overcastClouds;
      } else {
        icono = clear;
      }
      const info = { ...action.payload, icono };
      return {
        ...state,
        city: [...state.city, info],
      };

    case "CLOSE_CARD":
      const aux = state.city.filter((pais) => {
        return pais.id !== Number(action.payload);
      });

      return {
        ...state,
        city: aux,
      };

    default:
      return state;
  }
}

export default rootReducer;
