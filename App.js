import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
// import * as firebase from 'firebase';

import { ThemeProvider } from 'styled-components';
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';

import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

import { theme } from './src/infrastructure/theme';

import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context';
import { LocationContextProvider } from './src/services/location/location.context';
import { FavouritesContextProvider } from './src/services/favourites/favourites.context';
import { AppNavigator } from './src/infrastructure/navigation/app.navigator';

const firebaseConfig = {
  apiKey: 'AIzaSyCpgxd0Ne7a3O-iCie6uap4qFWGS9vJ6JI',
  authDomain: 'mealstogo-e04fb.firebaseapp.com',
  projectId: 'mealstogo-e04fb',
  storageBucket: 'mealstogo-e04fb.appspot.com',
  messagingSenderId: '837237051875',
  appId: '1:837237051875:web:43a5e5d80307e2ac3ed0d6',
  measurementId: 'G-X4P7EHSWB4',
};

// firebase.initializeApp(firebaseConfig);

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // useEffect(()=> {
  //   firebase.auth().sign
  // }, [])
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <AppNavigator />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
