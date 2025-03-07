const btn = document.querySelector(".hw-nav__btn");
const lists = document.querySelector(".hw-nav__lists");

// Initially hide the menu by default
lists.classList.add("hidden");

btn.addEventListener("click", () => {
  lists.classList.toggle("hidden");
});
