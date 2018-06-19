# TJW-SassLint-Rules

### *The Jared Wilcurt's very aggressive Sass Linting rules for obsessives.*

#### **From the makers of: [Scout-App](http://scout-app.io)**

These linting rules are designed to be very strict. Much thought has been placed in every rule. This includes a strict ordering of CSS properties. However not every single CSS property is included in this ruleset. If you find you are using a CSS property that is not in the list, please create an issue on GitHub to report it and it will be added into the ruleset.

These linting rules work on both `.sass` and `.scss` files, though if you are using these rules, you should probably be using `.sass` files primarily as they are stricter by default and less error proned (see pros/cons below).


* * *


## How to use this:

1. `npm install --save-dev tjw-sasslint-rules sass-lint sass-lint-auto-fix node-sass`
1. In the `"scripts":` section of your `package.json` add in these two lines:
   * `"sasslint": "sass-lint -c node_modules/tjw-sasslint-rules/tjwsasslint.yml '**/*.sass, **/*.scss' -v -f table",`
   * `"sassfix": "sass-lint-auto-fix '**/*.sass, **/*.scss' -c node_modules/tjw-sasslint-rules/tjwsasslint.yml"`
   * **Note:** You can change the `'**/*.sass, **/*.scss'` to be specific to your project's Sass folder. Example: `'src/sass/**/*.sass, src/sass/**/*.scss'`
1. `npm run sassfix` - This will automatically fix anything it can in accordance with the rules
1. `npm run sasslint` - This will show you the remaining lines of code in violation of the linting rules for you to manually correct.


## Windows Instructions

Because of a [bug in Sass-Lint](https://github.com/sasstools/sass-lint/issues/1192), Windows machines cannot pass in the location of their Sass files in the CLI. The only work around is to set the value in a `yml` file.

1. Create a file called `.sass-lint.yml` and set it up like so:
   ```yml
   options:
     config-file: node_modules/tjw-sasslint-rules/tjwsasslint.yml
   files:
     # Note: You can change the '**/*.s+(a|c)ss' to be specific to your project's Sass folder. Example: 'src/sass/**/*.s+(a|c)ss'
     include: '**/*.s+(a|c)ss'
   ```
1. `npm install --save-dev tjw-sasslint-rules sass-lint sass-lint-auto-fix node-sass`
1. In the `"scripts":` section of your `package.json` add in these two lines:
   * `"sasslint": "sass-lint -c .sass-lint.yml -v -f table",`
   * `"sassfix": "sass-lint-auto-fix -c .sass-lint.yml"`
1. `npm run sassfix` - This will automatically fix anything it can in accordance with the rules.
1. `npm run sasslint` - This will show you the remaining lines of code in violation of the linting rules for you to manually correct.


* * *


## A Note on sass-lint-auto-fix

1. It doesn't autofix very much, if you know of a better sass-lint auto-fixer, let me know.
1. Keep running it until you get the same results back. Each re-run may fix additional things.


* * *


### Pros/Cons of Sass vs Scss vs CSS

**Benefits of Sass over Scss:**

* Enforced coding format (indented syntax)
* Consistency across all files
* Less error proned especially during refactoring (due to lack of `{}`)
* Faster to write due to auto-complete, and removal of `;` which can cause errors
* Easier to read as it forces all files to look the same

**Benefits of Scss over Sass:**

* All valid CSS files are valid Scss files
* Allows for a variety of control for how to display or structure styles (particularly useful for tabular-like data)

**Benefits of Sass or Scss over CSS:**

* Automatic Concatenation and Minification on save
* Modular code
* Nesting
* Precomputed Variables
* Mixins and Mixin Libraries
* Precomputed Math (`width: $height / 2;`)
* Built in color functions (`color: desaturate(#F00, 20%);` or `color: rgba(#FCE, 0.5);`)
* Custom Functions
* Loops
* Sass can be converted to Scss with no loss, or processed to CSS
* Scss can be converted to Sass with no loss, or processed to CSS


* * *


### How you can help

1. First and foremost, contribute to the other tools that this uses:
   * https://github.com/sasstools/sass-lint
   * https://github.com/srowhani/sass-lint-auto-fix
   * Specifically, see if you can fix [this bug](https://github.com/sasstools/sass-lint/issues/1192), or improve any part of the auto-fixer to fix more things, or to not require being re-ran multiple times.
1. If you find any CSS properties missing from this rule-set, [report it](https://github.com/TheJaredWilcurt/tjw-sasslint-rules/issues).
1. Use `.sass` syntax in your code examples online.