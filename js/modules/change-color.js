'use strict'
export default function changeColor(containerPictures, cardImg) {
  const cardContainsThePicture = document.querySelectorAll(containerPictures);
  const cardsImg = document.querySelectorAll(cardImg);

  const receiveIndex = (index) => {
    cardsImg[index].classList.add("ativo");
    cardsImg[index].nextElementSibling.classList.add("ativo");
  };
  const mouseRemoval = () => {
    cardsImg.forEach((item) => {
      item.classList.remove("ativo");
      item.nextElementSibling.classList.remove("ativo");
    });
  };
  const addEventCard = () => {
    cardContainsThePicture.forEach((pictures, index) => {
      pictures.addEventListener("mouseleave", mouseRemoval);
      pictures.addEventListener("mouseover", () => {
        receiveIndex(index);
      });
    });
  };
  
  const init = () => {
    if (!!containerPictures && !!cardImg) {
      addEventCard();
    }
  };
  
  return {
    init,
  };
}
