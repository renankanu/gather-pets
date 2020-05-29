import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import LottieView from 'lottie-react-native';
import {useNavigation, CommonActions} from '@react-navigation/native';
import Emoji from 'react-native-emoji';

import {colors, commonsStyle} from '../../styles/commons-styles';
import lottieAdoption from '../../assets/lottie/lottieAdoption.json';
import fonts from '../../styles/fonts';
import Spacer from '../../components/Spacer';

export default function Adoption() {
  const navigation = useNavigation();

  const callGoBack = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{name: 'Home'}],
      }),
    );
  };

  return (
    <SafeAreaView style={commonsStyle.backgroundApp}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.backgroundAppColor}
      />
      <View style={styles.container}>
        <LottieView source={lottieAdoption} autoPlay loop={false} />
        <View style={styles.containerLottie}>
          <Text style={styles.title}>
            {'Parabéns!'} <Emoji name="tada" style={{fontSize: 20}} />
          </Text>
          <Text style={styles.message}>
            Yuuppp! Você acaba de adotar o Tyson
          </Text>
          <Spacer value={16} />
          <TouchableOpacity onPress={callGoBack} style={styles.buttonBack}>
            <Text style={styles.labelBackButton}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLottie: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: fonts.BOLD,
    fontSize: 22,
    color: colors.textPrimaryColor,
  },
  message: {
    fontFamily: fonts.MEDIUM,
    color: colors.textPrimaryColor,
  },
  buttonBack: {
    height: 40,
    backgroundColor: colors.yellowHeader,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelBackButton: {
    fontFamily: fonts.BOLD,
    color: colors.primaryColor,
  },
});
