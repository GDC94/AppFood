export const GET_ALL_RECIPES = "GET_ALL_RECIPES";
export const GET_RECIPES_NAME = "GET_RECIPES_NAME";
export const GET_RECIPE_DETAIL = "GET_RECIPE_DETAIL";
export const GET_DIETS = "GET_DIETS";
export const ADD_NEW_RECIPE = "ADD_NEW_RECIPE";
export const ADD_RECIPE_FAVORITE = "ADD_RECIPE_FAVORITE";
export const REMOVE_RECIPE_FAVORITE = "REMOVE_RECIPE_FAVORITE";
export const ORDER_BY_SCORE = "ORDER_BY_SCORE";





export function getAllRecipes() {     
    return function(dispatch) {                                       
        return fetch("http://localhost:3001/api/recipes/getAllRecipes")  
        .then(response => response.json())                               
        .then(json => {                                                   
            dispatch({ 
                type: GET_ALL_RECIPES ,
                payload: json });
        });
    
    }
};


export function getRecipeByName(title) {     
    return function(dispatch) {                                       
        return fetch("http://localhost:3001/api/recipes?name=" + title)  
        .then(response => response.json())                               
        .then(json => {                                                   
            dispatch({ 
                type: GET_RECIPES_NAME,
                payload: json.results });
        });
    
    }
};




export function getRecipeDetail(id) {     
    return function(dispatch) {                                           
        return fetch(`http://localhost:3001/api/recipes/${id}`)    
        .then(response => response.json())                              
        .then(json => {                                                 
            dispatch({
                type: GET_RECIPE_DETAIL,
                payload: json });
            });
            
        };
};



export function addNewRecipe(payload) {     
    return {                                        
        type: ADD_NEW_RECIPE,
        payload: payload 
    }
};



export function getTypesOfDiets() {     
    return function(dispatch) {
        return fetch("http://localhost:3001/api/diets")
          .then(response => response.json())
          .then(json => {
            dispatch({ 
                type: GET_DIETS, 
                payload: json });//busca la data y despacha getdiets con eso
          });
      };
};


//Ordena por puntaje (spoonacular score)
export function orderByScore(payload) {     
    return {                                        
        type: ORDER_BY_SCORE,
        payload:payload
        
    }
};

export function removeRecipeFavorite(id) {     
    return {                                        
        type: REMOVE_RECIPE_FAVORITE, 
        payload : id
    }
};




export function addRecipeFavorite(payload) {      
    return {                                       
        type: ADD_RECIPE_FAVORITE,                 
        payload                               
    };
}