import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

import {colors, commonsStyle} from '../../styles/commons-styles';
import fonts from '../../styles/fonts';

export default function AddPet() {
  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('light-content');
      Platform.OS === 'android' &&
        StatusBar.setBackgroundColor(colors.backgroundAppColor);
    }, []),
  );

  const comeBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={commonsStyle.backgroundApp}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.backgroundAppColor}
      />
      <View style={styles.header}>
        <TouchableOpacity onPress={comeBack} style={styles.backButton}>
          <Feather
            name="chevron-left"
            size={32}
            color={colors.textPrimaryColor}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Adicionar animal</Text>
      </View>
      <View style={styles.container}>
        <TouchableOpacity>
          <Feather name="camera" size={32} color={colors.textPrimaryColor} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  backButton: {
    padding: 10,
  },
  title: {
    fontSize: 32,
    color: colors.textPrimaryColor,
    fontFamily: fonts.BOLD,
  },
});
