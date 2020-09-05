import React from 'react';
import Puns from './Puns';
import Button from './Button';

class GetPuns extends React.Component {
    state = {
        setup: '',
        punline: '',
        newPun: false,
    }

    componentDidMount = () => {
        this.getNewPun();
    }

    getNewPun = () => {
        fetch("https://sv443.net/jokeapi/v2/joke/Pun")
        .then(response => {
            return response.json();
        })

        .then(data => {
            this.setState({
                setup: data[0].setup,
                newPun: true,
            })
        })
        .catch(err => {
            console.log(err);
        });
    }
    getPunline = () => {
        this.setState({
            newPun: false
        });
    }
}