import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Image,
  ListView,
  FlatList,
  Platform,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import {colors, commonsStyle} from '../../styles/commons-styles';
import user from '../../assets/images/user.jpeg';
import fonts from '../../styles/fonts';
import Spacer from '../../components/Spacer';

export default function Home() {
  return (
    <View style={{flex: 1, backgroundColor: colors.yellowHeader}}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.yellowHeader}
      />
      <View style={styles.container}>
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
          <Spacer value={32} />
          <FlatList
            contentContainerStyle={{marginHorizontal: 16}}
            data={[1, 2, 3]}
            horizontal
            renderItem={(item) => {
              return (
                <View
                  style={{
                    marginHorizontal: 8,
                    width: 50,
                    height: 50,
                    backgroundColor: 'red',
                  }}
                />
              );
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
    backgroundColor: colors.white,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
});
