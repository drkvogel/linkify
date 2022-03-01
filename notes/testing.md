


### Manual Testing

In VSCode, do Run -> Start Debugging, or press `f5` - Program will run in new window
Create a editor, paste some text, select, and run extn either with defined shortcut (e.g. `shift+alt+i`) or from command palette (`ctrl+shift+p`, `Linkify`)
`ctrl+shift+f5` to restart debugging

### Automated Testing

[End-to-End Testing VS Code Extensions via Jest: Setting Things Up | by Igor Soloydenko | Medium ](https://medium.com/@soloydenko/end-to-end-testing-vs-code-extensions-via-jest-828e5edfeb75)
>What I quickly realized is that the project uses Mocha framework for describing the tests …while I am in love with Jest. 😭 If I wanted to have Jest in my E2E tests I would have to integrate it myself. Here’s how I did it

### Jest vs Mocha vs Jasmine

[Jest vs Mocha vs Jasmine: Comparing The Top 3 JavaScript Testing Frameworks | LambdaTest ](https://www.lambdatest.com/blog/jest-vs-mocha-vs-jasmine/)
>Jest is an open-source unit testing framework developed by Facebook. Mocha is a JavaScript testing framework that also supports Node.js. In addition, it provides developers with a base test framework with options such as assertion, mocking, and spy libraries. As a result, Mocha is one of the most flexible JavaScript testing libraries.
>Jest is a testing platform built on Jasmine, which originated from Facebook. It offers a selection of advanced features that makes testing just a little bit easier.
>Jasmine provides a clean and simple API for end-to-end JavaScript testing with Node.js or in the browser.

[Jest vs Mocha: Comparing the top 3 Javascript testing frameworks - DEV Community ](https://dev.to/heroku/comparing-the-top-3-javascript-testing-frameworks-2cco)
>Mocha and Jasmine are stronger for testing the back end because they were initially built for Node applications; therefore, they have more back-end tools and documentation available than Jest.
>If you use React, Jest doesn't require many dependencies, if any. However, if you don't want to dig into the react-testing-library, Jest is also compatible with some of the testing specific libraries like Enzyme.
>Jasmine is better suited for Angular.
>Mocha gives you a little more flexibility because it's commonly used for both front-end and back-end testing. You'll have to import several libraries, like Chai, to get it to work with React. While Chai isn't directly connected to React, it is the most commonly used assertion library used with Mocha. Once those dependencies are installed, it's similar to working with Jest.

Mocha it is, then, for nodejs...

testing vscode extensions with mocha - Google Search (https://www.google.com/search?q=testing+vscode+extensions+with+mocha&oq=testing+vscode+extensions+with+mocha&aqs=chrome..69i57.6978j0j7&sourceid=chrome&ie=UTF-8)
[Testing Extensions | Visual Studio Code Extension API ](https://code.visualstudio.com/api/working-with-extensions/testing-extension)
>Visual Studio Code supports running and debugging tests for your extension. These tests will run inside a special instance of VS Code named the Extension Development Host, and have full access to the VS Code API. We refer to these tests as integration tests, because they go beyond unit tests that can run without a VS Code instance.

>In the generated extension, you can use `npm run test` or `yarn test` to run the integration tests that:

Downloads and unzips latest version of VS Code.
Runs the Mocha tests specified by the extension test runner script.

[Testing your VS Code extensions | VS Code Rocks ](https://vscode.rocks/testing/)
[Testing Inside VS Code with Mocha](https://www.youtube.com/watch?v=QsupPG1RGVQ)
[javascript - Run vscode extension unit test](https://stackoverflow.com/questions/60966215/run-vscode-extension-unit-test)



```
2022-03-01 21:49:24 kvogel@kvogel-surface-ubuntu:~/projects/general/projects/repos/linkify ±(master) ✗
❯ npm install
npm WARN old lockfile The package-lock.json file was created with an old version of npm, so supplemental metadata must be fetched from the registry.
npm WARN old lockfile This is a one-time fix-up, please be patient...
npm WARN deprecated uuid@3.3.2: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
npm WARN deprecated request@2.88.0: request has been deprecated, see https://github.com/request/request/issues/3142
npm WARN deprecated har-validator@5.1.3: this library is no longer supported
npm WARN deprecated mkdirp@0.5.1: Legacy versions of mkdirp are no longer supported. Please update to mkdirp 1.x. (Note that the API surface has changed to use Promises in 1.x.)
npm WARN deprecated vscode-test@0.1.5: This package has been renamed to @vscode/test-electron, please update to the new name
npm WARN deprecated debug@4.1.1: Debug versions >=3.2.0 <3.2.7 || >=4 <4.3.1 have a low-severity ReDos regression when used in a Node.js environment. It is recommended you upgrade to 3.2.7 or 4.3.1. (https://github.com/visionmedia/debug/issues/797)
npm WARN deprecated debug@3.2.6: Debug versions >=3.2.0 <3.2.7 || >=4 <4.3.1 have a low-severity ReDos regression when used in a Node.js environment. It is recommended you upgrade to 3.2.7 or 4.3.1. (https://github.com/visionmedia/debug/issues/797)
npm WARN deprecated vscode@1.1.33: This package is deprecated in favor of @types/vscode and vscode-test. For more information please read: https://code.visualstudio.com/updates/v1_36#_splitting-vscode-package-into-typesvscode-and-vscodetest

> linkify@0.1.2 postinstall
> node ./node_modules/vscode/bin/install

Detected VS Code engine version: ^1.32.0
Error installing vscode.d.ts: Error: Request returned status code: 404
Details: <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>Cannot GET /api/releases/stable</pre>
</body>
</html>

npm ERR! code 1
npm ERR! path /home/kvogel/projects/general/projects/repos/linkify
npm ERR! command failed
npm ERR! command sh -c node ./node_modules/vscode/bin/install

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/kvogel/.npm/_logs/2022-03-01T21_49_32_154Z-debug-0.log

❯ vsce --version
2.6.3

❯ ./node_modules/vscode/bin/install
Error installing vscode.d.ts: Missing VSCode engine declaration in package.json.
```
but in `package.json`:
```json
	"engines": {
		"vscode": "^1.32.0"
	},
```

VSCode version:
```
Version: 1.64.2
Commit: f80445acd5a3dadef24aa209168452a3d97cc326
Date: 2022-02-09T22:02:29.527Z
Electron: 13.5.2
Chromium: 91.0.4472.164
Node.js: 14.16.0
V8: 9.1.269.39-electron.0
OS: Linux x64 5.16.11-surface snap
```