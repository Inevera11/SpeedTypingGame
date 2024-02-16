import { sentences } from '../data/sentences';
import { harderSentences } from '../data/HarderSentences';

export const ComparingStrings = (text, number, lvl) => {
    const results = lvl ? sentences : harderSentences;
    const mistakes = text.split('').reduce((prev, curr, index) => (curr !== results[number][index] ? [...prev, index] : prev), []);

    const correctOnes = text.length !== 0 ? Math.floor(((text.length - mistakes.length) * 100) / text.length) : null;
    const isFinished = text.length === results[number].length || text.length > results[number].length;
    const charactersLeft = results[number].length - text.length;
    const currText = lvl ? sentences[number] : harderSentences[number];

    return {
        correctOnes,
        mistakesLength: mistakes.length,
        charactersLeft,
        mistakes,
        isFinished,
        currText,
    };
};
