
`        Window`: `\d+Window$`
`Window (crashed Wed Jun 19 2019)`: `^Window \(crashed.*\)`
`\([0-9]+\)`
` - Quora`
`GitHub - `
` - Android Enthusiasts Stack Exchange `
`\?_encoding.*` ?
` - Ask Different `

[(7) Mathew Kimani  LinkedIn ](https://www.linkedin.com/in/mathewkimani/?midToken=AQEM-qbU0mVlng&trk=eml-email_m2m_invite_reminder_02-hero-4-profile_text&trkEmail=eml-email_m2m_invite_reminder_02-hero-4-profile_text-null-bh60s%7Ejzmas5i6%7Eai-null-neptune%2Fprofile%7Evanity%2Eview)

trim whitespace after e.g. [VS Code API  Visual Studio Code Extension API ](https://code.visualstudio.com/api/references/vscode-api#TextEditor)
don't trim whitespace before?
take out e.g. `&rlz=1C5CHFA_enGB838GB838&oq=...&aqs=chrome..69i57.14693j0j7&sourceid=chrome&ie=UTF-8` from Google search query string
`?li_source=LI&li_medium=li-recommendation-widget`
query string parser/filter?

remove space before `(http`

`https://www.google.com/search?q=Brainscan&...`
`        Brainscan - Google Search (https://www.google.com/search?q=Brainscan&stick=H4sIAAAAAAAAAONgFuLVT9c3NEzLMrHMzrPMU-LUz9U3MC4yMy3RkspOttJPy8zJBRNWRak5iSWpKQrFqSXFi1g5nYoSM_OKkxPzdrAyAgD2vdE1RwAAAA&sa=X&ved=2ahUKEwi-nKOj6fDjAhUnQkEAHbjvBaUQxA0wNnoECBsQBQ)`
if it has `https://www.google.com/search?`:
  remove everything until `oq=` (or `q=`?)
  keep until `&`, remove the rest

update README
write tests
convert to TypeScript

## defer

auto-linkify on paste into vscode?


## done

foreach line that has `(http` in it:
  remove [] brackets, ` - YouTube`, ` - Google Search` etc
  trim whitespace
  add square brackets

2019-04-21 23:35:32
bound `linkify` command to `shift+cmd+i`

remove ` - Jira `
