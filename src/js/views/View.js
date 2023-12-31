export default class View{
    _data;
    render(data)
    {
        this._data=data;
        const markup=this._generateMarkup();
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin',markup);
    }

    _clear(){
        this._parentElement.innerHTML='';
    }

    renderSpinner=function(){
        const markup=`<div class="spinner">
        <svg>
           <use href="src/img/icons.svg#icon-loader"></use>
        </svg>
    </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin',markup);
    }

    renderMessage(message=this._message){
      const markup=`
      <div class="message">
      <div>
      <svg>
      <use href="src/img/icons.svg#icon-smile"></use>
      </svg>
      </div>
      <p>${message}</p>
      </div>
      `;
      this._clear();
      this._parentElement.insertAdjacentHTML('afterbegin',markup);
    }
}