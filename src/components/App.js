import React from 'react';
import '../App.css';
import Header from "./Header"
import Sidebar from "./Sidebar"
import Search from "./Search"
import Results from "./Results"
import Footer from "./Footer"

import IngredientSearch from "./IngredientSearch";
import NewMealForm from "./NewMealForm";
import NewIngredientsForm from "./newIngredientsForm";

class App extends React.Component{
    state = {meals : [], selectedMeal: null}
    componentDidMount() {
        fetch('http://localhost:8080/api/meals')
            .then(response => response.json())
            .then((response) => this.setState(
                {meals: response}))
    }
    selectMeal = (id) => {
/*
        console.log("Selecting meal", id)
*/
        for(let m of this.state.meals) {
            if(m.id === id) {
/*
                console.log("Found a match", m)
*/
                this.setState({selectedMeal: m});
                return
            }
        }
    }
    render() {
    return (
    <div className="App">
        <Header /> {/*Header and stuff*/}
        <Search /> {/*what do you want to search from database*/}
        <IngredientSearch /> {/*ingredient search*/}
        <Sidebar meals={this.state.meals} selectMeal={this.selectMeal}/> {/*meals*/}
        <Results meal={this.state.selectedMeal}/> {/*recipes and search result*/}
        <NewMealForm />
        <NewIngredientsForm />
        <Footer /> {/*footer if we need one*/}

    </div>
  );
}
}
export default App;
