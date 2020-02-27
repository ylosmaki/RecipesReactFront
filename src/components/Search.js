import React, {Component} from "react"
import Form from "./Form";

class Search extends Component {

    state = {
        meals: []
    }

    getMeal = async (e) => {
        const mealName = e.target.elements.mealName.value;
        e.preventDefault();
        console.log(mealName);
        const api_call = await fetch('http://localhost:8080/api/meals/' + mealName);

        const data = await api_call.json();
        this.setState({meals: data});
        console.log(this.state.meals);

    }

    render() {
        return (
            <div className={"search"}>
                <Form getMeal={this.getMeal}/>
                {this.state.meals.map((meal)=>{
                    return (
                        <div>
                            <ul key={meal.id}>
                              <li> Title: {meal.name}</li>
                               <li> Portions: {meal.portions}</li>
                            <li> Ingredients: <ul>{meal.ingredients.map((ingredient)=>(
                                <li key={ingredient.id}>{ingredient.name}</li>))}</ul></li> </ul>

                        </div>
                    );

                    })}

            </div>
        );
    }
}
export default Search