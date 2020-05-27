import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  StatusBar,
  Platform,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {sanFranciscoWeights} from 'react-native-typography';
import LinearGradient from 'react-native-linear-gradient';
import Share from 'react-native-share';
import * as Animatable from 'react-native-animatable';
import {colors} from '../../styles/commons-styles';
import {useNavigation} from '@react-navigation/native';
import Spacer from '../../components/Spacer';
import fonts from '../../styles/fonts';
import owner from '../../assets/images/owner.jpeg';

const {height, width} = Dimensions.get('window');
const url = 'https://www.gatherpets.com/';
const title = 'Gather Pets';
const message = 'Please check this out.';
const icon = 'data:<data_type>/<file_extension>;base64,<base64_data>';
const options = Platform.select({
  ios: {
    activityItemSources: [
      {
        placeholderItem: {type: 'url', content: url},
        item: {
          default: {type: 'url', content: url},
        },
        subject: {
          default: title,
        },
        linkMetadata: {originalUrl: url, url, title},
      },
      {
        placeholderItem: {type: 'text', content: message},
        item: {
          default: {type: 'text', content: message},
          message: null,
        },
        linkMetadata: {
          title: message,
        },
      },
      {
        placeholderItem: {
          type: 'url',
          content: icon,
        },
        item: {
          default: {
            type: 'text',
            content: `${message} ${url}`,
          },
        },
        linkMetadata: {
          title: message,
          icon: icon,
        },
      },
    ],
  },
  default: {
    title,
    subject: title,
    message: `${message} ${url}`,
  },
});

export default function InfoPet({route}) {
  const {pet} = route.params;
  const navigation = useNavigation();
  const [isLiked, setIsLiked] = useState(false);
  const likeAnimationRef = useRef(null);

  const comeBack = () => {
    navigation.goBack();
  };

  const share = () => {
    Share.open(options)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        err && console.log(err);
      });
  };

  const likeDislike = () => {
    likeAnimationRef.current.rubberBand();
    setIsLiked(!isLiked);
  };

  const callChat = () => {
    navigation.navigate('Chat');
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.transparent}
      />
      <LinearGradient
        colors={[colors.black, colors.black20, colors.transparent]}
        style={styles.linearGradient}>
        <Spacer value={40} />
      </LinearGradient>
      <View style={styles.containerHeader}>
        <Spacer value={40} />
        <View style={styles.containerActionsHeader}>
          <TouchableOpacity onPress={comeBack} style={styles.backButton}>
            <Feather name="chevron-left" size={32} color={colors.white} />
          </TouchableOpacity>
          <TouchableOpacity onPress={share} style={styles.backButton}>
            <Feather name="share-2" size={24} color={colors.white} />
          </TouchableOpacity>
        </View>
      </View>

      <Image style={styles.images} source={pet.photo} />
      <Animatable.View animation="fadeIn" style={styles.cardInfo}>
        <View style={styles.rowCardInfo}>
          <Text style={styles.name}>Tyson</Text>
          <FontAwesome name="venus" size={18} color={colors.textPrimaryColor} />
        </View>
        <Spacer value={6} />
        <View style={styles.rowCardInfo}>
          <Text style={styles.breed}>Raça misturada</Text>
          <View style={styles.rowCardInfo}>
            <Feather name="gift" size={16} color={colors.textPrimaryColor} />
            <Spacer value={4} />
            <Text style={styles.breed}>1 ano</Text>
          </View>
        </View>
        <Spacer value={6} />
        <View style={[styles.rowCardInfo, styles.infoAddress]}>
          <Feather name="map-pin" size={16} color={colors.textPrimaryColor} />
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
          <Text style={styles.infoOwner}>Dono</Text>
        </View>
      </View>
      <Spacer value={20} />
      <View style={styles.containerInfo}>
        <Text style={styles.titleInfo}>Pet Story</Text>
        <Spacer value={10} />
        <Text style={styles.descInfo}>
          Tyson é uma mistura de raça com 1 ano de idade que passou por uma
          coleira recall de treinamento. Ele é um cara ativo que precisa do
          mesmo para sempre casa. O cara doce adoraria ir ao parque de cães,
          caminhadas, etc, com sua nova família. Tyson está pronto para ir e
          adoraria ser um ativo membro da sua família. Se você gostaria de
          conhecer a Tyson, entre em contato com para garantir que ele estará em
          nossas adoções semanais aos sábados.
        </Text>
      </View>
      <Spacer value={20} />
      <Animatable.View animation="slideInUp" style={styles.containerActions}>
        <TouchableOpacity style={styles.buttonLike} onPress={likeDislike}>
          <Animatable.View ref={likeAnimationRef}>
            {isLiked ? (
              <FontAwesome name="heart" size={16} color={colors.tomato} />
            ) : (
              <Feather name="heart" size={16} color={colors.textPrimaryColor} />
            )}
          </Animatable.View>
        </TouchableOpacity>
        <Spacer value={10} />
        <TouchableOpacity style={styles.buttonLike} onPress={callChat}>
          <Feather
            name="message-circle"
            size={16}
            color={colors.textPrimaryColor}
          />
        </TouchableOpacity>
        <Spacer value={20} />
        <TouchableOpacity style={styles.buttonAdoption}>
          <Text style={styles.labelButton}>Adotar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundAppColor,
  },
  linearGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 7,
  },
  containerActionsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 6,
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
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40 / 2,
    marginHorizontal: 16,
    padding: 4,
    backgroundColor: colors.black20,
  },
  cardInfo: {
    marginTop: -40,
    borderRadius: 20,
    backgroundColor: colors.secundaryColor,
    marginHorizontal: 20,
    padding: 20,
    shadowColor: colors.primaryColor,
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
    color: colors.textPrimaryColor,
  },
  breed: {
    fontFamily: fonts.MEDIUM,
    fontSize: 14,
    color: colors.textPrimaryColor,
  },
  infoAddress: {
    justifyContent: null,
  },
  address: {
    fontFamily: fonts.MEDIUM,
    fontSize: 16,
    color: colors.textPrimaryColor,
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
    color: colors.white,
  },
  infoOwner: {
    fontFamily: fonts.LIGHT,
    color: colors.textPrimaryColor,
  },
  containerInfo: {
    marginHorizontal: 10,
  },
  titleInfo: {
    ...sanFranciscoWeights.bold,
    color: colors.white,
    fontSize: 18,
  },
  descInfo: {
    ...sanFranciscoWeights.ultraLight,
    color: colors.textPrimaryColor,
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
    borderColor: colors.secundaryColor,
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
