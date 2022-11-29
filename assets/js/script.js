const howto = document.querySelector(".howto-modal");
const openHowto = document.querySelector("#open-howto");
const closeHowto = document.querySelector(".close-howto-modal");
console.log(howto, openHowto, closeHowto);

openHowto.addEventListener("click", () => {
  howto.showModal();
})

closeHowto.addEventListener("click", () => {
  howto.close();
})