import { getCoordinatesFromApi, getImage } from "./api";
import createTripElement from "./updateUI";

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

  const data = await getCoordinatesFromApi(location, "demo");

  if (!data) {
    return;
  }

  const image = await getImage(data.city);

  const trip = createTripElement(
    data,
    image ||
      "https://westernfordhcm.com.vn/wp-content/uploads/2019/03/trip-a-la-gi-trip-b-la-gi.jpg",
    location,
    date
  );

  document.querySelector("#results").appendChild(trip);
}

export { handleSubmitForm };
