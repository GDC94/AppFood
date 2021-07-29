/* eslint-disable array-callback-return */
import axios from "axios";

import {
    GET_ALL_RECIPES,
    GET_RECIPE_DETAIL,
    ADD_NEW_RECIPE,
    GET_RECIPES_NAME,
    GET_DIETS,
    ADD_RECIPE_FAVORITE,
    REMOVE_RECIPE_FAVORITE,
    ORDER_BY_SCORE,
    ORDER_BY_ALPHA,
    ORDER_BY_DIETS

}

    from "../actions/index";




const orderASC = (array, value) => {
    return array.sort(function (a, b) {
        if (a[value] > b[value]) {
            return 1;
        }
        if (b[value] > a[value]) {
            return -1;
        }
        return 0;
    })
};

const orderDESC = (array, value) => {
    return array.sort(function (a, b) {
        if (a[value] > b[value]) {
            return -1;
        }
        if (b[value] > a[value]) {
            return 1;
        }
        return 0;
    })
};



/********ESTADO INICIAL**********************/

const initialState = {
    recipesFavorites: [],
    recipesLoaded: [],
    recipeDetail: {},
    recipeAdded: "",
    diets: []
};





function recipesReducer(state = initialState, action) {
    switch (action.type) {

        case GET_ALL_RECIPES:
            return {
                ...state,
                recipesLoaded: action.payload
            };


        case GET_RECIPES_NAME:
            console.log("disparador", action)
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
            let diets = action.payload.map((diet) => {
                console.log(diet.name);
            });
            console.log(diets)
            return {
                ...state,
                diets: diets,

            };


        case ADD_RECIPE_FAVORITE:
            return {
                ...state,
                recipesFavorites: state.recipesFavorites.concat(action.payload)
            };



        case ORDER_BY_SCORE:
            // console.log(action.payload)
            let estado = state.recipesLoaded.sort((a, b) => {
                if (action.payload === 'Ascending') { return a.spoonacularScore - b.spoonacularScore; }
                if (action.payload === 'Descending') { return b.spoonacularScore - a.spoonacularScore; }
            })

            return {
                ...state,
                recipesLoaded: [...estado]

            };



        case ORDER_BY_ALPHA:
            let result = action.payload === "A-Z" ?
                orderASC(state.recipesLoaded, 'title') :
                orderDESC(state.recipesLoaded, 'title')

            return {
                ...state,
                recipesLoaded: result,
            };



        case ORDER_BY_DIETS: {
            let array = [];
            for (let i = 0; i < state.recipesLoaded.length; i++) {
                const recipe = state.recipesLoaded[i];
                for (let x = 0; x < recipe.diets.length; x++) {
                    const diet = recipe.diets[x];
                    if (diet.name === action.payload) {
                        array.push(recipe);
                    }
                }
            }
            return {
                ...state,
                recipesLoaded: [...array],
            };
        }


        case ADD_NEW_RECIPE:
            axios.post('http://localhost:3001/api/recipes', action.payload)
            return {
                ...state,
                recipeAdded: 'Your recipe has been successfully created.',
            };

        default:
            return state
    }
}





export default recipesReducer;