const axios = require("axios");

export function callApi(value) {
  const apiKey = "4ae2636d8dfbdc3044bede63951a019b";
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
