import React from 'react';
import Puns from './Puns';
import Button from './Button';


class GetPuns extends React.Component {
    state = {
        setup: "",
        punchline: "",
        newJoke: false,
    }

    componentDidMount = () => {
        this.getNewJoke();
    }

    getNewJoke = () => {
        fetch("https://official-joke-api.appspot.com/random_joke")
        .then(response => {
            return response.json();
            console.log(response);
        })
        .then(data => {
            this.setState({
                setup: data.setup,
                punchline: data.punchline,
                newJoke: true,
            })
        })
        .catch(err => {
            console.log(err);
        });
    }

    getPunchline = () => {
        this.setState({
            newJoke: false
        })
    }


    render() {
        return(
            <div className="quote-box" id="quote-box" style={{justifyContent: "space-between"}}>
                
                <Puns
                    setup={this.state.setup}
                    punchline={this.state.punchline}
                    newJoke={this.state.newJoke}
                    />
                
                <Button
                    getNewJoke={this.getNewJoke}
                    getPunchline={this.getPunchline}
                    newJoke={this.state.newJoke}
                    />
            </div>
        )
    }
}

export default GetPuns;