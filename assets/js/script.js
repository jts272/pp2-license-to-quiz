/**
 * Get the elements required to open, close and display the 'How to Play' modal.
 * Arrow functions are used in the event listener to show and close the modal.
 * Guide consulted: https://www.youtube.com/watch?v=TAB_v6yBXIE
 */

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