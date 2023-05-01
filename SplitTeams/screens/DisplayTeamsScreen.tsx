import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';

interface Player {
    name: string;
    position: string;
}

type DisplayTeamsScreenProps = {
    navigation: NavigationProp<ParamListBase, 'DisplayTeamsScreen'>;
    team1: Player[];
    team2: Player[];
}

const DisplayTeamsScreen = ({ navigation, team1, team2 } : DisplayTeamsScreenProps) => {
    

    return (
        <View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    
});

export default DisplayTeamsScreen;