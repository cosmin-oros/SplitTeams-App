import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native';
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';

type InputScreenProps = {
    navigation: NavigationProp<ParamListBase, 'InputScreen'>;
}

interface Player {
    name: string;
    position: string;
}

const InputScreen = ({ navigation } : InputScreenProps) => {
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

        // navigation.navigate('DisplayTeamsScreen', { team1: team1, team2: team2 });
    };

    return (
        <View style={styles.container}>

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

            <TouchableOpacity style={styles.addButton} onPress={addPlayer}>
              <Text style={styles.addButtonText}>Add Player</Text>
            </TouchableOpacity>

            {/* move these to the displayteamsscreen */}
            {/* display the players once added and the generate teams button */}
            {players.length > 0 && (
                <>
                <Text style={styles.displayedPlayer}>Players</Text>

                {players.map((player, index) => (
                    <Text style={styles.displayedPlayer} key={index}>{player.name} ({player.position})</Text>
                ))}

                <TouchableOpacity style={styles.button} onPress={generateTeams}>
                  <Text style={styles.buttonText}>Generate Teams</Text>
                </TouchableOpacity>
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
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 20,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 12,
      color: '#D6D6D6',
      textAlign: 'center',
    },
    playerNameInput: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 12,
      marginBottom: 12,
      color: '#D6D6D6',
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
      backgroundColor: '#808080',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 10,
      width: '80%',
      height: 50,
      borderWidth: 2,
      borderColor: '#D6D6D6',
      marginVertical: 10,
    },
    addButtonText: {
      color: '#D6D6D6',
      fontWeight: 'bold',
      fontSize: 18,
      textAlign: 'center',
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
      marginVertical: 10,
    },
    buttonText: {
      color: '#D6D6D6',
      fontWeight: 'bold',
      fontSize: 18,
      textAlign: 'center',
    },
    displayedPlayer: {
      fontSize: 12,
      fontWeight: 'bold',
      marginTop: 8,
      marginBottom: 8,
      color: '#D6D6D6',
    },
    teamContainer: {
      width: '100%',
      marginBottom: 16,
    },
    teamTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
      color: '#D6D6D6',
    },
    teamPlayer: {
      fontSize: 16,
      marginBottom: 4,
      color: '#D6D6D6',
    },
});

export default InputScreen;

