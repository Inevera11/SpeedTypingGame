import { sentences } from "../data/sentences";

const CopmaringStrings = (text, number) => {
  const mistakes = text
    .split("")
    .reduce(
      (prev, curr, index) =>
        curr !== sentences[number][index] ? [...prev, index] : prev,
      []
    );

  const correctOnes =
    text.length !== 0
      ? Math.floor(((text.length - mistakes.length) * 100) / text.length)
      : null;

  const charactersLeft = sentences[number].length - text.length;

  return {
    correctOnes,
    mistakesLength: mistakes.length,
    charactersLeft,
    mistakes,
  };
};

export default CopmaringStrings;
