




// IMPORTS

const path = require('path');
const exec = require('child_process').execSync;





// EXECUTABLE AND ARGS

let extension = '';

if (process.platform === 'win32') {
  extension = '.cmd';
}

let executable = path.join('.', 'node_modules', '.bin', 'sass-lint') + extension;

let args = [
  // config file
  '-c windows.yml',
  // do not exit on errors
  '-q',
  // verbose
  '-v',
  // format as json
  '-f json',
  // throw error if more than 5000 warnings
  '--max-warnings 5000'
].join(' ');

let executableAndArgs = executable + ' ' + args;





// RUN AND GET RESULTS

let results = '';

try {
  results = exec(executableAndArgs);
} catch (err) {
  if (err && err.stdout) {
    results = String(err.stdout);
  }
}

results = JSON.parse(results);





// COMPUTE TOTALS

let totalErrors = 0;
let totalWarnings = 0;

results.forEach(function (result) {
  totalErrors = totalErrors + result.errorCount;
  totalWarnings = totalWarnings + result.warningCount;
});





// COMPARE AGAINST EXPECTATIONS

const expectedErrors = 184;
const expectedWarnings = 497;

if (totalErrors === expectedErrors && totalWarnings === expectedWarnings) {
  console.log('Lint ran successfully.');
} else {
  let message = [
    'Sass-Lint results discrepancy.',
    '  ERRORS:',
    '    ∙ Expected: ' + expectedErrors,
    '    ∙ Actual: ' + totalErrors,
    '  WARNINGS:',
    '    ∙ Expected: ' + expectedWarnings,
    '    ∙ Actual: ' + totalWarnings
  ].join('\n');
  console.log(message);

  throw 'TEST FAILED';
}
