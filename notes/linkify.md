

[drkvogel/linkify](https://github.com/drkvogel/linkify)

notes/borked.md

[Testing](/notes/testing.md) the extension

[Install](/notes/install.md) the extension

[VS Code API  Visual Studio Code Extension API ](https://code.visualstudio.com/api/references/vscode-api)
>VS Code API is a set of JavaScript APIs that you can invoke in your Visual Studio Code extension. This page lists all VS Code APIs available to extension authors.

[VS Code API  Visual Studio Code Extension API ](https://code.visualstudio.com/api/references/vscode-api#TextEditor)


Sat 2022-03-19 10:49 / 17:49 ICT
basically we're:
taking a line or lines of text
matching patterns to identify and copy into memory a substring or the whole string - call them fragments? paragraphs? items - that we want to transform
optionally dealing with substrings of each item - fragments?
transforming the fragments
join fragments
output transformed item
replace original item with transformed item

items:
links
have two parts:
  link text
  link url
emails
slack messages
teams messages

for great suspender, will have to first transform into original title and url, then transform it as normal...

identify type of link

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

