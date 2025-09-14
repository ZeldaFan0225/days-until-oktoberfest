#!/usr/bin/env node

const { daysUntilOktoberfest } = require('../dist/index');

const days = daysUntilOktoberfest();
console.log(`Days until Oktoberfest: ${days}`);