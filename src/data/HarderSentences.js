import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 18,
    min: 1,
  },
});

const HarderSentences = ({ number }) => {
  return lorem.generateSentences(number);
};

export default HarderSentences;
