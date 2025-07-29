import { allResults } from "../data.js";

export const fizzBuzz = (number) => {
  let response = {
    status: "",
    message: "",
    data: {
      input: 0,
      output: "",
    },
  };
number = parseInt(number);

  if (isNaN(number) || number < 0) {
    response.status = "error";
    response.message = "Invalid input";
    response.data.input = number;
    response.data.output = "Invalid Input";
    allResults.push(response);
    return response;
  }
  if (number % 3 === 0 && number % 5 === 0) {
    response.status = "ok";
    response.message = "The number is divisible by 3 and 5";
    response.data.input = number;
    response.data.output = "FizzBuzz";
    allResults.push(response);
    return response;
  }
  if (number % 3 === 0) {
    response.status = "ok";
    response.message = "The number is divisible by 3";
    response.data.input = number;
    response.data.output = "Fizz";
    allResults.push(response);
    return response;
  }
  if (number % 5 === 0) {
    response.status = "ok";
    response.message = "The number is divisible by 5";
    response.data.input = number;
    response.data.output = "Buzz";
    allResults.push(response);
    return response;
  }
  response.status = "ok";
  response.message = "The number is not divisible by 3 or 5";
  response.data.input = number;
  response.data.output = number;
  allResults.push(response);
  return response;
};
