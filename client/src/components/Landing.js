import React,{Fragment} from 'react';
import { Link } from 'react-router-dom';
import "../styles/Landing.css";
import espaguetis from "../assets/espaguetis.png";
import eggs from "../assets/egg (2).png";
import tom from "../assets/tom-yum.png";
import dish from "../assets/nasi-goreng.png";
import pizza from "../assets/pizza.png";



const Landing = () => {
    return (
        <Fragment>
        <div className="container">
            
            <header className="header">
                <div className="logo">
                    <i class='bx bxs-cookie'></i>
                    <p>FOOD<span>App</span></p>
                </div>
            
                <nav className="nav">
                    <ul>
                        <li className="li"><a href="!#">Ingredients</a></li>                
                        <li><a href="!#">Social</a></li>
                        <li><a href="!#">Contact</a></li>
                    </ul>
                </nav>
            </header>
        
            <div className="content">
                <div className="text">
                    <p>Are you hungry?</p>
                    <h1><span>D</span>ON<span>'</span>T <span>W</span>AIT <span>!</span></h1>
                    <p>Search and share your favorites <span className="recipe">recipes</span></p>
                    
                    <Link to="/recipes" className="btn">Get Started</Link>
                    <a href="https://spoonacular.com/food-api/console#Dashboard" className="btn-api">API</a>
                </div>
                <div className="img">
                    <div className="dish-icons">
                        <img className="image-one" src={espaguetis} alt=""/>
                        <img className="image-two" src={eggs} alt=""/>
                        <img className="image-three" src={tom} alt=""/>
                        <img className="image-four" src={dish} alt=""/>
                    </div>
                    <img className="email-icon" src={pizza} alt=""/>
                </div>
            </div>
        </div>
        </Fragment>



    );
}

export default Landing;