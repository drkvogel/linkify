


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
In fact, in `test/extension.test.js`:
```js
/* global suite, test */

//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
const assert = require('assert');

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
// const vscode = require('vscode');
// const myExtension = require('../extension');

// Defines a Mocha test suite to group tests of similar kind together
suite("Extension Tests", function() {

	// Defines a Mocha unit test
	test("Something 1", function() {
		assert.equal(-1, [1, 2, 3].indexOf(5));
		assert.equal(-1, [1, 2, 3].indexOf(0));
	});
});
```


[Testing your VS Code extensions | VS Code Rocks ](https://vscode.rocks/testing/)
>This will run mocha on all files in the src/test folder that match `*.test.ts`. This will also work for any folder nested in the test folder. This is useful so if you want to have separate folders for different types of tests or different subsystems, they can be separated, and it will still work fine.

>open the Debug tab in VS Code and choose the “Extension Tests” launch configuration. This will open an instance of VS Code with your extension installed and then run any test suite.

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

[Error installing vscode.d.ts: Request returned status code: 404 · Issue #120064 · microsoft/vscode ](https://github.com/microsoft/vscode/issues/120064)
>updating the package reference fixed it.
[fix npm install issue: https://github.com/microsoft/vscode/issues/120064 · Tatsinnit/vscode-aks-tools@f7e91b3 ](https://github.com/Tatsinnit/vscode-aks-tools/commit/f7e91b31923a332d222288383abeea67501993d5)

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
updated `package.json`:
```json
	"engines": {
		"vscode": "^1.64.2"
	},
```

Now:
```
2022-03-01 22:01:17 kvogel@kvogel-surface-ubuntu:~/projects/general/projects/repos/linkify ±(master) ✗
❯ npm run test

> linkify@0.1.2 test
> node ./node_modules/vscode/bin/test

### VS Code Extension Test Run ###

Current working directory: /home/kvogel/projects/general/projects/repos/linkify
Downloading VS Code 1.64.2 into .vscode-test/vscode-1.64.2.
Downloading VS Code from: https://update.code.visualstudio.com/1.64.2/linux-x64/stable
Downloaded VS Code 1.64.2
Running extension tests: /home/kvogel/projects/general/projects/repos/linkify/.vscode-test/vscode-1.64.2/VSCode-linux-x64/code /home/kvogel/projects/general/projects/repos/linkify/test --extensionDevelopmentPath=/home/kvogel/projects/general/projects/repos/linkify --extensionTestsPath=/home/kvogel/projects/general/projects/repos/linkify/test --locale=en
[main 2022-03-01T22:02:29.050Z] Running extension tests from the command line is currently only supported if no other instance of Code is running.

[main 2022-03-01T22:02:29.057Z] Error: Running extension tests from the command line is currently only supported if no other instance of Code is running.
    at ne.claimInstance (/home/kvogel/projects/general/projects/repos/linkify/.vscode-test/vscode-1.64.2/VSCode-linux-x64/resources/app/out/vs/code/electron-main/main.js:77:5443)
    at processTicksAndRejections (internal/process/task_queues.js:93:5)
    at async /home/kvogel/projects/general/projects/repos/linkify/.vscode-test/vscode-1.64.2/VSCode-linux-x64/resources/app/out/vs/code/electron-main/main.js:77:2282
    at async ne.startup (/home/kvogel/projects/general/projects/repos/linkify/.vscode-test/vscode-1.64.2/VSCode-linux-x64/resources/app/out/vs/code/electron-main/main.js:77:2151)

Tests exited with code: 1
```
quit vscode and ran `npm run test` from terminal:
```
2022-03-01 22:25:18 kvogel@kvogel-surface-ubuntu:~/projects/general/projects/repos/linkify ±(master) ✗
❯ npm run test

> linkify@0.1.2 test
> node ./node_modules/vscode/bin/test
### VS Code Extension Test Run ###
Current working directory: /home/kvogel/projects/general/projects/repos/linkify
Found .vscode-test/vscode-1.64.2. Skipping download.
Running extension tests: /home/kvogel/projects/general/projects/repos/linkify/.vscode-test/vscode-1.64.2/VSCode-linux-x64/code /home/kvogel/projects/general/projects/repos/linkify/test --extensionDevelopmentPath=/home/kvogel/projects/general/projects/repos/linkify --extensionTestsPath=/home/kvogel/projects/general/projects/repos/linkify/test --locale=en
[64871:0301/222846.910253:ERROR:sandbox_linux.cc(374)] InitializeSandbox() called with multiple threads in process gpu-process.
[main 2022-03-01T22:28:47.622Z] update#setState idle
[main 2022-03-01T22:28:47.842Z] ExtensionHostStarterWorker created
[main 2022-03-01T22:28:51.987Z] Starting extension host with pid 65276 (fork() took 31 ms).
[main 2022-03-01T22:28:51.989Z] ExtensionHostStarterWorker.start() took 38 ms.
IExtensionHostStarter.start() took 62 ms.
(node:65276) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
(Use `code --trace-deprecation ...` to show where the warning was created)
No search provider registered for scheme: file, waiting
Could not find category with ID: ms-vscode.cpptools#cppWelcome: Error: Could not find category with ID: ms-vscode.cpptools#cppWelcome
    at vscode-file://vscode-app/home/kvogel/projects/general/projects/repos/linkify/.vscode-test/vscode-1.64.2/VSCode-linux-x64/resources/app/out/vs/workbench/workbench.desktop.main.js:2820:93977
    at o.fire (vscode-file://vscode-app/home/kvogel/projects/general/projects/repos/linkify/.vscode-test/vscode-1.64.2/VSCode-linux-x64/resources/app/out/vs/workbench/workbench.desktop.main.js:67:1712)
    at N.progressStep (vscode-file://vscode-app/home/kvogel/projects/general/projects/repos/linkify/.vscode-test/vscode-1.64.2/VSCode-linux-x64/resources/app/out/vs/workbench/workbench.desktop.main.js:1710:28659)
    at N.registerDoneListeners (vscode-file://vscode-app/home/kvogel/projects/general/projects/repos/linkify/.vscode-test/vscode-1.64.2/VSCode-linux-x64/resources/app/out/vs/workbench/workbench.desktop.main.js:1710:31199)
    at vscode-file://vscode-app/home/kvogel/projects/general/projects/repos/linkify/.vscode-test/vscode-1.64.2/VSCode-linux-x64/resources/app/out/vs/workbench/workbench.desktop.main.js:1710:29517
    at Array.forEach (<anonymous>)
    at N._registerWalkthrough (vscode-file://vscode-app/home/kvogel/projects/general/projects/repos/linkify/.vscode-test/vscode-1.64.2/VSCode-linux-x64/resources/app/out/vs/workbench/workbench.desktop.main.js:1710:29299)
    at vscode-file://vscode-app/home/kvogel/projects/general/projects/repos/linkify/.vscode-test/vscode-1.64.2/VSCode-linux-x64/resources/app/out/vs/workbench/workbench.desktop.main.js:1710:26684
    at async Promise.all (index 0)
    at async N.registerExtensionWalkthroughContributions (vscode-file://vscode-app/home/kvogel/projects/general/projects/repos/linkify/.vscode-test/vscode-1.64.2/VSCode-linux-x64/resources/app/out/vs/workbench/workbench.desktop.main.js:1710:24220)
    at async Promise.all (index 0)
    at async m._handler (vscode-file://vscode-app/home/kvogel/projects/general/projects/repos/linkify/.vscode-test/vscode-1.64.2/VSCode-linux-x64/resources/app/out/vs/workbench/workbench.desktop.main.js:1710:20596)
rejected promise not handled within 1 second: Error: ENOENT: no such file or directory, open '/home/kvogel/.config/Code/User/globalStorage/vscodevim.vim/.registers'
stack trace: Error: ENOENT: no such file or directory, open '/home/kvogel/.config/Code/User/globalStorage/vscodevim.vim/.registers'
ENOENT: no such file or directory, open '/home/kvogel/.config/Code/User/globalStorage/vscodevim.vim/.registers': Error: ENOENT: no such file or directory, open '/home/kvogel/.config/Code/User/globalStorage/vscodevim.vim/.registers'
[File Watcher (parcel)] ignoring a path for watching who's parent is already watched: /home/kvogel/projects/general/projects/repos/linkify/test
  Extension Tests
    ✓ Something 1
  1 passing (2s)
[main 2022-03-01T22:29:15.853Z] Waiting for extension host with pid 65276 to exit.
[main 2022-03-01T22:29:15.931Z] Extension host with pid 65276 exited with code: 0, signal: null.
Tests exited with code: 0
```
so it does run the tests now, but not while vscode is running - which is a PITA

Error: Running extension tests from the command line is currently only supported if no other instance of Code is running. - Google Search (https://www.google.com/search?q=Error%3A+Running+extension+tests+from+the+command+line+is+currently+only+supported+if+no+other+instance+of+Code+is+running.&oq=Error%3A+Running+extension+tests+from+the+command+line+is+currently+only+supported+if+no+other+instance+of+Code+is+running.&aqs=chrome..69i57j69i58.1215j0j7&sourceid=chrome&ie=UTF-8)
[Testing Extensions | Visual Studio Code Extension API ](https://code.visualstudio.com/api/working-with-extensions/testing-extension)
[Make it possible to run extension tests while VS Code is running · Issue #57 · microsoft/vscode-test ](https://github.com/microsoft/vscode-test/issues/57)
[Can run tests even when VS Code is running if `--user-data-dir` is specified or, the version is different. · Issue #58 · microsoft/vscode-test ](https://github.com/microsoft/vscode-test/issues/58)
[https://raw.githubusercontent.com/microsoft/vscode-docs/vnext/api/working-with-extensions/testing-extension.md ](https://raw.githubusercontent.com/microsoft/vscode-docs/vnext/api/working-with-extensions/testing-extension.md)
[Unable to run extension test from command line when vscode-insider is open · Issue #112793 · microsoft/vscode ](https://github.com/microsoft/vscode/issues/112793)
