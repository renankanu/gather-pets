import React from 'react';
import {View, StyleSheet, Text, StatusBar, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {commonsStyle, colors} from '../../styles/commons-styles';
import Spacer from '../../components/Spacer';

const Login = () => {
  return (
    <SafeAreaView style={commonsStyle.backgroundApp}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.backgroundAppColor}
      />
      <View style={styles.container}>
        <Text style={[styles.nameApp, commonsStyle.fontMedium]}>
          Gather Pets
        </Text>
        <View style={styles.cardLogin}>
          <TextInput
            autoCorrect={false}
            placeholder="Login"
            placeholderTextColor={colors.textPrimaryColor}
            style={styles.inputStyle}
          />
          <Spacer value={20} />
          <TextInput
            autoCorrect={false}
            placeholder="Password"
            placeholderTextColor={colors.textPrimaryColor}
            style={styles.inputStyle}
          />
          {/* <Text style={styles.terms}>
            By pressing 'Submit' you agree to our terms & condition
          </Text> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  nameApp: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 12,
    color: colors.textPrimaryColor,
  },
  cardLogin: {
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 20,
    backgroundColor: colors.secundaryColor,
  },
  inputStyle: {
    color: '#FFF',
    fontSize: 16,
    padding: 12,
    borderRadius: 10,
    borderColor: colors.primaryColor,
    borderWidth: 0.5,
  },
  terms: {
    marginHorizontal: 60,
    textAlign: 'center',
  },
});
