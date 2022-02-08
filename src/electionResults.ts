import { readFileSync } from "fs";

const partyNames = {
  C: "Conservative Party",
  L: "Labour Party",
  UKIP: "UKIP",
  LD: "Liberal Democrats",
  G: "Green Party",
  Ind: "Independent",
  SNP: "SNP",
};

export function readInputs(file: string): string[] {
  const fileContent = readFileSync(file).toString();
  const lines = fileContent.split(/\r?\n/);

  return lines;
}

export const electionResults = () => {
  return 0;
};

export const readConstituency = (line: string) => {
  return line.split(",")[0];
};

export const getVotes = (line: string[]) => {
  const returnedVotes = [];
  for (let i = 1; i < line.length; i += 2) {
    returnedVotes.push(parseInt(line[i]));
  }
  return returnedVotes;
};

export const getConstituencies = (line: string[]) => {
  const returnedConstituencies = [];
  for (let i = 2; i < line.length; i += 2) {
    const code = line[i].trim();
    //@ts-ignore
    returnedConstituencies.push(partyNames[code]);
  }
  return returnedConstituencies;
};

export const addVotes = (returnedVotes: number[]) => {
  return returnedVotes.reduce((a, b) => a + b);
};

export const getPercentages = (returnedVotes: number[]): number[] => {
  //@ts-ignore
  const returnedPercentages = [];
  const totalVotes = addVotes(returnedVotes);

  returnedVotes.map((vote) => {
    const result = ((vote / totalVotes) * 100).toFixed(2);
    returnedPercentages.push(parseFloat(result));
  });
  //@ts-ignore
  return returnedPercentages;
};
