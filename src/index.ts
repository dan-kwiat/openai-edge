export function sum(...nums: number[]): number {
	let i=0, total=0;
	for (; i < nums.length; i++) total += nums[i];
	return total;
}

export function substract(...nums: number[]): number {
	let i=0, total = nums[i++] | 0;
	for (; i < nums.length; i++) total -= nums[i];
	return total;
}

export function average(...nums: number[]): number {
	let i=0, len=nums.length, total=0;
	for (; i < len; i++) total += nums[i];
	return total / len;
}
