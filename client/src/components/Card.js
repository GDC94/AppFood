import React from 'react';
import "../styles/Card.css";
import { connect } from "react-redux";
import  {addRecipeFavorite} from "../actions/index";
import { Link } from 'react-router-dom';


const Card = (props) => {
    console.log(props)
    return (
        <div className="first hero">
            <img className="hero-profile-img" src={props.image} alt=""/>
            <div className="hero-description-bk"></div>
                <div className="hero-logo">
                    <i class='bx bx-cookie' ></i>
                </div>
                <div className="hero-description">
                    <h3>{props.title}</h3>
                    <p><span>Diets : </span>{props.diets}</p>
                </div>
                
            <div className="btns">
                <Link to={`recipe-detail/${props.id}`} className="hero-btn">Fully Recipe</Link>
                <button className="fav" onClick={() => props.addRecipeFavorite({id: props.id, title: props.title })}>Fav</button>
            </div>
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
        addRecipeFavorite: (recipe) => dispatch(addRecipeFavorite(recipe)),
    }
}


export default connect 
(mapStateToProps , mapDispatchToProps)
(Card);



