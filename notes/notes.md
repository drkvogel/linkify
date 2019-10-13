

[VS Code API  Visual Studio Code Extension API ](https://code.visualstudio.com/api/references/vscode-api)
[VS Code API  Visual Studio Code Extension API ](https://code.visualstudio.com/api/references/vscode-api#TextEditor)

## do



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

take out e.g. `(21) ` from YouTube
