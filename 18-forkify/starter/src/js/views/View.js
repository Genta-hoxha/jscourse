import icons from 'url:../../img/icons.svg'; //Parcel 2   vendosen dy pika se eshte nenfolder

export default class View {
  _data;

  render(data) {
    // nese data really exist  bejme kushtin
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  update(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;
    const newMarkup = this._generateMarkup();

    //Krijojme new DOM
    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newElements = Array.from(newDOM.querySelectorAll('*'));
    const curElements = Array.from(this._parentElement.querySelectorAll('*'));
    console.log(curElements); //psh nr i servings qe ishte 4 ne fillim
    console.log(newElements); // nese i bejme nje incresase  me 1 athe do dali 5

    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];
      console.log(curEl, newEl.isEqualNode(curEl)); // isEqualNode ben te mundur krahasimin mes curEl para dhe Asaj isEqualNode ne kllapa

      //Updates changed TEXT
      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue.trim() !== ''
      ) {
        // console.log('', newEl.firstChild.nodeValue.trim());
        curEl.textContent = newEl.textContent;
      }

      //Updates changed ATTRIBUTES (pra rritja dhe ulja e personave dhe update i sasive te ingredienteve)
      if (!newEl.isEqualNode(curEl)) console.log(Array.from(newEl.attributes));
      Array.from(newEl.attributes).forEach(attr =>
        curEl.setAttribute(attr.name, attr.value)
      );
    });
  }

  _clear() {
    console.log(this._parentElement);
    this._parentElement.innerHTML = '';
  }

  renderSpinner() {
    const markup = `
      <div class="spinner">
            <svg>
              <use href="${icons}_icon-loader"></use>
            </svg>
          </div>
        `;
    // this._parentElement.innerHTML = '';
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderError(message = this._errorMessage) {
    const markup = `
      <div class="error">
        <div>
          <svg>
           <use href="${icons}_icon-alert-triangle"></use>
          </svg>
        </div>
          <p>${message}</p>
         </div>
      `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderMessage(message = this._message) {
    const markup = `
    <div class="message">
      <div>
        <svg>
         <use href="${icons}_icon-smile"></use>
        </svg>
      </div>
        <p>${message}</p>
       </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
