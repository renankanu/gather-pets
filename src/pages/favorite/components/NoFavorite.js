import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Emoji from 'react-native-emoji';
import fonts from '../../../styles/fonts';
import {colors} from '../../../styles/commons-styles';
import Spacer from '../../../components/Spacer';

export default function NoFavorite() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {'Seus pets favoritos aqui! '}
        <Emoji name="dog" style={{fontSize: 20}} />
      </Text>
      <Spacer value={8} />
      <Spacer value={12} />
      <Text style={styles.desc}>
        {'Sua lista de pets está vazia '}
        <Emoji name="sob" style={{fontSize: 20}} />
      </Text>
      <Text style={styles.desc}>
        {'Se você favoritar o pet, vc tem preferencia para adoção '}
        <Emoji name="grin" style={{fontSize: 20}} />
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: fonts.BOLD,
    fontSize: 20,
    textAlign: 'center',
    color: colors.textPrimaryColor,
  },
  desc: {
    fontFamily: fonts.LIGHT,
    textAlign: 'center',
    color: colors.textPrimaryColor,
  },
});
