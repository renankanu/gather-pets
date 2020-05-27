import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useFocusEffect} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import {colors} from '../../styles/commons-styles';
import user from '../../assets/images/user.jpeg';
import fonts from '../../styles/fonts';
import Spacer from '../../components/Spacer';
import ListCategory from './components/ListCategory';
import ListAnimals from './components/ListAnimals';
import {useNavigation} from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('light-content');
      Platform.OS === 'android' &&
        StatusBar.setBackgroundColor(colors.yellowHeader);
    }, []),
  );

  const callMyProfile = () => {
    navigation.navigate('MyProfile');
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.yellowHeader}
      />
      <View style={styles.subContainer}>
        <SafeAreaView>
          <View style={styles.headerHome}>
            <Spacer value={26} />
            <View>
              <Text style={styles.labelLocation}>Location</Text>
              <View style={styles.locationContainer}>
                <Feather name="map-pin" size={16} color={colors.black} />
                <Spacer value={8} />
                <Text style={styles.labelState}>Paraná</Text>
                <Text style={styles.labelCountry}>, Brazil</Text>
              </View>
            </View>
            <TouchableOpacity onPress={callMyProfile}>
              <Image style={styles.imageUser} source={user} />
              <View style={styles.dotOnline} />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
        <Spacer value={Platform.OS === 'ios' ? 0 : 16} />
        <View style={styles.containerContent}>
          <View style={styles.containerCategorySearch}>
            <Spacer value={24} />
            <ListCategory />
            <Spacer value={24} />
            <View style={styles.containerSearch}>
              <TouchableOpacity>
                <Feather
                  name="search"
                  size={24}
                  color={colors.textPrimaryColor}
                />
              </TouchableOpacity>
              <Spacer value={8} />
              <TextInput
                placeholder="Buscar pet"
                placeholderTextColor={colors.textPrimaryColor}
                style={styles.placeholderSearch}
              />
            </View>
            <Spacer value={36} />
          </View>
          <View style={styles.containerListAnimals}>
            <ListAnimals />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.yellowHeader,
  },
  subContainer: {
    flex: 1,
  },
  headerHome: {
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 46,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelLocation: {
    textAlign: 'center',
    color: colors.primaryColor,
  },
  labelState: {
    fontFamily: fonts.BOLD,
  },
  labelCountry: {
    fontFamily: fonts.LIGHT,
  },
  placeholderSearch: {
    flex: 1,
    fontFamily: fonts.LIGHT,
    color: colors.primaryColor,
  },
  dotOnline: {
    width: 8,
    height: 8,
    borderRadius: 8 / 2,
    backgroundColor: colors.greenButton,
    borderWidth: 2,
    borderColor: colors.white,
    position: 'absolute',
    top: 0,
    right: 0,
  },
  imageUser: {
    width: 36,
    height: 36,
    borderRadius: 16,
    borderColor: colors.white,
    borderWidth: 2,
  },
  containerContent: {
    flex: 1,
    backgroundColor: colors.backgroundAppColor,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  containerCategorySearch: {
    backgroundColor: colors.secundaryColor,
    borderRadius: 40,
  },
  containerSearch: {
    marginHorizontal: 20,
    paddingHorizontal: 12,
    borderRadius: 23,
    height: 46,
    backgroundColor: colors.bonJour,
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerListAnimals: {
    flex: 1,
    marginTop: -20,
  },
});
