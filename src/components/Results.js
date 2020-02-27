import React from "react"

function Results(props) {
    const {meal} =  props;
    if (meal) {
        return <div className="results">
            <h2>{meal.name}</h2>
            <ul>
                {meal.ingredients.map(ing => <li key={ing.id}>{ing.amount} {ing.name}</li> )}
            </ul>
            <p>Valmistusaika: {meal.cookingtime} minuuttia</p>
        </div>
    }
    return (
        <div className="results">
            <h2>Valitse ruokalaji Reseptit -valikosta</h2>
            <img src="" alt=""/>
        </div>
    )
}
export default Results