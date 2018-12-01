import {
	Angles,
	Homography,
	RobotMaze,
	TransMatrice,
	WordProblems,
	NegationReflex,
} from './../applets'

import Home from './Home'

import type { MathRoute, MathApplet } from '../models'

import anglesImage from '../assets/appletIcons/anglesyum.png'
import homographyImage from '../logo.svg'
import robotmazeImage from '../assets/appletIcons/roomba.png'
import wordproblemsImage from '../logo.svg'
import transformationsImage from '../assets/pacman.svg'
import negation from '../assets/appletIcons/negation2.png'

export const homeRoute: MathRoute = {
	path: '/',
	exact: true,
	main: Home,
	name: 'Home',
}

export const applets: MathApplet[] = [
	{
		route: {
			path: '/angles.yum',
			main: Angles,
			name: 'Angles.yum',
		},
		description: 'Eat angles to get the correct measurement',
		type: 'game',
		subjects: ['angles', 'arithmetic'],
		image: anglesImage,
	},
	{
		route: {
			path: '/homography',
			main: Homography,
			name: 'Homography',
		},
		description: 'Explore how computer vision uses homography to identify shapes',
		type: 'demo',
		subjects: ['homography'],
		image: homographyImage,
		dev: true,
	},
	{
		route: {
			path: '/robotmaze',
			main: RobotMaze,
			name: 'Robot Maze',
		},
		description: 'Help a robot make it through a maze',
		type: 'game',
		subjects: ['coding', 'integers', 'arithmetic'],
		image: robotmazeImage,
	},
	{
		route: {
			path: '/transitions',
			main: TransMatrice,
			name: 'Translation Matrix',
		},
		description: 'Explore how matrices are used to transform shapes in computer graphics',
		type: 'demo',
		subjects: ['matrices'],
		image: transformationsImage,
	},
	{
		route: {
			path: '/word-problems',
			main: WordProblems,
			name: 'Word Problems',
		},
		description: 'Solve word problems involving algebra and trigonometry concepts',
		type: 'game',
		subjects: ['trigonometry', 'algebra'],
		image: wordproblemsImage,
	},
	{
		route: {
			path: '/negationreflex',
			main: NegationReflex,
			name: 'Negation Reflex',
		},
		description: 'Practice adding and subtracting with negative numbers',
		type: 'game',
		subjects: ['negation', 'arithmetic'],
		image: negation,
	},
]

export const appletRoutes = applets.map(applet => applet.route)
