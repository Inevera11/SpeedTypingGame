const Sentence = (number) => {
  let result;
  switch (number) {
    case 0:
      result = "Little Red Riding Hood decided to wear orange today.";
      break;
    case 1:
      result =
        "She found it strange that people use their cellphones to actually talk to one another.";
      break;
    case 2:
      result = "I would be delighted if the sea were full of cucumber juice.";
      break;
    case 3:
      result =
        "I may struggle with geography, but I'm sure I'm somewhere around here.";
      break;
    case 4:
      result =
        "I never knew what hardship looked like until it started raining bowling balls.";
      break;
    case 5:
      result =
        "She did not cheat on the test, for it was not the right thing to do.";
      break;
    case 6:
      result = "The secret ingredient to his wonderful life was crime.";
    case 7:
      result = "He had concluded that pigs must be able to fly in Hog Heaven.";
      break;
    case 8:
      result = "Cats are good pets, for they are clean and are not noisy.";
      break;
    case 9:
      result = "Pink horses galloped across the sea.";
      break;
    case 10:
      result =
        "You realize you're not alone as you sit in your bedroom massaging your calves after a long day of playing tug-of-war with Grandpa Joe in the hospital.";
      break;
    case 11:
      result =
        "He was willing to find the depths of the rabbit hole in order to be with her.";
      break;
    case 12:
      result =
        "It was a slippery slope and he was willing to slide all the way to the deepest depths.";
    case 13:
      result =
        "She wanted to be rescued, but only if it was Tuesday and raining.";
      break;
    case 14:
      result = "Poison ivy grew through the fence they said was impenetrable.";
      break;
    case 15:
      result = "They improved dramatically once the lead singer left.";
      break;
    case 16:
      result =
        "It's not possible to convince a monkey to give you a banana by promising it infinite bananas when they die.";
      break;
    case 17:
      result = "If I don’t like something, I’ll stay away from it.";
      break;
    case 18:
      result =
        "She is never happy until she finds something to be unhappy about; then, she is overjoyed.";
      break;
    default:
      result = "";
      console.log("default");
      break;
  }
  return result;
};

export default Sentence;
