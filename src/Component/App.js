import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import List from "./List";

class App extends React.Component {

    state = {
        isLoading: true,
        pokemon: [],
        pokemonCount:150
    }

    componentDidMount() {
      this.FetchData();

    }

    FetchData = async () => {
        setTimeout(async () => {
            const datas = []
            for (let i = 1; i <= this.state.pokemonCount; i++) {
                await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
                    .then(data => data.json())
                    .then(pokemon => datas.push(pokemon))
                this.setState({
                    isLoading: false,
                    pokemon: datas
                })
            }
        }, 2000)
    };

    render() {
        const {isLoading}=this.state

        return (
            <div className="App">
                <img src={"https://fontmeme.com/permalink/200616/b6a03160ca88d81316a7ea2527734ac9.png"} alt=""/>
<br/><br/><br/>
                <br/>
                {isLoading && "Loading.."}
                <br/><br/><br/>
                <List pokemon={this.state.pokemon}/>
            </div>
        );
    }
}

export default App;
