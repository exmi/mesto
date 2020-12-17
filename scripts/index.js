let pageCont = document.querySelector(`.page`);
let mainCont = pageCont.querySelector(`.container`);

let profileCont = mainCont.querySelector(`.profile`);
let profileInfo = profileCont.querySelector(`.profile-info`);
let profileTitle = profileInfo.querySelector(`.profile-info__title`);
let profileText = profileInfo.querySelector(`.profile-info__text`);

let tableCont = mainCont.querySelector(`.table`);
let tableElem = tableCont.querySelector(`.table__element`);
let elemCont = tableElem.querySelector(`.table__text-container`);
var likeIcon = document.querySelectorAll(`.table__like-icon`);

let popUpCover = mainCont.querySelector('.popup');
let popUpForm = popUpCover.querySelector(`.popup-form`);
let popUpName = popUpForm.querySelector(`.popup-form__input_name`);
let popUpDescription = popUpForm.querySelector(`.popup-form__input_description`);

for (var icon of likeIcon) {
  icon.addEventListener('click', likeIconIsClicked);
}

function likeIconIsClicked() {
  this.classList.toggle(`table__like-icon_active`);
}

function popUpFormOpened() {
  popUpCover.classList.add(`popup-form_opened`);
  popUpForm.classList.add(`popup-form_opened`);
  popUpName.value = profileTitle.textContent;
  popUpDescription.value = profileText.textContent;
}

function popUpFormClosed() {
  popUpCover.classList.remove(`popup-form_opened`);
  popUpForm.classList.remove(`popup-form_opened`);
}

let formElement = popUpForm.querySelector(`.popup-form__button_save`);

function popUpFormSaved () {
    let newTitle = popUpForm.querySelector(`.popup-form__input_name`).value;
    let newText = popUpForm.querySelector(`.popup-form__input_description`).value;
    
    profileTitle.textContent = newTitle;
    profileText.textContent = newText;
    popUpFormClosed();
}


/*let formElement = popUpForm.querySelector(`.pop-up__form`);

function popUpFormSaved (evt) {
    evt.preventDefault();

    let newTitle = popUpForm.querySelector(`.pop-up__input_name`).value;
    let newText = popUpForm.querySelector(`.pop-up__input_description`).value

    
    profileTitle.textContent = newTitle;
    profileText.textContent = newText;
}
formElement.addEventListener('submit', popUpFormSaved);
*/
