import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';
import { RouteParams } from '../routes/types';
import { Routes } from '../routes/routes';

type InputScreenProps = {
    navigation: NavigationProp<ParamListBase, Routes.Input>;
}

interface Player {
    name: string;
    position: string;
}

const InputScreen = ({ navigation } : InputScreenProps) => {
    const [playerName, setPlayerName] = useState<string>('');
    const [playerPosition, setPlayerPosition] = useState<string>('forward');
    const [players, setPlayers] = useState<Player[]>([]);
    // const [team1, setTeam1] = useState<Player[]>([]);
    // const [team2, setTeam2] = useState<Player[]>([]);

    // add a player to the players list
    const addPlayer = () => {
        if (playerName.trim() !== '' && players.length <= 22) {
          const newPlayer: Player = { name: playerName, position: playerPosition };
          setPlayers([...players, newPlayer]);
          setPlayerName('');
          setPlayerPosition('forward');
        }
    };

    const reset = () => {
      setPlayers([]);
      setPlayerName('');
      setPlayerPosition('forward');
    }

    // function to generate the teams in a fair way
    const generateTeams = () => {
        const gks = players.filter((player) => player.position == 'goalkeeper');
        const defs = players.filter((player) => player.position == 'defender');
        const mids = players.filter((player) => player.position =='midfielder');
        const fws = players.filter((player) => player.position == 'forward'); 

        const shuffleArray = (array: Player[]) => {
          for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
          }
          return array;
        }
      
        shuffleArray(gks);
        shuffleArray(defs);
        shuffleArray(mids);
        shuffleArray(fws);

        const team1: Player[] = [];
        const team2: Player[] = [];

        while (gks.length > 0) {
          team1.push(gks.shift()!);
          if (gks.length > 0) {
            team2.push(gks.shift()!);
          }
        }

        while (defs.length > 0) {
          if (team1.length > team2.length) {
            team2.push(defs.shift()!);
            if (defs.length > 0) {
              team1.push(defs.shift()!);
            }
          } else {
            team1.push(defs.shift()!);
            if (defs.length > 0) {
              team2.push(defs.shift()!);
            }
          }
        }

        while (mids.length > 0) {
          if (team1.length > team2.length) {
            team2.push(mids.shift()!);
            if (mids.length > 0) {
              team1.push(mids.shift()!);
            }
          } else {
            team1.push(mids.shift()!);
            if (mids.length > 0) {
              team2.push(mids.shift()!);
            }
          }
        }

        while (fws.length > 0) {
          if (team1.length > team2.length) {
            team2.push(fws.shift()!);
            if (fws.length > 0) {
              team1.push(fws.shift()!);
            }
          } else {
            team1.push(fws.shift()!);
            if (fws.length > 0) {
              team2.push(fws.shift()!);
            }
          }
        }

        navigation.navigate(Routes.Display, { newTeam1: team1, newTeam2: team2 });
    };

    return (
        <View style={styles.container}>
          
        <Image source={require('../assets/logo_app.png')} style={styles.logo} resizeMode="contain" />

            {/* textfield to add player name */}
            <TextInput style={styles.playerNameInput}
                placeholder=" Player Name"
                placeholderTextColor='#082438'
                value={playerName}
                onChangeText={(text) => setPlayerName(text)}
            />

            {/* buttons to choose the position */}
            <View style={styles.positionButton}>
                <TouchableOpacity onPress={() => setPlayerPosition('forward')} style={playerPosition === 'forward' ? styles.positionButtonChildPressed : styles.positionButtonChild}>
                    <Text style={styles.positionButtonChildText}>FWD</Text>
                </TouchableOpacity>
                    
                <TouchableOpacity onPress={() => setPlayerPosition('midfielder')} style={playerPosition === 'midfielder' ? styles.positionButtonChildPressed : styles.positionButtonChild}>
                  <Text style={styles.positionButtonChildText}>MID</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setPlayerPosition('defender')} style={playerPosition === 'defender' ? styles.positionButtonChildPressed : styles.positionButtonChild}>
                  <Text style={styles.positionButtonChildText}>DEF</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setPlayerPosition('goalkeeper')} style={playerPosition === 'goalkeeper' ? styles.positionButtonChildPressed : styles.positionButtonChild}>
                  <Text style={styles.positionButtonChildText}>GK</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonsContainer}>
              <TouchableOpacity style={styles.addButton} onPress={addPlayer}>
                <Text style={styles.addButtonText}>Add Player</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.addButton} onPress={reset}>
                <Text style={styles.addButtonText}>Reset</Text>
              </TouchableOpacity>
            </View>

            {/* move these to the displayteamsscreen */}
            {/* display the players once added and the generate teams button */}
            {players.length > 1 && (
                <>
                {/* <Text style={styles.displayedPlayer}>Players</Text>

                {players.map((player, index) => (
                    <Text style={styles.displayedPlayer} key={index}>{player.name} ({player.position})</Text>
                ))} */}

                <TouchableOpacity style={styles.button} onPress={generateTeams}>
                  <Text style={styles.buttonText}>Generate Teams</Text>
                </TouchableOpacity>
                </>
            )}

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
      color: '#082438',
      textAlign: 'center',
    },
    logo: {
      width: '100%',
      height: '50%',
      marginBottom: '10%'
    },
    playerNameInput: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 12,
      marginBottom: 12,
      color: '#082438',
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
      backgroundColor: 'gray',
      borderRadius: 5,
    },
    positionButtonChildPressed: {
      flex: 1,
      marginHorizontal: 4,
      backgroundColor: '#082438',
      borderRadius: 5,
    },
    positionButtonChildText: {
      color: '#f5f5f5',
      fontWeight: 'bold',
      fontSize: 18,
      textAlign: 'center',
    },
    buttonsContainer: {
      flexDirection: 'row',
    },
    addButton: {
      backgroundColor: '#082438',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 10,
      width: '50%',
      height: 50,
      borderWidth: 2,
      borderColor: '#D6D6D6',
      marginVertical: 10,
    },
    addButtonText: {
      color: '#f5f5f5',
      fontWeight: 'bold',
      fontSize: 18,
      textAlign: 'center',
    },
    button: {
      backgroundColor: '#082438',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 10,
      width: '80%',
      height: 50,
      borderWidth: 2,
      borderColor: '#D6D6D6',
      marginVertical: 10,
      position: 'absolute',
      bottom: 20,
    },
    buttonText: {
      color: '#f5f5f5',
      fontWeight: 'bold',
      fontSize: 18,
      textAlign: 'center',
    },
    displayedPlayer: {
      fontSize: 12,
      fontWeight: 'bold',
      marginTop: 8,
      marginBottom: 8,
      color: '#082438',
    },
    teamContainer: {
      width: '100%',
      marginBottom: 16,
    },
    teamTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
      color: '#f5f5f5',
    },
    teamPlayer: {
      fontSize: 16,
      marginBottom: 4,
      color: '#f5f5f5',
    },
});

export default InputScreen;
