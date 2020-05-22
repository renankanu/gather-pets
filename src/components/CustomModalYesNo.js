import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {colors} from '../styles/commons-styles';
import fonts from '../styles/fonts';
import Spacer from './Spacer';

export default function CustomModalYesNo({
  isVisible,
  message,
  labelNo,
  actionNo,
  labelYes,
  actionYes,
}) {
  return (
    <View>
      <Modal
        isVisible={isVisible}
        animationIn="bounceIn"
        animationOut="bounceOut"
        animationInTiming={600}
        animationOutTiming={600}
        backdropTransitionInTiming={600}
        backdropTransitionOutTiming={600}>
        <View style={styles.container}>
          <Text style={styles.header}>Gather Pets</Text>
          <Spacer value={12} />
          <View style={styles.divider} />
          <Spacer value={12} />
          <Text style={styles.message}>{message}</Text>
          <Spacer value={20} />
          <View style={styles.containerAction}>
            <TouchableOpacity onPress={actionNo} style={styles.button}>
              <Text style={styles.labelNo}>{labelNo}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={actionYes} style={styles.button}>
              <Text style={styles.labelYes}>{labelYes}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: colors.white,
    borderRadius: 10,
  },
  header: {
    fontFamily: fonts.BOLD,
    fontSize: 18,
    textAlign: 'center',
  },
  divider: {
    height: 0.5,
    backgroundColor: colors.black,
  },
  message: {
    marginHorizontal: 20,
    fontFamily: fonts.BOLD,
  },
  containerAction: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    paddingVertical: 12,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelNo: {
    fontFamily: fonts.BOLD,
    color: colors.tomato,
  },
  labelYes: {
    fontFamily: fonts.BOLD,
    color: colors.black,
  },
});
