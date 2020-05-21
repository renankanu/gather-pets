import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import {sanFranciscoWeights} from 'react-native-typography';
import * as Animatable from 'react-native-animatable';
import {colors} from '../../styles/commons-styles';
import {useNavigation} from '@react-navigation/native';
import Spacer from '../../components/Spacer';
import fonts from '../../styles/fonts';
import owner from '../../assets/images/owner.jpeg';

const {height, width} = Dimensions.get('window');

export default function InfoPet({route}) {
  const {pet} = route.params;
  const navigation = useNavigation();

  const comeBack = () => {
    navigation.goBack();
  };
  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={[colors.black, colors.black80, colors.transparent]}
        style={styles.linearGradient}>
        <Spacer value={40} />
        <TouchableOpacity onPress={comeBack} style={styles.backButton}>
          <Feather name="chevron-left" size={32} color={colors.white} />
        </TouchableOpacity>
      </LinearGradient>

      <Image style={styles.images} source={pet.photo} />
      <Animatable.View animation="fadeIn" style={styles.cardInfo}>
        <View style={styles.rowCardInfo}>
          <Text style={styles.name}>Tyson</Text>
          <FontAwesome name="venus" size={18} color={colors.black} />
        </View>
        <Spacer value={6} />
        <View style={styles.rowCardInfo}>
          <Text style={styles.breed}>Mixed Breed</Text>
          <View style={styles.rowCardInfo}>
            <Feather name="gift" size={16} color={colors.black} />
            <Spacer value={4} />
            <Text style={styles.breed}>1 years old</Text>
          </View>
        </View>
        <Spacer value={6} />
        <View style={[styles.rowCardInfo, styles.infoAddress]}>
          <Feather name="map-pin" size={16} color={colors.black} />
          <Spacer value={4} />
          <Text style={styles.address}>Av. São José, Cianorte - PR</Text>
        </View>
      </Animatable.View>
      <Spacer value={20} />
      <View style={styles.containerOwner}>
        <Image source={owner} style={styles.imageOwner} />
        <Spacer value={8} />
        <View>
          <Text style={styles.nameOwner}>Johna Mik</Text>
          <Text style={styles.infoOwner}>Owner</Text>
        </View>
      </View>
      <Spacer value={20} />
      <View style={styles.containerInfo}>
        <Text style={styles.titleInfo}>Pet Story</Text>
        <Spacer value={10} />
        <Text style={styles.descInfo}>
          Tyson is a 1 year-old Husky/Malamute mix who has gone through collar
          recall training. He is an active guy who needs the same in his forever
          home. The sweet guy would love to go to the dog park, hiking, etc with
          his new family. Tyson is ready to go and would love to be an active
          member of your family. If you would like to meet Tyson, please contact
          us to ensure he will be at our weekly Saturday adoptions.
        </Text>
      </View>
      <Spacer value={20} />
      <Animatable.View animation="slideInUp" style={styles.containerActions}>
        <TouchableOpacity style={styles.buttonLike}>
          <Feather name="heart" size={16} color={colors.black} />
        </TouchableOpacity>
        <Spacer value={10} />
        <TouchableOpacity style={styles.buttonLike}>
          <Feather name="message-circle" size={16} color={colors.black} />
        </TouchableOpacity>
        <Spacer value={20} />
        <TouchableOpacity style={styles.buttonAdoption}>
          <Text style={styles.labelButton}>Adoption</Text>
        </TouchableOpacity>
      </Animatable.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 99,
  },
  sharedElement: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: -1,
  },
  images: {
    height: height / 2,
    resizeMode: 'cover',
  },
  backButton: {
    padding: 10,
  },
  cardInfo: {
    marginTop: -40,
    borderRadius: 20,
    backgroundColor: colors.white,
    marginHorizontal: 20,
    padding: 20,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  rowCardInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    fontFamily: fonts.BOLD,
    fontSize: 18,
  },
  breed: {
    fontFamily: fonts.MEDIUM,
    fontSize: 14,
  },
  infoAddress: {
    justifyContent: null,
  },
  address: {
    fontFamily: fonts.MEDIUM,
    fontSize: 16,
  },
  containerOwner: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  imageOwner: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
  },
  nameOwner: {
    fontFamily: fonts.BOLD,
    fontSize: 16,
  },
  infoOwner: {
    fontFamily: fonts.LIGHT,
    color: colors.secundaryColor,
  },
  containerInfo: {
    marginHorizontal: 10,
  },
  titleInfo: {
    ...sanFranciscoWeights.bold,
    fontSize: 18,
  },
  descInfo: {
    ...sanFranciscoWeights.ultraLight,
  },
  containerActions: {
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLike: {
    width: 38,
    height: 38,
    borderRadius: 38 / 2,
    borderWidth: 1,
    borderColor: colors.silver,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonAdoption: {
    height: 40,
    backgroundColor: colors.yellowHeader,
    width: width / 2,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelButton: {
    fontFamily: fonts.BOLD,
  },
});
