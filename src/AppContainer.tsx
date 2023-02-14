import React, {memo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {navigationRef} from '@/navigations/navigations';
import {loginOptions, rootOptions} from '@/navigations/options';
import {Route} from '@/navigations/route';
import ProfileLoginScreen from '@/screens/Login/ProfileLoginScreen';

const RootStack = createStackNavigator();
const LoginStack = createStackNavigator();

export const LoginContainer = memo(() => {
  return (
    <LoginStack.Navigator
      initialRouteName={Route.ProfileLoginScreen}
      screenOptions={loginOptions}>
      <LoginStack.Screen
        name={Route.ProfileLoginScreen}
        component={ProfileLoginScreen}
      />
    </LoginStack.Navigator>
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
