export const fizzBuzz = (number) => {
  let response = {
    status: "",
    message: "",
    data: {
      input: 0,
      output: "",
    },
  };
  if (isNaN(number) || number < 0) {
    response.status = "error";
    response.message = "Invalid input";
    response.data.input = number;
    response.data.output = "Invalid input";
    return response;
  }
  if (number % 3 === 0 && number % 5 === 0) {
    response.status = "ok";
    response.message = "The number is divisible by 3 and 5";
    response.data.input = number;
    response.data.output = "FizzBuzz";
    return response;
  }
  if (number % 3 === 0) {
    response.status = "ok";
    response.message = "The number is divisible by 3";
    response.data.input = number;
    response.data.output = "Fizz";
    return response;
  }
  if (number % 5 === 0) {
    response.status = "ok";
    response.message = "The number is divisible by 5";
    response.data.input = number;
    response.data.output = "Buzz";
    return response;
  }
  response.status = "ok";
  response.message = "The number is not divisible by 3 or 5";
  response.data.input = number;
  response.data.output = number;
  return response;
};
