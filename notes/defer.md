
## defer

[Publishing Extension  Visual Studio Code Extension API ](https://code.visualstudio.com/api/working-with-extensions/publishing-extension#packaging-extensions)
https://code.visualstudio.com/api/references/vscode-api#SelectionRange
2019-10-11 19:28:18
[Configuring automated security fixes - GitHub Help ](https://help.github.com/en/articles/configuring-automated-security-fixes)
[npm semantic version calculator ](https://semver.npmjs.com/)
[Semantic Versioning 2.0.0  Semantic Versioning ](https://semver.org/)


### DeprecationWarning: Buffer() is deprecated

>(node:9529) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.

```
2022-01-22 04:46:31 kvogel@kvogel-surface-ubuntu:~/projects/general/projects/repos/linkify ±(master) ✗
❯ code --install-extension linkify-0.1.2.vsix
Installing extensions...
(node:37129) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
(Use `code --trace-deprecation ...` to show where the warning was created)
Extension 'linkify-0.1.2.vsix' was successfully installed.
```

### Using 'yarn' instead of 'npm'

```
2022-01-22 00:59:16 kvogel@kvogel-surface-ubuntu:~/projects/general/projects/repos/linkify ±(master) ✗
❯ which vsce
vsce not found
❯ npm i -g vsce
...
Reshimming asdf nodejs...
❯ vsce package
 INFO  Detected presence of yarn.lock. Using 'yarn' instead of 'npm' (to override this pass '--no-yarn' on the command line).
 ERROR  Command failed: yarn list --prod --json
/bin/sh: 1: yarn: not found
❯ which yarn
yarn not found
❯ npm i -g yarn
...
Reshimming asdf nodejs...
❯ vsce package
```

### The Great Suspender

installed [The Great Suspender](https://chrome.google.com/webstore/detail/the-great-suspender/klbibkeccnjlkjkiokjodocebajanakg/)
  [chrome-tabs.md](/dev/apps/chrome/chrome-tabs.md)

suspended tabs in TabsOutliner are of form:
Page Title (chrome-extension://klbibkeccnjlkjkiokjodocebajanakg/suspended.html#ttl=Title&pos=x&uri=http://domain.com/path)
```
Winamp for Mac | Winamp for Windows, Mac, Android (chrome-extension://klbibkeccnjlkjkiokjodocebajanakg/suspended.html#ttl=Winamp%20for%20Mac%20%7C%20Winamp%20for%20Windows%2C%20Mac%2C%20Android&pos=667&uri=http://www.mywinamp.com/winamp-for-mac/)
```



```js
/* sample text for testing:
asdfafd
	asdfafd
		asdfasdf(http)
		asdfafd
		[asd]fds (https://asdfasdfds)
[asd]fds    (https://asdfasdfds)
		sdf
*/
```


### Install from cli doesn't work on Windows/WSL

```
cbird@CHRISBIRD10:/mnt/c/Users/birdc/Projects/linkify$ code --install-extension linkify-0.0.1.vsix
Installing VS Code Server b37e54c98e1a74ba89e03073e5a3761284e3ffb0
Downloading: 100%
Unpacking: 100%
Ignoring option install-extension: not supported for code
```
can install `.vsix` from Code menu instead.

[--install-extension wsl](https://www.google.com/search?q=--install-extension+wsl&uact=5)
[wsl vscode install extension](https://www.google.com/search?q=wsl+vscode+install+extension)
[Run Visual Studio Code in Windows Subsystem for Linux ](https://code.visualstudio.com/remote-tutorials/wsl/run-in-wsl)
[An In Depth Tutorial on Linux Development on Windows with WSL and Visual Studio Code  Windows Command Line ](https://devblogs.microsoft.com/commandline/an-in-depth-tutorial-on-linux-development-on-windows-with-wsl-and-visual-studio-code/)
[Using Visual Studio Code with Windows Subsystem for Linux - Shun's Vineyard ](https://shunsvineyard.info/2019/01/27/using-visual-studio-code-with-windows-subsystem-for-linux/)
