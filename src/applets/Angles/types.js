export type Location = {
	x: number,
	y: number,
}

export type Degree = {
	type: 'degree',
	degree: number,
}

export type Radian = {
	type: 'radian',
	numerator: number,
	denominator: number,
}

export type TokenValue = Radian | Degree

export type Token = {
	id: string,
	value: TokenValue,
	point: Location,
}

export type Point = Location
