export const problems = [
	{
		problem:
			'Jacob likes watermelons. He goes to the store and buys {0} watermelons. Unfortunately, Michael accidentally drops and smashes {1} of them. How many does Jacob have left?',
		params: [[2, 50], [1, '{0}']],
		answer: (melons, smashed) => melons - smashed,
		exact: true,
	},
	{
		problem:
			'Joshua has {0} chocolates. Matthew gives him {1} more. How many chocolates does Joshua have now?',
		params: [[2, 10], [1, 30]],
		answer: (initial, additional) => initial + additional,
		exact: true,
	},
	{
		problem:
			'You collect Fortnite Dances. You had {0} this morning and have earned {1} today. How many do you have now?',
		params: [[1, 100], [1, 50]],
		answer: (initial, additional) => initial + additional,
		exact: true,
	},
	{
		problem:
			'You just bought {0} boxes of Ziploc bags for a service project. Each box has {1} bags. How many bags do you have in total?',
		params: [[5, 20], [10, 40]],
		answer: (boxes, bagsInEach) => boxes * bagsInEach,
		exact: true,
	},
	{
		problem:
			'Johnny and Debbie both love pokemon and collect cards. When they meet up to trade Johnny gives Debbie {0} of his Charizard cards for {1} of her Dittos. If combined they had {2} cards and Debbie walked away with {3} how many cards did Johnny have before the traded?',
		params: [[2, 10], [2, 10], [20, 70], [10, 40]],
		answer: (numJohnnyTraded, numDebbieTraded, total, debbieTotal) =>
			total - debbieTotal - numDebbieTraded + numJohnnyTraded,
		exact: true,
	},
	{
		problem:
			'Kendall and Denise both like raisins, a lot. Kendall can eat {0} boxes in {1} hours and Denise can eat {2} boxes in {3} hours.  How many hours will it take for Denise to eat as many raisins as Kendall can eat in {4} hours?',
		params: [[2, 5], [2, 4], [5, 10], [3, 7], [2, 10]],
		answer: (kBoxes, kTime, dBoxes, dTime, kHoursTarget) =>
			((kBoxes / kTime) * kHoursTarget) / (dBoxes / dTime),
		exact: false,
	},
]
