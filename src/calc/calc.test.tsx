import { sum, plus, minus, multiply, division, share } from "./calc";

describe("합계 테스트", () => {
  let num:number[] = [];
  for(let i=1; i<=100; i++){
    num.push(i);
  }
  it("값을 넘기지 않았을 때", () => {
    expect(sum()).toBe(0);
  });

  it("1 + 2 + ... + 100 = 5050", () => {
    expect(sum(...num)).toBe(5050);
  });
})
describe("더하기 테스트", () => {
  it("1 + 2 = 3", () => {
    expect(plus(1,2)).toBe(3);
  }, 1000);

  it("-99999999 + 99999999 = 0", () => {
    expect(plus(-99999999,99999999)).toBe(0);
  });
});

describe("빼기 테스트", () => {
  it("2 - 2 = 0", async () => {
    expect(minus(2, 2)).toBe(0);
  }, 1000);
});

describe("곱하기 테스트", () => {
  it("2 * 7 = 14", async () => {
    expect(multiply(2, 7)).toBe(14);
  }, 1000);

  it("0 * 123894 = 0", async () => {
    expect(multiply(0, 123894)).toBe(0);
  }, 1000);
});

describe("나눴을때 나머지 테스트", () => {
  it("10 % 3 = 1", async () => {
    expect(division(10, 3)).toBe(1);
  });

  it("8 % 2 = 0", async () => {
    expect(division(8, 2)).toBe(0);
  }, 1000);
});

describe("나눴을때 몫 테스트", () => {
  it("10 / 3 = 3", async () => {
    expect(share(10, 3)).toBe(3.3333333333333335);
  });

  it("8 / 2 = 4", async () => {
    expect(share(8, 2)).toBe(4);
  }, 1000);
});