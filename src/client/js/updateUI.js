import { deleteData } from "./api";

function handleDelete(e) {
  let id = e.target.id;
  if (id) {
    id = id.replace("del", "");
    deleteData("http://localhost:8080/trips", { id }).then(() => {
      const e = document.querySelector(`#trip${id}`);

      e && e.remove();
    });
  }
}

export default function createTripElement(data) {
  const dfImage =
    "https://cdn.pixabay.com/photo/2018/05/17/16/03/compass-3408928_1280.jpg";

  const weatherIcon = `https://cdn.weatherbit.io/static/img/icons/${data.weather?.icon}.png`;

  const template = ` 
      <div class="image-wrapper">
        <img src="${data.image || dfImage}" alt="image"/>
      </div>
      <div class="info">
        <div class="detail">
          <p>Date: ${data.date}</p>
          <p>Country: ${data.city}</p>
          <p>City: ${data.country}</p>
          <p>Latitude: ${data.latitude}</p>
          <p>Longitude: ${data.longitude}</p>
          <p class="weather">
            Weather: ${data.weather?.description}
            ${
              weatherIcon
                ? `<img  class="weather-icon" src="${weatherIcon}" alt="image">`
                : ""
            }
          </p>
        
        </div>
        <div class="buttons">
          <button class="btn-del" id="del${data.id}"> Delete </button>        
        </div>
    </div>
  `;

  const tripEle = document.createElement("div");

  tripEle.classList.add("trip");
  tripEle.id = "trip" + data.id;

  tripEle.innerHTML = template;

  const delButton = tripEle.querySelector(`#del${data.id}`);
  delButton && delButton.addEventListener("click", handleDelete);

  return tripEle;
}
