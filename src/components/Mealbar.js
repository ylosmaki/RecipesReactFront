import React, {Component} from "react"
import ShowMeal from "./ShowMeal"

class Mealbar extends Component {

    render()  {
        const meals = this.props.meals.map(meal => {
                          return <div key={meal.id}><ShowMeal selectMeal={this.props.selectMeal} list={meal}/></div>
                })
        return(
            <div className={"meals"}>
                <h2>RESEPTIT</h2>
                {meals}
            </div>
        )
    }
}
export default Mealbar
