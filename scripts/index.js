let pageCont = document.querySelector(`.page`);
let mainCont = pageCont.querySelector(`.container`);
let editButton = mainCont.querySelector(`.profile-info__editbutton`);
let cancelButton = mainCont.querySelector(`.popup__cancelbutton`);
let popUpContainer = document.querySelector(`.popup`);
let newInputName = popUpContainer.querySelector(`.popup-form__input_type_name`);
let newInputJob = popUpContainer.querySelector(`.popup-form__input_type_job`);
let inputName = document.querySelector(`.profile-info__title`);
let inputJob = document.querySelector(`.profile-info__text`);
let formElement = popUpContainer.querySelector(`.popup-form`);

let formTogglePopUp = () => {
  if (!popUpContainer.classList.contains(`popup_acitve`)){
    newInputName.value = inputName.textContent;
    newInputJob.value = inputJob.textContent;
  }  
  popUpContainer.classList.toggle(`popup_active`);
  
}

function popUpFormSaved (event) {
  event.preventDefault();
  
  inputName.textContent = newInputName.value;
  inputJob.textContent = newInputJob.value;

  formTogglePopUp();
}

formElement.addEventListener('submit', popUpFormSaved);

cancelButton.addEventListener('click', formTogglePopUp);

editButton.addEventListener('click', formTogglePopUp);