import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {colors} from '../../../styles/commons-styles';
import Spacer from '../../../components/Spacer';

export default function OptionMenu({title, action}) {
  return (
    <>
      <TouchableOpacity onPress={action} style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Feather
          name="chevron-right"
          size={16}
          color={colors.textPrimaryColor}
        />
      </TouchableOpacity>
      <Spacer value={10} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.secundaryColor,
    padding: 10,
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
  title: {
    fontSize: 14,
    color: colors.textPrimaryColor,
  },
});
