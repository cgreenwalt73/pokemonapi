import {useState, useEffect} from 'react';

const Pokeapi = props => {
    const [pokeList, setPokeList] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
            .then(response => response.json())
            .then(response => setPokeList(response.results))
    }, []);
    console.log(pokeList[0])

    return(
        <div>
            {pokeList.length > 0 && pokeList.map((pokemon, index) => {
                return(<div key={index}> {pokemon.name} </div>)
            })}
        </div>
    );
}

export default Pokeapi