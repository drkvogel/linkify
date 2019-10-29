
## do

linkify: remove last param as well
  should get text between () and match with `key=.*[\&$]`

per-site transforms, e.g. if amazon, remove all after final slash:
`        Digitech TRIO Plus Band Creator Guitar Pedal with Looper: Amazon.co.uk: Musical Instruments (https://www.amazon.co.uk/dp/B01AV60KLQ/ref=sspa_dk_detail_1?psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFHNlEyVUQ1UEozS0wmZW5jcnlwdGVkSWQ9QTA3OTEyOTExMU9JQThJUkRPVUhVJmVuY3J5cHRlZEFkSWQ9QTEwMjUzNjBDTFQxMEpXRFc5WDEmd2lkZ2V0TmFtZT1zcF9kZXRhaWwyJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==)`
or, remove all after slash by default?
`        Window`: `\d+Window$`
`Window (crashed Wed Jun 19 2019)`: `^Window \(crashed.*\)`
`\([0-9]+\)`

`\?_encoding.*` ?

 - Super User 
 - MacRumors 
 | MacRumors Forums 
: Amazon.co.uk: Musical Instruments 

Window
    free screen recorder windows - Google Search (https://www.google.com/search?q=free+screen+recorder+windows&oq=free+screen+recorder+windows&aqs=chrome..69i57j69i64l2.6175j0j1&sourceid=chrome&ie=UTF-8&foo=bar)
    free screen recorder windows - Google Search (https://www.google.com/search?q=free+screen+recorder+windows&oq=free+screen+recorder+windows&aqs=chrome..69i57j69i64l2.6175j0j1&sourceid=chrome&ie=UTF-8&stick=H4sIAAAAAAAAAOOQUeLSz9U3yLA0rzQ0NpLOL0jNUyjOLy1KTlUoTi5KBfKKUpPzi1JSi6Jk0oB8dFGF8sy8lPzy4lOMYHOMCrMtzM1PMXKDOIYGGXllZRVQqbKKtJzyXCjHtKqkMCsLyoFYDjPBrCCjuPgXo7Q_bqcsYuVwAwoUp6YWAQCte4VcwQAAAA&sa=X&ved=2ahUKEwi6hM6q6sHlAhUkRhUIHfYbD-UQxA0wFnoECAwQCg&foo=bar)
        Windows 10 has a built-in free screen recorder that you might not know about (https://betanews.com/2019/01/14/windows-10-screen-recorder-ultility/)
        Download Windows and Mac Screen Capture & Video Recording Software | TinyTake (https://tinytake.com/tinytake-download)
        FRAPS game capture video recorder fps viewer (https://www.fraps.com/)
        ShareX - Screen capture, file sharing and productivity tool (https://getsharex.com/)
        Freeseer - Google Search (https://www.google.com/search?q=Freeseer&stick=H4sIAAAAAAAAAOOQUeLSz9U3yLA0rzQ0NpLOL0jNUyjOLy1KTlUoTi5KBfKKUpPzi1JSi6Jk0oB8dFGF8sy8lPzy4lOMYHOMCrMtzM1PMXKDOIYGGXllZRVQqbKKtJzyXCjHtKqkMCsLyoFYDjPBrCCjuPgXo7Q_bqcsYuVwAwoUp6YWAQCte4VcwQAAAA&sa=X&ved=2ahUKEwi6hM6q6sHlAhUkRhUIHfYbD-UQxA0wFnoECAwQCg)
        Main page - SimpleScreenRecorder - Maarten Baert's website (https://www.maartenbaert.be/simplescreenrecorder/)
            Get Simple Screen Recorder - Microsoft Store (https://www.microsoft.com/en-us/p/simple-screen-recorder/9n5mvvbd0tgw)


(7) Mathew Kimani  LinkedIn(https://www.linkedin.com/in/mathewkimani/?midToken=AQEM-qbU0mVlng&trk=eml-email_m2m_invite_reminder_02-hero-4-profile_text&trkEmail=eml-email_m2m_invite_reminder_02-hero-4-profile_text-null-bh60s%7Ejzmas5i6%7Eai-null-neptune%2Fprofile%7Evanity%2Eview)

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




Thank You (https://www.amazon.co.uk/gp/buy/thankyou/handlers/display.html?ie=UTF8&asins=B01E4YMY56&isRefresh=1&orderId=202-1689678-8055509&purchaseId=204-1632039-1022731&ref_=chk_typ_browserRefresh&viewId=ThankYouCart)
    Zoom G1on/UK Guitar Effects Pedal: Amazon.co.uk: Musical Instruments (https://www.amazon.co.uk/Zoom-G1on-Guitar-Effects-Pedal/dp/B00HS3DHCU/ref=pd_lutyp_crtyp_simh_5_3/259-4090932-2643241?_encoding=UTF8&pd_rd_i=B00HS3DHCU&pd_rd_r=26240960-02ce-40c4-b551-da9867963736&pd_rd_w=vgB7j&pd_rd_wg=F4dWq&pf_rd_p=e1a45040-d2db-41e8-80fa-8f32b208956a&pf_rd_r=V4XX8487NBVER1TWD41X&psc=1&refRID=V4XX8487NBVER1TWD41X)
    Digitech RP55 Modelling Guitar Processor: Amazon.co.uk: Musical Instruments (https://www.amazon.co.uk/Digitech-RP55-Modelling-Guitar-Processor/dp/B0025V1REU/ref=pd_lutyp_crtyp_simh_5_5/259-4090932-2643241?_encoding=UTF8&pd_rd_i=B0025V1REU&pd_rd_r=26240960-02ce-40c4-b551-da9867963736&pd_rd_w=vgB7j&pd_rd_wg=F4dWq&pf_rd_p=e1a45040-d2db-41e8-80fa-8f32b208956a&pf_rd_r=V4XX8487NBVER1TWD41X&psc=1&refRID=V4XX8487NBVER1TWD41X)
        Digitech TRIO Plus Band Creator Guitar Pedal with Looper: Amazon.co.uk: Musical Instruments (https://www.amazon.co.uk/dp/B01AV60KLQ/ref=sspa_dk_detail_1?psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFHNlEyVUQ1UEozS0wmZW5jcnlwdGVkSWQ9QTA3OTEyOTExMU9JQThJUkRPVUhVJmVuY3J5cHRlZEFkSWQ9QTEwMjUzNjBDTFQxMEpXRFc5WDEmd2lkZ2V0TmFtZT1zcF9kZXRhaWwyJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==)

No longer gets rid of `^Window`?

query string parser/filter?

remove space before `(http`
if it has `https://www.google.com/search?`:
  remove everything until `oq=`
  remove everything the rest
write tests
convert to TypeScript

## defer

auto-linkify on paste into vscode?


## done

update README
foreach line that has `(http` in it:
  remove [] brackets, ` - YouTube`, ` - Google Search` etc
  trim whitespace
  add square brackets

2019-04-21 23:35:32
bound `linkify` command to `shift+cmd+i`

remove ` - Jira `
[Publishing Extension  Visual Studio Code Extension API ](https://code.visualstudio.com/api/working-with-extensions/publishing-extension#packaging-extensions)
https://code.visualstudio.com/api/references/vscode-api#SelectionRange
auto-linkify on paste into vscode?

`gs_l` is often the longest param in google search, e.g.:
ottoman bed single (https://www.google.com/search?q=ottoman+bed+single&gs_l=psy-ab.1.0.0l7j0i22i30l3.22974.23693..24912...0.2..1.288.1557.0j2j5......0....1..gws-wiz.......0i71j0i67j0i20i263.QH3zCEXSoro)
also,`stick`: `stick=H4sIAAAAAAAAAOOQUeLSz9U3yLA0rzQ0NpLOL0jNUyjOLy1KTlUoTi5KBfKKUpPzi1JSi6Jk0oB8dFGF8sy8lPzy4lOMYHOMCrMtzM1PMXKDOIYGGXllZRVQqbKKtJzyXCjHtKqkMCsLyoFYDjPBrCCjuPgXo7Q_bqcsYuVwAwoUp6YWAQCte4VcwQAAAA&sa=X&ved=2ahUKEwi6hM6q6sHlAhUkRhUIHfYbD-UQxA0wFnoECAwQCg`

remove ` - Jira `?

utm_campaign
utm_medium
utm_source
hsCtaTracking

` - Quora`
`GitHub - `
` - Android Enthusiasts Stack Exchange `
` - Ask Different `
