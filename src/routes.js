import React from 'react';
import {StatusBar} from 'react-native';

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
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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

  const HomeStackScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#36CA63"
      inactiveColor="#fff"
      shifting={true}
      barStyle={{backgroundColor: '#293B83', paddingBottom: 12}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Feather name="home" color={color} size={22} />
          ),
        }}
      />

      <Tab.Screen
        name="Delivery"
        component={Login}
        options={{
          tabBarLabel: 'Doar',
          tabBarIcon: ({color}) => (
            <Feather name="plus-circle" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Notification}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({color}) => (
            <Feather name="message-square" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notification}
        options={{
          tabBarLabel: 'Notificações',
          tabBarIcon: ({color}) => (
            <Feather name="bell" color={color} size={22} />
          ),
        }}
      />
    </Tab.Navigator>
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
