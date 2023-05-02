import InputScreen from './screens/InputScreen'
import DisplayTeamsScreen from './screens/DisplayTeamsScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='WelcomeScreen'>
        <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name='InputScreen' component={InputScreen} options={{headerShown: false}}/>
        {/* <Stack.Screen name='DisplayTeamsScreen' component={DisplayTeamsScreen} options={{headerShown: false}}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

