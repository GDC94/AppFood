import React,{Fragment} from 'react';
import {Link} from "react-router-dom";
import "../styles/Header.css";
import Sidebar from './Sidebar';

const Header = () => {
    return ( 
        <Fragment>
            <Sidebar/>
            <header className="header-container">
                <div class="header">
                    <Link to="/new-recipe" className="link">Add Recipe</Link>
                </div>
            </header>
        </Fragment>
    );


}

export default Header;


