import React from 'react';
import { connect } from "react-redux";
import { removeRecipeFavorite} from "../actions/index";



const Favorites = (props) => {
    console.log(props)
    return ( 
        <div>
        <h2>Favorites</h2>
        <ul>
        {

        props.recipesFavorites && props.recipesFavorites.map(recipe => (
            <div key={recipe.id}>
                <h4>{recipe.title}</h4>
                <button onClick = {() => props.removeMovieFavorite(recipe.id)}> X </button>
            </div>
            
            
            ))

        }
        </ul>
    </div>
    );
}




function mapStateToProps(state) {
    return {
        recipesFavorites: state.recipesFavorites,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        removeRecipeFavorite: (id) => dispatch(removeRecipeFavorite(id)),
    }
}


export default connect
(mapStateToProps , mapDispatchToProps)
(Favorites);
