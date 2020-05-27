import React from 'react';
import {View, Text, StatusBar, StyleSheet, Platform} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

import {SafeAreaView} from 'react-native-safe-area-context';
import {colors, commonsStyle} from '../../styles/commons-styles';

export default function AddPet() {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('light-content');
      Platform.OS === 'android' &&
        StatusBar.setBackgroundColor(colors.backgroundAppColor);
    }, []),
  );

  return (
    <SafeAreaView style={commonsStyle.backgroundApp}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.backgroundAppColor}
      />
      <View style={styles.container}>
        <Text>AddPet</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
