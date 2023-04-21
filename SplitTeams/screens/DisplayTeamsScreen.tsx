import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';

type MainScreenProps = {
    navigation: NavigationProp<ParamListBase, 'MainScreen'>;
    team1: Player[];
    team2: Player[];
}

interface Player {
    name: string;
    position: string;
}

const DisplayTeamsScreen = ({ navigation, team1, team2 } : MainScreenProps) => {
    

    return (
        <View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    
});

export default DisplayTeamsScreen;