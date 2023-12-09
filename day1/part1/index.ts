import { readFileSync } from 'fs';

// just read numbers
const lines = readFileSync('./day1/input2.txt').toString().split('\n');

const calibrationValues = lines.reduce<number[]>((acc, line) => {
    if (!line) {
        return acc;
    }

    const numbersMatches = line.matchAll(/\d/g);
    const array = Array.from(numbersMatches);
    const matches = array.map(match => match[0])

    const firstMatch = matches[0];
    const lastMatch = matches[matches.length - 1];

    const number = Number(firstMatch + lastMatch);

    acc.push(number);

    console.log(line);
    console.log(firstMatch);
    console.log(lastMatch);
    console.log(number);

    return acc;
}, []);

const result = calibrationValues.reduce<number>((acc, calibrationValue) => {
    acc += calibrationValue;

    return acc;
}, 0);


console.log(result);
