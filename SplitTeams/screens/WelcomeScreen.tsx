import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';

type WelcomeScreenProps = {
  navigation: NavigationProp<ParamListBase, 'InputScreen'>;
}

const WelcomeScreen = ({ navigation } : WelcomeScreenProps) => {
  const handleContinue = () => {
    navigation.navigate('InputScreen');
  }

  return(
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to the SplitTeams App</Text>
        <Text style={styles.subtitle}>Input player names and their positions and the app will split them fairly into two teams and assign one captain for each team</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#082438',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 50,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    padding: 10,
    color: '#D6D6D6',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    padding: 10,
    marginBottom: 30,
    color: '#fff',
  },
  button: {
    backgroundColor: '#008080',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    width: '80%',
    height: 50,
    borderWidth: 2,
    borderColor: '#D6D6D6',
  },
  buttonText: {
    color: '#D6D6D6',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },

});

export default WelcomeScreen;