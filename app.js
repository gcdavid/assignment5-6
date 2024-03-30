document.addEventListener("DOMContentLoaded", function () {
  const swapBtn = document.getElementById("swap-btn");
  const usdInput = document.getElementById("usd-input");
  const cadInput = document.getElementById("cad-input");
  const usFlag = document.querySelector(".flag-img[src='us-flag.jpg']");
  const cadFlag = document.querySelector(".flag-img[src='canada-flag.jpg']");
  const CAD = document.getElementById("cad");
  const USD = document.getElementById("usd");
  const convertBtn = document.querySelector(".convert-btn");

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

      let CADText = CAD.textContent;
      CAD.textContent = USD.textContent;
      USD.textContent = CADText;

      //swap the country name
    } else {
      let temp = usdInput.value;
      usdInput.value = cadInput.value;
      cadInput.value = temp;

      usFlag.src = "us-flag.jpg";
      cadFlag.src = "canada-flag.jpg";

      CAD.textContent = "CAD";
      USD.textContent = "USD";
    }

    // Toggle the boolean variable
    isUSDToCAD = !isUSDToCAD;
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
