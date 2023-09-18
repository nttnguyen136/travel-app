const dotenv = require("dotenv");
const bodyParser = require("body-parser");

const cors = require("cors");
const express = require("express");
const fetch = require("node-fetch");

dotenv.config();

const PORT = 8080;
const GEO_NAMES_KEY = process.env.GEO_NAMES_KEY;
const PIXABAY_KEY = process.env.PIXABAY_KEY;
const WEATHERBIT_KEY = process.env.WEATHERBIT_KEY;

let trips = [];

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("dist"));

app.get("/", function (req, res) {
  res.sendFile("../dist/index.html");
});

app.post("/generate", async function (req, res) {
  const { location, date } = req.body;

  if (!location || !date) {
    res.status(400).json("Bad Request");
    return;
  }

  let resData;

  const coordinatesRes = await getCoordinates(location, GEO_NAMES_KEY);

  if (coordinatesRes.error) {
    res.status(201).json(coordinatesRes.error);
    return;
  }

  resData = { ...coordinatesRes, date };
  const weatherData = await getWeather(
    coordinatesRes.latitude,
    coordinatesRes.longitude,
    WEATHERBIT_KEY
  );

  if (weatherData) {
    resData.weather = weatherData.weather;
  }

  const image = await getImage(location, PIXABAY_KEY);

  if (image) {
    resData.image = image;
  }

  const id = trips.length > 0 ? trips[trips.length - 1].id + 1 : 1;

  resData.id = id;
  trips.push(resData);

  res.status(201).send(resData);
});

app.get("/trips", async function (req, res) {
  res.status(201).send(trips);
});

app.delete("/trips", async function (req, res) {
  const { id } = req.body;

  trips = trips.filter((item) => item.id != id);

  res.status(201).json("OK");
});

// designates what port the app will listen to for incoming requests
app.listen(PORT, () => {
  console.log("Server running...");
  console.log(`Running on localhost: ${PORT}`);
});

async function getCoordinates(location, username) {
  const res = await fetch(
    "http://api.geonames.org/searchJSON?q=" +
      location +
      "&maxRows=10&username=" +
      username
  );

  try {
    const apiData = await res.json();

    const data = {
      latitude: apiData.geonames[0].lat,
      longitude: apiData.geonames[0].lng,
      country: apiData.geonames[0].countryName,
      city: apiData.geonames[0].toponymName,
    };

    return data;
  } catch (error) {
    console.error(error);
    return {
      error,
    };
  }
}

async function getImage(location, apiKey) {
  const res = await fetch(
    `https://pixabay.com/api/?key=${apiKey}&q=${location}`
  );

  try {
    const apiData = await res.json();
    const data = apiData.hits[0]?.largeImageURL;

    return data;
  } catch (error) {}
}

async function getWeather(lat, lon, apiKey) {
  return fetch(
    `http://api.weatherbit.io/v2.0/current?key=${apiKey}&lat=${lat}&lon=${lon}`
  )
    .then((res) => res.json())
    .then((res) => (res.count > 0 ? res.data[0] : null));
}
