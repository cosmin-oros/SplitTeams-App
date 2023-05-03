import { Routes } from './routes';

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