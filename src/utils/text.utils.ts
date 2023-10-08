import { AnimalType } from "@interfaces/index";

const CONGRATULATIONS = [
  "Absolutely Brilliant!",
  "Spectacular Achievement!",
  "Exceptional Job!",
  "Mind-Blowing Performance!",
  "Stunning Effort!",
  "Breathtaking Success!",
  "Astonishing Results!",
  "You're Unstoppable!",
  "Phenomenal Work!",
  "Simply Marvelous!",
];

const animalPhrases: Record<AnimalType, string> = {
  bear: "Rawr, rawr! You helped me find my honey stash! You're unbearably awesome!",
  owl: "Hoo-hoo! You're so wise to match my feathers. Now I can finally find my night snacks!",
  cat: "Meow, purrfect! You've got claws for thought, helping me locate my yarn ball!",
  chicken:
    "Cluck cluck! Thanks for matching me up! Now I can find my nest of psychedelic eggs!",
  dog: "Woof woof! You're allowing me to memorize where my bone is!",
  fox: "Wa-pa-pa-pa-pa-pa-pow! You're as cunning as a fox, helping me rediscover my hidden lair!",
  hedgehog:
    "Snuffle-snuffle! You've got a sharp mind, like my quills! Now I can find my favorite bugs!",
  lion: "Roar! You've got the heart of a lion, helping me keep track of my pride!",
  monkey:
    "Ee-ee! You're a barrel of fun! Now I won't forget where I hid my bananas!",
  duck: "Quack-quack! You're just ducky! Thanks to you, I won't forget where my pond is!",
  panda:
    "Munch-munch! Bamboo-zling work you did there, helping me find my bamboo forest!",
  pig: "Oink-oink! You're hog-wild smart! Now I can find my mud bath!",
  rabbit:
    "Hop-hop, hooray! Your memory's as fast as a rabbit! Now I won't forget where my carrots are!",
  sheep:
    "Baa-baa! Ewe're aaa-absolutely ama-aaazing! Thanks to you-uu, I found my cozy pa-aaaasture!",
  turtle:
    "Slow and steady wins the race, just like your memory! Now I can find my sunning rock!",
};

export const getAnimalPhrase = (animal: AnimalType) => {
  return animalPhrases[animal];
};

export const getRandomCongratulation = () => {
  const index = Math.floor(Math.random() * CONGRATULATIONS.length);
  return CONGRATULATIONS[index];
};

export const camelToKebab = (str: string): string => {
  return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
};
