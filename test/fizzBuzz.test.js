import { expect, describe, test } from "@jest/globals";
import { fizzBuzz } from "../src/scripts/fizzBuzz";

describe("FizzBuzz test for multiples of 3 and 5", () => {
  test("returns Fizz when multiple of 3", () => {
    let valor_entrada = 9;
    let respuesta_esperada = {
      status: "ok",
      message: "The number is divisible by 3",
      data: {
        input: 9,
        output: "Fizz",
      },
    };
    let resultado = fizzBuzz(valor_entrada);
    expect(typeof resultado.data.input).toBe("number");
    expect(resultado).toEqual(respuesta_esperada);
    expect(resultado.data.output).toBe("Fizz");
  });

  test("returns Buzz when multiple of 5", () => {
    let valor_entrada = 10;
    let respuesta_esperada = {
      status: "ok",
      message: "The number is divisible by 5",
      data: {
        input: 10,
        output: "Buzz",
      },
    };
    let resultado = fizzBuzz(valor_entrada);
    expect(typeof resultado.data.input).toBe("number");
    expect(resultado).toEqual(respuesta_esperada);
    expect(resultado.data.output).toBe("Buzz");
  });

  test("returns FizzBuzz when multiple of 3 and 5", () => {
    let valor_entrada = 15;
    let respuesta_esperada = {
      status: "ok",
      message: "The number is divisible by 3 and 5",
      data: {
        input: 15,
        output: "FizzBuzz",
      },
    };
    let resultado = fizzBuzz(valor_entrada);
    expect(typeof resultado.data.input).toBe("number");
    expect(resultado).toEqual(respuesta_esperada);
    expect(resultado.data.output).toBe("FizzBuzz");
  });

  test("returns number when is not multiple of 3 and 5", () => {
             let valor_entrada = 8;
            let respuesta_esperada = {
                status: "ok", 
                message: "The number is not divisible by 3 or 5",
                data: {
                    input: 8, 
                    output: 8
                }}
            let resultado = fizzBuzz(valor_entrada);
            expect(typeof resultado.data.input).toBe("number"); 
            expect(resultado).toEqual(respuesta_esperada); 
            expect(resultado.data.output).toBe(8); 
  });
});
