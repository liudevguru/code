import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from '@configs/routes';
import { LoginScreen } from '@screens/LoginScreen';

const MainStack = createStackNavigator();
export const MainNavigation = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        component={LoginScreen}
        name={ROUTES.login}
        options={{ headerShown: false }}
      />
    </MainStack.Navigator>
  );
};
