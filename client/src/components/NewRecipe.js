import React, {useState, useEffect} from 'react';
import "../styles/NewRecipe.css";
import {addNewRecipe, getTypesOfDiets} from "../actions/index";
import "../styles/NewRecipe.css";
import pizza from "../assets/pizza-fomr (1).png";
import rodillo from "../assets/rodillo.png";
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import Error from "../components/Error";





const NewRecipe = (props) => {

     // State para Proyecto: title, summary, spoonacularScore, healthScore, instructions, diets
     // eslint-disable-next-line react-hooks/rules-of-hooks
     const [recipe, saveRecipe] = useState({
        title: "",
        score: "",
        healthScore: "",
        summary:"",
        instructions: "",
        diets: []
    });

    const [error, setError] = useState(false);
    

    // Extraer nombre de la receta 
    const { title, score , healthScore , summary, instructions } = recipe;




/***********************************************************************************************/


// Lee los contenidos del input
    const onChangeRecipe = e => {
        saveRecipe({
            ...recipe,
            [e.target.name] : e.target.value
        })
    }




//Evento onChange de los input radio
    const handleInputRadio = (e) => {
        if(e.target.checked){
            saveRecipe({
                ...recipe, 
                diets: [...recipe.diets , e.target.value]
            });
        }else{
            saveRecipe({
                ...recipe,
                diets: recipe.diets.filter( i   =>   i  !==  e.target.value)})
        };
    };



/*************************************************************************************************/



    // Cuando el usuario envia una receta 
    const onSubmitRecipe = e => {
        e.preventDefault();
        // Validacion
        if(title.trim() === '' || score < 0 || score > 100 || healthScore < 0 || healthScore > 100 || summary.trim() === '' || instructions.trim() === '') {
            setError(true);
            return;
        }
        setError(false);
        // agregar al state
        props.addNewRecipe(recipe)
        //Muestro que se agrego la receta
        // setCreate('Recipe added!')
        // Reiniciar el form
        saveRecipe({
            title: "",
            score: "",
            healthScore: "",
            summary:"",
            instructions:"",
            diets: []
        })
    }

    /*Llamamos a las dietas de la base de datos con un useEffect*/
    // useEffect(() => {
    //     props.getTypesOfDiets();
    //     return () => {};
        // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);
    




    return ( 
    
        <div className="container-form">
        <Link className="linkform" to="/recipes">Back to home</Link>
        
        {error ? <Error mensaje="You made one mistake"/> : null }
        
        
            <form
                className="formulario-nuevo-proyecto"
                onSubmit={onSubmitRecipe}
            >
            
            <div class="wrapper">
                    
                    <div class="title">
                        <h1>Create your own recipe</h1>
                    </div>

                    <div class="contact-form">

                            <div class="input-fields">
                                <input 
                                    type="text" 
                                    className="input" 
                                    placeholder="title"
                                    name="title"
                                    value={title}
                                    onChange={onChangeRecipe}
                                />

                                <input  
                                    type="number" 
                                    className="input" 
                                    placeholder="score"
                                    name="score"
                                    value={score}
                                    onChange={onChangeRecipe}

                                />
                                <input  
                                    type="number"
                                    className="input"
                                    placeholder="healthScore"
                                    name="healthScore"
                                    value={healthScore}
                                    onChange={onChangeRecipe}
                                    
                        
                                />
                                <textarea 
                                    type="text"
                                    className="input summary"
                                    name="summary"
                                    value={summary}
                                    placeholder="Summary"
                                    onChange={onChangeRecipe}
                                />

                            </div>

                            <div class="msg"> 
                                <textarea
                                    type="text"
                                    name="instructions"
                                    value={instructions}
                                    placeholder="instructions"
                                    onChange={onChangeRecipe}
                                />
                            </div>
                    </div>
                    
                    
                    <div class="input-radio">
                            {props.diets && props.diets.map((diet)=>(
                                <li>
                                {diet}
                                <input 
                                    key={diet}
                                    type="checkbox" 
                                    className="input-diets"
                                    name={diet} 
                                    value={diet} 
                                    onChange={ e => handleInputRadio(e)}
                                />
                                </li>
                            ))} 
                    </div> 
                    
                
                    {/*BOTON PARA ENVIAR LA RECETA*/}
                    <button type="submit" class="btnform">send</button>

            </div>
            <img class="img-pizza" src={pizza} alt=""/>
            <img class="img-rodillo" src={rodillo} alt=""/>

            </form>
    </div> 
    
)}


function mapStateToProps(state) {
    return {
        recipeAdded: state.recipeAdded,
        diets: state.diets
        
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getTypesOfDiets: () => dispatch(getTypesOfDiets()),
        addNewRecipe: (recipe) => dispatch(addNewRecipe(recipe)),
        
    };
}



export default connect (mapStateToProps , mapDispatchToProps)(NewRecipe);



