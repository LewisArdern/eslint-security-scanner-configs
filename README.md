# eslint-scanner-configs
This project contains config files to turn ESLint into a mini Security Scanner for running static analysis on JavaScript to identify bugs and vulnerabilities.

## Installation
```
install npm - https://nodejs.org/en/
git clone https://github.com//LewisArdern/eslint-security-scanner-configs
cd eslint-security-scanner-configs
npm i eslint eslint-plugin-scanjs-rules eslint-plugin-no-unsanitized 
```
Run the following command 
```
node node_modules\eslint\bin\eslint.js -c example-config.js demo.js
```

## After Completion 

```
npm remove eslint eslint-plugin-scanjs-rules eslint-plugin-no-unsanitized 
```

## Credit
* **Jacob Wilkin** - *For his blog post and initial creation of this config*

