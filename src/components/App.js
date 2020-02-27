import React from 'react';
import '../App.css';
import Header from "./Header"
import Sidebar from "./Sidebar"
import Search from "./Search"
import Results from "./Results"
import Footer from "./Footer"
import GetMeals from "./GetMeals";
import NewMealForm from "./NewMealForm";
import NewIngredientsForm from "./newIngredientsForm";

function App() {
  return (
    <div className="App">
        <Header /> {/*Header and stuff*/}
        <Sidebar /> {/*meals*/}
        <Search /> {/*what do you want to search from database*/}
        <Results /> {/*recipes and search result*/}
        <Footer /> {/*footer if we need one*/}
        <GetMeals/>
        <NewMealForm/>
        <NewIngredientsForm/>
    </div>
  );
}

export default App;
