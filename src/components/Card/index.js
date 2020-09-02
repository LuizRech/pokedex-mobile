import React from 'react';
import { View, Text, Image } from 'react-native';

import page from './styles';

function Card(pokemonData){
  const data = pokemonData.data;
 
if(data.length > 0){
  console.log(data[2].sprites.front_default);
  return(
    // data.map(poke => {
      <View  style={page.container}>
      <View style={page.image}>
        <Image style={page.teste} source={{uri: data[12].sprites.front_default}}
          
         />
      </View>

      <View style={page.name}>
        <Text>{data[2].name}</Text>

      </View>

      <View style={page.types}>
        <Text>TYPES</Text>

      </View>

      <View style={page.data}>
        <Text>DATA</Text>

      </View>
    </View>
// })
  )
}else{
  return <Text>Loading...</Text>
}
}

export default Card;