const resultDiv = document.getElementById("result");

export  const printResult = (result) => {
  resetResultContent();
  resultDiv.style.display = "flex";
  resultDiv.style.justifyContent = "center";
  const response = document.createElement("h1");
  response.textContent = result.data.output;
  resultDiv.appendChild(response);
};

export const printHistory = (results) => {
  resetResultContent();
  
  results.forEach((result) => {
    let newResult = document.createElement("div");
    let status = document.createElement("p");
    let message = document.createElement("p");
    let number = document.createElement("p");
    let output = document.createElement("p");
    status.textContent = `Status: ${result.status}`;
    message.textContent = `Message: ${result.message}`;
    number.textContent = `Input: ${result.data.input}`;
    output.textContent = `Output: ${result.data.output}`;
    newResult.appendChild(status);
    newResult.appendChild(message);
    newResult.appendChild(number);
    newResult.appendChild(output);
    resultDiv.appendChild(newResult);
  });
};

export const resetResultContent = () => {
  resultDiv.textContent = "";
  resultDiv.style.display = "none";
};
