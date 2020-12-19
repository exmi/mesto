let pageCont = document.querySelector(`.page`);
let mainCont = pageCont.querySelector(`.container`);
let editButton = mainCont.querySelector(`.profile-info__editbutton`);
let cancelButton = mainCont.querySelector(`.popup-container__cancelbutton`);
let popUpContainer = document.querySelector(`.popup`);

let formElement = popUpContainer.querySelector(`.popup-form`);

cancelButton.addEventListener('click', () =>{
  popUpContainer.classList.remove(`popup_active`);
})

editButton.addEventListener('click', () =>{
  popUpContainer.classList.add(`popup_active`);
  /*не могу передать нижних два значений в перменные ошибка на value не можеть = null */
  popUpContainer.querySelector(`.popup-form__input_name`).value = document.querySelector(`.profile-info__title`).textContent;
  popUpContainer.querySelector(`.popup-form__input_job`).value = document.querySelector(`.profile-info__text`).textContent;
})

function popUpFormSaved (event) {
  event.preventDefault();
  document.querySelector(`.profile-info__title`).textContent = popUpContainer.querySelector(`.popup-form__input_name`).value;
  document.querySelector(`.profile-info__text`).textContent = popUpContainer.querySelector(`.popup-form__input_job`).value;
  /*не уверен, нужно ли закрывать форму после нажатия кнопки SUBMIT */
}
formElement.addEventListener('submit', popUpFormSaved);