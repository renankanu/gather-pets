import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Platform,
  TouchableHighlight,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import {useFocusEffect} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {SwipeListView} from 'react-native-swipe-list-view';

import {colors, commonsStyle} from '../../styles/commons-styles';
import fonts from '../../styles/fonts';
import Spacer from '../../components/Spacer';
import {notification} from '../../mocks';

const rowSwipeAnimatedValues = {};
notification.map((data) => {
  rowSwipeAnimatedValues[`${data.key}`] = new Animated.Value(0);
});

export default function Notification() {
  const navigation = useNavigation();
  const [listData, setListData] = useState(notification);
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('light-content');
      Platform.OS === 'android' &&
        StatusBar.setBackgroundColor(colors.backgroundAppColor);
    }, []),
  );

  const callGoBack = () => {
    navigation.goBack();
  };

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    const newData = [...listData];
    const prevIndex = listData.findIndex((item) => item.key === rowKey);
    newData.splice(prevIndex, 1);
    setListData(newData);
  };

  const onRowDidOpen = (rowKey) => {
    console.log('This row opened', rowKey);
  };

  const onSwipeValueChange = (swipeData) => {
    const {key, value} = swipeData;
    rowSwipeAnimatedValues[key].setValue(Math.abs(value));
  };

  const renderItem = (data) => (
    <TouchableHighlight
      onPress={() => console.log('You touched me')}
      style={styles.rowFront}
      underlayColor={colors.backgroundAppColor}>
      <Text style={styles.textNotification}>{data.item.title}</Text>
    </TouchableHighlight>
  );

  const renderHiddenItem = (data, rowMap) => (
    <View style={styles.rowBack}>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnRight]}
        onPress={() => deleteRow(rowMap, data.item.key)}>
        <Animated.View
          style={[
            styles.trash,
            {
              transform: [
                {
                  scale: rowSwipeAnimatedValues[data.item.key].interpolate({
                    inputRange: [45, 90],
                    outputRange: [0, 1],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            },
          ]}>
          <Feather name="trash" size={25} color={colors.white} />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={commonsStyle.backgroundApp}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.backgroundAppColor}
      />
      <View style={styles.container}>
        <Spacer value={8} />
        <View style={styles.containerHeader}>
          <Text style={styles.headerTitle}>Notificações</Text>
          <TouchableOpacity onPress={callGoBack}>
            <Feather name="x" size={24} color={colors.textPrimaryColor} />
          </TouchableOpacity>
        </View>
        <Spacer value={20} />
        <SwipeListView
          data={listData}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
          rightOpenValue={-100}
          previewOpenDelay={3000}
          onRowDidOpen={onRowDidOpen}
          onSwipeValueChange={onSwipeValueChange}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  textNotification: {
    color: colors.textPrimaryColor,
    fontFamily: fonts.BOLD,
  },
  rowFront: {
    paddingLeft: 20,
    backgroundColor: colors.backgroundAppColor,
    borderTopColor: colors.textPrimaryColor,
    borderTopWidth: 0.3,
    justifyContent: 'center',
    height: 50,
  },
  rowBack: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 50,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 100,
  },
  backRightBtnRight: {
    backgroundColor: colors.tomato,
    right: 0,
  },
  trash: {
    height: 25,
    width: 25,
  },
});
