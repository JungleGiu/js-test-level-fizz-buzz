import { printResult, printHistory, resetResultContent } from "./dom.js";
import { fizzBuzz } from "./fizzBuzz.js";
import { allResults } from "../data.js";


const from = document.getElementById("fizzBuzzForm");
const input = document.getElementById("number-input");
const historyButton = document.getElementById("history");
const resetButton = document.getElementById("resetButton");

from.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = input.value;
  const result = fizzBuzz(inputValue);
  printResult(result);
});

historyButton.addEventListener("click", () => {

  printHistory(allResults);
});

resetButton.addEventListener("click", () => {
  resetResultContent();
});
