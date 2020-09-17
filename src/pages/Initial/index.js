import React, { useState, useEffect } from 'react';
import { View, Text } from "react-native";
import { getAllPokemon, getPokemon } from '../../services/pokemon';

import Card from '../../components/Card';

function Initial(){

  const [ pokemonData, setPokemonData] = useState([]);
  const [ prevPage, setPrevPage ] = useState('');
  const [ nextPage, setNextPage ] = useState('');

  const [ urlToFetch, setUrlToFetch ] = useState('https://pokeapi.co/api/v2/pokemon');

  useEffect(() => {
    async function loadPokemon(){
      let response = await getAllPokemon(urlToFetch);
      setNextPage(response.next);
      setPrevPage(response.previous);

      await getPokemonData(response.results);

    }

    loadPokemon();

  }, [])

  const getPokemonData = async (pokemons) => {

    const _pokemons = await Promise.all(
        pokemons.map(async pokemon => {
          let returnedDataPokemon = await getPokemon(pokemon.url);
          return returnedDataPokemon;
        })
      )

    setPokemonData(_pokemons);

  }

  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#dcdcdc' }}>
       <Card 
        data={pokemonData}
      />
    </View>
  );
}

export default Initial;