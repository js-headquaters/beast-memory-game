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
