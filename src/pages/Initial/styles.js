import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  
  bttnView: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    width: '100%',
    justifyContent: 'center',
    marginLeft: -15,
    marginTop: 35
  },
  
  bttnTouchable: {
    marginLeft: 15,
    backgroundColor: 'white',
    borderRadius: 40,
    borderColor: 'hsla(0,0%,100%,.8)',
    borderWidth: 1
    
  },
  
  bttnText: {
    fontSize: 20,
    paddingHorizontal: 40
  }

});

export default styles;