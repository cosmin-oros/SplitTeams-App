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
        if (playerName.trim() !== '') {
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
    
        // modify this to split them fairly
        const shuffledPlayers = players.sort(() => Math.random() - 0.5);
    
        const newTeam1: Player[] = [];
        const newTeam2: Player[] = [];
    
        for (const [position, count] of Object.entries(positions)) {
          const playersForPosition = shuffledPlayers.filter(
            (player) => player.position === position
          );
    
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
                value={playerName}
                onChangeText={(text) => setPlayerName(text)}
            />

            {/* buttons to choose the position */}
            <View style={styles.positionButton}>
                <Button title="Forward" onPress={() => setPlayerPosition('forward')} color={playerPosition === 'forward' ? 'blue' : 'gray'} />
                <Button title="Midfielder" onPress={() => setPlayerPosition('midfielder')} color={playerPosition === 'midfielder' ? 'blue' : 'gray'} />
                <Button title="Defender" onPress={() => setPlayerPosition('defender')} color={playerPosition === 'defender' ? 'blue' : 'gray'} />
                <Button title="Goalkeeper" onPress={() => setPlayerPosition('goalkeeper')} color={playerPosition === 'goalkeeper' ? 'blue' : 'gray'} />
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

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#082438',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
        fontSize: 18, 
        fontWeight: 'bold', 
        marginBottom: 8,
        color: '#ffffff',
    },
    playerNameInput: {
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1, 
        marginBottom: 8,
        color: '#ffffff',
    },
    positionButton: {
        flexDirection: 'row', 
        marginBottom: 8,
    },
    displayedPlayer: {
        fontSize: 18, 
        fontWeight: 'bold', 
        marginTop: 8,
        marginBottom: 8,
        color: '#ffffff',
    }
    
});

export default MainScreen;