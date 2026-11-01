import { describe, it, expect } from "vitest";
import { eventStatus } from "./site";

describe("eventStatus", () => {
  const now = new Date("2026-11-01T12:00:00");
  it("uses fallback when date is not set", () => {
    expect(eventStatus({ date: null, fallbackStatus: "past" }, now)).toBe("past");
  });
  it("marks a past date as past, never upcoming", () => {
    expect(eventStatus({ date: "2025-03-01", fallbackStatus: "upcoming" }, now)).toBe("past");
  });
  it("marks a future date as upcoming", () => {
    expect(eventStatus({ date: "2026-12-05", fallbackStatus: "past" }, now)).toBe("upcoming");
  });
});
