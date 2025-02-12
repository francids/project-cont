import * as fs from "fs/promises";

async function readStates() {
  try {
    const data = await fs.readFile("resources/DGII_RNC.txt", "latin1");
    const lines = data.split("\n");
    const states: string[] = [];

    lines.forEach((line) => {
      const parts = line.trim().split("|");
      if (parts.length > 9) {
        const state = parts[9].trim();
        if (state) {
          states.push(state);
        }
      }
    });

    const statesCount: { [key: string]: number } = {};
    states.forEach((state) => {
      if (statesCount[state]) {
        statesCount[state]++;
      } else {
        statesCount[state] = 1;
      }
    });

    console.log("Estados distintos encontrados:");
    Object.keys(statesCount).forEach((state) => {
      console.log(`- ${state}: ${statesCount[state]} registros`);
    });

    console.log(`\nTotal de estados distintos: ${Object.keys(statesCount).length}`);
  } catch (err) {
    console.error(err);
  }
}

readStates();
