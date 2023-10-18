'use strict';

/*
const renderCountry = function (data, className = '') {
  const html = `    
      <article class="country ${className}">
        <img class="country__img" src="${data.flags.svg}" />
        <div class="country__data">
          <h3 class="country__name">${data.name.common}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)} people</p>
          <p class="country__row"><span>🗣️</span>${data.languages.name}</p>
          <p class="country__row"><span>💰</span>${data.currencies.EUR.name}</p>
      
        </div>
      </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  //   countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  //   countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

const getCountryData = function (country) {
  // country 1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => {
      console.log(response);

      if (!response.ok) throw new Error(`Country not found ${response.status}`);
      return response.json();
    })
    .then(data => {
      renderCountry(data[0]);
      //   const neighbour = data[0].borders[0];
      const neighbour = 'dfdgdgddkg';

      if (!neighbour) return;

      //country 2
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Country not found ($
    {response.status})`);

      return response.json();
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.log(`${err}`);
      renderError(`Something went wrong ${err.message}. Try Again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('portugal');
});
*/
// getCountryData('dfdfffdf');
///////////////////////////////////////
/*
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  // console.log(request.responseText);

  request.addEventListener('load', function () {
    //   console.log(this.responseText);

    //duhet te konvertojme data of JSON pasi jane nje string i madh eme te dhena ne JAVASCRIPT
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `    
<article class="country">
  <img class="country__img" src="${data.flags.png}" />
  <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)} people</p>
    <p class="country__row"><span>🗣️</span>${data.languages.name}</p>
    <p class="country__row"><span>💰</span>${data.currencies.EUR.name}</p>

  </div>
</article>`;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('portugal');
getCountryData('usa');
getCountryData('germany');
*/
/*
const getCountryAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Render country 1
    renderCountry(data);

    // Get neighbour country (2)
    const [neighbour] = data.borders;

    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open(
      'GET',
      `https://restcountries.com/rest/v3.1/alpha/${neighbour}`
    );
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};
getCountryAndNeighbour('portugal');
// getCountryAndNeighbour('usa');
*/
/*
//////////////////// SYNCHRONOUS CODE ///////////////////
// as blocking
const p = document.querySelector('.p');
p.textContent = 'My name is Genta!';
alert('Text set!');
p.style.color = 'red';

// ~ Most code is synchronous
// ~ Synchronous code is executed line by line
// ~ Each line of code waits for previous line to finish
// ~ Long-running operations block code execution
*/
/*
//////////////////// ASYNCHRONOUS CODE ///////////////////
const p = document.querySelector('.p');
//Asynchronous is setTimeout
//Callback will run after timer
setTimeout(function () {
  p.textContent = 'My name is Genta!';
}, 5000);
p.style.color = 'red';

// ~ Asynchronous code is executed after a task that runs in the "background" finishes  (ne background shfaqet psh Image loading)
// ~ Asynchronous code is non-blocking
// ~ Execution doesn't wait for an asynchronous task to finish its work
// ~ Callback function alone do NOT make code asynchronous
[1, 2, 3].map(v => v * 2);
*/
/*
Synchronous JavaScript 
1	Instruction in synchronous code executes in a given sequence. (Instruksioni në kodin sinkron ekzekutohet në një sekuencë të caktuar.)
2	Each operation waits for the previous operation to complete its execution.	(Çdo operacion pret që operacioni i mëparshëm të përfundojë ekzekutimin e tij.)
3	Most of the time JavaScript is used as Synchronous code.  (Shumicën e kohës JavaScript përdoret si kod sinkron.)


Asynchronous JavaScript
1. Instructions in asynchronous code can execute in parallel. (Instruksionet në kodin asinkron mund të ekzekutohen paralelisht.)
2. Next operation can occur while the previous operation is still getting processed. (Operacioni tjetër mund të ndodhë ndërsa operacioni i mëparshëm është ende duke u përpunuar.)
3. Asynchronous JavaScript is preferred in situations in which execution gets blocked indefinitely. (JavaScript asinkron preferohet në situatat në të cilat ekzekutimi bllokohet për një kohë të pacaktuar.)
*/

