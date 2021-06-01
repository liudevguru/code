import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MainNavigation } from '@navigations';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const App: React.FC = () => {
  useEffect(() => {
    MaterialCommunityIcons.loadFont();
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
