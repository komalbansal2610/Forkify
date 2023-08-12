// import icons from '../img/icons.svg';
// console.log(icons);
// import 'core-js/stable';
// import 'regenerator-runtime/runtime';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import * as model from './model.js';

const recipeContainer=document.querySelector('.recipe');
 
const controlRecipes=async function()
{

    try{
        const id=window.location.hash.slice(1);
        // console.log(id);

        if(!id){
          return;  
        }
        recipeView.renderSpinner();

         // 1. LOADING RECIPE
        await  model.loadRecipe(id);
          // const recipe=model.state.recipe;

        // 2. RENDERING RECIPE
        recipeView.render(model.state.recipe);
    }
    catch(error){
        recipeView.renderError(`We couldn not find that recipe.Please try another one!!😦😦`);
    }

};

const controlSearchResults=async function(){
  try{
    // 1.) GET SEARCH QUERY 
    const query=searchView.getQuery();
    if(!query)
    {
      return;
    }
    // 2.) LOAD SEARCH RESULTS
    await model.loadSearchResults(`${query}`);
    // 3.) RENDER SEARH RESULTS
    console.log(model.state.search.results);
  }catch(error)
  {
    console.log(error);
  }
}

const init=function(){
     recipeView.addHandlerRender(controlRecipes);
     searchView.addHandlerSearch(controlSearchResults);
};
init();



 


 