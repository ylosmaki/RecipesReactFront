import React from "react";

const IngredientForm = props => (
    <form onSubmit={props.getRecipe}>
        <input type="text" name="recipeName"/>
        <button>Ingredient Search</button>
    </form>
);
export default IngredientForm;