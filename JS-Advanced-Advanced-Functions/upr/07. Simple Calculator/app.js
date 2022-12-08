function calculator() {
  let selector1;
  let selector2;
  let resultSelector;

  return {
    init:
      //(selectorA, selectorB,result)
      () => {
        selector1 = document.querySelector("#num1");
        selector2 = document.querySelector("#num2");
        resultSelector = document.querySelector("#result");
      },
    add: () => {
      let firstNum = Number(selector1.value);
      let secNum = Number(selector2.value);
      let sum = firstNum + secNum;
      resultSelector.value = sum;
    },
    subtract: () => {
      let firstNum = Number(selector1.value);
      let secNum = Number(selector2.value);
      let sum = firstNum - secNum;
      resultSelector.value = sum;
    },
  };
  //return result
}

const calculate = calculator();
calculate.init("#num1", "#num2", "#result");
