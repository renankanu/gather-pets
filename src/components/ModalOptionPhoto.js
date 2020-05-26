import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Spacer from './Spacer';
import {colors} from '../styles/commons-styles';
import fonts from '../styles/fonts';

export default function ModalOptionPhoto({isVisible, camera, gallery, cancel}) {
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
          <Text style={styles.header}>Escolha uma opção.</Text>
          <Spacer value={12} />
          <View style={styles.divider} />
          <Spacer value={32} />
          <TouchableOpacity style={styles.rowAction} onPress={camera}>
            <Feather name="camera" size={20} color={colors.black} />
            <Text style={styles.labelButtons}>Tirar com a camera ...</Text>
          </TouchableOpacity>
          <Spacer value={20} />
          <TouchableOpacity style={styles.rowAction} onPress={gallery}>
            <FontAwesome name="image" size={18} color={colors.black} />
            <Text style={styles.labelButtons}>Escolher da galeria ...</Text>
          </TouchableOpacity>
          <Spacer value={32} />
          <TouchableOpacity style={styles.buttonCancel} onPress={cancel}>
            <Text style={styles.labelCancel}>Cancelar</Text>
          </TouchableOpacity>
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
  rowAction: {
    marginLeft: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelButtons: {
    marginLeft: 8,
    fontFamily: fonts.BOLD,
    color: colors.black,
  },
  buttonCancel: {
    width: 100,
    padding: 12,
  },
  labelCancel: {
    fontFamily: fonts.BOLD,
    color: colors.tomato,
  },
});
