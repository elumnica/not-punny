import React from 'react';

const buttonBox = {
    display: "flex",
    justifyContent: "center",
}

const button = {
    background: "pink",
    color: "white",
    fontSize: "1.2rem",
    cursor: "pointer",
    padding: "0.5rem",
    margin: "1rem",
    borderRadius: "0.5rem",
}

function Buttons(props) {
    return(
        <div className="button-container" style={buttonBox}>
            <div
                className="button"
                style={button}
                onClick={props.newJoke ? props.getPunchline : props.getNewJoke}
            >
                {props.newJoke ? 'Get Answer' : 'Get Joke'}
            </div>
            
        </div>
    )
}

export default Buttons;