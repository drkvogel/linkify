
`linkify-0.1.2.vsix` from commit `df13ea06f86f3329ac6dba563792c94209c74272` Date:   Sun Jan 30 03:57:25 2022 +0000
doesn't work properly, screws up e.g.:

```
Window
    Wooden Ships Band - Google Search (https://www.google.com/search?sxsrf=APq-WBsTB0VSxmRlP7s9wrYAbj7-q8eYzg:1643797022284&q=Wooden+Ships+Band&sa=X&ved=2ahUKEwjk1eGM5eD1AhX1zjgGHV8bDRcQ1QJ6BAgzEAE&biw=1606&bih=926&dpr=1.41)
        public service broadcasting - Google Search (https://www.google.com/search?q=public+service+broadcasting&oq=public+service+broadcasting&aqs=chrome..69i57.6191j0j7&sourceid=chrome&ie=UTF-8)
            Public Service Broadcasting (https://www.publicservicebroadcasting.net/)

Selected Ambient Works Volume II - Wikipedia (https://en.wikipedia.org/wiki/Selected_Ambient_Works_Volume_II#Retrospective_reviews)
    Aphex Twin - Selected Ambient Works 85-92 - YouTube (https://www.youtube.com/watch?v=Xw5AiRVqfqk)
    Aphex Twin - Selected Ambient Works II (Full Album - 2017 Reissue with Bonus Track) - YouTube (https://www.youtube.com/watch?v=-57Ti2i_yhU)
    aphex grass - Google Search (https://www.google.com/search?q=aphex+grass&oq=aphex+grass&aqs=chrome..69i57.2223j0j7&sourceid=chrome&ie=UTF-8)
        The Aphex Twin Iceberg : aphextwin (https://www.reddit.com/r/aphextwin/comments/ljemrx/the_aphex_twin_iceberg/)
        The 2 Aphex Twin tracks that if played together making a new track : aphextwin (https://www.reddit.com/r/aphextwin/comments/qfef8x/the_2_aphex_twin_tracks_that_if_played_together/)
        SAW2 : Grass - [ Chernobyl soundtrack dub 2/2 ] : aphextwin (https://www.reddit.com/r/aphextwin/comments/gg83la/saw2_grass_chernobyl_soundtrack_dub_22/)
        £117,812.30 - Google Search (https://www.google.com/search?q=%C2%A3117%2C812.30&oq=%C2%A3117%2C812.30&aqs=chrome..69i57.256j0j7&sourceid=chrome&ie=UTF-8)
            NHS manager invented care home to steal £117,000 (https://www.nationalhealthexecutive.com/News/nhs-manager-invented-care-home-to-steal-117000)
            Essex man jailed for money laundering | Bucks Free Press (https://www.bucksfreepress.co.uk/news/8922589.essex-man-jailed-for-money-laundering/)


Spacemen 3 Recurring (Full Album) - YouTube (https://www.youtube.com/watch?v=UeBYZ52i0ic)
    Sound Of Confusion (Full album) - Spacemen 3 - YouTube (https://www.youtube.com/watch?v=k8BPG4C_ZmM)
    An Evening Of Contemporary Sitar Music (Live) - YouTube (https://www.youtube.com/watch?v=Msv-5_9UlXM&list=OLAK5uy_n_KlRtntzE6zFexzKfJ1R4uwDKUSkKp3M)
    Synthwave/Electric Mixtape I | For Study/Relax - YouTube (https://www.youtube.com/watch?v=k3WkJq478To)
    ‘Intelligent’ Drum & Bass - Selected Works Part 2 (1994-2000) - YouTube (https://www.youtube.com/watch?v=6AQfrbMfDXE)
    Aphex Twin - Tree - YouTube (https://www.youtube.com/watch?v=ATzlzPLMUhc)
    Boards of Canada - Echus [rework edit 1 hour loop] - YouTube (https://www.youtube.com/watch?v=twD-1lg8xDM)
    A Perfect Bass Line (With Only TWO Notes) - YouTube (https://www.youtube.com/watch?v=IxUF8HPbQe0)



Window
    bedrock music - Google Search (https://www.google.com/search?q=bedrock+music&oq=bedrock+music&aqs=chrome..69i57j69i60.2260j0j1&sourceid=chrome&ie=UTF-8)
        John Digweed classic set mix - Google Search (https://www.google.com/search?q=John+Digweed+classic+set+mix&biw=1606&bih=926&ei=t1H6YcHHEp-MseMP6viisAU&ved=0ahUKEwiB_4yL3eD1AhUfRmwGHWq8CFYQ4dUDCA4&uact=5&oq=John+Digweed+classic+set+mix&gs_lcp=Cgdnd3Mtd2l6EAMyBQghEKABMgUIIRCgAToHCAAQRxCwAzoHCAAQsAMQQzoKCAAQ5AIQsAMYADoMCC4QyAMQsAMQQxgBOgUILhCABDoFCAAQgAQ6BQguEJECOgYIABAWEB46BwghEAoQoAE6BggAEA0QHjoICCEQFhAdEB46BAghEBVKBQiVThgBSgUIPBIBN0oECEEYAEoECEYYAVDzAlj5NmDOOGgHcAJ4AIABhAKIAc4SkgEGMTIuOS4xmAEAoAEByAEQwAEB2gEGCAAQARgJ2gEGCAEQARgI&sclient=gws-wiz)
            John Digweed - Google Search (https://www.google.com/search?sa=X&source=univ&tbm=isch&q=John+Digweed&fir=K8C1Ebr-rhaLOM%252CM8DxjBpY64AylM%252C_%253Bw6zURTmw7vfBrM%252CXxZ4IYU6RaTmqM%252C_%253B4qom1ozd2I2RLM%252CmKDPYsZ2VMTEcM%252C_%253B3EQr0wVqicZ6OM%252CojCk9XZijkn_7M%252C_%253BHdHwpcWth8yuFM%252CQhGRSr8sRhArZM%252C_%253BkxTtK5GQi9BlfM%252C41q0vrKTuYJd9M%252C_&usg=AI4_-kQv_1f0FBmQtBwW7Im-a_92joxiXQ&ved=2ahUKEwiB_4yL3eD1AhUfRmwGHWq8CFYQiR56BAgnEAI&biw=1606&bih=926&dpr=1.41)
                John Digweed - Google Search (https://www.google.com/imgres?imgurl=https%3A%2F%2Fphuketfmradio.com%2Fwp-content%2Fuploads%2F2021%2F12%2FJohn-Digweed-and-Sasha.jpg&imgrefurl=https%3A%2F%2Fphuketfmradio.com%2Fpresenters%2Fjohn-digweed%2F&tbnid=3vqbXlZw4DPy5M&vet=12ahUKEwi0gZaT3eD1AhVYynMBHU88DYwQMygOegUIARD9AQ..i&docid=uRuBIyJrjk2VHM&w=503&h=469&itg=1&q=John%20Digweed&ved=2ahUKEwi0gZaT3eD1AhVYynMBHU88DYwQMygOegUIARD9AQ)
                John Digweed - Google Search (https://www.google.com/imgres?imgurl=https%3A%2F%2Fthump-images.vice.com%2Fimages%2F2015%2F1%2F27%2Fhow-to-dj-with-integrity-according-to-john-digweed-1422360903676.jpg&imgrefurl=https%3A%2F%2Fwww.vice.com%2Fen%2Farticle%2Fqkmgy5%2Fhow-to-dj-with-integrity-according-to-john-digweed&tbnid=hHn9ZvEHN72-pM&vet=12ahUKEwi0gZaT3eD1AhVYynMBHU88DYwQMygRegUIARCEAg..i&docid=fMSWuJq2HWBsqM&w=800&h=533&itg=1&q=John%20Digweed&ved=2ahUKEwi0gZaT3eD1AhVYynMBHU88DYwQMygRegUIARCEAg)
                John Digweed - Google Search (https://www.google.com/imgres?imgurl=https%3A%2F%2Fmixing.dj%2Fwp-content%2Fuploads%2F2018%2F02%2FJohn-Digweed-1-640x427.jpg&imgrefurl=https%3A%2F%2Fmixing.dj%2Fjohn-digweed-transitions-715-with-oliver-koletzki%2F&tbnid=4qom1ozd2I2RLM&vet=12ahUKEwi0gZaT3eD1AhVYynMBHU88DYwQMygCegUIARDjAQ..i&docid=mKDPYsZ2VMTEcM&w=640&h=427&itg=1&q=John%20Digweed&ved=2ahUKEwi0gZaT3eD1AhVYynMBHU88DYwQMygCegUIARDjAQ)
                John Digweed - Google Search (https://www.google.com/imgres?imgurl=https%3A%2F%2Fi0.wp.com%2Felectronicgroove.com%2Fwp-content%2Fuploads%2F2018%2F05%2FJohn-Digweed.jpg%3Ffit%3D940%252C627%26ssl%3D1&imgrefurl=https%3A%2F%2Felectronicgroove.com%2Fjohn-digweed-announces-new-compilation-series-quattro%2F&tbnid=HdHwpcWth8yuFM&vet=12ahUKEwi0gZaT3eD1AhVYynMBHU88DYwQMygEegUIARDnAQ..i&docid=QhGRSr8sRhArZM&w=940&h=627&itg=1&q=John%20Digweed&ved=2ahUKEwi0gZaT3eD1AhVYynMBHU88DYwQMygEegUIARDnAQ)
            John Digweed | Medusa Festival 2018 - YouTube (https://www.youtube.com/watch?v=KYFulR8tBAk)
            John Digweed @ Street Parade 2019 (Full Set Hi-Res) - ARTE Concert - YouTube (https://www.youtube.com/watch?v=0Xgy6NFnwI0)
            Ecstasy 2011 - Google Search (https://www.google.com/search?sa=X&q=Ecstasy+2011&stick=H4sIAAAAAAAAAONgFuLSz9U3MMxKNjKsVOIEsZMLk1NKtHgDUouK8_NC8n3zyzJTF7HyuCYXlyQWVyoYGRga7mBlBAB1GgUfOgAAAA&ved=2ahUKEwiB_4yL3eD1AhUfRmwGHWq8CFYQxA16BAhDEAo&biw=1606&bih=926&dpr=1.41)
            Groove (film) - Google Search (https://www.google.com/search?sa=X&q=Groove+(film)&stick=H4sIAAAAAAAAAONgFuLSz9U3MMxKNjKsVOIEsU2qsoqStHgDUouK8_NC8n3zyzJTF7Hyuhfl55elKmikZebkau5gZQQACc5s4zsAAAA&ved=2ahUKEwiB_4yL3eD1AhUfRmwGHWq8CFYQxA16BAhDEAY&biw=1606&bih=926&dpr=1.41)
            Stark Raving Mad - Google Search (https://www.google.com/search?sa=X&q=Stark+Raving+Mad&stick=H4sIAAAAAAAAAONgFuLSz9U3MMxKNjKsVOIEsU0rqsyStHgDUouK8_NC8n3zyzJTF7EKBJckFmUrBCWWZealK_gmpuxgZQQAnRIO9j4AAAA&ved=2ahUKEwiB_4yL3eD1AhUfRmwGHWq8CFYQxA16BAhDEAg&biw=1606&bih=926&dpr=1.41)
            Paul Oakenfold - Google Search (https://www.google.com/search?sa=X&q=Paul+Oakenfold&stick=H4sIAAAAAAAAAONgFuLSz9U3MMxKNjKsVOIEs83yyjK0BIMzU1LLEyuL_VIrSoJLUguKF7HyBSSW5ij4J2an5qXl56TsYGUEAKYiSOVAAAAA&ved=2ahUKEwiB_4yL3eD1AhUfRmwGHWq8CFYQxA16BAgxEAs&biw=1606&bih=926&dpr=1.41)
            Sasha (DJ) - Google Search (https://www.google.com/search?sa=X&q=Sasha+(DJ)&stick=H4sIAAAAAAAAAONgFuLSz9U3MMxKNjKsVIKwyy2KTVK0BIMzU1LLEyuL_VIrSoJLUguKF7FyBScWZyQqaLh4ae5gZQQAUe72xz0AAAA&ved=2ahUKEwiB_4yL3eD1AhUfRmwGHWq8CFYQxA16BAgxEAU&biw=1606&bih=926&dpr=1.41)
            John Digweed mixcloud - Google Search (https://www.google.com/search?q=John+Digweed+mixcloud&sa=X&ved=2ahUKEwiB_4yL3eD1AhUfRmwGHWq8CFYQ1QJ6BAhpEAE&biw=1606&bih=926&dpr=1.41)
            John Digweed - Choice, a Collection of Classics (Disc 1) (Progressive House Mix Album) [HQ] - YouTube (https://www.youtube.com/watch?v=Mm2TEJfxWiU)
            John Digweed mixes - Google Search (https://www.google.com/search?q=John+Digweed+mixes&sa=X&ved=2ahUKEwjmlO6s3eD1AhX_UWwGHb4EDFgQ1QJ6BAggEAE&biw=1606&bih=926&dpr=1.41)
            5 Classic Sets: Sasha & John Digweed (https://www.deephouseamsterdam.com/london/5-classic-sets-sasha-john-digweed/)
    fake quotes generator - Google Search (https://www.google.com/search?source=univ&tbm=isch&q=fake+quotes+generator&fir=1dfhkc24NDvMxM%252CRiSyIxnmzn4inM%252C_%253B7GD44UeSnUXPVM%252CrGBTxzD_F9fZjM%252C_%253BXW1wb7Wu00ZK6M%252CDFK0QcrbrMDfCM%252C_%253BgQbEe-BR9pdSuM%252CwhEiqReGha5zkM%252C_%253BzXTgVtf2VpGtRM%252CPadi6JpkOhz-NM%252C_%253Bq5l4pRO3_Jk9EM%252Cb9A8x0AL5p70gM%252C_%253Bt1qPju8jbjq4zM%252CmwiCcGvaWX0q3M%252C_%253Ba-MrAf7YQ9_85M%252CrGBTxzD_F9fZjM%252C_%253B7n4v0-vFAE0rJM%252CDdOmFNPV08Gq0M%252C_%253Bk5_ELWmwDC8zLM%252CsHzDhPW7FkWRBM%252C_&usg=AI4_-kSVVb98E3c8UpOttfdxxHofP1aP1w&sa=X&ved=2ahUKEwj-n6_a3eD1AhU-SmwGHX_sANcQ7Al6BAg3EEk&biw=1606&bih=926&dpr=1.41#imgrc=XW1wb7Wu00ZK6M)
        Incorrect Quotes Generator (https://incorrect-quotes-generator.neocities.org/)
        Incorrect Quote Generator ― Perchance (https://perchance.org/incorrect-quote-generator)
        Quotes Generator (https://boredhumans.com/quotes.php)
        False Quotes Generator (https://false-quotes-generator.herokuapp.com/)
        fake quotes generator - Google Search (https://www.google.com/imgres?imgurl=https%3A%2F%2Fcamo.githubusercontent.com%2F49ec3a83322a1d50225d270f1ab34868b5557726ea034220a02d4d5f4e1a5e3a%2F68747470733a2f2f692e6e6f61682e706d2f6f4c326231662e6a7067&imgrefurl=https%3A%2F%2Fgithub.com%2FNoahvdAa%2FSunTzuGenerator&tbnid=1dfhkc24NDvMxM&vet=12ahUKEwi_qdbj3eD1AhU4R2wGHfCrC18QMygAegUIARCxAQ..i&docid=RiSyIxnmzn4inM&w=1242&h=674&q=fake%20quotes%20generator&ved=2ahUKEwi_qdbj3eD1AhU4R2wGHfCrC18QMygAegUIARCxAQ)
        21++ Fake Inspirational Quotes Meme - Audi Quote (https://audiquote.blogspot.com/2020/02/21-fake-inspirational-quotes-meme.html)
            Google Lens (https://lens.google.com/search?p=ASQ0Rg1RJnXcxHpD1nNnvGxzBDg5rGObL9Tzrv8oxfXb5thYWb4wsjSsK5YOOOZ0A1hVLgcuE8qK3iidOdGRdl0y1GycqRSD9NfgCOTyWgL5Ib6-Ry-0FeEBhjLCvk4W7rXB1p2ilbRDHZg6ut_lTmpPTZryWumVZPsxGnSjAqZWbO6PZWphIWw1bAhGeIK2fWO_PqUKgGZd0ZKLA8v-kA_B6c_OyGNDaDHYtybzLgGQY9Y%3D&s&ep=ccm#lns=W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsIkVpWUtKREkxWWpFNVkyWmlMVEE1TW1JdE5HWTRPQzA0TWpVNUxUTXhNbUU1WVRBMlpXVTRZUT09Il0=)
                Stop Using Fake Quotations You Found on the Internet | by Justin Roberti | Medium (https://justinroberti.medium.com/stop-using-terrible-fake-quotes-you-found-on-the-internet-a8d6db277767)
                They Never Said It: A Book of Fake Quotes, Misquotes, and Misleading Attributions by Paul F. Boller Jr. (https://www.goodreads.com/book/show/187352.They_Never_Said_It)
                Stuff Lincoln didn’t say 150 years ago… | Lincoln quotes, Inspirational quotes, Abraham lincoln quotes (https://www.pinterest.com/pin/36028865742804400/)
        [Image] You are the author of your life : GetMotivated (https://www.reddit.com/r/GetMotivated/comments/6uher0/image_you_are_the_author_of_your_life/)
        fake quotes generator - Google Search (https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2F736x%2F2c%2Fa3%2Fe1%2F2ca3e132ba5911594f86dd90c44f4810.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F85638830398539084%2F&tbnid=ERI14H_Gs7PphM&vet=10CBcQxiAoCGoXChMI2Orvkt7g9QIVAAAAAB0AAAAAEAg..i&docid=7z2uKhuyyoCRJM&w=600&h=469&itg=1&q=fake%20quotes%20generator&ved=0CBcQxiAoCGoXChMI2Orvkt7g9QIVAAAAAB0AAAAAEAg)
            fake quotes generator - Google Search (https://www.google.com/imgres?imgurl=https%3A%2F%2Fbillmoyers.com%2Fwp-content%2Fuploads%2F2020%2F08%2Fdont-believe-the-meme.jpg&imgrefurl=https%3A%2F%2Fbillmoyers.com%2Fstory%2Fa-cautionary-tale-about-getting-your-history-lessons-from-internet-memes%2F&tbnid=rNr89YKSfJCvLM&vet=12ahUKEwjlmaW73uD1AhUxjNgFHSsWD_QQxiAoAHoECAAQEQ..i&docid=6srPDci_ESv9UM&w=627&h=437&itg=1&q=fake%20quotes%20generator&ved=2ahUKEwjlmaW73uD1AhUxjNgFHSsWD_QQxiAoAHoECAAQEQ)
                A Cautionary Tale About Getting Your History Lessons From Internet Memes – BillMoyers.com (https://billmoyers.com/story/a-cautionary-tale-about-getting-your-history-lessons-from-internet-memes/)
```
