import { readFileSync } from 'fs';

const numbersMap: Record<string, string> = {
    'one': '1',
    'two': '2',
    'three': '3',
    'four': '4',
    'five': '5',
    'six': '6',
    'seven': '7',
    'eight': '8',
    'nine': '9',
};

// just read numbers
const lines = readFileSync('./day1/part1/input2.txt').toString().split('\n');

const calibrationValues = lines.reduce<number[]>((acc, line) => {
    if (!line) {
        return acc;
    }

    const chars = line.split('')
    const backwardsChars = [...chars];

    let forwardBuffer = '';
    let forwardNumberFound = '';
    while (chars.length || !forwardNumberFound) {
        forwardBuffer = forwardBuffer + chars.shift();

        const match = forwardBuffer.match(/\d|one|two|three|four|five|six|seven|eight|nine/);
        if (match) {
            const numberMatch = match[0]; 

            forwardNumberFound = numbersMap[numberMatch] ?? numberMatch;
        }
    }

    let backwardsBuffer = '';
    let backwardsNumberFound = '';
    while (chars.length || !backwardsNumberFound) {
        backwardsBuffer = (backwardsChars.pop() ?? '') + backwardsBuffer;

        const match = backwardsBuffer.match(/\d|one|two|three|four|five|six|seven|eight|nine/);
        if (match) {
            const numberMatch = match[0]; 

            backwardsNumberFound = numbersMap[numberMatch] ?? numberMatch;
        }
    }

    const number = Number(forwardNumberFound + backwardsNumberFound);

    acc.push(number);

    return acc;
}, []);

const result = calibrationValues.reduce<number>((acc, calibrationValue) => {
    acc += calibrationValue;

    return acc;
}, 0);


console.log(result);
