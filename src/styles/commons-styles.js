import {StyleSheet, Platform} from 'react-native';

export const colors = {
  backgroundAppColor: '#22333B',
  primaryColor: '#2A3C44',
  secundaryColor: '#30444E',
  textPrimaryColor: '#96A7AF',
  black: '#000000',
  white: '#FFFFFF',
  yellowHeader: '#FFC542',
  greenButton: '#3FDA9C',
  face: '#3b5998',
  google: '#DB4437',
  silver: '#C0C0C0',
  bonJour: '#F1EFF0',
  tomato: 'rgb(240, 85, 85)',
};

export const commonsStyle = StyleSheet.create({
  fontLight: {
    fontFamily: Platform.OS === 'ios' ? null : 'sans-serif-light',
    fontWeight: '300',
  },
  fontMedium: {
    fontFamily: Platform.OS === 'ios' ? null : 'sans-serif-medium',
    fontWeight: Platform.OS === 'ios' ? '600' : 'normal',
  },
  fontBold: {
    fontFamily: Platform.OS === 'ios' ? null : 'sans-serif-medium',
    fontWeight: Platform.OS === 'ios' ? 'bold' : 'bold',
  },
  backgroundApp: {
    flex: 1,
    backgroundColor: colors.backgroundAppColor,
  },
});
