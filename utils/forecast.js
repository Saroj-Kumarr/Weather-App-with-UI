const request = require("request");

const getForecast = (city, callback) => {
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=f00c38e0279b7bc85480c3fe775d518c`;

  request({ url, json: true }, (error, response) => {
    if (error) {
      console.log("Unable to connect with forecast service!");
    } else {
      callback(response.body[0].lat, response.body[0].lon);
    }
  });
};

module.exports = getForecast;
