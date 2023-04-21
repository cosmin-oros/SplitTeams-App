import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';

type MainScreenProps = {
    navigation: NavigationProp<ParamListBase, 'MainScreen'>;
}

interface Player {
    name: string;
    position: string;
}

const MainScreen = ({ navigation } : MainScreenProps) => {
    const [playerName, setPlayerName] = useState<string>('');
    const [playerPosition, setPlayerPosition] = useState<string>('forward');
    const [players, setPlayers] = useState<Player[]>([]);
    const [team1, setTeam1] = useState<Player[]>([]);
    const [team2, setTeam2] = useState<Player[]>([]);

    // add a player to the players list
    const addPlayer = () => {
        if (playerName.trim() !== '' && players.length <= 22) {
          const newPlayer: Player = { name: playerName, position: playerPosition };
          setPlayers([...players, newPlayer]);
          setPlayerName('');
          setPlayerPosition('forward');
        }
    };

    // function to generate the teams in a fair way
    const generateTeams = () => {
        const positions = {
          forward: 3,
          midfielder: 3,
          defender: 4,
          goalkeeper: 1,
        };
    
        // randomize the order of the players
        const shuffledPlayers = players.sort(() => Math.random() - 0.5);
    
        const newTeam1: Player[] = [];
        const newTeam2: Player[] = [];
    
        for (const [position, count] of Object.entries(positions)) {
          const playersForPosition = shuffledPlayers.filter(
            (player) => player.position === position
          );
    
          // modify this logic to split them fairly
          for (let i = 0; i < count; i++) {
            const playerToAdd = playersForPosition[i];
    
            if (i % 2 === 0) {
              newTeam1.push(playerToAdd);
            } else {
              newTeam2.push(playerToAdd);
            }
          }
        }
    
        setTeam1(newTeam1);
        setTeam2(newTeam2);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add Player</Text>

            {/* textfield to add player name */}
            <TextInput style={styles.playerNameInput}
                placeholder=" Player Name"
                placeholderTextColor='#ffffff'
                value={playerName}
                onChangeText={(text) => setPlayerName(text)}
            />

            {/* buttons to choose the position */}
            <View style={styles.positionButton}>
                <View style={styles.positionButtonChild}>
                    <Button title="FWD" onPress={() => setPlayerPosition('forward')} color={playerPosition === 'forward' ? 'blue' : 'gray'} />
                </View>
                    
                <View style={styles.positionButtonChild}>
                    <Button title="MID" onPress={() => setPlayerPosition('midfielder')} color={playerPosition === 'midfielder' ? 'blue' : 'gray'} />
                </View>

                <View style={styles.positionButtonChild}>
                    <Button title="DEF" onPress={() => setPlayerPosition('defender')} color={playerPosition === 'defender' ? 'blue' : 'gray'} />
                </View>

                <View style={styles.positionButtonChild}>
                    <Button title="GK" onPress={() => setPlayerPosition('goalkeeper')} color={playerPosition === 'goalkeeper' ? 'blue' : 'gray'} />
                </View>
            </View>

            <Button title="Add Player" onPress={addPlayer} />

            {/* display the players once added and the generate teams button */}
            {players.length > 0 && (
                <>
                <Text style={styles.displayedPlayer}>Players</Text>

                {players.map((player, index) => (
                    <Text style={styles.displayedPlayer} key={index}>{player.name} ({player.position})</Text>
                ))}

                <Button title="Generate Teams" onPress={generateTeams} />
                </>
            )}

            {/* display the two teams generated*/}
            {team1.length > 0 && team2.length > 0 && (
                <>
                    <Text style={styles.displayedPlayer}>Team 1</Text>

                    {team1.map((player, index) => (
                        <Text style={styles.displayedPlayer} key={index}>{player.name} ({player.position})</Text>
                    ))}

                    <Text style={styles.displayedPlayer}>Team 2</Text>

                    {team2.map((player, index) => (
                        <Text style={styles.displayedPlayer} key={index}>{player.name} ({player.position})</Text>
                    ))}     
                </>
            )}

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#082438',
      padding: 16,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 12,
      color: '#ffffff',
      textAlign: 'center',
    },
    playerNameInput: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 12,
      marginBottom: 12,
      color: '#ffffff',
      width: '100%',
    },
    positionButton: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 12,
      width: '100%',
    },
    positionButtonChild: {
      flex: 1,
      marginHorizontal: 4,
    },
    addButton: {
      width: '100%',
      marginBottom: 12,
    },
    displayedPlayer: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 8,
      marginBottom: 8,
      color: '#ffffff',
    },
    teamContainer: {
      width: '100%',
      marginBottom: 16,
    },
    teamTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
      color: '#ffffff',
    },
    teamPlayer: {
      fontSize: 16,
      marginBottom: 4,
      color: '#ffffff',
    },
});

export default MainScreen;