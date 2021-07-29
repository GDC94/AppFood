export const GET_ALL_RECIPES = "GET_ALL_RECIPES";
export const GET_RECIPES_NAME = "GET_RECIPES_NAME";
export const GET_RECIPE_DETAIL = "GET_RECIPE_DETAIL";
export const GET_DIETS = "GET_DIETS";
export const ADD_NEW_RECIPE = "ADD_NEW_RECIPE";
export const ADD_RECIPE_FAVORITE = "ADD_RECIPE_FAVORITE";
export const REMOVE_RECIPE_FAVORITE = "REMOVE_RECIPE_FAVORITE";
export const ORDER_BY_SCORE = "ORDER_BY_SCORE";
export const ORDER_BY_ALPHA = "ORDER_BY_ALPHA";
export const ORDER_BY_DIETS = "ORDER_BY_DIETS"






//PARA TRAER TODAS LAS RECETAS
export function getAllRecipes() {
    return function (dispatch) {
        let api = "http://localhost:3001/api/recipes/getAllRecipes";
        // let api =  "https://run.mocky.io/v3/dd2af628-8892-4bca-add0-bb134f02168c";                                    
        return fetch(api)
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: GET_ALL_RECIPES,
                    payload: json
                });
            });

    }
};








//PARA TRAER RECETAS POR NOMBRE
export function getRecipeByName(title) {

    return function (dispatch) {
        // let url = "https://run.mocky.io/v3/dfdb7154-f485-4023-975f-dafadc34847f"; 
        // let url = "https://run.mocky.io/v3/dd2af628-8892-4bca-add0-bb134f02168c"; 
        let url = "http://localhost:3001/api/recipes?name=" + title;

        return fetch(url)
            .then(response => response.json())
            .then(json => {
                console.log("resultado json", json.resultsInDB)
                dispatch({
                    type: GET_RECIPES_NAME,
                    payload: json.resultsInDB
                });
            }).catch(error => {
                console.log(error)
            })

    }
};








//PARA TRAER RECETAS POR DETALLE
export function getRecipeDetail(id) {
    return function (dispatch) {
        return fetch(`http://localhost:3001/api/recipes/${id}`)
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: GET_RECIPE_DETAIL,
                    payload: json
                });
            });

    };
};








//AGREGA UNA NUEVA RECETA
export function addNewRecipe(payload) {
    return {
        type: ADD_NEW_RECIPE,
        payload: payload
    }
};








//TRAE LOS TIPOS DE DIETAS
export function getTypesOfDiets() {
    return function (dispatch) {
        return fetch("http://localhost:3001/api/diets")
            .then(response => response.json())
            .then(json => {
                console.log("resultado json", json)
                dispatch({
                    type: GET_DIETS,
                    payload: json
                });//busca la data y despacha getdiets con eso
            });
    };
};







//ORDENA POR PUNTAJE(spoonacular score)
export function orderByScore(payload) {
    return {
        type: ORDER_BY_SCORE,
        payload: payload

    }
};





//ODENA POR ALFABETO
export function orderByAlpha(payload) {
    return {
        type: ORDER_BY_ALPHA,
        payload: payload,//aaz o zaa
    };
};







//FILTRA POR TIPO DE DIETA
export function filterByDiet(payload) {
    return {
        type: ORDER_BY_DIETS,
        payload: payload,
    };
}






export function removeRecipeFavorite(id) {
    return {
        type: REMOVE_RECIPE_FAVORITE,
        payload: id
    }
};






export function addRecipeFavorite(payload) {
    return {
        type: ADD_RECIPE_FAVORITE,
        payload
    };
}