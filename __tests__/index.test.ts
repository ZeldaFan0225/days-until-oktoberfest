/**
 * @fileoverview Tests for daysUntilOktoberfest
 */
import daysUntilOktoberfest, { getOktoberfestDates } from "../src/index";

describe("daysUntilOktoberfest", () => {
    it("returns correct days for a date before Oktoberfest", () => {
        // September 1, 2025
        const today = new Date(2025, 8, 1);
        const days = daysUntilOktoberfest({ today });
        expect(typeof days).toBe("number");
        expect(days).toBeGreaterThan(0);
    });

    it("returns 0 during Oktoberfest", () => {
        // Use a date during Oktoberfest 2025
        const today = new Date(2025, 8, 20); // September 20, 2025
        const days = daysUntilOktoberfest({ today });
        expect(days).toBe(0);
    });

    it("returns correct days after Oktoberfest", () => {
        // December 1, 2025
        const today = new Date(2025, 11, 1);
        const days = daysUntilOktoberfest({ today });
        expect(typeof days).toBe("number");
        expect(days).toBeGreaterThan(0);
    });

    it("works for edge case: October 3rd is later than first Sunday", () => {
        // For 2025, October 3rd is Friday, first Sunday is October 5th
        const today = new Date(2025, 9, 4); // October 4, 2025
        const days = daysUntilOktoberfest({ today });
        expect(days).toBe(0);
    });

    it("works for edge case: first Sunday is later than October 3rd", () => {
        // For 2024, October 3rd is Thursday, first Sunday is October 6th
        const today = new Date(2024, 9, 5); // October 5, 2024
        const days = daysUntilOktoberfest({ today });
        expect(days).toBe(0);
    });

    it("returns 0 for the first day of Oktoberfest 2025", () => {
        const { start } = getOktoberfestDates(2025);
        const days = daysUntilOktoberfest({ today: start });
        expect(days).toBe(0);
    });

    it("returns correct days for the last day before Oktoberfest 2025", () => {
        const { start } = getOktoberfestDates(2025);
        const dayBefore = new Date(start);
        dayBefore.setDate(start.getDate() - 1);
        const days = daysUntilOktoberfest({ today: dayBefore });
        expect(days).toBe(1);
    });

    it("returns 0 for the last day of Oktoberfest 2025", () => {
        const { end } = getOktoberfestDates(2025);
        const days = daysUntilOktoberfest({ today: end });
        expect(days).toBe(0);
    });
});
