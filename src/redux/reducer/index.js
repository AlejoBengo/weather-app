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
      let icono;
      const condition = action.payload.current.condition.code;
      if (condition === 1000) {
        icono = clear;
      } else if (condition === 1003) {
        icono = fewClouds;
      } else if (condition === 1009) {
        icono = overcastClouds;
      } else if (condition === 1006) {
        icono = scatteredClouds;
      } else if (condition === 1189) {
        icono = moderateRain;
      } else if (condition === 1663) {
        icono = lightRain;
      } else if (condition === 804) {
        icono = heavyRain;
      } else {
        icono = brokenClouds;
      }
      const removeAccents = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      };
      const name = removeAccents(action.payload.location.name);

      const info = { ...action.payload, icono, name };

      return {
        ...state,
        city: [...state.city, info],
      };

    case "CLOSE_CARD":
      const aux = state.city.filter((pais) => {
        return pais.location.name !== Number(action.payload);
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
