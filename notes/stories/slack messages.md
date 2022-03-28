
 John Flynn, and 2 others

John Flynn  3 days ago
The debt figure below should not be zero as I have a figure for debt in the profile.  In the legacy app this figure appears correctly which suggests it is not a Brain issue.  However, having raised the issue directly with Preeo, they have responded that the legacy app uses a different version of the Brain.
@chris.bird would you be able to confirm where the issue is likely to be?
image.png
image.png







Show 5 more replies

John Flynn  3 days ago
@Jean Marc Dimech @Josef Orland can you look into this please?




John Flynn  1 hour ago
@Jean Marc Dimech @Josef Orland ^^^?




Jean Marc Dimech  1 hour ago
Must have missed this. I will take a look at it this morning




Jean Marc Dimech  1 hour ago
Debt is being sent value 0
image.png
image.png




Jean Marc Dimech  1 hour ago
debt_repayment is found under financial_impact[0].breakdown (array index 0 indicating adult)




Jean Marc Dimech  1 hour ago
with regards to Jeremy's comment regarding child cost values, we are currently not showing these values as they were never in any XD design. We should have not problems introducing these values as they are being sent accordingly from the brain.




Jean Marc Dimech  1 hour ago
Again on the debt_repayment field, no calculation or any kind of processing is being done on the values being sent from the brain apart from formatting.




John Flynn  1 hour ago
Thanks @Jean Marc Dimech.
In the legacy app the debt figure is being shown, but as we know, that is a different version of the Brain.  Can the debt query above be checked, @chris.bird?




jeremy  1 hour ago
Are we sure it's the same Debt variable? I think the core had another one which was related to the Life sales journey so there might be cause for confusion there, might be worth double checking that it's saving to and taking from the same place




Jean Marc Dimech  1 hour ago
@jeremy I could not find any instance in the core where the debt_repayment is being set




Jean Marc Dimech  1 hour ago
also it is saved as a brain_key in the db, which lead me to believe that it is being sent from the brain
---

gareth  11:40 AM
They asked for the limits though as well...






chris.bird  11:51 AM
oh yes... not sure how to go about that.. ask linc maybe?

gareth  11:52 AM
Dont the unit tests exercise them?
11:55
I asked Jeremy if there were any docs, he said no. You could ask Lincoln and failing that it might require a day of trawling around the code I suspect.
11:56
WE should have it if we dont
11:56
Obviously for people trying to integrate

chris.bird  11:56 AM
we only have unit tests on TH but maybe they could help
11:56
and we should have API tests now, I haven't actually seen them yet what with everything else
new messages

gareth  11:59 AM
Remember I mentioned to you, if you feel it would be helpful to get Lincoln on a call for a hour or so let me know. But I suggest if you do getting a list of questions together we can forward to him.
11:59
He is no longer under contract with us at this point
---

### slack email

```
You have new messages in ncg-digital (ncg-digital.slack.com)
From #jira

Jira   August 19th at 12:31 PM
Ruslan Gonzalez created a Story ND-85 Implement testing filebeat config on a commit

Jira   August 23rd at 10:46 AM
@Chris Neil created a Story ND-86 Deploy to Dev

Jira   August 23rd at 10:46 AM
@Chris Neil created a Story ND-87 Deploy to Stg

Jira   August 23rd at 10:46 AM
@Chris Neil created a Story ND-88 Deploy to Prod

Jira   August 23rd at 10:51 AM
@Chris Neil created a Story ND-89 Document the deployment process

Jira   August 23rd at 10:54 AM
@Chris Neil created a Story ND-90 Update deployment docuement
```
to
```
You have new messages in ncg-digital (ncg-digital.slack.com) From #jira
Jira   August 19th at 12:31 PM Ruslan Gonzalez created a Story ND-85 Implement testing filebeat config on a commit
Jira   August 23rd at 10:46 AM @Chris Neil created a Story ND-86 Deploy to Dev
Jira   August 23rd at 10:46 AM @Chris Neil created a Story ND-87 Deploy to Stg
Jira   August 23rd at 10:46 AM @Chris Neil created a Story ND-88 Deploy to Prod
Jira   August 23rd at 10:51 AM @Chris Neil created a Story ND-89 Document the deployment process
Jira   August 23rd at 10:54 AM @Chris Neil created a Story ND-90 Update deployment docuement
```

linkify: slack:
```
Steve Harrison  12:17 PM
well in a nutshell, you need to move the payment reference to top of page, and then remove this whole section (with the buttons then moving on up)





New
12:18
if you remember we looked at the references and they were just a list….so you will need to create a new property to just extract the payment reference
```

