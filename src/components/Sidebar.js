import React from "react"
import Mealbar from "./Mealbar"

function Sidebar(props) {
    return (
        <div className={"sidebar"}>
            <Mealbar {...props}/>
        </div>
    )
}
export default Sidebar