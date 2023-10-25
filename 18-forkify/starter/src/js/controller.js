import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

// if (module.hot) {
//   module.hot.accept();
// }
// console.log(icons); // e shikon ne console url dhe shiko nese korrespondon me emrin te file dist

// do kopjojme linkun qe morem te forkify-api te metodes GET dhe krijojme nje funksion async qe do e perdortin ne single wait . Ne dime qe fetch do return nje promise
const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1); // window.location kthen location e objektit me informacion rreth location te sakte te dokumentit ndersa location.hash qe do te thote ikona "#" para id
    // console.log(id);

    if (!id) return;
    recipeView.renderSpinner(); // nuk na nevojitet me parent element qe ne kete rast ishte recipeContainer

    //1. lOADING RECIPE
    await model.loadRecipe(id);
    // const { recipe } = model.state; nuk na duhet me

    //2. RENDERING RECIPE
    recipeView.render(model.state.recipe);
  } catch (err) {
    console.log(err);
    recipeView.renderError();
  }
};

/* do dergohet te recipeView.js
['hashchange', 'load'].forEach(ev =>
  window.addEventListener(ev, controlRecipes)
);
*/

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();
    //1. GET SEARCH QUERY
    const query = searchView.getQuery();
    if (!query) return;

    //2. LOAD SEARCH RESULTS
    await model.loadSearchResults(query);

    //3. RENDER RESULTS
    // resultsView.render(model.state.search.results);
    resultsView.render(model.getSearchResultsPage(3));

    // 4. RENDER INITIAL PAGINATION BUTTON
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const controlPagination = function (goToPage) {
  //1. RENDER NEW RESULTS
  resultsView.render(model.getSearchResultsPage(goToPage));

  // 2. RENDER NEW PAGINATION BUTTON
  paginationView.render(model.state.search);
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
};
init();

// eventi hashchange do te aktoivizohet # kur te ndryshojme url
// controlRecipes();
//ne kemi nje array ne te cilen cdo element do permbaje this markup
// window.addEventListener('hashchange', controlRecipes);
// window.addEventListener('load', controlRecipes);
