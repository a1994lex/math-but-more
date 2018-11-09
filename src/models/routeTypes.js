export type MathRoute = {
	path: string,
	exact?: boolean,
	main: Object,
	name: string,
}

export type MathApplet = {
	route: MathRoute,
	image: Object,
	type: string,
	subjects: Array<string>,
	description: string,
}
