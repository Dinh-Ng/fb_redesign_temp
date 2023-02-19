import React from 'react';
import {NavigationContainerRef} from '@react-navigation/core';

import {Route} from '@/navigations/route';

export const navigationRef = React.createRef<NavigationContainerRef<any>>();

export const navigation = () => navigationRef.current!;

export const createNavigate =
  <T extends object>(screenName: string) =>
  (params?: T) => {
    return navigation().navigate(screenName, params);
  };

export const navigateToRegisterScreen = createNavigate(Route.RegisterScreen);
