import Home from './Home'
import {Angles, Homography, RobotMaze, TransMatrice, WordProblems} from './../applets'

import type {MathRoute} from '../models'

export const routes: MathRoute[] = [
  {
    path: "/",
    exact: true,
    main: Home,
    name: "Home"
  },
  {
    path: "/angles.yum",
    main: Angles,
    name: "Angles"
  },
  {
    path: "/homography",
    main: Homography,
    name: "Homography",
  },
  {
    path: "/robotmaze",
    main: RobotMaze,
    name: "Robot Maze",
  },
  {
    path: "/transitions",
    main: TransMatrice,
    name: "Translation Matrix"
  },
  {
    path: "/word-problems",
    main: WordProblems,
    name: "Word Problems"
  }
];
