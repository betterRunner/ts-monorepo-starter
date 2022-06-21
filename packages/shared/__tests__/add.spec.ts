import { add } from "../src";

test("test", () => {
  const res = add(1, 2);
  expect(res).toBe(3);
});
