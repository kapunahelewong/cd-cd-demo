import { describe, expect, it } from "vitest";
import { greet } from "../src/greeting.js";

describe("greet", () => {
  it("greets a given name", () => {
    expect(greet("Kapunahele")).toBe("Hello, Kapunahele!");
  });

  it("throws on an empty name", () => {
    expect(() => greet("   ")).toThrow("name must not be empty");
  });
});
