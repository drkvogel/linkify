


## do

notes/stories/linkify-stories.md

query string parser/filter?

remove space before `(http`
if it has `https://www.google.com/search?`:
  remove everything until `oq=`
  remove everything the rest
write tests
  put stories into tests - input, output
convert to TypeScript

for great suspender, will have to first transform into original title and url, then transform it as normal...

identify type of link, pass to custom function



#### linkify

`vsce package` -> `.vsix`-

```
kvogel@kvogel-elitebook:~/Projects/linkify$ npm i -g vsce
npm ERR! Error: EACCES: permission denied, access '/usr/local/lib'
kvogel@kvogel-elitebook:~/Projects/linkify$ sudo npm i -g vsce
```
where is `.vsix`? gdrive? is now

```
kvogel@kvogel-elitebook:~/Projects/linkify$ code --install-extension linkify-0.0.1.vsix
Installing extensions... Extension 'linkify-0.0.1.vsix' was successfully installed.
```

