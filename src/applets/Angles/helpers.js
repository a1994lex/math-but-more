/* eslint no-mixed-operators: ['off'] */
import type { UnitCircleItem, RadianType } from './types'

import { unitCircle, specificCircle } from './constants'
type Key = string
type Point = { x: number, y: number }
type CircleType = Point & { r: number }
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

export function getPolygon(w: number, h: number) {
	return [{ x: 0, y: 0 }, { x: 0, y: h }, { x: w, y: h }, { x: w, y: h }]
}

export function radiansToDegrees({
	numerator,
	denominator,
}: {
	numerator: number,
	denominator: number,
}): number {
	const unit: ?UnitCircleItem = unitCircle.find(
		(unit: UnitCircleItem) =>
			unit.radian.numerator === numerator && unit.radian.denominator === denominator
	)
	if (unit) return unit.degree
	return 0
}

export function degreesToRadians(degree: number): RadianType {
	const findFunction = (circle: UnitCircleItem[]): ?UnitCircleItem => {
		return circle.find((unit: UnitCircleItem) => unit.degree === degree)
	}
	const unit: ?UnitCircleItem = findFunction(specificCircle)
	if (unit) return { numerator: unit.radian.numerator, denominator: unit.radian.denominator }
	return { numerator: 0, denominator: 0 }
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

/**
 * Given 2 sets of cooridnates and radiuses, determines whether either is within the other's radius.
 * @param  {{x: number, y: number, r: number}}  origin The origin object comprised of x,y coordinates and its radius
 * @param  {{x: number, y: number, r: number}}  target The target object comprised of x, y coordinates and its radius.
 * @return {Boolean}        [description]
 */
export function circlesIntersect(origin: CircleType, target: CircleType): boolean {
	const distanceSquared: number =
		(origin.x - target.x) * (origin.x - target.x) + (origin.y - target.y) * (origin.y - target.y)

	const radiusSquared: number = (origin.r + target.r) * (origin.r + target.r)

	if (distanceSquared > radiusSquared) return false
	return true
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
		if (intersect) inside = !inside
	}

	return inside
}
