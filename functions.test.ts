const { shuffleArray } = require("./utils");

describe("shuffleArray should", () => {
  let arr = [1, 2, 3, 4];
  let rar = shuffleArray(arr);
  test(`return array`, () => {
    expect(Array.isArray(rar)).toBe(true);
  });

  test(`return same length array`, () => {
    expect(rar.length).toEqual(arr.length);
  });
});
