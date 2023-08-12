import {API_URL} from './config.js';
import {getJSON} from './helperr.js';
export const state={
    recipe:{},
    search:{
    query:{},
    results:[],
    }
};
 
export const loadRecipe=async function(id){
    try{
        const data=await getJSON(`${API_URL}${id}`);

        // console.log(res,data);
        const recipe=data.data.recipe;
        state.recipe={
            id:recipe.id,
            title:recipe.title,
            publisher:recipe.publisher,
            sourceUrl:recipe.source_url,
            image:recipe.image_url,
            servings:recipe.servings,
            cookingTime:recipe.cooking_time,
            ingredients:recipe.ingredients
        };
        console.log(state.recipe);
    }
    catch(error)
    {
        console.Error(`${error}😦😦`);
        throw error;
    }

};


export const loadSearchResults=async function(query){
    try{
        state.search.query=query;
        const data=await getJSON(`${API_URL}?search=${query}`);
        console.log(data);

        state.search.results=data.data.recipes.map(rec =>
            {
                return {
                    id:rec.id,
                    title:rec.title,
                    publisher:rec.publisher,
                    image:rec.image_url,
                };
            });
            console.log(state.search.results);
    }
    catch(error)
    {
        console.error(`${error}😦😦`);
        throw error;
    }
}
loadSearchResults('pizza');
