import React, {Component} from "react"
import Form from "./IngredientForm";

class IngredientSearch extends Component {

    state = {
        ingredients: []
    }

    getMeal = async (e) => {
        const ingredientName = e.target.elements.ingredientName.value;
        e.preventDefault();
        console.log(ingredientName);
        const api_call = await fetch('http://localhost:8080/api/ingredients/' + ingredientName);

        const data = await api_call.json();
        this.setState({ingredients: data});
        console.log(this.state.ingredients);

    }

    render() {
        return (
            <div className={"ingredientsearch"}>
                <Form getMeal={this.getMeal}/>
                {this.state.ingredients.map((mealname)=>{
                    return (
                        <div>
                            <ul>{mealname}</ul>

                        </div>
                    );

                })}

            </div>
        );
    }
}
export default IngredientSearch