import Sentence from "./Sentence";

const CopmaringStrings = (text, number) => {
  let mistakes = 0;
  let correctOnes = 0;
  let charactersLeft = Sentence(number).length;

  for (let i = 0; i < text.length; i++) {
    charactersLeft = charactersLeft - 1;
    if (Sentence(number)[i] === text[i]) correctOnes = correctOnes + 1;
    else mistakes = mistakes + 1;
  }

  if (text !== "") correctOnes = Math.floor((correctOnes * 100) / text.length);

  return [correctOnes, mistakes, charactersLeft];
};

export default CopmaringStrings;
