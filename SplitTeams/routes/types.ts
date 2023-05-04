import { Routes } from './routes';
import { NavigationProp, RouteProp } from '@react-navigation/native';

interface Player {
  name: string;
  position: string;
}

export type RouteParams = {
  [Routes.Welcome]: undefined;
  [Routes.Input]: undefined;
  [Routes.Display]: {
    newTeam1: Player[];
    newTeam2: Player[];
  };
};

export type WelcomeScreenRouteProp = RouteProp<RouteParams, Routes.Welcome>;

export type InputScreenRouteProp = RouteProp<RouteParams, Routes.Input>;

export type DisplayTeamsScreenRouteProp = RouteProp<RouteParams, Routes.Display>;

export type NavigationProps<T extends keyof RouteParams> = {
  navigation: NavigationProp<RouteParams, T>;
  route: RouteProp<RouteParams, T>;
};