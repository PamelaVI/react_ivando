import React from "react";
import Memeando from "../components/Memeando"

import "../style/styles.css"
class Memeando extends React.Component {

    render() {
        return ( <
            div className = "box" >
            <
            h1 className = "header-text title is-1" > Memenado < /h1>

            <
            div className = "field " >

            <
            div className = "control" >
            <
            input className = "input is-primary is-rounded"
            onChange = {
                (event) => this.props.search(event)
            }
            type = "text"
            placeholder = "Search..." > < /input> < /
            div >

            <
            /div> < /
            div >
        )
    }
}

export default Memeando