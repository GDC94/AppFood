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
    const onChangeInputRadio = (e) => {
        if(e.target.checked){
            saveRecipe({...recipe, diets: [...recipe.diets , e.target.value]});
        }else{
            saveRecipe({...recipe, diets: recipe.diets.filter( i =>   i  !==  e.target.value)})
        };
    };



/**********************************************************************************************/



    // Cuando el usuario envia una receta 
    const onSubmitRecipe = e => {
        e.preventDefault();

        // Validar el proyecto
        if(title.trim() === '' || score < 0 || score > 100 
            || healthScore < 0 || healthScore > 100 || summary.trim() === '' 
            || instructions.trim() === '') {
            setError(true);
            return;
        }
        setError(false);
        // agregar al state
        props.addNewRecipe(recipe)
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
    useEffect(() => {
        props.getTypesOfDiets();
        return () => {

        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



    return ( 
    
        <div className="container-form">
        <Link className="link-form" to="/recipes">Back to home</Link>
        
        {error ? <Error mensaje="Error"/> : null }
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
                                    class="input" 
                                    placeholder="title"
                                    value={title}
                                    onChange={onChangeRecipe}
                                />

                                <input  type="number" 
                                        class="input" 
                                        placeholder="Score"
                                        value={score}
                                        onChange={onChangeRecipe}

                                />
                                <input  
                                    type="number"
                                    class="input"
                                    name="healthScore"
                                    value={healthScore}
                                    onChange={onChangeRecipe}
                                    placeholder="healthScore"
                        
                                />
                                <textarea 
                                    type="text"
                                    class="input summary"
                                    name="summary"
                                    value={summary}
                                    placeholder="Summary"
                                    onChange={onChangeRecipe}
                                ></textarea>

                            </div>

                            <div class="msg"> 
                                <textarea  placeholder="Instructions"></textarea>
                            </div>
                    </div>
                    
                    {/* 
                    <div class="input-radio">
                    {props.diets && props.diets.map((diet)=>(
                    <input 
                        type="checkbox" 
                        className="input-diets"
                        name={diet.name} 
                        value={diet.name} 
                        onChange={ e =>onChangeInputRadio(e)}>
                        {diet.name}</input>
                    ))} 
                    </div> 
                    */}
        

                    <div class="input-radio">
                            <input 
                                type="checkbox"
                                className="input-diets"
                                name="diets"
                                value="Gluten Free"
                                onChange={onChangeInputRadio}
                            />Gluten Free
                            <input 
                                type="checkbox"
                                className="input-diets"
                                name="diets"
                                value="Ketogenic"
                                onChange={onChangeInputRadio}
                            />Ketogenic
                
                            <input 
                                type="checkbox"
                                className="input-diets"
                                name="diets"
                                value="Vegetarian"
                                onChange={onChangeInputRadio}
                            />Vegetarian
                
                            <input 
                                type="checkbox"
                                className="input-diets"
                                name="diets"
                                value="Ketogenic"
                                onChange={onChangeInputRadio}
                            />Ketogenic
                
                            <input 
                                type="checkbox"
                                className="input-diets"
                                name="diets"
                                value="Lacto-Vegetarian"
                                onChange={onChangeInputRadio}
                            />Lacto-Vegetarian
                
                            <input 
                                type="checkbox"
                                className="input-diets"
                                name="diets"
                                value="Ovo-Vegetarian"
                                onChange={onChangeInputRadio}
                            /> Ovo-Vegetarian
                        
                            <input 
                                type="checkbox"
                                className="input-diets"
                                name="diets"
                                value="vegan"
                                onChange={onChangeInputRadio}
                            /> Vegan
                
                            <input 
                                type="checkbox"
                                className="input-diets"
                                name="diets"
                                value="Pescetarian"
                                onChange={onChangeInputRadio}
                            /> Pescetarian
                
                            <input 
                                type="checkbox"
                                className="input-diets"
                                name="diets"
                                value="Paleo"
                                onChange={onChangeInputRadio}
                            /> Paleo
                
                            <input 
                                type="checkbox"
                                className="input-diets"
                                name="diets"
                                value="Primal"
                                onChange={onChangeInputRadio}
                            /> Primal

                            <input 
                                type="checkbox"
                                className="input-diets"
                                name="diets"
                                value="Whole30"
                                onChange={onChangeInputRadio}
                            /> Whole30 
                    </div>      
                    
                    <div class="btn-form">send</div>

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



