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

function Button(props){
    return(
        <div className='button-container' style={buttonBox}>
            <div 
            className="button"
            style={button}
            onClick={props.newPun ? props.getPunAns : props.getNewJoke}
            >
            {props.newPun ? 'Get Answer' : 'Get Pun'}    
            </div>
        </div>
    )
}

export default Button;