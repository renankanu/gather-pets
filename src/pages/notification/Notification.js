import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import {useFocusEffect} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';

import {colors, commonsStyle} from '../../styles/commons-styles';
import fonts from '../../styles/fonts';
import Spacer from '../../components/Spacer';

export default function Notification() {
  const navigation = useNavigation();
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('light-content');
      Platform.OS === 'android' &&
        StatusBar.setBackgroundColor(colors.backgroundAppColor);
    }, []),
  );

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
        <Spacer value={8} />
        <View style={styles.containerHeader}>
          <Text style={styles.headerTitle}>Notificações</Text>
          <TouchableOpacity onPress={callGoBack}>
            <Feather name="x" size={24} color={colors.textPrimaryColor} />
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
});
