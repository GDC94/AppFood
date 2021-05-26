const { Router } = require('express');
const controller= require('../controllers/recipeController');
const Controller = new controller();
const router = Router();

router.get("/getAllRecipes", Controller.getAllRecipes);
router.get("/", Controller.getRecipesByName);
router.get("/:idRecipe", Controller.getRecipesById);
router.post("/", Controller.addNewRecipe);
router.delete("/:idRecipe", Controller.deleteRecipe);


module.exports = router;












