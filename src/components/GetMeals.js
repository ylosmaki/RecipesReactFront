import React, {Component} from "react";

class GetMeals extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'meal': [],
            selectedId:'',
            selectedmeal:null,
        }
    }


    componentDidMount() {
        console.log("starting")
        const url = "http://localhost:8080/api/meals"
        fetch(url, {method: 'GET'})
            .then(response => response.json())
            .then(response => this.setState({'meal': response}))
    }

    handelChange=(evt)=>{
        const value = evt.target.value;
        this.setState({selectedmeal: value})
        console.log(value)
        this.props.onMealSelect(value);
    }



    render() {
        console.log(this.props)
        return (
            <select value="this.state.selectedmeal" onChange={this.handelChange}>
                <option selected>No meal selected</option>
                {this.state.meal.map(function (meal, index){
                    return(
                        <option isSearchable value={meal.id}>{meal.name}</option>)
                })}

            </select>
        )
    }
}
export default GetMeals;