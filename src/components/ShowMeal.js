
import React, {Component} from "react"

class ShowMeal extends Component {
    meWasClicked = () => {
/*
        console.log("Clicked me, id", this.props.list.id)
*/
        this.props.selectMeal(this.props.list.id);
    }
    render () {
        return (
                <h3 className="clickable" onClick={this.meWasClicked}>{this.props.list.name}</h3>
        )
    }
}

export default ShowMeal
