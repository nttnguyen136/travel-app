// https://westernfordhcm.com.vn/wp-content/uploads/2019/03/trip-a-la-gi-trip-b-la-gi.jpg
export default function createTripElement(data, image, location, date) {
  const template = ` 
      <div class="image-wrapper">
        <img src="${image}" alt="image">

      </div>
      <div class="info">
        <div class="detail">
          <p>Country: ${data.city}</p>
          <p>City: ${data.country}</p>
          <p>Latitude: ${data.latitude}</p>
          <p>Longitude: ${data.longitude}</p>
          <p>Departing: ${date}</p>
        </div>
    
    </div>

    <button class="btn-del"> Delete </button>
  `;

  const tripEle = document.createElement("div");

  tripEle.classList.add("trip");

  tripEle.innerHTML = template;

  return tripEle;
}
