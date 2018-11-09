import {
	Angles,
	Homography,
	RobotMaze,
	TransMatrice,
	WordProblems,
	NegationReflex,
} from './../applets'
import type { MathRoute } from '../models'
import logo from '../logo.svg'
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
		description: 'Eat angles to get the correct measurement',
		type: 'game',
		subject: 'angles',
		image: logo,
	},
	{
		path: '/homography',
		main: Homography,
		name: 'Homography',
		description: 'Explore how computer vision uses homography to identify shapes',
		type: 'demo',
		subject: 'homography',
		image: logo,
	},
	{
		path: '/robotmaze',
		main: RobotMaze,
		name: 'Robot Maze',
		description: 'Help a robot make it through a maze',
		type: 'game',
		subject: 'coding',
		image: logo,
	},
	{
		path: '/transitions',
		main: TransMatrice,
		name: 'Translation Matrix',
		description: 'Explore how matrices are used to transform shapes in computer graphics',
		type: 'demo',
		subject: 'matrices',
		image: logo,
	},
	{
		path: '/word-problems',
		main: WordProblems,
		name: 'Word Problems',
		description: 'Solve word problems involving trigonometry concepts',
		type: 'game',
		subject: 'trigonometry',
		image: logo,
	},
	{
		path: '/negationreflex',
		main: NegationReflex,
		name: 'Negation Reflex',
		description: 'Practice adding and subtracting with negative numbers',
		type: 'game',
		subject: 'integers',
		image: logo,
	},
]
