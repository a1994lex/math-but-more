import {
	Angles,
	Homography,
	RobotMaze,
	TransMatrice,
	WordProblems,
	NegationReflex,
} from './../applets'

import Home from './Home'
import { instructions as AngleInstructions } from '../applets/Angles/instructions'

import type { MathRoute, MathApplet } from '../models'

import anglesImage from '../assets/appletIcons/anglesyum.png'
import homographyImage from '../logo.svg'
import robotmazeImage from '../assets/appletIcons/roomba.png'
import wordproblemsImage from '../assets/appletIcons/watermelons.jpg'
import transformationsImage from '../assets/pacman.svg'
import negation from '../assets/appletIcons/negation2.png'
import github from '../assets/appletIcons/github.jpg'

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
		instructions: AngleInstructions(),
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
		instructions:
			'Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI. Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service. Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains. Dramatically engage top-line web services vis-a-vis cutting-edge deliverables.',
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
		instructions:
			'Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI. Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service. Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains. Dramatically engage top-line web services vis-a-vis cutting-edge deliverables.',
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
		description: 'Explore how matrices transform images',
		instructions:
			'Every image can be represented by a series of points that genreally look like: Point(x, y) these points can be manipulated by multiplying them with data structures called matrices. The simplest things you can do with an image and a matrix are moving it (Translation), turning it (Rotation) and making it bigger or smaller (Scaling). Try warping the image with the input field.',
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
		description: 'Solve word problems using algebra concepts',
		instructions:
			"Use your mad math skills to solve the problem, type the answer in the box, and click 'Check Answer'",
		type: 'game',
		subjects: ['integers', 'arithmetic', 'algebra'],
		image: wordproblemsImage,
	},
	{
		route: {
            path: '/negationreflex',
            main: NegationReflex,
            name: 'Negation Reflex',
        },
        description: 'Practice basic integer arithmetic with negative numbers',
        instructions:
            'Put your answer in the text box and press enter. On completion, red text indicates a wrong answer, blue indicates a correct answer. Click the "play again?" text to play the game again.',
        type: 'game',
        subjects: ['negation', 'arithmetic'],
        image: negation,
	},
	{
		route: {
			redirect: true,
			path: 'https://github.com/a1994lex/math-but-more',
			main: null,
			name: 'Additional Resources',
		},
		description: 'Follow the link to our Github repo',
		type: 'other',
		subjects: [],
		image: github,
	},
]

export const appletRoutes = applets.map(applet => applet.route)
