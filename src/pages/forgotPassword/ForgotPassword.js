import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors, commonsStyle} from '../../styles/commons-styles';
import Spacer from '../../components/Spacer';

export default function ForgotPassword() {
  return (
    <SafeAreaView style={commonsStyle.backgroundApp}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.backgroundAppColor}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Forgot Password ?</Text>
        <View style={styles.containerCenter}>
          <Text style={styles.desc}>
            Enter your registered email above to receivepassword reset
            instruction
          </Text>
          <Spacer value={42} />
          <TextInput
            autoCorrect={false}
            autoCapitalize="none"
            autoCompleteType="email"
            keyboardType="email-address"
            placeholder="E-mail"
            placeholderTextColor={colors.textPrimaryColor}
            style={styles.inputStyle}
          />
          <Spacer value={16} />
          <TouchableOpacity style={styles.buttonForgot}>
            <Text style={[styles.labelForgot, commonsStyle.fontMedium]}>
              Send
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: colors.textPrimaryColor,
  },
  containerCenter: {
    flex: 1,
    justifyContent: 'center',
  },
  desc: {
    color: colors.textPrimaryColor,
    textAlign: 'center',
  },
  inputStyle: {
    backgroundColor: colors.secundaryColor,
    color: colors.white,
    fontSize: 16,
    padding: 12,
    borderRadius: 10,
    borderColor: colors.backgroundAppColor,
    borderWidth: 1,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonForgot: {
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: colors.yellowHeader,
  },
  labelForgot: {
    fontSize: 14,
    color: colors.primaryColor,
  },
});
