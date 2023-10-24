import { async } from 'regenerator-runtime';
import { API_URL } from './config.js';
import { getJSON } from './helpers.js';

export const state = {
  recipe: {},
  search: {
    query: '', //kijuam nje objekt ku do niset me empty string
    results: [], // dhe rezult me empty array
  },
};

export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}/${id}`);

    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      source_url: recipe.source_url,
      image_url: recipe.image_url,
      servings: recipe.servings,
      cooking_time: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
    console.log(state.recipe);
  } catch (err) {
    //TEMP ERROR HANDLING
    console.error(err);
    throw err;
  }
};

//krijimi i funksionit
export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;
    // const data = await getJSON(`https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza`)
    const data = await getJSON(`${API_URL}?search=${query}`);
    console.log(data); // do dali statusi success

    state.search.results = data.data.recipes.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image_url: rec.image_url,
      };
    });
    // console.log(state.search.results);
  } catch (err) {
    console.error(err);
    throw err;
  }
};
// loadSearchResults('pizza'); do thirret te controller
