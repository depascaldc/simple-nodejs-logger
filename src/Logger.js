/**
 * NodeJS Logger written by depascaldc
 * 
 * Copyright (C) 2020 | depascaldc - All Rights Reserved
 * 
 * You may use, distribute and modify this code under the
 * terms of the GPL-3.0 license, which unfortunately won't be
 * written for another century.
 * 
 * You should have received a copy of the GPL-3.0 license with
 * this file. If not, please write to: , or visit : https://www.gnu.org/licenses/gpl-3.0.txt
 *
 */


const C = require('./ConsoleColors');
const fetch = require('node-fetch')

/**
 * Logger Exception
 * @param {Object} message 
 * @param {String | Number} code 
 */
var LoggerException = function (message, code) {
    var error = new Error(message);
    if (code != null) error.code = code;
    return error;
}
LoggerException.prototype = Object.create(Error.prototype);

/**
 * @returns dateAndTimeString [YYYY:MM:DD | HH:MM:SS]
 */
var getDateAndTimeNow = function () {
    var date = new Date();
    let Y = date.getFullYear();
    let MO = date.getMonth();
    MO++;
    let D = date.getDate()
    let H = date.getHours()
    let M = date.getMinutes()
    let S = date.getSeconds()
    if (MO < 10) MO = "0" + MO
    if (D < 10) D = "0" + D
    if (H < 10) H = "0" + H
    if (M < 10) M = "0" + M
    if (S < 10) S = "0" + S
    return `${C.YELLOW}[${C.GREEN}${Y}${C.YELLOW}.${C.GREEN}${MO}${C.YELLOW}.${C.GREEN}${D}${C.YELLOW} | ${C.RED}${H}${C.YELLOW}:${C.RED}${M}${C.YELLOW}:${C.RED}${S}${C.YELLOW}]${C.RESET}`
}

