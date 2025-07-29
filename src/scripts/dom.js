
import { allResults } from "../data";

const resultDiv = document.getElementById("result");

export const printResult = (result) => {
    allResults.forEach((result) => {
        resultDiv.innerHTML =`<p> <strong>Input :</strong> ${result.data.input} </p> <p> <strong>Output:</strong> ${result.data.output} </p>
        <p> <strong>Status:</strong> ${result.status} </p> <p> <strong>Message:</strong> ${result.message} </p>`;
        allResults.push(result);
        
    })
};