import React from "react";

const Form = props => (
    <form onSubmit={props.getRecipe}>
        <input type="text" name="recipeName"/>
        <button>Searchi</button>
    </form>
);
export default Form;