module.exports = class Logger {

    /**
     * Current loglevel
     */
    static LOG_LEVEL = -1;

    /**
     * Cached log ( length = 1000 lines )
     */
    static LOG_CACHE = [];

    /**
     * 
     *      NOTHING = -1                = Shows nothing then error
     *      MODERATE = 0                = Shows info // log
     *      ACCURATE = 1  (default)     = Shows info // log // warn    
     *      DEBUG = 2                   = Shows everything ( extra debug )
     * 
     *      errors (log.error()) // outs (log.out()) will be always shown in console.
     * 
     */
    static LOG_LEVELS = {
        NOTHING: -1,
        MODERATE: 1,
        ACCURATE: 2,
        DEBUG: 3
    }

    /**
     * Construct Loglevel = default ( INFO )
     * 
     * @param {Number} logLevel 
     * 
     */
    constructor(logLevel) {
        if (!logLevel)
            Logger.LOG_LEVEL = 1;
        else
            Logger.setLogLevel(logLevel);

        this.upload = Logger.upload;

        this.setLogLevel = Logger.setLogLevel;
        this.getLogLevel = Logger.getLogLevel;

        this.log = Logger.log;
        this.info = Logger.info;

        this.debug = Logger.debug;
        this.warn = Logger.warn;

        this.error = Logger.error;
        this.err = Logger.error;

        this.out = Logger.out;

        this.clear = Logger.clear;
    }

    /**
     * Upload the log to haste server (hasteb.in)
     * @returns {Promise<URL>} url
     */
    static async upload() {
        return new Promise(async (resolve, reject) => {
            if (!Logger.LOG_CACHE)
                return reject(new LoggerException("Nothing to upload."));
            var logString = Logger.LOG_CACHE.join("\n");
            let hasteServer = 'https://hasteb.in'
            let pasteUri = hasteServer + '/documents'
            fetch(pasteUri, {
                    method: 'POST',
                    body: logString
                })
                .then(res => res.json()).catch(err => reject(err))
                .then(obj => {
                    return resolve(new URL(hasteServer + "/" + obj.key + ".log"))
                }).catch(err => reject(err));

        });
    }

    static pushMessage(message) {
        if (Logger.LOG_CACHE.length >= 1000)
            Logger.LOG_CACHE.shift();
        Logger.LOG_CACHE.push(C.stripColors(message))
    }

    /**
     * Set the Loglevel to a specific number
     *      You can use logger.setLogLevel()
     * 
     * @param {Number} logLevel 
     * @param {CallableFunction} callback
     * 
     */
    static setLogLevel(logLevel, callback) {
        if (Logger.LOG_LEVEL < -1 || Logger.LOG_LEVEL > 3)
            throw new LoggerException("The Log Level can only be 0 - 6", "INVALID_ARGUMENT");
        Logger.LOG_LEVEL = logLevel;
        if (callback)
            callback(true);
        else return true;
    }

    /**
     * Get the current loglevel
     * @returns {Number} loglevel
     */
    static getLogLevel() {
        return Logger.LOG_LEVEL;
    }

    /**
     * Print some toLog
     * @param {Object} message 
     */
    static log(message) {
        if (Logger.LOG_LEVEL > -1) {
            let date = getDateAndTimeNow();
            let msg = C.WHITE + "[" + C.GREEN_BOLD + "/LOG\\" + C.WHITE + "] " + date + "     " + C.GREEN + message + C.RESET
            Logger.pushMessage(msg);
            console.log(msg)
        }
    }

    /**
     * Print some informations
     * @param {Object} message 
     */
    static info(message) {
        if (Logger.LOG_LEVEL > -1) {
            let date = getDateAndTimeNow();
            let msg = C.WHITE + "[" + C.GREEN_BOLD_BRIGHT + "INFOS" + C.WHITE + "] " + date + "     " + C.GREEN_BRIGHT + message + C.RESET
            Logger.pushMessage(msg);
            console.log(msg)
        }
    }

    /**
     * Print some debug informations (Will just be shown when loglevel is Logger.LOG_LEVELS.DEBUG )
     * @param {Object} message 
     */
    static debug(message) {
        if (Logger.LOG_LEVEL >= 2) {
            let date = getDateAndTimeNow();
            let msg = C.WHITE + "[" + C.CYAN_BOLD + "DEBUG" + C.WHITE + "] " + date + "     " + C.CYAN + message + C.RESET
            Logger.pushMessage(msg);
            console.log(msg)
        }
    }

    /**
     * Print some warnings
     * @param {Object} message 
     */
    static warn(message) {
        if (Logger.LOG_LEVEL >= 1) {
            let date = getDateAndTimeNow();
            let msg = C.WHITE + "[" + C.YELLOW_BOLD + C.BLINK + "/WARN" + C.RESET + C.WHITE + "] " + date + "     " + C.YELLOW_BRIGHT + message + C.RESET
            Logger.pushMessage(msg);
            console.log(msg)
        }
    }

    /**
     * Print an Error ( will be always shown )
     * @param {Object} messageOrError 
     * @param {Error} error (optional)
     */
    static error(messageOrError, error) {
        let date = getDateAndTimeNow();
        if (messageOrError instanceof Error) {
            return Logger.error("", messageOrError);
        }
        if (messageOrError != null && error != null && error instanceof Error) {
            messageOrError = messageOrError + "\n" + error.message + "\n" + error.stack + (error.code != null ? "\n  Code: " + C.RED_BOLD + error.code : "");
        } else if (messageOrError != null && error != null && error instanceof String) {
            messageOrError = messageOrError + "\n" + error;
        }
        let msg = C.WHITE + "[" + C.RED_BOLD + C.BLINK + "// ERROR \\\\" + C.RESET + C.WHITE + "] " + date + "\n" + C.RED_BRIGHT + messageOrError + C.RESET
        Logger.pushMessage(msg);
        console.log(msg)
    }

    /**
     * Print an output ( will be always shown ) ( will not be cached for uploads )
     * @param {Object} message 
     */
    static out(message) {
        let date = getDateAndTimeNow();
        let msg = C.WHITE + "[" + C.WHITE_BOLD + "//OUT" + C.WHITE + "] " + date + C.YELLOW + " >" + C.RED_BRIGHT + ">  " + C.WHITE + message + C.RESET
        console.log(msg)
    }

    /**
     * Clear Console Output
     */
    static clear() {
        console.clear();
    }




}