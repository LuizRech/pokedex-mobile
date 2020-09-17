import React from 'react';
import { View, Text, Image, FlatList} from 'react-native';

import page from './styles';

function Card(pokemonData){
  const pokez = pokemonData.data;
 
  if(pokez.length > 0){
    return (
      <FlatList 
        data={pokez}
        keyExtractor={poke => poke.id.toString()}
        renderItem={(poke) => {
          return(  
            <View  style={page.container} key={poke.item.id.toString()}>
              <View style={page.imageView}>
                <Image
                  style={page.image} 
                  source={{uri: poke.item.sprites.front_default}}
                  resizeMode="contain"
                />
              </View>

              <View style={page.nameView}>
                <Text style={page.name}>{poke.item.name}</Text>
              </View>

              <View style={page.typesView}>
                {poke.item.types.map(type => (
                  <Text style={page.types} key={type.type.name.toString()}>
                      {type.type.name}
                    </Text>
                ))}
              </View>

              <View style={page.dataView}>
                <Text style={page.dataText}>Ability: {poke.item.abilities[0].ability.name}</Text>
                <Text style={page.dataText}>Weight: {poke.item.weight}</Text>
                <Text style={page.dataText}>Height: {poke.item.height}</Text>
              </View>
            </View>
          )
        }}
      />
    )
  }else{
    return <Text>Loading...</Text>
  }
}

export default Card;