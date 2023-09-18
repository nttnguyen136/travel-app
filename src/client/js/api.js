async function postData(url, data) {
  console.log("URL: ", url);
  console.log("Payload: ", data);

  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await response.json();
}

const getCoordinatesFromApi = async (place, username = "demo") => {
  const res = await fetch(
    "http://api.geonames.org/searchJSON?q=" +
      place +
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
    alert("Please enter a valid location");
  }
};

const getImage = async (location) => {
  const res = await fetch(`https://pixabay.com/api/?key=xxx&q=${location}`);

  try {
    const apiData = await res.json();
    const data = apiData.hits[0]?.largeImageURL;

    return data;
  } catch (error) {}
};

export { postData, getImage, getCoordinatesFromApi };
