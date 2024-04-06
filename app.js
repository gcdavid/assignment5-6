document.addEventListener("DOMContentLoaded", function () {
  const swapBtn = document.getElementById("swap-btn");
  const usdInput = document.getElementById("usd-input");
  const cadInput = document.getElementById("cad-input");
  const usFlag = document.querySelector(".flag-img[src='us-flag.jpg']");
  const cadFlag = document.querySelector(".flag-img[src='canada-flag.jpg']");
  const CAD = document.getElementById("cad-country");
  const USD = document.getElementById("usd-country");
  const convertBtn = document.querySelector(".convert-btn");
  const usdSelect = document.querySelector('select[name="usd-country"]');
  const cadSelect = document.querySelector('select[name="cad-country"]');
  let isUSDToCAD = true; // Boolean variable to track the current state

  swapBtn.addEventListener("click", function () {
    // Swap input values based on the current state

    if (isUSDToCAD) {
      //swap the value
      let temp = cadInput.value;
      cadInput.value = usdInput.value;
      usdInput.value = temp;

      //swap the flag
      cadFlag.src = "us-flag.jpg";
      usFlag.src = "canada-flag.jpg";

      //swap the country name
      cadSelect.value = "USD";
      usdSelect.value = "CAD";
    } else {
      let temp = usdInput.value;
      usdInput.value = cadInput.value;
      cadInput.value = temp;

      usFlag.src = "us-flag.jpg";
      cadFlag.src = "canada-flag.jpg";

      cadSelect.value = "CAD";
      usdSelect.value = "USD";
    }

    // Toggle the boolean variable
    isUSDToCAD = !isUSDToCAD;
  });

  usdSelect.addEventListener("change", () => {
    console.log("chaged");
    if (isUSDToCAD) {
      usFlag.src = "canada-flag.jpg";
      cadFlag.src = "us-flag.jpg";
      cadSelect.value = "USD";
    } else {
      usFlag.src = "us-flag.jpg";
      cadFlag.src = "canada-flag.jpg";
      cadSelect.value = "CAD";
    }

    isUSDToCAD = !isUSDToCAD;
  });

  cadSelect.addEventListener("change", function () {
    console.log(isUSDToCAD, "BEFORE");
    if (isUSDToCAD) {
      usFlag.src = "canada-flag.jpg";
      cadFlag.src = "us-flag.jpg";
      usdSelect.value = "CAD"; // assuming CAD is the second option in the dropdown
    } else {
      usFlag.src = "us-flag.jpg";
      cadFlag.src = "canada-flag.jpg";
      usdSelect.value = "USD"; // assuming USD is the first option in the dropdown
    }

    isUSDToCAD = !isUSDToCAD;
    console.log(isUSDToCAD, "AFTER");
  });

  convertBtn.addEventListener("click", () => {
    convertUSDToCAD();
  });

  function convertUSDToCAD() {
    const usdValue = parseFloat(usdInput.value);
    const cadValue = parseFloat(cadInput.value);

    if (isUSDToCAD) {
      const convertedCad = usdValue * 1.2;
      cadInput.value = convertedCad.toFixed(2); // Round to 2 decimal places
    } else {
      const convertedUsd = cadValue / 1.2;
      usdInput.value = convertedUsd.toFixed(2); // Round to 2 decimal places
    }
  }
});
