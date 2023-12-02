const request = require("request");

const getWeather = (lat, lon, callback) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=8d998ce57de0559334b63b4cc8d6302f`;

  request({ url, json: true }, (error, response) => {
    if (error) {
      console.log("Unable to connect to forecase service!");
    } else {
      callback(
        response.body.weather[0].description,
        response.body.main.temp,
        response.body.sys.country,
        response.body.name
      );
    }
  });
};

module.exports = getWeather;
