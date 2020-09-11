import React from 'react';
import { View, Text, Image } from 'react-native';

import page from './styles';

function Card(pokemonData){
  const data = pokemonData.data;
 
if(data.length > 0){
  return(
    // data.map(poke => {
      <View  style={page.container}>
      <View style={page.imageView}>
        <Image style={page.image} source={{uri: data[0].sprites.front_default}}
          
         />
      </View>

      <View style={page.nameView}>
        <Text style={page.name}>{data[0].name}</Text>

      </View>

      <View style={page.typesView}>
        {data[0].types.map(type => (
            <Text style={page.types}>
              {type.type.name}
            </Text>
        ))}
      </View>

      <View style={page.dataView}>
        <Text style={page.dataText}>Ability: {data[0].abilities[0].ability.name}</Text>
        <Text style={page.dataText}>Weight: {data[0].weight}</Text>
        <Text style={page.dataText}>Height: {data[0].height}</Text>
      </View>
    </View>
// })
  )
}else{
  return <Text>Loading...</Text>
}
}

export default Card;