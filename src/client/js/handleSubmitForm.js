import { getCoordinatesFromApi, getImage, postData } from "./api";
import createTripElement from "./updateUI";

const trips = {};

async function handleSubmitForm() {
  const location = document.getElementById("location").value;
  const date = document.getElementById("date").value;

  if (!location) {
    alert("Please enter the location");
    return;
  }

  if (!date) {
    alert("Please input your date");
    return;
  }

  const data = await postData("http://localhost:8080/generate", {
    location,
    date,
  });

  if (!data) {
    return;
  }

  const trip = createTripElement(data);

  document.querySelector("#results").appendChild(trip);
}

export { handleSubmitForm };
