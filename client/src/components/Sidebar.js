import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import  {getRecipeByName, getAllRecipes, orderByScore, orderByAlpha, getTypesOfDiets} from "../actions/index";
import "../styles/Sidebar.css";
import vegetables from "../assets/verduras.png";
import meat from "../assets/carne.png";
import bread from "../assets/pan-de-molde.png";
import watermelon from "../assets/sandia.png";
import banana from "../assets/platano.png";
import Card from "../components/Card";
// import Pager from "../components/Pager";



export const Sidebar = (props) => {
    
    const [title, setTitle] = useState("");
    // const [currentPage, setCurrentPage]= useState(1);
    // const [postsPerPage, setPostsPerPage]= useState(8);
    const [local , setLocal] = useState([]);

    useEffect(() => {
    console.log("entre")
       setLocal([...props.recipesLoaded]);
        
    }, [props.recipesLoaded])
    
    
    
    
    //BUSQUEDA POR NOMBRE
    const onChangeRecipe = event => {
        setTitle(event.target.value)
    }


    const onSumbitRecipe = event => {
        event.preventDefault();
        props.getRecipeByName(title);
        props.getTypesOfDiets();
    }


    // BUSQUEDA POR ORDEN DE PUNTAJES
    const handleScore = event => {
        event.preventDefault();
        props.orderByScore(event.target.value);

    }

    /*BUSQUEDA POR ORDEN ALFABETICO*/
    const handleAlpha = (event) =>{
        event.preventDefault();
        props.orderByAlpha(event.target.value);
    };

    const handleAll = (event) => {
        event.preventDefault();
        props.getAllRecipes();
        props.getTypesOfDiets();
       
      };
    
    useEffect(() => {
        props.getAllRecipes()
    }, [])
    


//cambiar de pagina
//   const paginate = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };



    return (


        <div className="sidebar-container">
            
            <div className="sidebar">
                <div className="logo_content">
                    <div class="logo">
                    
                        <Link to="/"><i class='bx bxs-cookie'></i></Link>
                        <Link className="linked" to="/"><div className="logo_name">FOOD<span>App</span></div></Link>

                    </div>
                </div>
            <button onClick={(e)=> handleAll(e)}>Get all Recipes</button>
            




            
            <ul className="nav_list">    
                <li>
                    <form onSubmit={(e) => onSumbitRecipe(e)}>
                        <input 
                            type="text" 
                            placeholder="Search by name..."
                            autoComplete="off"
                            value={title}
                            onChange={onChangeRecipe}
                        /> 
                        <button type="submit" className="btnname">search</button> 
                    </form>
                </li>
                
            
                <div class="select">
                    <select name="format" id="format" onChange={(e) => handleAlpha(e)}>
                        <option selected disabled>Search alphabetically</option>
                        <option value="A-Z">A-Z</option>
                        <option value="Z-A">Z-A</option>
                    </select>
                </div>
                
                <div class="select">
                    <select name="format" id="format" onChange={(e) => handleScore(e)}>
                        <option selected disabled>Search by score</option>
                        <option value="Ascending">Ascending</option>
                        <option value="Descending">Descending</option>
                    </select>
                </div>
                    
            </ul>

                <img className="sidebar-img"  src={vegetables} alt=""/>
                <img className="sidebar-img2" src={meat} alt=""/> 
                <img className="sidebar-img3" src={bread} alt=""/>  
                <img className="sidebar-img4" src={watermelon} alt=""/>
                <img className="sidebar-img5" src={banana} alt=""/>  
        
            </div>


            <div className="container-central">
            
            {
               
                local && local.map( recipe => (
                    
                    <Card key={recipe.id} {...recipe} />
                
                
                ))
            
            }
            
            
            </div>
            {/* <Pager
                postsPerPage={postsPerPage}
                totalPosts={props.recipesLoaded.length} 
                paginate={paginate}
            /> */}

        </div>
    );
}




function mapStateToProps(state) {
    return {
        recipesLoaded: state.recipesLoaded,
        diets: state.diets
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getRecipeByName: (title) => dispatch (getRecipeByName(title)),
        getAllRecipes: () => dispatch( getAllRecipes()),
        orderByScore: (string) => dispatch(orderByScore(string)),
        orderByAlpha: (string) => dispatch(orderByAlpha(string)),
        getTypesOfDiets: () => dispatch(getTypesOfDiets())
        
    };
}



export default connect (mapStateToProps , mapDispatchToProps)(Sidebar);








