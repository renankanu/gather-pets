import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import {colors} from '../../../styles/commons-styles';
import Spacer from '../../../components/Spacer';
import fonts from '../../../styles/fonts';

export default function ItemListONG({ong}) {
  return (
    <>
      <Spacer value={40} />
      <View style={styles.containerRow}>
        <Image style={styles.imageOng} source={ong.image} />
        <Spacer value={16} />
        <View style={styles.containerInfo}>
          <Text style={styles.name}>{ong.name}</Text>
          <View style={styles.row}>
            <Feather name="clock" size={14} color={colors.primaryColor} />
            <Spacer value={4} />
            <Text style={styles.descInfo}>{ong.open}</Text>
          </View>
          <View style={styles.row}>
            <Feather name="map-pin" size={14} color={colors.primaryColor} />
            <Spacer value={4} />
            <Text style={styles.descInfo}>{ong.address}</Text>
          </View>
          <View style={styles.row}>
            <Feather name="star" size={14} color={colors.primaryColor} />
            <Spacer value={4} />
            <Text style={styles.descInfo}>{ong.rating}</Text>
          </View>
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
    resizeMode: 'cover',
    marginTop: -20,
    borderRadius: 10,
    width: 140,
    height: 160,
  },
  containerInfo: {
    flex: 1,
    marginRight: 20,
    marginVertical: 20,
    justifyContent: 'space-around',
  },
  name: {
    fontFamily: fonts.BOLD,
    fontSize: 18,
    color: colors.backgroundAppColor,
  },
  descInfo: {
    fontFamily: fonts.MEDIUM,
    color: colors.primaryColor,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
