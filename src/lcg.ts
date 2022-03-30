export function linearCongruentialGenerator(
	Xo: number,
	m: number,
	a: number,
	c: number,
	randomNums: number[],
	noOfRandomNums: number
): number[] {
	// Initialize the seed state
	randomNums[0] = Xo;

	// Traverse to generate required
	// numbers of random numbers
	for (let i = 1; i < noOfRandomNums; i++) {
		// Follow the linear congruential method
		randomNums[i] = (randomNums[i - 1] * a + c) % m;
	}
	return randomNums;
}
