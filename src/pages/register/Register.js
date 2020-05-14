import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

import {colors, commonsStyle} from '../../styles/commons-styles';
import Spacer from '../../components/Spacer';
import fonts from '../../styles/fonts';

export default function Register() {
  const navigation = useNavigation();

  const comeBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={commonsStyle.backgroundApp}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.backgroundAppColor}
      />
      <TouchableOpacity onPress={comeBack} style={styles.backButton}>
        <Feather
          name="chevron-left"
          size={32}
          color={colors.textPrimaryColor}
        />
      </TouchableOpacity>
      <Spacer value={50} />
      <Text style={styles.title}>Register</Text>
      <Spacer value={50} />
      <View style={styles.container}>
        <Animatable.View animation="fadeIn" style={styles.cardRegister}>
          <View style={styles.containerInput}>
            <Feather
              style={styles.iconInput}
              name="user"
              size={16}
              color={colors.textPrimaryColor}
            />
            <TextInput
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Name"
              placeholderTextColor={colors.textPrimaryColor}
              style={styles.inputStyle}
            />
          </View>
          <Spacer value={20} />
          <View style={styles.containerInput}>
            <Feather
              style={styles.iconInput}
              name="phone"
              size={16}
              color={colors.textPrimaryColor}
            />
            <TextInput
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Cell Phone"
              keyboardType="numeric"
              placeholderTextColor={colors.textPrimaryColor}
              style={styles.inputStyle}
            />
          </View>
          <Spacer value={20} />
          <View style={styles.containerInput}>
            <Feather
              style={styles.iconInput}
              name="mail"
              size={16}
              color={colors.textPrimaryColor}
            />
            <TextInput
              autoCorrect={false}
              autoCapitalize="none"
              autoCompleteType="email"
              keyboardType="email-address"
              placeholder="E-mail"
              placeholderTextColor={colors.textPrimaryColor}
              style={styles.inputStyle}
            />
          </View>
          <Spacer value={20} />
          <View style={styles.containerInput}>
            <Feather
              style={styles.iconInput}
              name="key"
              size={16}
              color={colors.textPrimaryColor}
            />
            <TextInput
              autoCorrect={false}
              secureTextEntry={true}
              autoCompleteType="password"
              placeholder="Password"
              placeholderTextColor={colors.textPrimaryColor}
              style={styles.inputStyle}
            />
          </View>
          <Spacer value={20} />
          <View style={styles.containerInput}>
            <Feather
              style={styles.iconInput}
              name="key"
              size={16}
              color={colors.textPrimaryColor}
            />
            <TextInput
              autoCorrect={false}
              secureTextEntry={true}
              autoCompleteType="password"
              placeholder="Repeat Password"
              placeholderTextColor={colors.textPrimaryColor}
              style={styles.inputStyle}
            />
          </View>
          <Spacer value={16} />
          <Text style={styles.terms}>
            By pressing 'Register' you agree to our terms & condition
          </Text>
        </Animatable.View>
        <Spacer value={32} />
        <TouchableOpacity style={styles.buttonRegister}>
          <Text style={[styles.labelRegister, commonsStyle.fontMedium]}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 32,
    marginHorizontal: 20,
    color: colors.textPrimaryColor,
    fontFamily: fonts.BOLD,
  },
  cardRegister: {
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 20,
    backgroundColor: colors.secundaryColor,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  iconInput: {
    paddingLeft: 14,
    paddingRight: Platform.OS === 'android' ? 4 : 8,
  },
  inputStyle: {
    color: colors.white,
    fontSize: 16,
    flex: 1,
    borderRadius: 10,
    paddingBottom: 16,
    paddingTop: 16,
    paddingRight: 16,
  },
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.secundaryColor,
    borderRadius: 10,
    borderColor: colors.backgroundAppColor,
    borderWidth: 1,
  },
  terms: {
    textAlign: 'center',
    color: colors.textPrimaryColor,
  },
  buttonRegister: {
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginHorizontal: 20,
    backgroundColor: colors.yellowHeader,
  },
  labelRegister: {
    fontSize: 14,
    color: colors.primaryColor,
  },
});
