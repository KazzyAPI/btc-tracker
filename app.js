const request = require('request');
const c = require('ansi-colors');
let previousPrice = 0;
let previousDayPrice = 0;
let previousWeekPrice = 0;
let previousMonthPrice = 0;
let previousPercentage = 0;
let currencyCheck = ``;
let popUpNotifKey = ``;
let apitest = `https://api.coinbase.com/v2/prices/spot?currency=${currencyCheck}`;
let day = 86400000;
let hour = 3600000;
let week = 6.048e+8;
let month = 2.628e+9; 

if(currencyCheck == '' || popUpNotifKey == '') {
    console.log(c.red(`You must set the required fields in currencyCheck and popUpNotifKey. Script will now exit.....`))
    process.exit(1)
    
}



function redText() {
    return  c.red(new Date().toLocaleString()) + "\x1b[0m | ";
}
function greenText() {
    return  c.green(new Date().toLocaleString()) + "\x1b[0m | ";
}

function logging(string) {
    return console.log(greenText() + string);
}
function errlog(string) {
    return console.log(redText() + string);
}

logging('Bot logged in and tracking Bitcoin')


request.get(apitest, function(err,res,body) {
    
    let bodyFix = JSON.parse(body);
    let livePrice = bodyFix.data.amount;
    previousPrice = parseFloat(livePrice);
    previousDayPrice = parseFloat(livePrice);
    previousWeekPrice = parseFloat(livePrice);
    previousMonthPrice = parseFloat(livePrice);
    logging(`Starting Bitcoin price is $${livePrice}`);
    logging('Successfully set statisitcs for hour,day,week,month...')
})
function sendNotif() {
    const url = `http://xdroid.net/api/message?k=${popUpNotifKey}&t=Bitcoin+Update%21&c=There+was+a+price+change+in+bitcoin%21+Click+here+to+view+the+change.&u=https%3A%2F%2Fwww.google.com%2Fsearch%3Fie%3DUTF-8%26client%3Dms-android-samsung-rvo1%26source%3Dandroid-browser%26q%3Dbitcoin`
    request.post(url, function(err,res,body) {
        if(body) {
            return logging('Sent push notification to phone!');
        } else if(err) {
            return errlog(`Error sending push notification!`);
        }
    })
}

// Checking per hour
setInterval(() => {
    logging('Checking Bitcoins price.')
        request.get(apitest, function(err,res,body) {
        let bodyFix = JSON.parse(body);
        let livePrice = bodyFix.data.amount;
        
        
        logging('Checking Hourly Bitcoin Statistics...')
        logging(`Price of Bitcoin is $${livePrice}`);
        var adjustment = (parseFloat(livePrice) - previousPrice) / previousPrice;
        var mathToPercentage = adjustment * 100;
        //check if is down by 10,50,100%;
        if(mathToPercentage == 0) {
            logging(`Bitcoin is stable!`); 
        }
        if(mathToPercentage < 0) {
             errlog(`Bitcoin is down ${mathToPercentage.toFixed(2)}%`)
        }
        if(mathToPercentage < -10) {
             errlog(`Bitcoin is down ${mathToPercentage.toFixed(2)}%`)
             sendNotif();
        }
        if(mathToPercentage < -50) {
             errlog(`Bitcoin is down ${mathToPercentage.toFixed(2)}%`)
             sendNotif();
        }

        if(mathToPercentage > 0) {
             logging(`Bitcoin is up ${mathToPercentage.toFixed(2)}%`)
        }
        if(mathToPercentage > 20) {
            logging(`Bitcoin is up ${mathToPercentage.toFixed(2)}%`)
            sendNotif();
       }
        if(mathToPercentage > 50) {
             logging(`Bitcoin is up ${mathToPercentage.toFixed(2)}%`)
             sendNotif();
        }
        if(mathToPercentage > 100) {
             logging(`Bitcoin is up ${mathToPercentage.toFixed(2)}%`)
             sendNotif();
        }
        //Set previous price to new price.
        previousPrice = parseFloat(livePrice);

    })
       
}, hour);
// Checking per day
setInterval(() => {
    logging('Checking Bitcoins price.')
        request.get(apitest, function(err,res,body) {
        let bodyFix = JSON.parse(body);
        let livePrice = bodyFix.data.amount;
        
        
        logging('Checking Daily Bitcoin Statistics...')
        logging(`Price of Bitcoin is $${livePrice}`);
        var adjustment = (parseFloat(livePrice) - previousDayPrice) / previousDayPrice;
        var mathToPercentage = adjustment * 100;
        //check if is down by 10,50,100%;
        if(mathToPercentage == 0) {
            logging(`Bitcoin is stable!`); 
        }
        if(mathToPercentage < 0) {
             errlog(`Bitcoin is down ${mathToPercentage.toFixed(2)}%`)
        }
        if(mathToPercentage < -10) {
             errlog(`Bitcoin is down ${mathToPercentage.toFixed(2)}%`)
             sendNotif();
        }
        if(mathToPercentage < -50) {
             errlog(`Bitcoin is down ${mathToPercentage.toFixed(2)}%`)
             sendNotif();
        }

        if(mathToPercentage > 0) {
             logging(`Bitcoin is up ${mathToPercentage.toFixed(2)}%`)
        }
        if(mathToPercentage > 20) {
            logging(`Bitcoin is up ${mathToPercentage.toFixed(2)}%`)
            sendNotif();
       }
        if(mathToPercentage > 50) {
             logging(`Bitcoin is up ${mathToPercentage.toFixed(2)}%`)
             sendNotif();
        }
        if(mathToPercentage > 100) {
             logging(`Bitcoin is up ${mathToPercentage.toFixed(2)}%`)
             sendNotif();
        }
        //Set previous price to new price.
        previousDayPrice = parseFloat(livePrice);

    })
       
}, day);

setInterval(() => {
    logging('Checking Bitcoins price.')
        request.get(apitest, function(err,res,body) {
        let bodyFix = JSON.parse(body);
        let livePrice = bodyFix.data.amount;
        
        
        logging('Checking Weekly Bitcoin Statistics...')
        logging(`Price of Bitcoin is $${livePrice}`);
        var adjustment = (parseFloat(livePrice) - previousWeekPrice) / previousWeekPrice;
        var mathToPercentage = adjustment * 100;
        //check if is down by 10,50,100%;
        if(mathToPercentage == 0) {
            logging(`Bitcoin is stable!`); 
        }
        if(mathToPercentage < 0) {
             errlog(`Bitcoin is down ${mathToPercentage.toFixed(2)}%`)
        }
        if(mathToPercentage < -10) {
             errlog(`Bitcoin is down ${mathToPercentage.toFixed(2)}%`)
             sendNotif();
        }
        if(mathToPercentage < -50) {
             errlog(`Bitcoin is down ${mathToPercentage.toFixed(2)}%`)
             sendNotif();
        }

        if(mathToPercentage > 0) {
             logging(`Bitcoin is up ${mathToPercentage.toFixed(2)}%`)
        }
        if(mathToPercentage > 20) {
            logging(`Bitcoin is up ${mathToPercentage.toFixed(2)}%`)
            sendNotif();
       }
        if(mathToPercentage > 50) {
             logging(`Bitcoin is up ${mathToPercentage.toFixed(2)}%`)
             sendNotif();
        }
        if(mathToPercentage > 100) {
             logging(`Bitcoin is up ${mathToPercentage.toFixed(2)}%`)
             sendNotif();
        }
        //Set previous price to new price.
        previousWeekPrice = parseFloat(livePrice);

    })
       
}, week);






