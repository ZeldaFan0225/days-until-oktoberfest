/**
 * Options for daysUntilOktoberfest calculation.
 * @interface
 * @property {Date} [today] - Optional override for the current date (useful for testing or custom calculations).
 */
export interface DaysUntilOptions {
    /**
     * Optional override for the current date. Useful for testing or custom calculations.
     */
    today?: Date;
}

/**
 * Computes the start and end dates of Oktoberfest for a given year.
 *
 * Start: First Saturday after September 15.
 * End: The later of October 3rd or the first Sunday in October.
 *
 * @param {number} year - The year for which to calculate Oktoberfest dates.
 * @returns {{start: Date, end: Date}} - The start and end dates of Oktoberfest.
 */
export function getOktoberfestDates(year: number): { start: Date; end: Date } {
    const september16 = new Date(year, 8, 16);
    const octoberFirst = new Date(year, 9, 1);

    // Find first Saturday after Sept 15
    let start = new Date(september16);
    if(start.getDay() !== 6) {
        start.setDate(start.getDate() + (6 - start.getDay()));
    }

    // Find first Sunday in October
    let firstSundayOct = new Date(octoberFirst);
    if (firstSundayOct.getDay() !== 0) {
        firstSundayOct.setDate(firstSundayOct.getDate() + (7 - firstSundayOct.getDay()));
    }

    // October 3rd
    let octoberThird = new Date(year, 9, 3);

    // End is the later of October 3rd or first Sunday in October
    let end = firstSundayOct > octoberThird ? firstSundayOct : octoberThird;

    return { start, end };
}

/**
 * Calculates the number of days until the next Oktoberfest in Munich.
 * Returns 0 if Oktoberfest is currently happening.
 *
 * @param {DaysUntilOptions} [options] - Optional configuration object.
 * @returns {number} - Number of days until next Oktoberfest, or 0 if ongoing.
 */
export function daysUntilOktoberfest(options: DaysUntilOptions = {}): number {
    const today = options.today || new Date();
    const todayNormalized = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const year = todayNormalized.getFullYear();

    let { start, end } = getOktoberfestDates(year);

    if (todayNormalized > end) {
        ({ start, end } = getOktoberfestDates(year + 1));
    }

    if (todayNormalized >= start && todayNormalized <= end) return 0;

    const diffTime = start.getTime() - todayNormalized.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

export default daysUntilOktoberfest;
