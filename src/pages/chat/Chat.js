import React, {useState, useEffect} from 'react';
import {
  GiftedChat,
  Bubble,
  Send,
  Composer,
  InputToolbar,
} from 'react-native-gifted-chat';
import {ActivityIndicator, View, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {colors, commonsStyle} from '../../styles/commons-styles';
import ChatConfig from '../../config/chat';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Chat() {
  const [messages, setMessages] = useState([]);

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

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View style={styles.sendingContainer}>
          <Feather name="send" size={24} color={colors.textPrimaryColor} />
        </View>
      </Send>
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

  return (
    <SafeAreaView style={commonsStyle.backgroundApp}>
      <GiftedChat
        messages={messages}
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sendingContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 6,
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
  inputToolbarPrimary: {alignItems: 'center'},
});
