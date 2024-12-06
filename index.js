const quantityBtns = document.querySelectorAll(".quantity-btn");

quantityBtns.forEach((btn) => {
  const quantityInput = btn.parentElement.querySelector(".quantity-input");

  btn.addEventListener("click", () => {
    const value = parseInt(quantityInput.value) || 0;
    if (btn.dataset.action === "increase") {
      quantityInput.value = value + 1;
    } else if (btn.dataset.action === "decrease" && value > 1) {
      quantityInput.value = value - 1;
    }
  });
});
