

[VS Code API  Visual Studio Code Extension API ](https://code.visualstudio.com/api/references/vscode-api)
[VS Code API  Visual Studio Code Extension API ](https://code.visualstudio.com/api/references/vscode-api#TextEditor)

## do

take out e.g. `(21) ` from YouTube
take out e.g. `&rlz=1C5CHFA_enGB838GB838&oq=...&aqs=chrome..69i57.14693j0j7&sourceid=chrome&ie=UTF-8` from Google search query string
query string parser/filter?
remove ` - Jira `
remove space before `(http`

if it has `https://www.google.com/search?`:
  remove everything until `oq=`
  remove everything the rest

update README
write tests
convert to TypeScript

## defer

[Publishing Extension  Visual Studio Code Extension API ](https://code.visualstudio.com/api/working-with-extensions/publishing-extension#packaging-extensions)
https://code.visualstudio.com/api/references/vscode-api#SelectionRange

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

auto-linkify on paste into vscode?

## done

foreach line that has `(http` in it:
  remove [] brackets, ` - YouTube`, ` - Google Search` etc
  trim whitespace
  add square brackets

2019-04-21 23:35:32
bound `linkify` command to `shift+cmd+i`

2019-10-11 19:28:18
[Bump lodash from 4.17.11 to 4.17.15 by dependabot · Pull Request #1 · drkvogel/linkify ](https://github.com/drkvogel/linkify/pull/1)
[Configuring automated security fixes - GitHub Help ](https://help.github.com/en/articles/configuring-automated-security-fixes)
[npm semantic version calculator ](https://semver.npmjs.com/)
[Semantic Versioning 2.0.0  Semantic Versioning ](https://semver.org/)



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
