import React,{useEffect} from 'react';
import { getRecipeDetail } from '../actions/index';
import { connect } from "react-redux";
import "../styles/RecipeDetail.css";
import {Link} from "react-router-dom";


const RecipeDetail = (props) => {
    
useEffect(() => {
    const {match} =  props;
    const result = match.params.id;
    if(result > 100){
        const id = result *(-1);
        props.getRecipeDetail(id);
    } else {
        const id = result;
        props.getRecipeDetail(id);
    }
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])   



    return ( 
        <div className="container-detail">

        <div class="main">
            <img class="hero-profile" src={props.recipeDetail.image} alt=""/>
            <div class="first-description"></div>
                <div class="big-title">
                    <h1>{props.recipeDetail.title}</h1>
                </div>
                <div class="marca">
                    <i class='bx bxs-cookie'></i>
                </div>

            <div class="description">
                <h3>INSTRUCTIONS</h3>
                <p>{props.recipeDetail.instructions}</p>
                <p>Dietas: {props.recipeDetail.diets}</p>
            </div>
    
            <div class="footer">
                <Link to="/recipes" class="herobtn">Back</Link>
                <p>Health-Score: {props.recipeDetail.healthScore}</p>
                <p class="second">spoonacularScore: {props.recipeDetail.spoonacularScore}</p>
            </div>
        </div>
        </div>

    );

}

function mapStateToProps(state) {
    return {
        recipeDetail: state.recipeDetail,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        getRecipeDetail: (id) => dispatch(getRecipeDetail(id)),
    }
}


export default connect
(mapStateToProps,mapDispatchToProps)
(RecipeDetail);


