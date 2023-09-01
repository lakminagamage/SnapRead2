import { StyleSheet } from 'react-native';
import { defcolors } from '../colors/colors';

const buttonStyles = StyleSheet.create({
  primaryButton: {
    backgroundColor: defcolors.purple,
    borderRadius: 10,
    width: '100%',
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export { buttonStyles };