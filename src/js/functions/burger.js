const burgers = document.querySelectorAll("[data-burger]");
console.log(burgers);
if (burgers.length > 0) {
  burgers.forEach((burger) => {
    const burgersButton = burger.querySelectorAll("[data-burger_button]");
    console.log(burgersButton);
    burgersButton.forEach((burgerButton) => {
      burgerButton.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(burger);
        burger.classList.toggle("_active");
      });
    });
  });
}
