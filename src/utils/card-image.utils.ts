import bearImage from "@assets/bear.jpg";
import beeImage from "@assets/bee.jpg";
import catImage from "@assets/cat.jpg";
import chickenImage from "@assets/chicken.jpg";
import dogImage from "@assets/dog.jpg";
import frogImage from "@assets/frog.jpg";
import hedgehogImage from "@assets/hedgehog.jpg";
import lionImage from "@assets/lion.jpg";
import monkeyImage from "@assets/monkey.jpg";
import mouseImage from "@assets/mouse.jpg";
import pandaImage from "@assets/panda.jpg";
import pigImage from "@assets/pig.jpg";
import rabbitImage from "@assets/rabbit.jpg";
import sheepImage from "@assets/sheep.jpg";
import turtleImage from "@assets/turtle.jpg";
import { CardAnimalType } from "@interfaces/index";

export const cardImageMap = new Map<CardAnimalType, string>([
  ["bear", bearImage],
  ["bee", beeImage],
  ["cat", catImage],
  ["chicken", chickenImage],
  ["dog", dogImage],
  ["frog", frogImage],
  ["hedgehog", hedgehogImage],
  ["lion", lionImage],
  ["monkey", monkeyImage],
  ["mouse", mouseImage],
  ["panda", pandaImage],
  ["pig", pigImage],
  ["rabbit", sheepImage],
  ["sheep", rabbitImage],
  ["turtle", turtleImage],
]);
