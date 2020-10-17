# Simple NodeJS Logger

## written by depascaldc

---

## Install
### `npm install --save logger-nodejs-simple`
---
### Example Usage
```js

const { Logger, ConsoleColors } = require('logger-nodejs-simple');

const log = new Logger(Logger.LOG_LEVELS.DEBUG); // LogLevels DEBUG is the highest value and will show you everything

log.log("This is a nice test message for da log XD")
log.info("This is a nice test message for da log XD") // theese two will be shown when loglevel min. MODERATE

log.warn("This is a nice test message for da log XD") // will be shown when loglevel set to ACCURATE

log.debug("This is a nice test message for da log XD") // will only be shown at log level DEBUG

log.out("This is a nice test OUTPUT for da log XD") // will always be shown and not be sent to logger cache ( cannot be uploaded )

var err = new Error("This is a nice test Error for da log XD") 
err.code = 'SOME_ERR_CODE'
log.err(err) // will always be hown

log.upload()
    .then(url => {
        log.out("Uploaded Log: " + ConsoleColors.CYAN_BOLD_BRIGHT + url)
    }).catch(err => {
        log.out(ConsoleColors.RED_BOLD_BRIGHT + "Coud not upload logs...")
    });

```
---
### Change logLevel
```js
/**
 * 
 * Possible LogLevels are 
 *      NOTHING: -1
 *      MODERATE: 1
 *      ACCURATE: 2
 *      DEBUG: 3
 * 
 */
log.setLogLevel(Logger.LOG_LEVELS.ARGUMENT);
```
---
# Get current logLevel

```js
let level = log.getLogLevel()
```

