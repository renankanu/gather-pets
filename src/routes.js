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

const Stack = createStackNavigator();
const store = createStore(rootReducer);

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
            <Stack.Screen name="Home" component={Home} />
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
