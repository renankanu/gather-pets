import React from 'react';
import {View, Text, StatusBar, StyleSheet, Image} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors, commonsStyle} from '../../styles/commons-styles';

export default function InfoPet({route}) {
  const {pet} = route.params;
  return (
    <SafeAreaView style={commonsStyle.backgroundApp}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.backgroundAppColor}
      />
      <View style={styles.container}>
        <SharedElement id={`item.${pet.id}.photo`}>
          <Image source={pet.photo} />
        </SharedElement>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
