# eslint-scanner-configs
This project contains config files to turn ESLint into a mini Security Scanner for running static analysis on JavaScript to identify bugs and vulnerabilities.

## Installation
```
install npm - 
npm i -g eslint eslint-plugin-scanjs-rules eslint-plugin-no-unsanitized 
git clone https://github.com//LewisArdern/eslint-security-scanner-configs
```
Run the folowing command 
```
$ eslint -c example-config.js demo.js
```

## Usage 
```
cd eslint-security-scanner-configs
eslint -c eslintrc-light.js ./myjavascript.js
```


## Credit
* **Jacob Wilkin** - *For his blog post and initial creation of this config*

