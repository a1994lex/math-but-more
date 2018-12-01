export const problems = [
	{
		problem:
			'Billy likes watermelons. He goes to the store and buys 17 watermelons. Unfortunately, his friend Steve smashes 8 of them. How many does Billy have left?',
		answer: 9,
	},
	{
		problem:
			'Johnny has 5 chocolates. Ben gives him 3 more. How many chocolates does Johnny have now?',
		answer: 8,
	},
	{
		problem:
			'You collect Fortnite Dances. You had 13 this morning and have earned 5 today. How many do you have now?',
		answer: 18,
	},
	{
		problem:
			'Johnny and Debbie both love pokemon and collect cards. When they meet up to trade Johnny gives Debbie {0} of his Charizard cards for {1} of her Dittos. If combined they had {2} cards and Debbie walked away with {3} how many cards did Johnny have before the traded?',
		params: [[2, 10], [2, 10], [20, 70], [10, 40]],
		answer: (numJohnnyTraded, numDebbieTraded, total, debbieTotal) =>
			total - debbieTotal - numDebbieTraded + numJohnnyTraded,
	},
	{
		problem:
			'Kendall and Denise both like raisins, a lot. Kendall can eat {0} boxes in {1} hours and Denise can eat {2} box in {3} hours.  How many hours will it take for denise to eat more raisins than Kendall?',
		params: [[5 - 10], [3 - 7], [1 - 5], [1 - 3]],
		answer: (kBoxes, kTime, dBoxes, dTime) => {
			let numHours = 1
			while ((kBoxes / kTime) * numHours >= (dBoxes / dTime) * numHours) {
				numHours += 1
			}
		},
	},
]
