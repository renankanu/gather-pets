import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Platform,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import Spacer from '../../components/Spacer';

import {colors, commonsStyle} from '../../styles/commons-styles';
import {useNavigation} from '@react-navigation/native';
import fonts from '../../styles/fonts';

export default function ChangePassword() {
  const navigation = useNavigation();

  const callGoBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={commonsStyle.backgroundApp}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.backgroundAppColor}
      />
      <View style={styles.container}>
        <Spacer value={20} />
        <View style={styles.containerHeader}>
          <Text style={styles.headerTitle}>Alterar Senha</Text>
          <TouchableOpacity onPress={callGoBack}>
            <Feather name="x" size={24} color={colors.textPrimaryColor} />
          </TouchableOpacity>
        </View>
        <Spacer value={60} />
        <View style={styles.containerInputs}>
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
              placeholder="Senha atual"
              placeholderTextColor={colors.textPrimaryColor}
              style={styles.inputStyle}
            />
          </View>
          <Spacer value={16} />
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
              placeholder="Nova senha"
              placeholderTextColor={colors.textPrimaryColor}
              style={styles.inputStyle}
            />
          </View>
          <Spacer value={16} />
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
              placeholder="Confirmar senha"
              placeholderTextColor={colors.textPrimaryColor}
              style={styles.inputStyle}
            />
          </View>
          <Spacer value={16} />
          <TouchableOpacity style={styles.buttonChange}>
            <Text style={[styles.labelChange, commonsStyle.fontMedium]}>
              Alterar senha
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
  },
  containerHeader: {
    flexDirection: 'row',
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontFamily: fonts.BOLD,
    fontSize: 24,
    color: colors.textPrimaryColor,
  },
  containerInputs: {
    marginHorizontal: 20,
  },
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.secundaryColor,
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
  iconInput: {
    paddingLeft: 14,
    paddingRight: Platform.OS === 'android' ? 4 : 8,
  },
  inputStyle: {
    color: colors.white,
    fontSize: 16,
    flex: 1,
    borderRadius: 10,
    paddingBottom: 14,
    paddingTop: 14,
    paddingRight: 14,
  },
  buttonChange: {
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: colors.yellowHeader,
  },
  labelChange: {
    fontSize: 14,
    color: colors.primaryColor,
  },
});
