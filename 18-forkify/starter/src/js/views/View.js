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
