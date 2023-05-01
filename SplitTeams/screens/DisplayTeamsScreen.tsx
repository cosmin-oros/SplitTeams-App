import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';

interface Player {
  name: string;
  position: string;
}

type DisplayScreenProps = {
  route: {
    params: {
      newTeam1: Player[];
      newTeam2: Player[];
    };
  };
  navigation: NavigationProp<ParamListBase, 'DisplayTeamsScreen'>;
};

const DisplayTeamsScreen = ({ route, navigation } : DisplayScreenProps) => {
  const { newTeam1, newTeam2 } = route.params;


  return (
    <View>
            
    </View>
  );
};

const styles = StyleSheet.create({
    
});

export default DisplayTeamsScreen;