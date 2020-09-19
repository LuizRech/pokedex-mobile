export default function types(type){
  const tipo = type;
  switch (tipo) {
    case 'bug':
      return{
        backgroundColor: '#729f3f'
      };
    break;
    case 'dragon':
      return{
        backgroundColor: '#53a4cf'
      };
    break;
    case 'fairy':
      return{
        backgroundColor: '#fdb9e9'
      };
    break;
    case 'fire':
      return{
        backgroundColor: '#fd7d24'
      };
    break;
    case 'ghost':
      return{
        backgroundColor: '#7b62a3'
      };
    break;
    case 'ground':
      return{
        backgroundColor: '#e0c068'
      };
    break;
    case 'normal':
      return{
        backgroundColor: '#a4acaf'
      };
    break;
    case 'psychic':
      return{
        backgroundColor: '#f366b9'
      };
    break;
    case 'steel':
      return{
        backgroundColor: '#bbbbce'
      };
    break;
    case 'dark':
      return{
        backgroundColor: '#707070'
      };
    break;
    case 'electric':
      return{
        backgroundColor: '#eed535'
      };
    break;
    case 'fighting':
      return{
        backgroundColor: '#d56723'
      };
    break;
    case 'flying':
      return{
        backgroundColor: '#3dc7ef'
      };
    break;
    case 'grass':
      return{
        backgroundColor: '#9bcc50'
      };
    break;
    case 'ice':
      return{
        backgroundColor: '#51c4e7'
      };
    break;
    case 'poison':
      return{
        backgroundColor: '#b97fc9'
      };
    break;
    case 'rock':
      return{
        backgroundColor: '#a38c21'
      };
    break;
    case 'water':
      return{
        backgroundColor: '#4592c4'
      };
    break;
    default:
      return;
    break;
  }
};

