import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors, commonsStyle} from '../../styles/commons-styles';
import {listChat} from '../../mocks';
import Spacer from '../../components/Spacer';
import {useNavigation} from '@react-navigation/native';

export default function ListChat() {
  const nvigation = useNavigation();

  const callChat = () => {
    nvigation.navigate('Chat');
  };

  return (
    <SafeAreaView style={commonsStyle.backgroundApp}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.backgroundAppColor}
      />
      <View style={styles.container}>
        <FlatList
          data={listChat}
          renderItem={({item}) => {
            return (
              <TouchableOpacity onPress={callChat}>
                <View style={styles.containerRow}>
                  <Spacer value={16} />
                  <Image style={styles.imagePerfilChat} source={item.image} />
                  <Spacer value={16} />
                  <View style={{flex: 1}}>
                    <Text numberOfLines={1} style={styles.name}>
                      {item.name}
                    </Text>
                    <Text numberOfLines={1} style={styles.lastMessage}>
                      {item.lastMessage}
                    </Text>
                  </View>
                  <View style={styles.containerRight}>
                    <Text style={styles.time}>{item.time}</Text>
                    <Spacer value={2} />
                    <View
                      style={[
                        styles.dot,
                        !item.counterMessage && {
                          backgroundColor: colors.transparent,
                        },
                      ]}>
                      <Text style={styles.coutetMessage}>
                        {item.counterMessage}
                      </Text>
                    </View>
                  </View>
                  <Spacer value={16} />
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingVertical: 10,
  },
  name: {
    fontSize: 16,
    color: colors.white,
  },
  lastMessage: {
    color: colors.textPrimaryColor,
  },
  time: {
    fontSize: 12,
    color: colors.textPrimaryColor,
  },
  imagePerfilChat: {
    width: 60,
    height: 60,
    borderRadius: 80 / 2,
  },
  containerRight: {
    alignItems: 'flex-end',
  },
  dot: {
    width: 18,
    height: 18,
    borderRadius: 18 / 2,
    backgroundColor: colors.greenButton,
    justifyContent: 'center',
    alignItems: 'center',
  },
  coutetMessage: {
    fontSize: 12,
    color: colors.backgroundAppColor,
  },
  divider: {
    height: 0.2,
    backgroundColor: colors.silver,
    marginHorizontal: 80,
  },
});
