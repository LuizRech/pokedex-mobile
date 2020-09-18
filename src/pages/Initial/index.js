import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { getAllPokemon, getPokemon } from '../../services/pokemon';

import Card from '../../components/Card';
import styles from './styles';

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

  }, [urlToFetch])

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
      <View style={styles.bttnView}>
        <TouchableOpacity style={styles.bttnTouchable} onPress={() => {prevPage ? setUrlToFetch(prevPage) : Alert.alert("Isn't possible!")}}>
          <Text style={styles.bttnText}>
            Previous
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bttnTouchable} onPress={() => {nextPage ? setUrlToFetch(nextPage) : Alert.alert("Isn't possible!")}}>
          <Text style={styles.bttnText}>
            Next
          </Text>
        </TouchableOpacity>
      </View>

       <Card 
        data={pokemonData}
      />

      {/* <View style={styles.bttnView}>
        <TouchableOpacity style={styles.bttnTouchable} onPress={() => {prevPage ? setUrlToFetch(prevPage) : Alert.alert("Isn't possible!")}}>
          <Text style={styles.bttnText}>
            Previous
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bttnTouchable} onPress={() => {nextPage ? setUrlToFetch(nextPage) : Alert.alert("Isn't possible!")}}>
          <Text style={styles.bttnText}>
            Next
          </Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
}

export default Initial;