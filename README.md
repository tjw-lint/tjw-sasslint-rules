# TJW-SassLint-Rules

[![Build Status](https://travis-ci.org/TheJaredWilcurt/tjw-sasslint-rules.svg?branch=master)](https://travis-ci.org/TheJaredWilcurt/tjw-sasslint-rules)

### *The Jared Wilcurt's very aggressive Sass Linting rules for obsessives.*

#### **From the makers of: [Scout-App](http://scout-app.io)**

These linting rules are designed to be **very strict**. Much thought has been placed in every rule, and a comment has been added over each explaining what it does. The rules work on both `.sass` and `.scss` files, though if you are using these rules, you should probably be using `.sass` files primarily as they are stricter by default and less error proned (see pros/cons at the bottom). These rules include a strict ordering of CSS properties, detailed below.


* * *


**Property Sort Order**:

The order by which you sort properties matters for consistency, predictability, and compression (gzip). I have carefully analyzed the most popular approaches, found their flaws, and improved on them.

* **Improvements made over SMACSS/Recess/Concentric:**
  * **Be comprehensive**: I've included all CSS properties supported by (or intended to be supported by) current major browsers. Meaning **every single CSS property** from W3C and MDN.
  * **Include Vendor-Prefixes**: I only include modern (2019) vendor prefixes - Desktop: Chrome/FF/Safari/Edge/IE11, Android: Chrome/FF, iOS: Safari
  * **Remove Outdated/deprecated properties**: Old vendor prefixes that are not required anymore, or deprecated CSS properties no longer supported by any browser are not included in my set.
  * **Out-of-order errors**: In my set vendor-prefixes always occur on the line prior to their native counterparts.
  * **No dupes!**: A duplicate property introduces confusion for the linter and the developer. I have an automated test to insure no dupes ever enter this set.
  * **Consensus and versioning**: There is only one official version of these rules. There are no competing versions of the TJW ruleset. It is versioned on GitHub and npm.

For the purposes of linting, the more properties you have documented the better.

Rule Set    | Amount of properties | Dupes
:--         | --:                  | :--:
TJW         | 456                  | 0
SMACSS      | 201                  | 2
Concentric  | 170                  | ?
Recess      | 161                  | 0

(`?` - It is hard to denote dupes as there are competing versions of Concentric)

If you find you are using a CSS property that is not in the list, please create an issue on GitHub to report it and it will be added into the ruleset.


* * *


## How to use this:

### Linux/OSX Instructions

1. `npm install --save-dev tjw-sasslint-rules sass-lint sass-lint-auto-fix node-sass`
1. In the `"scripts":` section of your `package.json` add in these two lines:
   * `"sasslint": "sass-lint -c node_modules/tjw-sasslint-rules/tjwsasslint.yml '**/*.sass, **/*.scss' -v -f table",`
   * `"sassfix": "sass-lint-auto-fix '**/*.sass, **/*.scss' -c node_modules/tjw-sasslint-rules/tjwsasslint.yml"`
   * **Note:** You can change the `'**/*.sass, **/*.scss'` to be specific to your project's Sass folder. Example: `'src/sass/**/*.sass, src/sass/**/*.scss'`
1. `npm run sassfix` - This will automatically fix anything it can in accordance with the rules
1. `npm run sasslint` - This will show you the remaining lines of code in violation of the linting rules for you to manually correct.


### Windows Instructions

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


### Pros/Cons of Sass vs SCSS vs CSS

**Benefits of Sass over SCSS:**

* Enforced coding format (indented syntax)
* Consistency across all files
* Less error proned especially during refactoring (due to lack of `{}`)
* Faster to write due removal of `{}` and `;`( which can cause errors)
* Easier to read as it forces all files to look the same
* Better for writing rules and nested rules

**Benefits of SCSS over Sass:**

* All valid CSS files are valid SCSS files
* Allows for variety of control for how to display or structure rules (particularly useful for tabular-like data in rules)
* Better for long or heavily nested lists/maps
* More familiar for beginners

**Benefits of Sass or SCSS over CSS:**

* Automatic concatenation and minification on save
* Modular/Reusable code
* Nesting (possibly coming to native CSS in the future)
* Precomputed Variables (Live variables already exist in Sass/SCSS/CSS)
* Mixins and Mixin Libraries (See: [family.scss](https://lukyvj.github.io/family.scss/) for a good example)
* Precomputed Math (`width: $height / 2;`)
* Built in color functions (`color: desaturate(#F00, 20%);` or `color: rgba(#FCE, 0.5);`)
* Custom Functions
* Loops

**Other Info:**

* Sass can be converted to SCSS with no loss, or processed to CSS
* SCSS can be converted to Sass with no loss, or processed to CSS
* Sass, SCSS, and CSS all have auto-complete and syntax highlighting in all editors of merit


* * *


### How you can help

1. First and foremost, contribute to the other tools that this uses:
   * https://github.com/sasstools/sass-lint
   * https://github.com/srowhani/sass-lint-auto-fix
   * Specifically, see if you can fix [this bug](https://github.com/sasstools/sass-lint/issues/1192), or improve any part of the auto-fixer to fix more things, or to not require being re-ran multiple times.
1. If you find any CSS properties missing from this rule-set, [report it](https://github.com/TheJaredWilcurt/tjw-sasslint-rules/issues).
1. Use `.sass` syntax in your code examples online.
