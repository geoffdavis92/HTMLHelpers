// comparison helpers

const and = (expression1: any, experssion2: any): any =>
	expression1 && experssion2;
const gteZero = (expression: any): boolean => expression >= 0;
const nonEmptyString = (expression: any): boolean => expression !== "";

export { and, gteZero, nonEmptyString };
