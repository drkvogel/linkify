

[drkvogel/linkify](https://github.com/drkvogel/linkify)

### Manual Testing

In VSCode, do Run -> Start Debugging, or press `f5`
Program will run in new window
Create a editor, paste some text, select, and run extn either with defined shortcut (e.g. `shift+alt+i`) or from command palette (`ctrl+shift+p`, `Linkify`)
`ctrl+shift+f5` to restart debugging

### package

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

### Install

```
2022-01-22 04:46:31 kvogel@kvogel-surface-ubuntu:~/projects/general/projects/repos/linkify ±(master) ✗ 
❯ code --install-extension linkify-0.1.2.vsix 
Installing extensions...
(node:37129) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
(Use `code --trace-deprecation ...` to show where the warning was created)
Extension 'linkify-0.1.2.vsix' was successfully installed.
```


## ToDo

```
2022-01-22 04:56:10 kvogel@kvogel-surface-ubuntu:~/projects/general/projects/repos/linkify ±(master) ✗ 
❯ node
Welcome to Node.js v17.3.0.
```
```js
> nl = "(2) Devon Govett on Twitter: \"ESBuild gets a lot of (well deserved) hype, but I’m also pretty excited about SWC. Not only is it a super fast JS compiler, but it’s also a whole platform. For example, Deno’s linter, code formatter, and doc generator are built using SWC’s Rust API! 😲 https://t.co/XvkvI8Vbto\" / Twitter (https://twitter.com/devongovett/status/1369033422002389000?utm_source=thenewstack&utm_medium=website&utm_campaign=platform)"
> replaceString = "utm_source=.*?\&"
'utm_source=.*?&'
> replaceString
'utm_source=.*?&'
> regex = new RegExp(replaceString, 'g')
/utm_source=.*?&/g

// force deep copy
> var nl_deep_copy = (' ' + nl).slice(1);
undefined
> string_copy
'utm_source=.*?&'
```

n.b. original replace with regex literal was:
```js
nl = nl.replace(/utm_source=.*?\&/g, '');
```
notice escaped `&`
yes, have to escape the backslashes in the strings that get passed to the regex


should split code into sections dealing with title text and link text

doesn't take off last query string argument (because doesn't end with `&` - shouldn't include `&` in `toRemoveStrings` anyway)

should remove arguments per site, e.g. `si=x` should be removed for google.* sites, but not any other sites in case it's used in that other site and needed to display the page (i.e is not tracking)

`utm_` ones are universal, though

### local relative links

it does work pretty well, though - but local links would be the biggest gain, for me
linkify: `notes/211028-cn-issues.md` -> `[cn issues](/notes/211028-cn-issues.md)`


## defer

auto-linkify on paste into vscode?

tabs copied from TabOutliner into markdown links- linkify
  strip non-essential query string params from Google search

linkify
  auto-linkify on paste into vscode?
linkify:
  last param
  new google params - bwi?
  great sus
  release??
    "contribute to open source projects"?
linkify jgrund re, publish

notes/email-condense.md
notes/slack messages.md
projects/repos/linkify/notes/use-cases/msteams.md

diigo: [#productivity - chrisjbird @ Diigo](https://www.diigo.com/user/chrisjbird?query=%23productivity)


original pseudocode?:
foreach line that has `(http` in it:
  trim whitespace
  remove ` - Google Search ` etc
  add square brackets
  if it has `https://www.google.com/search?`:
    remove everything until `oq=`
    remove everything the rest
etc

### other Linkifys

#### Rust crate

[linkify - crates.io: Rust Package Registry ](https://crates.io/crates/linkify)
>Rust library to find links such as URLs and email addresses in plain text.

#### Ben Alman's Linkify

[Ben Alman » JavaScript Linkify: Process links in text ](http://benalman.com/projects/javascript-linkify/)
[Ben Alman » JavaScript Linkify » Examples » Linkify ](http://benalman.com/code/projects/javascript-linkify/examples/linkify/)
[cowboy/javascript-linkify: JavaScript Linkify: Process links in text ](https://github.com/cowboy/javascript-linkify/)
but what does it do?

## done

### Install extension from package
```
19/04/23 12:18:18 cjb-tp-macbook:~/Projects/linkify ±(master) 
❯ code --install-extension linkify-0.0.1.vsix
Extension 'linkify-0.0.1.vsix' was successfully installed!
```
May not work on  work on Windows/WSL:
```
cbird@CHRISBIRD10:/mnt/c/Users/birdc/Projects/linkify$ code --install-extension linkify-0.0.1.vsix 
Installing VS Code Server b37e54c98e1a74ba89e03073e5a3761284e3ffb0
Downloading: 100%
Unpacking: 100%
Ignoring option install-extension: not supported for code
```
Installed `.vsix` from Code menu instead.

`sudo npm i -g vsce`