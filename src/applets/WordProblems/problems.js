export const problems = [
	{
		problem:
			'Billy likes watermelons. He goes to the store and buys {0} watermelons. Unfortunately, his friend Steve smashes {1} of them. How many does Billy have left?',
		params: [[2, 50], [1, '{0}']],
		answer: (melons, smashed) => melons - smashed,
	},
	{
		problem:
			'Johnny has {0} chocolates. Ben gives him {1} more. How many chocolates does Johnny have now?',
		params: [[2, 10], [1, 30]],
		answer: (initial, additional) => initial + additional,
	},
	{
		problem:
			'You collect Fortnite Dances. You had {0} this morning and have earned {1} today. How many do you have now?',
		params: [[1, 100], [1, 50]],
		answer: (initial, additional) => initial + additional,
	},
	{
		problem:
			'You just bought {0} boxes of Ziploc bags for a service project. Each box has {1} bags. How many bags do you have in total?',
		params: [[5, 20], [10, 40]],
		answer: (boxes, bagsInEach) => boxes * bagsInEach,
	},
]
