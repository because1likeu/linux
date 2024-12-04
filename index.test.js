const { sum, abs } = require("./index.js"); // abs 추가

// sum 함수 테스트
test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds 100 - 50 to equal 50", () => {
  expect(sum(100, -50)).toBe(50);
});

// abs 함수 테스트
test("absolute sum of 100 and -50 to equal 150", () => {
  expect(abs(100, -50)).toBe(150);
});

test("absolute sum of -100 and 50 to equal 150", () => {
  expect(abs(-100, 50)).toBe(150);
});
