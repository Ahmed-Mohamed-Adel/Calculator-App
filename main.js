const calculatorConatiner = document.getElementById("calulator_container");
const displayArea = document.getElementById("display_area");

calculatorConatiner.addEventListener("click", (eo) => {
  if (eo.target.nodeName == "BUTTON") {
    switch (eo.target.textContent) {
      case "C":
        clear();
        break;

      case "DEL":
        deleteOneValue();
        break;

      case "=":
        evaluate();
        break;

      default:
        addTodisplayArea(eo.target.textContent);
        break;
    }
  }
});

// Function To Display Area
function clear() {
  displayArea.textContent = "";
}

// Function To Add To Display Area
function addTodisplayArea(value) {
  displayArea.textContent += value;
}

// Function To Delete One Value
function deleteOneValue() {
  let currentContent = displayArea.textContent;
  displayArea.textContent = currentContent.substring(
    0,
    currentContent.length - 1
  );
}

// Function To Evaluate Content
function evaluate() {
  try {
    let calculation = math.evaluate(displayArea.textContent);
    displayArea.textContent = calculation;
  } catch (error) {
    displayArea.textContent = "Invalid Operation";
    console.error(error);
  }
}
