import { printResult } from "./dom.js";
import { fizzBuzz } from "./fizzBuzz.js";

const from = document.getElementById("fizzBuzzForm");
const input = document.getElementById("number-input");
from.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputValue = input.value;
    const result = fizzBuzz(inputValue);
    printResult(result);
});