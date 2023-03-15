import React, {memo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {navigationRef} from '@/navigations/navigations';
import {homeOptions, loginOptions, rootOptions} from '@/navigations/options';
import {Route} from '@/navigations/route';
import HomeScreen from '@/screens/Home/HomeScreen';
import ForgotPasswordScreen from '@/screens/Login/ForgotPasswordScreen';
import LoginScreen from '@/screens/Login/LoginScreen';
import ProfileLoginScreen from '@/screens/Login/ProfileLoginScreen';
import RegisterScreen from '@/screens/Login/RegisterScreen';

const RootStack = createStackNavigator();
const LoginStack = createStackNavigator();
const HomeStack = createStackNavigator();

export const LoginContainer = memo(() => {
  return (
    <LoginStack.Navigator
      initialRouteName={Route.ProfileLoginScreen}
      screenOptions={loginOptions}>
      <LoginStack.Screen
        name={Route.ProfileLoginScreen}
        component={ProfileLoginScreen}
      />
      <LoginStack.Screen
        name={Route.RegisterScreen}
        component={RegisterScreen}
      />
      <LoginStack.Screen name={Route.LoginScreen} component={LoginScreen} />
      <LoginStack.Screen
        name={Route.ForgotPasswordScreen}
        component={ForgotPasswordScreen}
      />
    </LoginStack.Navigator>
  );
});

export const HomeContainer = memo(() => {
  return (
    <HomeStack.Navigator
      initialRouteName={Route.HomeScreen}
      screenOptions={homeOptions}>
      <HomeStack.Screen name={Route.HomeScreen} component={HomeScreen} />
    </HomeStack.Navigator>
  );
});

export const AppContainer = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator
        initialRouteName={Route.LoginContainer}
        screenOptions={rootOptions}>
        <RootStack.Screen
          name={Route.LoginContainer}
          component={LoginContainer}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default memo(AppContainer);
