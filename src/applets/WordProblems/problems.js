export const problems = [
	{
		problem:
			'Jacob likes watermelons. He goes to the store and buys {0} watermelons. Unfortunately, Michael accidentally drops and smashes {1} of them. How many does Jacob have left?',
		params: [[2, 50], [1, '{0}']],
		answer: (melons, smashed) => melons - smashed,
	},
	{
		problem:
			'Joshua has {0} chocolates. Matthew gives him {1} more. How many chocolates does Joshua have now?',
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
