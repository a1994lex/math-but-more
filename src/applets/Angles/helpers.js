/* eslint no-mixed-operators: ['off'] */

type Key = string

/**
 * Iterates over each value in an object and runs a callback on that value.
 * @param {Object} object The object whose values are to be iterated
 * @param {Function} callback The callback to be called on each value in `object`.
 *                              For each call, it is passed one argument which is
 *                              one of the values in `object`.
 */
export function forEachValue<S>(object: { [Key]: S }, callback: S => any) {
	for (let key in object) {
		if (object.hasOwnProperty(key)) {
			callback(object[key])
		}
	}
}

export function random(first: number, second?: number): number {
	let lowerBound = second ? first : 0
	let upperBound = second || first

	return Math.floor(Math.random() * (upperBound - lowerBound + 1)) + lowerBound
}

export function generatePointInPolygon(polygon: Point[]) {
	const xPoints = polygon.map(p => p.x)
	const minX = Math.min(...xPoints)
	const maxX = Math.max(...xPoints)

	const yPoints = polygon.map(p => p.y)
	const minY = Math.min(...yPoints)
	const maxY = Math.max(...yPoints)

	let x, y
	do {
		x = minX + Math.random() * (maxX - minX)
		y = minY + Math.random() * (maxY - minY)
	} while (!isPointInPolygon({ x, y }, polygon))

	return { x, y }
}

export function isPointInPolygon(point: Point, polygon: Point[]) {
	const { x, y } = point

	let inside = false
	for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
		const x_i = polygon[i].x
		const y_i = polygon[i].y

		const x_j = polygon[j].x
		const y_j = polygon[j].y
		//eslint -disable-next-line
		var intersect = y_i > y !== y_j > y && x < ((x_j - x_i) * (y - y_i)) / (y_j - y_i) + x_i
		console.log(intersect)
		if (intersect) inside = !inside
	}

	return inside
}
