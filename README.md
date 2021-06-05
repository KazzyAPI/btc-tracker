# BTC Tracker

What this generally does is track a given crypto using the coinbase API and reports back each hour/day/week with the percentage increase/decrease. If the currency falls below a set percentage it will send a push notification to your phone.

## Installation

First we should start with setting up the mobile side of work. First download Push Notification API ~Push notification Simple~. Its a simple app that allows us to send a alert to our phone to get these updates on thresholds broken. If you want to use another form for alerting it can be easily edited within the sendNotif() function.

```Standard Installation
npm install
```

## Further Preparation 

```javascript
let currencyCheck = `Your set currency i.e USD, AUD, and so on....`;
let popUpNotifKey = `Key from the app`;
```

Ensure you have set these fields before starting as it is a vital step. Your work should look similar to this => 

```javascript
let currencyCheck = `USD`;
let popUpNotifKey = `k-12345352fg`;
```

## Finale
Now that we are done all that is needed is to run `node .` to start the script.

##Support my projects!

If you appreciate the work i release as open source consider donating to me <3 It would be appreciated and motivate me to release more open source work! 
BTC Address : `3Aii7THv6cqRTivdEJEWTgxrGAL6KgcZmH`

## License
[MIT](https://choosealicense.com/licenses/mit/)
