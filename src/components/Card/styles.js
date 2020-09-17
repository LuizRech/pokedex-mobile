import { StyleSheet } from 'react-native';

const page = StyleSheet.create({
  container : {
    minWidth: 300,
    height: 300,
    borderRadius: 20,
    backgroundColor: 'white',
    marginTop: 50
  },
  
  imageView: {
    // backgroundColor: 'red',
    height: '40%',
    minWidth: 300,
    borderRadius: 20,
    alignItems: 'center',
    margin: 5
  },
  
  image: {
    width: '60%',
    height: 125,
    marginTop: 10,
    // backgroundColor: 'blue',
  },
  
  nameView: {
    // backgroundColor: 'yellow',
    minWidth: 300,
    alignItems: 'center',
    margin: 5,
  },
  
  name: {
    fontSize: 20,    
  },
  
  typesView: {
    // backgroundColor: 'green',
    minWidth: 300,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  
  types: {
    fontSize: 20,
    margin: 5,
  },

  dataView: {
    // backgroundColor: 'purple',
    minWidth: 300,
    alignItems: 'center',
    margin: 5
  },
  
  dataText: {
    fontSize: 18,

  }
});

export default page;