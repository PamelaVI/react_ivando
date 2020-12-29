import React from "react";
import Memeando from "../components/Memeando"

class Results extends React.Component {

    render() {
        console.log(this.props)
        return ( <
            div >
            <
            div className = "resultscontainer" > {
                this.props.memeandoArray.map(memeando => {
                    return <Memeando key = { memeando.id }
                    memeandoObject = { memeando }
                    />
                })
            } <
            /div> <
            /div>
        )
    }
}
export default Results