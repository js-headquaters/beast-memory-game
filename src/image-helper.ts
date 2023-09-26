import catImage from "./assets/cat.png";
import dogImage from "./assets/dog.png";
import chickenImage from "./assets/chicken.png";
import pigImage from "./assets/pig.png";
import monkeyImage from "./assets/monkey.png";
import horseImage from "./assets/horse.png";
import donkeyImage from "./assets/donkey.png";
import bearImage from "./assets/bear.png";

import { CardType } from "./types";

export const cardImageMap = new Map<CardType, string>([
  ["cat", catImage],
  ["dog", dogImage],
  ["chicken", chickenImage],
  ["pig", pigImage],
  ["monkey", monkeyImage],
  ["horse", horseImage],
  ["donkey", donkeyImage],
  ["bear", bearImage],
]);
