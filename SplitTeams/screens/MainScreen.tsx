import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
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
        <View>
            <Text>da</Text>
        </View>
    );
};

export default MainScreen;