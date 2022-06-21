import { demo } from "../src";

test("test", () => {
  const res = demo();
  expect(res).toBe(3);
});
