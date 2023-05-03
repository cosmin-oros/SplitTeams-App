import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';
import { RouteParams } from '../routes/types';
import { Routes } from '../routes/routes';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

interface Player {
  name: string;
  position: string;
}

type DisplayTeamsScreenProps = {
  props: NativeStackScreenProps<RouteParams, Routes.Display>;
}

const DisplayTeamsScreen: React.FC<DisplayTeamsScreenProps> = ({ props } : DisplayTeamsScreenProps) => {
  const { navigation, route } = props;
  const { newTeam1, newTeam2 } = route.params;

  return (
    <View>
            
    </View>
  );
};

const styles = StyleSheet.create({
    
});

export default DisplayTeamsScreen;