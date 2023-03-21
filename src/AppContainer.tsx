import React, {memo} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
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
import NewsFeedScreen from '@/screens/NewsFeed/NewsFeedScreen';

const RootStack = createStackNavigator();
const LoginStack = createStackNavigator();
const HomeStack = createMaterialTopTabNavigator();

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
      initialRouteName={Route.NewsFeedScreen}
      // tabBar={props => <HomeTabBar {...props} />}
    >
      <HomeStack.Screen name={Route.HomeScreen} component={HomeScreen} />
      <HomeStack.Screen
        name={Route.NewsFeedScreen}
        component={NewsFeedScreen}
      />
    </HomeStack.Navigator>
  );
});

export const AppContainer = () => {
  const isLogin = true;
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator
        initialRouteName={Route.LoginContainer}
        screenOptions={rootOptions}>
        {isLogin ? (
          <RootStack.Screen
            name={Route.HomeContainer}
            component={HomeContainer}
          />
        ) : (
          <RootStack.Screen
            name={Route.LoginContainer}
            component={LoginContainer}
          />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default memo(AppContainer);
