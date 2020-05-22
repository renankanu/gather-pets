import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {human} from 'react-native-typography';
import {SafeAreaView} from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import {colors, commonsStyle} from '../../styles/commons-styles';
import Spacer from '../../components/Spacer';
import user from '../../assets/images/user.jpeg';
import fonts from '../../styles/fonts';
import OptionMenu from './components/OptionMenu';
import {useNavigation, CommonActions} from '@react-navigation/native';
import CustomModalYesNo from '../../components/CustomModalYesNo';

export default function MyProfile() {
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(false);

  const goBack = () => {
    navigation.goBack();
  };

  const callLogout = () => {
    setIsVisible(true);
  };

  const actionNo = () => {
    setIsVisible(false);
  };

  const actionYes = () => {
    setIsVisible(false);
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{name: 'Login'}],
      }),
    );
  };

  const callNotification = () => {
    navigation.navigate('Notification');
  };

  const callFavorite = () => {
    navigation.navigate('Favorite');
  };

  const callChangePassword = () => {
    navigation.navigate('ChangePassword');
  };

  const callAbout = () => {
    navigation.navigate('About');
  };

  return (
    <SafeAreaView style={commonsStyle.backgroundApp}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.backgroundAppColor}
      />
      <View style={styles.container}>
        <TouchableOpacity onPress={goBack} style={styles.backButton}>
          <Feather name="chevron-left" size={32} color={colors.white} />
        </TouchableOpacity>
        <Spacer value={20} />
        <View style={styles.containePhoto}>
          <View>
            <Image style={styles.imageUser} source={user} />
            <View style={styles.iconCam}>
              <Feather name="camera" size={18} color={colors.white} />
            </View>
          </View>
        </View>
        <Spacer value={10} />
        <View style={styles.containerInfo}>
          <Text style={styles.name}>John Just</Text>
          <Text style={styles.email}>john@gatherpets.com</Text>
          <Text style={styles.email}>(44) 91111-1111</Text>
        </View>
        <Spacer value={20} />
        <TouchableOpacity>
          <Text style={styles.labelEditProfile}>Editar Perfil</Text>
        </TouchableOpacity>
        <Spacer value={40} />
        <View style={styles.containerActions}>
          <OptionMenu title="Notificações" action={callNotification} />
          <OptionMenu title="Meus Favoritos" action={callFavorite} />
          <OptionMenu title="Alterar Senha" action={callChangePassword} />
          <OptionMenu title="Sobre" action={callAbout} />
        </View>
        <View style={styles.containerLogout}>
          <TouchableOpacity onPress={callLogout}>
            <Text style={styles.labelLogout}>Sair</Text>
          </TouchableOpacity>
        </View>
      </View>
      <CustomModalYesNo
        isVisible={isVisible}
        message="Deseja sair ?"
        labelNo="Cancelar"
        actionNo={actionNo}
        labelYes="Sim"
        actionYes={actionYes}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    marginHorizontal: 10,
  },
  imageUser: {
    width: 100,
    height: 100,
    borderRadius: 30,
    borderColor: colors.white,
    borderWidth: 2,
  },
  iconCam: {
    width: 28,
    height: 28,
    borderRadius: 28 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.textPrimaryColor,
    position: 'absolute',
    right: -6,
    bottom: -6,
  },
  containePhoto: {
    alignItems: 'center',
  },
  containerInfo: {
    alignItems: 'center',
  },
  name: {
    fontFamily: fonts.MEDIUM,
    color: colors.textPrimaryColor,
    fontSize: 20,
  },
  email: {
    fontFamily: fonts.MEDIUM,
    color: colors.textPrimaryColor,
  },
  labelEditProfile: {
    ...human.callout,
    color: colors.greenButton,
    textAlign: 'center',
  },
  containerActions: {
    marginHorizontal: 20,
  },
  containerLogout: {
    flex: 1,
    marginLeft: 20,
    justifyContent: 'flex-end',
    marginBottom: 40,
  },
  labelLogout: {
    ...human.callout,
    color: colors.tomato,
  },
});
