import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import {commonsStyle, colors} from '../../styles/commons-styles';
import Spacer from '../../components/Spacer';
import fonts from '../../styles/fonts';

const Login = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={commonsStyle.backgroundApp}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.backgroundAppColor}
      />
      <View style={styles.container}>
        <Text style={[styles.nameApp]}>Gather Pets</Text>
        <View style={styles.cardLogin}>
          <View style={styles.containerInput}>
            <Feather
              style={styles.iconInput}
              name="mail"
              size={16}
              color="#96A7AF"
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
              color="#96A7AF"
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
          <Spacer value={32} />
          <Text style={styles.dontHave}>Don't have account? Sign up now</Text>
          {/* <Text style={styles.terms}>
            By pressing 'Submit' you agree to our terms & condition
          </Text> */}
        </View>
        <Spacer value={32} />
        <TouchableOpacity style={styles.buttonLogin}>
          <Text style={[styles.labelLogin, commonsStyle.fontMedium]}>
            Login
          </Text>
        </TouchableOpacity>
        <Spacer value={12} />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ForgotPassword');
          }}>
          <Text style={[styles.labelForgot]}>Forgot password?</Text>
        </TouchableOpacity>
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
    fontFamily: fonts.BOLD,
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 12,
    color: colors.textPrimaryColor,
  },
  cardLogin: {
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
  labelRegister: {
    fontSize: 16,
    color: colors.yellowHeader,
    letterSpacing: 2,
  },
  buttonLogin: {
    height: 46,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: colors.yellowHeader,
  },
  labelLogin: {
    fontFamily: fonts.BOLD,
    fontSize: 14,
    color: colors.primaryColor,
  },
  labelForgot: {
    fontFamily: fonts.BOLD,
    textAlign: 'center',
    color: colors.greenButton,
  },
  dontHave: {
    fontFamily: fonts.BOLD,
    textAlign: 'center',
    color: colors.white,
  },
  terms: {
    marginHorizontal: 60,
    textAlign: 'center',
  },
});
