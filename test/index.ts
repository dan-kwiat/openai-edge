import { suite } from 'uvu';
import * as assert from 'uvu/assert';
import * as math from '../src';

const API = suite('exports');

API('should export an object', () => {
	assert.type(math, 'object');
});

API.run();

// ---

const sum = suite('sum');

sum('should be a function', () => {
	assert.type(math.sum, 'function');
});

sum('should default to 0', () => {
	assert.is(math.sum(), 0);
});

sum('should handle one argument', () => {
	assert.is(math.sum(5), 5);
	assert.is(math.sum(-12), -12);
});

sum('should handle two arguments', () => {
	assert.is(math.sum(1, 2), 3);
	assert.is(math.sum(11, 12), 23);

	assert.is(math.sum(-1, -2), -3);
	assert.is(math.sum(-11, -12), -23);

	assert.is(math.sum(1, -2), -1);
	assert.is(math.sum(-11, 12), 1);
});

sum('should handle multiple arguments', () => {
	assert.is(math.sum(0, 0, -1, -2, 4, 9, 10), 20);
	assert.is(math.sum(1, 2, 3, 4, 5, 6), 21);
	assert.is(math.sum(10, 20, 30), 60);
});

sum.run();

// ---

const substract = suite('substract');

substract('should be a function', () => {
	assert.type(math.substract, 'function');
});

substract('should default to 0', () => {
	assert.is(math.substract(), 0);
});

substract('should handle one argument', () => {
	assert.is(math.substract(5), 5);
	assert.is(math.substract(-12), -12);
});

substract('should handle two arguments', () => {
	assert.is(math.substract(1, 2), -1);
	assert.is(math.substract(11, 12), -1);

	assert.is(math.substract(-1, -2), 1);
	assert.is(math.substract(-11, -12), 1);

	assert.is(math.substract(1, -2), 3);
	assert.is(math.substract(-11, 12), -23);
});

substract('should handle multiple arguments', () => {
	assert.is(math.substract(0, 0, -1, -2, 4, 9, 10), -20);
	assert.is(math.substract(1, 2, 3, 4, 5, 6), -19);
	assert.is(math.substract(10, 20, 30), -40);
});

substract.run();

// ---

const average = suite('average');

average('should be a function', () => {
	assert.type(math.average, 'function');
});

average('should default to NaN', () => {
	assert.equal(math.average(), NaN);
});

average('should handle one argument', () => {
	assert.is(math.average(5), 5);
	assert.is(math.average(-12), -12);
});

average('should handle two arguments', () => {
	assert.is(math.average(1, 2), 1.5);
	assert.is(math.average(11, 12), 11.5);

	assert.is(math.average(-1, -2), -1.5);
	assert.is(math.average(-11, -12), -11.5);

	assert.is(math.average(1, -2), -0.5);
	assert.is(math.average(-11, 12), 0.5);
});

average('should handle multiple arguments', () => {
	assert.is(math.average(0, 0, -1, -2, 4, 9, 10), 20 / 7);
	assert.is(math.average(1, 2, 3, 4, 5, 6), 21 / 6);
	assert.is(math.average(10, 20, 30), 20);
});

average.run();
