export async function getAllPokemon(url){
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(res => res.json())
      .then(data => 
        resolve(data)
      );
  })
}

export async function getPokemon(url){
  const retorno =  await new Promise((resolve, reject) => {
    fetch(url)
      .then(res => res.json())
      .then(data => 
        resolve(data)
      );
  })
  return retorno;
}