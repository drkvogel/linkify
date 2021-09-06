
# Linkify

A VS Code Extension to convert [Tabs Outliner](https://chrome.google.com/webstore/detail/tabs-outliner/eggkanocgddhmamlbiijnphhppkpkmkl?hl=en) tab trees into [Markdown links](https://daringfireball.net/projects/markdown/syntax#link)

Created using [generator-code](https://www.npmjs.com/package/generator-code) for [Yeoman](https://yeoman.io/)

## Use Case

I am a big fan of the [Tabs Outliner](https://chrome.google.com/webstore/detail/tabs-outliner/eggkanocgddhmamlbiijnphhppkpkmkl?hl=en) extension for Chrome which I used to organise the many tabs that I tend to open in a session. One of the useful (paid-for) options is that you can right-click on the tab tree and copy a tree of links in the format:

```
Google Calendar (https://calendar.google.com/calendar/)
    Inbox - Gmail (https://mail.google.com/mail/u/0/#inbox)
        Google News (https://news.google.com/?hl=en-GB&gl=GB&ceid=GB:en)
            Home - BBC News (https://www.bbc.co.uk/news)
```

which I find myself pasting into markdown documents when there are links that I want to save. In markdown, of course, a [link](https://daringfireball.net/projects/markdown/syntax#link) is usually in the format:

```
[link text](https://site.com/page.html)
```

I found myself manually converting tab trees copied from Tabs Outliner into Markdown links so often that I thought I'd write an extension to do it!

## Installation

To install, use, `code --install-extension <extension.vsix>`, e.g. 
```
code --install-extension linkify-0.0.1.vsix`
```

## Usage

I bound the `extension.linkify` command to `shift+cmd+i` on MacOS or `shift+alt+i` on Windows.

* Copy links or trees of links from the Tabs Outliner trees by doing right-click, copy (paid version only)
* Paste into markdown document in VS Cde
* Select your links
* Hit your shortcut, et voila!

Unwanted (by me) cruft is taken out of link text and from URLs for sites I often copy-paste like this, the rules for this are specific to my needs and a work in progress.
