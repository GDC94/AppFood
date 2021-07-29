import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Favorites from '../components/Favorites';
import Home from "../components/Home";
import Landing from "../components/Landing";
import NewRecipe from "../components/NewRecipe";
import RecipeDetail from "../components/RecipeDetail";



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/recipes" component={Home} />
        <Route path="/new-recipe" component={NewRecipe} />
        <Route path="/recipe-detail/:id" component={RecipeDetail} />
        <Route path="/favs" component={Favorites} />
      </Switch>
    </Router>
  );
}

export default App;
