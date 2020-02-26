import React from 'react';
import '../App.css';
import Header from "./Header"
import Sidebar from "./Sidebar"
import Search from "./Search"
import Results from "./Results"
import Footer from "./Footer"

function App() {
  return (
    <div className="App">
        <Header /> {/*Header and stuff*/}
        <Search /> {/*what do you want to search from database*/}
        <Sidebar /> {/*meals*/}
        <Results /> {/*recipes and search result*/}
        <Footer /> {/*footer if we need one*/}

    </div>
  );
}

export default App;
