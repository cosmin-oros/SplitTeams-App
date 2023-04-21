import MainScreen from './screens/MainScreen'
import DisplayTeamsScreen from './screens/DisplayTeamsScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='MainScreen'>
        <Stack.Screen name='MainScreen' component={MainScreen} options={{headerShown: false}}/>
        {/* <Stack.Screen name='DisplayTeamsScreen' component={DisplayTeamsScreen} options={{headerShown: false}}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

