import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import {colors, commonsStyle} from '../../styles/commons-styles';
import Spacer from '../../components/Spacer';
import user from '../../assets/images/user.jpeg';

export default function MyProfile() {
  return (
    <SafeAreaView style={commonsStyle.backgroundApp}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.backgroundAppColor}
      />
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton}>
          <Feather name="chevron-left" size={32} color={colors.white} />
        </TouchableOpacity>
        <Spacer value={40} />
        <View style={styles.containePhoto}>
          <Image style={styles.imageUser} source={user} />
        </View>
        <Spacer value={20} />
        <View style={styles.containerInfo}>
          <Text style={styles.title}>Name</Text>
          <Text style={styles.value}>John</Text>
          <Spacer value={4} />
          <View style={styles.divider} />
        </View>
      </View>
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
  containePhoto: {
    alignItems: 'center',
  },
  containerInfo: {
    marginHorizontal: 20,
  },
  title: {
    color: colors.textPrimaryColor,
  },
  value: {
    color: colors.white,
    fontSize: 18,
  },
  divider: {
    height: 0.5,
    backgroundColor: colors.silver,
  },
});
