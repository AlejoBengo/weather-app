const axios = require("axios");
const apiKey = process.env.REACT_APP_API_KEY;

export function callApi(value) {
  return (dispatch) => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${apiKey}`
      )
      .then((info) => {
        return dispatch({
          type: "CALL_API",
          payload: info.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function closeCard(id) {
  return {
    type: "CLOSE_CARD",
    payload: id,
  };
}
