import * as model from './model.js';
import recipeView from './views/recipeView.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// console.log(icons); // e shikon ne console url dhe shiko nese korrespondon me emrin te file dist

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

// do kopjojme linkun qe morem te forkify-api te metodes GET dhe krijojme nje funksion async qe do e perdortin ne single wait . Ne dime qe fetch do return nje promise
const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1); // window.location kthen location e objektit me informacion rreth location te sakte te dokumentit ndersa location.hash qe do te thote ikona "#" para id
    console.log(id);

    if (!id) return;
    recipeView.renderSpinner(); // nuk na nevojitet me parent element qe ne kete rast ishte recipeContainer

    //1. lOADING RECIPE
    await model.loadRecipe(id);
    // const { recipe } = model.state; nuk na duhet me

    //2. RENDERING RECIPE
    recipeView.render(model.state.recipe);
  } catch (err) {
    alert(err);
  }
};

['hashchange', 'load'].forEach(ev =>
  window.addEventListener(ev, controlRecipes)
);
// eventi hashchange do te aktoivizohet # kur te ndryshojme url
// controlRecipes();
//ne kemi nje array ne te cilen cdo element do permbaje this markup
// window.addEventListener('hashchange', controlRecipes);
// window.addEventListener('load', controlRecipes);
