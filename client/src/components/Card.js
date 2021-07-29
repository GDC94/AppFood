/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import "../styles/Card.css";
import { connect } from "react-redux";
import  {addRecipeFavorite} from "../actions/index";
import { Link } from 'react-router-dom';
import food from "../assets/food2.jpg"; 


const Card = (props) => {
    // console.log("objeto recibido",props)
    return (
        <div className="first hero">
            {
                !props.image ? <img className="hero-profile-img" src={food}/>
                : <img className="hero-profile-img" src={props.image}/>
            }

            <div className="hero-description-bk"></div>
                <div className="hero-logo">
                    <i class='bx bx-cookie' ></i>
                </div>
                <div className="hero-description">
                    <h3>{props.title}</h3>
                    <p><span>Diets:</span>
                        {(typeof props.diets[0] === 'string') &&  props.diets.map((diet) => <i>{diet}</i>)}
                        {(typeof props.diets[0] === 'object') &&  props.diets.map((diet) => <i>{diet.name}</i>)}
                    </p>
                </div>
                
            <div className="btns">
                <Link to={`recipe-detail/${props.id}`} className="hero-btn">Detail</Link>
                <button className="fav" onClick={() => props.addRecipeFavorite({id: props.id, title: props.title })}>{props.spoonacularScore}</button>
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



