import React, {Component} from 'react';
import GetMeals from "./GetMeals";

class NewIngredientsForm extends Component {
    constructor(props) {
        super(props);
        this.state={amount:'',
            name:' ',
            meal_id:''};
        this.handleChangeName=this.handleChangeName.bind(this);
        this.handleChangeAmount= this.handleChangeAmount.bind(this);
        //this.handleChangeMealId=this.handleChangeMealId.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleMealSelect = this.handleMealSelect.bind(this);



    }

    handleChangeName(event){
        this.setState({name: event.target.value});

    }
    handleChangeAmount(event){
        this.setState({amount: event.target.value});

    }
  /*  handleChangeMealId(event){
        this.setState({meal_id: event.target.value});
    }*/
    handleMealSelect(id){
        this.setState({meal_id: id});
    }



    handleSubmit(event){
        console.log("starting to post ingredient")
        const url = "http://localhost:8080/api/ingredients/" + this.state.meal_id
        console.log(JSON.stringify({amount: this.state.amount, name: this.state.name}))
        fetch(url,{
            method:"POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({amount: this.state.amount, name: this.state.name})})
            .then((response) => {
                if (response.status === 200) {
                    alert("added to database successfully");
                } else { // ei toimi vielä
                    alert("not succuessfull!");
                }
            });
        console.log("post complete")
        this.setState({name: '', amount: '', meal_id:''})
    }




    render() {
        return (
            <div className={"results"}>
                <h1>You can add new ingredient to a meal here:</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Ingredient name:
                        <input type="text" value={this.state.name} onChange={this.handleChangeName}/>
                    </label>
                    <label>
                        Amount in grams
                        <input type="text" value={this.state.amount} onChange={this.handleChangeAmount}/>
                    </label>
                    Select meal:
                    <GetMeals onMealSelect={this.handleMealSelect}/>
                    {/*<label>
                        ID of the meal:
                        <input type="text" value={this.state.meal_id} onChange={this.handleChangeMealId}/>
                    </label>*/}
                    <input type="submit" value="Add"/>
                </form>
            </div>
        );
    }
}

export default NewIngredientsForm;