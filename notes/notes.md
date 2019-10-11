

[VS Code API  Visual Studio Code Extension API ](https://code.visualstudio.com/api/references/vscode-api)
[VS Code API  Visual Studio Code Extension API ](https://code.visualstudio.com/api/references/vscode-api#TextEditor)




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


2019-10-11 19:28:18
[Configuring automated security fixes - GitHub Help ](https://help.github.com/en/articles/configuring-automated-security-fixes)
[npm semantic version calculator ](https://semver.npmjs.com/)
[Semantic Versioning 2.0.0  Semantic Versioning ](https://semver.org/)

## done

foreach line that has `(http` in it:
  remove [] brackets, ` - YouTube`, ` - Google Search` etc
  trim whitespace
  add square brackets

2019-04-21 23:35:32
bound `linkify` command to `shift+cmd+i`

### Install `vsce`
```
19/04/29 15:46:48 kvogel-macbook-2018:~/Projects/linkify ±(master) 
❯ npm i -g vsce
/usr/local/bin/vsce -> /usr/local/lib/node_modules/vsce/out/vsce
+ vsce@1.59.0
```

### Package with `vsce`
```
19/04/29 15:48:14 kvogel-macbook-2018:~/Projects/linkify ±(master) 
❯ vsce package
DONE  Packaged: /Users/kvogel/Projects/linkify/linkify-0.0.1.vsix (8 files, 16.4KB)
```

2019-04-23 12:19:16

### Install extension from package
```
19/04/23 12:18:18 cjb-tp-macbook:~/Projects/linkify ±(master) 
❯ code --install-extension linkify-0.0.1.vsix
(node:9529) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
Extension 'linkify-0.0.1.vsix' was successfully installed!
```
Doesn't work on Windows/WSL:
```
cbird@CHRISBIRD10:/mnt/c/Users/birdc/Projects/linkify$ code --install-extension linkify-0.0.1.vsix 
Installing VS Code Server b37e54c98e1a74ba89e03073e5a3761284e3ffb0
Downloading: 100%
Unpacking: 100%
Ignoring option install-extension: not supported for code
```
Installed `.vsix` from Code menu instead.

---

take out e.g. `(21) ` from YouTube-
take out e.g. `&rlz=1C5CHFA_enGB838GB838&oq=...&aqs=chrome..69i57.14693j0j7&sourceid=chrome&ie=UTF-8` from Google search query string-

Dependabot security PRs, e.g.:
[Bump lodash from 4.17.11 to 4.17.15 by dependabot · Pull Request #1 · drkvogel/linkify ](https://github.com/drkvogel/linkify/pull/1)

Command line - vscode (https://vscode.readthedocs.io/en/latest/editor/command-line/)
    --install-extension wsl - Google Search (https://www.google.com/search?rlz=1C1FGUR_enGB867GB867&sxsrf=ACYBGNQwNDUSWoVREPp5P6XBwi7EBuwVKg%3A1570831697035&ei=Uf2gXenjAYKo1fAP5JmZwAI&q=--install-extension+wsl&oq=--install-extension+wsl&gs_l=psy-ab.3...25226.25856..26765...0.2..0.51.138.3......0....1..gws-wiz.......0i71.HmEQAwdx_ZU&ved=0ahUKEwip0LaKnJXlAhUCVBUIHeRMBigQ4dUDCAs&uact=5)
        cmd - How to install Visual Studio Code extensions from Command line - Stack Overflow (https://stackoverflow.com/questions/34286515/how-to-install-visual-studio-code-extensions-from-command-line)
        wsl vscode install extension - Google Search (https://www.google.com/search?rlz=1C1FGUR_enGB867GB867&sxsrf=ACYBGNQc-NHtJWTU9jx8jg6X6x1D656FGQ%3A1570831755215&ei=i_2gXYHvDKCp1fAP74Kq8Ak&q=wsl+vscode+install+extension&oq=wsl+vscode+install+ext&gs_l=psy-ab.1.0.33i22i29i30.2932.5181..6685...0.2..0.77.735.12....2..0....1..gws-wiz.......0i71j0i20i263j0j0i22i30.xG3wCtotBJA)
            Run Visual Studio Code in Windows Subsystem for Linux (https://code.visualstudio.com/remote-tutorials/wsl/run-in-wsl)
            An In Depth Tutorial on Linux Development on Windows with WSL and Visual Studio Code | Windows Command Line (https://devblogs.microsoft.com/commandline/an-in-depth-tutorial-on-linux-development-on-windows-with-wsl-and-visual-studio-code/)
            Using Visual Studio Code with Windows Subsystem for Linux - Shun's Vineyard (https://shunsvineyard.info/2019/01/27/using-visual-studio-code-with-windows-subsystem-for-linux/)

```
➜  linkify git:(master) ✗ sudo npm i -g vsce
[sudo] password for cbird: 
/usr/local/bin/vsce -> /usr/local/lib/node_modules/vsce/out/vsce
/usr/local/lib
└─┬ vsce@1.67.1
  ├─┬ cheerio@1.0.0-rc.3
  │ └─┬ parse5@3.0.3
  │   └── @types/node@12.7.12
  └── commander@2.20.3
```