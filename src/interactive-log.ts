const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export default async function runInteractiveLog(message: string, delayMin = 10, delayMax = 100): Promise<void> {
  if (delayMin <= 0)       throw new Error('delaymin must be a positive number')
  if (delayMin > delayMax) throw new Error('delayMax must be greater or equal to delayMin')

  for (const messageCharacters of message) {
    process.stdout.write(messageCharacters);

    const delay = getRandomInt(delayMin, delayMax)

    await sleep(delay);
  }

  process.stdout.write('\n');
}

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1) + min);
}
