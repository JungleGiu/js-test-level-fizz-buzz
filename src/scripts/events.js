import { printResult } from "./dom";
import { fizzBuzz } from "./fizzBuzz";

const from = document.getElementsById("fizzBuzzForm");
const input = document.getElementsById("number-input").value;

from.addEventListener("submit", (e) => {
    e.preventDefault();
    printResult(fizzBuzz(input));
});