import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';

type WelcomeScreenProps = {
  navigation: NavigationProp<ParamListBase, 'InputScreen'>;
}

const WelcomeScreen = ({ navigation } : WelcomeScreenProps) => {
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the SplitTeams App</Text>
      <Text style={styles.subtitle}>Input player names and their positions and the app will split them fairly into two teams and assign one captain for each team</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DFDFDF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
  },

});

export default WelcomeScreen;