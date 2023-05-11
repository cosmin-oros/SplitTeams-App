import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
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

  const handleRestart = () => {
    
  };

  return (
    <View style={styles.container}>
      <View style={styles.teamContainer}>
        <Text style={styles.teamTitle}>Team 1</Text>
        {newTeam1 && newTeam1.map((player: Player, index: number) => (
          <Text key={index} style={styles.teamPlayer}>
            {player.name} ({player.position})
          </Text>
        ))}
      </View>

      <View style={styles.teamContainer}>
        <Text style={styles.teamTitle}>Team 2</Text>
        {newTeam2 && newTeam2.map((player: Player, index: number) => (
          <Text key={index} style={styles.teamPlayer}>
            {player.name} ({player.position})
          </Text>
        ))}
      </View>


      <Button title="Restart" onPress={handleRestart} />
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
  teamTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#082438',
  },
  teamPlayer: {
    fontSize: 16,
    marginBottom: 4,
    color: '#082438',
  },
});

export default DisplayTeamsScreen;
