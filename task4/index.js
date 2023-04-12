let result = document.getElementById("result");
 
function appendValue(value) {
  result.value += value;
}

function clearResult() {
  result.value = "";
}

function deleteLastDigit() {
  result.value = result.value.slice(0, -1);
}

function changeSign(value) {
  if (result.value.charAt(result.value.length - 1) === "-") {
    result.value = result.value.slice(0, -1);
  } else {
    result.value += value;
  }
}

function calculateResult() {
  try {
    let answer = eval(result.value);
    result.value = answer;
  } catch (error) {
    result.value = "Error";
  }
}
