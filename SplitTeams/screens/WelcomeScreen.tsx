import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';
import { RouteParams } from '../routes/types';
import { Routes } from '../routes/routes';

type WelcomeScreenProps = {
  navigation: NavigationProp<ParamListBase, Routes.Welcome>;
}

const WelcomeScreen = ({ navigation } : WelcomeScreenProps) => {
  const handleContinue = () => {
    navigation.navigate(Routes.Input);
  }

  return(
    <View style={styles.container}>
      <Image source={require('../assets/logo_app.png')} style={styles.logo} resizeMode="contain" />
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
    backgroundColor: '#f5f5f5',
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
  logo: {
    width: '100%',
    height: '40%'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    color: '#082438',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    padding: 10,
    marginBottom: '70%',
    color: '#082438',
  },
  button: {
    backgroundColor: '#082438',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    width: '80%',
    height: 50,
    borderWidth: 2,
    borderColor: '#f5f5f5',
  },
  buttonText: {
    color: '#f5f5f5',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },

});

export default WelcomeScreen;