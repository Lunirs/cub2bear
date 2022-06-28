const buttonOne = (event) => {
  event.preventDefault();
  location.assign('/category/1');
};
const buttonTwo = (event) => {
  event.preventDefault();
  location.assign('/category/2');
};
const buttonThree = (event) => {
  event.preventDefault();
  location.assign('/category/3');
};
const buttonFour = (event) => {
  event.preventDefault();
  location.assign('/category/4');
};
const buttonFive = (event) => {
  event.preventDefault();
  location.assign('/category/5');
};

document.querySelector('.button-one').addEventListener('click', buttonOne);
document.querySelector('.button-two').addEventListener('click', buttonTwo);
document.querySelector('.button-three').addEventListener('click', buttonThree);
document.querySelector('.button-four').addEventListener('click', buttonFour);
document.querySelector('.button-five').addEventListener('click', buttonFive);
