import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import {colors, commonsStyle} from '../../styles/commons-styles';
import {useNavigation} from '@react-navigation/native';
import Spacer from '../../components/Spacer';

const {height} = Dimensions.get('window');

export default function InfoPet({route}) {
  const {pet} = route.params;
  const navigation = useNavigation();

  const comeBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors.black, colors.black80, colors.transparent]}
        style={styles.linearGradient}>
        <Spacer value={40} />
        <TouchableOpacity onPress={comeBack} style={styles.backButton}>
          <Feather name="chevron-left" size={32} color={colors.white} />
        </TouchableOpacity>
      </LinearGradient>

      <SharedElement id={`item.${pet.name}.photo`}>
        <Image style={styles.images} source={pet.photo} />
      </SharedElement>
      <Text>aaa</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 99,
  },
  sharedElement: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: -1,
  },
  images: {
    height: height / 2,
    resizeMode: 'cover',
  },
  backButton: {
    padding: 10,
  },
});
