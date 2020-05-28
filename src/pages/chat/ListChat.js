import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useFocusEffect} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';

import {colors, commonsStyle} from '../../styles/commons-styles';
import {listChat} from '../../mocks';
import Spacer from '../../components/Spacer';
import fonts from '../../styles/fonts';

export default function ListChat() {
  const navigation = useNavigation();
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('light-content');
      Platform.OS === 'android' &&
        StatusBar.setBackgroundColor(colors.backgroundAppColor);
    }, []),
  );

  const callChat = () => {
    navigation.navigate('Chat');
  };

  return (
    <SafeAreaView style={commonsStyle.backgroundApp}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.backgroundAppColor}
      />
      <Spacer value={8} />
      <View style={styles.containerHeader}>
        <Text style={styles.headerTitle}>Conversas</Text>
      </View>
      <Spacer value={8} />
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
                  <View style={styles.containerNameLastMessage}>
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
  containerHeader: {
    flexDirection: 'row',
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontFamily: fonts.BOLD,
    fontSize: 24,
    color: colors.textPrimaryColor,
  },
  name: {
    fontSize: 16,
    color: colors.white,
  },
  lastMessage: {
    color: colors.textPrimaryColor,
  },
  containerNameLastMessage: {
    flex: 1,
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
