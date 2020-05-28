import React, {useState, useEffect} from 'react';
import {
  GiftedChat,
  Bubble,
  Send,
  Composer,
  InputToolbar,
} from 'react-native-gifted-chat';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  Dimensions,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {SafeAreaView} from 'react-native-safe-area-context';
import ImagePicker from 'react-native-image-crop-picker';

import {colors, commonsStyle} from '../../styles/commons-styles';
import ChatConfig from '../../config/chat';
import listChat1 from '../../assets/images/listChat1.jpeg';
import ModalOptionPhoto from '../../components/ModalOptionPhoto';
import Spacer from '../../components/Spacer';
import fonts from '../../styles/fonts';
import {useNavigation} from '@react-navigation/native';

const configImagePicker = {
  width: 300,
  height: 400,
  cropping: true,
};

export default function Chat() {
  const navigation = useNavigation();
  const [messages, setMessages] = useState([]);
  const [isModalPhotoVisible, setIsModalPhotoVisible] = useState(false);

  useEffect(() => {
    beginChat();
  }, []);

  const beginChat = () => {
    ChatConfig.setUid('1515');
    ChatConfig.createChat();
    ChatConfig.loadMessages((message) => {
      setMessages((previousState) => GiftedChat.append(previousState, message));
    });
  };

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: colors.bubble,
          },
        }}
        textStyle={{
          right: {
            color: colors.white,
          },
        }}
      />
    );
  };

  const renderComposer = (props) => (
    <Composer {...props} textInputStyle={styles.composer} />
  );

  const openModalPhoto = () => {
    setIsModalPhotoVisible(true);
  };

  const renderSend = (props) => {
    return (
      <View style={styles.containerSend}>
        <TouchableOpacity onPress={openModalPhoto}>
          <Feather name="camera" size={25} color={colors.textPrimaryColor} />
        </TouchableOpacity>
        <Send {...props}>
          <View style={styles.sendingContainer}>
            <Feather name="send" size={24} color={colors.textPrimaryColor} />
          </View>
        </Send>
      </View>
    );
  };

  const scrollToBottomComponent = () => {
    return (
      <View style={styles.bottomComponentContainer}>
        <Feather
          name="chevrons-down"
          size={24}
          color={colors.textPrimaryColor}
        />
      </View>
    );
  };

  const renderLoading = () => {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="small" color={colors.white} />
      </View>
    );
  };

  const renderInputToolbar = (props) => (
    <InputToolbar
      {...props}
      containerStyle={styles.inputToolbarContainer}
      primaryStyle={styles.inputToolbarPrimary}
    />
  );

  const callCamera = () => {
    actionPhoto('camera');
  };

  const callGallery = () => {
    actionPhoto('gallery');
  };

  const cancelAction = () => {
    setIsModalPhotoVisible(false);
  };

  const actionPhoto = async (typeAction) => {
    const method =
      typeAction === 'camera' ? ImagePicker.openCamera : ImagePicker.openPicker;

    method(configImagePicker)
      .then((image) => {
        console.log(image.path);
        ChatConfig.sendImageFirestoge(image.path);
        setIsModalPhotoVisible(false);
      })
      .catch((error) => {
        setIsModalPhotoVisible(false);
        console.log('ImagePickerError: ', error);
      });
  };

  const callGoBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={commonsStyle.backgroundApp}>
      <View style={styles.containerHeader}>
        <TouchableOpacity onPress={callGoBack}>
          <Feather name="chevron-left" size={25} color={colors.white} />
        </TouchableOpacity>
        <Spacer value={12} />
        <Image style={styles.imgProfile} source={listChat1} />
        <Spacer value={12} />
        <Text style={styles.nameProfile}>Angie</Text>
      </View>
      <GiftedChat
        messages={messages}
        locale="pt-br"
        user={{_id: 3, name: 'Renan 2'}}
        renderBubble={renderBubble}
        placeholder="Escreva uma mensagem.."
        alwaysShowSend
        renderSend={renderSend}
        scrollToBottom
        scrollToBottomComponent={scrollToBottomComponent}
        renderLoading={renderLoading}
        renderAvatar={null}
        renderComposer={renderComposer}
        renderInputToolbar={renderInputToolbar}
        onSend={(messag) => {
          if (messag[0].text) {
            ChatConfig.sendMessage(messag);
          }
        }}
      />
      <ModalOptionPhoto
        isVisible={isModalPhotoVisible}
        camera={callCamera}
        gallery={callGallery}
        cancel={cancelAction}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sendingContainer: {
    marginBottom: 9,
    marginHorizontal: 16,
  },
  containerSend: {
    flexDirection: 'row',
    marginLeft: 16,
    alignItems: 'center',
  },
  bottomComponentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  composer: {
    backgroundColor: colors.secundaryColor,
    borderRadius: 20,
    paddingTop: 8.5,
    paddingHorizontal: 12,
    marginLeft: 8,
    color: colors.white,
  },
  inputToolbarContainer: {
    backgroundColor: colors.transparent,
    paddingTop: 6,
  },
  inputToolbarPrimary: {
    alignItems: 'center',
  },
  containerHeader: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  imgProfile: {
    height: 44,
    width: 44,
    borderRadius: 44 / 2,
  },
  nameProfile: {
    fontFamily: fonts.BOLD,
    fontSize: 16,
    color: colors.white,
  },
});
