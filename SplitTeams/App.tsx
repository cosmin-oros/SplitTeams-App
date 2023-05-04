import InputScreen from './screens/InputScreen'
import DisplayTeamsScreen from './screens/DisplayTeamsScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { RouteParams } from './routes/types';
import { Routes } from './routes/routes';

const Stack = createNativeStackNavigator<RouteParams>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Routes.Welcome}>
        <Stack.Screen name={Routes.Welcome} component={WelcomeScreen} options={{headerShown: false}} />
        <Stack.Screen name={Routes.Input} component={InputScreen} options={{headerShown: false}} />
        <Stack.Screen name={Routes.Display} component={DisplayTeamsScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}