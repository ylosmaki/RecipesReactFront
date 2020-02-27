import React from "react";

const Form = props => (
    <form onSubmit={props.getMeal}>
        <input type="text" name="ingredientName"/>
        <button>Ingredient Search</button>
    </form>
);
export default Form;