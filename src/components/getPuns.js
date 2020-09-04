import React from 'react';
import Puns from './Puns';
import Button from './Button';

class GetPuns extends React.Component {
    state = {
        setup: '',
        punchline: '',
        newJoke: false,
    }

    componentDidMount = () => {
        this.getNewPun();
    }

    getNewPun = () => {
        fetch("https://sv443.net/jokeapi/v2/joke/Pun")
        .then(response => {
            return response.json();
        })
        console.log(response);
    }
}