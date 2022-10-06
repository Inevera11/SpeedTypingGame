import { sentences } from "../data/sentences";
import { harderSentences } from "../data/HarderSentences";

const CopmaringStrings = (text, number, lvl) => {
  const Table = lvl ? sentences : harderSentences;
  const mistakes = text
    .split("")
    .reduce(
      (prev, curr, index) =>
        curr !== Table[number][index] ? [...prev, index] : prev,
      []
    );

  const correctOnes =
    text.length !== 0
      ? Math.floor(((text.length - mistakes.length) * 100) / text.length)
      : null;

  const charactersLeft = Table[number].length - text.length;

  return {
    correctOnes,
    mistakesLength: mistakes.length,
    charactersLeft,
    mistakes,
  };
};

export default CopmaringStrings;
