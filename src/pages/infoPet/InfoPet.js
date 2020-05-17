import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import {colors, commonsStyle} from '../../styles/commons-styles';

const {height} = Dimensions.get('window');

export default function InfoPet({route}) {
  const {pet} = route.params;
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors.black, colors.transparent]}
        style={styles.linearGradient}
      />
      <SharedElement id={`item.${pet.id}.photo`}>
        <Image style={styles.images} source={pet.photo} />
      </SharedElement>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    height: 40,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 99,
  },
  images: {
    height: height / 2,
    resizeMode: 'cover',
  },
});
