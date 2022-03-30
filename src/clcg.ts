export function combinedLinearCongruentialGenerator(
	n: number = 1000
): number[] {
	let r: number[] = [];
	let m1 = 2147483563;
	let a1 = 40014;
	let m2 = 2147483399;
	let a2 = 40692;

	let y1 = Math.random() * (m1 - 1) + 1;
	let y2 = Math.random() * (m2 - 1) + 1;

	for (let i = 0; i < n; i++) {
		y1 = (a1 * y1) % m1;
		y2 = (a2 * y2) % m2;

		let x = (y1 - y2) % m1;

		if (x > 0) {
			r[i] = x / m1;
		} else if (x < 0) {
			r[i] = x / m1 + 1;
		} else if (x === 0) {
			r[i] = (m1 - 1) / m1;
		}
	}

	return r;
}
