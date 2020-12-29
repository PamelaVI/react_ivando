import React from "react";
class Memeando extends React.Component {
    render() {
        return ( <
            div className = "container .imgRedonda" >
            <
            div className = "card .imgRedonda" >
            <
            div className = "card-image .imgRedonda" >
            <
            figure className = "image is-4by3 .imgRedonda" >
            <
            img alt = "meme .imgRedonda"
            src = { this.props.memeObject.url } > < /img> <
            /figure> <
            /div> <
            div className = "card-content .imgRedonda" >
            <
            div className = "media-content .imgRedonda" >
            <
            p className = "title is-4 .title" > { this.props.memeObject.name } < /p> <
            /div> <
            /div> <
            /div> <
            /div>
        )
    }
}

export default Memeando
}