import logo from './logo.svg';
import './App.css';
import React from "react";
import Get from "../src/containers/Get"
import Results from "../src/containers/Results"


class App extends React.Component {
    constructor() {
        super();

        this.state = {
            allMemeando: [],
            searchText: ""
        }
    }

    Get = (event) => {
        this.setState({
            searchText: event.target.value
        })
    }


    ComponentDidMount() {
        fetch("http://alpha-meme-maker.herokuapp.com/:page")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    allMemeando: data.data.allMemeando
                })
            })
    }

    render() {
        return ( <
            div className = "App" >
            <
            Get memeando = { this.memeando }
            /> <
            Results memeandoArray = { this.state.allMemeando.filter(memeando => memeando.name.toLowerCase().includes(this.state.searchText)).slice(0, 30) }
            /> <
            /div>
        );
    }
}


export default App;