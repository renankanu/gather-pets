import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {colors} from '../../../styles/commons-styles';
import Spacer from '../../../components/Spacer';
import ong1 from '../../../assets/images/ong2.jpeg';

export default function ItemListONG() {
  return (
    <>
      <Spacer value={40} />
      <View style={styles.containerRow}>
        <Image style={styles.imageOng} source={ong1} />
        <Spacer value={16} />
        <View style={styles.containerInfo}>
          <Text>Nome da Ong</Text>
          <Text>Nome da Ong</Text>
          <Text>Nome da Ong</Text>
          <Text>Endereço da Ong</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  containerRow: {
    flex: 1,
    backgroundColor: colors.white,
    flexDirection: 'row',
    marginHorizontal: 20,
    borderRadius: 10,
  },
  imageOng: {
    marginTop: -20,
    borderRadius: 10,
    width: 140,
    height: 160,
  },
  containerInfo: {
    marginVertical: 20,
    justifyContent: 'space-around',
  },
});
