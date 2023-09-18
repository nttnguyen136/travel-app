import { getAllTrips } from "./js/api";
import { handleSubmitForm } from "./js/handleSubmitForm";
import createTripElement from "./js/updateUI";
import "./styles/index.scss";

function main() {
  const generateBtn = document.querySelector("#generate");

  generateBtn.addEventListener("click", () => handleSubmitForm());

  getAllTrips().then((trips) => {
    if (trips) {
      const results = document.querySelector("#results");
      trips.forEach((element) => {
        const trip = createTripElement(element);
        results.appendChild(trip);
      });
    }
  });
}

main();
