/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react';
import {
  StatusBar,
  TouchableOpacity,
  Animated,
  View,
  Dimensions,
  StyleSheet,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionSpecs,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import {useSafeArea} from 'react-native-safe-area-context';

import About from './pages/about/About';
import ForgotPassword from './pages/forgotPassword/ForgotPassword';
import Register from './pages/register/Register';
import Home from './pages/home/Home';
import Search from './pages/search/Search';
import MyProfile from './pages/myProfile/MyProfile';
import Favorite from './pages/favorite/Favorite';
import InitialScreen from './pages/login/InitialScreen';
import Login from './pages/login/Login';
import rootReducer from './store/modules/rootReducer';
import InfoPet from './pages/infoPet/InfoPet';
import Notification from './pages/notification/Notification';
import ChangePassword from './pages/myProfile/ChangePassword';
import Chat from './pages/chat/Chat';
import {colors} from './styles/commons-styles';
import AddPet from './pages/addPet/AddPet';
import ListChat from './pages/chat/ListChat';

const Stack = createStackNavigator();
const store = createStore(rootReducer);
const Tab = createBottomTabNavigator();

export default function Routes() {
  console.disableYellowBox = true;
  const transition = {
    gestureDirection: 'horizontal',
    transitionSpec: {
      open: TransitionSpecs.TransitionIOSSpec,
      close: TransitionSpecs.TransitionIOSSpec,
    },
    headerStyleInterpolator: HeaderStyleInterpolators.forFade,
    cardStyleInterpolator: ({current, layouts}) => ({
      cardStyle: {
        transform: [
          {
            translateY: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.height, 0],
            }),
          },
        ],
      },
      overlayStyle: {
        opacity: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.5],
        }),
      },
    }),
  };

  const BottomMenuItem = ({iconName, isCurrent}) => {
    return (
      <View style={styles.containerBottomMenu}>
        <Feather
          name={iconName}
          size={24}
          style={{
            color: isCurrent ? colors.yellowHeader : colors.textPrimaryColor,
          }}
        />
      </View>
    );
  };

  function MyTabBar({state, descriptors, navigation}) {
    const [translateValue] = useState(new Animated.Value(0));
    const totalWidth = Dimensions.get('window').width;
    const tabWidth = totalWidth / state.routes.length;
    return (
      <View style={[styles.tabContainer, {width: totalWidth}]}>
        <View style={styles.containerTabInternal}>
          <Animated.View
            style={[
              styles.slider,
              {
                transform: [{translateX: translateValue}],
                width: tabWidth - 40,
              },
            ]}
          />
          {state.routes.map((route, index) => {
            const {options} = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            const isFocused = state.index === index;
            if (isFocused) {
              Animated.spring(translateValue, {
                toValue: index * tabWidth,
                velocity: 10,
                useNativeDriver: true,
              }).start();
            }

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            return (
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityStates={isFocused ? ['selected'] : []}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                style={styles.touchTabBottom}>
                <BottomMenuItem
                  iconName={label.toString()}
                  isCurrent={isFocused}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  }

  const HomeStackScreen = () => (
    <View style={styles.containerHomeStack}>
      <Tab.Navigator
        initialRouteName="Home"
        tabBar={(props) => <MyTabBar {...props} />}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'home',
            tabBarIcon: ({color}) => (
              <Feather name="home" color={color} size={22} />
            ),
          }}
        />

        <Tab.Screen
          name="AddPet"
          component={AddPet}
          options={{
            tabBarLabel: 'plus-circle',
            tabBarIcon: ({color}) => (
              <Feather name="plus-circle" color={color} size={22} />
            ),
          }}
        />
        <Tab.Screen
          name="ListChat"
          component={ListChat}
          options={{
            tabBarLabel: 'message-square',
            tabBarIcon: ({color}) => (
              <Feather name="message-square" color={color} size={22} />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notification}
          options={{
            tabBarLabel: 'bell',
            tabBarIcon: ({color}) => (
              <Feather name="bell" color={color} size={22} />
            ),
          }}
        />
      </Tab.Navigator>
      {useSafeArea().bottom > 0 && (
        <View
          style={{
            height: useSafeArea().bottom - 5,
            backgroundColor: colors.secundaryColor,
          }}
        />
      )}
    </View>
  );

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="InitialScreen"
            headerMode="none"
            screenOptions={{
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}>
            <Stack.Screen name="InitialScreen" component={InitialScreen} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{...transition}}
            />
            <Stack.Screen name="Home" component={HomeStackScreen} />
            <Stack.Screen name="InfoPet" component={InfoPet} />
            <Stack.Screen name="Chat" component={Chat} />
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="MyProfile" component={MyProfile} />
            <Stack.Screen name="Notification" component={Notification} />
            <Stack.Screen name="Favorite" component={Favorite} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} />
            <Stack.Screen name="About" component={About} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    height: 46,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: colors.secundaryColor,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    elevation: 5,
    position: 'absolute',
    bottom: 0,
  },
  containerTabInternal: {
    flexDirection: 'row',
  },
  touchTabBottom: {
    flex: 1,
  },
  slider: {
    height: 5,
    position: 'absolute',
    top: 0,
    left: 20,
    backgroundColor: colors.yellowHeader,
    borderRadius: 10,
    width: 50,
  },
  containerBottomMenu: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerHomeStack: {
    flex: 1,
    position: 'relative',
  },
});
