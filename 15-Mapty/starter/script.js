'use strict';

// prettier-ignore

// let map, mapEvent; // nese e deklarojme ketu ath , do heqim const para map me poshte
class Workout {
  date = new Date();
  // id = (new Date() + '').slice(-10);
  id = (Date.now() + '').slice(-10);
  clicks = 0;
  constructor(coords, distance, duration) {
    // this.date = ...
    // this.id = ...
    this.coords = coords;
    this.distance = distance; //in km
    this.duration = duration; //in min
  }
  _setDescription(){
    //prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${months[this.date.getMonth()]} ${this.date.getDate()}`
  }

  click() {
    this.clicks++;
  }
}

class Running extends Workout {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }

  ////////////////////////////////////////// KRIJOJME NJE METODE PER LLOGARITJEN E PACE ////////////////////////////////////////
  calcPace() {
    // min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    // this.type = 'cycling';
    this.calcSpeed();
    this._setDescription();
  }

  ////////////////////////////////////////// KRIJOJME NJE METODE PER LLOGARITJEN E SPEED ////////////////////////////////////////
  calcSpeed() {
    // km/h
    this.speed = this.distance / (this.duration / 60); //sepse this.duration nuk eshte ne min por ne ore
    return this.speed;
  }
}

// const run1 = new Running([39, -12], 5.2, 24, 178);
// const cycling1 = new Cycling([39, -12], 27, 95, 523);
// console.log(run1, cycling1);

