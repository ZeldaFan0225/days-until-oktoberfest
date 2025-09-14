
# days-until-oktoberfest 🍺🎡🍻

[![npm version](https://img.shields.io/npm/v/days-until-oktoberfest.svg)](https://www.npmjs.com/package/days-until-oktoberfest)
[![npm downloads](https://img.shields.io/npm/dm/days-until-oktoberfest.svg)](https://www.npmjs.com/package/days-until-oktoberfest)

Calculate how many days until the next Oktoberfest in Munich.

Returns `0` if Oktoberfest is currently happening.

## Installation

```bash
npm install days-until-oktoberfest
```


## Quick CLI Usage

You can use the CLI directly with npx:

```bash
npx days-until-oktoberfest
```

## Usage

```ts
import daysUntilOktoberfest from "days-until-oktoberfest";

// Get days until next Oktoberfest (using today's date)
const days = daysUntilOktoberfest();
console.log(`Days until Oktoberfest: ${days}`);

// For a specific date (e.g., December 1, 2025)
const daysFromDate = daysUntilOktoberfest({ today: new Date(2025, 11, 1) });
console.log(`Days until Oktoberfest from Dec 1, 2025: ${daysFromDate}`);
```

### Advanced: Get Oktoberfest start/end dates

```ts
import { getOktoberfestDates } from "days-until-oktoberfest";

const { start, end } = getOktoberfestDates(2025);
console.log(`Oktoberfest 2025 starts on: ${start.toDateString()}`);
console.log(`Oktoberfest 2025 ends on: ${end.toDateString()}`);
```

## API

### `daysUntilOktoberfest(options?: DaysUntilOptions): number`

Returns the number of days until the next Oktoberfest in Munich. Returns `0` if Oktoberfest is currently happening.

#### Options

```ts
interface DaysUntilOptions {
	/** Optional override for the current date. Useful for testing or custom calculations. */
	today?: Date;
}
```

 
### `getOktoberfestDates(year: number): { start: Date; end: Date }`

Returns the start and end dates of Oktoberfest for a given year.

## Contributing

Contributions are welcome! If you have suggestions, improvements, or want to add features, please open a pull request or start a discussion in the repository.

## Reporting Bugs

If you find a bug or incorrect result, please open an issue on the [GitHub Issues page](https://github.com/ZeldaFan0225/days-until-oktoberfest/issues) with details and steps to reproduce.

## Disclaimer

This package is not affiliated with, endorsed by, or associated with the official Oktoberfest or its organizers. The calculation is based on public information and may not reflect official dates or changes. No responsibility is taken for the correctness or accuracy of the results.
