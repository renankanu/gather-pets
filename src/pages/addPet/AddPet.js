import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

import {colors, commonsStyle} from '../../styles/commons-styles';
import fonts from '../../styles/fonts';
import Spacer from '../../components/Spacer';

export default function AddPet() {
  const navigation = useNavigation();
  const [genderSelected, setGenderSelected] = useState(0);
  const [image, setImage] = useState('');

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

  const selectMale = () => {
    setGenderSelected(0);
  };

  const selectFemale = () => {
    setGenderSelected(1);
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
        <TouchableOpacity style={styles.containerPhoto}>
          <Image source={image !== '' && image} />
          {image === '' && (
            <Feather
              style={styles.iconCam}
              name="camera"
              size={32}
              color={colors.textPrimaryColor}
            />
          )}
        </TouchableOpacity>
        <Spacer value={16} />
        <View style={styles.containerInput}>
          <TextInput
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome"
            placeholderTextColor={colors.textPrimaryColor}
            style={Platform.OS === 'ios' ? styles.inputStyle : null}
          />
        </View>
        <Spacer value={16} />
        <View style={styles.containerRow}>
          <View style={[styles.containerInput, {width: '46%'}]}>
            <TextInput
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Raça"
              placeholderTextColor={colors.textPrimaryColor}
              style={Platform.OS === 'ios' ? styles.inputStyle : null}
            />
          </View>
          <View style={[styles.containerInput, {width: '46%'}]}>
            <TextInput
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Idade"
              placeholderTextColor={colors.textPrimaryColor}
              style={Platform.OS === 'ios' ? styles.inputStyle : null}
            />
          </View>
        </View>
        <Spacer value={16} />
        <View style={styles.containerInput}>
          <TextInput
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Endereço"
            placeholderTextColor={colors.textPrimaryColor}
            style={Platform.OS === 'ios' ? styles.inputStyle : null}
          />
        </View>
        <Spacer value={16} />
        <Text style={styles.gender}>Sexo</Text>
        <View style={styles.containerRow}>
          <TouchableOpacity
            style={[
              styles.buttonGenderSelected,
              genderSelected !== 0 && {borderColor: colors.textPrimaryColor},
            ]}
            onPress={selectMale}>
            <Text
              style={[
                styles.labelGenderSelected,
                genderSelected !== 0 && {color: colors.textPrimaryColor},
              ]}>
              Macho
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.buttonGenderSelected,
              genderSelected !== 1 && {borderColor: colors.textPrimaryColor},
            ]}
            onPress={selectFemale}>
            <Text
              style={[
                styles.labelGenderSelected,
                genderSelected !== 1 && {color: colors.textPrimaryColor},
              ]}>
              Fêmea
            </Text>
          </TouchableOpacity>
        </View>
        <Spacer value={16} />
        <Text style={styles.gender}>Conte um pouco sobre o pet</Text>
        <TextInput
          multiline={true}
          numberOfLines={10}
          style={styles.textArea}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconCam: {
    position: 'absolute',
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
  containerPhoto: {
    width: '100%',
    height: 240,
    borderRadius: 120 / 2,
    backgroundColor: colors.secundaryColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.secundaryColor,
    borderRadius: 10,
    borderColor: colors.backgroundAppColor,
    borderWidth: 1,
  },
  containerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputStyle: {
    color: colors.white,
    fontSize: 16,
    flex: 1,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  gender: {
    color: colors.textPrimaryColor,
    fontSize: 16,
  },
  buttonGenderSelected: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 32,
    width: '46%',
    borderColor: colors.yellowHeader,
    borderWidth: 2,
    borderRadius: 10,
  },
  labelGenderSelected: {
    color: colors.yellowHeader,
  },
  textArea: {
    height: 200,
    textAlignVertical: 'top',
    padding: 20,
    backgroundColor: colors.secundaryColor,
    borderRadius: 10,
  },
});
