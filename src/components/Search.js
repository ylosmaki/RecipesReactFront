import React, {Component} from "react"
import Form from "./Form";

class Search extends Component {

    state = {
        recipes: []
    }

    getRecipe = async (e) => {
        const recipeName = e.target.elements.recipeName.value;
        e.preventDefault();
        console.log(recipeName);
        const api_call = await fetch('http://localhost:8080/api/meals/' + recipeName);

        const data = await api_call.json();
        this.setState({recipes: data});
        console.log(this.state.recipes);

    }

    render() {
        return (
            <div className={"search"}>
                <Form getRecipe={this.getRecipe}/>
                {this.state.recipes.map((recipe)=>{
                    return (
                        <div>
                            <p key={recipe.id}>
                                Title: {recipe.name}
                                Portions: {recipe.portions}
                                Ingredients: {recipe.ingredients.map((ingredient)=>(
                                    ingredient.name+", "))}</p>

                        </div>
                    );

                    })}

            </div>
        );
    }
}
export default Search