import React, {Component} from 'react';

class NewMealForm extends Component {
    constructor(props) {
        super(props);
        this.state={value:'',
        cookingtime:' ',
        portions:''};
        this.handleChangeName=this.handleChangeName.bind(this);
        this.handleChangeCookingtime=this.handleChangeCookingtime.bind(this);
        this.handleChangePortions=this.handleChangePortions.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChangeName(event){
        this.setState({value: event.target.value});

    }
    handleChangeCookingtime(event){
        this.setState({cookingtime: event.target.value});

    }
    handleChangePortions(event){
        this.setState({portions: event.target.value});
    }


    handleSubmit(event){
        console.log("starting to post")
        const url = "http://localhost:8080/api/meals"
        console.log(JSON.stringify({name: this.state.value, cookingtime: this.state.cookingtime, portions: this.state.portions}))
        fetch(url,{
            method:"POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({name: this.state.value,cookingtime: this.state.cookingtime, portions: this.state.portions})})
            .then((response) => {
                if (response.status === 200) {
                    alert("added to database successfully");
                } else { // ei toimi vielä
                    alert("not succuessfull!");
                }
            });
        console.log("post complete")
        this.setState({value: '', cookingtime: '', portions: ''})
    }

    render() {
        return (
            <div className={"results"}>
                <h1>You can add new meal here:</h1>
            <form onSubmit={this.handleSubmit}>
                <label>Meal name:
                    <input type="text" value={this.state.value} onChange={this.handleChangeName}/>
                    </label>
                <label>
                    Cooking time in minutes:
                    <input type="text" value={this.state.cookingtime} onChange={this.handleChangeCookingtime}/>
                </label>
                <label>
                    Default portion size:
                    <input type="text" value={this.state.portions} onChange={this.handleChangePortions}/>
                </label>
                <input type="submit" value="Add"/>

            </form>

            </div>
        );
    }
}

export default NewMealForm;