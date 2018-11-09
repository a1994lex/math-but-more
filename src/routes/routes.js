import {
	Angles,
	Homography,
	RobotMaze,
	TransMatrice,
	WordProblems,
	NegationReflex,
} from './../applets'
import type { MathRoute } from '../models'
import Home from './Home'

export const homeRoute: MathRoute = {
	path: '/',
	exact: true,
	main: Home,
	name: 'Home',
}

export const appletRoutes: MathRoute[] = [
	{
		path: '/angles.yum',
		main: Angles,
		name: 'Angles.yum',
	},
	{
		path: '/homography',
		main: Homography,
		name: 'Homography',
	},
	{
		path: '/robotmaze',
		main: RobotMaze,
		name: 'Robot Maze',
	},
	{
		path: '/transitions',
		main: TransMatrice,
		name: 'Translation Matrix',
	},
	{
		path: '/word-problems',
		main: WordProblems,
		name: 'Word Problems',
	},
	{
		path: '/negationreflex',
		main: NegationReflex,
		name: 'Negation Reflex',
	},
]
