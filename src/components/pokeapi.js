import {useState, useEffect} from 'react';
import axios from 'axios';

const Pokeapi = props => {
    const [pokeList, setPokeList] = useState([]);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
            .then(response => {setPokeList(response.data.results)})
    }, []);

    return(
        <div>
            {pokeList.length > 0 && pokeList.map((pokemon, index) => {
                return(<div key={index}> {pokemon.name} </div>)
            })}
        </div>
    );
}

export default Pokeapi