


```
[11:45] Armando García González
    I think you still have the stand up meeting opened
​[11:45] Chris Bird
    ah
​[11:46] Chris Bird
    yeah I did, in chrome
​[11:46] Chris Bird
    because ms teams Windows app was not signing in
​[11:46] Chris Bird
    thanks
​[11:47] Chris Bird
    yeah something goes wrong with teams Windows app and I have to reinstall it
[11:48] Armando García González
    I have problems sometimes too with the app in ubuntu but I restarted and finally works properly 
​[11:48] Armando García González
    the meeting lasted 2 and half hours laugh
​[11:49] Chris Bird
    haha!
```
to e.g.:
```
>[11:45] Armando García González I think you still have the stand up meeting opened
>​[11:45] Chris Bird ah
>​[11:46] Chris Bird yeah I did, in chrome
>​[11:46] Chris Bird because ms teams Windows app was not signing in
>​[11:46] Chris Bird thanks
>​[11:47] Chris Bird yeah something goes wrong with teams Windows app and I have to reinstall it
>[11:48] Armando García González I have problems sometimes too with the app in ubuntu but I restarted and finally works properly 
>​[11:48] Armando García González the meeting lasted 2 and half hours laugh
>​[11:49] Chris Bird haha!
```

```
[12:36] Chris  Neil
    General please ensure you plan your board, move items to blocked and in progress when applicable. Thanks
(2 liked)​[12:55] Ruslán González Burim
    All is updated properly
<https://teams.microsoft.com/l/message/19:DXeQxZfpi_nW3GVCGsDEdaED5OQ3j8gZYrfzxw9Kq0c1@thread.tacv2/1629718589897?tenantId=281c74b5-9d3b-4e98-8641-a6b83bdea208&amp;groupId=b255c310-6fec-4ec6-9b74-c95c2bc525ea&amp;parentMessageId=1629718589897&amp;teamName=DS Dev&amp;channelName=General&amp;createdTime=1629718589897>

```
to
```
>[12:36] Chris  Neil General please ensure you plan your board, move items to blocked and in progress when applicable. Thanks
>​[12:55] Ruslán González Burim All is updated properly
```

get rid of `Edited​`, `({n} liked)`
get rid of link (`<https://teams.microsoft.com/{...}>`)

also these get copied somehow:
```
the time field for timestamp is alright by Ruslán González Burim
Ruslán González Burim09:07
the time field for timestamp is alright
```
from meeting chat?

### strip out `ZERO WIDTH SPACE`

/home/kvogel/projects/general/work/ncg/notes/210909-msteam-encoding.md
  >text copied from msteams chat includes a weird byte sequence that breaks markdown formatting
  >could strip out with linkify?
  >Character name	`ZERO WIDTH SPACE` Hex code point `200B`, Decimal code point `8203`, Hex UTF-8 bytes `E2 80 8B`
  >either way, text copied from MSTeams contains a `E2 80 8B` sequence instead of `0A 0A`

