import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {StackActions} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

import {colors, commonsStyle} from '../../styles/commons-styles';
import {ImageBackground} from 'react-native';
import login from '../../assets/images/login.jpeg';
import fonts from '../../styles/fonts';

const InitialScreen = () => {
  const navigation = useNavigation();

  const callLogin = () => {
    navigation.dispatch(StackActions.replace('Login'));
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={login} style={styles.image}>
        <SafeAreaView style={styles.subContainer}>
          <Animatable.View
            animation="slideInDown"
            style={styles.containerTitle}>
            <Text style={styles.titleLogin}>Não abandone, doe!</Text>
          </Animatable.View>
          <Animatable.View
            animation="slideInUp"
            direction="alternate"
            style={styles.containerLogin}>
            <TouchableOpacity onPress={callLogin} style={styles.buttonLogin}>
              <Text style={[styles.labelLogin, commonsStyle.fontMedium]}>
                Login / Sign Up
              </Text>
            </TouchableOpacity>
          </Animatable.View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default InitialScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  subContainer: {
    flex: 1,
  },
  containerTitle: {
    marginTop: 60,
  },
  titleLogin: {
    fontFamily: fonts.MEDIUM,
    color: colors.white,
    fontSize: 24,
    textAlign: 'center',
  },
  subTitleLogin: {
    fontFamily: fonts.MEDIUM,
    color: colors.white,
    fontSize: 16,
    textAlign: 'center',
  },
  containerLogin: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  buttonLogin: {
    marginBottom: 32,
    marginHorizontal: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.yellowHeader,
    height: 46,
  },
  labelLogin: {
    fontSize: 14,
    color: colors.primaryColor,
  },
});
