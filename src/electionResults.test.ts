import {
  electionResults,
  readInputs,
  readConstituency,
  getVotes,
  getConstituencies,
  addVotes,
  getPercentages,
} from "../src/electionResults";

describe("electionResults", () => {
  it("returns something", () => {
    expect(electionResults()).toBe(0);
  });
});

describe("readInputs", () => {
  it("can read a file successfully", () => {
    expect(readInputs("src/electionResults.csv").length > 0).toBeTruthy();
  });
});

describe("readConstituency", () => {
  it("returns constituency name", () => {
    const lines = readInputs("src/electionResults.csv");
    expect(readConstituency(lines[0])).toEqual("Cardiff West");
  });
});

describe("getVotes", () => {
  it("returns an array of numbers", () => {
    const lines = readInputs("src/electionResults.csv");
    const line = lines[0].split(",");
    const expectedArray = [11014, 17803, 4923, 2069];
    expect(getVotes(line)).toEqual(expectedArray);
  });
});

describe("getConstituencies", () => {
  it("return an array of constituency names", () => {
    const lines = readInputs("src/electionResults.csv");
    const line = lines[0].split(",");
    const expectedArray = [
      "Conservative Party",
      "Labour Party",
      "UKIP",
      "Liberal Democrats",
    ];
    expect(getConstituencies(line)).toEqual(expectedArray);
  });
});

describe("addVotes", () => {
  it("returns total number of votes", () => {
    const lines = readInputs("src/electionResults.csv");
    const line = lines[0].split(", ");
    const returnedVotes = getVotes(line);
    expect(addVotes(returnedVotes)).toBe(35809);
  });
});

describe("getPercentages", () => {
  it("returns percentage of each vote", () => {
    const lines = readInputs("src/electionResults.csv");
    const line = lines[0].split(", ");
    const returnedVotes = getVotes(line);
    const expectedPercentages = [30.76, 49.72, 13.75, 5.78];
    expect(getPercentages(returnedVotes)).toEqual(expectedPercentages);
  });
});
