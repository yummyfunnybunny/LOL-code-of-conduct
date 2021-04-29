// Element Selectors
const commandments = document.querySelectorAll(".commandment");
const checkboxes = document.querySelectorAll("input");
const acceptCommandments = document.querySelector("#accept-commandments");

// Set all boxes to unchecked when window loads
checkboxes.forEach((box) => {
  box.checked = false;
});

// Listen for box click
checkboxes.forEach((box) => {
  box.addEventListener("change", () => {
    if (box.checked) {
      // Disable box from being unchecked
      box.disabled = true;

      //   get the number of the next box
      const boxNumber = parseInt(box.id.split("-")[1]) + 1;

      //   check if we are on the last box before revealing the next box
      if (boxNumber <= commandments.length - 1) {
        commandments[boxNumber].classList.remove("hidden");
      }

      //   enable the submit button after all boxes have been checked
      if (checkboxes[checkboxes.length - 1].checked) {
        acceptCommandments.disabled = false;
        acceptCommandments.classList.remove("disabled");
      }
    }
  });
});

// Listen for submit button click
acceptCommandments.addEventListener("click", () => {
  // show alert thanking you for submitting
  alert("Thank you! Enjoy!");

  //   reload the window
  window.location.reload();
});
