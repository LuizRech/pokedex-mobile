import { StyleSheet } from 'react-native';

const page = StyleSheet.create({
  container : {
    minWidth: 300,
    height: 300,
    borderRadius: 20,
    backgroundColor: 'white',
  },
  
  image: {
    // backgroundColor: 'red',
    height: '40%',
    minWidth: 300,
    borderRadius: 20,
    alignItems: 'center',
    margin: 5
  },
  
  name: {
    // backgroundColor: 'yellow',
    minWidth: 300,
    alignItems: 'center',
    margin: 5
  },

  types: {
    // backgroundColor: 'green',
    minWidth: 300,
    alignItems: 'center',
    margin: 5

  },

  data: {
    // backgroundColor: 'purple',
    minWidth: 300,
    alignItems: 'center',
    justifyContent: 'flex-end',
    margin: 5
  },

  teste: {
    width: 55,
    height: 55
  }
});

export default page;