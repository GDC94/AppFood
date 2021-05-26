/* eslint-disable array-callback-return */
import axios from "axios";

import  {   GET_ALL_RECIPES, 
            GET_RECIPE_DETAIL,
            ADD_NEW_RECIPE,
            GET_RECIPES_NAME,
            GET_DIETS,
            ADD_RECIPE_FAVORITE,
            REMOVE_RECIPE_FAVORITE,
            ORDER_BY_SCORE

} 

from "../actions/index";


const initialState = {
    recipesFavorites: [],                      
    recipesLoaded: [],                    
    recipeDetail: {},
    recipeAdded: "",
    diets:[]                  
};





function recipesReducer (state = initialState, action){
    switch (action.type) {
        case GET_ALL_RECIPES:
            return {
            ...state,
            recipesLoaded: action.payload
            };
        
        case GET_RECIPES_NAME:
            return {
            ...state,
            recipesLoaded: action.payload
            };
        
        case GET_RECIPE_DETAIL:
            return {
            ...state,
            recipeDetail: action.payload
            };
        
        case REMOVE_RECIPE_FAVORITE:   
            return {
            ...state,
            recipesFavorites: state.recipesFavorites.filter(recipe => recipe.id !== action.payload)     
            };
        case GET_DIETS:
            return {
            ...state,
            diets: action.payload,
                    
            };
        case ADD_RECIPE_FAVORITE:
            return {
            ...state,
            recipesFavorites: state.recipesFavorites.concat(action.payload)
            };
        case ORDER_BY_SCORE:
            return {
            ...state,
            recipesLoaded: state.recipesLoaded.sort((a, b) => {
                if(action.payload==='Ascending'){return a.spoonacularScore - b.spoonacularScore;}
                if(action.payload==='Descending'){return b.spoonacularScore - a.spoonacularScore;}
                }),
            
            };
        case ADD_NEW_RECIPE:
            axios.post('http://localhost:3001/recipe', action.payload)
            return {
            ...state,
            recipeAdded: 'Your recipe has been successfully created.',
            };

        default:
        return state
    }
}






export default recipesReducer;