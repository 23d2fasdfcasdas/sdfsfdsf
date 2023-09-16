function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNumber = getRandomNumber(1, 100);
console.log(`Random number: ${randomNumber}`);
