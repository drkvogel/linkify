

VS Code API | Visual Studio Code Extension API (https://code.visualstudio.com/api/references/vscode-api)
VS Code API | Visual Studio Code Extension API (https://code.visualstudio.com/api/references/vscode-api#TextEditor)

https://code.visualstudio.com/api/references/vscode-api#SelectionRange


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
package with vsce
write tests
convert to TypeScript

[Publishing Extension  Visual Studio Code Extension API ](https://code.visualstudio.com/api/working-with-extensions/publishing-extension#packaging-extensions)




## defer

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

2019-04-23 12:19:16

```
19/04/23 12:18:18 cjb-tp-macbook:~/Projects/linkify ±(master) 
❯ code --install-extension linkify-0.0.1.vsix
(node:9529) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
Extension 'linkify-0.0.1.vsix' was successfully installed!
```


