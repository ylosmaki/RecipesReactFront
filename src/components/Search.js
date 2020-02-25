import React from "react"

function Search() {
    return (
        <div className={"search"}>
            <form className="search-form">
                <input className="search-bar" type="text"/>
                <button className="search-button" type="submit">
                Search
                </button>
            </form>
        </div>
    );
}
export default Search