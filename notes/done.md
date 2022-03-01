

### Install `vsce`
```
19/04/29 15:46:48 kvogel-macbook-2018:~/Projects/linkify ±(master)
❯ npm i -g vsce
/usr/local/bin/vsce -> /usr/local/lib/node_modules/vsce/out/vsce
+ vsce@1.59.0
```

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

foreach line that has `(http` in it:
  remove [] brackets, ` - YouTube`, ` - Google Search` etc
  trim whitespace
  add square brackets

2019-04-21 23:35:32
bound `linkify` command to `shift+cmd+i`

take out e.g. `(21) ` from YouTube-
take out e.g. `&rlz=1C5CHFA_enGB838GB838&oq=...&aqs=chrome..69i57.14693j0j7&sourceid=chrome&ie=UTF-8` from Google search query string-

Dependabot security PRs, e.g.:
[Bump lodash from 4.17.11 to 4.17.15 by dependabot · Pull Request #1 · drkvogel/linkify ](https://github.com/drkvogel/linkify/pull/1)

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

tabs copied from TabOutliner into markdown links- linkify
