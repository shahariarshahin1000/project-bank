function generatePin() {
  const random = Math.random() * 10000
  const round = Math.round(random)
  return round
}
function fixedPin() {
  const pin = generatePin()
  const pinString = pin + ""
  if (pinString.length === 4) {
    return pin
  }
  else {
    return fixedPin()
  }

}

document.getElementById("generate-btn").addEventListener('click', function () {
  const updatePin = fixedPin()
  const input = document.getElementById("generate-input")
  input.value = updatePin
})


document.getElementById("generate-input").addEventListener("dblclick", function () {
  document.getElementById("generate-input").value = ""

})

document.getElementById("calculator").addEventListener("click", function (event) {
  const number = event.target.innerText
  const numberInput = document.getElementById("number-input")
  const currentNumber = numberInput.value

  if (isNaN(number)) {
    if (number === "C") {
      numberInput.value = ""
    }
    else if (number === "<") {
      const split = currentNumber.split("")
      split.pop()
      const remaining = split.join("")
      numberInput.value = remaining
    }
  }
  else {
    const newNumber = currentNumber + number
    numberInput.value = newNumber
  }
})


document.getElementById("submit-btn").addEventListener("click", function () {
  const generate = document.getElementById("generate-input");
  const generateValue = generate.value
  const number = document.getElementById("number-input");
  const numberValue = number.value
  if (numberValue.length < 1) {
    alert("please provide a valid number")
    return
  }
  const pMessage = document.getElementById("positive");
  const nMessage = document.getElementById("error");
  if (generateValue === numberValue) {


    pMessage.style.display = "block";
    nMessage.style.display = "none";
  }

  else {
    nMessage.style.display = "block";
    pMessage.style.display = "none";
  }
})

document.getElementById("positive").addEventListener('click', function () {
  console.log('click');
  window.location.href = '../bank.html'
})