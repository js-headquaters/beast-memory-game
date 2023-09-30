import bearImage from "@assets/bear.jpg";
import beeImage from "@assets/bee.jpg";
import catImage from "@assets/cat.jpg";
import chickenImage from "@assets/chicken.jpg";
import dogImage from "@assets/dog.jpg";
import frogImage from "@assets/frog.jpg";
import lionImage from "@assets/lion.jpg";
import monkeyImage from "@assets/monkey.jpg";
import pigImage from "@assets/pig.jpg";
import turtleImage from "@assets/turtle.jpg";

import { CardAnimalType } from "@interfaces/index";

export const cardImageMap = new Map<CardAnimalType, string>([
  ["bear", bearImage],
  ["bee", beeImage],
  ["cat", catImage],
  ["chicken", chickenImage],
  ["dog", dogImage],
  ["frog", frogImage],
  ["lion", lionImage],
  ["monkey", monkeyImage],
  ["pig", pigImage],
  ["turtle", turtleImage],
]);
