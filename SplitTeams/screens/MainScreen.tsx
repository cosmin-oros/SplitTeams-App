import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';

type MainScreenProps = {
    navigation: NavigationProp<ParamListBase, 'MainScreen'>;
}

const MainScreen = ({ navigation } : MainScreenProps) => {
    return (
        <View>
            <Text>da</Text>
        </View>
    );
};

export default MainScreen;