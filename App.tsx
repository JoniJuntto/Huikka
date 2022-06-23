import React from 'react';
import {useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StartingScreen from './Views/StartingScreen';
import NavigationScreen from './Views/NavigationScreen';
import AddPlayers from './Views/AddPlayers';
import Huikka from './Views/Huikka';
import CardGame from './Views/CardGame';
import Explain from './Views/Explain';
import AddOwnTasks from './Views/AddOwnTasks';
import Roullette from './Views/Roullette';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {store} from './store';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const Stack = createNativeStackNavigator();

  const MyTheme = {
    dark: true,
    colors: {
      primary: '#bd06d1',
      background: isDarkMode ? 'black' : 'black',
      card: '#8a0099',
      text: 'white',
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
    },
  };

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer theme={MyTheme}>
          <Stack.Navigator>
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="Start"
              component={StartingScreen}
            />
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="NavigationScreen"
              component={NavigationScreen}
            />
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="AddPlayers"
              component={AddPlayers}
            />
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="huikka"
              component={Huikka}
            />
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="cardGame"
              component={CardGame}
            />
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="explain"
              component={Explain}
            />
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="addOwnTasks"
              component={AddOwnTasks}
            />
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="roullete"
              component={Roullette}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