// AJAX
// Asynchronous JavaScript And XML: Allows us to comunicate with remote web servers in an asynchronous way.
// With AJAX calls, we can request data from web servers dynamically.
///////////////////////////
///////////////////////////
///////////////////////////
///////////////////////////
///////////////////////////
///////////////////////////
//////////////////////////// USHTRIMI I SAKTE ////////////////////////////
/*
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `    
    <article class="country ${className}">
      <img class="country__img" src="${data.flags?.svg}" />
      <div class="country__data">
        <h3 class="country__name">${data.name?.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${
          Object.values(data.languages)[0]
        }</p>
        <p class="country__row"><span>💰</span>${
          Object.values(data.currencies)[0].name
        }</p>
          </div>
    </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1; // ta bejm,e te dukshme ne web kur te klikojme butonin
};
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) return;
      //country 2
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
      //   return 'Shtyp OK per te shfaqur nje shtet tjeter!';
    })
    // .then(data => alert(data));
    .then(response => response.json())
    .then(data => renderCountry(data[0], 'neighbour'));
};
btn.addEventListener('click', function () {
  getCountryData('portugal');
});
*/
// getCountryData('germany');
// getCountryData('france');

// const getCountryData = function (country) {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(response => {
//       console.log(response);

//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);

//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       // const neighbour = data[0].borders[0];
//       const neighbour = 'dfsdfdef';

//       if (!neighbour) return;

//       // Country 2
//       return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);

//       return response.json();
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
/*
const getCountryData = function (country) {
  // Country 1
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) throw new Error('No neighbour found!');

      // Country 2
      return getJSON(
        `https://restcountries.com/rest/v3.1/alpha/${neighbour}`,
        'Country not found'
      );
    })

    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('portugal');
});

// getCountryData('australia');


// Coding Challenge #1


In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. 
Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. 
Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location.
 Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. 
Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/
/*
console.log('--- PIKA 1 ---');
const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(response => {
      if (!response.ok)
        throw new Error(`Problem with geocoding ${response.status}`);
      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.com/rest/v3.1/name/${data.country}`);
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);

      return response.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err.message} 💥`));
};
// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
whereAmI(33.933, 18.474);
*/

///////////////////////////////////////////// THE EVENT LOOP IN PRACTICE /////////////////////////////////////

/*
/// Example 1
(() => {
  console.log('this is the start');

  setTimeout(() => {
    console.log('Callback 1: this is a msg from call back');
  }); // has a default time value of 0

  console.log('this is just a message');

  setTimeout(() => {
    console.log('Callback 2: this is a msg from call back');
  }, 1200);

  console.log('this is the end');
})();
// OUTPUT:
// "this is the start"
// "this is just a message"
// "this is the end"
// "Callback 1: this is a msg from call back"
// "Callback 2: this is a msg from call back"
*/

/*
/// Example 2
const seconds = new Date().getTime() / 1000;

setTimeout(() => {
  // prints out "2", meaning that the callback is not called immediately after 500 milliseconds.
  console.log(`Ran after ${new Date().getTime() / 1000 - seconds} seconds`);
}, 500);

while (true) {
  if (new Date().getTime() / 1000 - seconds >= 2) {
    console.log('Good, looped for 2 seconds');
    break;
  }
}
//OUTPUT: SHfaqen te dyja njekohesisht
// Good, looped for 2 seconds
// Ran after 2.003000020980835 seconds
*/

/*
///Example 3 kur po punojme ne te njejten kohe me promise , kryesisht micro-tasks dhe me timers pra setTimeout
console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));

Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 100000; i++) {}
  console.log(res);
});
console.log('Test end');

//OUTPUT
// Test start
// Test end
// Resolved promise 1
// Resolved promise 2
// 0 sec timer (PRA EKZEKUTOHET E FUNDIT DHE vlera 0 qe kemi vendosur pas setTimeout nuk ka vlere nese do kemi ne te njejten kohe dhe micro-tasks ku kemi thene qe promise.resolve menjehere)
*/

