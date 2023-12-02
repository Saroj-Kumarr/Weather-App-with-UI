const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const getForecast = require("./utils/forecast");
const getWeather = require("./utils/weather");

const viewsPath = path.join(__dirname, "./templates/views");
const partialsPath = path.join(__dirname, "./templates/partials");

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

const publicDirectoryPath = path.join(__dirname, "./public");
app.use(express.static(publicDirectoryPath));

app.get("/", (req, res) => {
  res.render("index", {
    name: "saroj kumar",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address)
    return res.send({
      error: "You must provide a address term",
    });

  getForecast(req.query.address, (lat, lon) => {
    getWeather(lat, lon, (disc, temp, country, name) => {
      res.send({
        discription: disc,
        temperature: temp,
        country: country,
        name: name,
      });
    });
  });
});





app.get("/about", (req, res) => {
  res.render("about", {
    about: "I am the about page",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    help: "I am the help page",
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    errorMessage: "Help page not found",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    errorMessage: "Page not found",
  });
});

// app.get("/", (req, res) => {
//   res.send("Node.js The complete developer");
// });

// app.get("/about", (req, res) => {
//   res.send("<h1>This is about page</h1>");
// });

// app.get("/data", (req, res) => {
//   res.send([
//     {
//       name: "saroj kumar",
//       course: "mca",
//       roll: "50",
//     },
//     {
//       name: "saroj kumar",
//       course: "mca",
//       roll: "50",
//     },
//   ]);
// });
app.listen("3000", () => {
  console.log("Server started on 3000 ✅");
});
