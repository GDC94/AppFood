import React, {useState} from 'react';
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import  {getRecipeByName, getAllRecipes, orderByScore} from "../actions/index";
import "../styles/Sidebar.css";
import vegetables from "../assets/verduras.png";
import meat from "../assets/carne.png";
import bread from "../assets/pan-de-molde.png";
import watermelon from "../assets/sandia.png";
import banana from "../assets/platano.png";
import Card from "../components/Card";
// import Pager from "../components/Pager";



const Sidebar = (props) => {
    
    const [title, setTitle] = useState("");
    // const [currentPage, setCurrentPage]= useState(1);
    // const [postsPerPage, setPostsPerPage]= useState(8);



    //BUSQUEDA POR NOMBRE
    const onChangeRecipe = event => {
        setTitle(event.target.value)
    }

    const onSumbitRecipe = event => {
        event.preventDefault();
        props.getRecipeByName(title);
    }

    //cambiar de pagina
//   const paginate = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };


    //BUSQUEDA POR ORDEN DE PUNTAJES
    const handleScore = e => {
        e.preventDefault();
        props.orderByScore(e.target.value);

    }









    return (
        <div className="sidebar-container">
            
            <div className="sidebar">
                <div className="logo_content">
                    <div class="logo">
                    
                        <Link to="/"><i class='bx bxs-cookie'></i></Link>
                        <Link className="linked" to="/"><div className="logo_name">FOOD<span>App</span></div></Link>
                        
                    </div>
                </div>

            <button onClick={() => props.getAllRecipes()}>Get all Recipes</button>
            
            
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
                        <button type="submit" className="btn-name">search</button> 
                    </form>
                </li>
                
            
                <div class="select">
                    <select name="format" id="format">
                        <option selected disabled>Search alphabetically</option>
                        <option value="pdf">A-Z</option>
                        <option value="txt">Z-A</option>
                    </select>
                </div>
                
                <div class="select">
                    <select name="format" id="format" onChange={(e) => handleScore(e)}>
                        <option selected disabled>Search by score</option>
                        <option value="pdf">Ascending</option>
                        <option value="txt">Descending</option>
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
                props.recipesLoaded && props.recipesLoaded.map( recipe => (
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
        
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getRecipeByName: (title) => dispatch (getRecipeByName(title)),
        getAllRecipes: () => dispatch( getAllRecipes()),
        orderByScore: (string) => dispatch(orderByScore(string))
    };
}



export default connect (mapStateToProps , mapDispatchToProps)(Sidebar);


