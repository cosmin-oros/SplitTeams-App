import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { useNavigation, RouteProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RouteParams } from '../routes/types';
import { Routes } from '../routes/routes';

interface Player {
  name: string;
  position: string;
}

type DisplayTeamsScreenRouteProp = RouteProp<RouteParams, Routes.Display>;

type DisplayTeamsScreenProps = NativeStackScreenProps<RouteParams, Routes.Display>;

const DisplayTeamsScreen: React.FC<DisplayTeamsScreenProps> = ({ route }: DisplayTeamsScreenProps) => {
  const { newTeam1, newTeam2 } = route.params;
  console.log('newTeam1:', newTeam1);
  console.log('newTeam2:', newTeam2);

  const navigation = useNavigation();

  const handleRestart = () => {
    // navigation.navigate(Routes.Input);
  };

  return (
    <View style={styles.container}>
      <View style={styles.teamContainer}>
        <Text style={styles.teamTitle1}>Team 1</Text>
        {newTeam1 && newTeam1.map((player: Player, index: number) => (
          <Text key={index} style={styles.teamPlayer1}>
            {player.name} ({player.position})
          </Text>
        ))}
      </View>

      <View style={styles.teamContainer}>
        <Text style={styles.teamTitle2}>Team 2</Text>
        {newTeam2 && newTeam2.map((player: Player, index: number) => (
          <Text key={index} style={styles.teamPlayer2}>
            {player.name} ({player.position})
          </Text>
        ))}
      </View>


      <TouchableOpacity style={styles.button} onPress={handleRestart}>
        <Text style={styles.buttonText}>Restart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  teamContainer: {
    width: '100%',
    marginBottom: 16,
  },
  teamTitle1: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#082438',
  },
  teamPlayer1: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
    color: 'red',
  },
  teamTitle2: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#082438',
  },
  teamPlayer2: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
    color: 'blue',
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

export default DisplayTeamsScreen;
