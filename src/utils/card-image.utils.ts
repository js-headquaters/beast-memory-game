import bearImage from "@assets/bear.jpg";
import duckImage from "@assets/duck.jpg";
import catImage from "@assets/cat.jpg";
import chickenImage from "@assets/chicken.jpg";
import dogImage from "@assets/dog.jpg";
import foxImage from "@assets/fox.jpg";
import hedgehogImage from "@assets/hedgehog.jpg";
import lionImage from "@assets/lion.jpg";
import monkeyImage from "@assets/monkey.jpg";
import owlImage from "@assets/owl.jpg";
import pandaImage from "@assets/panda.jpg";
import pigImage from "@assets/pig.jpg";
import rabbitImage from "@assets/rabbit.jpg";
import sheepImage from "@assets/sheep.jpg";
import turtleImage from "@assets/turtle.jpg";
import { CardAnimalType } from "@interfaces/index";

export const cardImageMap = new Map<CardAnimalType, string>([
  ["bear", bearImage],
  ["duck", duckImage],
  ["cat", catImage],
  ["chicken", chickenImage],
  ["dog", dogImage],
  ["fox", foxImage],
  ["hedgehog", hedgehogImage],
  ["lion", lionImage],
  ["monkey", monkeyImage],
  ["owl", owlImage],
  ["panda", pandaImage],
  ["pig", pigImage],
  ["rabbit", rabbitImage],
  ["sheep", sheepImage],
  ["turtle", turtleImage],
]);
