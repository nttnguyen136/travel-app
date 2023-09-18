import { postData } from "./js/api";
import { handleSubmitForm } from "./js/handleSubmitForm";
import "./styles/index.scss";

function main() {
  const generateBtn = document.querySelector("#generate");

  generateBtn.addEventListener("click", () => handleSubmitForm());
}

main();
