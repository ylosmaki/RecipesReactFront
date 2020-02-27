import React from "react";

const Form = props => (
    <form onSubmit={props.getMeal} style={{marginBottom: "2rem"}}>
        <input className="form__input" type="text" name="mealName"/>
        <button className="form__button">Meal Search</button>
    </form>
);
export default Form;