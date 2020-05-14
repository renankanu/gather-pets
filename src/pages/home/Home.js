import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import {colors} from '../../styles/commons-styles';
import user from '../../assets/images/user.jpeg';
import fonts from '../../styles/fonts';
import Spacer from '../../components/Spacer';
import ListCategory from './components/ListCategory';
import ListAnimals from './components/ListAnimals';

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.yellowHeader}
      />
      <View style={styles.subContainer}>
        <SafeAreaView>
          <View style={styles.headerHome}>
            <TouchableOpacity>
              <Feather name="align-left" size={24} color={colors.black} />
            </TouchableOpacity>
            <View>
              <Text style={styles.labelLocation}>Location</Text>
              <View style={styles.locationContainer}>
                <Feather name="map-pin" size={16} color={colors.black} />
                <Spacer value={8} />
                <Text style={styles.labelState}>Paraná</Text>
                <Text style={styles.labelCountry}>, Brazil</Text>
              </View>
            </View>
            <View>
              <Image style={styles.imageUser} source={user} />
              <View style={styles.dotOnline} />
            </View>
          </View>
        </SafeAreaView>
        <Spacer value={Platform.OS === 'ios' ? 0 : 32} />
        <View style={styles.containerContent}>
          <View style={styles.containerCategorySearch}>
            <Spacer value={38} />
            <ListCategory />
            <Spacer value={38} />
            <View style={styles.containerSearch}>
              <Feather name="search" size={24} color="#96A7AF" />
              <Spacer value={8} />
              <Text style={styles.placeholderSearch}>
                Search pet for adaption
              </Text>
            </View>
            <Spacer value={38} />
          </View>
          <Spacer value={32} />
          <ListAnimals />
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
    backgroundColor: colors.bonJour,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  containerCategorySearch: {
    backgroundColor: colors.white,
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
});
