import { StyleSheet } from 'react-native';
import { defcolors } from '../colors/colors';

const textInputStyles = StyleSheet.create({
  credentialInputContainer: {
    width: '80%',
  },
  credentialInputContainerForFullPage: {
    width: '100%',
    paddingRight: 30,
  }, 

  credentialInputTitle:{
    color: defcolors.gray,
    fontSize: 15,
    marginTop: 10,
  },
  

  credentialInput:{
    borderColor: defcolors.lightPurple,
    borderRadius: 10,
    width: '100%',
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: defcolors.white,
    
  }
});

export { textInputStyles };