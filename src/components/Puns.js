import React from 'react';


const PunBubble={
    width: 300,
    background: "white",
    borderRadius: "50%",
    padding: "3rem 4rem",
    margin: "1.5rem", 
    textAlign: "center"
}

const hidden = {
    display: 'none'
}

const container = {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center",
    height: 280,
}

function Puns(props){
    return(
        <div className="quote-container" style={container}>
            <h2 className="setup" id="setup" style={props.newPun ? PunBubble : hidden}>
                {props.setup}
            </h2>
            <h2
                className="punchline"
                id="punchline"
                style={props.newPun ? hidden : PunBubble}>
                {props.punchline}
            </h2>
        </div>
    );
}

export default Puns;