///Example 1 - Krijimi i new promise duke perdorur the promise constructor
/*
//Example 1.1
const lotteryPromise = new Promise(function (resolve, reject) {
  if (Math.random() >= 0.5) {
    resolve('You WIN !'); // e imagjinojme resolve si funksion pranimi
  } else {
    reject('You LOST your money!'); // e imagjinojme reject si funksion refuzimi
  }
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err)); //si fillim do na afishehet You WIN , me pas sa here i ben refresh faqes ne menyre random duhet te dali dhe mesazhi You LOST your money!
*/
/*
//Example 1.2

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You WIN !'); // e imagjinojme resolve si funksion pranimi
    } else {
      reject(new Error('You LOST your money!')); // e imagjinojme reject si funksion refuzimi
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));
//output:  Error: You LOST your money!

// Promisingfying setTimout creating a wait function
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log('1 second passed');
    return wait(1); //pra do afishohet pas 1 sekondi pasi te jete afishuar I waited for 2 seconds
  })

  .then(() => {
    console.log('2 second passed');
    return wait(1); //pra do afishohet pas 1 sekondi pasi te jete afishuar I waited for 2 seconds
  })

  .then(() => {
    console.log('3 second passed');
    return wait(1); //pra do afishohet pas 1 sekondi pasi te jete afishuar I waited for 2 seconds
  })

  .then(() => {
    console.log('4 second passed');
    return wait(1); //pra do afishohet pas 1 sekondi pasi te jete afishuar I waited for 2 seconds
  });

Promise.resolve('abc').then(x => console.log(x));
Promise.reject('abc').catch(x => console.error(x));
*/

/*
/////////////////////////// PROMISIFYING THE GEOLOCATION API /////////////////////////
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
console.log('Getting position');
// navigator.geolocation.getCurrentPosition(
//   position => console.log(position),
//   err => console.error(err)
// );  kte e vendosim poshte dhe bejme disa editime ku ne vend te console.log vendosim resolve dhe ne vend te console.error vendosim reject
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(
      position => resolve(position),
      err => reject(err)
    );
    // navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
// getPosition().then(pos => console.log(pos));

const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Problem with geocoding ${response.status}`);
      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);

      return response.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err.message} 💥`));
};

btn.addEventListener('click', whereAmI);
*/

// Challenge 2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image 
(use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, 
append it to the DOM element with the 'images' class, and resolve the promise. 
The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/
/*
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
const imagesSelect = document.querySelector('.images'); //krijimi i nje konstanteje qe na tregon images te selektuara
const createImage = function (imgPath) {
  // krijimi i nje funksioni ku si input ka imgPath dhe do ktheje new Promise qe do kete resolve dhe reject sic i kemi bere me siper te examples
  return new Promise(function (resolve, reject) {
    const image = document.createElement('img'); // krijuam nje konstante me emrin image ku beme te mundur krijimin e elementit
    image.src = imgPath; //kte konstante.src e barazuam me parametrin e funksionit pra me imgPath

    image.addEventListener('load', function () {
      //kete konstante.addEventlistener iu dhame n je event, ne kete rast load lu me pas konstanten e selektimit te klases se imageve e beme .append(image)
      imagesSelect.append(image);
      resolve(image);
    });
    image.addEventListener('error', function () {
      reject(new Error('Upload an image please'));
    });
  });
};

let currentImg;
createImage('img/img-3.jpg')
  .then(img => {
    currentImg = img;
    console.log('Image1');
    return wait(2);
  })
  .catch(err => console.error(err));

  */

const wait = function (second) {
  return new Promise(function (resolve) {
    setTimeout(resolve, second * 1000);
  });
};

const imageSelect = document.querySelector('.images');
const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const image = document.createElement('img');
    image.src = imgPath;

    //krijimi i eventeve per load te images dhe per error
    image.addEventListener('load', function () {
      imageSelect.append(image);
      resolve(image);
    });

    image.addEventListener('error', function () {
      reject(new Error('ERROR: Upload an image!'));
    });
  });
};

let currentImage;
createImage('img/img-1.jpg')
  .then(img => {
    currentImage = img;
    console.log('Image 1 uploaded!');
    return wait(1);
  })
  .then(img => {
    currentImage = img;
    console.log('Image 2 uploaded!');
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    currentImage = img;
    console.log('Image 3 uploaded!');
    return createImage('img/img-3.jpg');
  })
  .catch(err => console.error(err));

/////////////////////////// CONSUMING PROMISES WITH ASYNC/AWAIT  ///////////////////////////
