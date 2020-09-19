import { StyleSheet } from 'react-native';

const page = StyleSheet.create({
  container : {
    minWidth: 300,
    height: 300,
    borderRadius: 20,
    backgroundColor: 'white',
    marginTop: 35,
  },
  
  imageView: {
    height: '40%',
    minWidth: 300,
    borderRadius: 20,
    alignItems: 'center',
    margin: 5,
  },
  
  image: {
    width: '60%',
    height: 125,
    marginTop: 10,
  },
  
  nameView: {
    minWidth: 300,
    alignItems: 'center',
    margin: 5,
  },
  
  name: {
    fontSize: 20,    
  },
  
  typesView: {
    minWidth: 300,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  
  types: {
    fontSize: 20,
    margin: 5,

    borderWidth: 1,
    borderColor: '#8f8f8fcd',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },

  dataView: {
    minWidth: 300,
    alignItems: 'center',
    margin: 5,
  },
  
  dataText: {
    fontSize: 18,
  }
});

export default page;