/////////////////////////////////////////
// APPLICATION ARCHITECTURE
const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class App {
  #map;
  #mapZoomLevel = 13;
  #mapEvent;
  #workouts = [];

  constructor() {
    //Get user's position
    this._getPosition();

    //Get data from local storage
    this._getLocalStorage();

    //Atach event handlers
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField);
    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
    // function () {
    //   inputElevation
    //     .closest('.form__row')
    //     .classList.toggle('form__row--hidden');
    //   inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
    // });
  }

  _getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('Could not get your position');
        }
      );
  }

  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    console.log(`https://www.google.pt/maps/@${latitude},${longitude}`);

    const coords = [latitude, longitude];
    this.#map = L.map('map').setView(coords, 13);

    L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#map.on('click', this._showForm.bind(this));
    this.#workouts.forEach(work => {
      this._renderWorkoutMarker(work);
    });
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _hideForm() {
    //Empty inputs
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';
    form.computedStyleMap.display = 'none';
    form.classList.add('hidden');
    setTimeout(() => (form.computedStyleMap.display = 'grid'), 1000);
  }

  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    const validInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));
    const allPositive = (...inputs) => inputs.every(inp => inp > 0);

    e.preventDefault();

    ///////////////////////////////////////// GET DATA FROM FORM ////////////////////////////////////////
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    //////////////////////////////////////// IF ACTIVITY RUNNING, CREATE RUNNING OBJECT ////////////////////////////////////////
    if (type === 'running') {
      const cadence = +inputCadence.value;

      //////////////////////////////////////// CHECK ID DATA IS VALID ////////////////////////////////////////
      if (
        // !Number.isFinite(distance) ||
        // !Number.isFinite(duration) ||
        // !Number.isFinite(cadence)
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert('Inputs have to be positive numbers!');
      workout = new Running([lat, lng], distance, duration, cadence);
      // this.#workouts.push(workout);
    }

    //////////////////////////////////////// IF ACTIVITY CYCLING, CREATE CYCLING OBJECT ////////////////////////////////////////
    if (type === 'cycling') {
      const elevation = +inputElevation.value;

      //////////////////////////////////////// CHECK ID DATA IS VALID ////////////////////////////////////////
      if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration)
      )
        return alert('Inputs have to be positive numbers!');

      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    //////////////////////////////////////// ADD NEW OBJECT TO WORKOUT ARRAY ////////////////////////////////////////
    this.#workouts.push(workout);
    // console.log(workout);

    //////////////////////////////////////// RENDER WORKOUT ON MAP AS MARKER ////////////////////////////////////////

    this._renderWorkoutMarker(workout);
    // kjo ben te mundur qe te harta te dali icona e location

    ///////////////////////////////////////// RENDER WORKOUT ON LIST ////////////////////////////////////////
    this._renderWorkout(workout);
    //////////////////////////////////////// HIDE FORM + CLEAR INPUT FIELDS ////////////////////////////////////////
    this._hideForm();
    // inputDistance.value =
    //   inputDuration.value =
    //   inputCadence.value =
    //   inputElevation.value =
    //     '';

    ///////////////////////////////////// SET LOCAL STORAGE TO ALL WORKOUTS /////////////////////////////////
    this._setLocalStorage();
  }
  _renderWorkoutMarker(workout) {
    L.marker(workout.coords) //Gjithashtu dhe ketu ne vend te kordinatave vendosim variablin coords
      .addTo(this.#map)
      //   .bindPopup('Workout')
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === 'running' ? '🏃‍♂️' : '🚴'} ${workout.description}`
      )
      .openPopup();
  }
  _renderWorkout(workout) {
    //DOM manipulation
    let html = `
    <li class="workout workout--${workout.type}" data-id="${workout.id}">
          <h2 class="workout__title">${workout.description}</h2>
          <div class="workout__details">
            <span class="workout__icon">${
              workout.type === 'running' ? '🏃‍♂️' : '🚴'
            }</span>
            <span class="workout__value">${workout.distance}</span>
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${workout.duration}</span>
            <span class="workout__unit">min</span>
          </div>`;

    if (workout.type === 'running')
      html += `
          <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.pace.toFixed(1)}</span>
          <span class="workout__unit">min/km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">🦶🏼</span>
          <span class="workout__value">${workout.cadence}</span>
          <span class="workout__unit">spm</span>
        </div>
      </li>
        `;

    if (workout.type === 'cycling')
      html += `
        <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.speed.toFixed(1)}</span>
            <span class="workout__unit">km/h</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⛰</span>
            <span class="workout__value">${workout.elevationGain}</span>
            <span class="workout__unit">m</span>
          </div>
        </li>
      `;

    form.insertAdjacentHTML('afterend', html);
  }
  _moveToPopup(e) {
    const workoutEl = e.target.closest('.workout');
    console.log(workoutEl);

    if (!workoutEl) return;
    const workout = this.#workouts.find(
      work => work.id === workoutEl.dataset.id
    );
    // console.log(workout);
    this.#map.setView(workout.coords, this.#mapZoomLevel, {
      animate: true,
      pan: {
        duration: 1,
      },
    });

    //using the public interface
    // workout.click();
  }

  _setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
  }

  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('workouts'));

    if (!data) return;

    this.#workouts = data;

    this.#workouts.forEach(work => {
      this._renderWorkout(work);
    });
  }

  reset() {
    localStorage.removeItem('workouts');
    location.reload();
  }
}

const app = new App();

/*

//// NOTES
 1. Ability to edit a workout
 2. Ability to delete a workout
 3. Ability to delete all workout
 4. Ability to sort workouts by a certain field(psh. distance)
 5. Re-bui;d Running and Cycling object coming from Local Storage
 6. More realistic error and confirmation messages 
 7. Ability to position the map to show all workouts
 8. Ability to draw lines and shapes instead of just points
 9. Geocode location from coordinates
 10. Display weather data for workout time and place
*/

/*
if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      //   console.log(latitude, longitude);  //do afishohen coordinatat e location tend
      console.log(`https://www.google.pt/maps/@${latitude},${longitude}`); //do afishohet mapi i location tend

      const coords = [latitude, longitude];
      //ktu do vendosim koordinatat tona
      //e marre nga leaflet, nga var e bejme const dhe te setView ne vend te dy koordinatave do veme variablin coords ku e kemi deklaruar me korrdinatat e vendit tone
      map = L.map('map').setView(coords, 13); //germa L is main function qe Leaflet na jep neve
      //   console.log(map);
      //nese zv. .org me .fr/hot/ mund te duket me bukur
      //   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      //HANDLICH CLICK ON MAP
      map.on('click', function (mapE) {
        mapEvent = mapE;
        //kur klikojme ne harte te afishohet forma per ta plotesuar
        form.classList.remove('hidden');
        inputDistance.focus();
        /* KTE QE KEMI BERE KOMENT ESHTE PER PIKEN DISPLAY A MAP MARKER
        console.log(mapEvent);
        const { lat, lng } = mapEvent.latlng;
        // kjo ben te mundur qe te harta te dali icona e location

        L.marker([lat, lng]) //Gjithashtu dhe ketu ne vend te kordinatave vendosim variablin coords
          .addTo(map)
          //   .bindPopup('Workout')
          .bindPopup(
            L.popup({
              maxWidth: 250,
              minWidth: 100,
              autoClose: false,
              closeOnClick: false,
              className: 'running-popup',
            })
          )
          .setPopupContent('Workout')
          .openPopup();
          
      });
    },
    function () {
      alert('Could not get your position');
    }
  );
// Leaflet an open-source JavaScript library for mobile-friendly interactive maps, duhet ta download ne pc
*/

const arr1 = [2, 20, 3, 6, 4, 5];
arr1.filter(arr => arr % 2 === 0).forEach(arr => console.log(arr));
