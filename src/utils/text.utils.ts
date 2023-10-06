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

export const getRandomCongratulation = () => {
  const index = Math.floor(Math.random() * CONGRATULATIONS.length);
  return CONGRATULATIONS[index];
};

export const camelToKebab = (str: string): string => {
  return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
};
