var CABLES;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ core)
});

// NAMESPACE OBJECT: ./src/core/base64.js
var base64_namespaceObject = {};
__webpack_require__.r(base64_namespaceObject);
__webpack_require__.d(base64_namespaceObject, {
  b64decTypedArray: () => (b64decTypedArray),
  b64encTypesArray: () => (b64encTypesArray),
  base64Chars: () => (base64Chars),
  base64lookup: () => (base64lookup)
});

// NAMESPACE OBJECT: ./src/core/utils.js
var utils_namespaceObject = {};
__webpack_require__.r(utils_namespaceObject);
__webpack_require__.d(utils_namespaceObject, {
  UTILS: () => (UTILS),
  ajax: () => (ajax),
  ajaxSync: () => (ajaxSync),
  basename: () => (basename),
  cacheBust: () => (cacheBust),
  clamp: () => (clamp),
  cleanJson: () => (cleanJson),
  copyArray: () => (copyArray),
  filename: () => (filename),
  generateUUID: () => (generateUUID),
  getShortOpName: () => (getShortOpName),
  keyCodeToName: () => (keyCodeToName),
  logStack: () => (logStack),
  map: () => (map),
  prefixedHash: () => (prefixedHash),
  request: () => (request),
  shortId: () => (shortId),
  shuffleArray: () => (shuffleArray),
  simpleId: () => (simpleId),
  smoothStep: () => (smoothStep),
  smootherStep: () => (smootherStep),
  uuid: () => (uuid)
});

// NAMESPACE OBJECT: ./src/core/anim.js
var anim_namespaceObject = {};
__webpack_require__.r(anim_namespaceObject);
__webpack_require__.d(anim_namespaceObject, {
  ANIM: () => (ANIM),
  Anim: () => (Anim)
});

;// CONCATENATED MODULE: ./src/core/base64.js
const base64Chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

// Use a lookup table to find the index.
const _base64lookup = new Uint8Array(256);
for (let i = 0; i < base64Chars.length; i++) _base64lookup[base64Chars.charCodeAt(i)] = i;

const base64lookup = _base64lookup;

const b64encTypesArray = function (arraybuffer)
{
    if (arraybuffer.buffer) arraybuffer = arraybuffer.buffer;
    let bytes = new Uint8Array(arraybuffer),
        i,
        len = bytes.length,
        base64 = "";

    for (i = 0; i < len; i += 3)
    {
        base64 += base64Chars[bytes[i] >> 2];
        base64 += base64Chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
        base64 += base64Chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
        base64 += base64Chars[bytes[i + 2] & 63];
    }

    if (len % 3 === 2) base64 = base64.substring(0, base64.length - 1) + "=";
    else if (len % 3 === 1) base64 = base64.substring(0, base64.length - 2) + "==";

    return base64;
};

const b64decTypedArray = function (base64)
{
    let bufferLength = base64.length * 0.75,
        len = base64.length,
        i,
        p = 0,
        encoded1,
        encoded2,
        encoded3,
        encoded4;

    if (base64[base64.length - 1] === "=")
    {
        bufferLength--;
        if (base64[base64.length - 2] === "=") bufferLength--;
    }

    let arraybuffer = new ArrayBuffer(bufferLength),
        bytes = new Uint8Array(arraybuffer);

    for (i = 0; i < len; i += 4)
    {
        encoded1 = base64lookup[base64.charCodeAt(i)];
        encoded2 = base64lookup[base64.charCodeAt(i + 1)];
        encoded3 = base64lookup[base64.charCodeAt(i + 2)];
        encoded4 = base64lookup[base64.charCodeAt(i + 3)];

        bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
        bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
        bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
    }

    return arraybuffer;
};

;// CONCATENATED MODULE: ./src/core/constants.js
const CONSTANTS = {
    "ANIM": {
        "EASINGS": [
            "linear",
            "absolute",
            "smoothstep",
            "smootherstep",
            "Cubic In",
            "Cubic Out",
            "Cubic In Out",
            "Expo In",
            "Expo Out",
            "Expo In Out",
            "Sin In",
            "Sin Out",
            "Sin In Out",
            "Quart In",
            "Quart Out",
            "Quart In Out",
            "Quint In",
            "Quint Out",
            "Quint In Out",
            "Back In",
            "Back Out",
            "Back In Out",
            "Elastic In",
            "Elastic Out",
            "Bounce In",
            "Bounce Out",
        ],
        "EASING_LINEAR": 0,
        "EASING_ABSOLUTE": 1,
        "EASING_SMOOTHSTEP": 2,
        "EASING_SMOOTHERSTEP": 3,
        "EASING_CUBICSPLINE": 4,

        "EASING_CUBIC_IN": 5,
        "EASING_CUBIC_OUT": 6,
        "EASING_CUBIC_INOUT": 7,

        "EASING_EXPO_IN": 8,
        "EASING_EXPO_OUT": 9,
        "EASING_EXPO_INOUT": 10,

        "EASING_SIN_IN": 11,
        "EASING_SIN_OUT": 12,
        "EASING_SIN_INOUT": 13,

        "EASING_BACK_IN": 14,
        "EASING_BACK_OUT": 15,
        "EASING_BACK_INOUT": 16,

        "EASING_ELASTIC_IN": 17,
        "EASING_ELASTIC_OUT": 18,

        "EASING_BOUNCE_IN": 19,
        "EASING_BOUNCE_OUT": 21,

        "EASING_QUART_IN": 22,
        "EASING_QUART_OUT": 23,
        "EASING_QUART_INOUT": 24,

        "EASING_QUINT_IN": 25,
        "EASING_QUINT_OUT": 26,
        "EASING_QUINT_INOUT": 27,
    },

    "OP": {
        "OP_PORT_TYPE_VALUE": 0,
        "OP_PORT_TYPE_NUMBER": 0,
        "OP_PORT_TYPE_FUNCTION": 1,
        "OP_PORT_TYPE_TRIGGER": 1,
        "OP_PORT_TYPE_OBJECT": 2,
        "OP_PORT_TYPE_TEXTURE": 2,
        "OP_PORT_TYPE_ARRAY": 3,
        "OP_PORT_TYPE_DYNAMIC": 4,
        "OP_PORT_TYPE_STRING": 5,

        "OP_VERSION_PREFIX": "_v",
    },

    "PORT": {
        "PORT_DIR_IN": 0,
        "PORT_DIR_OUT": 1,
    },

    "PACO": {
        "PACO_CLEAR": 0,
        "PACO_VALUECHANGE": 1,
        "PACO_OP_DELETE": 2,
        "PACO_UNLINK": 3,
        "PACO_LINK": 4,
        "PACO_LOAD": 5,
        "PACO_OP_CREATE": 6,
        "PACO_OP_ENABLE": 7,
        "PACO_OP_DISABLE": 8,
        "PACO_UIATTRIBS": 9,
        "PACO_VARIABLES": 10,
        "PACO_TRIGGERS": 11,
        "PACO_PORT_SETVARIABLE": 12,
        "PACO_PORT_SETANIMATED": 13,
        "PACO_PORT_ANIM_UPDATED": 14,
        "PACO_DESERIALIZE": 15

    },
};

;// CONCATENATED MODULE: ./src/core/utils.js

/**
 * @namespace external:CABLES#Utils
 */



const UTILS = {};
/**
 * Merge two Float32Arrays.
 * @function float32Concat
 * @memberof Utils
 * @param {Float32Array} first Left-hand side array
 * @param {Float32Array} second Right-hand side array
 * @return {Float32Array}
 * @static
 */
UTILS.float32Concat = function (first, second)
{
    if (!(first instanceof Float32Array)) first = new Float32Array(first);
    if (!(second instanceof Float32Array)) second = new Float32Array(second);

    const result = new Float32Array(first.length + second.length);

    result.set(first);
    result.set(second, first.length);

    return result;
};

/**
 * get op shortname: only last part of fullname and without version
 * @function getShortOpName
 * @memberof CABLES
 * @param {string} fullname full op name
 * @static
 */
const getShortOpName = function (fullname)
{
    let name = fullname.split(".")[fullname.split(".").length - 1];

    if (name.contains(CONSTANTS.OP.OP_VERSION_PREFIX))
    {
        const n = name.split(CONSTANTS.OP.OP_VERSION_PREFIX)[1];
        name = name.substring(0, name.length - (CONSTANTS.OP.OP_VERSION_PREFIX + n).length);
    }
    return name;
};

/**
 * randomize order of an array
 * @function shuffleArray
 * @memberof Utils
 * @param {Array|Float32Array} array {Array} original
 * @return {Array|Float32Array} shuffled array
 * @static
 */
const shuffleArray = function (array)
{
    for (let i = array.length - 1; i > 0; i--)
    {
        const j = Math.floor(Math.seededRandom() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
};


/**
 * generate a short "relativly unique" id
 * @function shortId
 * @memberof Utils
 * @return {String} generated ID
 * @static
 */

const _shortIds = {};
const _shortId = function ()
{
    let str = Math.random().toString(36).substr(2, 9);

    if (_shortIds.hasOwnProperty(str)) str = _shortId();
    _shortIds[str] = true;
    return str;
};
const shortId = _shortId;


/**
 * generate a UUID
 * @function uuid
 * @memberof Utils
 * @return {String} generated UUID
 * @static
 */
const _uuid = function ()
{
    let d = new Date().getTime();
    const uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) =>
    {
        const r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
    });
    return uuid;
};
const uuid = _uuid;
const generateUUID = _uuid;



function cleanJson(obj)
{
    for (const i in obj)
    {
        if (obj[i] && typeof objValue === "object" && obj[i].constructor === Object) obj[i] = cleanJson(obj[i]);

        if (obj[i] === null || obj[i] === undefined) delete obj[i];
        else if (Array.isArray(obj[i]) && obj[i].length == 0) delete obj[i];
    }

    return obj;
}


/**
 * @see http://stackoverflow.com/q/7616461/940217
 * @memberof Utils
 * @param str
 * @param prefix
 * @return {string}
 */
const _prefixedHash = function (str, prefix = "id")
{
    let hash = 0;
    if (Array.prototype.reduce)
    {
        hash = str.split("").reduce((a, b) => { a = ((a << 5) - a) + b.charCodeAt(0); return a & a; }, 0);
    }
    else
    {
        if (str.length > 0)
        {
            for (let i = 0; i < str.length; i++)
            {
                let character = str.charCodeAt(i);
                hash = ((hash << 5) - hash) + character;
                hash &= hash; // Convert to 32bit integer
            }
        }
    }
    return prefix + "" + hash;
};
const prefixedHash = _prefixedHash;

/**
 * generate a simple ID
 * @function simpleId
 * @memberof Utils
 * @return {Number} new id
 * @static
 */
let simpleIdCounter = 0;
const simpleId = function ()
{
    simpleIdCounter++;
    return simpleIdCounter;
};

/**
 * smoothStep a value
 * @function smoothStep
 * @memberof Utils
 * @function
 * @param {Number} perc value value to be smoothed [0-1]
 * @return {Number} smoothed value
 * @static
 */
const smoothStep = function (perc)
{
    const x = Math.max(0, Math.min(1, (perc - 0) / (1 - 0)));
    perc = x * x * (3 - 2 * x); // smoothstep
    return perc;
};

/**
 * smootherstep a value
 * @function smootherStep
 * @memberof Utils
 * @param {Number} perc value to be smoothed [0-1]
 * @return {Number} smoothed value
 * @static
 */
const smootherStep = function (perc)
{
    const x = Math.max(0, Math.min(1, (perc - 0) / (1 - 0)));
    perc = x * x * x * (x * (x * 6 - 15) + 10); // smootherstep
    return perc;
};


/**
 * clamp number / make sure its between min/max
 * @function clamp
 * @memberof Utils
 * @param {Number} value value to be mapped
 * @param {Number} min minimum value
 * @param {Number} max maximum value
 * @static
 */
const clamp = function (value, min, max)
{
    return Math.min(Math.max(value, min), max);
};

/**
 * map a value in a range to a value in another range
 * @function map
 * @memberof Utils
 * @param {Number} x value to be mapped
 * @param {Number} _oldMin old range minimum value
 * @param {Number} _oldMax old range maximum value
 * @param {Number} _newMin new range minimum value
 * @param {Number} _newMax new range maximum value
 * @param {Number} _easing
 * @return {Number} mapped value
 * @static
 */
const map = function (x, _oldMin, _oldMax, _newMin, _newMax, _easing)
{
    if (x >= _oldMax) return _newMax;
    if (x <= _oldMin) return _newMin;

    let reverseInput = false;
    const oldMin = Math.min(_oldMin, _oldMax);
    const oldMax = Math.max(_oldMin, _oldMax);
    if (oldMin != _oldMin) reverseInput = true;

    let reverseOutput = false;
    const newMin = Math.min(_newMin, _newMax);
    const newMax = Math.max(_newMin, _newMax);
    if (newMin != _newMin) reverseOutput = true;

    let portion = 0;
    let r = 0;

    if (reverseInput) portion = ((oldMax - x) * (newMax - newMin)) / (oldMax - oldMin);
    else portion = ((x - oldMin) * (newMax - newMin)) / (oldMax - oldMin);

    if (reverseOutput) r = newMax - portion;
    else r = portion + newMin;

    if (!_easing) return r;
    if (_easing == 1)
    {
        // smoothstep
        x = Math.max(0, Math.min(1, (r - _newMin) / (_newMax - _newMin)));
        return _newMin + x * x * (3 - 2 * x) * (_newMax - _newMin);
    }
    if (_easing == 2)
    {
        // smootherstep
        x = Math.max(0, Math.min(1, (r - _newMin) / (_newMax - _newMin)));
        return _newMin + x * x * x * (x * (x * 6 - 15) + 10) * (_newMax - _newMin);
    }

    return r;
};

/**
 * @namespace Math
 */
/**
 * set random seed for seededRandom()
 * @memberof Math
 * @type Number
 * @static
 */
Math.randomSeed = 1;


Math.setRandomSeed = function (seed)
{
    // https://github.com/cables-gl/cables_docs/issues/622
    Math.randomSeed = seed * 50728129;
    if (seed != 0)
    {
        Math.randomSeed = Math.seededRandom() * 17624813;
        Math.randomSeed = Math.seededRandom() * 9737333;
    }
};


/**
 * generate a seeded random number
 * @function seededRandom
 * @memberof Math
 * @param {Number} max minimum possible random number
 * @param {Number} min maximum possible random number
 * @return {Number} random value
 * @static
 */
Math.seededRandom = function (max, min)
{
    if (Math.randomSeed === 0) Math.randomSeed = Math.random() * 999;
    max = max || 1;
    min = min || 0;

    Math.randomSeed = (Math.randomSeed * 9301 + 49297) % 233280;
    const rnd = Math.randomSeed / 233280.0;

    return min + rnd * (max - min);
};


// ----------------------------------------------------------------

/**
 * returns true if parameter is a number
 * @function isNumeric
 * @memberof Utils
 * @param {Any} n value The value to check.
 * @return {Boolean}
 * @static
 */
UTILS.isNumeric = function (n)
{
    return !isNaN(parseFloat(n)) && isFinite(n);
};

/**
 * returns true if parameter is array
 * @function isArray
 * @param {Any} v value Value to check
 * @memberof Utils
 * @return {Boolean}
 * @static
 */
UTILS.isArray = function (v)
{
    return Object.prototype.toString.call(v) === "[object Array]";
};

/**
 * @namespace String
 */

/**
 * append a linebreak to a string
 * @function endl
 * @memberof String
 * @return {String} string with newline break appended ('\n')
 */
String.prototype.endl = function ()
{
    return this + "\n";
};

/**
 * return true if string starts with prefix
 * @function startsWith
 * @memberof String
 * @param {String} prefix The prefix to check.
 * @return {Boolean}
 */
String.prototype.startsWith = function (prefix)
{
    return this.indexOf(prefix) === 0;
};

/**
 * return true if string ends with suffix
 * @function endsWith
 * @memberof String
 * @param {String} suffix
 * @return {Boolean}
 */
String.prototype.endsWith = String.prototype.endsWith || function (suffix)
{
    return this.match(suffix + "$") == suffix;
};

/**
 * return true if string contains string
 * @function contains
 * @memberof String
 * @param {String} searchStr
 * @return {Boolean}
 */
String.prototype.contains = String.prototype.contains || function (searchStr)
{
    return this.indexOf(searchStr) > -1;
};



// ----------------------------------------------------------------

/**
 * append a unique/random parameter to a url, so the browser is forced to reload the file, even if its cached
 * @function cacheBust
 * @static
 * @memberof Utils
 * @param {String} url The url to append the cachebuster parameter to.
 * @return {String} url with cachebuster parameter
 */
const cacheBust = function (url = "")
{
    if (!url) return "";
    if (url.startsWith("data:")) return;
    if (url.contains("?")) url += "&";
    else url += "?";
    return url + "cache=" + CABLES.uuid();
};

/**
 * copy the content of an array
 * @function copyArray
 * @static
 * @memberof Utils
 * @param {Array} src sourceArray
 * @param {Array} dst optional
 * @return {Array} dst
 */
const copyArray = function (src, dst)
{
    if (!src) return null;
    dst = dst || [];
    dst.length = src.length;
    for (let i = 0; i < src.length; i++)
    {
        dst[i] = src[i];
    }

    return dst;
};


/**
 * return the filename part of a url without extension
 * @function basename
 * @static
 * @memberof Utils
 * @param {String} url
 * @return {String} just the filename
 */
const basename = function (url)
{
    let name = CABLES.filename(url);

    const parts2 = name.split(".");
    name = parts2[0];

    return name;
};

/**
 * output a stacktrace to the console
 * @function logStack
 * @static
 * @memberof Utils
 */
const logStack = function ()
{
    console.log("logstack", (new Error()).stack);
};

/**
 * return the filename part of a url
 * @function filename
 * @static
 * @memberof Utils
 * @param {String} url
 * @return {String} just the filename
 */
const filename = function (url)
{
    let name = "";
    if (!url) return "";

    if (url.startsWith("data:") && url.contains(":"))
    {
        const parts = url.split(",");
        return parts[0];
    }

    let parts = (url + "").split("/");
    if (parts.length > 0)
    {
        const str = parts[parts.length - 1];
        let parts2 = str.split("?");
        name = parts2[0];
    }

    return name || "";
};


const ajaxSync = function (url, cb, method, post, contenttype)
{
    request({
        "url": url,
        "cb": cb,
        "method": method,
        "data": post,
        "contenttype": contenttype,
        "sync": true,
    });
};

/**
 * make an ajax request
 * @static
 * @function ajax
 * @param url
 * @param cb
 * @param method
 * @param post
 * @param contenttype
 * @param jsonP
 * @param headers
 * @param options
 */
const ajax = function (url, cb, method, post, contenttype, jsonP, headers = {}, options = {})
{
    const requestOptions = {
        "url": url,
        "cb": cb,
        "method": method,
        "data": post,
        "contenttype": contenttype,
        "sync": false,
        "jsonP": jsonP,
        "headers": headers,
    };
    if (options && options.credentials) requestOptions.credentials = options.credentials;
    request(requestOptions);
};

const request = function (options)
{
    if (!options.hasOwnProperty("asynch")) options.asynch = true;

    let xhr;
    try
    {
        xhr = new XMLHttpRequest();
    }
    catch (e) {}

    xhr.onreadystatechange = function ()
    {
        if (xhr.readyState != 4) return;

        if (options.cb)
        {
            if (xhr.status == 200 || xhr.status == 0) options.cb(false, xhr.responseText, xhr);
            else options.cb(true, xhr.responseText, xhr);
        }
    };

    try
    {
        xhr.open(options.method ? options.method.toUpperCase() : "GET", options.url, !options.sync);
    }
    catch (e)
    {
        if (options.cb && e) options.cb(true, e.msg, xhr);
    }

    if (typeof options.headers === "object")
    {
        if (options.headers)
        {
            const keys = Object.keys(options.headers);
            for (let i = 0; i < keys.length; i++)
            {
                const name = keys[i];
                const value = options.headers[name];
                xhr.setRequestHeader(name, value);
            }
        }
    }

    if (options.credentials && options.credentials !== "omit")
    {
        xhr.withCredentials = true;
    }

    try
    {
        if (!options.post && !options.data)
        {
            xhr.send();
        }
        else
        {
            xhr.setRequestHeader(
                "Content-type",
                options.contenttype ? options.contenttype : "application/x-www-form-urlencoded",
            );
            xhr.send(options.data || options.post);
        }
    }
    catch (e)
    {
        if (options.cb) options.cb(true, e.msg, xhr);
    }
};


const keyCodeToName = function (keyCode)
{
    if (!keyCode && keyCode !== 0) return "Unidentified";
    const keys = {
        "8": "Backspace",
        "9": "Tab",
        "12": "Clear",
        "13": "Enter",
        "16": "Shift",
        "17": "Control",
        "18": "Alt",
        "19": "Pause",
        "20": "CapsLock",
        "27": "Escape",
        "32": "Space",
        "33": "PageUp",
        "34": "PageDown",
        "35": "End",
        "36": "Home",
        "37": "ArrowLeft",
        "38": "ArrowUp",
        "39": "ArrowRight",
        "40": "ArrowDown",
        "45": "Insert",
        "46": "Delete",
        "112": "F1",
        "113": "F2",
        "114": "F3",
        "115": "F4",
        "116": "F5",
        "117": "F6",
        "118": "F7",
        "119": "F8",
        "120": "F9",
        "121": "F10",
        "122": "F11",
        "123": "F12",
        "144": "NumLock",
        "145": "ScrollLock",
        "224": "Meta"
    };
    if (keys[keyCode])
    {
        return keys[keyCode];
    }
    else
    {
        return String.fromCharCode(keyCode);
    }
};
// ----------------------------------------------------------------

window.performance = window.performance || {
    "offset": Date.now(),
    "now": function now()
    {
        return Date.now() - this.offset;
    },
};



;// CONCATENATED MODULE: ../shared/client/src/logger.js
/* eslint-disable no-console */

class Logger
{
    constructor(initiator)
    {
        this.initiator = initiator;
    }

    stack(t)
    {
        console.info("[" + this.initiator + "] ", t);
        console.log((new Error()).stack);
    }

    groupCollapsed(t)
    {
        if ((CABLES.UI && CABLES.UI.logFilter.filterLog({ "initiator": this.initiator, "level": 0 }, ...arguments)) || !CABLES.logSilent) console.log("[" + this.initiator + "]", ...arguments);

        console.groupCollapsed("[" + this.initiator + "] " + t);
    }

    table(t)
    {
        console.table(t);
    }

    groupEnd()
    {
        console.groupEnd();
    }

    error()
    {
        if ((CABLES.UI && CABLES.UI.logFilter.filterLog({ "initiator": this.initiator, "level": 2 }, ...arguments)) || !CABLES.logSilent)
            console.error("[" + this.initiator + "]", ...arguments);
    }

    errorGui()
    {
        if (CABLES.UI) CABLES.UI.logFilter.filterLog({ "initiator": this.initiator, "level": 2 }, ...arguments);
    }

    warn()
    {
        if ((CABLES.UI && CABLES.UI.logFilter.filterLog({ "initiator": this.initiator, "level": 1 }, ...arguments)) || !CABLES.logSilent)
            console.warn("[" + this.initiator + "]", ...arguments);
    }

    verbose()
    {
        if ((CABLES.UI && CABLES.UI.logFilter.filterLog({ "initiator": this.initiator, "level": 0 }, ...arguments)) || !CABLES.logSilent)
            console.log("[" + this.initiator + "]", ...arguments);
    }

    info()
    {
        if ((CABLES.UI && CABLES.UI.logFilter.filterLog({ "initiator": this.initiator, "level": 0 }, ...arguments)) || !CABLES.logSilent)
            console.info("[" + this.initiator + "]", ...arguments);
    }

    log()
    {
        if ((CABLES.UI && CABLES.UI.logFilter.filterLog({ "initiator": this.initiator, "level": 0 }, ...arguments)) || !CABLES.logSilent)
            console.log("[" + this.initiator + "]", ...arguments);
    }

    logGui()
    {
        if (CABLES.UI) CABLES.UI.logFilter.filterLog({ "initiator": this.initiator, "level": 0 }, ...arguments);
    }

    userInteraction(text)
    {
        // this.log({ "initiator": "userinteraction", "text": text });
    }
}

;// CONCATENATED MODULE: ./src/core/anim_key.js


const Key = function (obj)
{
    this.time = 0.0;
    this.value = 0.0;
    // this.ui = null;
    this.onChange = null;
    this._easing = 0;
    // this.bezTangIn = 0;
    // this.bezTangOut = 0;
    // this.bezTime = 0.5;
    // this.bezValue = 0;
    // this.bezTimeIn = -0.5;
    // this.bezValueIn = 0;

    this.cb = null;
    this.cbTriggered = false;

    // const bezierAnim = null;
    // this._updateBezier = false;

    this.setEasing(CONSTANTS.ANIM.EASING_LINEAR);
    this.set(obj);
};

Key.cubicSpline = function (perc, key1, key2)
{
    let
        previousPoint = key1.value,
        previousTangent = key1.bezTangOut,
        nextPoint = key2.value,
        nextTangent = key2.bezTangIn;
    let t = perc;
    let t2 = t * t;
    let t3 = t2 * t;

    return (2 * t3 - 3 * t2 + 1) * previousPoint + (t3 - 2 * t2 + t) * previousTangent + (-2 * t3 + 3 * t2) * nextPoint + (t3 - t2) * nextTangent;
};

Key.easeCubicSpline = function (perc, key2)
{
    return Key.cubicSpline(perc, this, key2);
};


Key.linear = function (perc, key1, key2)
{
    return parseFloat(key1.value) + parseFloat(key2.value - key1.value) * perc;
};

Key.easeLinear = function (perc, key2)
{
    return Key.linear(perc, this, key2);
};

Key.easeAbsolute = function (perc, key2)
{
    return this.value;
};

const easeExpoIn = function (t)
{
    return (t = 2 ** (10 * (t - 1)));
};

Key.easeExpoIn = function (t, key2)
{
    t = easeExpoIn(t);
    return Key.linear(t, this, key2);
};

const easeExpoOut = function (t)
{
    t = -(2 ** (-10 * t)) + 1;
    return t;
};

Key.easeExpoOut = function (t, key2)
{
    t = easeExpoOut(t);
    return Key.linear(t, this, key2);
};

const easeExpoInOut = function (t)
{
    t *= 2;
    if (t < 1)
    {
        t = 0.5 * 2 ** (10 * (t - 1));
    }
    else
    {
        t--;
        t = 0.5 * (-(2 ** (-10 * t)) + 2);
    }
    return t;
};

Key.easeExpoInOut = function (t, key2)
{
    t = easeExpoInOut(t);
    return Key.linear(t, this, key2);
};

Key.easeSinIn = function (t, key2)
{
    t = -1 * Math.cos((t * Math.PI) / 2) + 1;
    return Key.linear(t, this, key2);
};

Key.easeSinOut = function (t, key2)
{
    t = Math.sin((t * Math.PI) / 2);
    return Key.linear(t, this, key2);
};

Key.easeSinInOut = function (t, key2)
{
    t = -0.5 * (Math.cos(Math.PI * t) - 1.0);
    return Key.linear(t, this, key2);
};

const easeCubicIn = function (t)
{
    t = t * t * t;
    return t;
};

Key.easeCubicIn = function (t, key2)
{
    t = easeCubicIn(t);
    return Key.linear(t, this, key2);
};


// b 0
// c 1/2 or 1
// d always 1
// easeOutCubic: function (x, t, b, c, d) {
//     return c*((t=t/d-1)*t*t + 1) + b;

Key.easeInQuint = function (t, key2)
{
    t = t * t * t * t * t;
    return Key.linear(t, this, key2);
};
Key.easeOutQuint = function (t, key2)
{
    t = (t -= 1) * t * t * t * t + 1;
    return Key.linear(t, this, key2);
};
Key.easeInOutQuint = function (t, key2)
{
    if ((t /= 0.5) < 1) t = 0.5 * t * t * t * t * t;
    else t = 0.5 * ((t -= 2) * t * t * t * t + 2);
    return Key.linear(t, this, key2);
};

Key.easeInQuart = function (t, key2)
{
    t = t * t * t * t;
    return Key.linear(t, this, key2);
};

Key.easeOutQuart = function (t, key2)
{
    // return -c * ((t=t/d-1)*t*t*t - 1) + b;
    t = -1 * ((t -= 1) * t * t * t - 1);
    return Key.linear(t, this, key2);
};

Key.easeInOutQuart = function (t, key2)
{
    if ((t /= 0.5) < 1) t = 0.5 * t * t * t * t;
    else t = -0.5 * ((t -= 2) * t * t * t - 2);
    return Key.linear(t, this, key2);
};

Key.bounce = function (t)
{
    if ((t /= 1) < 1 / 2.75) t = 7.5625 * t * t;
    else if (t < 2 / 2.75) t = 7.5625 * (t -= 1.5 / 2.75) * t + 0.75;
    else if (t < 2.5 / 2.75) t = 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375;
    else t = 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
    return t;
};

Key.easeInBounce = function (t, key2)
{
    return Key.linear(Key.bounce(t), this, key2);
    // return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d);
};

Key.easeOutBounce = function (t, key2)
{
    return Key.linear(Key.bounce(t), this, key2);
};

Key.easeInElastic = function (t, key2)
{
    let s = 1.70158;
    let p = 0;
    let a = 1;

    const b = 0;
    const d = 1;
    const c = 1;

    if (t === 0) t = b;
    else if ((t /= d) == 1) t = b + c;
    else
    {
        if (!p) p = d * 0.3;
        if (a < Math.abs(c))
        {
            a = c;
            s = p / 4;
        }
        else s = (p / (2 * Math.PI)) * Math.asin(c / a);
        t = -(a * 2 ** (10 * (t -= 1)) * Math.sin(((t * d - s) * (2 * Math.PI)) / p)) + b;
    }

    return Key.linear(t, this, key2);
};


Key.easeOutElastic = function (t, key2)
{
    let s = 1.70158;
    let p = 0;
    let a = 1;

    const b = 0;
    const d = 1;
    const c = 1;

    if (t === 0) t = b;
    else if ((t /= d) == 1) t = b + c;
    else
    {
        if (!p) p = d * 0.3;
        if (a < Math.abs(c))
        {
            a = c;
            s = p / 4;
        }
        else s = (p / (2 * Math.PI)) * Math.asin(c / a);
        t = a * 2 ** (-10 * t) * Math.sin(((t * d - s) * (2 * Math.PI)) / p) + c + b;
    }

    return Key.linear(t, this, key2);
};

Key.easeInBack = function (t, key2)
{
    const s = 1.70158;
    t = t * t * ((s + 1) * t - s);

    return Key.linear(t, this, key2);
};

Key.easeOutBack = function (t, key2)
{
    const s = 1.70158;
    t = (t = t / 1 - 1) * t * ((s + 1) * t + s) + 1;

    return Key.linear(t, this, key2);
};

Key.easeInOutBack = function (t, key2)
{
    let s = 1.70158;
    const c = 1 / 2;
    if ((t /= 1 / 2) < 1) t = c * (t * t * (((s *= 1.525) + 1) * t - s));
    else t = c * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2);

    return Key.linear(t, this, key2);
};

const easeCubicOut = function (t)
{
    t--;
    t = t * t * t + 1;
    return t;
};

Key.easeCubicOut = function (t, key2)
{
    t = easeCubicOut(t);
    return Key.linear(t, this, key2);
};

const easeCubicInOut = function (t)
{
    t *= 2;
    if (t < 1) t = 0.5 * t * t * t;
    else
    {
        t -= 2;
        t = 0.5 * (t * t * t + 2);
    }
    return t;
};

Key.easeCubicInOut = function (t, key2)
{
    t = easeCubicInOut(t);
    return Key.linear(t, this, key2);
};

Key.easeSmoothStep = function (perc, key2)
{
    // var x = Math.max(0, Math.min(1, (perc-0)/(1-0)));
    const x = Math.max(0, Math.min(1, perc));
    perc = x * x * (3 - 2 * x); // smoothstep
    return Key.linear(perc, this, key2);
};

Key.easeSmootherStep = function (perc, key2)
{
    const x = Math.max(0, Math.min(1, (perc - 0) / (1 - 0)));
    perc = x * x * x * (x * (x * 6 - 15) + 10); // smootherstep
    return Key.linear(perc, this, key2);
};

Key.prototype.setEasing = function (e)
{
    this._easing = e;

    if (this._easing == CONSTANTS.ANIM.EASING_LINEAR) this.ease = Key.easeLinear;
    else if (this._easing == CONSTANTS.ANIM.EASING_ABSOLUTE) this.ease = Key.easeAbsolute;
    else if (this._easing == CONSTANTS.ANIM.EASING_SMOOTHSTEP) this.ease = Key.easeSmoothStep;
    else if (this._easing == CONSTANTS.ANIM.EASING_SMOOTHERSTEP) this.ease = Key.easeSmootherStep;
    else if (this._easing == CONSTANTS.ANIM.EASING_CUBIC_IN) this.ease = Key.easeCubicIn;
    else if (this._easing == CONSTANTS.ANIM.EASING_CUBIC_OUT) this.ease = Key.easeCubicOut;
    else if (this._easing == CONSTANTS.ANIM.EASING_CUBIC_INOUT) this.ease = Key.easeCubicInOut;
    else if (this._easing == CONSTANTS.ANIM.EASING_EXPO_IN) this.ease = Key.easeExpoIn;
    else if (this._easing == CONSTANTS.ANIM.EASING_EXPO_OUT) this.ease = Key.easeExpoOut;
    else if (this._easing == CONSTANTS.ANIM.EASING_EXPO_INOUT) this.ease = Key.easeExpoInOut;
    else if (this._easing == CONSTANTS.ANIM.EASING_SIN_IN) this.ease = Key.easeSinIn;
    else if (this._easing == CONSTANTS.ANIM.EASING_SIN_OUT) this.ease = Key.easeSinOut;
    else if (this._easing == CONSTANTS.ANIM.EASING_SIN_INOUT) this.ease = Key.easeSinInOut;
    else if (this._easing == CONSTANTS.ANIM.EASING_BACK_OUT) this.ease = Key.easeOutBack;
    else if (this._easing == CONSTANTS.ANIM.EASING_BACK_IN) this.ease = Key.easeInBack;
    else if (this._easing == CONSTANTS.ANIM.EASING_BACK_INOUT) this.ease = Key.easeInOutBack;
    else if (this._easing == CONSTANTS.ANIM.EASING_ELASTIC_IN) this.ease = Key.easeInElastic;
    else if (this._easing == CONSTANTS.ANIM.EASING_ELASTIC_OUT) this.ease = Key.easeOutElastic;
    else if (this._easing == CONSTANTS.ANIM.EASING_ELASTIC_INOUT) this.ease = Key.easeElasticInOut;
    else if (this._easing == CONSTANTS.ANIM.EASING_BOUNCE_IN) this.ease = Key.easeInBounce;
    else if (this._easing == CONSTANTS.ANIM.EASING_BOUNCE_OUT) this.ease = Key.easeOutBounce;
    else if (this._easing == CONSTANTS.ANIM.EASING_QUART_OUT) this.ease = Key.easeOutQuart;
    else if (this._easing == CONSTANTS.ANIM.EASING_QUART_IN) this.ease = Key.easeInQuart;
    else if (this._easing == CONSTANTS.ANIM.EASING_QUART_INOUT) this.ease = Key.easeInOutQuart;
    else if (this._easing == CONSTANTS.ANIM.EASING_QUINT_OUT) this.ease = Key.easeOutQuint;
    else if (this._easing == CONSTANTS.ANIM.EASING_QUINT_IN) this.ease = Key.easeInQuint;
    else if (this._easing == CONSTANTS.ANIM.EASING_QUINT_INOUT) this.ease = Key.easeInOutQuint;
    else if (this._easing == CONSTANTS.ANIM.EASING_CUBICSPLINE)
    {
        // this._updateBezier = true;
        this.ease = Key.easeCubicSpline;
    }
    else
    {
        this._easing = CONSTANTS.ANIM.EASING_LINEAR;
        this.ease = Key.easeLinear;
    }
};

Key.prototype.trigger = function ()
{
    this.cb();
    this.cbTriggered = true;
};

Key.prototype.setValue = function (v)
{
    this.value = v;
    // this._updateBezier = true;
    if (this.onChange !== null) this.onChange();
};

Key.prototype.set = function (obj)
{
    if (obj)
    {
        if (obj.e) this.setEasing(obj.e);
        if (obj.cb)
        {
            this.cb = obj.cb;
            this.cbTriggered = false;
        }

        if (obj.b)
        {
            // this.bezTime = obj.b[0];
            // this.bezValue = obj.b[1];
            // this.bezTimeIn = obj.b[2];
            // this.bezValueIn = obj.b[3];
            // this._updateBezier = true;
        }

        if (obj.hasOwnProperty("t")) this.time = obj.t;
        if (obj.hasOwnProperty("time")) this.time = obj.time;
        if (obj.hasOwnProperty("v")) this.value = obj.v;
        else if (obj.hasOwnProperty("value")) this.value = obj.value;
    }
    if (this.onChange !== null) this.onChange();
};

Key.prototype.getSerialized = function ()
{
    const obj = {};
    obj.t = this.time;
    obj.v = this.value;
    obj.e = this._easing;
    // if (this._easing == CONSTANTS.ANIM.EASING_CUBICSPLINE) obj.b = [this.bezTime, this.bezValue, this.bezTimeIn, this.bezValueIn];

    return obj;
};

Key.prototype.getEasing = function ()
{
    return this._easing;
};



;// CONCATENATED MODULE: ./src/core/eventtarget.js


const EventTarget = function ()
{
    this._log = new Logger("eventtarget");
    this._eventCallbacks = {};
    this._logName = "";
    this._logEvents = false;
    this._listeners = {};

    this.addEventListener = this.on = function (which, cb, idPrefix)
    {
        const event =
        {
            "id": (idPrefix || "") + CABLES.simpleId(),
            "name": which,
            "cb": cb,
        };
        if (!this._eventCallbacks[which]) this._eventCallbacks[which] = [event];
        else this._eventCallbacks[which].push(event);

        this._listeners[event.id] = event;

        return event.id;
    };

    this.hasEventListener = function (which, cb)
    {
        if (which && !cb)
        {
            // check by id
            if (this._listeners[which]) return true;
            else return false;
        }
        else
        {
            this._log.warn("old eventtarget function haseventlistener!");
            if (which && cb)
            {
                if (this._eventCallbacks[which])
                {
                    const idx = this._eventCallbacks[which].indexOf(cb);
                    if (idx == -1) return false;
                    return true;
                }
            }
        }
    };

    this.hasListenerForEventName = function (eventName)
    {
        return this._eventCallbacks[eventName] && this._eventCallbacks[eventName].length > 0;
    };

    this.removeEventListener = this.off = function (which, cb)
    {
        if (which === null || which === undefined) return;

        if (!cb) // new style, remove by id, not by name/callback
        {
            const event = this._listeners[which];
            if (!event)
            {
                this._log.log("could not find event...");
                return;
            }

            let found = true;
            while (found)
            {
                found = false;
                let index = -1;
                for (let i = 0; i < this._eventCallbacks[event.name].length; i++)
                {
                    if (this._eventCallbacks[event.name][i].id.startsWith(which)) // this._eventCallbacks[event.name][i].id == which ||
                    {
                        found = true;
                        index = i;
                    }
                }

                if (index !== -1)
                {
                    this._eventCallbacks[event.name].splice(index, 1);
                    delete this._listeners[which];
                }
            }

            return;
        }

        this._log.info("[eventtaget] ", "old function signature: removeEventListener! use listener id");
        this._log.log((new Error()).stack);

        let index = null;
        for (let i = 0; i < this._eventCallbacks[which].length; i++)
            if (this._eventCallbacks[which][i].cb == cb)
                index = i;

        if (index !== null)
        {
            delete this._eventCallbacks[index];
        }
        else this._log.warn("removeEventListener not found " + which);
    };

    this.logEvents = function (enabled, name)
    {
        this._logEvents = enabled;
        this._logName = name;
    };

    this.emitEvent = function (which, param1, param2, param3, param4, param5, param6)
    {
        if (this._logEvents) this._log.log("[event] ", this._logName, which, this._eventCallbacks);

        if (this._eventCallbacks[which])
        {
            for (let i = 0; i < this._eventCallbacks[which].length; i++)
            {
                if (this._eventCallbacks[which][i])
                {
                    this._eventCallbacks[which][i].cb(param1, param2, param3, param4, param5, param6);
                }
            }
        }
        else
        {
            if (this._logEvents) this._log.log("[event] has no event callback", which, this._eventCallbacks);
        }
    };
};



;// CONCATENATED MODULE: ./src/core/anim.js





/**
 * Keyframed interpolated animation.
 *
 * Available Easings:
 * <code>
 * CONSTANTS.ANIM.EASING_LINEAR
 * CONSTANTS.ANIM.EASING_ABSOLUTE
 * CONSTANTS.ANIM.EASING_SMOOTHSTEP
 * CONSTANTS.ANIM.EASING_SMOOTHERSTEP
 * CONSTANTS.ANIM.EASING_CUBICSPLINE

 * CONSTANTS.ANIM.EASING_CUBIC_IN
 * CONSTANTS.ANIM.EASING_CUBIC_OUT
 * CONSTANTS.ANIM.EASING_CUBIC_INOUT

 * CONSTANTS.ANIM.EASING_EXPO_IN
 * CONSTANTS.ANIM.EASING_EXPO_OUT
 * CONSTANTS.ANIM.EASING_EXPO_INOUT

 * CONSTANTS.ANIM.EASING_SIN_IN
 * CONSTANTS.ANIM.EASING_SIN_OUT
 * CONSTANTS.ANIM.EASING_SIN_INOUT

 * CONSTANTS.ANIM.EASING_BACK_IN
 * CONSTANTS.ANIM.EASING_BACK_OUT
 * CONSTANTS.ANIM.EASING_BACK_INOUT

 * CONSTANTS.ANIM.EASING_ELASTIC_IN
 * CONSTANTS.ANIM.EASING_ELASTIC_OUT

 * CONSTANTS.ANIM.EASING_BOUNCE_IN
 * CONSTANTS.ANIM.EASING_BOUNCE_OUT

 * CONSTANTS.ANIM.EASING_QUART_IN
 * CONSTANTS.ANIM.EASING_QUART_OUT
 * CONSTANTS.ANIM.EASING_QUART_INOUT

 * CONSTANTS.ANIM.EASING_QUINT_IN
 * CONSTANTS.ANIM.EASING_QUINT_OUT
 * CONSTANTS.ANIM.EASING_QUINT_INOUT
 * </code>
 * @class
 * @param cfg
 * @example
 * var anim=new CABLES.Anim();
 * anim.setValue(0,0);  // set value 0 at 0 seconds
 * anim.setValue(10,1); // set value 1 at 10 seconds
 * anim.getValue(5);    // get value at 5 seconds - this returns 0.5
 */

const Anim = function (cfg)
{
    EventTarget.apply(this);

    cfg = cfg || {};
    this.keys = [];
    this.onChange = null;
    this.stayInTimeline = false;
    this.loop = false;
    this._log = new Logger("Anim");
    this._lastKeyIndex = 0;
    this._cachedIndex = 0;
    this.name = cfg.name || null;

    /**
     * @member defaultEasing
     * @memberof Anim
     * @instance
     * @type {Number}
     */
    this.defaultEasing = cfg.defaultEasing || CONSTANTS.ANIM.EASING_LINEAR;
    this.onLooped = null;

    this._timesLooped = 0;
    this._needsSort = false;
};

Anim.prototype.forceChangeCallback = function ()
{
    if (this.onChange !== null) this.onChange();
    this.emitEvent("onChange", this);
};

Anim.prototype.getLoop = function ()
{
    return this.loop;
};

Anim.prototype.setLoop = function (target)
{
    this.loop = target;
    this.emitEvent("onChange", this);
};

/**
 * returns true if animation has ended at @time
 * checks if last key time is < time
 * @param {Number} time
 * @returns {Boolean}
 * @memberof Anim
 * @instance
 * @function
 */
Anim.prototype.hasEnded = function (time)
{
    if (this.keys.length === 0) return true;
    if (this.keys[this._lastKeyIndex].time <= time) return true;
    return false;
};

Anim.prototype.isRising = function (time)
{
    if (this.hasEnded(time)) return false;
    const ki = this.getKeyIndex(time);
    if (this.keys[ki].value < this.keys[ki + 1].value) return true;
    return false;
};

/**
 * remove all keys from animation before time
 * @param {Number} time
 * @memberof Anim
 * @instance
 * @function
 */
Anim.prototype.clearBefore = function (time)
{
    const v = this.getValue(time);
    const ki = this.getKeyIndex(time);

    this.setValue(time, v);

    if (ki > 1) this.keys.splice(0, ki);
    this._updateLastIndex();
};
/**
 * remove all keys from animation
 * @param {Number} [time=0] set a new key at time with the old value at time
 * @memberof Anim
 * @instance
 * @function
 */
Anim.prototype.clear = function (time)
{
    let v = 0;
    if (time) v = this.getValue(time);
    this.keys.length = 0;
    this._updateLastIndex();
    if (time) this.setValue(time, v);
    if (this.onChange !== null) this.onChange();
    this.emitEvent("onChange", this);
};

Anim.prototype.sortKeys = function ()
{
    this.keys.sort((a, b) => { return parseFloat(a.time) - parseFloat(b.time); });
    this._updateLastIndex();
    this._needsSort = false;
    if (this.keys.length % 1000 == 0)console.log(this.name, this.keys.length);
};

Anim.prototype.getLength = function ()
{
    if (this.keys.length === 0) return 0;
    return this.keys[this.keys.length - 1].time;
};

Anim.prototype.getKeyIndex = function (time)
{
    let index = 0;
    let start = 0;
    if (this._cachedIndex && this.keys.length > this._cachedIndex && time >= this.keys[this._cachedIndex].time) start = this._cachedIndex;
    for (let i = start; i < this.keys.length; i++)
    {
        if (time >= this.keys[i].time) index = i;
        if (this.keys[i].time > time)
        {
            if (time != 0) this._cachedIndex = index;
            return index;
        }
    }

    return index;
};

/**
 * set value at time
 * @function setValue
 * @memberof Anim
 * @instance
 * @param {Number} time
 * @param {Number} value
 * @param {Function} cb callback
 */
Anim.prototype.setValue = function (time, value, cb)
{
    let found = null;

    if (this.keys.length == 0 || time <= this.keys[this.keys.length - 1].time)
        for (let i = 0; i < this.keys.length; i++)
            if (this.keys[i].time == time)
            {
                found = this.keys[i];
                this.keys[i].setValue(value);
                this.keys[i].cb = cb;
                break;
            }

    if (!found)
    {
        found = new Key(
            {
                "time": time,
                "value": value,
                "e": this.defaultEasing,
                "cb": cb,
            });
        this.keys.push(found);

        // if (this.keys.length % 1000 == 0)console.log(this.name, this.keys.length);
        this._updateLastIndex();
    }

    if (this.onChange) this.onChange();
    this.emitEvent("onChange", this);
    this._needsSort = true;
    return found;
};

Anim.prototype.setKeyEasing = function (index, e)
{
    if (this.keys[index])
    {
        this.keys[index].setEasing(e);
        this.emitEvent("onChange", this);
    }
};

Anim.prototype.getSerialized = function ()
{
    const obj = {};
    obj.keys = [];
    obj.loop = this.loop;

    for (let i = 0; i < this.keys.length; i++)
        obj.keys.push(this.keys[i].getSerialized());

    return obj;
};

Anim.prototype.getKey = function (time)
{
    const index = this.getKeyIndex(time);
    return this.keys[index];
};

Anim.prototype.getNextKey = function (time)
{
    let index = this.getKeyIndex(time) + 1;
    if (index >= this.keys.length) index = this.keys.length - 1;

    return this.keys[index];
};

Anim.prototype.isFinished = function (time)
{
    if (this.keys.length <= 0) return true;
    return time > this.keys[this.keys.length - 1].time;
};

Anim.prototype.isStarted = function (time)
{
    if (this.keys.length <= 0) return false;
    return time >= this.keys[0].time;
};

/**
 * get value at time
 * @function getValue
 * @memberof Anim
 * @instance
 * @param {Number} [time] time
 * @returns {Number} interpolated value at time
 */
Anim.prototype.getValue = function (time)
{
    if (this.keys.length === 0)
    {
        return 0;
    }
    if (this._needsSort) this.sortKeys();

    if (!this.loop && time > this.keys[this._lastKeyIndex].time)
    {
        if (this.keys[this._lastKeyIndex].cb && !this.keys[this._lastKeyIndex].cbTriggered) this.keys[this._lastKeyIndex].trigger();

        return this.keys[this._lastKeyIndex].value;
    }

    if (time < this.keys[0].time)
    {
        // if (this.name)console.log("A");

        return this.keys[0].value;
    }

    if (this.loop && time > this.keys[this._lastKeyIndex].time)
    {
        const currentLoop = time / this.keys[this._lastKeyIndex].time;
        if (currentLoop > this._timesLooped)
        {
            this._timesLooped++;
            if (this.onLooped) this.onLooped();
        }
        time = (time - this.keys[0].time) % (this.keys[this._lastKeyIndex].time - this.keys[0].time);
        time += this.keys[0].time;
    }

    const index = this.getKeyIndex(time);
    if (index >= this._lastKeyIndex)
    {
        if (this.keys[this._lastKeyIndex].cb && !this.keys[this._lastKeyIndex].cbTriggered) this.keys[this._lastKeyIndex].trigger();

        return this.keys[this._lastKeyIndex].value;
    }


    const index2 = index + 1;
    const key1 = this.keys[index];
    const key2 = this.keys[index2];

    if (key1.cb && !key1.cbTriggered) key1.trigger();

    if (!key2) return -1;

    const perc = (time - key1.time) / (key2.time - key1.time);

    if (!key1.ease) this.log._warn("has no ease", key1, key2);

    return key1.ease(perc, key2);
};

Anim.prototype._updateLastIndex = function ()
{
    this._lastKeyIndex = this.keys.length - 1;
};

Anim.prototype.addKey = function (k)
{
    if (k.time === undefined)
    {
        this.log.warn("key time undefined, ignoring!");
    }
    else
    {
        this.keys.push(k);
        if (this.onChange !== null) this.onChange();
        this.emitEvent("onChange", this);
    }
    this._updateLastIndex();
};

Anim.prototype.easingFromString = function (str)
{
    if (str == "linear") return CONSTANTS.ANIM.EASING_LINEAR;
    if (str == "absolute") return CONSTANTS.ANIM.EASING_ABSOLUTE;
    if (str == "smoothstep") return CONSTANTS.ANIM.EASING_SMOOTHSTEP;
    if (str == "smootherstep") return CONSTANTS.ANIM.EASING_SMOOTHERSTEP;

    if (str == "Cubic In") return CONSTANTS.ANIM.EASING_CUBIC_IN;
    if (str == "Cubic Out") return CONSTANTS.ANIM.EASING_CUBIC_OUT;
    if (str == "Cubic In Out") return CONSTANTS.ANIM.EASING_CUBIC_INOUT;

    if (str == "Expo In") return CONSTANTS.ANIM.EASING_EXPO_IN;
    if (str == "Expo Out") return CONSTANTS.ANIM.EASING_EXPO_OUT;
    if (str == "Expo In Out") return CONSTANTS.ANIM.EASING_EXPO_INOUT;

    if (str == "Sin In") return CONSTANTS.ANIM.EASING_SIN_IN;
    if (str == "Sin Out") return CONSTANTS.ANIM.EASING_SIN_OUT;
    if (str == "Sin In Out") return CONSTANTS.ANIM.EASING_SIN_INOUT;

    if (str == "Back In") return CONSTANTS.ANIM.EASING_BACK_IN;
    if (str == "Back Out") return CONSTANTS.ANIM.EASING_BACK_OUT;
    if (str == "Back In Out") return CONSTANTS.ANIM.EASING_BACK_INOUT;

    if (str == "Elastic In") return CONSTANTS.ANIM.EASING_ELASTIC_IN;
    if (str == "Elastic Out") return CONSTANTS.ANIM.EASING_ELASTIC_OUT;

    if (str == "Bounce In") return CONSTANTS.ANIM.EASING_BOUNCE_IN;
    if (str == "Bounce Out") return CONSTANTS.ANIM.EASING_BOUNCE_OUT;

    if (str == "Quart Out") return CONSTANTS.ANIM.EASING_QUART_OUT;
    if (str == "Quart In") return CONSTANTS.ANIM.EASING_QUART_IN;
    if (str == "Quart In Out") return CONSTANTS.ANIM.EASING_QUART_INOUT;

    if (str == "Quint Out") return CONSTANTS.ANIM.EASING_QUINT_OUT;
    if (str == "Quint In") return CONSTANTS.ANIM.EASING_QUINT_IN;
    if (str == "Quint In Out") return CONSTANTS.ANIM.EASING_QUINT_INOUT;
};

Anim.prototype.createPort = function (op, title, cb)
{
    const port = op.inDropDown(title, CONSTANTS.ANIM.EASINGS, "Cubic Out");

    // const port = op.addInPort(
    //     new Port(op, title, CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
    //         "display": "dropdown",
    //         "values": CONSTANTS.ANIM.EASINGS,
    //     }),
    // );

    port.set("linear");
    port.defaultValue = "linear";

    port.onChange = function ()
    {
        this.defaultEasing = this.easingFromString(port.get());
        this.emitEvent("onChangeDefaultEasing", this);

        if (cb) cb();
    }.bind(this);

    return port;
};

// ------------------------------

Anim.slerpQuaternion = function (time, q, animx, animy, animz, animw)
{
    if (!Anim.slerpQuaternion.q1)
    {
        Anim.slerpQuaternion.q1 = quat.create();
        Anim.slerpQuaternion.q2 = quat.create();
    }

    const i1 = animx.getKeyIndex(time);
    let i2 = i1 + 1;
    if (i2 >= animx.keys.length) i2 = animx.keys.length - 1;

    if (i1 == i2)
    {
        quat.set(q, animx.keys[i1].value, animy.keys[i1].value, animz.keys[i1].value, animw.keys[i1].value);
    }
    else
    {
        const key1Time = animx.keys[i1].time;
        const key2Time = animx.keys[i2].time;
        const perc = (time - key1Time) / (key2Time - key1Time);

        quat.set(Anim.slerpQuaternion.q1, animx.keys[i1].value, animy.keys[i1].value, animz.keys[i1].value, animw.keys[i1].value);

        quat.set(Anim.slerpQuaternion.q2, animx.keys[i2].value, animy.keys[i2].value, animz.keys[i2].value, animw.keys[i2].value);

        quat.slerp(q, Anim.slerpQuaternion.q1, Anim.slerpQuaternion.q2, perc);
    }
    return q;
};

const ANIM = { "Key": Key };




;// CONCATENATED MODULE: ./src/core/core_link.js



/**
 * @namespace external:CABLES#Link
 * @param {Object} scene The patch object
 * @description a link is a connection between two ops/ports -> one input and one output port
 * @hideconstructor
 * @class
 */
const Link = function (scene)
{
    EventTarget.apply(this);

    this.id = CABLES.simpleId();
    this.portIn = null;
    this.portOut = null;
    this.scene = scene; // todo: make private and rename to patch
    this.activityCounter = 0;
    this.ignoreInSerialize = false;
};

Link.prototype.setValue = function (v)
{
    if (v === undefined) this._setValue();
    else this.portIn.set(v);
};

Link.prototype.activity = function ()
{
    this.activityCounter++;
    // if(Date.now()-this.lastTime>100)
    // {
    //     // this.lastTime=Date.now();
    //     // this.changesPerSecond=this.changesCounter*10;
    //     this.changesCounter=0;
    // }
};

Link.prototype._setValue = function ()
{
    if (!this.portOut)
    {
        this.remove();
        return;
    }
    const v = this.portOut.get();

    if (v == v) // NaN is the only JavaScript value that is treated as unequal to itself
    {
        if (this.portIn.type != CONSTANTS.OP.OP_PORT_TYPE_FUNCTION) this.activity();

        if (this.portIn.get() !== v)
        {
            this.portIn.set(v);
        }
        else
        {
            if (this.portIn.changeAlways) this.portIn.set(v);
            if (this.portOut.forceRefChange) this.portIn.forceChange();
        }
    }
};

/**
 * @function getOtherPort
 * @memberof Link
 * @instance
 * @param {Port} p port
 * @description returns the port of the link, which is not port
 */
Link.prototype.getOtherPort = function (p)
{
    if (p == this.portIn) return this.portOut;
    return this.portIn;
};

/**
 * @function remove
 * @memberof Link
 * @instance
 * @description unlink/remove this link from all ports
 */
Link.prototype.remove = function ()
{
    if (this.portIn) this.portIn.removeLink(this);
    if (this.portOut) this.portOut.removeLink(this);
    if (this.scene)
    {
        this.scene.emitEvent("onUnLink", this.portIn, this.portOut, this);
    }

    if (this.portIn && (this.portIn.type == CONSTANTS.OP.OP_PORT_TYPE_OBJECT || this.portIn.type == CONSTANTS.OP.OP_PORT_TYPE_ARRAY))
    {
        this.portIn.set(null);
        if (this.portIn.links.length > 0) this.portIn.set(this.portIn.links[0].getOtherPort(this.portIn).get());
    }

    if (this.portIn) this.portIn.op._checkLinksNeededToWork();
    if (this.portOut) this.portOut.op._checkLinksNeededToWork();

    this.portIn = null;
    this.portOut = null;
    this.scene = null;
};

/**
 * @function link
 * @memberof Link
 * @instance
 * @description link those two ports
 * @param {Port} p1 port1
 * @param {Port} p2 port2
 */
Link.prototype.link = function (p1, p2)
{
    if (!Link.canLink(p1, p2))
    {
        console.warn("[core_link] cannot link ports!", p1, p2);
        return false;
    }

    if (p1.direction == CONSTANTS.PORT.PORT_DIR_IN)
    {
        this.portIn = p1;
        this.portOut = p2;
    }
    else
    {
        this.portIn = p2;
        this.portOut = p1;
    }

    p1.addLink(this);
    p2.addLink(this);

    this.setValue();

    if (p1.onLink) p1.onLink(this);
    if (p2.onLink) p2.onLink(this);

    p1.op._checkLinksNeededToWork();
    p2.op._checkLinksNeededToWork();
};

Link.prototype.getSerialized = function ()
{
    const obj = {};

    obj.portIn = this.portIn.getName();
    obj.portOut = this.portOut.getName();
    obj.objIn = this.portIn.op.id;
    obj.objOut = this.portOut.op.id;

    return obj;
};

// --------------------------------------------

/**
 * @function canLinkText
 * @memberof Link
 * @instance
 * @description return a text message with human readable reason if ports can not be linked, or can be
 * @param {Port} p1 port1
 * @param {Port} p2 port2
 */
Link.canLinkText = function (p1, p2)
{
    if (p1.direction == p2.direction)
    {
        let txt = "(out)";
        if (p2.direction == CONSTANTS.PORT.PORT_DIR_IN) txt = "(in)";
        return "can not link: same direction " + txt;
    }
    if (p1.op == p2.op) return "can not link: same op";
    if (p1.type != CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC && p2.type != CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC)
    {
        if (p1.type != p2.type) return "can not link: different type";
    }

    if (CABLES.UI && p1.type == CONSTANTS.OP.OP_PORT_TYPE_OBJECT && p2.type == CONSTANTS.OP.OP_PORT_TYPE_OBJECT)
    {
        if (p1.uiAttribs.objType && p2.uiAttribs.objType)
            if (p1.uiAttribs.objType != p2.uiAttribs.objType)
                return "incompatible objects";
    }


    if (!p1) return "can not link: port 1 invalid";
    if (!p2) return "can not link: port 2 invalid";

    if (p1.direction == CONSTANTS.PORT.PORT_DIR_IN && p1.isAnimated()) return "can not link: is animated";
    if (p2.direction == CONSTANTS.PORT.PORT_DIR_IN && p2.isAnimated()) return "can not link: is animated";

    // if(p1.direction==CABLES.CONSTANTS.PORT.PORT_DIR_IN && p1.links.length>0)return 'input port already busy';
    // if(p2.direction==CABLES.CONSTANTS.PORT.PORT_DIR_IN && p2.links.length>0)return 'input port already busy';
    if (p1.isLinkedTo(p2)) return "ports already linked";

    if ((p1.canLink && !p1.canLink(p2)) || (p2.canLink && !p2.canLink(p1))) return "Incompatible";

    return "can link";
};

/**
 * @function canLink
 * @memberof Link
 * @instance
 * @description return true if ports can be linked
 * @param {Port} p1 port1
 * @param {Port} p2 port2
 * @returns {Boolean}
 */
Link.canLink = function (p1, p2)
{
    if (!p1) return false;
    if (!p2) return false;
    if (p1.direction == CONSTANTS.PORT.PORT_DIR_IN && p1.isAnimated()) return false;
    if (p2.direction == CONSTANTS.PORT.PORT_DIR_IN && p2.isAnimated()) return false;

    if (p1.isHidden() || p2.isHidden()) return false;

    if (p1.isLinkedTo(p2)) return false;

    if (p1.direction == p2.direction) return false;

    if (CABLES.UI && p1.type == CONSTANTS.OP.OP_PORT_TYPE_OBJECT && p2.type == CONSTANTS.OP.OP_PORT_TYPE_OBJECT)
    {
        if (p1.uiAttribs.objType && p2.uiAttribs.objType)
        {
            if (p1.uiAttribs.objType.indexOf("sg_") == 0 && p2.uiAttribs.objType.indexOf("sg_") == 0) return true;
            if (p1.uiAttribs.objType != p2.uiAttribs.objType)
                return false;
        }
    }

    if (p1.type != p2.type && (p1.type != CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC && p2.type != CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC)) return false;
    if (p1.type == CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC || p2.type == CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC) return true;

    if (p1.op == p2.op) return false;

    if (p1.canLink && !p1.canLink(p2)) return false;
    if (p2.canLink && !p2.canLink(p1)) return false;

    return true;
};



;// CONCATENATED MODULE: ./src/core/core_port.js







/**
 * data is coming into and out of ops through input and output ports
 * @namespace external:CABLES#Port
 * @class
 * @hideconstructor
 * @param ___op
 * @param name
 * @param type
 * @param uiAttribs
 * @example
 * const myPort=op.inString("String Port");
 */
const Port = function (___op, name, type, uiAttribs)
{
    EventTarget.apply(this);

    this.data = {}; // UNUSED, DEPRECATED, only left in for backwards compatibility with userops
    this._log = new Logger("core_port");
    /**
     * @type {Number}
     * @name direction
     * @instance
     * @memberof Port
     * @description direction of port (input(0) or output(1))
     */
    this.direction = CONSTANTS.PORT.PORT_DIR_IN;
    this.id = String(CABLES.simpleId());
    this._op = ___op;

    /**
     * @type {Array<Link>}
     * @name links
     * @instance
     * @memberof Port
     * @description links of port
     */
    this.links = [];
    this.value = 0.0;
    this.name = name;
    this.type = type || CONSTANTS.OP.OP_PORT_TYPE_VALUE;
    this.uiAttribs = uiAttribs || {};
    this.anim = null;
    this._oldAnimVal = -5711;
    this.defaultValue = null;


    this._uiActiveState = true;
    this.ignoreValueSerialize = false;
    this.onLinkChanged = null;
    this.crashed = false;

    this._valueBeforeLink = null;
    this._lastAnimFrame = -1;
    this._animated = false;

    this.onValueChanged = null;
    this.onTriggered = null;
    this.onUiActiveStateChange = null;
    this.changeAlways = false;
    this.forceRefChange = false;

    this._useVariableName = null;

    this.activityCounter = 0;
    this.apf = 0;
    this.activityCounterStartFrame = 0;

    this._tempLastUiValue = null;

    Object.defineProperty(this, "title", {
        get()
        {
            return this.uiAttribs.title || this.name;
        } });

    Object.defineProperty(this, "parent", {
        get()
        {
            this._log.stack("use port.op, not .parent");
            return this._op;
        } });

    Object.defineProperty(this, "op", {
        get()
        {
            return this._op;
        } });

    Object.defineProperty(this, "val", {
        get()
        {
            this._log.warn("val getter deprecated!", this);
            this._log.stack("val getter deprecated");
            return this.get();
        },
        set(v)
        {
            this._log.warn("val setter deprecated!", this);
            this._log.stack("val setter deprecated");
            this.setValue(v);
        }
    });
};


/**
 * copy over a uiattrib from an external connected port to another port
 * @function copyLinkedUiAttrib
 * @memberof Port
 * @param {string} which attrib name
 * @param {Port} port source port
 * @instance
 * @example

inArray.onLinkChanged=()=>
{
    if(inArray) inArray.copyLinkedUiAttrib("stride", outArray);
};

 */
Port.prototype.copyLinkedUiAttrib = function (which, port)
{
    if (!CABLES.UI) return;
    if (!this.isLinked()) return;

    const attr = {};
    attr[which] = this.links[0].getOtherPort(this).getUiAttrib(which);
    port.setUiAttribs(attr);
};


// TODO make extend class for ports, like for ops only for ui
Port.prototype.getValueForDisplay = function ()
{
    let str = this.value;

    if (typeof this.value === "string" || this.value instanceof String)
    {
        if (str.length > 1000)
        {
            str = str.substring(0, 999);
            str += "...";
        }
        if (this.uiAttribs && (this.uiAttribs.display == "boolnum"))
        {
            str += " - ";

            if (!this.value) str += "false";
            else str += "true";
        }

        str = str.replace(/[\u00A0-\u9999<>\&]/g, function (i)
        {
            return "&#" + i.charCodeAt(0) + ";";
        });


        if (str.length > 100) str = str.substring(0, 100);
    }
    else
    {
        str = this.value;
    }
    return str;
};

/**
 * change listener for input value ports, overwrite to react to changes
 * @function onChange
 * @memberof Port
 * @instance
 * @example
 * const myPort=op.inString("MyPort");
 * myPort.onChange=function()
 * {
 *   console.log("was changed to: ",myPort.get());
 * }
 *
 */
Port.prototype.onAnimToggle = function () {};
Port.prototype._onAnimToggle = function ()
{
    this.onAnimToggle();
};


/**
 * @function remove
 * @memberof Port
 * @instance
 * @description remove port
 */
Port.prototype.remove = function ()
{
    // this.setUiAttribs({ "hidePort": true });
    this.removeLinks();
    this._op.removePort(this);
};

/**
 * set ui attributes
 * @function setUiAttribs
 * @memberof Port
 * @instance
 * @param {Object} newAttribs
 * <pre>
 * title - overwrite title of port (by default this is portname)
 * greyout - port paramater will appear greyed out, can not be
 * hidePort - port will be hidden from op
 * hideParam - port params will be hidden from parameter panel
 * showIndex - only for dropdowns - show value index (e.g. `0 - normal` )
 * editorSyntax - set syntax highlighting theme for editor port
 * ignoreObjTypeErrors - do not auto check object types
 * </pre>
 * @example
 * myPort.setUiAttribs({greyout:true});
 */
Port.prototype.setUiAttribs = function (newAttribs)
{
    let changed = false;
    if (!this.uiAttribs) this.uiAttribs = {};

    for (const p in newAttribs)
    {
        if (newAttribs[p] === undefined)
        {
            // delete newAttribs[p];
            delete this.uiAttribs[p];
            continue;
        }
        if (this.uiAttribs[p] != newAttribs[p]) changed = true;
        this.uiAttribs[p] = newAttribs[p];

        if (p == "group" && this.indexPort) this.indexPort.setUiAttribs({ "group": newAttribs[p] });
    }

    if (newAttribs.hasOwnProperty("expose")) this._op.patch.emitEvent("subpatchExpose", this._op.uiAttribs.subPatch);

    if (changed) this.emitEvent("onUiAttrChange", newAttribs, this);
};

/**
 * get ui attributes
 * @function getUiAttribs
 * @memberof Port
 * @example
 * myPort.getUiAttribs();
 */
Port.prototype.getUiAttribs = function ()
{
    return this.uiAttribs;
};

/**
 * get ui attribute
 * @function getUiAttrib
 * @memberof Port
 * @instance
 * @param {String} attribName
 * <pre>
 * attribName - return value of the ui-attribute, or null on unknown attribute
 * </pre>
 * @example
 * myPort.setUiAttribs("values");
 */
Port.prototype.getUiAttrib = function (attribName)
{
    if (!this.uiAttribs || !this.uiAttribs.hasOwnProperty(attribName))
    {
        return null;
    }
    return this.uiAttribs[attribName];
};

/**
 * @function get
 * @memberof Port
 * @instance
 * @description get value of port
 */
Port.prototype.get = function ()
{
    if (this._animated && this._lastAnimFrame != this._op.patch.getFrameNum())
    {
        this._lastAnimFrame = this._op.patch.getFrameNum();
        this.value = this.anim.getValue(this._op.patch.timer.getTime());

        this._oldAnimVal = this.value;
        this.forceChange();
    }

    return this.value;
};

Port.prototype.setRef = function (v)
{
    this.forceRefChange = true;
    this.set(v);
};

/**
 * @function setValue
 * @memberof Port
 * @instance
 * @description set value of port / will send value to all linked ports (only for output ports)
 */
Port.prototype.set = Port.prototype.setValue = function (v)
{
    if (v === undefined) v = null;

    if (this._op.enabled && !this.crashed)
    {
        if (v !== this.value || this.changeAlways || this.type == CONSTANTS.OP.OP_PORT_TYPE_TEXTURE || this.type == CONSTANTS.OP.OP_PORT_TYPE_ARRAY)
        {
            if (this._animated)
            {
                this.anim.setValue(this._op.patch.timer.getTime(), v);
            }
            else
            {
                try
                {
                    this.value = v;
                    this.forceChange();
                }
                catch (ex)
                {
                    this.crashed = true;

                    this.setValue = function (_v) {};
                    this.onTriggered = function () {};

                    this._log.error("exception in ", this._op);
                    this._log.error(ex);

                    this._op.patch.emitEvent("exception", ex, this._op);
                }

                if (this._op && this._op.patch && this._op.patch.isEditorMode() && this.type == CONSTANTS.OP.OP_PORT_TYPE_TEXTURE) gui.texturePreview().updateTexturePort(this);
            }

            if (this.direction == CONSTANTS.PORT.PORT_DIR_OUT) for (let i = 0; i < this.links.length; ++i) this.links[i].setValue();
        }
    }
};

Port.prototype.updateAnim = function ()
{
    if (this._animated)
    {
        this.value = this.get();

        if (this._oldAnimVal != this.value || this.changeAlways)
        {
            this._oldAnimVal = this.value;
            this.forceChange();
        }
        this._oldAnimVal = this.value;
    }
};

Port.prototype.forceChange = function ()
{
    if (this.onValueChanged || this.onChange)
    {
        // very temporary: deprecated warning!!!!!!!!!
        // if(params.length>0) this._log.warn('TOM: port has onchange params!',this._op.objName,this.name);
    }
    this._activity();
    this.emitEvent("change", this.value, this);

    // try
    // {
    if (this.onChange) this.onChange(this, this.value);
    else if (this.onValueChanged) this.onValueChanged(this, this.value); // deprecated
    // }
    // catch (e)
    // {
    //     console.log(e);
    // }
};

/**
 * @function getTypeString
 * @memberof Port
 * @instance
 * @description get port type as string, e.g. "Function","Value"...
 * @return {String} type
 */
Port.prototype.getTypeString = function ()
{
    if (this.type == CONSTANTS.OP.OP_PORT_TYPE_VALUE) return "Number";
    if (this.type == CONSTANTS.OP.OP_PORT_TYPE_FUNCTION) return "Trigger";
    if (this.type == CONSTANTS.OP.OP_PORT_TYPE_OBJECT) return "Object";
    if (this.type == CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC) return "Dynamic";
    if (this.type == CONSTANTS.OP.OP_PORT_TYPE_ARRAY) return "Array";
    if (this.type == CONSTANTS.OP.OP_PORT_TYPE_STRING) return "String";
    return "Unknown";
};

Port.prototype.deSerializeSettings = function (objPort)
{
    if (!objPort) return;
    if (objPort.animated) this.setAnimated(objPort.animated);
    if (objPort.useVariable) this.setVariableName(objPort.useVariable);
    if (objPort.title) this.setUiAttribs({ "title": objPort.title });
    if (objPort.expose) this.setUiAttribs({ "expose": true });
    if (objPort.order) this.setUiAttribs({ "order": objPort.order });

    if (objPort.multiPortManual) this.setUiAttribs({ "multiPortManual": objPort.multiPortManual });
    if (objPort.multiPortNum) this.setUiAttribs({ "multiPortNum": objPort.multiPortNum });

    if (objPort.anim)
    {
        if (!this.anim) this.anim = new Anim({ "name": "port " + this.name });
        this._op._hasAnimPort = true;
        this.anim.addEventListener("onChange", () =>
        {
            this._op.patch.emitEvent("portAnimUpdated", this._op, this, this.anim);
        });
        if (objPort.anim.loop) this.anim.loop = objPort.anim.loop;
        for (const ani in objPort.anim.keys)
        {
            this.anim.keys.push(new ANIM.Key(objPort.anim.keys[ani]));
        }
        this.anim.sortKeys();
    }
};


Port.prototype.setInitialValue = function (v)
{
    if (this.op.preservedPortLinks[this.name])
    {
        for (let i = 0; i < this.op.preservedPortLinks[this.name].length; i++)
        {
            const lobj = this.op.preservedPortLinks[this.name][i];
            this.op.patch._addLink(
                lobj.objIn,
                lobj.objOut,
                lobj.portIn,
                lobj.portOut);
        }
    }


    if (this.op.preservedPortValues && this.op.preservedPortValues.hasOwnProperty(this.name) && this.op.preservedPortValues[this.name] !== undefined)
    {
        this.set(this.op.preservedPortValues[this.name]);
    }
    else
    if (v !== undefined) this.set(v);
    if (v !== undefined) this.defaultValue = v;
};




Port.prototype.getSerialized = function ()
{
    let obj = { "name": this.getName() };


    if (!this.ignoreValueSerialize && this.links.length === 0)
    {
        if (this.type == CONSTANTS.OP.OP_PORT_TYPE_OBJECT && this.value && this.value.tex) {}
        else obj.value = this.value;
    }
    if (this._useVariableName) obj.useVariable = this._useVariableName;
    if (this._animated) obj.animated = true;
    if (this.anim) obj.anim = this.anim.getSerialized();
    if (this.uiAttribs.multiPortNum) obj.multiPortNum = this.uiAttribs.multiPortNum;
    if (this.uiAttribs.multiPortManual) obj.multiPortManual = this.uiAttribs.multiPortManual;

    if (this.uiAttribs.display == "file") obj.display = this.uiAttribs.display;
    if (this.uiAttribs.expose)
    {
        obj.expose = true;
        if (this.uiAttribs.hasOwnProperty("order")) obj.order = this.uiAttribs.order;
    }
    if (this.uiAttribs.title) obj.title = this.uiAttribs.title;
    if ((this.preserveLinks || this.direction == CONSTANTS.PORT.PORT_DIR_OUT) && this.links.length > 0)
    {
        obj.links = [];
        for (const i in this.links)
        {
            if (!this.links[i].ignoreInSerialize && (this.links[i].portIn && this.links[i].portOut)) obj.links.push(this.links[i].getSerialized());
        }
    }

    if (this.direction == CONSTANTS.PORT.PORT_DIR_IN && this.links.length > 0)
    {
        for (const i in this.links)
        {
            if (!this.links[i].portIn || !this.links[i].portOut) continue;

            const otherp = this.links[i].getOtherPort(this);
            // check if functions exist, are defined in core_extend_ops code in ui
            if (otherp.op.isInBlueprint2 && this.op.isInBlueprint2)
            {
                if (otherp.op.isInBlueprint2() && !this.op.isInBlueprint2())
                {
                    obj.links = obj.links || [];
                    obj.links.push(this.links[i].getSerialized());
                }
            }
        }
    }

    if (obj.links && obj.links.length == 0) delete obj.links;
    if (this.type === CONSTANTS.OP.OP_PORT_TYPE_FUNCTION) delete obj.value;
    if (this.type === CONSTANTS.OP.OP_PORT_TYPE_FUNCTION && this.links.length == 0) obj = null;
    if (obj && Object.keys(obj).length == 1 && obj.name)obj = null; // obj is null if there is no real information other than name

    // console.log(obj);
    cleanJson(obj);

    return obj;
};

Port.prototype.shouldLink = function ()
{
    return true;
};

/**
 * @function removeLinks
 * @memberof Port
 * @instance
 * @description remove all links from port
 */
Port.prototype.removeLinks = function ()
{
    let count = 0;
    while (this.links.length > 0)
    {
        count++;
        if (count > 5000)
        {
            this._log.warn("could not delete links... / infinite loop");
            this.links.length = 0;
            break;
        }
        this.links[0].remove();
    }
};

/**
 * @function removeLink
 * @memberof Port
 * @instance
 * @description remove all link from port
 * @param {CABLES.Link} link
 */
Port.prototype.removeLink = function (link)
{
    for (const i in this.links)
        if (this.links[i] == link)
            this.links.splice(i, 1);

    if (this.direction == CONSTANTS.PORT.PORT_DIR_IN)
    {
        if (this.type == CONSTANTS.OP.OP_PORT_TYPE_VALUE) this.setValue(this._valueBeforeLink || 0);
        else this.setValue(this._valueBeforeLink || null);
    }

    if (CABLES.UI && this._op.checkLinkTimeWarnings) this._op.checkLinkTimeWarnings();

    if (this.onLinkChanged) this.onLinkChanged();
    this.emitEvent("onLinkChanged");
    this.emitEvent("onLinkRemoved");
    this._op.emitEvent("onLinkChanged");
};

/**
 * @function getName
 * @memberof Port
 * @instance
 * @description return port name
 */
Port.prototype.getName = function ()
{
    return this.name;
};

/**
 * @function getTitle
 * @memberof Port
 * @instance
 * @description return port name or title
 */
Port.prototype.getTitle = function ()
{
    if (this.uiAttribs.title) return this.uiAttribs.title;
    return this.name;
};

Port.prototype.addLink = function (l)
{
    this._valueBeforeLink = this.value;
    this.links.push(l);
    if (CABLES.UI && this._op.checkLinkTimeWarnings) this._op.checkLinkTimeWarnings();

    if (this.onLinkChanged) this.onLinkChanged();
    this.emitEvent("onLinkChanged");
    this._op.emitEvent("onLinkChanged");
};

/**
 * @function getLinkTo
 * @memberof Port
 * @instance
 * @param {Port} p2 otherPort
 * @description return link, which is linked to otherPort
 */
Port.prototype.getLinkTo = function (p2)
{
    for (const i in this.links) if (this.links[i].portIn == p2 || this.links[i].portOut == p2) return this.links[i];
};

/**
 * @function removeLinkTo
 * @memberof Port
 * @instance
 * @param {Port} p2 otherPort
 * @description removes link, which is linked to otherPort
 */
Port.prototype.removeLinkTo = function (p2)
{
    for (const i in this.links)
    {
        if (this.links[i].portIn == p2 || this.links[i].portOut == p2)
        {
            this.links[i].remove();
            if (CABLES.UI && this._op.checkLinkTimeWarnings) this._op.checkLinkTimeWarnings();

            if (this.onLinkChanged) this.onLinkChanged();
            this.emitEvent("onLinkChanged");
            this.emitEvent("onLinkRemoved");
            return;
        }
    }
};

/**
 * @function isLinkedTo
 * @memberof Port
 * @instance
 * @param {Port} p2 otherPort
 * @description returns true if port is linked to otherPort
 */
Port.prototype.isLinkedTo = function (p2)
{
    for (const i in this.links) if (this.links[i].portIn == p2 || this.links[i].portOut == p2) return true;

    return false;
};

Port.prototype._activity = function ()
{
    this.activityCounter++;
};

/**
 * @function trigger
 * @memberof Port
 * @instance
 * @description trigger the linked port (usually invoked on an output function port)
 */
Port.prototype.trigger = function ()
{
    const linksLength = this.links.length;

    this._activity();
    if (linksLength === 0) return;
    if (!this._op.enabled) return;

    let portTriggered = null;
    try
    {
        for (let i = 0; i < linksLength; ++i)
        {
            if (this.links[i].portIn)
            {
                portTriggered = this.links[i].portIn;

                portTriggered.op.patch.pushTriggerStack(portTriggered);
                portTriggered._onTriggered();

                portTriggered.op.patch.popTriggerStack();
            }
            if (this.links[i]) this.links[i].activity();
        }
    }
    catch (ex)
    {
        portTriggered.op.enabled = false;

        if (this._op.patch.isEditorMode())
        {
            // this._op.patch.emitEvent("exception", ex, portTriggered.op);
            // this._op.patch.emitEvent("opcrash", portTriggered);
            // console.log("crash", portTriggered.op.objName);

            if (portTriggered.op.onError) portTriggered.op.onError(ex);
        }
        this._log.error("exception in port: " + portTriggered.op.name, portTriggered.op);
        this._log.error(ex);
    }
};

Port.prototype.call = function ()
{
    this._log.warn("call deprecated - use trigger() ");
    this.trigger();
};

Port.prototype.execute = function ()
{
    this._log.warn("### execute port: " + this.getName(), this.goals.length);
};

Port.prototype.setVariableName = function (n)
{
    this._useVariableName = n;


    this._op.patch.on("variableRename", (oldname, newname) =>
    {
        if (oldname != this._useVariableName) return;
        this._useVariableName = newname;
    });
};

Port.prototype.getVariableName = function ()
{
    return this._useVariableName;
};

Port.prototype.setVariable = function (v)
{
    this.setAnimated(false);
    const attr = { "useVariable": false };

    if (this._variableIn && this._varChangeListenerId)
    {
        this._variableIn.off(this._varChangeListenerId);
        this._variableIn = null;
    }

    if (v)
    {
        this._variableIn = this._op.patch.getVar(v);

        if (!this._variableIn)
        {
            this._log.warn("PORT VAR NOT FOUND!!!", v);
        }
        else
        {
            if (this.type == CONSTANTS.OP.OP_PORT_TYPE_OBJECT)
            {
                this._varChangeListenerId = this._variableIn.on("change", () => { this.set(null); this.set(this._variableIn.getValue()); });
            }
            else
            {
                this._varChangeListenerId = this._variableIn.on("change", this.set.bind(this));
            }
            this.set(this._variableIn.getValue());
        }
        this._useVariableName = v;
        attr.useVariable = true;
        attr.variableName = this._useVariableName;
    }
    else
    {
        attr.variableName = this._useVariableName = null;
        attr.useVariable = false;
    }

    this.setUiAttribs(attr);
    this._op.patch.emitEvent("portSetVariable", this._op, this, v);
};

Port.prototype._handleNoTriggerOpAnimUpdates = function (a)
{
    let hasTriggerPort = false;
    for (let i = 0; i < this._op.portsIn.length; i++)
    {
        if (this._op.portsIn.type == CONSTANTS.OP.OP_PORT_TYPE_FUNCTION)
        {
            hasTriggerPort = true;
            break;
        }
    }

    if (!hasTriggerPort)
    {
        if (a) this._notriggerAnimUpdate = this._op.patch.on("onRenderFrame",
            () =>
            {
                this.updateAnim();
            });
        else this._op.patch.removeEventListener(this._notriggerAnimUpdate);
    }
};

Port.prototype.setAnimated = function (a)
{
    if (this._animated != a)
    {
        this._animated = a;
        this._op._hasAnimPort = true;

        if (this._animated && !this.anim)
        {
            this.anim = new Anim({ "name": "port " + this.name });
            this.anim.addEventListener("onChange", () =>
            {
                this._op.patch.emitEvent("portAnimUpdated", this._op, this, this.anim);
            });
        }
        this._onAnimToggle();
    }

    this._handleNoTriggerOpAnimUpdates(a);
    if (!a)
    {
        this.anim = null;
    }

    this.setUiAttribs({ "isAnimated": this._animated });
};

Port.prototype.toggleAnim = function ()
{
    this._animated = !this._animated;
    if (this._animated && !this.anim)
    {
        this.anim = new Anim({ "name": "port " + this.name });
        this.anim.addEventListener("onChange", () =>
        {
            this._op.patch.emitEvent("portAnimUpdated", this._op, this, this.anim);
        });
    }
    this.setAnimated(this._animated);
    this._onAnimToggle();
    this.setUiAttribs({ "isAnimated": this._animated });
};

/**
 * <pre>
 * CABLES.CONSTANTS.OP.OP_PORT_TYPE_VALUE = 0;
 * CABLES.CONSTANTS.OP.OP_PORT_TYPE_FUNCTION = 1;
 * CABLES.CONSTANTS.OP.OP_PORT_TYPE_OBJECT = 2;
 * CABLES.CONSTANTS.OP.OP_PORT_TYPE_TEXTURE = 2;
 * CABLES.CONSTANTS.OP.OP_PORT_TYPE_ARRAY = 3;
 * CABLES.CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC = 4;
 * CABLES.CONSTANTS.OP.OP_PORT_TYPE_STRING = 5;
 * </pre>
 * @function getType
 * @memberof Port
 * @instance
 * @return {Number} type of port
 */
Port.prototype.getType = function ()
{
    return this.type;
};

/**
 * @function isLinked
 * @memberof Port
 * @instance
 * @return {Boolean} true if port is linked
 */
Port.prototype.isLinked = function ()
{
    return this.links.length > 0 || this._animated || this._useVariableName != null;
};

Port.prototype.isBoundToVar = function ()
{
    const b = this._useVariableName != null;
    this.uiAttribs.boundToVar = b;
    return b;
};
/**
 * @function isAnimated
 * @memberof Port
 * @instance
 * @return {Boolean} true if port is animated
 */
Port.prototype.isAnimated = function ()
{
    return this._animated;
};

/**
 * @function isHidden
 * @memberof Port
 * @instance
 * @return {Boolean} true if port is hidden
 */
Port.prototype.isHidden = function ()
{
    return this.uiAttribs.hidePort;
};

/**
 * @function onTriggered
 * @memberof Port
 * @instance
 * @param {function} a onTriggeredCallback
 * @description set callback, which will be executed when port was triggered (usually output port)
 */
Port.prototype._onTriggered = function (a)
{
    this._activity();
    this._op.updateAnims();
    if (this._op.enabled && this.onTriggered) this.onTriggered(a);

    if (this._op.enabled) this.emitEvent("trigger");
};

Port.prototype._onSetProfiling = function (v)
{
    this._op.patch.profiler.add("port", this);
    this.setValue(v);
    this._op.patch.profiler.add("port", null);
};

Port.prototype._onTriggeredProfiling = function ()
{
    if (this._op.enabled && this.onTriggered)
    {
        this._op.patch.profiler.add("port", this);
        this.onTriggered();
        this._op.patch.profiler.add("port", null);
    }
};



Port.prototype.getUiActiveState = function ()
{
    return this._uiActiveState;
};

Port.prototype.setUiActiveState = function (onoff)
{
    this._uiActiveState = onoff;
    if (this.onUiActiveStateChange) this.onUiActiveStateChange();
};

/**
 * @deprecated
 * @param {function} cb
 */
Port.prototype.onValueChange = function (cb)
{
    this.onChange = cb;
};

/**
 * @deprecated
 */
Port.prototype.hidePort = function () {};


/**
 * Returns the port type string, e.g. "value" based on the port type number
 * @function portTypeNumberToString
 * @instance
 * @memberof Port
 * @param {Number} type - The port type number
 * @returns {String} - The port type as string
 */
Port.portTypeNumberToString = function (type)
{
    if (type == CONSTANTS.OP.OP_PORT_TYPE_VALUE) return "value";
    if (type == CONSTANTS.OP.OP_PORT_TYPE_FUNCTION) return "function";
    if (type == CONSTANTS.OP.OP_PORT_TYPE_OBJECT) return "object";
    if (type == CONSTANTS.OP.OP_PORT_TYPE_ARRAY) return "array";
    if (type == CONSTANTS.OP.OP_PORT_TYPE_STRING) return "string";
    if (type == CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC) return "dynamic";
    return "unknown";
};



;// CONCATENATED MODULE: ./src/core/core_port_switch.js




class SwitchPort extends Port
{
    constructor(__parent, name, type, uiAttribs, indexPort)
    {
        super(__parent, name, type, uiAttribs);

        this.get = () =>
        {
            let s = super.get();

            if (CABLES.UI)
            {
                if (
                    s === "" ||
                    s === null ||
                    s === undefined ||
                    (uiAttribs.values && uiAttribs.values.indexOf(String(s)) === -1)
                )
                {
                    this.op.setUiError("invalidswitch", "Invalid Value [" + this.name + "]: \"" + s + "\"", 1);
                }
                else this.op.setUiError("invalidswitch", null);
            }

            if (s === null || s === undefined)s = "";

            return s;
        };

        this.indexPort = indexPort;
        this.indexPort.set = (value) =>
        {
            const values = uiAttribs.values;

            if (!values)
            {
                // console.log("switch port has no values", this);
                return;
            }

            let intValue = Math.floor(value);

            intValue = Math.min(intValue, values.length - 1);
            intValue = Math.max(intValue, 0);

            this.indexPort.setValue(intValue);
            this.set(values[intValue]);

            if (this.op.patch.isEditorMode() && performance.now() - (this.lastTime || 0) > 100 && window.gui && gui.patchView.isCurrentOp(this.op))
            {
                gui.opParams.show(this.op);
                this.lastTime = performance.now();
            }
        };
    }

    setUiAttribs(attribs)
    {
        const hidePort = attribs.hidePort;
        attribs.hidePort = true;
        super.setUiAttribs(attribs);
        if (typeof hidePort !== "undefined")
        {
            this.indexPort.setUiAttribs({ hidePort });
        }
    }
}



;// CONCATENATED MODULE: ./src/core/core_port_select.js




class ValueSelectPort extends SwitchPort
{
    setUiAttribs(newAttribs)
    {
        // never unhide valuePort when indexPort is linked
        if (this.indexPort.isLinked())
        {
            for (const p in newAttribs)
            {
                if (p == "greyout" && !newAttribs[p]) newAttribs[p] = "true";
            }
        }
        super.setUiAttribs(newAttribs);
    }
}





;// CONCATENATED MODULE: ./src/core/core_port_multi.js



const MIN_NUM_PORTS = 2;

class MultiPort extends Port
{
    constructor(__parent, name, type, dir, uiAttribs, uiAttribsPorts)
    {
        super(__parent, name, CONSTANTS.OP.OP_PORT_TYPE_ARRAY, uiAttribs);

        this.setUiAttribs({ "multiPort": true, "group": this.name, "order": -1 });
        this.ports = [];
        this.direction = dir;
        this._uiAttribsPorts = uiAttribsPorts;

        // console.log("uiattribs", uiAttribs);

        const updateArray = () =>
        {
            const arr = [];

            let ll = 1;
            if (this.uiAttribs.multiPortManual)ll = 0;

            for (let i = 0; i < this.ports.length - ll; i++)
                arr[i] = this.ports[i];

            this.setRef(arr);
        };

        const updateUi = () =>
        {
            let grey = !this.uiAttribs.multiPortManual || undefined;

            if (this.direction == CONSTANTS.PORT.PORT_DIR_OUT)grey = false;

            for (let i = 0; i < this.ports.length; i++)
            {
                let lp; // undefined to remove/not set it
                // let opacity;// undefined to remove/not set it
                // let grey;// undefined to remove/not set it
                let addPort = false;
                let title;
                let o = {};


                // console.log("this.op.preservedPortTitles", this.op.preservedPortTitles, this.op.preservedPortTitles[po.name], po.name);
                if (this.op.preservedPortTitles && this.op.preservedPortTitles[this.ports[i].name]) title = this.op.preservedPortTitles[this.ports[i].name];


                // if (!this.uiAttribs.multiPortManual)grey = true;
                if (i == 0) lp = this.ports.length;

                if (!this.uiAttribs.multiPortManual)
                    if (i == this.ports.length - 1)
                    {
                        title = "add port";
                        addPort = true;
                        grey = true;
                    }

                for (const attin in this._uiAttribsPorts)
                {
                    o[attin] = this._uiAttribsPorts[attin];
                }

                o.addPort = addPort;
                o.longPort = lp;
                o.title = title;
                o.greyout = grey;
                o.group = this.name;

                this.ports[i].setUiAttribs(o);
            }
        };

        this.removeInvalidPorts = () =>
        {
            for (let i = 0; i < this.ports.length; i++)
            {
                if (!this.ports[i]) this.ports.splice(i, 1);
            }

            if (!this.uiAttribs.multiPortManual)
            {
                if (this.ports.length > MIN_NUM_PORTS)

                    for (let i = this.ports.length - 1; i > 1; i--)
                    {
                        if (!this.ports[i].isLinked()) this.uiAttribs.multiPortNum = i;
                        else break;
                    }
            }

            updateArray();
        };

        this.countPorts = () =>
        {
            if (CABLES.UI && gui.patchView.patchRenderer.isDraggingPort())
            {
                clearTimeout(this.retryTo);
                this.retryTo = setTimeout(this.countPorts.bind(this));
                return;
            }
            this.retryTo = null;

            let redo = false;
            this.removeListeners();
            this.removeInvalidPorts();

            for (let i = 0; i < this.ports.length; i++)
            {
                if (this.ports[i] && this.ports[i].links.length > 1)
                {
                    const po = this.ports[i + 1];
                    const otherPort = this.ports[i].links[0].getOtherPort(this.ports[i]);

                    if (!po || !otherPort)
                    {
                        this._log.warn("no port found?", po.name);
                    }
                    else
                    {
                        this.ports[i].links[0].remove();
                        this.op.patch.link(this.op, po.name, otherPort.op, otherPort.name);
                        redo = true;
                    }
                    break;
                }
            }

            if (!this.uiAttribs.multiPortManual)
            {
                let foundHole = true;
                while (foundHole)
                {
                    // console.log("search holes...");
                    foundHole = false;

                    for (let i = this.ports.length - 1; i > 1; i--)
                    {
                        if (this.ports[i] && this.ports[i].links.length > 0 && this.ports[i - 1].links.length == 0)
                        {
                            // console.log("found hole!");

                            // found hole
                            const otherPort = this.ports[i].links[0].getOtherPort(this.ports[i]);
                            this.ports[i].links[0].remove();

                            const po = this.ports[i - 1];

                            if (po && this.ports[i])
                            {
                                // console.log("move ", this.ports[i].name, "to", po.name);
                                this.op.patch.link(this.op, po.name, otherPort.op, otherPort.name);
                                foundHole = true;
                                redo = true;
                                break;
                            }
                        }
                    }


                    // this.checkNum();
                }

                // this.removeInvalidPorts();
            }


            if (!this.uiAttribs.multiPortManual) // if auto
            {
                while (this.ports.length > MIN_NUM_PORTS && !this.ports[this.ports.length - 1].isLinked() && !this.ports[this.ports.length - 2].isLinked())
                {
                    let i = this.ports.length - 1;
                    if (!this.ports[i].isLinked() && this.ports[i - 1] && !this.ports[i - 1].isLinked())
                    {
                        this.ports[i].setUiAttribs({ "removed": true });
                        this.ports[i].remove();
                        // this.ports[i] = null;
                        this.ports.splice(i, 1);
                    }
                }
            }

            this.removeInvalidPorts();

            if (!this.uiAttribs.multiPortManual && this.ports.length > 0 && this.ports[this.ports.length - 1].isLinked()) this.newPort();

            updateArray();
            updateUi();

            if (redo) this.countPorts();
            else this.addListeners();
        };

        this.removeListeners = () =>
        {
            for (let i = 0; i < this.ports.length; i++)
            {
                const po = this.ports[i];
                po.multiPortChangeListener = po.off(po.multiPortChangeListener);
                po.multiLinkChangeListener = po.off(po.multiLinkChangeListener);
            }
        };

        this.addListeners = () =>
        {
            for (let i = 0; i < this.ports.length; i++)
            {
                const po = this.ports[i];
                const idx = i;

                if (po.multiPortChangeListener)po.multiPortChangeListener = po.off(po.multiPortChangeListener);
                po.multiPortChangeListener = po.on("change", updateArray.bind(this));


                if (po.multiPortTriggerListener)po.multiPortTriggerListener = po.off(po.multiPortTriggerListener);
                po.multiPortTriggerListener = po.on("trigger", () => { this._onTriggered(idx); });


                // if (po.multiPortTriggerListener)po.multiPortTriggerListener = po.off(po.multiPortTriggerListener);
                // po.multiPortTriggerListener = po.on("trigger", this.trigger());

                if (po.multiLinkChangeListener)po.multiLinkChangeListener = po.off(po.multiLinkChangeListener);
                po.multiLinkChangeListener = po.on("onLinkChanged", () =>
                {
                    this.countPorts();
                    this.emitEvent("onLinkChanged");
                });

                if (po.multiLinkRemoveListener)po.multiLinkRemoveListener = po.off(po.multiLinkRemoveListener);
                po.multiLinkRemoveListener = po.on("onLinkRemoved", () =>
                {
                    // this.removeInvalidPorts();
                    // this.checkNum();
                    // this.countPorts();
                    updateUi();
                    this.emitEvent("onLinkChanged");
                    // this.countPorts.bind(this);
                });
            }
        };

        this.newPort = () =>
        {
            const attrs = {};
            // if (type == CABLES.OP_PORT_TYPE_STRING) attrs.type = "string";
            attrs.type = type;
            const po = new Port(this.op, name + "_" + this.ports.length, type, attrs);

            po.direction = dir;
            this.ports.push(po);
            // console.log("CONSTANTS.PORT_DIR_OUT", CONSTANTS.PORT.PORT_DIR_OUT, this.direction);
            if (this.direction == CONSTANTS.PORT.PORT_DIR_OUT) this.op.addOutPort(po);
            else this.op.addInPort(po);

            if (type == CONSTANTS.OP.OP_PORT_TYPE_NUMBER) po.setInitialValue(0);
            else if (type == CONSTANTS.OP.OP_PORT_TYPE_STRING) po.setInitialValue("");

            this.addListeners();

            updateUi();
            updateArray();
            this.emitEvent("onLinkChanged");
            // console.log("this.op.preservedPortTitles", this.op.preservedPortTitles, this.op.preservedPortTitles[po.name], po.name);
            if (this.op.preservedPortTitles && this.op.preservedPortTitles[po.name]) po.setUiAttribs({ "title": this.op.preservedPortTitles[po.name] });

            return po;
        };

        this.initPorts = () =>
        {
            for (let i = 0; i < MIN_NUM_PORTS; i++) this.newPort();
            updateArray();
            updateUi();
        };

        this.checkNum = () =>
        {
            this.uiAttribs.multiPortNum = Math.max(MIN_NUM_PORTS, this.uiAttribs.multiPortNum);

            while (this.ports.length < this.uiAttribs.multiPortNum) this.newPort();
            while (this.ports.length > this.uiAttribs.multiPortNum) if (this.ports[this.ports.length - 1]) this.ports.pop().remove();

            this.removeInvalidPorts();
        };

        this.incDec = (incDir) =>
        {
            this.uiAttribs.multiPortNum = this.uiAttribs.multiPortNum || MIN_NUM_PORTS;
            // console.log("this.uiAttribs.multiPortNum", this.uiAttribs.multiPortNum, this.uiAttribs.multiPortNum + incDir);
            this.setUiAttribs({ "multiPortNum": this.uiAttribs.multiPortNum + incDir });
            this.checkNum();

            updateUi();
        };

        this.toggleManual = () =>
        {
            this.setUiAttribs({ "multiPortManual": !this.uiAttribs.multiPortManual });
            this.op.refreshParams();
        };

        this.on("onUiAttrChange", (attribs) =>
        {
            if (attribs.hasOwnProperty("multiPortManual"))
            {
                updateUi();
                this.removeInvalidPorts();
                this.checkNum();
                this.countPorts();
                updateUi();
            }
        });


        this.on("onUiAttrChange", this.checkNum.bind(this));
        this.checkNum();
        this.countPorts();
        this.removeInvalidPorts();
        updateUi();
    }
}





;// CONCATENATED MODULE: ./src/core/core_op.js









/**
 * op the class of all operators
 * @namespace external:CABLES#Op
 * @hideconstructor
 */

/**
 * @type {Object}
 * @name attachments
 * @instance
 * @memberof Op
 * @description access file attachments as String values
 * @example
 * // set shader source to attached files (files are called shader.vert / shader.frag)
 * shader.setSource(attachments.shader_vert,attachments.shader_frag);
 */

const Ops = {};

const Op = function ()
{
    EventTarget.apply(this);

    this._log = new Logger("core_op");
    this.data = {}; // UNUSED, DEPRECATED, only left in for backwards compatibility with userops
    this.storage = {}; // op-specific data to be included in export
    this.__objName = "";
    this.portsOut = [];
    this.portsIn = [];
    this.portsInData = []; // original loaded patch data
    this.opId = ""; // unique op id
    this.uiAttribs = {};
    this.enabled = true;
    this.patch = arguments[0];
    this._name = arguments[1];
    this.preservedPortTitles = {};
    this.preservedPortValues = {};
    this.preservedPortLinks = {};

    this._linkTimeRules = {
        "needsLinkedToWork": [],
        "needsParentOp": null
    };

    this.shouldWork = {};
    this.hasUiErrors = false;
    this._uiErrors = {};
    this._hasAnimPort = false;

    if (arguments[1])
    {
        this._shortOpName = CABLES.getShortOpName(arguments[1]);
        this.getTitle();
    }

    this.id = arguments[2] || shortId(); // instance id
    this.onAddPort = null;
    this.onCreate = null;
    this.onResize = null;
    this.onLoaded = null;
    this.onDelete = null;
    this.onError = null;

    this._instances = null;

    /**
     * overwrite this to prerender shader and meshes / will be called by op `loadingStatus`
     * @function preRender
     * @memberof Op
     * @instance
     */
    this.preRender = null;

    /**
     * overwrite this to initialize your op
     * @function init
     * @memberof Op
     * @instance
     */
    this.init = null;

    Object.defineProperty(this, "name", {
        get() { return this.getTitle(); },
        set(v)
        {
            this.setTitle(v);
            this._log.warn("deprecated op set name ", v);
        }
    });

    Object.defineProperty(this, "_objName", { set(on)
    {
        this.__objName = on; this._log = new Logger("op " + on);
    } });

    Object.defineProperty(this, "objName", { get() { return this.__objName; } });
    Object.defineProperty(this, "shortName", { get() { return this._shortOpName; } });

    if (this.initUi) this.initUi();
};

{
    Op.prototype.clearUiAttrib = function (name)
    {
        const obj = {};
        // obj.name = null;
        this.uiAttrib(obj);
    };

    Op.prototype.checkMainloopExists = function ()
    {
        if (!CABLES.UI) return;
        if (!this.patch.cgl.mainloopOp) this.setUiError("nomainloop", "patch should have a mainloop to use this op");
        else this.setUiError("nomainloop", null);
    };

    Op.prototype.getTitle = function ()
    {
        if (!this.uiAttribs) return "nouiattribs" + this._name;

        // if ((this.uiAttribs.title === undefined || this.uiAttribs.title === "") && this.objName.indexOf("Ops.Ui.") == -1)
        //     this.uiAttribs.title = this._shortOpName;

        return this.uiAttribs.title || this._shortOpName;
    };

    Op.prototype.setTitle = function (title)
    {
        // this._log.log("settitle", title);
        // this._log.log(
        //     (new Error()).stack
        // );

        if (title != this.getTitle()) this.uiAttr({ "title": title });
    };

    Op.prototype.setStorage = function (newAttribs)
    {
        if (!newAttribs) return;
        this.storage = this.storage || {};

        let changed = false;
        for (const p in newAttribs)
        {
            if (this.storage[p] != newAttribs[p]) changed = true;
            this.storage[p] = newAttribs[p];
        }

        if (changed) this.emitEvent("onStorageChange", newAttribs);
    };

    Op.prototype.isSubPatchOp = function ()
    {
        if (this.storage) return (this.storage.subPatchVer || 0);
    };

    const _setUiAttrib = function (newAttribs)
    {
        if (!newAttribs) return;

        if (newAttribs.error || newAttribs.warning || newAttribs.hint)
        {
            this._log.warn("old ui error/warning attribute in " + this._name + ", use op.setUiError !", newAttribs);
        }


        if (typeof newAttribs != "object") this._log.error("op.uiAttrib attribs are not of type object");
        if (!this.uiAttribs) this.uiAttribs = {};

        let changed = false;
        let emitMove = false;
        if (
            CABLES.UI &&
            newAttribs.hasOwnProperty("translate") &&
            (
                !this.uiAttribs.translate ||
                this.uiAttribs.translate.x != newAttribs.translate.x ||
                this.uiAttribs.translate.y != newAttribs.translate.y
            )) emitMove = true;


        if (newAttribs.hasOwnProperty("title") && newAttribs.title != this.uiAttribs.title)
        {
            // const doEmitEvent = newAttribs.title != this.getTitle();
            this.uiAttribs.title = newAttribs.title;
            // if (doEmitEvent) this.emitEvent("onTitleChange", newAttribs.title);
            changed = true;
            // this.setTitle(newAttribs.title);
        }

        if (newAttribs.hasOwnProperty("disabled")) this.setEnabled(!newAttribs.disabled);

        for (const p in newAttribs)
        {
            if (this.uiAttribs[p] != newAttribs[p]) changed = true;
            this.uiAttribs[p] = newAttribs[p];
        }


        if (this.uiAttribs.hasOwnProperty("selected") && this.uiAttribs.selected == false) delete this.uiAttribs.selected;


        if (changed)
        {
            this.emitEvent("onUiAttribsChange", newAttribs);
            this.patch.emitEvent("onUiAttribsChange", this, newAttribs);
        }


        if (emitMove) this.emitEvent("move");
    };
    /**
     * setUiAttrib
     * possible values:
     * <pre>
     * warning - warning message - showing up in op parameter panel
     * error - error message - showing up in op parameter panel
     * extendTitle - op title extension, e.g. [ + ]
     * </pre>
     * @function setUiAttrib
     * @param {Object} newAttribs, e.g. {"attrib":value}
     * @memberof Op
     * @instance
     * @example
     * op.setUiAttrib({"extendTitle":str});
     */
    Op.prototype.setUiAttribs = Op.prototype.setUiAttrib = Op.prototype.uiAttr = _setUiAttrib;

    Op.prototype.getName = function ()
    {
        if (this.uiAttribs.name) return this.uiAttribs.name;
        return this._name;
    };

    Op.prototype.addOutPort = function (p)
    {
        p.direction = CONSTANTS.PORT.PORT_DIR_OUT;
        p._op = this;
        this.portsOut.push(p);
        this.emitEvent("onPortAdd", p);
        return p;
    };

    Op.prototype.hasDynamicPort = function ()
    {
        let i = 0;
        for (i = 0; i < this.portsIn.length; i++)
        {
            if (this.portsIn[i].type == CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC) return true;
            if (this.portsIn[i].getName() == "dyn") return true;
        }
        for (i = 0; i < this.portsOut.length; i++)
        {
            if (this.portsOut[i].type == CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC) return true;
            if (this.portsOut[i].getName() == "dyn") return true;
        }

        return false;
    };

    Op.prototype.addInPort = function (p)
    {
        if (!(p instanceof Port)) throw new Error("parameter is not a port!");

        p.direction = CONSTANTS.PORT.PORT_DIR_IN;
        p._op = this;

        this.portsIn.push(p);
        this.emitEvent("onPortAdd", p);

        return p;
    };

    /**
     * create a trigger input port
     * @function inTrigger
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     *
     */
    Op.prototype.inFunction = Op.prototype.inTrigger = function (name, v)
    {
        const p = this.addInPort(new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_FUNCTION));
        if (v !== undefined) p.set(v);
        return p;
    };

    /**
     * create multiple UI trigger buttons
     * @function inTriggerButton
     * @memberof Op
     * @instance
     * @param {String} name
     * @param {Array} names
     * @return {Port} created port
     */
    Op.prototype.inFunctionButton = Op.prototype.inTriggerButton = function (name, v)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_FUNCTION, {
                "display": "button"
            })
        );
        if (v !== undefined) p.set(v);
        return p;
    };

    Op.prototype.inFunctionButton = Op.prototype.inUiTriggerButtons = function (name, v)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_FUNCTION, {
                "display": "buttons"
            })
        );
        if (v !== undefined) p.set(v);
        return p;
    };



    /**
     * create a number value input port
     * @function inFloat
     * @memberof Op
     * @instance
     * @param {String} name
     * @param {Number} value
     * @return {Port} created port
     */
    Op.prototype.inValueFloat = Op.prototype.inValue = Op.prototype.inFloat = function (name, v)
    {
        const p = this.addInPort(new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE));

        p.setInitialValue(v);

        return p;
    };

    /**
     * create a boolean input port, displayed as a checkbox
     * @function inBool
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {Boolean} value
     * @return {Port} created port
     */
    Op.prototype.inValueBool = Op.prototype.inBool = function (name, v)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_NUMBER, {
                "display": "bool"
            })
        );

        if (v === true)v = 1;
        if (v === false)v = 0;
        p.setInitialValue(v);

        return p;
    };


    Op.prototype.inMultiPort = function (name, type)
    {
        const p = new MultiPort(
            this,
            name,
            type,
            CONSTANTS.PORT.PORT_DIR_IN,
            {
                "addPort": true,
                "hidePort": true
            }
        );
        p.ignoreValueSerialize = true;

        this.addInPort(p);
        p.initPorts();

        return p;
    };

    Op.prototype.outMultiPort = function (name, type, uiAttribsPort = {})
    {
        const p = new MultiPort(
            this,
            name,
            type,
            CONSTANTS.PORT.PORT_DIR_OUT,
            {
                "display": "multiport",
                "hidePort": true
            },
            uiAttribsPort
        );
        p.ignoreValueSerialize = true;

        this.addOutPort(p);
        p.initPorts();

        return p;
    };



    Op.prototype.inValueString = function (name, v)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
                "type": "string"
            })
        );
        p.value = "";

        p.setInitialValue(v);
        return p;
    };

    /**
     * create a String value input port
     * @function inString
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {String} value default value
     * @return {Port} created port
     */
    Op.prototype.inString = function (name, v)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_STRING, {
                "type": "string"
            })
        );
        v = v || "";
        // p.value = v;

        p.setInitialValue(v);
        return p;
    };

    /**
     * create a String value input port displayed as TextArea
     * @function inValueText
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {String} value default value
     * @return {Port} created port
     */
    Op.prototype.inValueText = function (name, v)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
                "type": "string",
                "display": "text"
            })
        );
        p.value = "";

        p.setInitialValue(v);
        // if (v !== undefined)
        // {
        //     p.set(v);
        //     p.defaultValue = v;
        // }
        return p;
    };

    Op.prototype.inTextarea = function (name, v)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_STRING, {
                "type": "string",
                "display": "text"
            })
        );
        p.value = "";
        if (v !== undefined)
        {
            p.set(v);
            p.defaultValue = v;
        }
        return p;
    };

    /**
     * create a String value input port displayed as editor
     * @function inStringEditor
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {String} value default value
     * @return {Port} created port
     */
    // new string
    Op.prototype.inStringEditor = function (name, v, syntax, hideFormatButton = true)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_STRING, {
                "type": "string",
                "display": "editor",
                "editShortcut": true,
                "editorSyntax": syntax,
                "hideFormatButton": hideFormatButton
            }));

        p.value = "";
        if (v !== undefined)
        {
            p.set(v);
            p.defaultValue = v;
        }
        return p;
    };

    // old
    Op.prototype.inValueEditor = function (name, v, syntax, hideFormatButton = true)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_NUMBER, {
                "type": "string",
                "display": "editor",
                "editorSyntax": syntax,
                "hideFormatButton": hideFormatButton
            })
        );
        p.value = "";
        if (v !== undefined)
        {
            p.set(v);
            p.defaultValue = v;
        }
        return p;
    };

    /**
     * create a string select box
     * @function inDropDown
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {Array} values
     * @param {String} value default value
     * @return {Port} created port
     */
    Op.prototype.inValueSelect = Op.prototype.inDropDown = function (name, values, v, noindex)
    {
        let p = null;
        if (!noindex)
        {
            const indexPort = new Port(this, name + " index", CONSTANTS.OP.OP_PORT_TYPE_NUMBER, {
                "increment": "integer",
                "hideParam": true
            });
            const n = this.addInPort(indexPort);

            if (values) for (let i = 0; i < values.length; i++) values[i] = String(values[i]);

            const valuePort = new ValueSelectPort(
                this,
                name,
                CONSTANTS.OP.OP_PORT_TYPE_NUMBER,
                {
                    "display": "dropdown",
                    "hidePort": true,
                    "type": "string",
                    "values": values
                },
                n
            );

            valuePort.indexPort = indexPort;

            valuePort.on("change", (val, thePort) =>
            {
                if (!thePort.indexPort.isLinked() && thePort.uiAttribs.values)
                {
                    const idx = thePort.uiAttribs.values.indexOf(val);
                    if (idx > -1) thePort.indexPort.set(idx);
                }
            });

            indexPort.onLinkChanged = function ()
            {
                valuePort.setUiAttribs({ "greyout": indexPort.isLinked() });
            };

            p = this.addInPort(valuePort);

            if (v !== undefined)
            {
                p.set(v);
                const index = values.findIndex((item) => { return item == v; });
                n.setValue(index);
                p.defaultValue = v;
                n.defaultValue = index;
            }
        }
        else
        {
            const valuePort = new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
                "display": "dropdown",
                "hidePort": true,
                "type": "string",
                values
            });

            p = this.addInPort(valuePort);
        }

        return p;
    };

    /**
     * create a string switch box
     * @function inSwitch
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {Array} values
     * @param {String} value default value
     * @return {Port} created port
     */
    Op.prototype.inSwitch = function (name, values, v, noindex)
    {
        let p = null;
        if (!noindex)
        {
            if (!v)v = values[0];
            const indexPort = new Port(this, name + " index", CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
                "increment": "integer",
                "values": values,
                "hideParam": true
            });
            const n = this.addInPort(indexPort);

            if (values) for (let i = 0; i < values.length; i++) values[i] = String(values[i]);

            const switchPort = new SwitchPort(
                this,
                name,
                CONSTANTS.OP.OP_PORT_TYPE_STRING,
                {
                    "display": "switch",
                    "hidePort": true,
                    "type": "string",
                    "values": values
                },
                n
            );

            switchPort.indexPort = indexPort;

            switchPort.on("change", (val, thePort) =>
            {
                if (!thePort.indexPort.isLinked() && thePort.uiAttribs.values)
                {
                    const idx = thePort.uiAttribs.values.indexOf(val);
                    if (idx > -1) thePort.indexPort.set(idx);
                }
            });

            indexPort.onLinkChanged = function ()
            {
                switchPort.setUiAttribs({ "greyout": indexPort.isLinked() });
            };
            p = this.addInPort(switchPort);

            if (v !== undefined)
            {
                p.set(v);
                const index = values.findIndex((item) => { return item == v; });
                n.setValue(index);
                p.defaultValue = v;
                n.defaultValue = index;
            }
        }
        else
        {
            const switchPort = new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_STRING, {
                "display": "switch",
                "hidePort": true,
                "type": "string",
                "values": values
            });
            p = this.addInPort(switchPort);
        }

        return p;
    };

    /**
     * create a integer input port
     * @function inInt
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {number} value default value
     * @return {Port} created port
     */
    Op.prototype.inValueInt = Op.prototype.inInt = function (name, v)
    {
        // old
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
                "increment": "integer"
            })
        );
        if (v !== undefined)
        {
            p.set(v);
            p.defaultValue = v;
        }
        return p;
    };

    /**
     * create a file/URL input port
     * @function inURL
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.inFile = function (name, filter, v)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
                "display": "file",
                "type": "string",
                "filter": filter
            })
        );
        if (v !== undefined)
        {
            p.set(v);
            p.defaultValue = v;
        }
        return p;
    };

    Op.prototype.inUrl = function (name, filter, v)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_STRING, {
                "display": "file",
                "type": "string",
                "filter": filter
            })
        );
        if (v !== undefined)
        {
            p.set(v);
            p.defaultValue = v;
        }
        return p;
    };

    /**
     * create a texture input port
     * @function inTexture
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.inTexture = function (name, v)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_OBJECT, {
                "display": "texture",
                "objType": "texture",
                "preview": true
            })
        );
        p.ignoreValueSerialize = true;
        if (v !== undefined) p.set(v);
        return p;
    };


    /**
     * create a object input port
     * @function inObject
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.inObject = function (name, v, objType)
    {
        const p = this.addInPort(new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_OBJECT, { "objType": objType }));
        p.ignoreValueSerialize = true;

        if (v !== undefined) p.set(v);
        return p;
    };

    Op.prototype.inGradient = function (name, v)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
                "display": "gradient"
                // "hidePort": true
            })
        );
        if (v !== undefined) p.set(v);
        return p;
    };


    Op.prototype.getPortVisibleIndex = function (p)
    {
        let ports = this.portsIn;
        if (p.direction == CONSTANTS.PORT_DIR_OUT)ports = this.portsOut;

        let index = 0;
        for (let i = 0; i < ports.length; i++)
        {
            if (ports[i].uiAttribs.hidePort) continue;
            index++;
            if (ports[i] == p) return index;
        }
    };

    /**
     * create a array input port
     * @function inArray
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.inArray = function (name, v, stride)
    {
        if (!stride && CABLES.UTILS.isNumeric(v))stride = v;

        const p = this.addInPort(new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_ARRAY, { "stride": stride }));

        if (v !== undefined && (Array.isArray(v) || v == null)) p.set(v);

        // if (v !== undefined) p.set(v);
        return p;
    };

    /**
     * create a value slider input port
     * @function inFloatSlider
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {number} defaultvalue
     * @param {number} min
     * @param {number} max
     * @return {Port} created port
     */
    Op.prototype.inValueSlider = Op.prototype.inFloatSlider = function (name, v, min, max)
    {
        const uiattribs = { "display": "range" };

        if (min != undefined && max != undefined)
        {
            uiattribs.min = min;
            uiattribs.max = max;
        }

        const p = this.addInPort(new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE, uiattribs));
        if (v !== undefined)
        {
            p.set(v);
            p.defaultValue = v;
        }
        return p;
    };

    /**
     * create output trigger port
     * @function outTrigger
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.outFunction = Op.prototype.outTrigger = function (name, v)
    {
        // old
        const p = this.addOutPort(new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_FUNCTION));
        if (v !== undefined) p.set(v);
        return p;
    };

    /**
     * create output value port
     * @function outNumber
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {number} default value
     * @return {Port} created port
     */
    Op.prototype.outValue = Op.prototype.outNumber = function (name, v)
    {
        // old
        const p = this.addOutPort(new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE));
        if (v !== undefined) p.set(v);
        return p;
    };

    /**
     * deprecated create output boolean port
     * @deprecated
     * @function outBool
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.outValueBool = Op.prototype.outBool = function (name, v)
    {
        // old: use outBoolNum
        const p = this.addOutPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
                "display": "bool"
            })
        );
        if (v !== undefined) p.set(v);
        else p.set(0);
        return p;
    };

    /**
     * create output boolean port,value will be converted to 0 or 1
     * @function outBoolNum
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.outBoolNum = function (name, v)
    {
        const p = this.addOutPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
                "display": "boolnum"
            })
        );

        p.set = function (b)
        {
            this.setValue(b ? 1 : 0);
            // this._log.log("bool set", b, this.get());
        }.bind(p);

        if (v !== undefined) p.set(v);
        else p.set(0);
        return p;
    };

    /**
     * create output string port
     * @function outString
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.outValueString = function (name, v)
    {
        const p = this.addOutPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
                "type": "string"
            })
        );
        if (v !== undefined) p.set(v);
        return p;
    };
    Op.prototype.outString = function (name, v)
    {
        const p = this.addOutPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_STRING, {
                "type": "string"
            })
        );
        if (v !== undefined) p.set(v);
        else p.set("");
        return p;
    };

    /**
     * create output object port
     * @function outObject
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.outObject = function (name, v, objType)
    {
        const p = this.addOutPort(new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_OBJECT, { "objType": objType || null }));
        p.set(v || null);
        p.ignoreValueSerialize = true;
        return p;
    };

    /**
     * create output array port
     * @function outArray
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.outArray = function (name, v, stride)
    {
        if (!stride && CABLES.UTILS.isNumeric(v))stride = v;
        const p = this.addOutPort(new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_ARRAY, { "stride": stride }));
        if (v !== undefined && (Array.isArray(v) || v == null)) p.set(v);

        p.ignoreValueSerialize = true;
        return p;
    };

    /**
     * create output texture port
     * @function outTexture
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.outTexture = function (name, v)
    {
        const p = this.addOutPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_OBJECT, {
                "preview": true,
                "objType": "texture",
                "display": "texture"
            })
        );
        if (v !== undefined) p.set(v || CGL.Texture.getEmptyTexture(this.patch.cgl));

        p.ignoreValueSerialize = true;
        return p;
    };

    Op.prototype.inDynamic = function (name, filter, options, v)
    {
        const p = new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC, options);

        p.shouldLink = function (p1, p2)
        {
            if (filter && UTILS.isArray(filter))
            {
                for (let i = 0; i < filter.length; i++)
                {
                    if (p1 == this && p2.type === filter[i]) return true;
                    if (p2 == this && p1.type === filter[i]) return true;
                }
                return false; // types do not match
            }
            return true; // no filter set
        };

        this.addInPort(p);
        if (v !== undefined)
        {
            p.set(v);
            p.defaultValue = v;
        }
        return p;
    };

    Op.prototype.removeLinks = function ()
    {
        for (let i = 0; i < this.portsIn.length; i++) this.portsIn[i].removeLinks();
        for (let i = 0; i < this.portsOut.length; i++) this.portsOut[i].removeLinks();
    };

    Op.prototype.getSerialized = function ()
    {
        const opObj = {};

        if (this.opId) opObj.opId = this.opId;
        if (this.patch.storeObjNames) opObj.objName = this.objName;

        opObj.id = this.id;
        opObj.uiAttribs = JSON.parse(JSON.stringify(this.uiAttribs)) || {};

        if (this.storage && Object.keys(this.storage).length > 0) opObj.storage = JSON.parse(JSON.stringify(this.storage));
        if (this.uiAttribs.hasOwnProperty("working") && this.uiAttribs.working == true) delete this.uiAttribs.working;
        if (opObj.uiAttribs.hasOwnProperty("uierrors")) delete opObj.uiAttribs.uierrors;

        if (opObj.uiAttribs.title === "") delete opObj.uiAttribs.title;
        if (opObj.uiAttribs.color === null) delete opObj.uiAttribs.color;
        if (opObj.uiAttribs.comment === null) delete opObj.uiAttribs.comment;

        if (opObj.uiAttribs.title == this._shortOpName ||
            (this.uiAttribs.title || "").toLowerCase() == this._shortOpName.toLowerCase()) delete opObj.uiAttribs.title;

        opObj.portsIn = [];
        opObj.portsOut = [];

        for (let i = 0; i < this.portsIn.length; i++)
        {
            const s = this.portsIn[i].getSerialized();
            if (s) opObj.portsIn.push(s);
        }

        for (let i = 0; i < this.portsOut.length; i++)
        {
            const s = this.portsOut[i].getSerialized();
            if (s) opObj.portsOut.push(s);
        }

        if (opObj.portsIn.length == 0) delete opObj.portsIn;
        if (opObj.portsOut.length == 0) delete opObj.portsOut;
        cleanJson(opObj);

        return opObj;
    };

    Op.prototype.getFirstOutPortByType = function (type)
    {
        for (const ipo in this.portsOut) if (this.portsOut[ipo].type == type) return this.portsOut[ipo];
    };

    Op.prototype.getFirstInPortByType = function (type)
    {
        for (const ipo in this.portsIn) if (this.portsIn[ipo].type == type) return this.portsIn[ipo];
    };

    /**
     * return port by the name portName
     * @function getPort
     * @instance
     * @memberof Op
     * @param {String} portName
     * @return {Port}
     */
    Op.prototype.getPort = Op.prototype.getPortByName = function (name, lowerCase)
    {
        if (lowerCase)
        {
            for (let ipi = 0; ipi < this.portsIn.length; ipi++)
                if (this.portsIn[ipi].getName().toLowerCase() == name || this.portsIn[ipi].id.toLowerCase() == name)
                    return this.portsIn[ipi];

            for (let ipo = 0; ipo < this.portsOut.length; ipo++)
                if (this.portsOut[ipo].getName().toLowerCase() == name || this.portsOut[ipo].id.toLowerCase() == name)
                    return this.portsOut[ipo];
        }
        else
        {
            for (let ipi = 0; ipi < this.portsIn.length; ipi++)
                if (this.portsIn[ipi].getName() == name || this.portsIn[ipi].id == name)
                    return this.portsIn[ipi];

            for (let ipo = 0; ipo < this.portsOut.length; ipo++)
                if (this.portsOut[ipo].getName() == name || this.portsOut[ipo].id == name)
                    return this.portsOut[ipo];
        }
    };


    /**
     * return port by the name id
     * @function getPortById
     * @instance
     * @memberof Op
     * @param {String} id
     * @return {Port}
     */
    Op.prototype.getPortById = function (id)
    {
        for (let ipi = 0; ipi < this.portsIn.length; ipi++) if (this.portsIn[ipi].id == id) return this.portsIn[ipi];
        for (let ipo = 0; ipo < this.portsOut.length; ipo++) if (this.portsOut[ipo].id == id) return this.portsOut[ipo];
    };

    Op.prototype.updateAnims = function ()
    {
        if (this._hasAnimPort)
            for (let i = 0; i < this.portsIn.length; i++) this.portsIn[i].updateAnim();
    };

    Op.prototype.log = function ()
    {
        this._log.log(...arguments);
    };

    Op.prototype.error = Op.prototype.logError = function ()
    {
        // if (!this)
        // {
        //     this._log.error("no this...!!!");
        //     debugger;
        //     return;
        // }
        // const initiator = "op " + this.objName;
        // if (CABLES.UI && !CABLES.UI.logFilter.filterLog({ "initiator": initiator, "opInstId": this.id, "level": 2 }, ...arguments)) return;

        // // if (this.patch.silent) return;
        // const args = ["[op " + CABLES.getShortOpName(this.objName) + "]"];
        // args.push.apply(args, arguments);
        // Function.prototype.apply.apply(this._log.error, [console, args]);// eslint-disable-line
        // if (window.gui) window.gui.emitEvent("opLogEvent", this.objName, "error", arguments);
        this._log.error(...arguments);
    };

    Op.prototype.warn = Op.prototype.logWarn = function ()
    {
        this._log.warn(...arguments);

        // const initiator = "op " + this.objName;
        // if (CABLES.UI && !CABLES.UI.logFilter.filterLog({ "initiator": initiator, "opInstId": this.id, "level": 1 }, ...arguments)) return;

        // // if (this.patch.silent) return;
        // const args = ["[op " + CABLES.getShortOpName(this.objName) + "]"];
        // args.push.apply(args, arguments);
        // Function.prototype.apply.apply(this._log.warn, [console, args]);// eslint-disable-line
    };

    Op.prototype.verbose = Op.prototype.logVerbose = function ()
    {
        // const initiator = "op " + CABLES.getShortOpName(this.objName);
        // if (CABLES.UI && !CABLES.UI.logFilter.filterLog({ "initiator": initiator, "opInstId": this.id, "level": 0 }, ...arguments)) return;

        // if (!CABLES.UI && this.patch.silent) return;

        // const args = ["[" + initiator + "]"];
        // args.push.apply(args, arguments);
        // Function.prototype.apply.apply(this._log.info, [console, args]);// eslint-disable-line
        this._log.verbose(...arguments);
    };


    Op.prototype.profile = function (enable)
    {
        for (let ipi = 0; ipi < this.portsIn.length; ipi++)
        {
            this.portsIn[ipi]._onTriggered = this.portsIn[ipi]._onTriggeredProfiling;
            this.portsIn[ipi].set = this.portsIn[ipi]._onSetProfiling;
        }
    };

    Op.prototype.findParent = function (objName)
    {
        for (let ipi = 0; ipi < this.portsIn.length; ipi++)
        {
            if (this.portsIn[ipi].isLinked())
            {
                if (this.portsIn[ipi].links[0].portOut.parent.objName == objName)
                    return this.portsIn[ipi].links[0].portOut.parent;

                let found = null;
                found = this.portsIn[ipi].links[0].portOut.parent.findParent(objName);
                if (found) return found;
            }
        }
        return null;
    };


    // todo: check instancing stuff?
    Op.prototype.cleanUp = function ()
    {
        if (this._instances)
        {
            for (let i = 0; i < this._instances.length; i++)
            {
                if (this._instances[i].onDelete) this._instances[i].onDelete();
            }


            this._instances.length = 0;
        }
        for (let i = 0; i < this.portsIn.length; i++)
        {
            this.portsIn[i].setAnimated(false);
        }

        if (this.onAnimFrame) this.patch.removeOnAnimFrame(this);
    };

    // todo: check instancing stuff?
    Op.prototype.instanced = function (triggerPort)
    {
        this._log.log("instanced", this.patch.instancing.numCycles());
        if (this.patch.instancing.numCycles() === 0) return false;


        let i = 0;
        let ipi = 0;
        if (!this._instances || this._instances.length != this.patch.instancing.numCycles())
        {
            if (!this._instances) this._instances = [];
            this._.log("creating instances of ", this.objName, this.patch.instancing.numCycles(), this._instances.length);
            this._instances.length = this.patch.instancing.numCycles();

            for (i = 0; i < this._instances.length; i++)
            {
                this._instances[i] = this.patch.createOp(this.objName, true);
                this._instances[i].instanced = function ()
                {
                    return false;
                };
                this._instances[i].uiAttr(this.uiAttribs);

                for (let ipo = 0; ipo < this.portsOut.length; ipo++)
                {
                    if (this.portsOut[ipo].type == CONSTANTS.OP.OP_PORT_TYPE_FUNCTION)
                    {
                        this._instances[i].getPortByName(this.portsOut[ipo].name).trigger = this.portsOut[ipo].trigger.bind(this.portsOut[ipo]);
                    }
                }
            }

            for (ipi = 0; ipi < this.portsIn.length; ipi++)
            {
                this.portsIn[ipi].onChange = null;
                this.portsIn[ipi].onValueChanged = null;
            }
        }

        const theTriggerPort = null;
        for (ipi = 0; ipi < this.portsIn.length; ipi++)
        {
            if (
                this.portsIn[ipi].type == CONSTANTS.OP.OP_PORT_TYPE_VALUE ||
                this.portsIn[ipi].type == CONSTANTS.OP.OP_PORT_TYPE_ARRAY
            )
            {
                this._instances[this.patch.instancing.index()].portsIn[ipi].set(this.portsIn[ipi].get());
            }
            if (this.portsIn[ipi].type == CONSTANTS.OP.OP_PORT_TYPE_FUNCTION)
            {
                // if(this._instances[ this.patch.instancing.index() ].portsIn[ipi].name==triggerPort.name)
                // theTriggerPort=this._instances[ this.patch.instancing.index() ].portsIn[ipi];
            }
        }

        if (theTriggerPort) theTriggerPort.onTriggered();

        for (ipi = 0; ipi < this.portsOut.length; ipi++)
        {
            if (this.portsOut[ipi].type == CONSTANTS.OP.OP_PORT_TYPE_VALUE)
            {
                this.portsOut[ipi].set(this._instances[this.patch.instancing.index()].portsOut[ipi].get());
            }
        }

        return true;
    };

    // todo: check instancing stuff?
    Op.prototype.initInstancable = function ()
    {
        //         if(this.isInstanced)
        //         {
        //             this._log.log('cancel instancing');
        //             return;
        //         }
        //         this._instances=[];
        //         for(var ipi=0;ipi<this.portsIn.length;ipi++)
        //         {
        //             if(this.portsIn[ipi].type==CONSTANTS.OP.OP_PORT_TYPE_VALUE)
        //             {
        //
        //             }
        //             if(this.portsIn[ipi].type==CONSTANTS.OP.OP_PORT_TYPE_FUNCTION)
        //             {
        //                 // var piIndex=ipi;
        //                 this.portsIn[ipi].onTriggered=function(piIndex)
        //                 {
        //
        //                     var i=0;
        // // this._log.log('trigger',this._instances.length);
        //
        //                 }.bind(this,ipi );
        //
        //             }
        // };
        // this._instances=null;
    };

    Op.prototype.setValues = function (obj)
    {
        for (const i in obj)
        {
            const port = this.getPortByName(i);
            if (port) port.set(obj[i]);
            else this._log.warn("op.setValues: port not found:", i);
        }
    };

    /**
     * return true if op has this error message id
     * @function hasUiError
     * @instance
     * @memberof Op
     * @param {id} error id
     * @returns {Boolean} - has id
     */
    Op.prototype.hasUiError = function (id)
    {
        return this._uiErrors.hasOwnProperty(id) && this._uiErrors[id];
    };

    /**
     * show op error message - set message to null to remove error message
     * @function setUiError
     * @instance
     * @memberof Op
     * @param {id} error id
     * @param {txt} text message
     * @param {level} level
     */
    Op.prototype.setUiError = function (id, txt, level)
    {
        // overwritten in ui: core_extend_op
    };

    // todo: remove
    Op.prototype.setError = function (id, txt)
    {
        this._log.warn("old error message op.error() - use op.setUiError()");
    };


    /**
     * enable/disable op
     * @function
     * @instance
     * @memberof Op
     * @param {boolean}
     */
    Op.prototype.setEnabled = function (b)
    {
        this.enabled = b;
        this.emitEvent("onEnabledChange", b);
    };

    /**
     * organize ports into a group
     * @function
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {Array} ports
     */
    Op.prototype.setPortGroup = function (name, ports)
    {
        for (let i = 0; i < ports.length; i++)
        {
            if (ports[i])
                if (ports[i].setUiAttribs) ports[i].setUiAttribs({ "group": name });
                else
                {
                    this._log.error("setPortGroup: invalid port!");
                }
        }
    };

    /**
     * visually indicate ports that they are coordinate inputs
     * @function
     * @instance
     * @memberof Op
     * @param {Port} portX
     * @param {Port} portY
     * @param {Port} portZ
     */
    Op.prototype.setUiAxisPorts = function (px, py, pz)
    {
        if (px) px.setUiAttribs({ "axis": "X" });
        if (py) py.setUiAttribs({ "axis": "Y" });
        if (pz) pz.setUiAttribs({ "axis": "Z" });
    };

    /**
     * remove port from op
     * @function removePort
     * @instance
     * @memberof Op
     * @param {Port} port to remove
     */
    Op.prototype.removePort = function (port)
    {
        for (let ipi = 0; ipi < this.portsIn.length; ipi++)
        {
            if (this.portsIn[ipi] == port)
            {
                this.portsIn.splice(ipi, 1);
                this.emitEvent("onUiAttribsChange", {});
                this.emitEvent("onPortRemoved", {});
                return;
            }
        }
        for (let ipi = 0; ipi < this.portsOut.length; ipi++)
        {
            if (this.portsOut[ipi] == port)
            {
                this.portsOut.splice(ipi, 1);
                this.emitEvent("onUiAttribsChange", {});
                this.emitEvent("onPortRemoved", {});
                return;
            }
        }
    };

    Op.prototype._checkLinksNeededToWork = function () {};

    /**
     * show a warning of this op is not a child of parentOpName
     * @function
     * @instance
     * @memberof Op
     * @param {String} parentOpName
     */
    Op.prototype.toWorkNeedsParent = function (parentOpName)
    {
        if (!this.patch.isEditorMode()) return;

        this._linkTimeRules.needsParentOp = parentOpName;
    };

    // /**
    //  * show a warning of this op is a child of parentOpName
    //  * @function
    //  * @instance
    //  * @memberof Op
    //  * @param {String} parentOpName
    //  */
    Op.prototype.toWorkShouldNotBeChild = function (parentOpName, type)
    {
        if (!this.patch.isEditorMode()) return;
        this._linkTimeRules.forbiddenParent = parentOpName;
        if (type != undefined) this._linkTimeRules.forbiddenParentType = type;
    };


    /**
     * show a small X to indicate op is not working when given ports are not linked
     * @function
     * @instance
     * @memberof Op
     * @param {Port} port1
     * @param {Port} port2
     * @param {Port} port3
     */
    Op.prototype.toWorkPortsNeedToBeLinked = function ()
    {
        if (!this.patch.isEditorMode()) return;
        for (let i = 0; i < arguments.length; i++)
            if (this._linkTimeRules.needsLinkedToWork.indexOf(arguments[i]) == -1) this._linkTimeRules.needsLinkedToWork.push(arguments[i]);
    };
    Op.prototype.toWorkPortsNeedToBeLinkedReset = function ()
    {
        if (!this.patch.isEditorMode()) return;
        this._linkTimeRules.needsLinkedToWork.length = 0;
        if (this.checkLinkTimeWarnings) this.checkLinkTimeWarnings();
    };

    Op.prototype.initVarPorts = function ()
    {
        for (let i = 0; i < this.portsIn.length; i++)
        {
            if (this.portsIn[i].getVariableName()) this.portsIn[i].setVariable(this.portsIn[i].getVariableName());
        }
    };

    /**
     * refresh op parameters, if current op is selected
     * @function
     * @instance
     * @memberof Op
     */
    Op.prototype.refreshParams = function ()
    {
        if (this.patch && this.patch.isEditorMode() && this.isCurrentUiOp())
        {
            gui.opParams.show(this);
        }
    };

    /**
     * Returns true if op is selected and parameter are shown in the editor, can only return true if in editor/ui
     * @function isCurrentUiOp
     * @instance
     * @memberof Op
     * @returns {Boolean} - is current ui op
     */
    Op.prototype.isCurrentUiOp = function ()
    {
        if (this.patch.isEditorMode()) return gui.patchView.isCurrentOp(this);
    };

    /**
     * Implement to render 2d canvas based graphics from in an op
     * @function renderVizLayer
     * @instance
     * @memberof Op
     * @param {ctx} context of canvas 2d
     * @param {Object} layer info
     * @param {number} layer.x x position on canvas
     * @param {number} layer.y y position on canvas
     * @param {number} layer.width width of canvas
     * @param {number} layer.height height of canvas
     * @param {number} layer.scale current scaling of patchfield view
     */
    Op.prototype.renderVizLayer = null; // optionaly defined in op instance
}



;// CONCATENATED MODULE: ./src/core/loadingstatus.js




/**
 * LoadingStatus class, manages asynchronous loading jobs
 *
 * @namespace external:CABLES#LoadingStatus
 * @hideconstructor
 * @class
 * @param patch
 */
const LoadingStatus = function (patch)
{
    EventTarget.apply(this);

    this._log = new Logger("LoadingStatus");
    this._loadingAssets = {};
    this._cbFinished = [];
    this._assetTasks = [];
    this._percent = 0;
    this._count = 0;
    this._countFinished = 0;
    this._order = 0;
    this._startTime = 0;
    this._patch = patch;
    this._wasFinishedPrinted = false;
    this._loadingAssetTaskCb = false;
};

LoadingStatus.prototype.setOnFinishedLoading = function (cb)
{
    this._cbFinished.push(cb);
};

LoadingStatus.prototype.getNumAssets = function ()
{
    return this._countFinished;
};

LoadingStatus.prototype.getProgress = function ()
{
    return this._percent;
};

LoadingStatus.prototype.checkStatus = function ()
{
    this._countFinished = 0;
    this._count = 0;

    for (const i in this._loadingAssets)
    {
        this._count++;
        if (!this._loadingAssets[i].finished)
        {
            this._countFinished++;
        }
    }

    this._percent = (this._count - this._countFinished) / this._count;

    if (this._countFinished === 0)
    {
        for (let j = 0; j < this._cbFinished.length; j++)
        {
            if (this._cbFinished[j])
            {
                const cb = this._cbFinished[j];
                setTimeout(() => { cb(this._patch); this.emitEvent("finishedAll"); }, 100);
            }
        }

        if (!this._wasFinishedPrinted)
        {
            this._wasFinishedPrinted = true;
            this.print();
        }
        this.emitEvent("finishedAll");
    }
};

LoadingStatus.prototype.getList = function ()
{
    let arr = [];
    for (const i in this._loadingAssets)
    {
        arr.push(this._loadingAssets[i]);
    }

    return arr;
};


LoadingStatus.prototype.getListJobs = function ()
{
    let arr = [];
    for (const i in this._loadingAssets)
    {
        if (!this._loadingAssets[i].finished)arr.push(this._loadingAssets[i].name);
    }

    return arr;
};

LoadingStatus.prototype.print = function ()
{
    if (this._patch.config.silent) return;

    const rows = [];

    for (const i in this._loadingAssets)
    {
        rows.push([
            this._loadingAssets[i].order,
            this._loadingAssets[i].type,
            this._loadingAssets[i].name,
            (this._loadingAssets[i].timeEnd - this._loadingAssets[i].timeStart) / 1000 + "s",
        ]);
    }

    this._log.groupCollapsed("finished loading " + this._order + " assets in " + (Date.now() - this._startTime) / 1000 + "s");
    this._log.table(rows);
    this._log.groupEnd();
};

LoadingStatus.prototype.finished = function (id)
{
    const l = this._loadingAssets[id];
    if (l)
    {
        if (l.finished) this._log.warn("loading job was already finished", l);

        if (l.op) l.op.setUiAttribs({ "loading": false });
        l.finished = true;
        l.timeEnd = Date.now();
    }

    this.checkStatus();
    this.emitEvent("finishedTask");
    return null;
};

LoadingStatus.prototype._startAssetTasks = function ()
{
    for (let i = 0; i < this._assetTasks.length; i++) this._assetTasks[i]();
    this._assetTasks.length = 0;
};

/**
 * delay an asset loading task, mainly to wait for ui to be finished loading and showing, and only then start loading assets
 * @function addAssetLoadingTask
 * @instance
 * @memberof LoadingStatus
 * @param {function} cb callback
 */
LoadingStatus.prototype.addAssetLoadingTask = function (cb)
{
    if (this._patch.isEditorMode() && !CABLES.UI.loaded)
    {
        this._assetTasks.push(cb);

        if (!this._loadingAssetTaskCb)window.gui.addEventListener("uiloaded", this._startAssetTasks.bind(this));
        this._loadingAssetTaskCb = true;
    }
    else
    {
        cb();
    }
    this.emitEvent("addAssetTask");
};

LoadingStatus.prototype.existByName = function (name)
{
    for (let i in this._loadingAssets)
    {
        if (this._loadingAssets[i].name == name && !this._loadingAssets[i].finished)
            return true;
    }
};

LoadingStatus.prototype.start = function (type, name, op)
{
    if (this._startTime == 0) this._startTime = Date.now();
    const id = generateUUID();

    name = name || "unknown";
    if (name.length > 100)name = name.substring(0, 100);


    if (op)op.setUiAttribs({ "loading": true });

    this._loadingAssets[id] = {
        "id": id,
        "op": op,
        "type": type,
        "name": name,
        "finished": false,
        "timeStart": Date.now(),
        "order": this._order,
    };
    this._order++;

    this.emitEvent("startTask");

    return id;
};



;// CONCATENATED MODULE: ./src/core/instancing.js
// todo: needs to be removed...

const Instancing = function ()
{
    this._loops = [];
    this._indizes = [];
    this._index = 0;
};

Instancing.prototype.pushLoop = function (maxNum)
{
    this._loops.push(Math.abs(Math.floor(maxNum)));
    this._indizes.push(this._index);
};

Instancing.prototype.popLoop = function ()
{
    this._loops.pop();
    // this._index--;
    this._index = this._indizes.pop();
    if (this._loops.length === 0) this._index = 0;
};

Instancing.prototype.numLoops = function ()
{
    return this._loops.length;
};

Instancing.prototype.numCycles = function ()
{
    if (this._loops.length === 0) return 0;
    let num = this._loops[0];
    for (let i = 1; i < this._loops.length; i++) num *= this._loops[i];

    return num;
};

Instancing.prototype.inLoop = function ()
{
    return this._loops.length > 0;
};

Instancing.prototype.increment = function ()
{
    this._index++;
};

Instancing.prototype.index = function ()
{
    return this._index;
};



;// CONCATENATED MODULE: ./src/core/timer.js


/** @namespace CABLES */

const internalNow = function ()
{
    return window.performance.now();
};

/**
 * current time in milliseconds
 * @memberof CABLES
 * @function now
 * @static
 */
const now = function ()
{
    return internalNow();
};

// ----------------------------

/**
 * Measuring time
 * @namespace external:CABLES#Timer
 * @hideconstructor
 * @class
 */
const Timer = function ()
{
    EventTarget.apply(this);

    this._timeStart = internalNow();
    this._timeOffset = 0;

    this._currentTime = 0;
    this._lastTime = 0;
    this._paused = true;
    this._delay = 0;
    this.overwriteTime = -1;
};


Timer.prototype._internalNow = function ()
{
    if (this._ts) return this._ts;
    return internalNow();
};

Timer.prototype._getTime = function ()
{
    this._lastTime = (this._internalNow() - this._timeStart) / 1000;
    return this._lastTime + this._timeOffset;
};

Timer.prototype.setDelay = function (d)
{
    this._delay = d;
    this.emitEvent("timeChange");
};

/**
 * @function
 * @memberof Timer
 * @instance
 * @description returns true if timer is playing
 * @return {Boolean} value
 */
Timer.prototype.isPlaying = function ()
{
    return !this._paused;
};

/**
 * @function
 * @memberof Timer
 * @instance
 * @param ts
 * @description update timer
 * @return {Number} time
 */
Timer.prototype.update = function (ts)
{
    if (ts) this._ts = ts;
    if (this._paused) return;
    this._currentTime = this._getTime();

    return this._currentTime;
};

/**
 * @function
 * @memberof Timer
 * @instance
 * @return {Number} time in milliseconds
 */
Timer.prototype.getMillis = function ()
{
    return this.get() * 1000;
};

/**
 * @function
 * @memberof Timer
 * @instance
 * @return {Number} value time in seconds
 */
Timer.prototype.get = Timer.prototype.getTime = function ()
{
    if (this.overwriteTime >= 0) return this.overwriteTime - this._delay;
    return this._currentTime - this._delay;
};

/**
 * toggle between play/pause state
 * @function
 * @memberof Timer
 * @instance
 */
Timer.prototype.togglePlay = function ()
{
    if (this._paused) this.play();
    else this.pause();
};

/**
 * set current time
 * @function
 * @memberof Timer
 * @instance
 * @param {Number} t
 */
Timer.prototype.setTime = function (t)
{
    if (isNaN(t) || t < 0) t = 0;
    this._timeStart = this._internalNow();
    this._timeOffset = t;
    this._currentTime = t;
    this.emitEvent("timeChange");
};

Timer.prototype.setOffset = function (val)
{
    if (this._currentTime + val < 0)
    {
        this._timeStart = this._internalNow();
        this._timeOffset = 0;
        this._currentTime = 0;
    }
    else
    {
        this._timeOffset += val;
        this._currentTime = this._lastTime + this._timeOffset;
    }
    this.emitEvent("timeChange");
};

/**
 * (re)starts the timer
 * @function
 * @memberof Timer
 * @instance
 */
Timer.prototype.play = function ()
{
    this._timeStart = this._internalNow();
    this._paused = false;
    this.emitEvent("playPause");
};

/**
 * pauses the timer
 * @function
 * @memberof Timer
 * @instance
 */
Timer.prototype.pause = function ()
{
    this._timeOffset = this._currentTime;
    this._paused = true;
    this.emitEvent("playPause");
};



;// CONCATENATED MODULE: ./src/core/core_profiler.js


class Profiler
{
    constructor(patch)
    {
        this.startFrame = patch.getFrameNum();
        this.items = {};
        this.currentId = null;
        this.currentStart = 0;
        this._patch = patch;
    }

    getItems()
    {
        return this.items;
    }

    clear()
    {
        if (this.paused) return;
        this.items = {};
    }

    togglePause()
    {
        this.paused = !this.paused;
        if (!this.paused)
        {
            this.items = {};
            this.currentStart = performance.now();
        }
    }

    add(type, object)
    {
        if (this.paused) return;

        if (this.currentId !== null)
        {
            if (!object || object.id != this.currentId)
            {
                if (this.items[this.currentId])
                {
                    this.items[this.currentId].timeUsed += performance.now() - this.currentStart;

                    if (!this.items[this.currentId].peakTime || now() - this.items[this.currentId].peakTime > 5000)
                    {
                        this.items[this.currentId].peak = 0;
                        this.items[this.currentId].peakTime = now();
                    }
                    this.items[this.currentId].peak = Math.max(this.items[this.currentId].peak, performance.now() - this.currentStart);
                }
            }
        }

        if (object !== null)
        {
            if (!this.items[object.id])
            {
                this.items[object.id] = {
                    "numTriggers": 0,
                    "timeUsed": 0,
                };
            }

            if (this.items[object.id].lastFrame != this._patch.getFrameNum()) this.items[object.id].numTriggers = 0;

            this.items[object.id].lastFrame = this._patch.getFrameNum();
            this.items[object.id].numTriggers++;
            this.items[object.id].opid = object.op.id;
            this.items[object.id].title = object.op.name + "." + object.name;
            this.items[object.id].subPatch = object.op.uiAttribs.subPatch;

            this.currentId = object.id;
            this.currentStart = performance.now();
        }
        else
        {
            this.currentId = null;
        }
    }

    print()
    {
        console.log("--------");
        for (const i in this.items)
        {
            console.log(this.items[i].title + ": " + this.items[i].numTriggers + " / " + this.items[i].timeUsed);
        }
    }
}



;// CONCATENATED MODULE: ./src/core/cgl/constants.js
const SHADER = {
    // default attributes
    "SHADERVAR_VERTEX_POSITION": "vPosition",
    "SHADERVAR_VERTEX_NUMBER": "attrVertIndex",
    "SHADERVAR_VERTEX_NORMAL": "attrVertNormal",
    "SHADERVAR_VERTEX_TEXCOORD": "attrTexCoord",
    "SHADERVAR_INSTANCE_MMATRIX": "instMat",
    "SHADERVAR_VERTEX_COLOR": "attrVertColor",

    "SHADERVAR_INSTANCE_INDEX": "instanceIndex",

    // default uniforms
    "SHADERVAR_UNI_PROJMAT": "projMatrix",
    "SHADERVAR_UNI_VIEWMAT": "viewMatrix",
    "SHADERVAR_UNI_MODELMAT": "modelMatrix",
    "SHADERVAR_UNI_NORMALMAT": "normalMatrix",
    "SHADERVAR_UNI_INVVIEWMAT": "inverseViewMatrix",
    "SHADERVAR_UNI_INVPROJMAT": "invProjMatrix",
    "SHADERVAR_UNI_MATERIALID": "materialId",
    "SHADERVAR_UNI_OBJECTID": "objectId",

    "SHADERVAR_UNI_VIEWPOS": "camPos",
};


const BLEND_MODES = {
    "BLEND_NONE": 0,
    "BLEND_NORMAL": 1,
    "BLEND_ADD": 2,
    "BLEND_SUB": 3,
    "BLEND_MUL": 4,
};





const RAD2DEG = 180.0 / Math.PI;
const DEG2RAD = Math.PI / 180.0;

const constants_CONSTANTS = {
    "MATH": {
        "DEG2RAD": DEG2RAD,
        "RAD2DEG": RAD2DEG,
    },
    "SHADER": SHADER,
    "BLEND_MODES": BLEND_MODES,
};




;// CONCATENATED MODULE: ./src/core/cg/cg_uniform.js



class CgUniform
{
    constructor(__shader, __type, __name, _value, _port2, _port3, _port4, _structUniformName, _structName, _propertyName)
    {
        this._log = new Logger("cg_uniform");
        this._type = __type;
        this._name = __name;
        this._shader = __shader;
        this._value = 0.00001;
        this._oldValue = null;
        this._port = null;
        this._structName = _structName;
        this._structUniformName = _structUniformName;
        this._propertyName = _propertyName;

        this._shader._addUniform(this);
        this.needsUpdate = true;
        this.shaderType = null;
        this.comment = null;

        if (__type == "f")
        {
            this.set = this.setValue = this.setValueF.bind(this);
            this.updateValue = this.updateValueF.bind(this);
        }
        else if (__type == "f[]")
        {
            this.set = this.setValue = this.setValueArrayF.bind(this);
            this.updateValue = this.updateValueArrayF.bind(this);
        }
        else if (__type == "2f[]")
        {
            this.set = this.setValue = this.setValueArray2F.bind(this);
            this.updateValue = this.updateValueArray2F.bind(this);
        }
        else if (__type == "3f[]")
        {
            this.set = this.setValue = this.setValueArray3F.bind(this);
            this.updateValue = this.updateValueArray3F.bind(this);
        }
        else if (__type == "4f[]")
        {
            this.set = this.setValue = this.setValueArray4F.bind(this);
            this.updateValue = this.updateValueArray4F.bind(this);
        }
        else if (__type == "i")
        {
            this.set = this.setValue = this.setValueI.bind(this);
            this.updateValue = this.updateValueI.bind(this);
        }
        else if (__type == "2i")
        {
            this.set = this.setValue = this.setValue2I.bind(this);
            this.updateValue = this.updateValue2I.bind(this);
        }
        else if (__type == "3i")
        {
            this.set = this.setValue = this.setValue3I.bind(this);
            this.updateValue = this.updateValue3I.bind(this);
        }
        else if (__type == "4i")
        {
            this.set = this.setValue = this.setValue4I.bind(this);
            this.updateValue = this.updateValue4I.bind(this);
        }
        else if (__type == "b")
        {
            this.set = this.setValue = this.setValueBool.bind(this);
            this.updateValue = this.updateValueBool.bind(this);
        }
        else if (__type == "4f")
        {
            this.set = this.setValue = this.setValue4F.bind(this);
            this.updateValue = this.updateValue4F.bind(this);
        }
        else if (__type == "3f")
        {
            this.set = this.setValue = this.setValue3F.bind(this);
            this.updateValue = this.updateValue3F.bind(this);
        }
        else if (__type == "2f")
        {
            this.set = this.setValue = this.setValue2F.bind(this);
            this.updateValue = this.updateValue2F.bind(this);
        }
        else if (__type == "t")
        {
            this.set = this.setValue = this.setValueT.bind(this);
            this.updateValue = this.updateValueT.bind(this);
        }
        else if (__type == "tc")
        {
            this.set = this.setValue = this.setValueT.bind(this);
            this.updateValue = this.updateValueT.bind(this);
        }
        else if (__type == "t[]")
        {
            this.set = this.setValue = this.setValueArrayT.bind(this);
            this.updateValue = this.updateValueArrayT.bind(this);
        }
        else if (__type == "m4" || __type == "m4[]")
        {
            this.set = this.setValue = this.setValueM4.bind(this);
            this.updateValue = this.updateValueM4.bind(this);
        }
        else throw new Error("Unknown uniform type");

        if (typeof _value == "object" && _value instanceof Port)
        {
            this._port = _value;
            this._value = this._port.get();


            if (_port2 && _port3 && _port4)
            {
                if (!(_port2 instanceof Port) || !(_port3 instanceof Port) || !(_port4 instanceof Port))
                {
                    this._log.error("[cgl_uniform] mixed port/value parameter for vec4 ", this._name);
                }

                this._value = [0, 0, 0, 0];
                this._port2 = _port2;
                this._port3 = _port3;
                this._port4 = _port4;

                this._port.on("change", this.updateFromPort4f.bind(this));
                this._port2.on("change", this.updateFromPort4f.bind(this));
                this._port3.on("change", this.updateFromPort4f.bind(this));
                this._port4.on("change", this.updateFromPort4f.bind(this));

                // this._port.onChange = this._port2.onChange = this._port3.onChange = this._port4.onChange = this.updateFromPort4f.bind(this);
                this.updateFromPort4f();
            }
            else if (_port2 && _port3)
            {
                if (!(_port2 instanceof Port) || !(_port3 instanceof Port))
                {
                    this._log.error("[cgl_uniform] mixed port/value parameter for vec4 ", this._name);
                }

                this._value = [0, 0, 0];
                this._port2 = _port2;
                this._port3 = _port3;
                // this._port.onChange = this._port2.onChange = this._port3.onChange = this.updateFromPort3f.bind(this);
                this._port.on("change", this.updateFromPort3f.bind(this));
                this._port2.on("change", this.updateFromPort3f.bind(this));
                this._port3.on("change", this.updateFromPort3f.bind(this));

                this.updateFromPort3f();
            }
            else if (_port2)
            {
                if (!(_port2 instanceof Port))
                {
                    this._log.error("[cgl_uniform] mixed port/value parameter for vec4 ", this._name);
                }

                this._value = [0, 0];
                this._port2 = _port2;
                // this._port.onChange = this._port2.onChange = this.updateFromPort2f.bind(this);
                this._port.on("change", this.updateFromPort2f.bind(this));
                this._port2.on("change", this.updateFromPort2f.bind(this));

                this.updateFromPort2f();
            }
            else
            {
                // this._port.on = this.updateFromPort.bind(this);
                this._port.on("change", this.updateFromPort.bind(this));
            }
        }
        else this._value = _value;

        this.setValue(this._value);
        this.needsUpdate = true;
    }


    getType()
    {
        return this._type;
    }

    getName()
    {
        return this._name;
    }

    getValue()
    {
        return this._value;
    }

    getShaderType()
    {
        return this.shaderType;
    }

    isStructMember()
    {
        return !!this._structName;
    }


    updateFromPort4f()
    {
        this._value[0] = this._port.get();
        this._value[1] = this._port2.get();
        this._value[2] = this._port3.get();
        this._value[3] = this._port4.get();
        this.setValue(this._value);
    }

    updateFromPort3f()
    {
        this._value[0] = this._port.get();
        this._value[1] = this._port2.get();
        this._value[2] = this._port3.get();
        this.setValue(this._value);
    }

    updateFromPort2f()
    {
        this._value[0] = this._port.get();
        this._value[1] = this._port2.get();
        this.setValue(this._value);
    }

    updateFromPort()
    {
        this.setValue(this._port.get());
    }
}

/* harmony default export */ const cg_uniform = (CgUniform);

;// CONCATENATED MODULE: ./src/core/cgl/cgl_shader_uniform.js




/**
 * Shader uniforms
 *
 * types:
 * <pre>
 * f    - float
 * 2f   - vec2
 * 3f   - vec3
 * 4f   - vec4
 * i    - integer
 * t    - texture
 * m4   - mat4, 4x4 float matrix
 * f[]  - array of floats
 * 2f[] - array of float vec2
 * 3f[] - array of float vec3
 * 4f[] - array of float vec4
 * </pre>
 *
 * @namespace external:CGL
 * @class
 * @param {Shader} shader
 * @param {String} [type=f]
 * @param {String} name
 * @param {Number|Port} value  can be a Number,Matrix or Port
 * @example
 * // bind float uniform called myfloat and initialize with value 1.0
 * const unir=new CGL.Uniform(shader,'f','myfloat',1.0);
 * unir.setValue(1.0);
 *
 * // bind float uniform called myfloat and automatically set it to input port value
 * const myPort=op.inFloat("input");
 * const pv=new CGL.Uniform(shader,'f','myfloat',myPort);
 *
 */


// export const Uniform(__shader, __type, __name, _value, _port2, _port3, _port4, _structUniformName, _structName, _propertyName)

class Uniform extends cg_uniform
{
    constructor(__shader, __type, __name, _value, _port2, _port3, _port4, _structUniformName, _structName, _propertyName)
    {
        super(__shader, __type, __name, _value, _port2, _port3, _port4, _structUniformName, _structName, _propertyName);
        this._loc = -1;
        this._cgl = __shader._cgl;
    }

    get name()
    {
        return this._name;
    }

    copy(newShader)
    {
        const uni = new Uniform(newShader, this._type, this._name, this._value, this._port2, this._port3, this._port4, this._structUniformName, this._structName, this._propertyName);
        uni.shaderType = this.shaderType;
        return uni;
    }

    /**
     * returns type as glsl type string. e.g. 'f' returns 'float'
     * @function getGlslTypeString
     * @memberof Uniform
     * @instance
     * @return {string} type as string
     */
    getGlslTypeString()
    {
        return Uniform.glslTypeString(this._type);
    }

    _isValidLoc()
    {
        return this._loc != -1;// && this._loc != null;
    }

    resetLoc()
    {
        this._loc = -1;
        this.needsUpdate = true;
    }

    bindTextures() {}

    getLoc()
    {
        return this._loc;
    }

    updateFromPort4f()
    {
        this._value[0] = this._port.get();
        this._value[1] = this._port2.get();
        this._value[2] = this._port3.get();
        this._value[3] = this._port4.get();
        this.setValue(this._value);
    }

    updateFromPort3f()
    {
        this._value[0] = this._port.get();
        this._value[1] = this._port2.get();
        this._value[2] = this._port3.get();
        this.setValue(this._value);
    }

    updateFromPort2f()
    {
        this._value[0] = this._port.get();
        this._value[1] = this._port2.get();
        this.setValue(this._value);
    }

    updateFromPort()
    {
        this.setValue(this._port.get());
    }

    updateValueF()
    {
        if (!this._isValidLoc()) this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
        else this.needsUpdate = false;

        this._shader.getCgl().gl.uniform1f(this._loc, this._value);
        this._cgl.profileData.profileUniformCount++;
    }

    setValueF(v)
    {
        if (v != this._value)
        {
            this.needsUpdate = true;
            this._value = v;
        }
    }

    updateValueI()
    {
        if (!this._isValidLoc()) this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
        else this.needsUpdate = false;

        this._shader.getCgl().gl.uniform1i(this._loc, this._value);
        this._cgl.profileData.profileUniformCount++;
    }

    updateValue2I()
    {
        if (!this._value) return;

        if (!this._isValidLoc())
        {
            this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
            this._cgl.profileData.profileShaderGetUniform++;
            this._cgl.profileData.profileShaderGetUniformName = this._name;
        }

        this._shader.getCgl().gl.uniform2i(this._loc, this._value[0], this._value[1]);

        this.needsUpdate = false;
        this._cgl.profileData.profileUniformCount++;
    }

    updateValue3I()
    {
        if (!this._value) return;
        if (!this._isValidLoc())
        {
            this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
            this._cgl.profileData.profileShaderGetUniform++;
            this._cgl.profileData.profileShaderGetUniformName = this._name;
        }

        this._shader.getCgl().gl.uniform3i(this._loc, this._value[0], this._value[1], this._value[2]);
        this.needsUpdate = false;
        this._cgl.profileData.profileUniformCount++;
    }

    updateValue4I()
    {
        if (!this._isValidLoc())
        {
            this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
            this._cgl.profileData.profileShaderGetUniform++;
            this._cgl.profileData.profileShaderGetUniformName = this._name;
        }
        this._shader.getCgl().gl.uniform4i(this._loc, this._value[0], this._value[1], this._value[2], this._value[3]);
        this._cgl.profileData.profileUniformCount++;
    }

    setValueI(v)
    {
        if (v != this._value)
        {
            this.needsUpdate = true;
            this._value = v;
        }
    }

    setValue2I(v)
    {
        if (!v) return;
        if (!this._oldValue)
        {
            this._oldValue = [v[0] - 1, 1];
            this.needsUpdate = true;
        }
        else if (v[0] != this._oldValue[0] || v[1] != this._oldValue[1])
        {
            this._oldValue[0] = v[0];
            this._oldValue[1] = v[1];
            this.needsUpdate = true;
        }

        this._value = v;
    }

    setValue3I(v)
    {
        if (!v) return;
        if (!this._oldValue)
        {
            this._oldValue = [v[0] - 1, 1, 2];
            this.needsUpdate = true;
        }
        else if (v[0] != this._oldValue[0] || v[1] != this._oldValue[1] || v[2] != this._oldValue[2])
        {
            this._oldValue[0] = v[0];
            this._oldValue[1] = v[1];
            this._oldValue[2] = v[2];
            this.needsUpdate = true;
        }

        this._value = v;
    }

    setValue4I(v)
    {
        this.needsUpdate = true;
        this._value = v || vec4.create();
    }

    updateValueBool()
    {
        if (!this._isValidLoc()) this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
        else this.needsUpdate = false;
        this._shader.getCgl().gl.uniform1i(this._loc, this._value ? 1 : 0);

        this._cgl.profileData.profileUniformCount++;
    }

    setValueBool(v)
    {
        if (v != this._value)
        {
            this.needsUpdate = true;
            this._value = v;
        }
    }

    setValueArray4F(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }

    updateValueArray4F()
    {
        if (!this._isValidLoc()) this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
        else this.needsUpdate = false;

        if (!this._value) return;
        this._shader.getCgl().gl.uniform4fv(this._loc, this._value);
        this._cgl.profileData.profileUniformCount++;
    }

    setValueArray3F(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }

    updateValueArray3F()
    {
        if (!this._isValidLoc()) this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
        else this.needsUpdate = false;

        if (!this._value) return;
        this._shader.getCgl().gl.uniform3fv(this._loc, this._value);
        this._cgl.profileData.profileUniformCount++;
    }

    setValueArray2F(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }

    updateValueArray2F()
    {
        if (!this._isValidLoc()) this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
        else this.needsUpdate = false;

        if (!this._value) return;
        this._shader.getCgl().gl.uniform2fv(this._loc, this._value);
        this._cgl.profileData.profileUniformCount++;
    }

    setValueArrayF(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }

    updateValueArrayF()
    {
        if (!this._isValidLoc()) this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
        else this.needsUpdate = false;

        if (!this._value) return;
        this._shader.getCgl().gl.uniform1fv(this._loc, this._value);
        this._cgl.profileData.profileUniformCount++;
    }

    setValueArrayT(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }


    updateValue3F()
    {
        if (!this._value) return;
        if (!this._isValidLoc())
        {
            this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
            this._cgl.profileData.profileShaderGetUniform++;
            this._cgl.profileData.profileShaderGetUniformName = this._name;
        }

        this._shader.getCgl().gl.uniform3f(this._loc, this._value[0], this._value[1], this._value[2]);
        this.needsUpdate = false;
        this._cgl.profileData.profileUniformCount++;
    }

    setValue3F(v)
    {
        if (!v) return;
        if (!this._oldValue)
        {
            this._oldValue = [v[0] - 1, 1, 2];
            this.needsUpdate = true;
        }
        else if (v[0] != this._oldValue[0] || v[1] != this._oldValue[1] || v[2] != this._oldValue[2])
        {
            this._oldValue[0] = v[0];
            this._oldValue[1] = v[1];
            this._oldValue[2] = v[2];
            this.needsUpdate = true;
        }

        this._value = v;
    }

    updateValue2F()
    {
        if (!this._value) return;

        if (!this._isValidLoc())
        {
            this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
            this._cgl.profileData.profileShaderGetUniform++;
            this._cgl.profileData.profileShaderGetUniformName = this._name;
        }

        this._shader.getCgl().gl.uniform2f(this._loc, this._value[0], this._value[1]);
        this.needsUpdate = false;
        this._cgl.profileData.profileUniformCount++;
    }

    setValue2F(v)
    {
        if (!v) return;
        if (!this._oldValue)
        {
            this._oldValue = [v[0] - 1, 1];
            this.needsUpdate = true;
        }
        else if (v[0] != this._oldValue[0] || v[1] != this._oldValue[1])
        {
            this._oldValue[0] = v[0];
            this._oldValue[1] = v[1];
            this.needsUpdate = true;
        }
        this._value = v;
    }

    updateValue4F()
    {
        if (!this._isValidLoc())
        {
            this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
            this._cgl.profileData.profileShaderGetUniform++;
            this._cgl.profileData.profileShaderGetUniformName = this._name;
        }

        if (!this._value)
        {
            this._log.warn("no value for uniform", this._name, this);
            this._value = [0, 0, 0, 0];
        }

        this.needsUpdate = false;
        this._shader.getCgl().gl.uniform4f(this._loc, this._value[0], this._value[1], this._value[2], this._value[3]);
        this._cgl.profileData.profileUniformCount++;
    }

    setValue4F(v)
    {
        if (typeof this.value == "number") this.value = vec4.create(); // this should not be needed, but somehow it crashes with some shadermods

        if (!v) return;
        if (!this._oldValue)
        {
            this._oldValue = [v[0] - 1, 1, 2, 3];
            this.needsUpdate = true;
        }
        else if (v[0] != this._oldValue[0] || v[1] != this._oldValue[1] || v[2] != this._oldValue[2] || v[3] != this._oldValue[3])
        {
            this._oldValue[0] = v[0];
            this._oldValue[1] = v[1];
            this._oldValue[2] = v[2];
            this.needsUpdate = true;
        }

        this._value = v;
    }

    updateValueM4()
    {
        if (!this._isValidLoc())
        {
            this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
            this._cgl.profileData.profileShaderGetUniform++;
            this._cgl.profileData.profileShaderGetUniformName = this._name;
        }
        if (!this._value || this._value.length % 16 != 0) return console.log("this.name", this._name, this._value);

        this._shader.getCgl().gl.uniformMatrix4fv(this._loc, false, this._value);
        this._cgl.profileData.profileUniformCount++;
    }

    setValueM4(v)
    {
        this.needsUpdate = true;
        this._value = v || mat4.create();
    }

    updateValueArrayT()
    {
        if (!this._isValidLoc()) this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
        else this.needsUpdate = false;

        if (!this._value) return;
        this._shader.getCgl().gl.uniform1iv(this._loc, this._value);
        this._cgl.profileData.profileUniformCount++;
    }

    updateValueT()
    {
        if (!this._isValidLoc())
        {
            this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
            this._cgl.profileData.profileShaderGetUniform++;
            this._cgl.profileData.profileShaderGetUniformName = this._name;
        }

        this._cgl.profileData.profileUniformCount++;
        this._shader.getCgl().gl.uniform1i(this._loc, this._value);
        this.needsUpdate = false;
    }

    setValueT(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }
}


Uniform.glslTypeString = (t) =>
{
    if (t == "f") return "float";
    if (t == "b") return "bool";
    if (t == "i") return "int";
    if (t == "2i") return "ivec2";
    if (t == "2f") return "vec2";
    if (t == "3f") return "vec3";
    if (t == "4f") return "vec4";
    if (t == "m4") return "mat4";

    if (t == "t") return "sampler2D";
    if (t == "tc") return "samplerCube";

    if (t == "3f[]") return null; // ignore this for now...
    if (t == "m4[]") return null; // ignore this for now...
    if (t == "f[]") return null; // ignore this for now...

    console.warn("[CGL UNIFORM] unknown glsl type string ", t);
};


/**
 * @function setValue
 * @memberof Uniform
 * @instance
 * @param {Number|Array|Matrix|Texture} value
 */



;// CONCATENATED MODULE: ./src/core/cgl/cgl_texture.js





const DEFAULT_TEXTURE_SIZE = 8;

/**
 * A Texture
 * @namespace external:CGL
 * @class
 * @param {Context} __cgl cgl
 * @param {Object} options
 * @hideconstructor
 * @example
 * // generate a 256x256 pixel texture of random colors
 * const size=256;
 * const data = new Uint8Array(size*size*4);
 *
 * for(var x=0;x<size*size*4;x++) data[ x*4+3]=255;
 *
 * const tex=new CGL.Texture(cgl);
 * tex.initFromData(data,size,size,CGL.Texture.FILTER_NEAREST,CGL.Texture.WRAP_REPEAT);
 */
const Texture = function (__cgl, options = {})
{
    if (!__cgl) throw new Error("no cgl");
    this._log = new Logger("cgl_texture");
    this._cgl = __cgl;
    this.pixelFormat = options.pixelFormat || Texture.PFORMATSTR_RGBA8UB;
    this.tex = this._cgl.gl.createTexture();
    this.id = CABLES.uuid();
    this.width = 0;
    this.height = 0;
    this.loading = false;
    this.flip = true;
    this.flipped = false;
    this.shadowMap = false;
    this.deleted = false;
    this.image = null;
    this.anisotropic = 0;
    this.filter = Texture.FILTER_NEAREST;
    this.wrap = Texture.WRAP_CLAMP_TO_EDGE;
    this.texTarget = this._cgl.gl.TEXTURE_2D;
    if (options && options.type) this.texTarget = options.type;
    this.textureType = Texture.TYPE_DEFAULT;
    this.unpackAlpha = true;
    this._fromData = true;
    this.name = "unknown";

    this._glDataType = -1;
    this._glInternalFormat = -1;
    this._glDataFormat = -1;


    if (options)
    {
        this.name = options.name || this.name;
        if (options.isDepthTexture)
        {
            this.textureType = Texture.TYPE_DEPTH;
        }
        if (options.isFloatingPointTexture === true) this.textureType = Texture.TYPE_FLOAT;

        if ("textureType" in options) this.textureType = options.textureType;
        if ("filter" in options) this.filter = options.filter;
        if ("wrap" in options) this.wrap = options.wrap;
        if ("unpackAlpha" in options) this.unpackAlpha = options.unpackAlpha;
        if ("flip" in options) this.flip = options.flip;
        if ("shadowMap" in options) this.shadowMap = options.shadowMap;
        if ("anisotropic" in options) this.anisotropic = options.anisotropic;
    }
    else
    {
        options = {};
    }

    if (!options.pixelFormat && options.isFloatingPointTexture) this.pixelFormat = Texture.PFORMATSTR_RGBA32F;

    if (this.textureType == Texture.TYPE_DEPTH) this.pixelFormat = Texture.PFORMATSTR_DEPTH;



    if (!options.width) options.width = DEFAULT_TEXTURE_SIZE;
    if (!options.height) options.height = DEFAULT_TEXTURE_SIZE;

    this._cgl.profileData.profileTextureNew++;


    this.setFormat(Texture.setUpGlPixelFormat(this._cgl, this.pixelFormat));
    this._cgl.profileData.addHeavyEvent("texture created", this.name, options.width + "x" + options.height);

    this.setSize(options.width, options.height);
    this.getInfoOneLine();
};

Texture.prototype.isFloatingPoint = function ()
{
    return Texture.isPixelFormatFloat(this.pixelFormat);
};

/**
 * returns true if otherTexture has same options (width/height/filter/wrap etc)
 * @function compareSettings
 * @memberof Texture
 * @instance
 * @param {Texture} tex otherTexture
 * @returns {Boolean}
 */
Texture.prototype.compareSettings = function (tex)
{
    // if (!tex) { this._log.warn("compare: no tex"); return false; }
    // if (tex.width != this.width) this._log.warn("tex.width not equal", tex.width, this.width);
    // if (tex.height != this.height) this._log.warn("tex.height not equal", tex.height, this.height);
    // if (tex.filter != this.filter) this._log.warn("tex.filter not equal");
    // if (tex.wrap != this.wrap) this._log.warn("tex.wrap not equal");
    // if (tex.textureType != this.textureType) this._log.warn("tex.textureType not equal");
    // if (tex.unpackAlpha != this.unpackAlpha) this._log.warn("tex.unpackAlpha not equal");
    // if (tex.anisotropic != this.anisotropic) this._log.warn("tex.anisotropic not equal");
    // if (tex.shadowMap != this.shadowMap) this._log.warn("tex.shadowMap not equal");
    // if (tex.texTarget != this.texTarget) this._log.warn("tex.texTarget not equal");
    // if (tex.flip != this.flip) this._log.warn("tex.flip not equal");

    if (!tex) return false;
    return (
        tex.width == this.width &&
        tex.height == this.height &&
        tex.filter == this.filter &&
        tex.wrap == this.wrap &&
        tex.textureType == this.textureType &&
        tex.unpackAlpha == this.unpackAlpha &&
        tex.anisotropic == this.anisotropic &&
        tex.shadowMap == this.shadowMap &&
        tex.texTarget == this.texTarget &&
        tex.flip == this.flip
    );
};

/**
 * returns a new texture with the same settings (does not copy texture itself)
 * @function clone
 * @memberof Texture
 * @instance
 * @returns {Texture}
 */
Texture.prototype.clone = function ()
{
    const newTex = new Texture(this._cgl, {
        "name": this.name,
        "filter": this.filter,
        "anisotropic": this.anisotropic,
        "wrap": this.wrap,
        "textureType": this.textureType,
        "pixelFormat": this.pixelFormat,
        "unpackAlpha": this.unpackAlpha,
        "flip": this.flip,
        "width": this.width,
        "height": this.height,
    });

    this._cgl.profileData.addHeavyEvent("texture created", this.name, this.width + "x" + this.height);

    if (!this.compareSettings(newTex))
    {
        this._log.error("Cloned texture settings do not compare!");
        this._log.error(this);
        this._log.error(newTex);
    }

    return newTex;
};


Texture.prototype.setFormat = function (o)
{
    this.pixelFormat = o.pixelFormat;
    this._glDataFormat = o.glDataFormat;
    this._glInternalFormat = o.glInternalFormat;
    this._glDataType = o.glDataType;
};


Texture.setUpGlPixelFormat = function (cgl, pixelFormatStr)
{
    const o = {};

    if (!pixelFormatStr)
    {
        cgl._log.error("no pixelformatstr!");
        cgl._log.log((new Error()).stack);
        pixelFormatStr = Texture.PFORMATSTR_RGBA8UB;
    }

    o.pixelFormatBase = pixelFormatStr;


    o.pixelFormat = pixelFormatStr;
    o.glDataType = cgl.gl.UNSIGNED_BYTE;
    o.glInternalFormat = cgl.gl.RGBA8;
    o.glDataFormat = cgl.gl.RGBA;

    let floatDatatype = cgl.gl.FLOAT;

    if (cgl.glUseHalfFloatTex)
    {
        if (pixelFormatStr == Texture.PFORMATSTR_RGBA32F) pixelFormatStr = Texture.PFORMATSTR_RGBA16F;
        if (pixelFormatStr == Texture.PFORMATSTR_RG32F) pixelFormatStr = Texture.PFORMATSTR_RG16F;
        if (pixelFormatStr == Texture.PFORMATSTR_R32F) pixelFormatStr = Texture.PFORMATSTR_R16F;
    }

    if (pixelFormatStr.contains("16bit"))
    {
        if (cgl.glVersion == 2)
        {
            // cgl.enableExtension("OES_texture_half_float");
            const hasExt = cgl.enableExtension("EXT_color_buffer_half_float");

            if (!hasExt)
            {
                console.warn("no 16bit extension, fallback to 32bit", pixelFormatStr);
                // fallback to 32 bit?
                if (pixelFormatStr == Texture.PFORMATSTR_RGBA16F) pixelFormatStr = Texture.PFORMATSTR_RGBA32F;
                if (pixelFormatStr == Texture.PFORMATSTR_RGB16F) pixelFormatStr = Texture.PFORMATSTR_RGB32F;
                if (pixelFormatStr == Texture.PFORMATSTR_RG16F) pixelFormatStr = Texture.PFORMATSTR_RG32F;
                if (pixelFormatStr == Texture.PFORMATSTR_R16F) pixelFormatStr = Texture.PFORMATSTR_R32F;
            }
            else
            {
                floatDatatype = cgl.gl.HALF_FLOAT;
            }
        }
    }

    if (cgl.glVersion == 1)
    {
        o.glInternalFormat = cgl.gl.RGBA;

        if (pixelFormatStr == Texture.PFORMATSTR_RGBA16F || pixelFormatStr == Texture.PFORMATSTR_RG16F || pixelFormatStr == Texture.PFORMATSTR_R16F)
        {
            const ext = cgl.enableExtension("OES_texture_half_float");
            if (!ext) throw new Error("no half float texture extension");

            floatDatatype = ext.HALF_FLOAT_OES;
        }
    }


    if (pixelFormatStr == Texture.PFORMATSTR_RGBA8UB)
    {
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_RGB565)
    {
        o.glInternalFormat = cgl.gl.RGB565;
        o.glDataFormat = cgl.gl.RGB;
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_R8UB)
    {
        o.glInternalFormat = cgl.gl.R8;
        o.glDataFormat = cgl.gl.RED;
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_RG8UB)
    {
        o.glInternalFormat = cgl.gl.RG8;
        o.glDataFormat = cgl.gl.RG;
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_RGB8UB)
    {
        o.glInternalFormat = cgl.gl.RGB8;
        o.glDataFormat = cgl.gl.RGB;
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_SRGBA8)
    {
        o.glInternalFormat = cgl.gl.SRGB8_ALPHA8;
    }

    else if (pixelFormatStr == Texture.PFORMATSTR_R32F)
    {
        o.glInternalFormat = cgl.gl.R32F;
        o.glDataFormat = cgl.gl.RED;
        o.glDataType = floatDatatype;
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_R16F)
    {
        o.glInternalFormat = cgl.gl.R16F;
        o.glDataType = floatDatatype;
        o.glDataFormat = cgl.gl.RED;
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_RG16F)
    {
        o.glInternalFormat = cgl.gl.RG16F;
        o.glDataType = floatDatatype;
        o.glDataFormat = cgl.gl.RG;
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_RGBA16F)
    {
        if (cgl.glVersion == 1) o.glInternalFormat = cgl.gl.RGBA;
        else o.glInternalFormat = cgl.gl.RGBA16F;
        o.glDataType = floatDatatype;
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_R11FG11FB10F)
    {
        o.glInternalFormat = cgl.gl.R11F_G11F_B10F;
        o.glDataType = floatDatatype;
        o.glDataFormat = cgl.gl.RGB;
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_RGBA32F)
    {
        if (cgl.glVersion == 1) o.glInternalFormat = cgl.gl.RGBA;
        else o.glInternalFormat = cgl.gl.RGBA32F;
        o.glDataType = floatDatatype;
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_DEPTH)
    {
        if (cgl.glVersion == 1)
        {
            o.glInternalFormat = cgl.gl.DEPTH_COMPONENT;
            o.glDataType = cgl.gl.UNSIGNED_SHORT;
            o.glDataFormat = cgl.gl.DEPTH_COMPONENT;
        }
        else
        {
            o.glInternalFormat = cgl.gl.DEPTH_COMPONENT32F;
            o.glDataType = cgl.gl.FLOAT;
            o.glDataFormat = cgl.gl.DEPTH_COMPONENT;
        }
    }
    else
    {
        console.log("unknown pixelformat ", pixelFormatStr);
    }

    /// //////

    if (pixelFormatStr.contains("32bit") || pixelFormatStr == Texture.PFORMATSTR_R11FG11FB10F)
    {
        if (cgl.glVersion == 2) cgl.enableExtension("EXT_color_buffer_float");
        if (cgl.glVersion == 2) cgl.enableExtension("EXT_float_blend");

        cgl.enableExtension("OES_texture_float_linear"); // yes, i am sure, this is a webgl 1 and 2 ext
    }


    o.numColorChannels = 1;
    if (pixelFormatStr.startsWith("R"))o.numColorChannels = 1;
    if (pixelFormatStr.startsWith("RG"))o.numColorChannels = 2;
    if (pixelFormatStr.startsWith("RGB"))o.numColorChannels = 3;
    if (pixelFormatStr.startsWith("RGBA"))o.numColorChannels = 4;


    // console.log(pixelFormatStr, this.name);

    if (!o.glDataType || !o.glInternalFormat || !o.glDataFormat) console.log("pixelformat wrong ?!", pixelFormatStr, o.glDataType, o.glInternalFormat, o.glDataFormat, this);

    return o;
};

/**
 * set pixel size of texture
 * @function setSize
 * @memberof Texture
 * @instance
 * @param {Number} w width
 * @param {Number} h height
 */
Texture.prototype.setSize = function (w, h)
{
    if (this._cgl.aborted) return;
    if (w != w || w <= 0 || !w) w = DEFAULT_TEXTURE_SIZE;
    if (h != h || h <= 0 || !h) h = DEFAULT_TEXTURE_SIZE;

    if (w > this._cgl.maxTexSize || h > this._cgl.maxTexSize) this._log.error("texture size too big! " + w + "x" + h + " / max: " + this._cgl.maxTexSize);

    w = Math.min(w, this._cgl.maxTexSize);
    h = Math.min(h, this._cgl.maxTexSize);

    w = Math.floor(w);
    h = Math.floor(h);
    if (this.width == w && this.height == h) return;

    w = this._cgl.checkTextureSize(w);
    h = this._cgl.checkTextureSize(h);

    this.width = w;
    this.height = h;
    this.deleted = false;

    this.setFormat(Texture.setUpGlPixelFormat(this._cgl, this.pixelFormat));

    this.shortInfoString = this.getInfoOneLine();// w + "x" + h + "";

    this._cgl.gl.bindTexture(this.texTarget, this.tex);
    this._cgl.profileData.profileTextureResize++;

    const uarr = null;

    this._cgl.gl.texImage2D(this.texTarget, 0, this._glInternalFormat, w, h, 0, this._glDataFormat, this._glDataType, uarr);

    this._setFilter();

    this.updateMipMap();

    this._cgl.gl.bindTexture(this.texTarget, null);
};


/**
 * @function initFromData
 * @memberof Texture
 * @instance
 * @description create texturem from rgb data
 * @param {Array<Number>} data rgb color array [r,g,b,a,r,g,b,a,...]
 * @param {Number} w width
 * @param {Number} h height
 * @param {Number} filter
 * @param {Number} wrap
 */
Texture.prototype.initFromData = function (data, w, h, filter, wrap)
{
    this.filter = filter;
    this.wrap = wrap;
    if (filter == undefined) this.filter = Texture.FILTER_LINEAR;
    if (wrap == undefined) this.wrap = Texture.WRAP_CLAMP_TO_EDGE;
    this.width = w;
    this.height = h;
    this._fromData = true;
    this.deleted = false;

    if (this.height > this._cgl.maxTexSize || this.width > this._cgl.maxTexSize)
    {
        const t = CGL.Texture.getTempTexture(this._cgl);
        this.width = t.width;
        this.height = t.height;
        this.tex = t.tex;
        this._log.error("[cgl_texture] texture size to big!!!", this.width, this.height, this._cgl.maxTexSize);
        return;
    }

    if (this.flip) this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_FLIP_Y_WEBGL, this.flip);

    this._cgl.gl.bindTexture(this.texTarget, this.tex);

    this.setFormat(Texture.setUpGlPixelFormat(this._cgl, this.pixelFormat));

    this._cgl.gl.texImage2D(this.texTarget, 0, this._glInternalFormat, w, h, 0, this._glDataFormat, this._glDataType, data);

    this._setFilter();
    this.updateMipMap();

    if (this.flip) this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_FLIP_Y_WEBGL, false);
    this._cgl.gl.bindTexture(this.texTarget, null);
};

Texture.prototype.updateMipMap = function ()
{
    if ((this._cgl.glVersion == 2 || this.isPowerOfTwo()) && this.filter == Texture.FILTER_MIPMAP)
    {
        this._cgl.gl.generateMipmap(this.texTarget);
        this._cgl.profileData.profileGenMipMap++;
    }
};

/**
 * set texture data from an image/canvas object
 * @function initTexture
 * @memberof Texture
 * @instance
 * @param {Object} img image
 * @param {Number} filter
 */
Texture.prototype.initTexture = function (img, filter)
{
    this._cgl.printError("before initTexture");
    this._cgl.checkFrameStarted("texture inittexture");
    this._fromData = false;

    this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.unpackAlpha);
    if (img.width || img.videoWidth) this.width = img.videoWidth || img.width;
    if (img.height || img.videoHeight) this.height = img.videoHeight || img.height;

    if (filter !== undefined) this.filter = filter; // todo: can we remove this filter param?

    if (img.height > this._cgl.maxTexSize || img.width > this._cgl.maxTexSize)
    {
        const t = CGL.Texture.getTempTexture(this._cgl);
        this.width = t.width;
        this.height = t.height;
        this.tex = t.tex;
        this._log.error("[cgl_texture] texture size to big!!!", img.width, img.height, this._cgl.maxTexSize);
        return;
    }


    // console.log("loaded texture", img.width, img.height);

    this._cgl.gl.bindTexture(this.texTarget, this.tex);

    this.deleted = false;
    this.flipped = !this.flip;
    if (this.flipped) this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_FLIP_Y_WEBGL, this.flipped);


    this.setFormat(Texture.setUpGlPixelFormat(this._cgl, this.pixelFormat));

    this._cgl.gl.texImage2D(this.texTarget, 0, this._glInternalFormat, this._glDataFormat, this._glDataType, img);
    // this._cgl.gl.texImage2D(this.texTarget, 0, this._cgl.gl.RGBA, this._cgl.gl.RGBA, this._cgl.gl.UNSIGNED_BYTE, img);

    // if (this._cgl.printError("[cgl_texture] init " + this.name));

    this._setFilter();
    this.updateMipMap();

    // if (this._cgl.printError("[cgl_texture] init2"));

    this._cgl.gl.bindTexture(this.texTarget, null);
    this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
    if (this.flipped) this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_FLIP_Y_WEBGL, false);

    this.getInfoOneLine();
    this._cgl.printError("initTexture");
};

/**
 * delete texture. use this when texture is no longer needed
 * @function delete
 * @memberof Texture
 * @instance
 */
Texture.prototype.dispose =
Texture.prototype.delete = function ()
{
    if (this.loading)
    {
        // cant delete texture when still loading
        // setTimeout(this.delete.bind(this), 50);
        return;
    }

    this.deleted = true;
    this.width = 0;
    this.height = 0;
    this._cgl.profileData.profileTextureDelete++;
    this._cgl.gl.deleteTexture(this.tex);
    this.image = null;

    this.tex = null;
};

/**
 * @function isPowerOfTwo
 * @memberof Texture
 * @instance
 * @description return true if texture width and height are both power of two
 * @return {Boolean}
 */
Texture.prototype.isPowerOfTwo = function ()
{
    return Texture.isPowerOfTwo(this.width) && Texture.isPowerOfTwo(this.height);
};

Texture.prototype.printInfo = function ()
{
    console.log(this.getInfo());
};

Texture.prototype.getInfoReadable = function ()
{
    const info = this.getInfo();
    let html = "";

    info.name = info.name.substr(0, info.name.indexOf("?rnd="));

    for (const i in info)
    {
        html += "* " + i + ":  **" + info[i] + "**\n";
    }

    return html;
};

Texture.prototype.getInfoOneLine = function ()
{
    let txt = "" + this.width + "x" + this.height;
    txt += " ";
    // if (this.textureType === CGL.Texture.TYPE_FLOAT) txt += " 32bit"; else txt += " 8bit";
    // if (this.textureType === CGL.Texture.TYPE_FLOAT) txt += " 32bit"; else txt += " 8bit";
    txt += this.pixelFormat;

    if (this.filter === CGL.Texture.FILTER_NEAREST) txt += " nearest";
    if (this.filter === CGL.Texture.FILTER_LINEAR) txt += " linear";
    if (this.filter === CGL.Texture.FILTER_MIPMAP) txt += " mipmap";

    if (this.wrap === CGL.Texture.WRAP_CLAMP_TO_EDGE) txt += " clamp";
    if (this.wrap === CGL.Texture.WRAP_REPEAT) txt += " repeat";
    if (this.wrap === CGL.Texture.WRAP_MIRRORED_REPEAT) txt += " repeatmir";

    this.shortInfoString = txt;

    return txt;
};

Texture.prototype.getInfoOneLineShort = function ()
{
    let txt = "" + this.width + "x" + this.height;
    // if (this.textureType === CGL.Texture.TYPE_FLOAT) txt += " 32bit"; else txt += " 8bit";
    txt += " ";
    txt += this.pixelFormat;

    this.shortInfoString = txt;

    return txt;
};


Texture.prototype.getInfo = function ()
{
    return Texture.getTexInfo(this);
};


Texture.prototype._setFilter = function ()
{
    this._cgl.printError("before _setFilter");

    if (!this._fromData)
    {
        this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.unpackAlpha);
    }

    if (this.shadowMap)
    {
        this._cgl.gl.texParameteri(this._cgl.gl.TEXTURE_2D, this._cgl.gl.TEXTURE_COMPARE_MODE, this._cgl.gl.COMPARE_REF_TO_TEXTURE);
        this._cgl.gl.texParameteri(this._cgl.gl.TEXTURE_2D, this._cgl.gl.TEXTURE_COMPARE_FUNC, this._cgl.gl.LEQUAL);
    }

    if (this.textureType == Texture.TYPE_FLOAT && this.filter == Texture.FILTER_MIPMAP)
    {
        this.filter = Texture.FILTER_LINEAR;
        this._log.stack("texture: HDR and mipmap filtering at the same time is not possible");
    }

    if (this._cgl.glVersion == 1 && !this.isPowerOfTwo())
    {
        this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MAG_FILTER, this._cgl.gl.NEAREST);
        this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MIN_FILTER, this._cgl.gl.NEAREST);

        this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_S, this._cgl.gl.CLAMP_TO_EDGE);
        this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_T, this._cgl.gl.CLAMP_TO_EDGE);

        this.filter = Texture.FILTER_NEAREST;
        this.wrap = Texture.WRAP_CLAMP_TO_EDGE;
    }
    else
    {
        if (this.wrap == Texture.WRAP_CLAMP_TO_EDGE)
        {
            this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_S, this._cgl.gl.CLAMP_TO_EDGE);
            this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_T, this._cgl.gl.CLAMP_TO_EDGE);
        }
        else if (this.wrap == Texture.WRAP_REPEAT)
        {
            this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_S, this._cgl.gl.REPEAT);
            this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_T, this._cgl.gl.REPEAT);
        }
        else if (this.wrap == Texture.WRAP_MIRRORED_REPEAT)
        {
            this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_S, this._cgl.gl.MIRRORED_REPEAT);
            this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_T, this._cgl.gl.MIRRORED_REPEAT);
        }

        if (this.filter == Texture.FILTER_NEAREST)
        {
            this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MAG_FILTER, this._cgl.gl.NEAREST);
            this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MIN_FILTER, this._cgl.gl.NEAREST);
        }
        else if (this.filter == Texture.FILTER_LINEAR)
        {
            this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MIN_FILTER, this._cgl.gl.LINEAR);
            this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MAG_FILTER, this._cgl.gl.LINEAR);
        }
        else if (this.filter == Texture.FILTER_MIPMAP)
        {
            this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MAG_FILTER, this._cgl.gl.LINEAR);
            this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MIN_FILTER, this._cgl.gl.LINEAR_MIPMAP_LINEAR);
        }
        else
        {
            this._log.log("unknown texture filter!", this.filter);
            throw new Error("unknown texture filter!" + this.filter);
        }

        if (this.anisotropic)
        {
            const ext = this._cgl.enableExtension("EXT_texture_filter_anisotropic");



            if (this._cgl.maxAnisotropic)
            {
                const aniso = Math.min(this._cgl.maxAnisotropic, this.anisotropic);
                this._cgl.gl.texParameterf(this._cgl.gl.TEXTURE_2D, ext.TEXTURE_MAX_ANISOTROPY_EXT, aniso);
            }
        }
    }
    this.getInfoOneLine();
    this._cgl.printError("_setFilter");
};


/**
 * @function load
 * @static
 * @memberof Texture
 * @description load an image from an url
 * @param {Context} cgl
 * @param {String} url
 * @param {Function} finishedCallback
 * @param {Object} settings
 * @return {Texture}
 */
Texture.load = function (cgl, url, finishedCallback, settings)
{
    if (!url) return finishedCallback({ "error": true });
    let loadingId = null;
    if (!cgl.patch.loading.existByName(url)) loadingId = cgl.patch.loading.start("cgl.texture", url);

    const texture = new Texture(cgl);
    texture.name = url;

    // texture.pixelFormat = Texture.PFORMATSTR_;

    // if (cgl.patch.isEditorMode()) gui.jobs().start({ "id": "loadtexture" + loadingId, "title": "loading texture " + CABLES.basename(url) });

    texture.image = new Image();
    texture.image.crossOrigin = "anonymous";
    texture.loading = true;

    if (settings && settings.hasOwnProperty("filter")) texture.filter = settings.filter;
    if (settings && settings.hasOwnProperty("flip")) texture.flip = settings.flip;
    if (settings && settings.hasOwnProperty("wrap")) texture.wrap = settings.wrap;
    if (settings && settings.hasOwnProperty("anisotropic")) texture.anisotropic = settings.anisotropic;
    if (settings && settings.hasOwnProperty("unpackAlpha")) texture.unpackAlpha = settings.unpackAlpha;
    if (settings && settings.hasOwnProperty("pixelFormat")) texture.pixelFormat = settings.pixelFormat;

    texture.image.onabort = texture.image.onerror = (e) =>
    {
        console.warn("[cgl.texture.load] error loading texture", url, e);
        texture.loading = false;
        if (loadingId) cgl.patch.loading.finished(loadingId);
        const error = { "error": true };
        if (finishedCallback) finishedCallback(error, texture);
        // if (cgl.patch.isEditorMode()) gui.jobs().finish("loadtexture" + loadingId);
    };

    texture.image.onload = function (e)
    {
        cgl.addNextFrameOnceCallback(() =>
        {
            texture.initTexture(texture.image);
            if (loadingId) cgl.patch.loading.finished(loadingId);
            texture.loading = false;
            // if (cgl.patch.isEditorMode()) gui.jobs().finish("loadtexture" + loadingId);

            if (finishedCallback) finishedCallback(null, texture);
        });
    };
    texture.image.src = url;

    return texture;
};

/**
 * @static
 * @function getTempTexture
 * @memberof Texture
 * @description returns the default temporary texture (grey diagonal stipes)
 * @param {Context} cgl
 * @return {Texture}
 */
Texture.getTempTexture = function (cgl)
{
    if (!cgl) console.error("[getTempTexture] no cgl!");
    if (!cgl.tempTexture) cgl.tempTexture = Texture.getTemporaryTexture(cgl, 256, Texture.FILTER_LINEAR, Texture.REPEAT);
    return cgl.tempTexture;
};

/**
 * @static
 * @function getErrorTexture
 * @memberof Texture
 * @description returns the default temporary texture (grey diagonal stipes)
 * @param {Context} cgl
 * @return {Texture}
 */
Texture.getErrorTexture = function (cgl)
{
    if (!cgl) console.error("[getTempTexture] no cgl!");
    if (!cgl.errorTexture) cgl.errorTexture = Texture.getTemporaryTexture(cgl, 256, Texture.FILTER_LINEAR, Texture.REPEAT, 1, 0.2, 0.2);
    return cgl.errorTexture;
};


/**
 * @function getEmptyTexture
 * @memberof Texture
 * @instance
 * @param cgl
 * @param fp
 * @description returns a reference to a small empty (transparent) texture
 * @return {Texture}
 */
Texture.getEmptyTexture = function (cgl, fp)
{
    if (fp) return Texture.getEmptyTextureFloat(cgl);
    if (!cgl) console.error("[getEmptyTexture] no cgl!");
    if (cgl.tempTextureEmpty) return cgl.tempTextureEmpty;

    cgl.tempTextureEmpty = new Texture(cgl, { "name": "emptyTexture" });
    const data = new Uint8Array(8 * 8 * 4).fill(0);
    for (let i = 0; i < 8 * 8 * 4; i += 4) data[i + 3] = 0;

    cgl.tempTextureEmpty.initFromData(data, 8, 8, Texture.FILTER_NEAREST, Texture.WRAP_REPEAT);

    return cgl.tempTextureEmpty;
};

/**
 * @function getEmptyTextureFloat
 * @memberof Texture
 * @instance
 * @param cgl
 * @description returns a reference to a small empty (transparent) 32bit texture
 * @return {Texture}
 */
Texture.getEmptyTextureFloat = function (cgl)
{
    if (!cgl) console.error("[getEmptyTextureFloat] no cgl!");
    if (cgl.tempTextureEmptyFloat) return cgl.tempTextureEmptyFloat;

    cgl.tempTextureEmptyFloat = new Texture(cgl, { "name": "emptyTexture", "isFloatingPointTexture": true });
    const data = new Float32Array(8 * 8 * 4).fill(1);
    for (let i = 0; i < 8 * 8 * 4; i += 4) data[i + 3] = 0;

    cgl.tempTextureEmptyFloat.initFromData(data, 8, 8, Texture.FILTER_NEAREST, Texture.WRAP_REPEAT);

    return cgl.tempTextureEmptyFloat;
};


/**
 * @function getRandomTexture
 * @memberof Texture
 * @static
 * @param cgl
 * @description returns a reference to a random texture
 * @return {Texture}
 */
Texture.getRandomTexture = function (cgl)
{
    if (!cgl) console.error("[getRandomTexture] no cgl!");
    if (cgl.randomTexture) return cgl.randomTexture;

    const size = 256;
    const data = new Uint8Array(size * size * 4);

    for (let x = 0; x < size * size; x++)
    {
        data[x * 4 + 0] = Math.random() * 255;
        data[x * 4 + 1] = Math.random() * 255;
        data[x * 4 + 2] = Math.random() * 255;
        data[x * 4 + 3] = 255;
    }

    cgl.randomTexture = new Texture(cgl);
    cgl.randomTexture.initFromData(data, size, size, Texture.FILTER_NEAREST, Texture.WRAP_REPEAT);

    return cgl.randomTexture;
};

/**
 * @function getRandomFloatTexture
 * @memberof Texture
 * @static
 * @param cgl
 * @description returns a reference to a texture containing random numbers between -1 and 1
 * @return {Texture}
 */
Texture.getRandomFloatTexture = function (cgl)
{
    if (!cgl) console.error("[getRandomTexture] no cgl!");
    if (cgl.getRandomFloatTexture) return cgl.getRandomFloatTexture;

    const size = 256;
    const data = new Float32Array(size * size * 4);

    for (let x = 0; x < size * size; x++)
    {
        data[x * 4 + 0] = (Math.random() - 0.5) * 2.0;
        data[x * 4 + 1] = (Math.random() - 0.5) * 2.0;
        data[x * 4 + 2] = (Math.random() - 0.5) * 2.0;
        data[x * 4 + 3] = 1;
    }

    cgl.getRandomFloatTexture = new Texture(cgl, { "isFloatingPointTexture": true });
    cgl.getRandomFloatTexture.initFromData(data, size, size, Texture.FILTER_NEAREST, Texture.WRAP_REPEAT);

    return cgl.getRandomFloatTexture;
};

/**
 * @function getBlackTexture
 * @memberof Texture
 * @static
 * @param cgl
 * @description returns a reference to a black texture
 * @return {Texture}
 */
Texture.getBlackTexture = function (cgl)
{
    if (!cgl) this._log.error("[getBlackTexture] no cgl!");
    if (cgl.blackTexture) return cgl.blackTexture;

    const size = 8;
    const data = new Uint8Array(size * size * 4);

    for (let x = 0; x < size * size; x++)
    {
        data[x * 4 + 0] = data[x * 4 + 1] = data[x * 4 + 2] = 0;
        data[x * 4 + 3] = 255;
    }

    cgl.blackTexture = new Texture(cgl);
    cgl.blackTexture.initFromData(data, size, size, Texture.FILTER_NEAREST, Texture.WRAP_REPEAT);

    return cgl.blackTexture;
};


/**
 * @function getEmptyCubemapTexture
 * @memberof Texture
 * @static
 * @param cgl
 * @description returns an empty cubemap texture with rgba = [0, 0, 0, 0]
 * @return {Texture}
 */
Texture.getEmptyCubemapTexture = function (cgl)
{
    const faces = [
        cgl.gl.TEXTURE_CUBE_MAP_POSITIVE_X,
        cgl.gl.TEXTURE_CUBE_MAP_NEGATIVE_X,
        cgl.gl.TEXTURE_CUBE_MAP_POSITIVE_Y,
        cgl.gl.TEXTURE_CUBE_MAP_NEGATIVE_Y,
        cgl.gl.TEXTURE_CUBE_MAP_POSITIVE_Z,
        cgl.gl.TEXTURE_CUBE_MAP_NEGATIVE_Z
    ];

    const tex = cgl.gl.createTexture();
    const target = cgl.gl.TEXTURE_CUBE_MAP;
    const filter = Texture.FILTER_NEAREST;
    const wrap = Texture.WRAP_CLAMP_TO_EDGE;
    const width = 8;
    const height = 8;

    cgl.profileData.profileTextureNew++;


    cgl.gl.bindTexture(target, tex);
    cgl.profileData.profileTextureResize++;

    for (let i = 0; i < 6; i += 1)
    {
        const data = new Uint8Array(8 * 8 * 4);

        cgl.gl.texImage2D(faces[i], 0, cgl.gl.RGBA, 8, 8, 0, cgl.gl.RGBA, cgl.gl.UNSIGNED_BYTE, data);
        cgl.gl.texParameteri(target, cgl.gl.TEXTURE_MAG_FILTER, cgl.gl.NEAREST);
        cgl.gl.texParameteri(target, cgl.gl.TEXTURE_MIN_FILTER, cgl.gl.NEAREST);

        cgl.gl.texParameteri(target, cgl.gl.TEXTURE_WRAP_S, cgl.gl.CLAMP_TO_EDGE);
        cgl.gl.texParameteri(target, cgl.gl.TEXTURE_WRAP_T, cgl.gl.CLAMP_TO_EDGE);
    }


    cgl.gl.bindTexture(target, null);

    return {
        "id": CABLES.uuid(),
        "tex": tex,
        "cubemap": tex,
        "width": width,
        "height": height,
        "filter": filter,
        "wrap": wrap,
        "unpackAlpha": true,
        "flip": true,
        "_fromData": true,
        "name": "emptyCubemapTexture",
        "anisotropic": 0,
    };
};

/**
 * @static
 * @function getTempGradientTexture
 * @memberof Texture
 * @description returns a gradient texture from black to white
 * @param {Context} cgl
 * @return {Texture}
 */
Texture.getTempGradientTexture = function (cgl)
{
    if (!cgl) console.error("[getTempGradientTexture] no cgl!");

    if (cgl.tempTextureGradient) return cgl.tempTextureGradient;
    const temptex = new Texture(cgl);
    const size = 256;
    const data = new Uint8Array(size * size * 4); // .fill(0);

    for (let y = 0; y < size; y++)
    {
        for (let x = 0; x < size; x++)
        {
            data[(x + y * size) * 4 + 0] = data[(x + y * size) * 4 + 1] = data[(x + y * size) * 4 + 2] = 255 - y;
            data[(x + y * size) * 4 + 3] = 255;
        }
    }

    temptex.initFromData(data, size, size, Texture.FILTER_NEAREST, Texture.WRAP_REPEAT);
    cgl.tempTextureGradient = temptex;
    return temptex;
};

Texture.getTemporaryTexture = function (cgl, size, filter, wrap, r, g, b)
{
    if (r === undefined)r = 1;
    if (g === undefined)g = 1;
    if (b === undefined)b = 1;
    const temptex = new Texture(cgl);
    const arr = [];
    for (let y = 0; y < size; y++)
    {
        for (let x = 0; x < size; x++)
        {
            if ((x + y) % 64 < 32)
            {
                arr.push((200 + (y / size) * 25 + (x / size) * 25) * r);
                arr.push((200 + (y / size) * 25 + (x / size) * 25) * g);
                arr.push((200 + (y / size) * 25 + (x / size) * 25) * b);
            }
            else
            {
                arr.push((40 + (y / size) * 25 + (x / size) * 25) * r);
                arr.push((40 + (y / size) * 25 + (x / size) * 25) * g);
                arr.push((40 + (y / size) * 25 + (x / size) * 25) * b);
            }
            arr.push(255);
        }
    }

    const data = new Uint8Array(arr);
    temptex.initFromData(data, size, size, filter, wrap);

    return temptex;
};

/**
 * @static
 * @function createFromImage
 * @memberof Texture
 * @description create texturem from image data (e.g. image or canvas)
 * @param {Context} cgl
 * @param {Object} img image
 * @param {Object} options
 */
Texture.createFromImage = function (cgl, img, options)
{
    options = options || {};
    const texture = new Texture(cgl, options);
    texture.flip = false;
    texture.image = img;
    texture.width = img.videoWidth || img.width || 8;
    texture.height = img.videoHeight || img.height || 8;
    if (options.hasOwnProperty("wrap"))texture.wrap = options.wrap;

    texture.initTexture(img, options.filter);

    return texture;
};

// deprecated!
Texture.fromImage = function (cgl, img, filter, wrap)
{
    console.error("deprecated texture from image...");

    const texture = new Texture(cgl);
    texture.flip = false;
    if (filter) texture.filter = filter;
    if (wrap) texture.wrap = wrap;
    texture.image = img;
    texture.initTexture(img);
    return texture;
};

/**
 * @static
 * @function isPowerOfTwo
 * @memberof Texture
 * @description returns true if x is power of two
 * @param {Number} x
 * @return {Boolean}
 */
Texture.isPowerOfTwo = function (x)
{
    return x == 1 || x == 2 || x == 4 || x == 8 || x == 16 || x == 32 || x == 64 || x == 128 || x == 256 || x == 512 || x == 1024 || x == 2048 || x == 4096 || x == 8192 || x == 16384;
};

Texture.getTexInfo = function (tex)
{
    const obj = {};

    obj.name = tex.name;
    obj["power of two"] = tex.isPowerOfTwo();
    obj.size = tex.width + " x " + tex.height;

    let targetString = tex.texTarget;
    if (tex.texTarget == tex._cgl.gl.TEXTURE_2D) targetString = "TEXTURE_2D";
    obj.target = targetString;

    obj.unpackAlpha = tex.unpackAlpha;

    if (tex.cubemap)obj.cubemap = true;

    if (tex.textureType == Texture.TYPE_FLOAT) obj.textureType = "TYPE_FLOAT";
    if (tex.textureType == Texture.TYPE_HALF_FLOAT) obj.textureType = "TYPE_HALF_FLOAT";
    else if (tex.textureType == Texture.TYPE_DEPTH) obj.textureType = "TYPE_DEPTH";
    else if (tex.textureType == Texture.TYPE_DEFAULT) obj.textureType = "TYPE_DEFAULT";
    else obj.textureType = "UNKNOWN " + this.textureType;

    if (tex.wrap == Texture.WRAP_CLAMP_TO_EDGE) obj.wrap = "CLAMP_TO_EDGE";
    else if (tex.wrap == Texture.WRAP_REPEAT) obj.wrap = "WRAP_REPEAT";
    else if (tex.wrap == Texture.WRAP_MIRRORED_REPEAT) obj.wrap = "WRAP_MIRRORED_REPEAT";
    else obj.wrap = "UNKNOWN";

    if (tex.filter == Texture.FILTER_NEAREST) obj.filter = "FILTER_NEAREST";
    else if (tex.filter == Texture.FILTER_LINEAR) obj.filter = "FILTER_LINEAR";
    else if (tex.filter == Texture.FILTER_MIPMAP) obj.filter = "FILTER_MIPMAP";
    else obj.filter = "UNKNOWN";

    obj.pixelFormat = tex.pixelFormat || "unknown";

    return obj;
};


Texture.FILTER_NEAREST = 0;
Texture.FILTER_LINEAR = 1;
Texture.FILTER_MIPMAP = 2;

Texture.WRAP_REPEAT = 0;
Texture.WRAP_MIRRORED_REPEAT = 1;
Texture.WRAP_CLAMP_TO_EDGE = 2;

Texture.TYPE_DEFAULT = 0;
Texture.TYPE_DEPTH = 1;
Texture.TYPE_FLOAT = 2;


Texture.PFORMATSTR_RGB565 = "RGB 5/6/5bit ubyte";

Texture.PFORMATSTR_R8UB = "R 8bit ubyte";
Texture.PFORMATSTR_RG8UB = "RG 8bit ubyte";
Texture.PFORMATSTR_RGB8UB = "RGB 8bit ubyte";
Texture.PFORMATSTR_RGBA8UB = "RGBA 8bit ubyte";

Texture.PFORMATSTR_SRGBA8 = "SRGBA 8bit ubyte";

Texture.PFORMATSTR_R11FG11FB10F = "RGB 11/11/10bit float";

Texture.PFORMATSTR_R16F = "R 16bit float";
Texture.PFORMATSTR_RG16F = "RG 16bit float";
Texture.PFORMATSTR_RGB16F = "RGB 16bit float";
Texture.PFORMATSTR_RGBA16F = "RGBA 16bit float";


Texture.PFORMATSTR_R32F = "R 32bit float";
Texture.PFORMATSTR_RG32F = "RG 32bit float";
Texture.PFORMATSTR_RGB32F = "RGB 32bit float";
Texture.PFORMATSTR_RGBA32F = "RGBA 32bit float";

Texture.PFORMATSTR_DEPTH = "DEPTH";


Texture.PIXELFORMATS = [

    Texture.PFORMATSTR_RGB565,

    Texture.PFORMATSTR_R8UB,
    Texture.PFORMATSTR_RG8UB,
    Texture.PFORMATSTR_RGB8UB,
    Texture.PFORMATSTR_RGBA8UB,

    Texture.PFORMATSTR_SRGBA8,

    Texture.PFORMATSTR_R11FG11FB10F,
    Texture.PFORMATSTR_R16F,
    Texture.PFORMATSTR_RG16F,
    Texture.PFORMATSTR_RGBA16F,

    Texture.PFORMATSTR_R32F,
    Texture.PFORMATSTR_RGBA32F

];

Texture.isPixelFormatFloat =
    (pxlfrmt) =>
    {
        return (pxlfrmt || "").contains("float");
    };

Texture.isPixelFormatHalfFloat =
    (pxlfrmt) =>
    {
        return (pxlfrmt || "").contains("float") && (pxlfrmt || "").contains("16bit");
    };






;// CONCATENATED MODULE: ./src/core/cg/cg_boundingbox.js


/**
 * bounding box
 *
 * @namespace external:CGL
 * @param {Geometry} geometry or bounding box
 */
class BoundingBox
{
    constructor(geom)
    {
        this._init();
        this._first = true;
        this._wireMesh = null;

        if (geom) this.apply(geom);
    }

    _init()
    {
        this._max = [-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE];
        this._min = [Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE];
        this._center = [0, 0, 0];
        this._size = [0, 0, 0];
        this._maxAxis = 0.0;
        this._first = true;
    }

    /**
     * get biggest number of maxX,maxY,maxZ
     * @type {Number}
     */
    get maxAxis() { return this._maxAxis || 1; }

    /**
     * size of bounding box
     * @type {vec3}
     */
    get size() { return this._size; }

    /**
     * center of bounding box
     * @type {vec3}
     */
    get center() { return this._center; }

    /**
     * center x
     * @type {Number}
     */
    get x() { return this._center[0]; }

    /**
     * center y
     * @type {Number}
     */
    get y() { return this._center[1]; }

    /**
     * center z
     * @type {Number}
     */
    get z() { return this._center[2]; }


    /**
     * minimum x
     * @type {Number}
     */
    get minX() { return this._min[0]; }

    /**
     * minimum y
     * @type {Number}
     */
    get minY() { return this._min[1]; }

    /**
     * minimum z
     * @type {Number}
     */
    get minZ() { return this._min[2]; }

    /**
     * maximum x
     * @type {Number}
     */
    get maxX() { return this._max[0]; }

    /**
     * maximum y
     * @type {Number}
     */
    get maxY() { return this._max[1]; }

    /**
     * maximum z
     * @type {Number}
     */
    get maxZ() { return this._max[2]; }


    apply(geom, mat)
    {
        if (!geom)
        {
            // console.warn("[boundingbox] no geom/vertices", geom);
            return;
        }

        if (geom instanceof BoundingBox)
        {
            const bb = geom;

            this.applyPos(bb.maxX, bb.maxY, bb.maxZ);
            this.applyPos(bb.minX, bb.minY, bb.minZ);
        }
        else
        {
            for (let i = 0; i < geom.vertices.length; i += 3)
                // if (geom.vertices[i] == geom.vertices[i] || geom.vertices[i] != null)
                // {
            // if(mat)
            // {
                this.applyPos(geom.vertices[i], geom.vertices[i + 1], geom.vertices[i + 2]);
            // }
            // else
            // {
            //     this.applyPos(geom.vertices[i + 0],geom.vertices[i + 1],geom.vertices[i + 2]);
            // }
                // }
        }
        this.calcCenterSize();
    }

    /**
     * returns a copy of the bounding box
     * @function copy
     * @memberof BoundingBox
     * @instance
     */
    copy()
    {
        return new BoundingBox(this);
    }

    get changed()
    {
        return !(this._max[0] == -Number.MAX_VALUE && this._max[1] == -Number.MAX_VALUE && this._max[2] == -Number.MAX_VALUE);
    }

    applyPos(x, y, z)
    {
        if (x == Number.MAX_VALUE || x == -Number.MAX_VALUE ||
            y == Number.MAX_VALUE || y == -Number.MAX_VALUE ||
            z == Number.MAX_VALUE || z == -Number.MAX_VALUE) return;

        if (!CABLES.UTILS.isNumeric(x) || !CABLES.UTILS.isNumeric(y) || !CABLES.UTILS.isNumeric(z)) return;

        if (this._first)
        {
            this._max[0] = x;
            this._max[1] = y;
            this._max[2] = z;

            this._min[0] = x;
            this._min[1] = y;
            this._min[2] = z;
            this._first = false;
            return;
        }

        this._max[0] = Math.max(this._max[0], x);
        this._max[1] = Math.max(this._max[1], y);
        this._max[2] = Math.max(this._max[2], z);

        this._min[0] = Math.min(this._min[0], x);
        this._min[1] = Math.min(this._min[1], y);
        this._min[2] = Math.min(this._min[2], z);
    }

    calcCenterSize()
    {
        if (this._first) return;
        // this._size[0]=Math.abs(this._min[0])+Math.abs(this._max[0]);
        // this._size[1]=Math.abs(this._min[1])+Math.abs(this._max[1]);
        // this._size[2]=Math.abs(this._min[2])+Math.abs(this._max[2]);
        this._size[0] = this._max[0] - this._min[0];
        this._size[1] = this._max[1] - this._min[1];
        this._size[2] = this._max[2] - this._min[2];

        this._center[0] = (this._min[0] + this._max[0]) / 2;
        this._center[1] = (this._min[1] + this._max[1]) / 2;
        this._center[2] = (this._min[2] + this._max[2]) / 2;

        this._maxAxis = Math.max(this._size[2], Math.max(this._size[0], this._size[1]));
    }

    mulMat4(m)
    {
        if (this._first)
        {
            this._max[0] = 0;
            this._max[1] = 0;
            this._max[2] = 0;

            this._min[0] = 0;
            this._min[1] = 0;
            this._min[2] = 0;
            this._first = false;
        }
        vec3.transformMat4(this._max, this._max, m);
        vec3.transformMat4(this._min, this._min, m);
        this.calcCenterSize();
    }

    render(cgl, shader, op)
    {
        if (!this._wireMesh) this._wireMesh = new CGL.WireCube(cgl);

        cgl.pushModelMatrix();
        mat4.translate(cgl.mMatrix, cgl.mMatrix, this._center);

        if (CABLES.UI && op)
        {
            CABLES.UI.OverlayMeshes.drawCube(op, this._size[0] / 2, this._size[1] / 2, this._size[2] / 2);
        }

        cgl.popModelMatrix();
    }
}

;// CONCATENATED MODULE: ./src/core/cg/cg_geom.js
// import { vec2, vec3 } from "gl-matrix";





/**
 * a geometry contains all information about a mesh, vertices, texturecoordinates etc. etc.
 * @namespace external:CGL#Geometry
 * @param {String} name
 * @class
 * @example
 * // create a triangle with all attributes
 * const geom=new Geometry("triangle"),
 *
 * geom.vertices = [
 *      0.0,           sizeH.get(),  0.0,
 *     -sizeW.get(),  -sizeH.get(),  0.0,
 *      sizeW.get(),  -sizeH.get(),  0.0 ];
 *
 * geom.vertexNormals = [
 *      0.0,  0.0,  1.0,
 *      0.0,  0.0,  1.0,
 *      0.0,  0.0,  1.0 ];
 *
 * geom.tangents = [
 *     1,0,0,
 *     1,0,0,
 *     1,0,0 ];
 *
 * geom.biTangents = [
 *     0,1,0,
 *     0,1,0,
 *     0,1,0 ];
 *
 * geom.texCoords = [
 *      0.5,  0.0,
 *      1.0,  1.0,
 *      0.0,  1.0, ];
 *
 * geom.verticesIndices = [
 *     0, 1, 2 ];
 *
 */
const Geometry = function (name)
{
    this.name = name || "unknown";
    this._log = new Logger("cgl_geometry");

    this.faceVertCount = 3;
    this.glPrimitive = null;
    this._attributes = {};

    this._vertices = [];
    this.verticesIndices = [];

    this.isGeometry = true;

    this.morphTargets = [];

    Object.defineProperty(this, "vertices", {
        get()
        {
            return this._vertices;
        },
        set(v)
        {
            this.setVertices(v);
        },
    });

    Object.defineProperty(this, "texCoords", {
        get()
        {
            const att = this.getAttribute("texCoords");
            if (!att) return [];
            return att.data;
        },
        set(v)
        {
            this.setAttribute("texCoords", v, 2);
        },
    });

    Object.defineProperty(this, "vertexNormals", {
        get()
        {
            const att = this.getAttribute("vertexNormals");
            if (!att) return [];
            return att.data;
        },
        set(v)
        {
            this.setAttribute("vertexNormals", v, 3);
        },
    });

    Object.defineProperty(this, "tangents", {
        get()
        {
            const att = this.getAttribute("tangents");
            if (!att) return [];
            return att.data;
        },
        set(v)
        {
            this.setAttribute("tangents", v, 3);
        },
    });

    Object.defineProperty(this, "biTangents", {
        get()
        {
            const att = this.getAttribute("biTangents");
            if (!att) return [];
            return att.data;
        },
        set(v)
        {
            this.setAttribute("biTangents", v, 3);
        },
    });

    Object.defineProperty(this, "vertexColors", {
        get()
        {
            const att = this.getAttribute("vertexColors");
            if (!att) return [];
            return att.data;
        },
        set(v)
        {
            this.setAttribute("vertexColors", v, 4);
        },
    });
};

/**
 * @function clear
 * @memberof Geometry
 * @instance
 * @description clear all buffers/set them to length 0
 */
Geometry.prototype.clear = function ()
{
    this._vertices = new Float32Array([]);
    this.verticesIndices = [];
    this.texCoords = new Float32Array([]);
    this.vertexNormals = new Float32Array([]);
    this.tangents = [];
    this.biTangents = [];
    this._attributes = {};
};



/**
 * @function getAttributes
   @memberof Geometry
 * @instance
 * @return {Array<Object>} returns array of attribute objects
 */
Geometry.prototype.getAttributes = function ()
{
    return this._attributes;
};

/**
 * @function getAttribute
 * @memberof Geometry
 * @instance
 * @param {String} name
 * @return {Object}
 */
Geometry.prototype.getAttribute = function (name)
{
    for (const i in this._attributes)
    {
        if (this._attributes[i].name == name) return this._attributes[i];
    }
    return null;
};

/**
 * @function setAttribute
 * @description create an attribute
 * @memberof Geometry
 * @instance
 * @param {String} name
 * @param {Array} arr
 * @param {Number} itemSize
 */
Geometry.prototype.setAttribute = function (name, arr, itemSize)
{
    let attrType = "";
    if (!itemSize || itemSize > 4)
    {
        console.log("itemsize wrong?", itemSize, name);
        this._log.stack("itemsize");

        itemSize = 3;
    }

    if (itemSize == 1) attrType = "float";
    else if (itemSize == 2) attrType = "vec2";
    else if (itemSize == 3) attrType = "vec3";
    else if (itemSize == 4) attrType = "vec4";


    const attr = {
        "name": name,
        "data": arr,
        "itemSize": itemSize,
        "type": attrType,
    };

    this._attributes[name] = attr;
};

Geometry.prototype.copyAttribute = function (name, newgeom)
{
    const attr = this.getAttribute(name);
    newgeom.setAttribute(name, new Float32Array(attr.data), attr.itemSize);
};


/**
 * @function setVertices
 * @memberof Geometry
 * @instance
 * @description set vertices
 * @param {Array|Float32Array} arr [x,y,z,x,y,z,...]
 */
Geometry.prototype.setVertices = function (arr)
{
    if (arr instanceof Float32Array) this._vertices = arr;
    else this._vertices = new Float32Array(arr);
};

/**
 * @function setTexCoords
 * @memberof Geometry
 * @instance
 * @description set texcoords
 * @param {Array|Float32Array} arr [u,v,u,v,...]
 */
Geometry.prototype.setTexCoords = function (arr)
{
    if (arr instanceof Float32Array) this.texCoords = arr;
    else this.texCoords = new Float32Array(arr);
};

// Geometry.prototype.testIndices = function ()
// {
//     var foundError = false;
//     for (var i = 0; i < this.verticesIndices.length; i++)
//     {
//         if (this.verticesIndices[i * 3 + 0] >= this._vertices.length / 3 || this.verticesIndices[i * 3 + 1] >= this._vertices.length / 3 || this.verticesIndices[i * 3 + 2] >= this._vertices.length / 3)
//         {
//             foundError = true;
//             console.log("index error!");
//         }
//     }
// };

// deprecated
Geometry.prototype.calcNormals = function (smooth)
{
    const options = { "smooth": smooth };


    this.calculateNormals(options);
};

/**
 * @function flipNormals
 * @memberof Geometry
 * @param x
 * @param y
 * @param z
 * @description flip normals
 */
Geometry.prototype.flipNormals = function (x, y, z)
{
    let vec = vec3.create();

    if (x == undefined)x = 1;
    if (y == undefined)y = 1;
    if (z == undefined)z = 1;


    for (let i = 0; i < this.vertexNormals.length; i += 3)
    {
        vec3.set(vec,
            this.vertexNormals[i + 0],
            this.vertexNormals[i + 1],
            this.vertexNormals[i + 2]);

        vec[0] *= -x;
        vec[1] *= -y;
        vec[2] *= -z;

        vec3.normalize(vec, vec);

        this.vertexNormals[i + 0] = vec[0];
        this.vertexNormals[i + 1] = vec[1];
        this.vertexNormals[i + 2] = vec[2];
    }
};

Geometry.prototype.getNumTriangles = function ()
{
    if (this.verticesIndices && this.verticesIndices.length) return this.verticesIndices.length / 3;
    return this.vertices.length / 3;
};


/**
 * @function flipVertDir
 * @memberof Geometry
 * @description flip order of vertices in geom faces
 */
Geometry.prototype.flipVertDir = function ()
{
    const newInd = [];
    newInd.length = this.verticesIndices.length;
    for (let i = 0; i < this.verticesIndices.length; i += 3)
    {
        newInd[i] = this.verticesIndices[i + 2];
        newInd[i + 1] = this.verticesIndices[i + 1];
        newInd[i + 2] = this.verticesIndices[i];
    }
    this.verticesIndices = newInd;
};


Geometry.prototype.setPointVertices = function (verts)
{
    if (verts.length % 3 !== 0)
    {
        this._log.error("SetPointVertices: Array must be multiple of three.");
        return;
    }

    if (!(verts instanceof Float32Array)) this.vertices = new Float32Array(verts);
    else this.vertices = verts;

    if (!(this.texCoords instanceof Float32Array)) this.texCoords = new Float32Array((verts.length / 3) * 2);

    // this.texCoords.length=verts.length/3*2;
    this.verticesIndices.length = verts.length / 3;
    // this.verticesIndices=[];

    for (let i = 0; i < verts.length / 3; i++)
    {
        this.verticesIndices[i] = i;
        this.texCoords[i * 2] = 0;
        this.texCoords[i * 2 + 1] = 0;
    }
};

/**
 * merge a different geometry into the this geometry
 * @function merge
 * @param {Geometry} geom
 * @memberof Geometry
 * @instance
 */
Geometry.prototype.merge = function (geom)
{
    if (!geom) return;

    if (this.isIndexed() != geom.isIndexed())
    {
        if (this.isIndexed())
        {
            this.unIndex(false, true);
        }
        if (geom.isIndexed())
        {
            const g = geom.copy();
            g.unIndex(false, true);
            geom = g;
        }
    }

    const oldIndizesLength = this.verticesIndices.length;
    const vertLength = this._vertices.length / 3;

    this.verticesIndices.length += geom.verticesIndices.length;
    for (let i = 0; i < geom.verticesIndices.length; i++)
        this.verticesIndices[oldIndizesLength + i] = geom.verticesIndices[i] + vertLength;

    this.vertices = UTILS.float32Concat(this._vertices, geom.vertices);
    this.texCoords = UTILS.float32Concat(this.texCoords, geom.texCoords);
    this.vertexNormals = UTILS.float32Concat(this.vertexNormals, geom.vertexNormals);
    this.tangents = UTILS.float32Concat(this.tangents, geom.tangents);
    this.biTangents = UTILS.float32Concat(this.biTangents, geom.biTangents);
};

/**
 *   a copy of the geometry
 * @function copy
 * @memberof Geometry
 * @instance
 */
Geometry.prototype.copy = function ()
{
    const geom = new Geometry(this.name + " copy");
    geom.faceVertCount = this.faceVertCount;
    geom.glPrimitive = this.glPrimitive;

    geom.setVertices(this._vertices.slice(0));

    if (this.verticesIndices)
    {
        geom.verticesIndices.length = this.verticesIndices.length;
        for (let i = 0; i < this.verticesIndices.length; i++) geom.verticesIndices[i] = this.verticesIndices[i];
    }

    for (let i in this._attributes) this.copyAttribute(i, geom);

    geom.morphTargets.length = this.morphTargets.length;
    for (let i = 0; i < this.morphTargets.length; i++) geom.morphTargets[i] = this.morphTargets[i];

    return geom;
};

/**
 * Calculaten normals
 * @function calculateNormals
 * @memberof Geometry
 * @param options
 * @instance
 */
Geometry.prototype.calculateNormals = function (options)
{
    // todo: should check angle of normals to get edges    https://community.khronos.org/t/calculating-accurate-vertex-normals/28152
    options = options || {};
    if (options.smooth === false) this.unIndex();

    const u = vec3.create();
    const v = vec3.create();
    const n = vec3.create();

    function calcNormal(triangle)
    {
        vec3.subtract(u, triangle[0], triangle[1]);
        vec3.subtract(v, triangle[0], triangle[2]);
        vec3.cross(n, u, v);
        vec3.normalize(n, n);

        if (options && options.forceZUp)
        {
            if (n[2] < 0)
            {
                n[0] *= -1;
                n[1] *= -1;
                n[2] *= -1;
            }
        }
        return n;
    }

    this.getVertexVec = function (which)
    {
        const vec = [0, 0, 0];
        vec[0] = this.vertices[which * 3 + 0];
        vec[1] = this.vertices[which * 3 + 1];
        vec[2] = this.vertices[which * 3 + 2];
        return vec;
    };

    if (!(this.vertexNormals instanceof Float32Array) || this.vertexNormals.length != this.vertices.length) this.vertexNormals = new Float32Array(this.vertices.length);

    for (let i = 0; i < this.vertices.length; i++)
    {
        this.vertexNormals[i] = 0;
    }

    if (!this.isIndexed())
    {
        const norms = [];
        for (let i = 0; i < this.vertices.length; i += 9)
        {
            const triangle = [[this.vertices[i + 0], this.vertices[i + 1], this.vertices[i + 2]], [this.vertices[i + 3], this.vertices[i + 4], this.vertices[i + 5]], [this.vertices[i + 6], this.vertices[i + 7], this.vertices[i + 8]]];
            const nn = calcNormal(triangle);
            norms.push(nn[0], nn[1], nn[2], nn[0], nn[1], nn[2], nn[0], nn[1], nn[2]);
        }
        this.vertexNormals = norms;
    }
    else
    {
        const faceNormals = [];

        faceNormals.length = Math.floor(this.verticesIndices.length / 3);

        for (let i = 0; i < this.verticesIndices.length; i += 3)
        {
            const triangle = [this.getVertexVec(this.verticesIndices[i + 0]), this.getVertexVec(this.verticesIndices[i + 1]), this.getVertexVec(this.verticesIndices[i + 2])];

            faceNormals[i / 3] = calcNormal(triangle);

            this.vertexNormals[this.verticesIndices[i + 0] * 3 + 0] += faceNormals[i / 3][0];
            this.vertexNormals[this.verticesIndices[i + 0] * 3 + 1] += faceNormals[i / 3][1];
            this.vertexNormals[this.verticesIndices[i + 0] * 3 + 2] += faceNormals[i / 3][2];

            this.vertexNormals[this.verticesIndices[i + 1] * 3 + 0] += faceNormals[i / 3][0];
            this.vertexNormals[this.verticesIndices[i + 1] * 3 + 1] += faceNormals[i / 3][1];
            this.vertexNormals[this.verticesIndices[i + 1] * 3 + 2] += faceNormals[i / 3][2];

            this.vertexNormals[this.verticesIndices[i + 2] * 3 + 0] += faceNormals[i / 3][0];
            this.vertexNormals[this.verticesIndices[i + 2] * 3 + 1] += faceNormals[i / 3][1];
            this.vertexNormals[this.verticesIndices[i + 2] * 3 + 2] += faceNormals[i / 3][2];
        }


        for (let i = 0; i < this.verticesIndices.length; i += 3) // faces
        {
            for (let k = 0; k < 3; k++) // triangles
            {
                const vv = [this.vertexNormals[this.verticesIndices[i + k] * 3 + 0], this.vertexNormals[this.verticesIndices[i + k] * 3 + 1], this.vertexNormals[this.verticesIndices[i + k] * 3 + 2]];
                vec3.normalize(vv, vv);
                this.vertexNormals[this.verticesIndices[i + k] * 3 + 0] = vv[0];
                this.vertexNormals[this.verticesIndices[i + k] * 3 + 1] = vv[1];
                this.vertexNormals[this.verticesIndices[i + k] * 3 + 2] = vv[2];
            }
        }
    }
};

/**
 * Calculates tangents & bitangents with the help of uv-coordinates. Adapted from
 * Lengyel, Eric. “Computing Tangent Space Basis Vectors for an Arbitrary Mesh”.
 * Terathon Software 3D Graphics Library.
 * https://fenix.tecnico.ulisboa.pt/downloadFile/845043405449073/Tangent%20Space%20Calculation.pdf
 *
 * @function calcTangentsBitangents
 * @memberof Geometry
 * @instance
 */
Geometry.prototype.calcTangentsBitangents = function ()
{
    if (!this.vertices.length)
    {
        // this._log.error("Cannot calculate tangents/bitangents without vertices.");
        return;
    }
    if (!this.vertexNormals.length)
    {
        // this._log.error("Cannot calculate tangents/bitangents without normals.");
        return;
    }
    if (!this.texCoords.length)
    {
        // console.warn("No texcoords. Replacing with default values [0, 0].");
        const texCoordLength = (this.vertices.length / 3) * 2;
        this.texCoords = new Float32Array(texCoordLength);
        for (let i = 0; i < texCoordLength; i += 1) this.texCoords[i] = 0;
    }
    if (!this.verticesIndices || !this.verticesIndices.length)
    {
        // this._log.error("Cannot calculate tangents/bitangents without vertex indices.");
        return;
    }
    // this code assumes that we have three indices per triangle
    if (this.verticesIndices.length % 3 !== 0)
    {
        this._log.error("Vertex indices mismatch!");
        return;
    }

    const triangleCount = this.verticesIndices.length / 3;
    const vertexCount = this.vertices.length / 3;

    this.tangents = new Float32Array(this.vertexNormals.length);
    this.biTangents = new Float32Array(this.vertexNormals.length);

    // temporary buffers
    const tempVertices = [];
    tempVertices.length = vertexCount * 2;
    const v1 = vec3.create();
    const v2 = vec3.create();
    const v3 = vec3.create();

    const w1 = vec2.create();
    const w2 = vec2.create();
    const w3 = vec2.create();

    const sdir = vec3.create();
    const tdir = vec3.create();

    // for details on calculation, see article referenced above
    for (let tri = 0; tri < triangleCount; tri += 1)
    {
        // indices of the three vertices for a triangle
        const i1 = this.verticesIndices[tri * 3];
        const i2 = this.verticesIndices[tri * 3 + 1];
        const i3 = this.verticesIndices[tri * 3 + 2];

        // vertex position as vec3
        vec3.set(v1, this.vertices[i1 * 3], this.vertices[i1 * 3 + 1], this.vertices[i1 * 3 + 2]);
        vec3.set(v2, this.vertices[i2 * 3], this.vertices[i2 * 3 + 1], this.vertices[i2 * 3 + 2]);
        vec3.set(v3, this.vertices[i3 * 3], this.vertices[i3 * 3 + 1], this.vertices[i3 * 3 + 2]);

        // texture coordinate as vec2
        vec2.set(w1, this.texCoords[i1 * 2], this.texCoords[i1 * 2 + 1]);
        vec2.set(w2, this.texCoords[i2 * 2], this.texCoords[i2 * 2 + 1]);
        vec2.set(w3, this.texCoords[i3 * 2], this.texCoords[i3 * 2 + 1]);

        const x1 = v2[0] - v1[0];
        const x2 = v3[0] - v1[0];
        const y1 = v2[1] - v1[1];
        const y2 = v3[1] - v1[1];
        const z1 = v2[2] - v1[2];
        const z2 = v3[2] - v1[2];

        const s1 = w2[0] - w1[0];
        const s2 = w3[0] - w1[0];
        const t1 = w2[1] - w1[1];
        const t2 = w3[1] - w1[1];

        const r = 1.0 / (s1 * t2 - s2 * t1);

        vec3.set(sdir, (t2 * x1 - t1 * x2) * r, (t2 * y1 - t1 * y2) * r, (t2 * z1 - t1 * z2) * r);
        vec3.set(tdir, (s1 * x2 - s2 * x1) * r, (s1 * y2 - s2 * y1) * r, (s1 * z2 - s2 * z1) * r);

        tempVertices[i1] = sdir;
        tempVertices[i2] = sdir;
        tempVertices[i3] = sdir;

        tempVertices[i1 + vertexCount] = tdir;
        tempVertices[i2 + vertexCount] = tdir;
        tempVertices[i3 + vertexCount] = tdir;
    }

    const normal = vec3.create();
    const tempVert = vec3.create();
    const tan = vec3.create();
    const bitan = vec3.create();
    const temp1 = vec3.create();
    const temp2 = vec3.create();
    const crossPd = vec3.create();
    const normalized = vec3.create();

    for (let vert = 0; vert < vertexCount; vert += 1)
    {
        // NOTE: some meshes don't have index 0 - n in their indexbuffer, if this is the case, skip calculation of this vertex
        if (!tempVertices[vert]) continue;

        vec3.set(normal, this.vertexNormals[vert * 3], this.vertexNormals[vert * 3 + 1], this.vertexNormals[vert * 3 + 2]);
        vec3.set(tempVert, tempVertices[vert][0], tempVertices[vert][1], tempVertices[vert][2]);

        // Gram-Schmidt orthagonalize
        const _dp = vec3.dot(normal, tempVert);
        vec3.scale(temp1, normal, _dp);
        vec3.subtract(temp2, tempVert, temp1);

        vec3.normalize(normalized, temp2);
        vec3.cross(crossPd, normal, tempVert);

        // const intermDot = vec3.dot(crossPd, tempVertices[vert + vertexCount]);
        const w = 1.0;// intermDot < 0.0 ? -1.0 : 1.0;

        vec3.scale(tan, normalized, 1 / w);
        vec3.cross(bitan, normal, tan);

        this.tangents[vert * 3 + 0] = tan[0];
        this.tangents[vert * 3 + 1] = tan[1];
        this.tangents[vert * 3 + 2] = tan[2];
        this.biTangents[vert * 3 + 0] = bitan[0];
        this.biTangents[vert * 3 + 1] = bitan[1];
        this.biTangents[vert * 3 + 2] = bitan[2];
    }
};

Geometry.prototype.isIndexed = function ()
{
    if (this._vertices.length == 0) return true;
    return this.verticesIndices.length != 0;
};

/**
 * @function unIndex
 * @memberof Geometry
 * @instance
 * @description remove all vertex indizes, vertices array will contain 3*XYZ for every triangle
 * @param {boolean} reIndex
 * @param {boolean} dontCalcNormals
 */
Geometry.prototype.unIndex = function (reIndex, dontCalcNormals)
{
    const newVerts = [];
    const newIndizes = [];
    let count = 0;

    for (let j in this._attributes)
    {
        const attr = this._attributes[j];
        let na = [];

        for (let i = 0; i < this.verticesIndices.length; i += 3)
        {
            for (let s = 0; s < 3; s++)
            {
                if (attr.itemSize == 3)
                    na.push(
                        attr.data[this.verticesIndices[i + s] * 3 + 0],
                        attr.data[this.verticesIndices[i + s] * 3 + 1],
                        attr.data[this.verticesIndices[i + s] * 3 + 2]);
                else if (attr.itemSize == 4)
                    na.push(
                        attr.data[this.verticesIndices[i + s] * 4 + 0],
                        attr.data[this.verticesIndices[i + s] * 4 + 1],
                        attr.data[this.verticesIndices[i + s] * 4 + 2],
                        attr.data[this.verticesIndices[i + s] * 4 + 3]);
                else if (attr.itemSize == 2)
                    na.push(
                        attr.data[this.verticesIndices[i + s] * 2 + 0],
                        attr.data[this.verticesIndices[i + s] * 2 + 1]);
                else if (attr.itemSize == 1)
                    na.push(
                        attr.data[this.verticesIndices[i + s]]);
                else console.log("unknown attr", attr);
            }
        }
        this.setAttribute(attr.name, na, attr.itemSize);
    }

    for (let i = 0; i < this.verticesIndices.length; i += 3)
    {
        newVerts.push(
            this.vertices[this.verticesIndices[i + 0] * 3 + 0],
            this.vertices[this.verticesIndices[i + 0] * 3 + 1],
            this.vertices[this.verticesIndices[i + 0] * 3 + 2]);

        newIndizes.push(count);
        count++;

        newVerts.push(
            this.vertices[this.verticesIndices[i + 1] * 3 + 0],
            this.vertices[this.verticesIndices[i + 1] * 3 + 1],
            this.vertices[this.verticesIndices[i + 1] * 3 + 2]);

        newIndizes.push(count);
        count++;

        newVerts.push(
            this.vertices[this.verticesIndices[i + 2] * 3 + 0],
            this.vertices[this.verticesIndices[i + 2] * 3 + 1],
            this.vertices[this.verticesIndices[i + 2] * 3 + 2]);

        newIndizes.push(count);
        count++;
    }

    this.vertices = newVerts;

    this.verticesIndices = [];
    if (reIndex) this.verticesIndices = newIndizes;

    if (!dontCalcNormals) this.calculateNormals();
};

Geometry.prototype.calcBarycentric = function ()
{
    let barycentrics = [];
    barycentrics.length = this.vertices.length;
    for (let i = 0; i < this.vertices.length; i++) barycentrics[i] = 0;

    let count = 0;
    for (let i = 0; i < this.vertices.length; i += 3)
    {
        barycentrics[i + count] = 1;
        count++;
        if (count == 3) count = 0;
    }

    this.setAttribute("attrBarycentric", barycentrics, 3);
};

Geometry.prototype.getBounds = function ()
{
    return new BoundingBox(this);
};

Geometry.prototype.center = function (x, y, z)
{
    if (x === undefined)
    {
        x = true;
        y = true;
        z = true;
    }

    let i = 0;
    const bounds = this.getBounds();
    const offset = [bounds.minX + (bounds.maxX - bounds.minX) / 2, bounds.minY + (bounds.maxY - bounds.minY) / 2, bounds.minZ + (bounds.maxZ - bounds.minZ) / 2];

    for (i = 0; i < this.vertices.length; i += 3)
    {
        if (this.vertices[i + 0] == this.vertices[i + 0])
        {
            if (x) this.vertices[i + 0] -= offset[0];
            if (y) this.vertices[i + 1] -= offset[1];
            if (z) this.vertices[i + 2] -= offset[2];
        }
    }

    return offset;
};

Geometry.prototype.mapTexCoords2d = function ()
{
    const bounds = this.getBounds();
    const num = this.vertices.length / 3;

    this.texCoords = new Float32Array(num * 2);

    for (let i = 0; i < num; i++)
    {
        const vertX = this.vertices[i * 3 + 0];
        const vertY = this.vertices[i * 3 + 1];
        this.texCoords[i * 2 + 0] = vertX / (bounds.maxX - bounds.minX) + 0.5;
        this.texCoords[i * 2 + 1] = 1.0 - vertY / (bounds.maxY - bounds.minY) + 0.5;
    }
};


Geometry.prototype.getInfoOneLine = function ()
{
    let txt = "";
    if (this.faceVertCount == 3 && this.verticesIndices)txt += this.verticesIndices.length / 3;
    else txt += 0;

    txt += " tris ";

    if (this.vertices)txt += this.vertices.length / 3;
    else txt += 0;

    txt += " verts";

    return txt;
};

Geometry.prototype.getInfo = function ()
{
    const info = {};

    if (this.faceVertCount == 3 && this.verticesIndices)info.numFaces = this.verticesIndices.length / 3;
    else info.numFaces = 0;

    if (this.verticesIndices && this.verticesIndices.length)info.indices = this.verticesIndices.length;

    if (this.vertices)info.numVerts = this.vertices.length / 3;
    else info.numVerts = 0;

    if (this.vertexNormals) info.numNormals = this.vertexNormals.length / 3;
    else info.numNormals = 0;

    if (this.texCoords) info.numTexCoords = this.texCoords.length / 2;
    else info.numTexCoords = 0;

    if (this.tangents) info.numTangents = this.tangents.length / 3;
    else info.numTangents = 0;

    if (this.biTangents) info.numBiTangents = this.biTangents.length / 3;
    else info.numBiTangents = 0;

    if (this.biTangents) info.numBiTangents = this.biTangents.length / 3;
    else info.numBiTangents = 0;

    if (this.vertexColors) info.numVertexColors = this.vertexColors.length / 4;
    else info.numVertexColors = 0;

    if (this.getAttributes()) info.numAttribs = Object.keys(this.getAttributes()).length;
    else info.numAttribs = 0;

    info.isIndexed = this.isIndexed();

    return info;
};

// -----------------

// TODO : move this into "old" circle op
Geometry.buildFromFaces = function (arr, name, optimize)
{
    const vertices = [];
    const verticesIndices = [];

    for (let i = 0; i < arr.length; i += 3)
    {
        const a = arr[i + 0];
        const b = arr[i + 1];
        const c = arr[i + 2];
        const face = [-1, -1, -1];

        if (optimize)
            for (let iv = 0; iv < vertices.length; iv += 3)
            {
                if (vertices[iv + 0] == a[0] && vertices[iv + 1] == a[1] && vertices[iv + 2] == a[2]) face[0] = iv / 3;
                if (vertices[iv + 0] == b[0] && vertices[iv + 1] == b[1] && vertices[iv + 2] == b[2]) face[1] = iv / 3;
                if (vertices[iv + 0] == c[0] && vertices[iv + 1] == c[1] && vertices[iv + 2] == c[2]) face[2] = iv / 3;
            }

        if (face[0] == -1)
        {
            vertices.push(a[0], a[1], a[2]);
            face[0] = (vertices.length - 1) / 3;
        }

        if (face[1] == -1)
        {
            vertices.push(b[0], b[1], b[2]);
            face[1] = (vertices.length - 1) / 3;
        }

        if (face[2] == -1)
        {
            vertices.push(c[0], c[1], c[2]);
            face[2] = (vertices.length - 1) / 3;
        }

        verticesIndices.push(parseInt(face[0], 10));
        verticesIndices.push(parseInt(face[1], 10));
        verticesIndices.push(parseInt(face[2], 10));
    }

    const geom = new Geometry(name);
    geom.name = name;
    geom.vertices = vertices;
    geom.verticesIndices = verticesIndices;

    return geom;
};

// TODO: not needed anymore ?! move to deprecated ops?
Geometry.json2geom = function (jsonMesh)
{
    const geom = new Geometry("jsonMeshGeom");
    geom.verticesIndices = [];

    geom.vertices = jsonMesh.vertices || [];
    geom.vertexNormals = jsonMesh.normals || [];
    geom.vertexColors = jsonMesh.colors || [];
    geom.tangents = jsonMesh.tangents || [];
    geom.biTangents = jsonMesh.bitangents || [];
    if (jsonMesh.texturecoords) geom.setTexCoords(jsonMesh.texturecoords[0]);

    if (jsonMesh.vertices_b64)geom.vertices = new Float32Array(b64decTypedArray(jsonMesh.vertices_b64));
    if (jsonMesh.normals_b64) geom.vertexNormals = new Float32Array(b64decTypedArray(jsonMesh.normals_b64));
    if (jsonMesh.tangents_b64) geom.tangents = new Float32Array(b64decTypedArray(jsonMesh.tangents_b64));
    if (jsonMesh.bitangents_b64) geom.biTangents = new Float32Array(b64decTypedArray(jsonMesh.bitangents_b64));
    if (jsonMesh.texturecoords_b64) geom.setTexCoords(new Float32Array(b64decTypedArray(jsonMesh.texturecoords_b64[0])));

    if (jsonMesh.faces_b64)
    {
        geom.verticesIndices = new Uint32Array(b64decTypedArray(jsonMesh.faces_b64));
    }
    else
    {
        geom.verticesIndices.length = jsonMesh.faces.length * 3;
        for (let i = 0; i < jsonMesh.faces.length; i++)
        {
            geom.verticesIndices[i * 3] = jsonMesh.faces[i][0];
            geom.verticesIndices[i * 3 + 1] = jsonMesh.faces[i][1];
            geom.verticesIndices[i * 3 + 2] = jsonMesh.faces[i][2];
        }
    }

    return geom;
};




;// CONCATENATED MODULE: ./src/core/cgl/cgl_mesh_feedback.js
// view-source:http://toji.github.io/webgl2-particles-2/

function extendMeshWithFeedback(Mesh)
{
    Mesh.prototype.hasFeedbacks = function ()
    {
        return this._feedBacks.length > 0;
    };

    Mesh.prototype.removeFeedbacks = function (shader)
    {
        if (!this._feedbacks) return;
        this._feedbacks.length = 0;
        this._feedBacksChanged = true;
    };

    Mesh.prototype.setAttributeFeedback = function () {};

    Mesh.prototype.setFeedback = function (attrib, nameOut, initialArr)
    {
        let fb = { nameOut, };
        let found = false;
        this.unBindFeedbacks();

        for (let i = 0; i < this._feedBacks.length; i++)
        {
            if (this._feedBacks[i].nameOut == nameOut)
            {
                fb = this._feedBacks[i];

                found = true;
            }
        }

        if (!found) this._feedBacksChanged = true;

        fb.initialArr = initialArr;
        fb.attrib = attrib;

        // console.log("setfeedback");

        if (fb.outBuffer) this._cgl.gl.deleteBuffer(fb.outBuffer);
        // if(fb.attrib.buffer)this._cgl.gl.deleteBuffer(fb.attrib.buffer);
        fb.outBuffer = this._cgl.gl.createBuffer();
        this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, fb.outBuffer);
        this._cgl.gl.bufferData(this._cgl.gl.ARRAY_BUFFER, fb.initialArr, this._cgl.gl.STATIC_DRAW);

        this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, fb.attrib.buffer);
        this._cgl.gl.bufferData(this._cgl.gl.ARRAY_BUFFER, fb.initialArr, this._cgl.gl.STATIC_DRAW);

        if (!found) this._feedBacks.push(fb);

        // console.log('initialArr',initialArr.length/3);
        // console.log('vertices',fb.attrib.numItems);
        // console.log('vertices',this._bufVertexAttrib.numItems);

        return fb;
    };

    Mesh.prototype.bindFeedback = function (attrib)
    {
        if (!this._feedBacks || this._feedBacks.length === 0) return;
        if (this._transformFeedBackLoc == -1) this._transformFeedBackLoc = this._cgl.gl.createTransformFeedback();

        this._cgl.gl.bindTransformFeedback(this._cgl.gl.TRANSFORM_FEEDBACK, this._transformFeedBackLoc);

        let found = false;

        for (let i = 0; i < this._feedBacks.length; i++)
        {
            const fb = this._feedBacks[i];

            if (fb.attrib == attrib)
            {
                found = true;
                // this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, fb.attrib.buffer);
                //
                // this._cgl.gl.vertexAttribPointer(
                //     fb.attrib.loc,
                //     fb.attrib.itemSize,
                //     fb.attrib.type,
                //     false,
                //     fb.attrib.itemSize*4, 0);

                this._cgl.gl.bindBufferBase(this._cgl.gl.TRANSFORM_FEEDBACK_BUFFER, i, fb.outBuffer);
            }
        }

        if (!found)
        {
            // console.log("ARTTRIB NOT FOUND",attrib.name);
        }
    };

    Mesh.prototype.drawFeedbacks = function (shader, prim)
    {
        let i = 0;

        if (this._feedBacksChanged)
        {
            const names = [];
            this._cgl.gl.bindTransformFeedback(this._cgl.gl.TRANSFORM_FEEDBACK, this._transformFeedBackLoc);

            for (i = 0; i < this._feedBacks.length; i++) names.push(this._feedBacks[i].nameOut);
            shader.setFeedbackNames(names);

            console.log("feedbacknames", names);

            shader.compile();
            this._feedBacksChanged = false;
            this._cgl.gl.bindTransformFeedback(this._cgl.gl.TRANSFORM_FEEDBACK, null);
            console.log("changed finished");
            return;
        }

        //
        // for( i=0;i<this._feedBacks.length;i++)
        // {
        //     var fb=this._feedBacks[i];
        //
        //     this._cgl.gl.bindBufferBase(this._cgl.gl.TRANSFORM_FEEDBACK_BUFFER, i, fb.outBuffer);
        // }

        // draw
        this._cgl.gl.beginTransformFeedback(this.glPrimitive);
        this._cgl.gl.drawArrays(prim, 0, this._feedBacks[0].attrib.numItems);

        // unbind
        this._cgl.gl.endTransformFeedback();

        this.unBindFeedbacks();

        this.feedBacksSwapBuffers();
    };

    Mesh.prototype.unBindFeedbacks = function ()
    {
        for (let i = 0; i < this._feedBacks.length; i++)
        {
            // this._cgl.gl.disableVertexAttribArray(this._feedBacks[i].attrib.loc);
            this._cgl.gl.bindBufferBase(this._cgl.gl.TRANSFORM_FEEDBACK_BUFFER, i, null);
        }

        this._cgl.gl.bindTransformFeedback(this._cgl.gl.TRANSFORM_FEEDBACK, null);
    };

    Mesh.prototype.feedBacksSwapBuffers = function ()
    {
        for (let i = 0; i < this._feedBacks.length; i++)
        {
            const t = this._feedBacks[i].attrib.buffer;
            this._feedBacks[i].attrib.buffer = this._feedBacks[i].outBuffer;
            this._feedBacks[i].outBuffer = t;
        }
    };
}

;// CONCATENATED MODULE: ./src/core/cgl/cgl_mesh.js





const MESH = {};
MESH.lastMesh = null;

/**
 * webgl renderable 3d object
 * @class
 * @namespace external:CGL
 * @hideconstructor
 * @param {Context} _cgl cgl
 * @param {Geometry} __geom geometry
 * @param {Number} _options glPrimitive
 * @example
 * const cgl=this._cgl
 * const mesh=new CGL.Mesh(cgl, geometry);
 *
 * function render()
 * {
 *   mesh.render(cgl.getShader());
 * }
 */
const Mesh = function (_cgl, __geom, _options)
{
    this._cgl = _cgl;

    let options = _options || {};
    if (CABLES.UTILS.isNumeric(options))options = { "glPrimitive": _options }; // old constructor fallback...
    this._log = new Logger("cgl_mesh");
    this._bufVertexAttrib = null;
    this._bufVerticesIndizes = this._cgl.gl.createBuffer();
    this._indexType = this._cgl.gl.UNSIGNED_SHORT;
    this._attributes = [];
    this._attribLocs = {};
    this._geom = null;
    this._lastShader = null;
    this._numInstances = 0;
    this._glPrimitive = options.glPrimitive;

    this.opId = options.opId || "";
    this._preWireframeGeom = null;
    this.addVertexNumbers = false;
    this._name = "unknown";

    this.feedBackAttributes = [];
    this.setGeom(__geom);

    this._feedBacks = [];
    this._feedBacksChanged = false;
    this._transformFeedBackLoc = -1;
    this._lastAttrUpdate = 0;

    this.memFreed = false;

    this._cgl.profileData.addHeavyEvent("mesh constructed", this._name);

    this._queryExt = null;

    Object.defineProperty(this, "numInstances", {
        get()
        {
            return this._numInstances;
        },
        set(v)
        {
            this.setNumInstances(v);
        },
    });
};

Mesh.prototype.freeMem = function ()
{
    this.memFreed = true;

    for (let i = 0; i < this._attributes.length; i++)
    {
        this._attributes[i].floatArray = null;
    }
};

/**
 * @function updateVertices
 * @memberof Mesh
 * @instance
 * @description update vertices only from a geometry
 * @param {Geometry} geom
 */
Mesh.prototype.updateVertices = function (geom)
{
    this.setAttribute(constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_POSITION, geom.vertices, 3);
    this._numVerts = geom.vertices.length / 3;
};

Mesh.prototype.setAttributePointer = function (attrName, name, stride, offset)
{
    for (let i = 0; i < this._attributes.length; i++)
    {
        if (this._attributes[i].name == attrName)
        {
            if (!this._attributes[i].pointer) this._attributes[i].pointer = [];

            this._attributes[i].pointer.push(
                {
                    "loc": -1,
                    "name": name,
                    "stride": stride,
                    "offset": offset,
                    "instanced": attrName == constants_CONSTANTS.SHADER.SHADERVAR_INSTANCE_MMATRIX,
                }
            );
        }
    }
};

Mesh.prototype.getAttribute = function (name)
{
    for (let i = 0; i < this._attributes.length; i++) if (this._attributes[i].name == name) return this._attributes[i];
};

Mesh.prototype.setAttributeRange = function (attr, array, start, end)
{
    if (!attr) return;
    if (!start && !end) return;

    if (!attr.name)
    {
        this._log.stack("no attrname?!");
    }

    this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, attr.buffer);
    this._cgl.profileData.profileMeshAttributes += (end - start) || 0;

    this._cgl.profileData.profileSingleMeshAttribute[this._name] = this._cgl.profileData.profileSingleMeshAttribute[this._name] || 0;
    this._cgl.profileData.profileSingleMeshAttribute[this._name] += (end - start) || 0;

    if (attr.numItems < array.length / attr.itemSize)
    {
        this._resizeAttr(array, attr);
    }

    if (end > array.length)
    {
        if (CABLES.platform.isDevEnv())
            this._log.log(this._cgl.canvas.id + " " + attr.name + " buffersubdata out of bounds ?", array.length, end, start, attr);
        // end = array.length - 1;
        return;
    }

    if (this._cgl.glVersion == 1) this._cgl.gl.bufferSubData(this._cgl.gl.ARRAY_BUFFER, 0, array); // probably slow/ maybe create and array with only changed size ??
    else this._cgl.gl.bufferSubData(this._cgl.gl.ARRAY_BUFFER, start * 4, array, start, (end - start));
};

Mesh.prototype._resizeAttr = function (array, attr)
{
    if (attr.buffer)
        this._cgl.gl.deleteBuffer(attr.buffer);

    attr.buffer = this._cgl.gl.createBuffer();
    this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, attr.buffer);
    this._bufferArray(array, attr);
    attr.numItems = array.length / attr.itemSize;// numItems;
};


Mesh.prototype._bufferArray = function (array, attr)
{
    let floatArray = attr.floatArray || null;
    if (!array) return;


    if (this._cgl.debugOneFrame)
    {
        console.log("_bufferArray", array.length, attr.name); // eslint-disable-line
    }

    if (!(array instanceof Float32Array))
    {
        if (attr && floatArray && floatArray.length == array.length)
        {
            floatArray.set(array);
            // floatArray = floatArray;
        }
        else
        {
            floatArray = new Float32Array(array);

            if (this._cgl.debugOneFrame)
            {
                console.log("_bufferArray create new float32array", array.length, attr.name); // eslint-disable-line
            }

            if (array.length > 10000)
            {
                this._cgl.profileData.profileNonTypedAttrib++;
                this._cgl.profileData.profileNonTypedAttribNames = "(" + this._name + ":" + attr.name + ")";
            }
        }
    }
    else floatArray = array;

    attr.arrayLength = floatArray.length;
    attr.floatArray = null;// floatArray;

    this._cgl.gl.bufferData(this._cgl.gl.ARRAY_BUFFER, floatArray, this._cgl.gl.DYNAMIC_DRAW);
};

/**
 * @function setAttribute
 * @description update attribute
 * @memberof Mesh
 * @instance
 * @param {String} attribute name
 * @param {Array} data
 * @param {Number} itemSize
 * @param {Object} options
 */
Mesh.prototype.addAttribute = Mesh.prototype.updateAttribute = Mesh.prototype.setAttribute = function (name, array, itemSize, options)
{
    if (!array)
    {
        this._log.error("mesh addAttribute - no array given! " + name);
        throw new Error();
    }
    let cb = null;
    let instanced = false;
    let i = 0;
    const numItems = array.length / itemSize;

    this._cgl.profileData.profileMeshAttributes += numItems || 0;

    if (typeof options == "function")
    {
        cb = options;
    }

    if (typeof options == "object")
    {
        if (options.cb) cb = options.cb;
        if (options.instanced) instanced = options.instanced;
    }

    if (name == constants_CONSTANTS.SHADER.SHADERVAR_INSTANCE_MMATRIX) instanced = true;


    for (i = 0; i < this._attributes.length; i++)
    {
        const attr = this._attributes[i];
        if (attr.name == name)
        {
            if (attr.numItems === numItems)
            {
            }
            else
            {
                // this._log.log("wrong buffer size", this._geom.name, attr.name, attr.numItems, numItems);
                this._resizeAttr(array, attr);
            }

            this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, attr.buffer);
            this._bufferArray(array, attr);

            return attr;
        }
    }

    // create new buffer...

    const buffer = this._cgl.gl.createBuffer();

    this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, buffer);
    // this._cgl.gl.bufferData(this._cgl.gl.ARRAY_BUFFER, floatArray, this._cgl.gl.DYNAMIC_DRAW);

    let type = this._cgl.gl.FLOAT;
    if (options && options.type) type = options.type;
    const attr = {
        "buffer": buffer,
        "name": name,
        "cb": cb,
        "itemSize": itemSize,
        "numItems": numItems,
        "startItem": 0,
        "instanced": instanced,
        "type": type
    };

    this._bufferArray(array, attr);

    if (name == constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_POSITION) this._bufVertexAttrib = attr;
    this._attributes.push(attr);
    this._attribLocs = {};

    return attr;
};

Mesh.prototype.getAttributes = function ()
{
    return this._attributes;
};

/**
 * @function updateTexCoords
 * @description update texture coordinates only from a geometry
 * @memberof Mesh
 * @instance
 * @param {Geometry} geom
 */
Mesh.prototype.updateTexCoords = function (geom)
{
    if (geom.texCoords && geom.texCoords.length > 0)
    {
        this.setAttribute(constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_TEXCOORD, geom.texCoords, 2);
    }
    else
    {
        const tcBuff = new Float32Array(Math.round((geom.vertices.length / 3) * 2));
        this.setAttribute(constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_TEXCOORD, tcBuff, 2);
    }
};


/**
 * @function updateNormals
 * @description update normals only from a geometry
 * @memberof Mesh
 * @instance
 * @param {Geometry} geom
 */
Mesh.prototype.updateNormals = function (geom)
{
    if (geom.vertexNormals && geom.vertexNormals.length > 0)
    {
        this.setAttribute(constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_NORMAL, geom.vertexNormals, 3);
    }
    else
    {
        const tcBuff = new Float32Array(Math.round((geom.vertices.length)));
        this.setAttribute(constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_NORMAL, tcBuff, 3);
    }
};


Mesh.prototype._setVertexNumbers = function (arr)
{
    if (!this._verticesNumbers || this._verticesNumbers.length != this._numVerts || arr)
    {
        if (arr) this._verticesNumbers = arr;
        else
        {
            this._verticesNumbers = new Float32Array(this._numVerts);
            for (let i = 0; i < this._numVerts; i++) this._verticesNumbers[i] = i;
        }

        this.setAttribute(constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_NUMBER, this._verticesNumbers, 1, (attr, geom, shader) =>
        {
            if (!shader.uniformNumVertices) shader.uniformNumVertices = new Uniform(shader, "f", "numVertices", this._numVerts);
            shader.uniformNumVertices.setValue(this._numVerts);

            // console.log("this._numVerts", this._numVerts, attr, shader.uniformNumVertices);
        });
    }
};

/**
 * @function setVertexIndices
 * @description update vertex indices / faces
 * @memberof Mesh
 * @instance
 * @param {array} vertIndices
 */
Mesh.prototype.setVertexIndices = function (vertIndices)
{
    if (!this._bufVerticesIndizes)
    {
        this._log.warn("no bufVerticesIndizes: " + this._name);
        return;
    }
    if (vertIndices.length > 0)
    {
        if (vertIndices instanceof Float32Array) this._log.warn("vertIndices float32Array: " + this._name);

        for (let i = 0; i < vertIndices.length; i++)
        {
            if (vertIndices[i] >= this._numVerts)
            {
                this._log.warn("invalid index in " + this._name, i, vertIndices[i]);
                return;
            }
        }

        this._cgl.gl.bindBuffer(this._cgl.gl.ELEMENT_ARRAY_BUFFER, this._bufVerticesIndizes);

        // todo cache this ?
        // if(!this.vertIndicesTyped || this.vertIndicesTyped.length!=this._geom.verticesIndices.length)

        if (vertIndices.length > 65535)
        {
            this.vertIndicesTyped = new Uint32Array(vertIndices);
            this._indexType = this._cgl.gl.UNSIGNED_INT;
        }
        else
        if (vertIndices instanceof Uint32Array)
        {
            this.vertIndicesTyped = vertIndices;
            this._indexType = this._cgl.gl.UNSIGNED_INT;
        }
        else
        if (!(vertIndices instanceof Uint16Array))
        {
            this.vertIndicesTyped = new Uint16Array(vertIndices);
            this._indexType = this._cgl.gl.UNSIGNED_SHORT;
        }
        else this.vertIndicesTyped = vertIndices;

        this._cgl.gl.bufferData(this._cgl.gl.ELEMENT_ARRAY_BUFFER, this.vertIndicesTyped, this._cgl.gl.DYNAMIC_DRAW);
        this._bufVerticesIndizes.itemSize = 1;
        this._bufVerticesIndizes.numItems = vertIndices.length;
    }
    else this._bufVerticesIndizes.numItems = 0;
};

/**
 * @function setGeom
 * @memberof Mesh
 * @instance
 * @description set geometry for mesh
 * @param {Geometry} geom
 * @param {boolean} removeRef
 */
Mesh.prototype.setGeom = function (geom, removeRef)
{
    this._geom = geom;
    if (geom.glPrimitive != null) this._glPrimitive = geom.glPrimitive;
    if (this._geom && this._geom.name) this._name = "mesh " + this._geom.name;

    MESH.lastMesh = null;
    this._cgl.profileData.profileMeshSetGeom++;

    this._disposeAttributes();

    this.updateVertices(this._geom);
    this.setVertexIndices(this._geom.verticesIndices);

    if (this.addVertexNumbers) this._setVertexNumbers();

    const geomAttribs = this._geom.getAttributes();

    const attribAssoc = {
        "texCoords": constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_TEXCOORD,
        "vertexNormals": constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_NORMAL,
        "vertexColors": constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_COLOR,
        "tangents": "attrTangent",
        "biTangents": "attrBiTangent",
    };

    for (const index in geomAttribs)
        if (geomAttribs[index].data && geomAttribs[index].data.length)
            this.setAttribute(attribAssoc[index] || index, geomAttribs[index].data, geomAttribs[index].itemSize);


    if (removeRef)
    {
        this._geom = null;
    }
};

Mesh.prototype._preBind = function (shader)
{
    for (let i = 0; i < this._attributes.length; i++)
        if (this._attributes[i].cb)
            this._attributes[i].cb(this._attributes[i], this._geom, shader);
};

Mesh.prototype._checkAttrLengths = function ()
{
    if (this.memFreed) return;
    // check length
    for (let i = 0; i < this._attributes.length; i++)
    {
        if (this._attributes[i].arrayLength / this._attributes[i].itemSize < this._attributes[0].arrayLength / this._attributes[0].itemSize)
        {
            let name = "unknown";
            if (this._geom)name = this._geom.name;
            // this._log.warn(
            //     name + ": " + this._attributes[i].name +
            //     " wrong attr length. is:", this._attributes[i].arrayLength / this._attributes[i].itemSize,
            //     " should be:", this._attributes[0].arrayLength / this._attributes[0].itemSize,
            // );
        }
    }
};

Mesh.prototype._bind = function (shader)
{
    if (!shader.isValid()) return;

    let attrLocs = [];
    if (this._attribLocs[shader.id]) attrLocs = this._attribLocs[shader.id];
    else this._attribLocs[shader.id] = attrLocs;

    this._lastShader = shader;
    if (shader.lastCompile > this._lastAttrUpdate || attrLocs.length != this._attributes.length)
    {
        this._lastAttrUpdate = shader.lastCompile;
        for (let i = 0; i < this._attributes.length; i++) attrLocs[i] = -1;
    }

    for (let i = 0; i < this._attributes.length; i++)
    {
        const attribute = this._attributes[i];
        if (attrLocs[i] == -1)
        {
            if (attribute._attrLocationLastShaderTime != shader.lastCompile)
            {
                attribute._attrLocationLastShaderTime = shader.lastCompile;
                attrLocs[i] = this._cgl.glGetAttribLocation(shader.getProgram(), attribute.name);
                // this._log.log('attribloc',attribute.name,attrLocs[i]);
                this._cgl.profileData.profileAttrLoc++;
            }
        }

        if (attrLocs[i] != -1)
        {
            this._cgl.gl.enableVertexAttribArray(attrLocs[i]);
            this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, attribute.buffer);

            if (attribute.instanced)
            {
                // todo: easier way to fill mat4 attribs...
                if (attribute.itemSize <= 4)
                {
                    if (!attribute.itemSize || attribute.itemSize == 0) this._log.warn("instanced attrib itemsize error", this._geom.name, attribute);

                    this._cgl.gl.vertexAttribPointer(attrLocs[i], attribute.itemSize, attribute.type, false, attribute.itemSize * 4, 0);
                    this._cgl.gl.vertexAttribDivisor(attrLocs[i], 1);
                }
                else if (attribute.itemSize == 16)
                {
                    const stride = 16 * 4;

                    this._cgl.gl.vertexAttribPointer(attrLocs[i], 4, attribute.type, false, stride, 0);
                    this._cgl.gl.enableVertexAttribArray(attrLocs[i] + 1);
                    this._cgl.gl.vertexAttribPointer(attrLocs[i] + 1, 4, attribute.type, false, stride, 4 * 4 * 1);
                    this._cgl.gl.enableVertexAttribArray(attrLocs[i] + 2);
                    this._cgl.gl.vertexAttribPointer(attrLocs[i] + 2, 4, attribute.type, false, stride, 4 * 4 * 2);
                    this._cgl.gl.enableVertexAttribArray(attrLocs[i] + 3);
                    this._cgl.gl.vertexAttribPointer(attrLocs[i] + 3, 4, attribute.type, false, stride, 4 * 4 * 3);

                    this._cgl.gl.vertexAttribDivisor(attrLocs[i], 1);
                    this._cgl.gl.vertexAttribDivisor(attrLocs[i] + 1, 1);
                    this._cgl.gl.vertexAttribDivisor(attrLocs[i] + 2, 1);
                    this._cgl.gl.vertexAttribDivisor(attrLocs[i] + 3, 1);
                }
                else
                {
                    this._log.warn("unknown instance attrib size", attribute.name);
                }
            }
            else
            {
                if (!attribute.itemSize || attribute.itemSize == 0) this._log.warn("attrib itemsize error", this._name, attribute);
                this._cgl.gl.vertexAttribPointer(attrLocs[i], attribute.itemSize, attribute.type, false, attribute.itemSize * 4, 0);

                if (attribute.pointer)
                {
                    for (let ip = 0; ip < attribute.pointer.length; ip++)
                    {
                        const pointer = attribute.pointer[ip];

                        if (pointer.loc == -1)
                            pointer.loc = this._cgl.glGetAttribLocation(shader.getProgram(), pointer.name);

                        this._cgl.profileData.profileAttrLoc++;

                        this._cgl.gl.enableVertexAttribArray(pointer.loc);
                        this._cgl.gl.vertexAttribPointer(pointer.loc, attribute.itemSize, attribute.type, false, pointer.stride, pointer.offset);
                    }
                }
                this.bindFeedback(attribute);
            }
        }
    }

    if (this._bufVerticesIndizes && this._bufVerticesIndizes.numItems !== 0) this._cgl.gl.bindBuffer(this._cgl.gl.ELEMENT_ARRAY_BUFFER, this._bufVerticesIndizes);
};

Mesh.prototype.unBind = function ()
{
    const shader = this._lastShader;
    this._lastShader = null;
    if (!shader) return;

    let attrLocs = [];
    if (this._attribLocs[shader.id]) attrLocs = this._attribLocs[shader.id];
    else this._attribLocs[shader.id] = attrLocs;

    MESH.lastMesh = null;

    for (let i = 0; i < this._attributes.length; i++)
    {
        if (this._attributes[i].instanced)
        {
            // todo: easier way to fill mat4 attribs...
            if (this._attributes[i].itemSize <= 4)
            {
                if (attrLocs[i] != -1) this._cgl.gl.vertexAttribDivisor(attrLocs[i], 0);
                if (attrLocs[i] >= 0) this._cgl.gl.disableVertexAttribArray(attrLocs[i]);
            }
            else
            {
                this._cgl.gl.vertexAttribDivisor(attrLocs[i], 0);
                this._cgl.gl.vertexAttribDivisor(attrLocs[i] + 1, 0);
                this._cgl.gl.vertexAttribDivisor(attrLocs[i] + 2, 0);
                this._cgl.gl.vertexAttribDivisor(attrLocs[i] + 3, 0);
                this._cgl.gl.disableVertexAttribArray(attrLocs[i] + 1);
                this._cgl.gl.disableVertexAttribArray(attrLocs[i] + 2);
                this._cgl.gl.disableVertexAttribArray(attrLocs[i] + 3);
            }
        }

        if (attrLocs[i] != -1) this._cgl.gl.disableVertexAttribArray(attrLocs[i]);
    }
};

Mesh.prototype.meshChanged = function ()
{
    return this._cgl.lastMesh && this._cgl.lastMesh != this;
};

Mesh.prototype.printDebug = function (shader)
{
    console.log("--attributes");
    for (let i = 0; i < this._attributes.length; i++)
    {
        console.log("attribute " + i + " " + this._attributes[i].name);
    }
};

Mesh.prototype.setNumVertices = function (num)
{
    this._bufVertexAttrib.numItems = num;
};

Mesh.prototype.getNumVertices = function ()
{
    return this._bufVertexAttrib.numItems;
};


/**
 * @function render
 * @memberof Mesh
 * @instance
 * @description draw mesh to screen
 * @param {Shader} shader
 */
Mesh.prototype.render = function (shader)
{
    // TODO: enable/disablevertex only if the mesh has changed... think drawing 10000x the same mesh

    if (!shader || !shader.isValid() || this._cgl.aborted) return;

    this._checkAttrLengths();

    if (this._geom)
    {
        if (this._preWireframeGeom && !shader.wireframe && !this._geom.isIndexed())
        {
            this.setGeom(this._preWireframeGeom);
            this._preWireframeGeom = null;
            // console.log("remove prewireframe geom");
        }

        if (shader.wireframe)
        {
            let changed = false;

            if (this._geom.isIndexed())
            {
                if (!this._preWireframeGeom)
                {
                    this._preWireframeGeom = this._geom;
                    this._geom = this._geom.copy();
                }

                this._geom.unIndex();
                changed = true;
            }

            if (!this._geom.getAttribute("attrBarycentric"))
            {
                if (!this._preWireframeGeom)
                {
                    this._preWireframeGeom = this._geom;
                    this._geom = this._geom.copy();
                }
                changed = true;

                this._geom.calcBarycentric();
            }
            if (changed) this.setGeom(this._geom);
        }
        // if (shader.wireframe)
        // console.log(shader.wireframe, this._geom.isIndexed());
    }

    let needsBind = false;
    if (MESH.lastMesh != this)
    {
        if (MESH.lastMesh) MESH.lastMesh.unBind();
        needsBind = true;
    }


    // var needsBind=false;
    // {
    //     needsBind=true;
    // }
    if (needsBind) this._preBind(shader);

    if (!shader.bind()) return;

    // if(needsBind)
    this._bind(shader);
    if (this.addVertexNumbers) this._setVertexNumbers();

    MESH.lastMesh = this;

    let prim = this._cgl.gl.TRIANGLES;
    if (this._glPrimitive !== undefined) prim = this._glPrimitive;
    if (shader.glPrimitive !== null) prim = shader.glPrimitive;

    let elementDiv = 1;
    let doQuery = this._cgl.profileData.doProfileGlQuery;
    let queryStarted = false;
    if (doQuery)
    {
        let id = this._name + " - " + shader.getName() + " #" + shader.id;
        if (this._numInstances) id += " instanced " + this._numInstances + "x";

        let queryProfilerData = this._cgl.profileData.glQueryData[id];

        if (!queryProfilerData) queryProfilerData = { "id": id, "num": 0 };

        if (shader.opId)queryProfilerData.shaderOp = shader.opId;
        if (this.opId)queryProfilerData.meshOp = this.opId;

        this._cgl.profileData.glQueryData[id] = queryProfilerData;

        if (!this._queryExt && this._queryExt !== false) this._queryExt = this._cgl.enableExtension("EXT_disjoint_timer_query_webgl2") || false;
        if (this._queryExt)
        {
            if (queryProfilerData._drawQuery)
            {
                const available = this._cgl.gl.getQueryParameter(queryProfilerData._drawQuery, this._cgl.gl.QUERY_RESULT_AVAILABLE);
                if (available)
                {
                    const elapsedNanos = this._cgl.gl.getQueryParameter(queryProfilerData._drawQuery, this._cgl.gl.QUERY_RESULT);
                    const currentTimeGPU = elapsedNanos / 1000000;

                    queryProfilerData._times = queryProfilerData._times || 0;
                    queryProfilerData._times += currentTimeGPU;
                    queryProfilerData._numcount++;
                    queryProfilerData.when = performance.now();
                    queryProfilerData._drawQuery = null;
                    queryProfilerData.queryStarted = false;
                }
            }

            if (!queryProfilerData.queryStarted)
            {
                queryProfilerData._drawQuery = this._cgl.gl.createQuery();
                this._cgl.gl.beginQuery(this._queryExt.TIME_ELAPSED_EXT, queryProfilerData._drawQuery);
                queryStarted = queryProfilerData.queryStarted = true;
            }
        }
    }


    if (this.hasFeedbacks())
    {
        this.drawFeedbacks(shader, prim);
    }
    else if (!this._bufVerticesIndizes || this._bufVerticesIndizes.numItems === 0)
    {
        // for (let i = 0; i < this._attributes.length; i++)
        // {
        //     if (this._attributes[i].arrayLength / this._attributes[i].itemSize != this._bufVertexAttrib.floatArray.length / 3)
        //     {
        //         this._log.warn("attrib buffer length wrong! ", this._attributes[i].name, this._attributes[i].arrayLength / this._attributes[i].itemSize, this._bufVertexAttrib.floatArray.length / 3, this._attributes[i].itemSize);
        //         // this._log.log(this);
        //         // debugger;
        //         return;
        //     }
        // }


        if (prim == this._cgl.gl.TRIANGLES)elementDiv = 3;
        if (this._numInstances === 0) this._cgl.gl.drawArrays(prim, this._bufVertexAttrib.startItem, this._bufVertexAttrib.numItems - this._bufVertexAttrib.startItem);
        else this._cgl.gl.drawArraysInstanced(prim, this._bufVertexAttrib.startItem, this._bufVertexAttrib.numItems, this._numInstances);
    }
    else
    {
        if (prim == this._cgl.gl.TRIANGLES)elementDiv = 3;
        if (this._numInstances === 0)
        {
            // console.log("la", this._bufVerticesIndizes.numItems);

            this._cgl.gl.drawElements(prim, this._bufVerticesIndizes.numItems, this._indexType, 0);
        }
        else
        {
            this._cgl.gl.drawElementsInstanced(prim, this._bufVerticesIndizes.numItems, this._indexType, 0, this._numInstances);
        }
    }

    if (this._cgl.debugOneFrame && this._cgl.gl.getError() != this._cgl.gl.NO_ERROR)
    {
        this._log.error("mesh draw gl error");
        this._log.error("mesh", this);
        this._log.error("shader", shader);

        const attribNames = [];
        for (let i = 0; i < this._cgl.gl.getProgramParameter(shader.getProgram(), this._cgl.gl.ACTIVE_ATTRIBUTES); i++)
        {
            const name = this._cgl.gl.getActiveAttrib(shader.getProgram(), i).name;
            this._log.error("attrib ", name);
        }
    }

    this._cgl.profileData.profileMeshNumElements += (this._bufVertexAttrib.numItems / elementDiv) * (this._numInstances || 1);
    this._cgl.profileData.profileMeshDraw++;

    if (doQuery && queryStarted)
    {
        this._cgl.gl.endQuery(this._queryExt.TIME_ELAPSED_EXT);
    }

    this._cgl.printError("mesh render " + this._name);

    this.unBind();
};

Mesh.prototype.setNumInstances = function (n)
{
    n = Math.max(0, n);
    if (this._numInstances != n)
    {
        this._numInstances = n;
        const indexArr = new Float32Array(n);
        for (let i = 0; i < n; i++) indexArr[i] = i;
        this.setAttribute(constants_CONSTANTS.SHADER.SHADERVAR_INSTANCE_INDEX, indexArr, 1, { "instanced": true });
    }
};

Mesh.prototype._disposeAttributes = function ()
{
    if (!this._attributes) return;

    for (let i = 0; i < this._attributes.length; i++)
    {
        if (this._attributes[i].buffer)
        {
            this._cgl.gl.deleteBuffer(this._attributes[i].buffer);
            this._attributes[i].buffer = null;
        }
    }
    this._attributes.length = 0;
};

Mesh.prototype.dispose = function ()
{
    if (this._bufVertexAttrib && this._bufVertexAttrib.buffer) this._cgl.gl.deleteBuffer(this._bufVertexAttrib.buffer);
    if (this._bufVerticesIndizes) this._cgl.gl.deleteBuffer(this._bufVerticesIndizes);
    this._bufVerticesIndizes = null;

    this._disposeAttributes();
};

extendMeshWithFeedback(Mesh);



;// CONCATENATED MODULE: ./src/core/cgl/cgl_simplerect.js




const MESHES = {};

MESHES.getSimpleRect = function (cgl, name)
{
    const geom = new Geometry(name);

    geom.vertices = [1.0, 1.0, 0.0, -1.0, 1.0, 0.0, 1.0, -1.0, 0.0, -1.0, -1.0, 0.0];
    geom.texCoords = [1.0, 1.0, 0.0, 1.0, 1.0, 0.0, 0.0, 0.0];
    geom.verticesIndices = [0, 1, 2, 2, 1, 3];
    geom.vertexNormals = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0];

    return new Mesh(cgl, geom);
};


MESHES.getSimpleCube = function (cgl, name)
{
    const geom = new Geometry(name);
    geom.vertices = [-1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1, 1, -1, 1, 1, -1, -1, -1, 1, -1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -1, 1, -1, 1, 1, -1, 1, -1];
    geom.setTexCoords([0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0,]);
    geom.verticesIndices = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
    geom.vertexNormals = new Float32Array([0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0]);
    geom.tangents = new Float32Array([0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]);
    geom.biTangents = new Float32Array([-1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1]);

    return new Mesh(cgl, geom);
};




;// CONCATENATED MODULE: ./src/core/cgl/cgl_textureeffect.js




const TextureEffect = function (cgl, options)
{
    this._cgl = cgl;
    this._log = new Logger("cgl_TextureEffect");

    if (!cgl.TextureEffectMesh) this.createMesh();

    this._textureSource = null;
    this._options = options;
    this.name = options.name || "unknown";

    // TODO: do we still need the options ?
    // var opts=options ||
    //     {
    //         isFloatingPointTexture:false,
    //         filter:CGL.Texture.FILTER_LINEAR
    //     };
    // if(options && options.fp)opts.isFloatingPointTexture=true;

    this.imgCompVer = 0;
    this.aspectRatio = 1;
    this._textureTarget = null; // new CGL.Texture(this._cgl,opts);
    this._frameBuf = this._cgl.gl.createFramebuffer();
    this._frameBuf2 = this._cgl.gl.createFramebuffer();
    this._renderbuffer = this._cgl.gl.createRenderbuffer();
    this._renderbuffer2 = this._cgl.gl.createRenderbuffer();
    this.switched = false;
    this.depth = false;
};

TextureEffect.prototype.dispose = function ()
{
    if (this._renderbuffer) this._cgl.gl.deleteRenderbuffer(this._renderbuffer);
    if (this._frameBuf) this._cgl.gl.deleteFramebuffer(this._frameBuf);
    if (this._renderbuffer2) this._cgl.gl.deleteRenderbuffer(this._renderbuffer2);
    if (this._frameBuf2) this._cgl.gl.deleteFramebuffer(this._frameBuf2);
};

TextureEffect.prototype.getWidth = function ()
{
    return this._textureSource.width;
};

TextureEffect.prototype.getHeight = function ()
{
    return this._textureSource.height;
};

TextureEffect.prototype.setSourceTexture = function (tex)
{
    if (tex === null)
    {
        this._textureSource = new Texture(this._cgl);
        this._textureSource.setSize(16, 16);
    }
    else
    {
        this._textureSource = tex;
    }

    if (!this._textureSource.compareSettings(this._textureTarget))
    {
        if (this._textureTarget) this._textureTarget.delete();

        this._textureTarget = this._textureSource.clone();

        this._cgl.profileData.profileEffectBuffercreate++;

        this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuf);

        this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, this._renderbuffer);

        // if(tex.textureType==CGL.Texture.TYPE_FLOAT) this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER,this._cgl.gl.RGBA32F, this._textureSource.width,this._textureSource.height);
        // else this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER,this._cgl.gl.RGBA8, this._textureSource.width,this._textureSource.height);

        if (this.depth) this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, this._cgl.gl.DEPTH_COMPONENT16, this._textureSource.width, this._textureSource.height);
        this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.TEXTURE_2D, this._textureTarget.tex, 0);
        if (this.depth) this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.RENDERBUFFER, this._renderbuffer);

        // this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.TEXTURE_2D, this._textureTarget.tex, 0);

        this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, null);
        this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, null);
        this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null);

        this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuf2);

        this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, this._renderbuffer2);

        // if(tex.textureType==CGL.Texture.TYPE_FLOAT) this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER,this._cgl.gl.RGBA32F, this._textureSource.width,this._textureSource.height);
        // else this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER,this._cgl.gl.RGBA8, this._textureSource.width,this._textureSource.height);

        if (this.depth) this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, this._cgl.gl.DEPTH_COMPONENT16, this._textureSource.width, this._textureSource.height);
        this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.TEXTURE_2D, this._textureSource.tex, 0);

        if (this.depth) this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.RENDERBUFFER, this._renderbuffer2);

        // this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.TEXTURE_2D, this._textureSource.tex, 0);

        this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, null);
        this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, null);
        this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null);
    }

    this.aspectRatio = this._textureSource.width / this._textureSource.height;
};
TextureEffect.prototype.continueEffect = function ()
{
    this._cgl.pushDepthTest(false);
    this._cgl.pushModelMatrix();
    this._cgl.pushPMatrix();
    // todo why two pushs?



    this._cgl.pushViewPort(0, 0, this.getCurrentTargetTexture().width, this.getCurrentTargetTexture().height);



    mat4.perspective(this._cgl.pMatrix, 45, this.getCurrentTargetTexture().width / this.getCurrentTargetTexture().height, 0.1, 1100.0); // todo: why?

    this._cgl.pushPMatrix();
    mat4.identity(this._cgl.pMatrix);

    this._cgl.pushViewMatrix();
    mat4.identity(this._cgl.vMatrix);

    this._cgl.pushModelMatrix();
    mat4.identity(this._cgl.mMatrix);
};


TextureEffect.prototype.startEffect = function (bgTex)
{
    if (!this._textureTarget)
    {
        this._log.warn("effect has no target");
        return;
    }

    this.switched = false;

    this.continueEffect();

    if (bgTex)
    {
        this._bgTex = bgTex;
    }
    this._countEffects = 0;
};

TextureEffect.prototype.endEffect = function ()
{
    this._cgl.popDepthTest();
    this._cgl.popModelMatrix();

    this._cgl.popPMatrix();
    this._cgl.popModelMatrix();
    this._cgl.popViewMatrix();

    this._cgl.popPMatrix();
    this._cgl.popViewPort();
};

TextureEffect.prototype.bind = function ()
{
    if (this._textureSource === null)
    {
        this._log.warn("no base texture set!");
        return;
    }

    if (!this.switched)
    {
        this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuf);
        this._cgl.pushGlFrameBuffer(this._frameBuf);
    }
    else
    {
        this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuf2);
        this._cgl.pushGlFrameBuffer(this._frameBuf2);
    }
};

TextureEffect.prototype.finish = function ()
{
    if (this._textureSource === null)
    {
        this._log.warn("no base texture set!");
        return;
    }

    this._cgl.TextureEffectMesh.render(this._cgl.getShader());

    this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.popGlFrameBuffer());

    this._cgl.profileData.profileTextureEffect++;

    if (this._textureTarget.filter == Texture.FILTER_MIPMAP)
    {
        if (!this.switched)
        {
            this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, this._textureTarget.tex);
            this._textureTarget.updateMipMap();
        }
        else
        {
            this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, this._textureSource.tex);
            this._textureSource.updateMipMap();
        }

        this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, null);
    }

    this.switched = !this.switched;
    this._countEffects++;
};

TextureEffect.prototype.getCurrentTargetTexture = function ()
{
    if (this.switched) return this._textureSource;
    return this._textureTarget;
};

TextureEffect.prototype.getCurrentSourceTexture = function ()
{
    if (this._countEffects == 0 && this._bgTex) return this._bgTex;

    if (this.switched) return this._textureTarget;
    return this._textureSource;
};

TextureEffect.prototype.delete = function ()
{
    if (this._textureTarget) this._textureTarget.delete();
    if (this._textureSource) this._textureSource.delete();
    this._cgl.gl.deleteRenderbuffer(this._renderbuffer);
    this._cgl.gl.deleteFramebuffer(this._frameBuf);
};

TextureEffect.prototype.createMesh = function ()
{
    this._cgl.TextureEffectMesh = MESHES.getSimpleRect(this._cgl, "texEffectRect");
};

// ---------------------------------------------------------------------------------

TextureEffect.checkOpNotInTextureEffect = function (op)
{
    if (!op.patch.cgl) return true;
    if (op.uiAttribs.error && !op.patch.cgl.currentTextureEffect)
    {
        op.setUiError("textureeffect", null);
        return true;
    }
    if (!op.patch.cgl.currentTextureEffect) return true;

    if (op.patch.cgl.currentTextureEffect && !op.uiAttribs.error)
    {
        op.setUiError("textureeffect", "This op can not be a child of a ImageCompose/texture effect! imagecompose should only have textureeffect childs.", 0);
        return false;
    }

    if (op.patch.cgl.currentTextureEffect) return false;
    return true;
};

TextureEffect.checkOpInEffect = function (op, minver)
{
    minver = minver || 0;

    if (op.patch.cgl.currentTextureEffect)
    {
        if (op.uiAttribs.uierrors && op.patch.cgl.currentTextureEffect.imgCompVer >= minver)
        {
            op.setUiError("texeffect", null);
            return true;
        }

        if (minver && op.patch.cgl.currentTextureEffect.imgCompVer < minver)
        {
            op.setUiError("texeffect", "This op must be a child of an ImageCompose op with version >=" + minver + " <span class=\"button-small\" onclick=\"gui.patchView.downGradeOp('" + op.id + "','" + op.name + "')\">Downgrade</span> to previous version", 1);
        }
    }

    if (op.patch.cgl.currentTextureEffect) return true;

    if (!op.patch.cgl.currentTextureEffect && (!op.uiAttribs.uierrors || op.uiAttribs.uierrors.length == 0))
    {
        op.setUiError("texeffect", "This op must be a child of an ImageCompose op! More infos <a href=\"https://docs.cables.gl/image_composition/image_composition.html\" target=\"_blank\">here</a>. ", 1);
        return false;
    }

    if (!op.patch.cgl.currentTextureEffect) return false;
    return true;
};

TextureEffect.getBlendCode = function (ver)
{
    let src = "".endl()
        + "vec3 _blend(vec3 base,vec3 blend)".endl()
        + "{".endl()
        + "   vec3 colNew=blend;".endl()
        + "   #ifdef BM_MULTIPLY".endl()
        + "       colNew=base*blend;".endl()
        + "   #endif".endl()
        + "   #ifdef BM_MULTIPLY_INV".endl()
        + "       colNew=base* vec3(1.0)-blend;".endl()
        + "   #endif".endl()
        + "   #ifdef BM_AVERAGE".endl()
        + "       colNew=((base + blend) / 2.0);".endl()
        + "   #endif".endl()
        + "   #ifdef BM_ADD".endl()
        + "       colNew=min(base + blend, vec3(1.0));".endl()
        + "   #endif".endl()
        + "   #ifdef BM_SUBTRACT_ONE".endl()
        + "       colNew=max(base + blend - vec3(1.0), vec3(0.0));".endl()
        + "   #endif".endl()

        + "   #ifdef BM_SUBTRACT".endl()
        + "       colNew=base - blend;".endl()
        + "   #endif".endl()

        + "   #ifdef BM_DIFFERENCE".endl()
        + "       colNew=abs(base - blend);".endl()
        + "   #endif".endl()
        + "   #ifdef BM_NEGATION".endl()
        + "       colNew=(vec3(1.0) - abs(vec3(1.0) - base - blend));".endl()
        + "   #endif".endl()
        + "   #ifdef BM_EXCLUSION".endl()
        + "       colNew=(base + blend - 2.0 * base * blend);".endl()
        + "   #endif".endl()
        + "   #ifdef BM_LIGHTEN".endl()
        + "       colNew=max(blend, base);".endl()
        + "   #endif".endl()
        + "   #ifdef BM_DARKEN".endl()
        + "       colNew=min(blend, base);".endl()
        + "   #endif".endl()
        + "   #ifdef BM_OVERLAY".endl()
        + "      #define BlendOverlayf(base, blend)  (base < 0.5 ? (2.0 * base * blend) : (1.0 - 2.0 * (1.0 - base) * (1.0 - blend)))"
            // .endl()+'       #define BlendOverlay(base, blend)       Blend(base, blend, BlendOverlayf)'
            //    .endl()+'      colNew=Blend(base, blend, BlendOverlayf);'
            .endl()
        + "      colNew=vec3(BlendOverlayf(base.r, blend.r),BlendOverlayf(base.g, blend.g),BlendOverlayf(base.b, blend.b));".endl()
        + "   #endif".endl()
        + "   #ifdef BM_SCREEN".endl()
        + "      #define BlendScreenf(base, blend)       (1.0 - ((1.0 - base) * (1.0 - blend)))"
            // .endl()+'       #define BlendScreen(base, blend)        Blend(base, blend, BlendScreenf)'
            // .endl()+'      colNew=Blend(base, blend, BlendScreenf);'
            .endl()
        + "      colNew=vec3(BlendScreenf(base.r, blend.r),BlendScreenf(base.g, blend.g),BlendScreenf(base.b, blend.b));".endl()
        + "   #endif".endl()
        + "   #ifdef BM_SOFTLIGHT".endl()
        + "      #define BlendSoftLightf(base, blend)    ((blend < 0.5) ? (2.0 * base * blend + base * base * (1.0 - 2.0 * blend)) : (sqrt(base) * (2.0 * blend - 1.0) + 2.0 * base * (1.0 - blend)))"
            // .endl()+'       #define BlendSoftLight(base, blend)     Blend(base, blend, BlendSoftLightf)'
            //    .endl()+'      colNew=Blend(base, blend, BlendSoftLightf);'
            .endl()
        + "      colNew=vec3(BlendSoftLightf(base.r, blend.r),BlendSoftLightf(base.g, blend.g),BlendSoftLightf(base.b, blend.b));".endl()
        + "   #endif".endl()
        + "   #ifdef BM_HARDLIGHT".endl()
        + "      #define BlendOverlayf(base, blend)  (base < 0.5 ? (2.0 * base * blend) : (1.0 - 2.0 * (1.0 - base) * (1.0 - blend)))"
            // .endl()+'       #define BlendOverlay(base, blend)       Blend(base, blend, BlendOverlayf)'
            // .endl()+'      colNew=Blend(blend, base, BlendOverlayf);'
            .endl()
        + "      colNew=vec3(BlendOverlayf(base.r, blend.r),BlendOverlayf(base.g, blend.g),BlendOverlayf(base.b, blend.b));".endl()
        + "   #endif".endl()
        + "   #ifdef BM_COLORDODGE".endl()
        + "      #define BlendColorDodgef(base, blend)   ((blend == 1.0) ? blend : min(base / (1.0 - blend), 1.0))"
            // .endl()+'      colNew=Blend(base, blend, BlendColorDodgef);'
            .endl()
        + "      colNew=vec3(BlendColorDodgef(base.r, blend.r),BlendColorDodgef(base.g, blend.g),BlendColorDodgef(base.b, blend.b));".endl()
        + "   #endif".endl()
        + "   #ifdef BM_COLORBURN".endl()
        + "      #define BlendColorBurnf(base, blend)    ((blend == 0.0) ? blend : max((1.0 - ((1.0 - base) / blend)), 0.0))"
            // .endl()+'      colNew=Blend(base, blend, BlendColorBurnf);'
            .endl()
        + "      colNew=vec3(BlendColorBurnf(base.r, blend.r),BlendColorBurnf(base.g, blend.g),BlendColorBurnf(base.b, blend.b));".endl()
        + "   #endif".endl()










        + "   return colNew;".endl()
        + "}".endl();

    if (!ver)
        src += "vec4 cgl_blend(vec4 oldColor,vec4 newColor,float amount)".endl()
                + "{".endl()
                    + "vec4 col=vec4( _blend(oldColor.rgb,newColor.rgb) ,1.0);".endl()
                    + "col=vec4( mix( col.rgb, oldColor.rgb ,1.0-oldColor.a*amount),1.0);".endl()
                    + "return col;".endl()
                + "}".endl();

    if (ver >= 3)
        src += "vec4 cgl_blendPixel(vec4 base,vec4 col,float amount)".endl() +
                "{".endl() +

                "#ifdef BM_MATH_ADD".endl() +
                "   return vec4(base.rgb+col.rgb*amount,1.0);".endl() +
                "#endif".endl() +

                "#ifdef BM_MATH_SUB".endl() +
                "   return vec4(base.rgb-col.rgb*amount,1.0);".endl() +
                "#endif".endl() +

                "#ifdef BM_MATH_MUL".endl() +
                "   return vec4(base.rgb*col.rgb*amount,1.0);".endl() +
                "#endif".endl() +

                "#ifdef BM_MATH_DIV".endl() +
                "   return vec4(base.rgb/col.rgb*amount,1.0);".endl() +
                "#endif".endl() +


                    "#ifndef BM_MATH".endl() +
                        "vec3 colNew=_blend(base.rgb,col.rgb);".endl() +

                        "float newA=clamp(base.a+(col.a*amount),0.,1.);".endl() +

                        "#ifdef BM_ALPHAMASKED".endl() +
                            "newA=base.a;".endl() +
                        "#endif".endl() +

                        "return vec4(".endl() +
                            "mix(colNew,base.rgb,1.0-(amount*col.a)),".endl() +
                            "newA);".endl() +

                    "#endif".endl() +
    "}".endl();

    return src;
};

TextureEffect.onChangeBlendSelect = function (shader, blendName, maskAlpha = false)
{
    blendName = String(blendName);
    shader.toggleDefine("BM_NORMAL", blendName == "normal");
    shader.toggleDefine("BM_MULTIPLY", blendName == "multiply");
    shader.toggleDefine("BM_MULTIPLY_INV", blendName == "multiply invert");
    shader.toggleDefine("BM_AVERAGE", blendName == "average");
    shader.toggleDefine("BM_ADD", blendName == "add");
    shader.toggleDefine("BM_SUBTRACT_ONE", blendName == "subtract one");
    shader.toggleDefine("BM_SUBTRACT", blendName == "subtract");
    shader.toggleDefine("BM_DIFFERENCE", blendName == "difference");
    shader.toggleDefine("BM_NEGATION", blendName == "negation");
    shader.toggleDefine("BM_EXCLUSION", blendName == "exclusion");
    shader.toggleDefine("BM_LIGHTEN", blendName == "lighten");
    shader.toggleDefine("BM_DARKEN", blendName == "darken");
    shader.toggleDefine("BM_OVERLAY", blendName == "overlay");
    shader.toggleDefine("BM_SCREEN", blendName == "screen");
    shader.toggleDefine("BM_SOFTLIGHT", blendName == "softlight");
    shader.toggleDefine("BM_HARDLIGHT", blendName == "hardlight");
    shader.toggleDefine("BM_COLORDODGE", blendName == "color dodge");
    shader.toggleDefine("BM_COLORBURN", blendName == "color burn");

    shader.toggleDefine("BM_MATH_ADD", blendName == "Math Add");
    shader.toggleDefine("BM_MATH_SUB", blendName == "Math Subtract");
    shader.toggleDefine("BM_MATH_MUL", blendName == "Math Multiply");
    shader.toggleDefine("BM_MATH_DIV", blendName == "Math Divide");

    shader.toggleDefine("BM_MATH", blendName.indexOf("Math ") == 0);


    shader.toggleDefine("BM_ALPHAMASKED", maskAlpha);
};

TextureEffect.AddBlendSelect = function (op, name, defaultMode)
{
    const p = op.inValueSelect(name || "Blend Mode", [
        "normal", "lighten", "darken", "multiply", "multiply invert", "average", "add", "subtract", "difference", "negation", "exclusion", "overlay", "screen", "color dodge", "color burn", "softlight", "hardlight", "subtract one",
        "Math Add",
        "Math Subtract",
        "Math Multiply",
        "Math Divide",

    ], defaultMode || "normal");
    return p;
};

TextureEffect.AddBlendAlphaMask = function (op, name, defaultMode)
{
    const p = op.inSwitch(name || "Alpha Mask", ["Off", "On"], defaultMode || "Off");
    return p;
};

TextureEffect.setupBlending = function (op, shader, blendPort, amountPort, alphaMaskPort)
{
    const onChange = () =>
    {
        let maskAlpha = false;
        if (alphaMaskPort) maskAlpha = alphaMaskPort.get() == "On";
        TextureEffect.onChangeBlendSelect(shader, blendPort.get(), maskAlpha);

        let str = blendPort.get();
        if (str == "normal") str = null;
        else if (str == "multiply") str = "mul";
        else if (str == "multiply invert") str = "mulinv";
        else if (str == "lighten") str = "light";
        else if (str == "darken") str = "darken";
        else if (str == "average") str = "avg";
        else if (str == "subtract one") str = "sub one";
        else if (str == "subtract") str = "sub";
        else if (str == "difference") str = "diff";
        else if (str == "negation") str = "neg";
        else if (str == "exclusion") str = "exc";
        else if (str == "overlay") str = "ovl";
        else if (str == "color dodge") str = "dodge";
        else if (str == "color burn") str = "burn";
        else if (str == "softlight") str = "soft";
        else if (str == "hardlight") str = "hard";
        else if (str == "Math Add") str = "+";
        else if (str == "Math Subtract") str = "-";
        else if (str == "Math Multiply") str = "*";
        else if (str == "Math Divide") str = "/";

        op.setUiAttrib({ "extendTitle": str });
    };
    op.setPortGroup("Blending", [blendPort, amountPort, alphaMaskPort]);

    let maskAlpha = false;

    blendPort.onChange = onChange;
    if (alphaMaskPort)
    {
        alphaMaskPort.onChange = onChange;
        maskAlpha = alphaMaskPort.get() == "On";
    }

    TextureEffect.onChangeBlendSelect(shader, blendPort.get(), maskAlpha);
};



;// CONCATENATED MODULE: ./src/core/cgl/cgl_shader_lib.js




const ShaderLibMods = {
    "CGL.BLENDMODES": function ()
    {
        this.name = "blendmodes";
        this.srcHeadFrag = TextureEffect.getBlendCode();
    },
    "CGL.BLENDMODES3": function ()
    {
        this.name = "blendmodes3";
        this.srcHeadFrag = TextureEffect.getBlendCode(3);
    },

    "CGL.LUMINANCE": function ()
    {
        this.name = "luminance";
        this.srcHeadFrag = "".endl()
            + "float cgl_luminance(vec3 c)".endl()
            + "{".endl()
            + "    return dot(vec3(0.2126,0.7152,0.0722),c);".endl()
            + "}".endl();
    },


    // quite good random numbers, but somehow don't work in ANGLE
    "CGL.RANDOM_OLD": function ()
    {
        this.name = "randomNumber";
        this.srcHeadFrag = "".endl()
            + "float cgl_random(vec2 co)".endl()
            + "{".endl()
            + "    return fract(sin(dot(co.xy ,vec2(12.9898,4.1414))) * 432758.5453);".endl()
            + "}".endl()
            + "vec3 cgl_random3(vec2 co)".endl()
            + "{".endl()
            + "    return vec3( cgl_random(co),cgl_random(co+0.5711),cgl_random(co+1.5711));".endl()
            + "}";
    },


    // low quality generative ranodm numbers
    "CGL.RANDOM_LOW": function ()
    {
        this.name = "randomNumber";
        this.srcHeadFrag = "".endl()
            + "float cgl_random(vec2 co)".endl()
            + "{".endl()
            + "    return fract(sin(dot(co.xy ,vec2(12.9898,4.1414))) * 358.5453);".endl()
            + "}".endl()
            + "vec3 cgl_random3(vec2 co)".endl()
            + "{".endl()
            + "    return vec3( cgl_random(co),cgl_random(co+0.5711),cgl_random(co+1.5711));".endl()
            + "}";
    },

    // texture based random numbers
    "CGL.RANDOM_TEX": function ()
    {
        this.name = "randomNumbertex";
        this.srcHeadFrag = "".endl()
            + "UNI sampler2D CGLRNDTEX;".endl()
            + "float cgl_random(vec2 co)".endl()
            + "{".endl()
            + "    return texture(CGLRNDTEX,co*5711.0).r;".endl()
            + "}".endl()
            + "vec3 cgl_random3(vec2 co)".endl()
            + "{".endl()
            + "    return texture(CGLRNDTEX,co*5711.0).rgb;".endl()
            + "}";

        this.initUniforms = function (shader)
        {
            return [new Uniform(shader, "t", "CGLRNDTEX", 7)];
        };

        this.onBind = function (cgl, shader)
        {
            Texture.getRandomTexture(cgl);
            cgl.setTexture(7, Texture.getRandomTexture(cgl).tex);
        };
    },
};



;// CONCATENATED MODULE: ./src/core/cgl/cgl_utils.js
/** @namespace CGL */

/**
 * multiply to get radians from degree, e.g. `360 * CGL.DEG2RAD`
 * @const {Number}
 * @memberof CGL
 * @static
 */
const cgl_utils_DEG2RAD = Math.PI / 180.0;

/**
 * to get degrees from radians, e.g. `3.14 * CGL.RAD2DEG`
 * @const {number}
 * @memberof CGL
 */
const cgl_utils_RAD2DEG = 180.0 / Math.PI;

const onLoadingAssetsFinished = null; // deprecated / remove later

/**
 * get normalized mouse wheel delta (including browser specific adjustment)
 * @function getWheelDelta
 * @static
 * @memberof CGL
 * @param {MouseEvent} event
 * @return {Number} normalized delta
 */
const isWindows = window.navigator.userAgent.contains("Windows");
const getWheelDelta_ = function (event)
{
    let normalized;
    if (event.wheelDelta)
    {
        // chrome
        normalized = (event.wheelDelta % 120) - 0 == -0 ? event.wheelDelta / 120 : event.wheelDelta / 30;
        normalized *= -1.5;
        if (isWindows) normalized *= 2;
    }
    else
    {
        // firefox
        let d = event.deltaY;
        if (event.shiftKey) d = event.deltaX;
        const rawAmmount = d || event.detail;
        normalized = -(rawAmmount % 3 ? rawAmmount * 10 : rawAmmount / 3);
        normalized *= -3;
    }

    if (normalized > 20) normalized = 20;
    if (normalized < -20) normalized = -20;

    return normalized;
};

const getWheelSpeed = getWheelDelta_;
const getWheelDelta = getWheelDelta_;

// from https://github.com/lodash/lodash/blob/master/escape.js

const htmlEscapes = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;",
};

/** Used to match HTML entities and HTML characters. */
const reUnescapedHtml = /[&<>"']/g;
const reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

/*  eslint-disable */
const escapeHTML = function(string)
{
    return string && reHasUnescapedHtml.test(string) ?
        string.replace(reUnescapedHtml, function(chr) { return htmlEscapes[chr]; })
        : string || "";
}
/* eslint-enable */

;// CONCATENATED MODULE: ./src/core/cgl/cgl_shader_default_glsl.vert
/* harmony default export */ const cgl_shader_default_glsl = ("{{MODULES_HEAD}}\nIN vec3 vPosition; //!@\nIN vec2 attrTexCoord;\nIN vec3 attrVertNormal;\nIN vec3 attrTangent,attrBiTangent;\n\nIN float attrVertIndex;\n\nOUT vec2 texCoord;\nOUT vec3 norm;\nUNI mat4 projMatrix;\nUNI mat4 viewMatrix;\nUNI mat4 modelMatrix;\n\nvoid main()\n{\n    texCoord=attrTexCoord;\n    norm=attrVertNormal;\n    vec4 pos=vec4(vPosition,  1.0);\n    vec3 tangent=attrTangent;\n    vec3 bitangent=attrBiTangent;\n    mat4 mMatrix=modelMatrix;\n    gl_PointSize=10.0;\n\n    {{MODULE_VERTEX_POSITION}}\n\n    mat4 modelViewMatrix=viewMatrix*mMatrix;\n    {{MODULE_VERTEX_MOVELVIEW}}\n\n    gl_Position = projMatrix * modelViewMatrix * pos;\n}\n");
;// CONCATENATED MODULE: ./src/core/cgl/cgl_shader.js





// import { CGL } from "./index.js";



// ---------------------------------------------------------------------------


/*

proposal default shader variable names:

attrVertex - currently: vPosition
attrVertexIndex - currently: attrVertIndex
attrTexCoord
attrInstMat - currently: instMat
attrVertColor
attrTangent
attrBiTangent

uProjMatrix - currently: projMatrix
uModelMatrix - currently: modelMatrix
uNormalMatrix - currently: normalMatrix
uCamPosition - currently: camPos

*/


// ---------------------------------------------------------------------------

let materialIdCounter = 0;

/**
 * @class
 * @namespace external:CGL
 * @hideconstructor
 * @param _cgl
 * @param _name
 * @param _op
 * @example
 * var shader=new CGL.Shader(cgl,'MinimalMaterial');
 * shader.setSource(attachments.shader_vert,attachments.shader_frag);
 */
const Shader = function (_cgl, _name, _op)
{
    if (!_cgl) throw new Error("shader constructed without cgl " + _name);

    this._log = new Logger("cgl_shader");
    this._cgl = _cgl;

    if (!_name) this._log.stack("no shader name given");
    this._name = _name || "unknown";

    if (_op) this.opId = _op.id;
    this.glslVersion = 0;
    if (_cgl.glVersion > 1) this.glslVersion = 300;

    this._materialId = ++materialIdCounter;

    this.id = simpleId();
    this._isValid = true;
    this._program = null;
    this._uniforms = [];
    this._drawBuffers = [true];
    this._defines = [];
    this._needsRecompile = true;
    this._compileReason = "initial";

    this.ignoreMissingUniforms = false;
    this._projMatrixUniform = null;
    this._mvMatrixUniform = null;
    this._mMatrixUniform = null;
    this._vMatrixUniform = null;
    this._camPosUniform = null;
    this._normalMatrixUniform = null;
    this._inverseViewMatrixUniform = null;
    this._fromUserInteraction = false;

    this._attrVertexPos = -1;
    this.precision = _cgl.patch.config.glslPrecision || "highp";

    this._pMatrixState = -1;
    this._vMatrixState = -1;

    this._countMissingUniforms = 0;
    this._modGroupCount = 0; // not needed anymore...
    this._feedBackNames = [];
    this._attributes = [];

    this.glPrimitive = null;
    this.offScreenPass = false;
    this._extensions = [];
    this.srcVert = this.getDefaultVertexShader();
    this.srcFrag = this.getDefaultFragmentShader();
    this.lastCompile = 0;

    this._moduleNames = [];
    this._modules = [];
    this._moduleNumId = 0;

    this._libs = [];
    this._structNames = [];
    this._structUniformNames = [];
    this._textureStackUni = [];
    this._textureStackTex = [];
    this._textureStackType = [];
    this._textureStackTexCgl = [];

    this._tempNormalMatrix = mat4.create();
    this._tempCamPosMatrix = mat4.create();
    this._tempInverseViewMatrix = mat4.create();
    this._tempInverseProjMatrix = mat4.create();

    this.setModules(["MODULE_VERTEX_POSITION", "MODULE_COLOR", "MODULE_BEGIN_FRAG", "MODULE_VERTEX_MOVELVIEW"]);
};

Shader.prototype.isValid = function ()
{
    return this._isValid;
};

Shader.prototype.getCgl = function ()
{
    return this._cgl;
};

Shader.prototype.getName = function ()
{
    return this._name;
};

/**
 * enable an extension for the shader
 * @function enableExtension
 * @memberof Shader
 * @instance
 * @param name extension name
 */
Shader.prototype.enableExtension = function (name)
{
    this.setWhyCompile("enable extension " + name);
    this._needsRecompile = true;
    this._extensions.push(name);
};

Shader.prototype.getAttrVertexPos = function ()
{
    return this._attrVertexPos;
};

Shader.prototype.hasTextureUniforms = function ()
{
    for (let i = 0; i < this._uniforms.length; i++)
        if (this._uniforms[i].getType() == "t") return true;
    return false;
};

Shader.prototype.setWhyCompile = function (why)
{
    this._compileReason = why;
};

/**
 * copy all uniform values from another shader
 * @function copyUniforms
 * @memberof Shader
 * @instance
 * @param origShader uniform values will be copied from this shader
 */
Shader.prototype.copyUniformValues = function (origShader)
{
    // console.log(origShader._uniforms);
    for (let i = 0; i < origShader._uniforms.length; i++)
    {
        if (!this._uniforms[i])
        {
            this._log.log("unknown uniform?!");
            continue;
        }

        // this._log.log(origShader._uniforms[i].getName());
        // this.getUniform(origShader._uniforms[i].)
        // this._uniforms[i].set(origShader._uniforms[i].getValue());


        // if (origShader._uniforms[i].getName().contains("pathPoints"))
        //     console.log("copyUniformValues", origShader._uniforms[i].getName(), origShader._uniforms[i].getValue());

        this.getUniform(origShader._uniforms[i].getName()).set(origShader._uniforms[i].getValue());
    }

    this.popTextures();
    for (let i = 0; i < origShader._textureStackUni.length; i++)
    {
        this._textureStackUni[i] = origShader._textureStackUni[i];
        this._textureStackTex[i] = origShader._textureStackTex[i];
        this._textureStackType[i] = origShader._textureStackType[i];
        this._textureStackTexCgl[i] = origShader._textureStackTexCgl[i];
    }

    // this._textureStackUni = [];
    // this._textureStackTex = [];
    // this._textureStackType = [];
    // this._textureStackTexCgl = [];
};

/**
 * copy current shader
 * @function copy
 * @memberof Shader
 * @instance
 * @returns newShader
 */
Shader.prototype.copy = function ()
{
    const shader = new Shader(this._cgl, this._name + " copy");
    shader.setSource(this.srcVert, this.srcFrag);

    shader._modules = JSON.parse(JSON.stringify(this._modules));
    shader._defines = JSON.parse(JSON.stringify(this._defines));

    shader._modGroupCount = this._modGroupCount;
    shader._moduleNames = this._moduleNames;
    shader.glPrimitive = this.glPrimitive;
    shader.offScreenPass = this.offScreenPass;
    shader._extensions = this._extensions;
    shader.wireframe = this.wireframe;
    shader._attributes = this._attributes;

    for (let i = 0; i < this._uniforms.length; i++)
    {
        const u = this._uniforms[i].copy(shader);
        u.resetLoc();
    }

    this.setWhyCompile("copy");
    shader._needsRecompile = true;
    return shader;
};


/**
 * set shader source code
 * @function setSource
 * @memberof Shader
 * @instance
 * @param {String} srcVert
 * @param {String} srcFrag
 */
Shader.prototype.setSource = function (srcVert, srcFrag, fromUserInteraction)
{
    this._fromUserInteraction = fromUserInteraction;
    this.srcVert = srcVert;
    this.srcFrag = srcFrag;
    this.setWhyCompile("Source changed");
    this._needsRecompile = true;
    this._isValid = true;
};

Shader.prototype._addLibs = function (src)
{
    for (const id in ShaderLibMods)
    {
        if (src.contains(id))
        {
            const lib = new ShaderLibMods[id]();
            src = src.replace("{{" + id + "}}", lib.srcHeadFrag);
            this._libs.push(lib);
            if (lib.initUniforms)lib.initUniforms(this);
        }
    }

    return src;
};

Shader.prototype.createStructUniforms = function ()
{
    // * create structs
    let structStrFrag = "";
    let structStrVert = ""; // TODO: not used yet

    this._structNames = [];
    // * reset the arrays holding the value each recompile so we don't skip structs
    // * key value mapping so the same struct can be added twice (two times the same modifier)
    this._injectedStringsFrag = {};
    this._injectedStringsVert = {};

    this._structUniformNamesIndicesFrag = [];
    this._structUniformNamesIndicesVert = [];

    for (let i = 0; i < this._uniforms.length; i++)
    {
        // * only add uniforms to struct that are a member of a struct
        if (this._uniforms[i].isStructMember())
        {
            const injectionString = "{{INJECTION_POINT_STRUCT_" + this._uniforms[i]._structName + "}}";

            // * check if struct is not already part of shader
            if (!this._structNames.includes(this._uniforms[i]._structName))
            {
                // * create struct definition with placeholder string to inject
                const structDefinition = "struct "
                    + this._uniforms[i]._structName + " {".endl()
                    + injectionString
                    + "};".endl().endl();

                if (this._uniforms[i].getShaderType() === "both" || this._uniforms[i].getShaderType() === "frag")
                    structStrFrag = structStrFrag.concat(structDefinition);

                if (this._uniforms[i].getShaderType() === "both" || this._uniforms[i].getShaderType() === "vert")
                    structStrVert = structStrVert.concat(structDefinition);

                this._structNames.push(this._uniforms[i]._structName);
                this._injectedStringsFrag[this._uniforms[i]._structName] = [];
                this._injectedStringsVert[this._uniforms[i]._structName] = [];
            }

            // * create member & comment
            let comment = "";
            if (this._uniforms[i].comment) comment = " // " + this._uniforms[i].comment;

            let stringToInsert = "";
            if (this._uniforms[i].getGlslTypeString() == undefined)stringToInsert += "//";
            stringToInsert += "  " + this._uniforms[i].getGlslTypeString()
                    + " " + this._uniforms[i]._propertyName + ";"
                    + comment;

            if (this._uniforms[i].getShaderType() === "both")
            {
                // * inject member before {injectionString}
                if (
                    !this._injectedStringsFrag[this._uniforms[i]._structName].contains(stringToInsert)
                && !this._injectedStringsVert[this._uniforms[i]._structName].contains(stringToInsert))
                {
                    const insertionIndexFrag = structStrFrag.lastIndexOf(injectionString);
                    const insertionIndexVert = structStrVert.lastIndexOf(injectionString);

                    structStrFrag =
                        structStrFrag.slice(0, insertionIndexFrag)
                        + stringToInsert + structStrFrag.slice(insertionIndexFrag - 1);

                    structStrVert =
                        structStrVert.slice(0, insertionIndexVert)
                        + stringToInsert + structStrVert.slice(insertionIndexVert - 1);

                    this._injectedStringsFrag[this._uniforms[i]._structName].push(stringToInsert);
                    this._injectedStringsVert[this._uniforms[i]._structName].push(stringToInsert);
                }

                if (!this._structUniformNamesIndicesFrag.includes(i)) this._structUniformNamesIndicesFrag.push(i);
                if (!this._structUniformNamesIndicesVert.includes(i)) this._structUniformNamesIndicesVert.push(i);
            }
            else if (this._uniforms[i].getShaderType() === "frag")
            {
                // * inject member before {injectionString}
                if (!this._injectedStringsFrag[this._uniforms[i]._structName].includes(stringToInsert)) //
                {
                    const insertionIndexFrag = structStrFrag.lastIndexOf(injectionString);

                    structStrFrag =
                        structStrFrag.slice(0, insertionIndexFrag)
                        + stringToInsert + structStrFrag.slice(insertionIndexFrag - 1);

                    this._injectedStringsFrag[this._uniforms[i]._structName].push(stringToInsert);
                }

                if (!this._structUniformNamesIndicesFrag.includes(i)) this._structUniformNamesIndicesFrag.push(i);
            }
            else if (this._uniforms[i].getShaderType() === "vert")
            {
                // * inject member before {injectionString}
                if (!this._injectedStringsVert[this._uniforms[i]._structName].includes(stringToInsert))
                {
                    const insertionIndexVert = structStrVert.lastIndexOf(injectionString);

                    structStrVert =
                        structStrVert.slice(0, insertionIndexVert)
                        + stringToInsert + structStrVert.slice(insertionIndexVert - 1);

                    this._injectedStringsVert[this._uniforms[i]._structName].push(stringToInsert);
                }

                if (!this._structUniformNamesIndicesVert.includes(i)) this._structUniformNamesIndicesVert.push(i);
            }
        }
    }

    // * dedupe injected uni declarations
    this._uniDeclarationsFrag = [];
    this._uniDeclarationsVert = [];

    // * remove struct injection points and add uniform in fragment
    for (let i = 0; i < this._structUniformNamesIndicesFrag.length; i += 1)
    {
        const index = this._structUniformNamesIndicesFrag[i];
        const uniDeclarationString = "UNI " + this._uniforms[index]._structName + " " + this._uniforms[index]._structUniformName + ";".endl();

        if (!this._uniDeclarationsFrag.includes(uniDeclarationString))
        {
            const injectionString = "{{INJECTION_POINT_STRUCT_" + this._uniforms[index]._structName + "}}";

            structStrFrag = structStrFrag.replace(injectionString, "");
            structStrFrag += uniDeclarationString;

            this._uniDeclarationsFrag.push(uniDeclarationString);
        }
    }

    // * remove struct injection points and add uniform in vertex
    for (let i = 0; i < this._structUniformNamesIndicesVert.length; i += 1)
    {
        const index = this._structUniformNamesIndicesVert[i];
        const uniDeclarationString = "UNI " + this._uniforms[index]._structName + " " + this._uniforms[index]._structUniformName + ";".endl();

        if (!this._uniDeclarationsVert.includes(uniDeclarationString))
        {
            const injectionString = "{{INJECTION_POINT_STRUCT_" + this._uniforms[index]._structName + "}}";

            structStrVert = structStrVert.replace(injectionString, "");
            structStrVert += uniDeclarationString;
            this._uniDeclarationsVert.push(uniDeclarationString);
        }
    }

    return [structStrVert, structStrFrag];
};

Shader.prototype._getAttrSrc = function (attr, firstLevel)
{
    const r = {};
    if (attr.name && attr.type)
    {
        r.srcHeadVert = "";
        if (!firstLevel) r.srcHeadVert += "#ifndef ATTRIB_" + attr.name.endl();
        r.srcHeadVert += "#define ATTRIB_" + attr.name.endl();
        r.srcHeadVert += "IN " + attr.type + " " + attr.name + ";".endl();
        if (!firstLevel) r.srcHeadVert += "#endif".endl();

        if (attr.nameFrag)
        {
            r.srcHeadVert += "";
            if (!firstLevel) r.srcHeadVert += "#ifndef ATTRIB_" + attr.nameFrag.endl();
            r.srcHeadVert += "#define ATTRIB_" + attr.nameFrag.endl();
            r.srcHeadVert += "OUT " + attr.type + " " + attr.nameFrag + ";".endl();
            if (!firstLevel) r.srcHeadVert += "#endif".endl();

            r.srcVert = "".endl() + attr.nameFrag + "=" + attr.name + ";";

            r.srcHeadFrag = "";
            if (!firstLevel) r.srcHeadFrag += "#ifndef ATTRIB_" + attr.nameFrag.endl();
            r.srcHeadFrag += "#define ATTRIB_" + attr.nameFrag.endl();
            r.srcHeadFrag += "IN " + attr.type + " " + attr.nameFrag + ";".endl();
            if (!firstLevel) r.srcHeadFrag += "#endif".endl();
        }
    }
    return r;
};

Shader.prototype.compile = function ()
{
    if (this._cgl.aborted) return;
    const startTime = performance.now();



    this._cgl.profileData.profileShaderCompiles++;
    this._cgl.profileData.profileShaderCompileName = this._name + " [" + this._compileReason + "]";

    let extensionString = "";
    if (this._extensions)
        for (let i = 0; i < this._extensions.length; i++)
            extensionString += "#extension " + this._extensions[i] + " : enable".endl();

    let definesStr = "";
    if (this._defines.length) definesStr = "\n// cgl generated".endl();
    for (let i = 0; i < this._defines.length; i++)
        definesStr += "#define " + this._defines[i][0] + " " + this._defines[i][1] + "".endl();

    const structStrings = this.createStructUniforms();
    this._cgl.profileData.addHeavyEvent("shader compile", this._name + " [" + this._compileReason + "]");
    this._compileReason = "";



    if (this._uniforms)
    {
        // * we create an array of the uniform names to check our indices & an array to save them
        const uniNames = this._uniforms.map((uni) => { return uni._name; });
        const indicesToRemove = [];

        // * we go through our uniforms and check if the same name is contained somewhere further in the array
        // * if so, we add the current index to be removed later
        for (let i = 0; i < this._uniforms.length; i++)
        {
            const uni = this._uniforms[i];
            const nextIndex = uniNames.indexOf(uni._name, i + 1);
            if (nextIndex > -1) indicesToRemove.push(i);
        }

        // * after that, we go through the uniforms backwards (so we keep the order) and remove the indices
        // * also, we reset the locations of all the other valid uniforms
        for (let j = this._uniforms.length - 1; j >= 0; j -= 1)
        {
            if (indicesToRemove.includes(j)) this._uniforms.splice(j, 1);
            else this._uniforms[j].resetLoc();
        }
    }

    this._cgl.printError("uniform resets");

    if (this.hasTextureUniforms()) definesStr += "#define HAS_TEXTURES".endl();

    let vs = "";
    let fs = "";

    if (!this.srcFrag)
    {
        this._log.warn("[cgl shader] has no fragment source!", this._name, this);
        this.srcVert = this.getDefaultVertexShader();
        this.srcFrag = this.getDefaultFragmentShader();
        // return;
    }

    if (this.glslVersion == 300)
    {
        vs = "#version 300 es"
            .endl() + "// "
            .endl() + "// vertex shader " + this._name
            .endl() + "// "
            .endl() + "precision " + this.precision + " float;"
            .endl() + "precision " + this.precision + " sampler2D;"
            .endl() + ""
            .endl() + "#define WEBGL2"
            .endl() + "#define texture2D texture"
            .endl() + "#define UNI uniform"
            .endl() + "#define IN in"
            .endl() + "#define OUT out"
            .endl();

        fs = "#version 300 es"
            .endl() + "// "
            .endl() + "// fragment shader " + this._name
            .endl() + "// "
            .endl() + "precision " + this.precision + " float;"
            .endl() + "precision " + this.precision + " sampler2D;"
            .endl() + ""
            .endl() + "#define WEBGL2"
            .endl() + "#define texture2D texture"
            .endl() + "#define IN in"
            .endl() + "#define OUT out"
            .endl() + "#define UNI uniform"
            .endl() + "{{DRAWBUFFER}}"

            .endl();
    }
    else
    {
        fs = ""
            .endl() + "// "
            .endl() + "// fragment shader " + this._name
            .endl() + "// "
            .endl() + "#define WEBGL1"
            .endl() + "#define texture texture2D"
            .endl() + "#define outColor gl_FragColor"
            .endl() + "#define IN varying"
            .endl() + "#define UNI uniform"
            .endl();

        vs = ""
            .endl() + "// "
            .endl() + "// vertex shader " + this._name
            .endl() + "// "
            .endl() + "#define WEBGL1"
            .endl() + "#define texture texture2D"
            .endl() + "#define OUT varying"
            .endl() + "#define IN attribute"
            .endl() + "#define UNI uniform"
            .endl();
    }

    let uniformsStrVert = "\n// cgl generated".endl();
    let uniformsStrFrag = "\n// cgl generated".endl();


    fs += "\n// active mods: --------------- ";
    vs += "\n// active mods: --------------- ";

    let foundModsFrag = false;
    let foundModsVert = false;
    for (let i = 0; i < this._moduleNames.length; i++)
    {
        for (let j = 0; j < this._modules.length; j++)
        {
            if (this._modules[j].name == this._moduleNames[i])
            {
                if (this._modules[j].srcBodyFrag || this._modules[j].srcHeadFrag)
                {
                    foundModsFrag = true;
                    fs += "\n// " + i + "." + j + ". " + this._modules[j].title + " (" + this._modules[j].name + ")";
                }
                if (this._modules[j].srcBodyVert || this._modules[j].srcHeadVert)
                {
                    vs += "\n// " + i + "." + j + ". " + this._modules[j].title + " (" + this._modules[j].name + ")";
                    foundModsVert = true;
                }
            }
        }
    }
    if (!foundModsVert)fs += "\n// no mods used...";
    if (!foundModsFrag)fs += "\n// no mods used...";
    fs += "\n";
    vs += "\n";

    for (let i = 0; i < this._uniforms.length; i++)
    {
        if (this._uniforms[i].shaderType && !this._uniforms[i].isStructMember())
        {
            let uniStr = "";
            if (!this._uniforms[i].getGlslTypeString())uniStr += "// ";
            uniStr += "UNI " + this._uniforms[i].getGlslTypeString() + " " + this._uniforms[i].getName();
            let comment = "";
            if (this._uniforms[i].comment) comment = " // " + this._uniforms[i].comment;

            if (this._uniforms[i].shaderType == "vert" || this._uniforms[i].shaderType == "both")
                if (!this.srcVert.contains(uniStr) && !this.srcVert.contains("uniform " + this._uniforms[i].getGlslTypeString() + " " + this._uniforms[i].getName()))
                    uniformsStrVert += uniStr + ";" + comment.endl();

            if (this._uniforms[i].shaderType == "frag" || this._uniforms[i].shaderType == "both")
                if (!this.srcFrag.contains(uniStr) && !this.srcFrag.contains("uniform " + this._uniforms[i].getGlslTypeString() + " " + this._uniforms[i].getName()))
                    uniformsStrFrag += uniStr + ";" + comment.endl();
        }
    }


    let countUniFrag = 0;
    let countUniVert = 0;
    for (let i = 0; i < this._uniforms.length; i++)
    {
        if (this._uniforms[i].shaderType && !this._uniforms[i].isStructMember())
        {
            if (this._uniforms[i].shaderType == "vert" || this._uniforms[i].shaderType == "both") countUniVert++;
            if (this._uniforms[i].shaderType == "frag" || this._uniforms[i].shaderType == "both") countUniFrag++;
        }
    }
    if (countUniFrag >= this._cgl.maxUniformsFrag) this._log.warn("[cgl_shader] num uniforms frag: " + countUniFrag + " / " + this._cgl.maxUniformsFrag);
    if (countUniVert >= this._cgl.maxUniformsVert) this._log.warn("[cgl_shader] num uniforms vert: " + countUniVert + " / " + this._cgl.maxUniformsVert);


    if (!fs.contains("precision")) fs = "precision " + this.precision + " float;".endl() + fs;
    if (!vs.contains("precision")) vs = "precision " + this.precision + " float;".endl() + vs;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
    {
        fs += "#define MOBILE".endl();
        vs += "#define MOBILE".endl();
    }
    vs = extensionString + vs + definesStr + structStrings[0] + uniformsStrVert + "\n// -- \n" + this.srcVert;
    fs = extensionString + fs + definesStr + structStrings[1] + uniformsStrFrag + "\n// -- \n" + this.srcFrag;


    let srcHeadVert = "";
    let srcHeadFrag = "";

    this._modules.sort(function (a, b)
    {
        return a.group - b.group;
    });

    this._modules.sort(function (a, b)
    {
        return a.priority || 0 - b.priority || 0;
    });


    let addedAttribs = false;

    for (let i = 0; i < this._moduleNames.length; i++)
    {
        let srcVert = "";
        let srcFrag = "";

        if (!addedAttribs)
        {
            addedAttribs = true;

            for (let k = 0; k < this._attributes.length; k++)
            {
                const r = this._getAttrSrc(this._attributes[k], true);
                if (r.srcHeadVert)srcHeadVert += r.srcHeadVert;
                if (r.srcVert)srcVert += r.srcVert;
                if (r.srcHeadFrag)srcHeadFrag += r.srcHeadFrag;
            }
        }

        for (let j = 0; j < this._modules.length; j++)
        {
            const mod = this._modules[j];
            if (mod.name == this._moduleNames[i])
            {
                srcHeadVert += "\n//---- MOD: group:" + mod.group + ": idx:" + j + " - prfx:" + mod.prefix + " - " + mod.title + " ------\n";
                srcHeadFrag += "\n//---- MOD: group:" + mod.group + ": idx:" + j + " - prfx:" + mod.prefix + " - " + mod.title + " ------\n";

                srcVert += "\n\n//---- MOD: " + mod.title + " / " + mod.priority + " ------\n";
                srcFrag += "\n\n//---- MOD: " + mod.title + " / " + mod.priority + " ------\n";

                if (mod.attributes)
                    for (let k = 0; k < mod.attributes.length; k++)
                    {
                        const r = this._getAttrSrc(mod.attributes[k], false);
                        if (r.srcHeadVert)srcHeadVert += r.srcHeadVert;
                        if (r.srcVert)srcVert += r.srcVert;
                        if (r.srcHeadFrag)srcHeadFrag += r.srcHeadFrag;
                    }

                srcHeadVert += mod.srcHeadVert || "";
                srcHeadFrag += mod.srcHeadFrag || "";
                srcVert += mod.srcBodyVert || "";
                srcFrag += mod.srcBodyFrag || "";

                srcHeadVert += "\n//---- end mod ------\n";
                srcHeadFrag += "\n//---- end mod ------\n";

                srcVert += "\n//---- end mod ------\n";
                srcFrag += "\n//---- end mod ------\n";

                srcVert = srcVert.replace(/{{mod}}/g, mod.prefix);
                srcFrag = srcFrag.replace(/{{mod}}/g, mod.prefix);
                srcHeadVert = srcHeadVert.replace(/{{mod}}/g, mod.prefix);
                srcHeadFrag = srcHeadFrag.replace(/{{mod}}/g, mod.prefix);

                srcVert = srcVert.replace(/MOD_/g, mod.prefix);
                srcFrag = srcFrag.replace(/MOD_/g, mod.prefix);
                srcHeadVert = srcHeadVert.replace(/MOD_/g, mod.prefix);
                srcHeadFrag = srcHeadFrag.replace(/MOD_/g, mod.prefix);
            }
        }


        vs = vs.replace("{{" + this._moduleNames[i] + "}}", srcVert);
        fs = fs.replace("{{" + this._moduleNames[i] + "}}", srcFrag);
    }
    vs = vs.replace("{{MODULES_HEAD}}", srcHeadVert);
    fs = fs.replace("{{MODULES_HEAD}}", srcHeadFrag);


    vs = this._addLibs(vs);
    fs = this._addLibs(fs);


    // SETUP draw buffers / multi texture render targets

    let drawBufferStr = "";
    for (let i = 0; i < 16; i++)
        if (fs.contains("outColor" + i)) this._drawBuffers[i] = true;

    if (this._drawBuffers.length == 1)
    {
        drawBufferStr = "out vec4 outColor;".endl();
        drawBufferStr += "#define gl_FragColor outColor".endl();
    }
    else
    {
        drawBufferStr += "#define MULTI_COLORTARGETS".endl();
        drawBufferStr += "vec4 outColor;".endl();

        let count = 0;
        for (let i = 0; i < this._drawBuffers.length; i++)
        {
            if (count == 0) drawBufferStr += "#define gl_FragColor outColor" + i + "".endl();
            drawBufferStr += "layout(location = " + i + ") out vec4 outColor" + i + ";".endl();
            count++;
        }
    }

    fs = fs.replace("{{DRAWBUFFER}}", drawBufferStr);
    // //////


    if (!this._program)
    {
        this._program = this._createProgram(vs, fs);
    }
    else
    {
        // this.vshader=createShader(vs, gl.VERTEX_SHADER, this.vshader );
        // this.fshader=createShader(fs, gl.FRAGMENT_SHADER, this.fshader );
        // linkProgram(program);
        this._program = this._createProgram(vs, fs);

        this._projMatrixUniform = null;

        for (let i = 0; i < this._uniforms.length; i++) this._uniforms[i].resetLoc();
    }

    this.finalShaderFrag = fs;
    this.finalShaderVert = vs;


    MESH.lastMesh = null;
    MESH.lastShader = null;

    this._countMissingUniforms = 0;
    this._needsRecompile = false;
    this.lastCompile = now();

    // this._cgl.printError("shader compile");

    this._cgl.profileData.shaderCompileTime += performance.now() - startTime;
};

Shader.hasChanged = function ()
{
    return this._needsRecompile;
};


Shader.prototype.bind = function ()
{
    if (!this._isValid || this._cgl.aborted) return;

    MESH.lastShader = this;

    if (!this._program || this._needsRecompile) this.compile();
    if (!this._isValid) return;

    if (!this._projMatrixUniform && !this.ignoreMissingUniforms)
    {
        this._countMissingUniforms++;
        // if (this._countMissingUniforms == 10)console.log("stopping getlocation of missing uniforms...", this._name);
        if (this._countMissingUniforms < 10)
        {
            this._projMatrixUniform = this._cgl.gl.getUniformLocation(this._program, constants_CONSTANTS.SHADER.SHADERVAR_UNI_PROJMAT);
            this._attrVertexPos = this._cgl.glGetAttribLocation(this._program, constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_POSITION);
            this._mvMatrixUniform = this._cgl.gl.getUniformLocation(this._program, "mvMatrix");
            this._vMatrixUniform = this._cgl.gl.getUniformLocation(this._program, constants_CONSTANTS.SHADER.SHADERVAR_UNI_VIEWMAT);
            this._mMatrixUniform = this._cgl.gl.getUniformLocation(this._program, constants_CONSTANTS.SHADER.SHADERVAR_UNI_MODELMAT);
            this._camPosUniform = this._cgl.gl.getUniformLocation(this._program, constants_CONSTANTS.SHADER.SHADERVAR_UNI_VIEWPOS);
            this._normalMatrixUniform = this._cgl.gl.getUniformLocation(this._program, constants_CONSTANTS.SHADER.SHADERVAR_UNI_NORMALMAT);
            this._inverseViewMatrixUniform = this._cgl.gl.getUniformLocation(this._program, constants_CONSTANTS.SHADER.SHADERVAR_UNI_INVVIEWMAT);
            this._inverseProjMatrixUniform = this._cgl.gl.getUniformLocation(this._program, constants_CONSTANTS.SHADER.SHADERVAR_UNI_INVPROJMAT);
            this._materialIdUniform = this._cgl.gl.getUniformLocation(this._program, constants_CONSTANTS.SHADER.SHADERVAR_UNI_MATERIALID);
            this._objectIdUniform = this._cgl.gl.getUniformLocation(this._program, constants_CONSTANTS.SHADER.SHADERVAR_UNI_OBJECTID);

            for (let i = 0; i < this._uniforms.length; i++) this._uniforms[i].needsUpdate = true;
        }
    }


    if (this._cgl.currentProgram != this._program)
    {
        this._cgl.profileData.profileShaderBinds++;
        this._cgl.gl.useProgram(this._program);
        this._cgl.currentProgram = this._program;
    }

    for (let i = 0; i < this._uniforms.length; i++)
        if (this._uniforms[i].needsUpdate) this._uniforms[i].updateValue();

    if (this._pMatrixState != this._cgl.getProjectionMatrixStateCount())
    {
        this._pMatrixState = this._cgl.getProjectionMatrixStateCount();
        this._cgl.gl.uniformMatrix4fv(this._projMatrixUniform, false, this._cgl.pMatrix);
        this._cgl.profileData.profileMVPMatrixCount++;
    }

    if (this._objectIdUniform)
        this._cgl.gl.uniform1f(this._objectIdUniform, ++this._cgl.frameStore.objectIdCounter);

    if (this._materialIdUniform)
        this._cgl.gl.uniform1f(this._materialIdUniform, this._materialId);

    if (this._vMatrixUniform)
    {
        if (this._vMatrixState != this._cgl.getViewMatrixStateCount())
        {
            this._cgl.gl.uniformMatrix4fv(this._vMatrixUniform, false, this._cgl.vMatrix);
            this._cgl.profileData.profileMVPMatrixCount++;
            this._vMatrixState = this._cgl.getViewMatrixStateCount();

            if (this._inverseViewMatrixUniform)
            {
                mat4.invert(this._tempInverseViewMatrix, this._cgl.vMatrix);
                this._cgl.gl.uniformMatrix4fv(this._inverseViewMatrixUniform, false, this._tempInverseViewMatrix);
                this._cgl.profileData.profileMVPMatrixCount++;
            }
            if (this._inverseProjMatrixUniform)
            {
                mat4.invert(this._tempInverseProjMatrix, this._cgl.pMatrix);
                this._cgl.gl.uniformMatrix4fv(this._inverseProjMatrixUniform, false, this._tempInverseProjMatrix);
                this._cgl.profileData.profileMVPMatrixCount++;
            }
        }
        this._cgl.gl.uniformMatrix4fv(this._mMatrixUniform, false, this._cgl.mMatrix);
        this._cgl.profileData.profileMVPMatrixCount++;

        if (this._camPosUniform)
        {
            mat4.invert(this._tempCamPosMatrix, this._cgl.vMatrix);
            this._cgl.gl.uniform3f(this._camPosUniform, this._tempCamPosMatrix[12], this._tempCamPosMatrix[13], this._tempCamPosMatrix[14]);
            this._cgl.profileData.profileMVPMatrixCount++;
        }
    }
    else
    {
        // mvmatrix deprecated....
        const tempmv = mat4.create();

        mat4.mul(tempmv, this._cgl.vMatrix, this._cgl.mMatrix);
        this._cgl.gl.uniformMatrix4fv(this._mvMatrixUniform, false, tempmv);
        this._cgl.profileData.profileMVPMatrixCount++;
    }

    if (this._normalMatrixUniform)
    {
        // mat4.mul(this._tempNormalMatrix, this._cgl.vMatrix, this._cgl.mMatrix);
        mat4.invert(this._tempNormalMatrix, this._cgl.mMatrix);
        mat4.transpose(this._tempNormalMatrix, this._tempNormalMatrix);

        this._cgl.gl.uniformMatrix4fv(this._normalMatrixUniform, false, this._tempNormalMatrix);
        this._cgl.profileData.profileMVPMatrixCount++;
    }

    for (let i = 0; i < this._libs.length; i++)
    {
        if (this._libs[i].onBind) this._libs[i].onBind.bind(this._libs[i])(this._cgl, this);
    }

    this._bindTextures();

    return this._isValid;
};

Shader.prototype.unBind = function ()
{
};

/**
 * easily enable/disable a define without a value
 * @function toggleDefine
 * @memberof Shader
 * @instance
 * @param {name} name
 * @param {any} enabled value or port
 */
Shader.prototype.toggleDefine = function (name, enabled)
{
    if (enabled && typeof (enabled) == "object" && enabled.addEventListener) // port
    {
        if (enabled.changeListener)enabled.removeEventListener(enabled.changeListener);

        enabled.onToggleDefine = (v) =>
        {
            this.toggleDefine(name, v);
        };

        enabled.changeListener = enabled.on("change", enabled.onToggleDefine);
        enabled = enabled.get();
    }

    if (enabled) this.define(name);
    else this.removeDefine(name);
};

/**
 * add a define to a shader, e.g.  #define DO_THIS_THAT 1
 * @function define
 * @memberof Shader
 * @instance
 * @param {String} name
 * @param {Any} value (can be empty)
 */
Shader.prototype.define = function (name, value)
{
    if (value === null || value === undefined) value = "";

    if (typeof (value) == "object") // port
    {
        value.removeEventListener("change", value.onDefineChange);
        value.onDefineChange = (v) =>
        {
            this.define(name, v);
        };
        value.on("change", value.onDefineChange);

        value = value.get();
    }


    for (let i = 0; i < this._defines.length; i++)
    {
        if (this._defines[i][0] == name && this._defines[i][1] == value) return;
        if (this._defines[i][0] == name)
        {
            this._defines[i][1] = value;
            this.setWhyCompile("define " + name + " " + value);

            this._needsRecompile = true;
            return;
        }
    }
    this.setWhyCompile("define " + name + " " + value);
    this._needsRecompile = true;
    this._defines.push([name, value]);
};

Shader.prototype.getDefines = function ()
{
    return this._defines;
};

Shader.prototype.getDefine = function (name)
{
    for (let i = 0; i < this._defines.length; i++)
        if (this._defines[i][0] == name) return this._defines[i][1];
    return null;
};

/**
 * return true if shader has define
 * @function hasDefine
 * @memberof Shader
 * @instance
 * @param {String} name
 * @return {Boolean}
 */
Shader.prototype.hasDefine = function (name)
{
    for (let i = 0; i < this._defines.length; i++)
        if (this._defines[i][0] == name) return true;
};

/**
 * remove a define from a shader
 * @param {name} name
 * @function removeDefine
 * @memberof Shader
 * @instance
 */
Shader.prototype.removeDefine = function (name)
{
    for (let i = 0; i < this._defines.length; i++)
    {
        if (this._defines[i][0] == name)
        {
            this._defines.splice(i, 1);
            this._needsRecompile = true;

            this.setWhyCompile("define removed:" + name);

            return;
        }
    }
};

/**
 * remove a module from shader
 * @function removeModule
 * @memberof Shader
 * @instance
 * @param {shaderModule} mod the module to be removed
 */
Shader.prototype.removeModule = function (mod)
{
    for (let i = 0; i < this._modules.length; i++)
    {
        if (mod && mod.id)
        {
            if (this._modules[i].id == mod.id || !this._modules[i])
            {
                let found = true;
                while (found)
                {
                    found = false;
                    for (let j = 0; j < this._uniforms.length; j++)
                    {
                        if (this._uniforms[j].getName().startsWith(mod.prefix))
                        {
                            this._uniforms.splice(j, 1);
                            found = true;
                            continue;
                        }
                    }
                }

                this._needsRecompile = true;
                this.setWhyCompile("remove module " + mod.title);
                this._modules.splice(i, 1);
                break;
            }
        }
    }
};


Shader.prototype.getNumModules = function ()
{
    return this._modules.length;
};


Shader.prototype.getCurrentModules = function () { return this._modules; };


/**
 * add a module
 * @function addModule
 * @memberof Shader
 * @instance
 * @param {shaderModule} mod the module to be added
 * @param {shaderModule} [sibling] sibling module, new module will share the same group
 */
Shader.prototype.addModule = function (mod, sibling)
{
    if (this.hasModule(mod.id)) return;
    if (!mod.id) mod.id = CABLES.simpleId();
    if (!mod.numId) mod.numId = this._moduleNumId;
    if (!mod.num)mod.num = this._modules.length;
    if (sibling && !sibling.group) sibling.group = simpleId();

    if (!mod.group)
        if (sibling) mod.group = sibling.group;
        else mod.group = simpleId();

    mod.prefix = "mod" + mod.group + "_";
    this._modules.push(mod);

    this._needsRecompile = true;
    this.setWhyCompile("add module " + mod.title);
    this._moduleNumId++;

    return mod;
};

Shader.prototype.hasModule = function (modId)
{
    for (let i = 0; i < this._modules.length; i++)
    {
        if (this._modules[i].id == modId) return true;
    }
    return false;
};

Shader.prototype.setModules = function (names)
{
    this._moduleNames = names;
};

Shader.prototype.dispose = function ()
{
    this._cgl.gl.deleteProgram(this._program);
};

Shader.prototype.needsRecompile = function ()
{
    return this._needsRecompile;
};

Shader.prototype.setDrawBuffers = function (arr)
{
    console.log("useless drawbuffers...?!");
    // if (this._drawBuffers.length !== arr.length)
    // {
    //     this._drawBuffers = arr;
    //     this._needsRecompile = true;
    //     this.setWhyCompile("setDrawBuffers");
    //     return;
    // }
    // for (let i = 0; i < arr.length; i++)
    // {
    //     if (arr[i] !== this._drawBuffers[i])
    //     {
    //         this._drawBuffers = arr;
    //         this._needsRecompile = true;
    //         this.setWhyCompile("setDrawBuffers");
    //         return;
    //     }
    // }
};

Shader.prototype.getUniforms = function ()
{
    return this._uniforms;
};

Shader.prototype.getUniform = function (name)
{
    for (let i = 0; i < this._uniforms.length; i++)
        if (this._uniforms[i].getName() == name)
            return this._uniforms[i];
    return null;
};

Shader.prototype.removeAllUniforms = function ()
{
    this._uniforms = [];
    // for (let i = 0; i < this._uniforms.length; i++)
    //     this.removeUniform(this._uniforms[i].name);
};

Shader.prototype.removeUniform = function (name)
{
    for (let i = 0; i < this._uniforms.length; i++)
    {
        if (this._uniforms[i].getName() == name)
        {
            this._uniforms.splice(i, 1);
        }
    }
    this._needsRecompile = true;
    this.setWhyCompile("remove uniform " + name);
};


Shader.prototype._addUniform = function (uni)
{
    this._uniforms.push(uni);
    this.setWhyCompile("add uniform " + name);
    this._needsRecompile = true;
};

/**
 * add a uniform to the fragment shader
 * @param {String} type ['f','t', etc]
 * @param {String} name
 * @param {any} valueOrPort value or port
 * @param p2
 * @param p3
 * @param p4
 * @memberof Shader
 * @instance
 * @function addUniformFrag
 * @returns {CGL.Uniform}
 */
Shader.prototype.addUniformFrag = function (type, name, valueOrPort, p2, p3, p4)
{
    const uni = new CGL.Uniform(this, type, name, valueOrPort, p2, p3, p4);
    uni.shaderType = "frag";
    return uni;
};

/**
 * add a uniform to the vertex shader
 * @param {String} type ['f','t', etc]
 * @param {String} name
 * @param {any} valueOrPort value or port
 * @param p2
 * @param p3
 * @param p4
 * @memberof Shader
 * @instance
 * @function addUniformVert
 * @returns {CGL.Uniform}
 */
Shader.prototype.addUniformVert = function (type, name, valueOrPort, p2, p3, p4)
{
    const uni = new CGL.Uniform(this, type, name, valueOrPort, p2, p3, p4);
    uni.shaderType = "vert";
    return uni;
};
/**
 * add a uniform to both shaders
 * @param {String} type ['f','t', etc]
 * @param {String} name
 * @param {any} valueOrPort value or port
 * @param p2
 * @param p3
 * @param p4
 * @memberof Shader
 * @instance
 * @function addUniformBoth
 * @returns {CGL.Uniform}
 */
Shader.prototype.addUniformBoth = function (type, name, valueOrPort, p2, p3, p4)
{
    const uni = new CGL.Uniform(this, type, name, valueOrPort, p2, p3, p4);
    uni.shaderType = "both";
    return uni;
};

/**
 * add a struct & its uniforms to the fragment shader
 * @param {String} structName name of the struct, i.e.: LightStruct
 * @param {String} uniformName name of the struct uniform in the shader, i.e.: lightUni
 * @param {Array} members array of objects containing the struct members. see example for structure

 * @memberof Shader
 * @instance
 * @function addUniformStructFrag
 * @returns {Object}
 * @example
 * const shader = new CGL.Shader(cgl, 'MinimalMaterial');
 * shader.setSource(attachments.shader_vert, attachments.shader_frag);
 * shader.addUniformStructFrag("Light", "uniformLight", [
 * { "type": "3f", "name": "position", "v1": null },
 * { "type": "4f", "name": "color", "v1": inR, v2: inG, v3: inB, v4: inAlpha }
 * ]);
 */
Shader.prototype.addUniformStructFrag = function (structName, uniformName, members)
{
    const uniforms = {};

    if (!members) return uniforms;

    for (let i = 0; i < members.length; i += 1)
    {
        const member = members[i];
        if (!this.hasUniform(uniformName + "." + member.name))
        {
            const uni = new CGL.Uniform(this, member.type, uniformName + "." + member.name, member.v1, member.v2, member.v3, member.v4, uniformName, structName, member.name);
            uni.shaderType = "frag";
            uniforms[uniformName + "." + member.name] = uni;
        }
    }

    return uniforms;
};

/**
 * add a struct & its uniforms to the vertex shader
 * @param {String} structName name of the struct, i.e.: LightStruct
 * @param {String} uniformName name of the struct uniform in the shader, i.e.: lightUni
 * @param {Array} members array of objects containing the struct members. see example for structure

 * @memberof Shader
 * @instance
 * @function addUniformStructVert
 * @returns {CGL.Uniform}
 * @example
 * const shader = new CGL.Shader(cgl, 'MinimalMaterial');
 * shader.setSource(attachments.shader_vert, attachments.shader_frag);
 * shader.addUniformStructVert("Light", "uniformLight", [
 * { "type": "3f", "name": "position", "v1": null },
 * { "type": "4f", "name": "color", "v1": inR, v2: inG, v3: inB, v4: inAlpha }
 * ]);
 */
Shader.prototype.addUniformStructVert = function (structName, uniformName, members)
{
    const uniforms = {};

    if (!members) return uniforms;

    for (let i = 0; i < members.length; i += 1)
    {
        const member = members[i];
        if (!this.hasUniform(uniformName + "." + member.name))
        {
            const uni = new CGL.Uniform(this, member.type, uniformName + "." + member.name, member.v1, member.v2, member.v3, member.v4, uniformName, structName, member.name);
            uni.shaderType = "vert";
            uniforms[uniformName + "." + member.name] = uni;
        }
    }

    return uniforms;
};

/**
 * add a struct & its uniforms to the both shaders. PLEASE NOTE: it is not possible to add the same struct to both shaders when it contains ANY integer members.
 * @param {String} structName name of the struct, i.e.: LightStruct
 * @param {String} uniformName name of the struct uniform in the shader, i.e.: lightUni
 * @param {Array} members array of objects containing the struct members. see example for structure

 * @memberof Shader
 * @instance
 * @function addUniformStructBoth
 * @returns {Object}
 * @example
 * const shader = new CGL.Shader(cgl, 'MinimalMaterial');
 * shader.setSource(attachments.shader_vert, attachments.shader_frag);
 * shader.addUniformStructBoth("Light", "uniformLight", [
 * { "type": "3f", "name": "position", "v1": null },
 * { "type": "4f", "name": "color", "v1": inR, v2: inG, v3: inB, v4: inAlpha }
 * ]);
 */
Shader.prototype.addUniformStructBoth = function (structName, uniformName, members)
{
    const uniforms = {};

    if (!members) return uniforms;

    for (let i = 0; i < members.length; i += 1)
    {
        const member = members[i];
        if ((member.type === "2i" || member.type === "i" || member.type === "3i"))
            this._log.error("Adding an integer struct member to both shaders can potentially error. Please use different structs for each shader. Error occured in struct:", structName, " with member:", member.name, " of type:", member.type, ".");
        if (!this.hasUniform(uniformName + "." + member.name))
        {
            const uni = new CGL.Uniform(this, member.type, uniformName + "." + member.name, member.v1, member.v2, member.v3, member.v4, uniformName, structName, member.name);
            uni.shaderType = "both";
            uniforms[uniformName + "." + member.name] = uni;
        }
    }

    return uniforms;
};

Shader.prototype.hasUniform = function (name)
{
    for (let i = 0; i < this._uniforms.length; i++)
    {
        if (this._uniforms[i].getName() == name) return true;
    }
    return false;
};

Shader.prototype._createProgram = function (vstr, fstr)
{
    this._cgl.printError("before _createprogram");

    const program = this._cgl.gl.createProgram();

    this.vshader = Shader.createShader(this._cgl, vstr, this._cgl.gl.VERTEX_SHADER, this);
    this.fshader = Shader.createShader(this._cgl, fstr, this._cgl.gl.FRAGMENT_SHADER, this);


    if (this.vshader && this.fshader)
    {
        this._cgl.gl.attachShader(program, this.vshader);
        this._cgl.gl.attachShader(program, this.fshader);

        this._linkProgram(program, vstr, fstr);
    }
    else
    {
        this._isValid = false;
        this._cgl.printError("shader _createProgram");
        this._log.error("could not link shaderprogram");
        return null;
    }

    this._cgl.printError("shader _createProgram");
    return program;
};

Shader.prototype.hasErrors = function ()
{
    return this._hasErrors;
};

Shader.prototype._linkProgram = function (program, vstr, fstr)
{
    this._cgl.printError("before _linkprogram");

    if (this._feedBackNames.length > 0)
    {
        this._cgl.gl.transformFeedbackVaryings(program, this._feedBackNames, this._cgl.gl.SEPARATE_ATTRIBS);
        // INTERLEAVED_ATTRIBS
        // SEPARATE_ATTRIBS
    }

    this._cgl.gl.linkProgram(program);
    this._cgl.printError("gl.linkprogram");
    this._isValid = true;

    this._hasErrors = false;

    if (this._cgl.patch.config.glValidateShader !== false)
    {
        this._cgl.gl.validateProgram(program);

        if (!this._cgl.gl.getProgramParameter(program, this._cgl.gl.VALIDATE_STATUS))
        {
            // validation failed
            console.log("shaderprogram validation failed...");
            console.log(this._name + " programinfo: ", this._cgl.gl.getProgramInfoLog(program));
        }

        if (!this._cgl.gl.getProgramParameter(program, this._cgl.gl.LINK_STATUS))
        {
            this._hasErrors = true;

            const infoLogFrag = this._cgl.gl.getShaderInfoLog(this.fshader);
            const infoLogVert = this._cgl.gl.getShaderInfoLog(this.vshader);

            if (infoLogFrag) this._log.warn(this._cgl.gl.getShaderInfoLog(this.fshader));
            if (infoLogVert) this._log.warn(this._cgl.gl.getShaderInfoLog(this.vshader));

            this._log.error(this._name + " shader linking fail...");

            console.log(this._name + " programinfo: ", this._cgl.gl.getProgramInfoLog(program));
            console.log(this);
            this._isValid = false;

            this._name = "errorshader";
            this.setSource(Shader.getDefaultVertexShader(), Shader.getErrorFragmentShader());
            this._cgl.printError("shader link err");
        }
    }
};

Shader.prototype.getProgram = function ()
{
    return this._program;
};

Shader.prototype.setFeedbackNames = function (names)
{
    this.setWhyCompile("setFeedbackNames");
    this._needsRecompile = true;
    this._feedBackNames = names;
};

Shader.prototype.getDefaultVertexShader = Shader.getDefaultVertexShader = function ()
{
    return cgl_shader_default_glsl;
};

Shader.prototype.getDefaultFragmentShader = Shader.getDefaultFragmentShader = function (r, g, b)
{
    if (r == undefined)
    {
        r = 0.5;
        g = 0.5;
        b = 0.5;
    }
    return ""
        .endl() + "IN vec2 texCoord;"
        .endl() + "{{MODULES_HEAD}}"
        .endl() + "void main()"
        .endl() + "{"
        .endl() + "    vec4 col=vec4(" + r + "," + g + "," + b + ",1.0);"
        .endl() + "    {{MODULE_COLOR}}"
        .endl() + "    outColor = col;"
        .endl() + "}";
};

/**
  * adds attribute definition to shader header without colliding with other shader modules...
 * when attrFrag is defined, vertex shader will output this attribute to the fragment shader
 * @function
 * @memberof Shader
 * @instance
 * @param {Object} attr {type:x,name:x,[nameFrag:x]}
 * @return {Object}
 */
Shader.prototype.addAttribute = function (attr)
{
    for (let i = 0; i < this._attributes.length; i++)
    {
        if (this._attributes[i].name == attr.name && this._attributes[i].nameFrag == attr.nameFrag) return;
    }
    this._attributes.push(attr);
    this._needsRecompile = true;
    this.setWhyCompile("addAttribute");
};

Shader.prototype.bindTextures =
Shader.prototype._bindTextures = function ()
{
    if (this._textureStackTex.length > this._cgl.maxTextureUnits)
    {
        this._log.warn("[shader._bindTextures] too many textures bound", this._textureStackTex.length + "/" + this._cgl.maxTextureUnits);
    }

    // for (let i = this._textureStackTex.length + 1; i < this._cgl.maxTextureUnits; i++) this._cgl.setTexture(i, null);

    for (let i = 0; i < this._textureStackTex.length; i++)
    {
        // console.log(this._textureStackTex.length, i);
        if (!this._textureStackTex[i] && !this._textureStackTexCgl[i])
        {
            this._log.warn("no texture for pushtexture", this._name);
        }
        else
        {
            let t = this._textureStackTex[i];
            if (this._textureStackTexCgl[i])
            {
                t = this._textureStackTexCgl[i].tex || CGL.Texture.getEmptyTexture(this._cgl).tex;
            }

            let bindOk = true;

            if (!this._textureStackUni[i])
            {
                // throw(new Error('no uniform given to texturestack'));
                this._log.warn("no uniform for pushtexture", this._name);
                bindOk = this._cgl.setTexture(i, t, this._textureStackType[i]);
            }
            else
            {
                this._textureStackUni[i].setValue(i);
                bindOk = this._cgl.setTexture(i, t, this._textureStackType[i]);

                // console.log(bindOk, i, t, this._textureStackType[i]);
            }
            if (!bindOk) console.warn("tex bind failed", this.getName(), this._textureStackUni[i]);
        }
    }
};

Shader.prototype.setUniformTexture = function (uni, tex)
{
    tex = tex || CGL.Texture.getTempTexture(this._cgl);
    for (let i = 0; i < this._textureStackUni.length; i++)
        if (this._textureStackUni[i] == uni)
        {
            const old = this._textureStackTex[i] || this._textureStackTexCgl[i];
            if (tex.hasOwnProperty("tex"))
            {
                this._textureStackTexCgl[i] = tex;
                this._textureStackTex[i] = null;
            }
            else
            {
                this._textureStackTexCgl[i] = null;
                this._textureStackTex[i] = tex;
            }

            // this._textureStackTex[i] = tex;
            // this._cgl.setTexture(i, tex, this._textureStackType[i]);
            return old;
        }
    return null;
};

/**
 * push a texture on the stack. those textures will be bound when binding the shader. texture slots are automatically set
 * @param {uniform} uniform texture uniform
 * @param {texture} t texture
 * @param {type} type texture type, can be ignored when TEXTURE_2D
 * @function pushTexture
 * @memberof Shader
 * @instance
 */
Shader.prototype.pushTexture = function (uniform, t, type)
{
    if (!uniform)
    {
        console.log("no uniform given to texturestack", uniform);
        return;
    }
    if (!t)
    {
        return;
    }
    if (!t.hasOwnProperty("tex") && !(t instanceof WebGLTexture))
    {
        this._log.warn(new Error("invalid texture").stack);

        this._log.warn("[cgl_shader] invalid texture...", t);
        return;
    }

    this._textureStackUni.push(uniform);

    if (t.hasOwnProperty("tex"))
    {
        this._textureStackTexCgl.push(t);
        this._textureStackTex.push(null);
    }
    else
    {
        this._textureStackTexCgl.push(null);
        this._textureStackTex.push(t);
    }

    this._textureStackType.push(type);
};

/**
 * pop last texture
 * @function popTexture
 * @memberof Shader
 * @instance
 */
Shader.prototype.popTexture = function ()
{
    this._textureStackUni.pop();
    this._textureStackTex.pop();
    this._textureStackTexCgl.pop();
    this._textureStackType.pop();
};

/**
 * pop all textures
 * @function popTextures
 * @memberof Shader
 * @instance
 */
Shader.prototype.popTextures = function ()
{
    this._textureStackTex.length =
    this._textureStackTexCgl.length =
    this._textureStackType.length =
    this._textureStackUni.length = 0;
};

Shader.prototype.getMaterialId = function ()
{
    return this._materialId;
};

Shader.prototype.getInfo = function ()
{
    const info = {};
    info.name = this._name;
    // info.modules = JSON.parse(JSON.stringify(this._modules));
    // info.defines = JSON.parse(JSON.stringify(this._defines));
    info.defines = this.getDefines();
    info.hasErrors = this.hasErrors();

    return info;
};

// --------------------------

Shader.getErrorFragmentShader = function ()
{
    return ""
        .endl() + "void main()"
        .endl() + "{"
        .endl() + "   float g=mod((gl_FragCoord.y+gl_FragCoord.x),50.0)/50.0;"
        .endl() + "   g= step(0.1,g);"
        .endl() + "   outColor = vec4( g+0.5, 0.0, 0.0, 1.0);"
        .endl() + "}";
};

Shader.createShader = function (cgl, str, type, cglShader)
{
    if (cgl.aborted) return;

    // cgl.printError("[Shader.createShader] ", cglShader._name);

    function getBadLines(infoLog)
    {
        const basLines = [];
        const lines = infoLog.split("\n");
        for (const i in lines)
        {
            const divide = lines[i].split(":");
            if (parseInt(divide[2], 10)) basLines.push(parseInt(divide[2], 10));
        }
        return basLines;
    }


    const shader = cgl.gl.createShader(type);
    cgl.gl.shaderSource(shader, str);
    cgl.gl.compileShader(shader);

    if (!cgl.gl.getShaderParameter(shader, cgl.gl.COMPILE_STATUS))
    {
        let infoLog = cgl.gl.getShaderInfoLog(shader);
        if (!infoLog)
        {
            console.warn("empty shader info log", this._name);
            return;
        }


        const badLines = getBadLines(infoLog);
        let htmlWarning = "<pre style=\"margin-bottom:0px;\"><code class=\"shaderErrorCode language-glsl\" style=\"padding-bottom:0px;max-height: initial;max-width: initial;\">";
        const lines = str.match(/^.*((\r\n|\n|\r)|$)/gm);

        if (!cgl.aborted && infoLog)
        {
            if (type == cgl.gl.VERTEX_SHADER) console.log("VERTEX_SHADER");
            if (type == cgl.gl.FRAGMENT_SHADER) console.log("FRAGMENT_SHADER");

            for (const i in lines)
            {
                const j = parseInt(i, 10) + 1;
                const line = j + ": " + lines[i];

                let isBadLine = false;
                for (const bj in badLines)
                    if (badLines[bj] == j) isBadLine = true;

                if (isBadLine)
                {
                    htmlWarning += "</code></pre>";
                    htmlWarning += "<pre style=\"margin:0\"><code class=\"language-glsl\" style=\"background-color:#660000;padding-top:0px;padding-bottom:0px\">";

                    cglShader._log.log("bad line: `" + line + "`");
                }
                htmlWarning += escapeHTML(line);

                if (isBadLine)
                {
                    htmlWarning += "</code></pre>";
                    htmlWarning += "<pre style=\"margin:0\"><code class=\"language-glsl\" style=\";padding-top:0px;padding-bottom:0px\">";
                }
            }
        }

        infoLog = infoLog.replace(/\n/g, "<br/>");
        if (cgl.patch.isEditorMode())console.log("Shader error ", cglShader._name, infoLog, this);

        htmlWarning = infoLog + "<br/>" + htmlWarning + "<br/><br/>";
        htmlWarning += "</code></pre>";

        if (this._fromUserInteraction)
        {
            // console.log("todo show modal?");
            // cgl.patch.emitEvent("criticalError", { "title": "Shader error " + cglShader._name, "text": htmlWarning, "exception": { "message": infoLog } });
        }

        cglShader.setSource(Shader.getDefaultVertexShader(), Shader.getErrorFragmentShader());
    }
    else
    {
        // console.log(name+' shader compiled...');
    }
    // cgl.printError("shader create2");
    return shader;
};




;// CONCATENATED MODULE: ./src/core/cgl/cgl_profiledata.js
class ProfileData
{
    constructor(cgl)
    {
        this._cgl = cgl;
        this._lastTime = 0;
        this.pause = false;
        this.profileUniformCount = 0;
        this.profileShaderBinds = 0;
        this.profileUniformCount = 0;
        this.profileShaderCompiles = 0;
        this.profileVideosPlaying = 0;
        this.profileMVPMatrixCount = 0;
        this.profileEffectBuffercreate = 0;
        this.profileShaderGetUniform = 0;
        this.profileFrameBuffercreate = 0;
        this.profileMeshSetGeom = 0;
        this.profileTextureNew = 0;
        this.profileGenMipMap = 0;
        this.profileOnAnimFrameOps = 0;

        this.profileFencedPixelRead = 0;
        this.profileMainloopMs = 0;
        this.profileMeshDraw = 0;
        this.profileTextureEffect = 0;
        this.profileTexPreviews = 0;
        this.shaderCompileTime = 0;
        this.profileMeshNumElements = 0;
        this.profileMeshAttributes = 0;
        this.profileSingleMeshAttribute = [];
        this.heavyEvents = [];

        this.doProfileGlQuery = false;
        this.glQueryData = {};
    }

    clear()
    {
        this.profileSingleMeshAttribute = {};
        this.profileMeshAttributes = 0;
        this.profileUniformCount = 0;
        this.profileShaderGetUniform = 0;
        this.profileShaderCompiles = 0;
        this.profileShaderBinds = 0;
        this.profileTextureResize = 0;
        this.profileFrameBuffercreate = 0;
        this.profileEffectBuffercreate = 0;
        this.profileTextureDelete = 0;
        this.profileMeshSetGeom = 0;
        this.profileVideosPlaying = 0;
        this.profileMVPMatrixCount = 0;
        this.profileNonTypedAttrib = 0;
        this.profileNonTypedAttribNames = "";
        this.profileTextureNew = 0;
        this.profileGenMipMap = 0;
        this.profileFramebuffer = 0;
        this.profileMeshDraw = 0;
        this.profileTextureEffect = 0;
        this.profileTexPreviews = 0;
        this.profileMeshNumElements = 0;
        this.profileFencedPixelRead = 0;
    }

    clearGlQuery()
    {
        for (let i in this.glQueryData)
        {
            if (!this.glQueryData[i].lastClear || performance.now() - this.glQueryData[i].lastClear > 1000)
            {
                this.glQueryData[i].time = this.glQueryData[i]._times / this.glQueryData[i]._numcount;
                this.glQueryData[i].num = this.glQueryData[i]._numcount;

                this.glQueryData[i]._times = 0;
                this.glQueryData[i]._numcount = 0;
                this.glQueryData[i].lastClear = performance.now();
            }
        }
    }

    addHeavyEvent(event, name, info)
    {
        const e = { "event": event, "name": name, "info": info, "date": performance.now() };
        this.heavyEvents.push(e);
        this._cgl.emitEvent("heavyEvent", e);
    }
}




;// CONCATENATED MODULE: ../shared/client/src/helper.js
/**
 * Shared helper methods for cables uis
 */
class Helper
{
    constructor()
    {
        this._simpleIdCounter = 0;
    }


    /**
     * generate a random v4 uuid
     *
     * @return {string}
     */
    uuid()
    {
        let d = new Date().getTime();
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) =>
        {
            const r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
        });
    }

    /**
     * checks value for !isNan and isFinite
     *
     * @param n
     * @return {boolean}
     */
    isNumeric(n)
    {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    /**
     * generate a simple ID using an internal counter
     *
     * @return {Number} new id
     * @static
     */
    simpleId()
    {
        this._simpleIdCounter++;
        return this._simpleIdCounter;
    }
}
/* harmony default export */ const helper = (new Helper());

;// CONCATENATED MODULE: ../shared/client/src/eventtarget.js



/**
 * add eventlistener functionality to classes
 */
class Events
{
    constructor()
    {
        this._log = new Logger("eventtarget");
        this._eventCallbacks = {};
        this._logName = "";
        this._logEvents = false;
        this._listeners = {};

        this.on = this.addEventListener;
        this.off = this.removeEventListener;
    }

    /**
     * add event listener
     * @param which event name
     * @param cb callback
     * @param {string} idPrefix prefix for id, default empty
     * @return {string} event id
     */
    addEventListener(which, cb, idPrefix = "")
    {
        const event =
            {
                "id": (idPrefix || "") + helper.simpleId(),
                "name": which,
                "cb": cb,
            };
        if (!this._eventCallbacks[which]) this._eventCallbacks[which] = [event];
        else this._eventCallbacks[which].push(event);

        this._listeners[event.id] = event;

        return event.id;
    }

    /**
     * check event listener registration
     * @param id event id
     * @param cb callback - deprecated
     * @return {boolean}
     */
    hasEventListener(id, cb = null)
    {
        if (id && !cb)
        {
            // check by id
            return !!this._listeners[id];
        }
        else
        {
            this._log.warn("old eventtarget function haseventlistener!");
            if (id && cb)
            {
                if (this._eventCallbacks[id])
                {
                    const idx = this._eventCallbacks[id].indexOf(cb);
                    return idx !== -1;
                }
            }
        }
    }

    /**
     * check event listener by name
     * @param eventName event name
     * @return {boolean}
     */
    hasListenerForEventName(eventName)
    {
        return this._eventCallbacks[eventName] && this._eventCallbacks[eventName].length > 0;
    }

    /**
     * rempve event listener registration
     * @param id event id
     * @param cb callback - deprecated
     * @return
     */
    removeEventListener(id, cb = null)
    {
        if (id === null || id === undefined) return;

        if (!cb) // new style, remove by id, not by name/callback
        {
            const event = this._listeners[id];
            if (!event)
            {
                this._log.log("could not find event...");
                return;
            }

            let found = true;
            while (found)
            {
                found = false;
                let index = -1;
                for (let i = 0; i < this._eventCallbacks[event.name].length; i++)
                {
                    if (this._eventCallbacks[event.name][i].id.indexOf(id) === 0) // this._eventCallbacks[event.name][i].id == which ||
                    {
                        found = true;
                        index = i;
                    }
                }

                if (index !== -1)
                {
                    this._eventCallbacks[event.name].splice(index, 1);
                    delete this._listeners[id];
                }
            }

            return;
        }

        this._log.info("[eventtaget] ", "old function signature: removeEventListener! use listener id");
        this._log.log((new Error()).stack);

        let index = null;
        for (let i = 0; i < this._eventCallbacks[id].length; i++)
            if (this._eventCallbacks[id][i].cb === cb)
                index = i;

        if (index !== null)
        {
            delete this._eventCallbacks[index];
        }
        else this._log.warn("removeEventListener not found " + id);
    }

    /**
     * enable/disable logging of events for the class
     *
     * @param {boolean} enabled
     * @param {string} logName
     */
    logEvents(enabled, logName)
    {
        this._logEvents = enabled;
        this._logName = logName;
    }

    /**
     * emit event
     *
     * @param {string} which event name
     * @param {*} param1
     * @param {*} param2
     * @param {*} param3
     * @param {*} param4
     * @param {*} param5
     * @param {*} param6
     */
    emitEvent(which, param1 = null, param2 = null, param3 = null, param4 = null, param5 = null, param6 = null)
    {
        if (this._logEvents) this._log.log("[event] ", this._logName, which, this._eventCallbacks);

        if (this._eventCallbacks[which])
        {
            for (let i = 0; i < this._eventCallbacks[which].length; i++)
            {
                if (this._eventCallbacks[which][i])
                {
                    this._eventCallbacks[which][i].cb(param1, param2, param3, param4, param5, param6);
                }
            }
        }
        else
        {
            if (this._logEvents) this._log.log("[event] has no event callback", which, this._eventCallbacks);
        }
    }
}


;// CONCATENATED MODULE: ./src/core/cg/cg_canvas.js
class CgCanvas
{
    constructor(options)
    {
        if (!options)
        {
            console.error("CgCanvas no options");
        }
        else
        {
            this._canvasEle = options.canvasEle;
        }

        if (!options.cg)console.error("CgCanvas options has no cg");
        if (!options.canvasEle)console.error("CgCanvas options has no canvasEle");

        this._cg = options.cg;
        this.pixelDensity = 1;
        this.canvasWidth = this.canvasEle.clientWidth;
        this.canvasHeight = this.canvasEle.clientHeight;

        this._oldWidthRp = -1;
        this._oldHeightRp = -1;

        this.setSize(this.canvasWidth, this.canvasHeight);
    }

    get canvasEle() { return this._canvasEle; }


    setSize(w, h, ignorestyle)
    {
        if (this._oldWidthRp != w * this.pixelDensity || this._oldHeightRp != h * this.pixelDensity)
        {
            this._oldWidthRp = this.canvasEle.width = w * this.pixelDensity;
            this._oldHeightRp = this.canvasEle.height = h * this.pixelDensity;

            if (!ignorestyle)
            {
                this.canvasEle.style.width = w + "px";
                this.canvasEle.style.height = h + "px";
            }

            this.updateSize();

            this._cg.emitEvent("resize");
        }
    }

    updateSize()
    {
        this.canvasEle.width = this.canvasWidth = this.canvasEle.clientWidth * this.pixelDensity;
        this.canvasEle.height = this.canvasHeight = this.canvasEle.clientHeight * this.pixelDensity;
    }

    dispose()
    {
        this._canvasEle.remove();
        this._canvasEle = null;
    }
}



;// CONCATENATED MODULE: ./src/core/cg/cg_matrixstack.js

const MatrixStack = function ()
{
    this._arr = [mat4.create()];
    this._index = 0;
    this.stateCounter = 0;
};

MatrixStack.prototype.push = function (m)
{
    this._index++;
    this.stateCounter++;

    if (this._index == this._arr.length)
    {
        const copy = mat4.create();
        this._arr.push(copy);
    }

    mat4.copy(this._arr[this._index], m || this._arr[this._index - 1]);

    return this._arr[this._index];
};

MatrixStack.prototype.pop = function ()
{
    this.stateCounter++;

    this._index--;
    if (this._index < 0) this._index = 0;

    return this._arr[this._index];
};

MatrixStack.prototype.length = function ()
{
    return this._index;
};



;// CONCATENATED MODULE: ./src/core/cg/cg_state.js





// const CGState ()
class CGState extends Events
{
    constructor(_patch)
    {
        super();
        // this.canvas = null;

        this.fpsCounter = new CABLES.CG.FpsCounter();
        this._identView = vec3.create();
        this._ident = vec3.create();
        vec3.set(this._identView, 0, 0, -2);
        vec3.set(this._ident, 0, 0, 0);

        this.patch = _patch;

        this.DEPTH_COMPARE_FUNC_NEVER = 0;
        this.DEPTH_COMPARE_FUNC_LESS = 1;
        this.DEPTH_COMPARE_FUNC_EQUAL = 2;
        this.DEPTH_COMPARE_FUNC_LESSEQUAL = 3;
        this.DEPTH_COMPARE_FUNC_GREATER = 4;
        this.DEPTH_COMPARE_FUNC_NOTEQUAL = 5;
        this.DEPTH_COMPARE_FUNC_GREATEREQUAL = 6;
        this.DEPTH_COMPARE_FUNC_ALWAYS = 7;


        /**
         * Current projection matrix
         * @memberof Context
         * @instance
         * @type {mat4}
         */
        this.pMatrix = mat4.create();

        /**
         * Current model matrix
         * @memberof Context
         * @instance
         * @type {mat4}
         */
        this.mMatrix = mat4.create();

        /**
         * Current view matrix
         * @memberof Context
         * @instance
         * @type {mat4}
         */
        this.vMatrix = mat4.create();
        this._textureslots = [];

        this._pMatrixStack = new MatrixStack();
        this._mMatrixStack = new MatrixStack();
        this._vMatrixStack = new MatrixStack();

        this.canvasScale = 1;

        mat4.identity(this.mMatrix);
        mat4.identity(this.vMatrix);


        window.matchMedia("screen and (min-resolution: 2dppx)")
            .addEventListener("change", (e) =>
            {
                this.emitEvent("resize");
            });
    }

    get canvasWidth()
    {
        return this.cgCanvas.canvasWidth;
    }

    get canvasHeight()
    {
        return this.cgCanvas.canvasHeight;
    }

    set pixelDensity(p)
    {
        if (this.cgCanvas.pixelDensity != p)
        {
            this.cgCanvas.pixelDensity = p;
            this.cgCanvas.updateSize();
            this.emitEvent("resize");
        }
    }

    get pixelDensity()
    {
        return this.cgCanvas.pixelDensity;
    }


    getGApiName()
    {
        return ["WebGL", "WebGPU"][this.gApi];
    }

    get canvas()
    {
        return this.cgCanvas.canvasEle;
    }



    setCanvas(canvEle)
    {
        if (this.cgCanvas && canvEle == this.cgCanvas.canvasEle) return;
        if (typeof canvEle === "string") canvEle = document.getElementById(canvEle);

        this.cgCanvas = new CgCanvas({ "canvasEle": canvEle, "cg": this });

        canvEle.parentElement.classList.add("cablesContainer");
        if (this._setCanvas) this._setCanvas(canvEle);

        this.updateSize();
    }

    updateSize()
    {
        this.cgCanvas.updateSize();
    }

    setSize(w, h, ignorestyle)
    {
        this.cgCanvas.setSize(w, h, ignorestyle);
    }

    _resizeToWindowSize()
    {
        this.setSize(window.innerWidth, window.innerHeight);
        this.updateSize();
    }

    _resizeToParentSize()
    {
        const p = this.canvas.parentElement;
        if (!p)
        {
            this._log.error("cables: can not resize to container element");
            return;
        }
        this.setSize(p.clientWidth, p.clientHeight);

        this.updateSize();
    }

    setAutoResize(parent)
    {
        window.removeEventListener("resize", this._resizeToWindowSize.bind(this));
        window.removeEventListener("resize", this._resizeToParentSize.bind(this));

        if (parent == "window")
        {
            window.addEventListener("resize", this._resizeToWindowSize.bind(this));
            window.addEventListener("orientationchange", this._resizeToWindowSize.bind(this));
            this._resizeToWindowSize();
        }
        if (parent == "parent")
        {
            window.addEventListener("resize", this._resizeToParentSize.bind(this));
            this._resizeToParentSize();
        }
    }

    /**
     * push a matrix to the projection matrix stack
     * @function pushPMatrix
     * @memberof Context
     * @instance
     */
    pushPMatrix()
    {
        this.pMatrix = this._pMatrixStack.push(this.pMatrix);
    }

    /**
      * pop projection matrix stack
      * @function popPMatrix
      * @memberof Context
      * @instance
      * @returns {mat4} current projectionmatrix
      */
    popPMatrix()
    {
        this.pMatrix = this._pMatrixStack.pop();
        return this.pMatrix;
    }

    getProjectionMatrixStateCount()
    {
        return this._pMatrixStack.stateCounter;
    }

    /**
      * push a matrix to the model matrix stack
      * @function pushModelMatrix
      * @memberof Context
      * @instance
      * @example
      * // see source code of translate op:
      * cgl.pushModelMatrix();
      * mat4.translate(cgl.mMatrix,cgl.mMatrix, vec);
      * trigger.trigger();
      * cgl.popModelMatrix();
      */
    pushModelMatrix()
    {
        this.mMatrix = this._mMatrixStack.push(this.mMatrix);
    }

    /**
      * pop model matrix stack
      * @function popModelMatrix
      * @memberof Context
      * @instance
      * @returns {mat4} current modelmatrix
      */
    popModelMatrix()
    {
        // todo: DEPRECATE
        // if (this._mMatrixStack.length === 0) throw "Invalid modelview popMatrix!";
        this.mMatrix = this._mMatrixStack.pop();
        return this.mMatrix;
    }

    /**
      * get model matrix
      * @function modelMatrix
      * @memberof Context
      * @instance
      * @returns {mat4} current modelmatrix
      */
    modelMatrix()
    {
        return this.mMatrix;
    }


    /**
     * push a matrix to the view matrix stack
     * @function pushviewMatrix
     * @memberof Context
     * @instance
     */
    pushViewMatrix()
    {
        this.vMatrix = this._vMatrixStack.push(this.vMatrix);
    }

    /**
      * pop view matrix stack
      * @function popViewMatrix
      * @memberof Context
      * @instance
      * @returns {mat4} current viewmatrix
      * @function
      */
    popViewMatrix()
    {
        this.vMatrix = this._vMatrixStack.pop();
    }

    getViewMatrixStateCount()
    {
        return this._vMatrixStack.stateCounter;
    }

    _startMatrixStacks(identTranslate, identTranslateView)
    {
        identTranslate = identTranslate || this._ident;
        identTranslateView = identTranslateView || this._identView;

        mat4.perspective(this.pMatrix, 45, this.canvasWidth / this.canvasHeight, 0.1, 1000.0);

        mat4.identity(this.mMatrix);
        mat4.identity(this.vMatrix);
        mat4.translate(this.mMatrix, this.mMatrix, identTranslate);
        mat4.translate(this.vMatrix, this.vMatrix, identTranslateView);

        this.pushPMatrix();
        this.pushModelMatrix();
        this.pushViewMatrix();
    }

    _endMatrixStacks()
    {
        this.popViewMatrix();
        this.popModelMatrix();
        this.popPMatrix();
    }

    dispose()
    {
        this.aborted = true;
        if (this.cgCanvas) this.cgCanvas.dispose();
        if (this._dispose) this._dispose();
    }
}





;// CONCATENATED MODULE: ./src/core/cg/sg_fpscounter.js


class FpsCounter extends Events
{
    constructor()
    {
        super();
        this._timeStartFrame = 0;
        this._timeStartSecond = 0;
        this._fpsCounter = 0;
        this._msCounter = 0;
        this._frameCount = 0;

        this.stats = { "ms": 0, "fps": 0 };
    }

    get frameCount()
    {
        return this._frameCount;
    }

    startFrame()
    {
        this._timeStartFrame = CABLES.now();
    }

    endFrame()
    {
        this._frameCount++;
        this._fpsCounter++;

        const timeFrame = CABLES.now() - this._timeStartFrame;
        this._msCounter += timeFrame;

        if (CABLES.now() - this._timeStartSecond > 1000)
        {
            this.endSecond();
        }
    }

    endSecond()
    {
        this.stats.fps = this._fpsCounter;
        this.stats.ms = Math.round(this._msCounter / this._fpsCounter * 100) / 100;

        this.emitEvent("performance", this.stats);

        // reset
        this._fpsCounter = 0;
        this._msCounter = 0;
        this._timeStartSecond = CABLES.now();
    }
}

;// CONCATENATED MODULE: ./src/core/cg/cg_constants.js





const CG = {

    "GAPI_WEBGL": 0,
    "GAPI_WEBGPU": 1,

    "DEPTH_COMPARE_NEVER": 0,
    "DEPTH_COMPARE_LESS": 1,
    "DEPTH_COMPARE_EQUAL": 2,
    "DEPTH_COMPARE_LESSEQUAL": 3,
    "DEPTH_COMPARE_GREATER": 4,
    "DEPTH_COMPARE_NOTEQUAL": 5,
    "DEPTH_COMPARE_GREATEREQUAL": 6,
    "DEPTH_COMPARE_ALWAYS": 7,

    "CULL_NONE": 0,
    "CULL_BACK": 1,
    "CULL_FRONT": 2,
    "CULL_BOTH": 3,


    "Geometry": Geometry,
    "BoundingBox": BoundingBox,
    "FpsCounter": FpsCounter,

    "CgCanvas": CgCanvas
};




;// CONCATENATED MODULE: ./src/core/cgl/cgl_state.js








/**
 * cables gl context/state manager
 * @class
 * @namespace external:CGL
 * @hideconstructor
 */
// const Context(_patch)
class Context extends CGState
{
    constructor(_patch)
    {
        super(_patch);
        // EventTarget.apply(this);
        // CGState.apply(this);

        this.gApi = CG.GAPI_WEBGL;
        this.aborted = false;

        this.pushMvMatrix = this.pushModelMatrix; // deprecated and wrong... still used??
        this.popMvMatrix = this.popmMatrix = this.popModelMatrix;// deprecated and wrong... still used??

        this.profileData = new ProfileData(this);
        this._log = new Logger("cgl_context");
        this._viewPort = [0, 0, 0, 0];
        this.glVersion = 0;
        this.glUseHalfFloatTex = false;
        this.clearCanvasTransparent = true;
        this.clearCanvasDepth = true;
        this.debugOneFrame = false;
        this.checkGlErrors = false; // true is slow // false should be default...
        this.maxTextureUnits = 0;
        this.maxVaryingVectors = 0;
        this.currentProgram = null;
        this._hadStackError = false;
        this.glSlowRenderer = false;
        this._isSafariCrap = false;

        this.temporaryTexture = null;
        this.frameStore = {};
        this._onetimeCallbacks = [];
        this.gl = null;

        this._cursor = "auto";
        this._currentCursor = "";

        this._viewPortStack = [];
        this._glFrameBufferStack = [];
        this._frameBufferStack = [];
        this._shaderStack = [];
        this._stackDepthTest = [];
        this.mainloopOp = null;

        this._simpleShader = new Shader(this, "simpleshader");
        this._simpleShader.setModules(["MODULE_VERTEX_POSITION", "MODULE_COLOR", "MODULE_BEGIN_FRAG", "MODULE_VERTEX_MOVELVIEW"]);
        this._simpleShader.setSource(Shader.getDefaultVertexShader(), Shader.getDefaultFragmentShader());

        this._currentShader = this._simpleShader;


        this._oldCanvasWidth = -1;
        this._oldCanvasHeight = -1;
        this._enabledExtensions = {};
    }

    // set pixelDensity(p)
    // {
    //     this._pixelDensity = p;
    // }

    // get pixelDensity()
    // {
    //     return this._pixelDensity;
    // }



    get viewPort()
    {
        if (this._viewPortStack.length > 3)
        {
            const l = this._viewPortStack.length;

            return [
                this._viewPortStack[l - 4],
                this._viewPortStack[l - 3],
                this._viewPortStack[l - 2],
                this._viewPortStack[l - 1]
            ];
        }
        else
        {
            // workaround pre viewport stack times / or+and initial value...

            return this._viewPort;
        }
    }



    get mvMatrix() // deprecate
    {
        return this.mMatrix;
    }

    set mvMatrix(m) // deprecate
    {
        this.mMatrix = m;
    }


    exitError(msgId, msg)
    {
        console.log(msgId, msg);
        this.patch.exitError(msgId, msg);
        this.aborted = true;
    }


    _setCanvas(canv)
    {
        if (!canv)
        {
            this._log.stack("_setCanvas undef");
        }

        if (!this.patch.config.canvas) this.patch.config.canvas = {};
        if (!this.patch.config.canvas.hasOwnProperty("preserveDrawingBuffer")) this.patch.config.canvas.preserveDrawingBuffer = false;
        if (!this.patch.config.canvas.hasOwnProperty("premultipliedAlpha")) this.patch.config.canvas.premultipliedAlpha = false;
        if (!this.patch.config.canvas.hasOwnProperty("alpha")) this.patch.config.canvas.alpha = false;

        this.patch.config.canvas.stencil = true;

        if (this.patch.config.hasOwnProperty("clearCanvasColor")) this.clearCanvasTransparent = this.patch.config.clearCanvasColor;
        if (this.patch.config.hasOwnProperty("clearCanvasDepth")) this.clearCanvasDepth = this.patch.config.clearCanvasDepth;

        // safari stuff..........
        if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent) && (navigator.userAgent.match(/iPhone/i)))
        {
            this._isSafariCrap = true;
            this.glUseHalfFloatTex = true;
        }

        if (!this.patch.config.canvas.forceWebGl1) this.gl = canv.getContext("webgl2", this.patch.config.canvas);


        if (!this.gl || this.gl.isContextLost())
        {
            this.aborted = true;
            this.exitError("NO_WEBGL", "sorry, could not initialize WebGL. Please check if your Browser supports WebGL or try to restart your browser.");
            return;
        }

        if (this.gl.getParameter(this.gl.VERSION) != "WebGL 1.0")
        {
            this.glVersion = 2;
        }
        else
        {
            this.gl = canv.getContext("webgl", this.patch.config.canvas) || canv.getContext("experimental-webgl", this.patch.config.canvas);
            this.glVersion = 1;

            // safari
            // if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent) && (navigator.userAgent.match(/iPhone/i)))
            // {
            //     this.glUseHalfFloatTex = true;
            // }

            // ios
            if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream)
            {
                if (!this.patch.config.canvas.hasOwnProperty("powerPreference")) this.patch.config.canvas.powerPreference = "high-performance";
            }

            this.enableExtension("OES_standard_derivatives");
            // this.enableExtension("GL_OES_standard_derivatives");
            const instancingExt = this.enableExtension("ANGLE_instanced_arrays") || this.gl;
            if (instancingExt.vertexAttribDivisorANGLE)
            {
                this.gl.vertexAttribDivisor = instancingExt.vertexAttribDivisorANGLE.bind(instancingExt);
                this.gl.drawElementsInstanced = instancingExt.drawElementsInstancedANGLE.bind(instancingExt);
            }
        }

        const dbgRenderInfo = this.enableExtension("WEBGL_debug_renderer_info");
        if (dbgRenderInfo)
        {
            this.glRenderer = this.gl.getParameter(dbgRenderInfo.UNMASKED_RENDERER_WEBGL);
            if (this.glRenderer === "Google SwiftShader") this.glSlowRenderer = true;
        }

        this.canvas.addEventListener("webglcontextlost", (event) =>
        {
            if (this.aborted) return this._log.warn("[cgl_state] aborted context lost... can be ignored...");
            this._log.error("canvas lost...", event);
            this.emitEvent("webglcontextlost");
            this.aborted = true;
        });


        this.maxAnisotropic = 0;
        if (this.enableExtension("EXT_texture_filter_anisotropic"))
            this.maxAnisotropic = this.gl.getParameter(this.enableExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT);


        this.maxVaryingVectors = this.gl.getParameter(this.gl.MAX_VARYING_VECTORS);
        this.maxTextureUnits = this.gl.getParameter(this.gl.MAX_TEXTURE_IMAGE_UNITS);
        this.maxTexSize = this.gl.getParameter(this.gl.MAX_TEXTURE_SIZE);
        this.maxUniformsFrag = this.gl.getParameter(this.gl.MAX_FRAGMENT_UNIFORM_VECTORS);
        this.maxUniformsVert = this.gl.getParameter(this.gl.MAX_VERTEX_UNIFORM_VECTORS);
        this.maxSamples = 0;
        if (this.gl.MAX_SAMPLES) this.maxSamples = this.gl.getParameter(this.gl.MAX_SAMPLES);

        if (this.glVersion == 1)
        {
            this.enableExtension("OES_standard_derivatives");
            const instancingExt = this.enableExtension("ANGLE_instanced_arrays") || this.gl;

            if (instancingExt.vertexAttribDivisorANGLE)
            {
                this.gl.vertexAttribDivisor = instancingExt.vertexAttribDivisorANGLE.bind(instancingExt);
                this.gl.drawElementsInstanced = instancingExt.drawElementsInstancedANGLE.bind(instancingExt);
            }
        }

        this.DEPTH_FUNCS = [
            this.gl.NEVER,
            this.gl.ALWAYS,
            this.gl.LESS,
            this.gl.LEQUAL,
            this.gl.GREATER,
            this.gl.GEQUAL,
            this.gl.EQUAL,
            this.gl.NOTEQUAL
        ];
        this.CULL_MODES = [
            null,
            this.gl.BACK,
            this.gl.FRONT,
            this.gl.FRONT_AND_BACK
        ];
    }

    getInfo()
    {
        return {
            "glVersion": this.glVersion,
            "glRenderer": this.glRenderer,
            "glUseHalfFloatTex": this.glUseHalfFloatTex,
            "maxVaryingVectors": this.maxVaryingVectors,
            "maxTextureUnits": this.maxTextureUnits,
            "maxTexSize": this.maxTexSize,
            "maxUniformsFrag": this.maxUniformsFrag,
            "maxUniformsVert": this.maxUniformsVert,
            "maxSamples": this.maxSamples
        };
    }





    /**
     * @function popViewPort
     * @memberof Context
     * @instance
     * @description pop viewPort stack
     */


    popViewPort()
    {
        this._viewPortStack.pop();
        this._viewPortStack.pop();
        this._viewPortStack.pop();
        this._viewPortStack.pop();

        if (this._viewPortStack.length == 0)
        {
            this.setViewPort(0, 0, this.canvasWidth, this.canvasHeight);
            // this.gl.viewport(this._viewPort[0], this._viewPort[1], this._viewPort[2], this._viewPort[3]);
            // this.setViewPort(this._viewPort[0], this._viewPort[1], this._viewPort[2], this._viewPort[3]);
        }
        else
        {
            // this.viewPort = [this._viewPortStack[this._viewPort.length - 4], this._viewPortStack[this._viewPort.length - 3], this._viewPortStack[this._viewPort.length - 2], this._viewPortStack[this._viewPort.length - 1]];
            // this.gl.viewport(this._viewPortStack[this._viewPort.length - 4], this._viewPortStack[this._viewPort.length - 3], this._viewPortStack[this._viewPort.length - 2], this._viewPortStack[this._viewPort.length - 1]);
            this.setViewPort(this._viewPortStack[this._viewPort.length - 4], this._viewPortStack[this._viewPort.length - 3], this._viewPortStack[this._viewPort.length - 2], this._viewPortStack[this._viewPort.length - 1]);
        }
    }

    /**
     * @function pushViewPort
     * @memberof Context
     * @instance
     * @description push a new viewport onto stack
     * @param {Number} x
     * @param {Number} y
     * @param {Number} w
     * @param {Number} h
     */

    pushViewPort(x, y, w, h)
    {
        this._viewPortStack.push(x, y, w, h);
        this.setViewPort(x, y, w, h);
    }


    // old
    getViewPort()
    {
        return this._viewPort;
    }

    // old
    resetViewPort()
    {
        this.gl.viewport(this._viewPort[0], this._viewPort[1], this._viewPort[2], this._viewPort[3]);
    }

    // old
    setViewPort(x, y, w, h)
    {
        this._viewPort[0] = Math.round(x);
        this._viewPort[1] = Math.round(y);
        this._viewPort[2] = Math.round(w);
        this._viewPort[3] = Math.round(h);
        this.gl.viewport(this._viewPort[0], this._viewPort[1], this._viewPort[2], this._viewPort[3]);
    }


    screenShot(cb, doScreenshotClearAlpha, mimeType, quality)
    {
        if (doScreenshotClearAlpha)
        {
            this.gl.clearColor(1, 1, 1, 1);
            this.gl.colorMask(false, false, false, true);
            this.gl.clear(this.gl.COLOR_BUFFER_BIT);
            this.gl.colorMask(true, true, true, true);
        }

        if (this.canvas && this.canvas.toBlob)
        {
            this.canvas.toBlob((blob) =>
            {
                if (cb) cb(blob);
                else this._log.log("no screenshot callback...");
            }, mimeType, quality);
        }
    }

    endFrame()
    {
        if (this.patch.isEditorMode()) CABLES.GL_MARKER.drawMarkerLayer(this);

        this.setPreviousShader();

        if (this._vMatrixStack.length() > 0) this.logStackError("view matrix stack length !=0 at end of rendering...");
        if (this._mMatrixStack.length() > 0) this.logStackError("mvmatrix stack length !=0 at end of rendering...");
        if (this._pMatrixStack.length() > 0) this.logStackError("pmatrix stack length !=0 at end of rendering...");
        if (this._glFrameBufferStack.length > 0) this.logStackError("glFrameBuffer stack length !=0 at end of rendering...");
        if (this._stackDepthTest.length > 0) this.logStackError("depthtest stack length !=0 at end of rendering...");
        if (this._stackDepthWrite.length > 0) this.logStackError("depthwrite stack length !=0 at end of rendering...");
        if (this._stackDepthFunc.length > 0) this.logStackError("depthfunc stack length !=0 at end of rendering...");
        if (this._stackBlend.length > 0) this.logStackError("blend stack length !=0 at end of rendering...");
        if (this._stackBlendMode.length > 0) this.logStackError("blendMode stack length !=0 at end of rendering...");
        if (this._shaderStack.length > 0) this.logStackError("this._shaderStack length !=0 at end of rendering...");
        if (this._stackCullFace.length > 0) this.logStackError("this._stackCullFace length !=0 at end of rendering...");
        if (this._stackCullFaceFacing.length > 0) this.logStackError("this._stackCullFaceFacing length !=0 at end of rendering...");
        if (this._viewPortStack.length > 0) this.logStackError("viewport stack length !=0 at end of rendering...");

        this._frameStarted = false;

        if (this._oldCanvasWidth != this.canvasWidth || this._oldCanvasHeight != this.canvasHeight)
        {
            this._oldCanvasWidth = this.canvasWidth;
            this._oldCanvasHeight = this.canvasHeight;
            this.emitEvent("resize");
        }

        if (this._cursor != this._currentCursor)
        {
            this._currentCursor = this.canvas.style.cursor = this._cursor;
        }

        this.emitEvent("endframe");

        this.fpsCounter.endFrame();
    }

    logStackError(str)
    {
        if (!this._hadStackError)
        {
            this._hadStackError = true;
            this._log.warn("[" + this.canvas.id + "]: ", str);
        }
    }

    // shader stack
    getShader()
    {
        if (this._currentShader) if (!this.frameStore || ((this.frameStore.renderOffscreen === true) == this._currentShader.offScreenPass) === true) return this._currentShader;

        for (let i = this._shaderStack.length - 1; i >= 0; i--) if (this._shaderStack[i]) if (this.frameStore.renderOffscreen == this._shaderStack[i].offScreenPass) return this._shaderStack[i];
    }

    getDefaultShader()
    {
        return this._simpleShader;
    }

    /**
     * push a shader to the shader stack
     * @function pushShader
     * @memberof Context
     * @instance
     * @param {Object} shader
     * @function
     */

    pushShader(shader)
    {
        if (this.frameStore.forceShaderMods)
        {
            for (let i = 0; i < this.frameStore.forceShaderMods.length; i++)
            {
                // if (!currentShader.forcedMod && currentShader != this.frameStore.forceShaderMods[i])
                // {
                //     currentShader.forcedMod = this.frameStore.forceShaderMods[i];
                shader = this.frameStore.forceShaderMods[i].bind(shader, false);
                // }
                // return currentShader;
                // if (this.frameStore.forceShaderMods[i].currentShader() && shader != this.frameStore.forceShaderMods[i].currentShader().shader)
            }
        }

        this._shaderStack.push(shader);
        this._currentShader = shader;
    }


    /**
     * pop current used shader from shader stack
     * @function popShader
     * @memberof Context
     * @instance
     * @function
     */
    setPreviousShader()
    {
        if (this.frameStore.forceShaderMods)
        {
            for (let i = 0; i < this.frameStore.forceShaderMods.length; i++)
            {
                // const a =
                this.frameStore.forceShaderMods[i].unbind(false);
                // if (a) return;
                // this.popShader();
            }
        }

        if (this._shaderStack.length === 0) throw new Error("Invalid shader stack pop!");
        this._shaderStack.pop();
        this._currentShader = this._shaderStack[this._shaderStack.length - 1];
    }

    /**
     * push a framebuffer to the framebuffer stack
     * @function pushGlFrameBuffer
     * @memberof Context
     * @instance
     * @param {Object} fb framebuffer
     * @function
     */
    pushGlFrameBuffer(fb)
    {
        this._glFrameBufferStack.push(fb);
    }

    /**
     * pop framebuffer stack
     * @function popGlFrameBuffer
     * @memberof Context
     * @instance
     * @returns {Object} current framebuffer or null
     */
    popGlFrameBuffer()
    {
        if (this._glFrameBufferStack.length == 0) return null;
        this._glFrameBufferStack.pop();
        return this._glFrameBufferStack[this._glFrameBufferStack.length - 1];
    }

    /**
     * get current framebuffer
     * @function getCurrentFrameBuffer
     * @memberof Context
     * @instance
     * @returns {Object} current framebuffer or null
     */
    getCurrentGlFrameBuffer()
    {
        if (this._glFrameBufferStack.length === 0) return null;
        return this._glFrameBufferStack[this._glFrameBufferStack.length - 1];
    }

    /**
     * push a framebuffer to the framebuffer stack
     * @function pushGlFrameBuffer
     * @memberof Context
     * @instance
     * @param {Framebuffer} fb framebuffer
     */
    pushFrameBuffer(fb)
    {
        this._frameBufferStack.push(fb);
    }

    /**
     * pop framebuffer stack
     * @function popFrameBuffer
     * @memberof Context
     * @instance
     * @returns {Framebuffer} current framebuffer or null
     */
    popFrameBuffer()
    {
        if (this._frameBufferStack.length == 0) return null;
        this._frameBufferStack.pop();
        return this._frameBufferStack[this._frameBufferStack.length - 1];
    }

    /**
     * get current framebuffer
     * @function getCurrentFrameBuffer
     * @memberof Context
     * @instance
     * @returns {Framebuffer} current framebuffer or null
     */
    getCurrentFrameBuffer()
    {
        if (this._frameBufferStack.length === 0) return null;
        return this._frameBufferStack[this._frameBufferStack.length - 1];
    }


    renderStart(cgl, identTranslate, identTranslateView)
    {
        this.fpsCounter.startFrame();
        this.pushDepthTest(true);
        this.pushDepthWrite(true);
        this.pushDepthFunc(cgl.gl.LEQUAL);
        this.pushCullFaceFacing(cgl.gl.BACK);
        this.pushCullFace(false);

        // if (this.clearCanvasTransparent)
        // {
        //     cgl.gl.clearColor(0, 0, 0, 0);
        //     cgl.gl.clear(cgl.gl.COLOR_BUFFER_BIT);
        // }
        // if (this.clearCanvasDepth) cgl.gl.clear(cgl.gl.DEPTH_BUFFER_BIT);

        cgl.setViewPort(0, 0, cgl.canvasWidth, cgl.canvasHeight);

        this._startMatrixStacks(identTranslate, identTranslateView);

        cgl.pushBlendMode(constants_CONSTANTS.BLEND_MODES.BLEND_NORMAL, false);

        for (let i = 0; i < this._textureslots.length; i++) this._textureslots[i] = null;

        this.pushShader(this._simpleShader);

        this._frameStarted = true;

        if (this._onetimeCallbacks.length > 0)
        {
            for (let i = 0; i < this._onetimeCallbacks.length; i++) this._onetimeCallbacks[i]();
            this._onetimeCallbacks.length = 0;
        }

        for (let i = 0; i < this._textureslots.length; i++)
        {
            this.gl.activeTexture(this.gl.TEXTURE0 + i);
            this.gl.bindTexture(this.gl.TEXTURE_2D, null);
            this._textureslots[i] = null;
        }

        this.emitEvent("beginFrame");
    }

    renderEnd(cgl)
    {
        this._endMatrixStacks();

        this.popDepthTest();
        this.popDepthWrite();
        this.popDepthFunc();
        this.popCullFaceFacing();
        this.popCullFace();
        this.popBlend();
        this.popBlendMode();

        cgl.endFrame();

        this.emitEvent("endFrame");
    }

    getTexture(slot)
    {
        return this._textureslots[slot];
    }

    hasFrameStarted()
    {
        return this._frameStarted;
    }

    /**
     * log warning to console if the rendering of one frame has not been started / handy to check for async problems
     * @function checkFrameStarted
     * @memberof Context
     * @param string
     * @instance
     */
    checkFrameStarted(string)
    {
        if (!this._frameStarted)
        {
            this._log.warn("frame not started " + string);
            this.patch.printTriggerStack();
        }
    }


    setTexture(slot, t, type)
    {
        this.checkFrameStarted("cgl setTexture");

        if (t === null) t = CGL.Texture.getEmptyTexture(this).tex;

        if (this._textureslots[slot] != t)
        {
            this.gl.activeTexture(this.gl.TEXTURE0 + slot);
            this.gl.bindTexture(type || this.gl.TEXTURE_2D, t);
            this._textureslots[slot] = t;
        }


        return true;
    }

    fullScreen()
    {
        if (this.canvas.requestFullscreen) this.canvas.requestFullscreen();
        else if (this.canvas.mozRequestFullScreen) this.canvas.mozRequestFullScreen();
        else if (this.canvas.webkitRequestFullscreen) this.canvas.webkitRequestFullscreen();
        else if (this.canvas.msRequestFullscreen) this.canvas.msRequestFullscreen();
    }


    printError(str)
    {
        if (!this.checkGlErrors) return;
        let found = false;
        let error = this.gl.getError();

        if (error != this.gl.NO_ERROR)
        {
            let errStr = "";
            if (error == this.gl.OUT_OF_MEMORY) errStr = "OUT_OF_MEMORY";
            if (error == this.gl.INVALID_ENUM) errStr = "INVALID_ENUM";
            if (error == this.gl.INVALID_OPERATION) errStr = "INVALID_OPERATION";
            if (error == this.gl.INVALID_FRAMEBUFFER_OPERATION) errStr = "INVALID_FRAMEBUFFER_OPERATION";
            if (error == this.gl.INVALID_VALUE) errStr = "INVALID_VALUE";
            if (error == this.gl.CONTEXT_LOST_WEBGL)
            {
                this.aborted = true;
                errStr = "CONTEXT_LOST_WEBGL";
            }
            if (error == this.gl.NO_ERROR) errStr = "NO_ERROR";

            found = true;


            this._log.warn("gl error [" + this.canvas.id + "]: ", str, error, errStr);

            if (this.canvas.id.contains("glGuiCanvas"))
                if (!this._loggedGlError)
                {
                    this.patch.printTriggerStack();
                    this._log.stack("glerror");
                    this._loggedGlError = true;
                }
        }
        error = this.gl.getError();

        return found;
    }

    saveScreenshot(filename, cb, pw, ph, noclearalpha)
    {
        this.patch.renderOneFrame();

        let w = this.canvas.clientWidth * this.pixelDensity;
        let h = this.canvas.clientHeight * this.pixelDensity;

        if (pw)
        {
            this.canvas.width = pw;
            w = pw;
        }
        if (ph)
        {
            this.canvas.height = ph;
            h = ph;
        }

        function padLeft(nr, n, str)
        {
            return Array(n - String(nr).length + 1).join(str || "0") + nr;
        }

        const d = new Date();

        const dateStr = "".concat(String(d.getFullYear()) + String(d.getMonth() + 1) + String(d.getDate()), "_").concat(padLeft(d.getHours(), 2)).concat(padLeft(d.getMinutes(), 2)).concat(padLeft(d.getSeconds(), 2));

        if (!filename) filename = "cables_" + dateStr + ".png";
        else filename += ".png";

        this.patch.cgl.screenShot(function (blob)
        {
            this.canvas.width = w;
            this.canvas.height = h;

            if (blob)
            {
                const anchor = document.createElement("a");

                anchor.download = filename;
                anchor.href = URL.createObjectURL(blob);

                setTimeout(function ()
                {
                    anchor.click();
                    if (cb) cb(blob);
                }, 100);
            }
            else
            {
                this._log.log("screenshot: no blob");
            }
        }.bind(this), noclearalpha);
    }

    _dispose()
    {
        this._simpleShader.dispose();
        this.gl = null;
    }
}


Context.prototype.popShader = Context.prototype.setPreviousShader;
Context.prototype.setShader = Context.prototype.pushShader;

/**
 * execute the callback next frame, once
 * @function addNextFrameOnceCallback
 * @memberof Context
 * @instance
 * @param {function} cb
 */
Context.prototype.addNextFrameOnceCallback = function (cb)
{
    if (cb && this._onetimeCallbacks.indexOf(cb) == -1) this._onetimeCallbacks.push(cb);
};

// state depthtest

/**
 * push depth testing enabled state
 * @function pushDepthTest
 * @param {Boolean} enabled
 * @memberof Context
 * @instance
 */
Context.prototype._stackDepthTest = [];
Context.prototype.pushDepthTest = function (b)
{
    this._stackDepthTest.push(b);
    if (!b) this.gl.disable(this.gl.DEPTH_TEST);
    else this.gl.enable(this.gl.DEPTH_TEST);
};
/**
 * current state of depth testing
 * @function stateCullFace
 * @returns {Boolean} enabled
 * @memberof Context
 * @instance
 */
Context.prototype.stateDepthTest = function ()
{
    return this._stackDepthTest[this._stackDepthTest.length - 1];
};

/**
 * pop depth testing state
 * @function popCullFace
 * @memberof Context
 * @instance
 */
Context.prototype.popDepthTest = function ()
{
    this._stackDepthTest.pop();

    if (!this._stackDepthTest[this._stackDepthTest.length - 1]) this.gl.disable(this.gl.DEPTH_TEST);
    else this.gl.enable(this.gl.DEPTH_TEST);
};

// --------------------------------------
// state depthwrite

/**
 * push depth write enabled state
 * @function pushDepthTest
 * @param {Boolean} enabled
 * @memberof Context
 * @instance
 */
Context.prototype._stackDepthWrite = [];
Context.prototype.pushDepthWrite = function (b)
{
    b = b || false;
    this._stackDepthWrite.push(b);
    this.gl.depthMask(b);
};

/**
 * current state of depth writing
 * @function stateDepthWrite
 * @returns {Boolean} enabled
 * @memberof Context
 * @instance
 */
Context.prototype.stateDepthWrite = function ()
{
    return this._stackDepthWrite[this._stackDepthWrite.length - 1];
};

/**
 * pop depth writing state
 * @function popDepthWrite
 * @memberof Context
 * @instance
 */
Context.prototype.popDepthWrite = function ()
{
    this._stackDepthWrite.pop();
    this.gl.depthMask(this._stackDepthWrite[this._stackDepthWrite.length - 1] || false);
};


// --------------------------------------
// state CullFace

Context.prototype._stackCullFace = [];

/**
 * push face culling face enabled state
 * @function pushCullFace
 * @param {Boolean} b enabled
 * @memberof Context
 * @instance
 */
Context.prototype.pushCullFace = function (b)
{
    this._stackCullFace.push(b);

    if (b) this.gl.enable(this.gl.CULL_FACE);
    else this.gl.disable(this.gl.CULL_FACE);
};

/**
 * current state of face culling
 * @function stateCullFace
 * @returns {Boolean} enabled
 * @memberof Context
 * @instance
 */
Context.prototype.stateCullFace = function ()
{
    return this._stackCullFace[this._stackCullFace.length - 1];
};

/**
 * pop face culling enabled state
 * @function popCullFace
 * @memberof Context
 * @instance
 */
Context.prototype.popCullFace = function ()
{
    this._stackCullFace.pop();

    if (this._stackCullFace[this._stackCullFace.length - 1]) this.gl.enable(this.gl.CULL_FACE);
    else this.gl.disable(this.gl.CULL_FACE);
};


// --------------------------------------
// state CullFace Facing


/**
 * push face culling face side
 * @function pushCullFaceFacing
 * @param {Number} cgl.gl.FRONT_AND_BACK, cgl.gl.BACK or cgl.gl.FRONT
 * @memberof Context
 * @instance
 */
Context.prototype._stackCullFaceFacing = [];
Context.prototype.pushCullFaceFacing = function (b)
{
    this._stackCullFaceFacing.push(b);
    this.gl.cullFace(this._stackCullFaceFacing[this._stackCullFaceFacing.length - 1]);
};

/**
 * current state of face culling side
 * @function stateCullFaceFacing
 * @returns {Boolean} enabled
 * @memberof Context
 * @instance
 */
Context.prototype.stateCullFaceFacing = function ()
{
    return this._stackCullFaceFacing[this._stackCullFaceFacing.length - 1];
};

/**
 * pop face culling face side
 * @function popCullFaceFacing
 * @memberof Context
 * @instance
 */
Context.prototype.popCullFaceFacing = function ()
{
    this._stackCullFaceFacing.pop();
    if (this._stackCullFaceFacing.length > 0) this.gl.cullFace(this._stackCullFaceFacing[this._stackCullFaceFacing.length - 1]);
};


// --------------------------------------
// state depthfunc

Context.prototype._stackDepthFunc = [];

/**
 * enable / disable depth testing
 * like `gl.depthFunc(boolean);`
 * @function pushDepthFunc
 * @memberof Context
 * @instance
 * @param {Boolean} f depthtesting
 */
Context.prototype.pushDepthFunc = function (f)
{
    this._stackDepthFunc.push(f);
    this.gl.depthFunc(f);
};

/**
 * current state of blend
 * @function stateDepthFunc
 * @memberof Context
 * @instance
 * @returns {Boolean} depth testing enabled/disabled
 */
Context.prototype.stateDepthFunc = function ()
{
    if (this._stackDepthFunc.length > 0) return this._stackDepthFunc[this._stackDepthFunc.length - 1];
    return false;
};

/**
 * pop depth testing and set the previous state
 * @function popDepthFunc
 * @memberof Context
 * @instance
 */
Context.prototype.popDepthFunc = function ()
{
    this._stackDepthFunc.pop();
    if (this._stackDepthFunc.length > 0) this.gl.depthFunc(this._stackDepthFunc[this._stackDepthFunc.length - 1]);
};

// --------------------------------------
// state blending

Context.prototype._stackBlend = [];

/**
 * enable / disable blend
 * like gl.enable(gl.BLEND); / gl.disable(gl.BLEND);
 * @function pushBlend
 * @memberof Context
 * @instance
 * @param {boolean} b blending
 */
Context.prototype.pushBlend = function (b)
{
    this._stackBlend.push(b);
    if (!b) this.gl.disable(this.gl.BLEND);
    else this.gl.enable(this.gl.BLEND);
};

/**
 * pop blend state and set the previous state
 * @function popBlend
 * @memberof Context
 * @instance
 */
Context.prototype.popBlend = function ()
{
    this._stackBlend.pop();

    if (!this._stackBlend[this._stackBlend.length - 1]) this.gl.disable(this.gl.BLEND);
    else this.gl.enable(this.gl.BLEND);
};

/**
 * current state of blend
 * @function stateBlend
 * @returns {boolean} blending enabled/disabled
 * @memberof Context
 * @instance
 */
Context.prototype.stateBlend = function ()
{
    return this._stackBlend[this._stackBlend.length - 1];
};

const BLENDS = {
    "BLEND_NONE": 0,
    "BLEND_NORMAL": 1,
    "BLEND_ADD": 2,
    "BLEND_SUB": 3,
    "BLEND_MUL": 4,
};

Context.prototype._stackBlendMode = [];
Context.prototype._stackBlendModePremul = [];

/**
 * push and switch to predefined blendmode (CONSTANTS.BLEND_MODES.BLEND_NONE,CONSTANTS.BLEND_MODES.BLEND_NORMAL,CONSTANTS.BLEND_MODES.BLEND_ADD,CONSTANTS.BLEND_MODES.BLEND_SUB,CONSTANTS.BLEND_MODES.BLEND_MUL)
 * @function pushBlendMode
 * @memberof Context
 * @instance
 * @param {Number} blendMode
 * @param {Boolean} premul premultiplied mode
 */
Context.prototype.pushBlendMode = function (blendMode, premul)
{
    this._stackBlendMode.push(blendMode);
    this._stackBlendModePremul.push(premul);

    const n = this._stackBlendMode.length - 1;

    this.pushBlend(this._stackBlendMode[n] !== constants_CONSTANTS.BLEND_MODES.BLEND_NONE);
    this._setBlendMode(this._stackBlendMode[n], this._stackBlendModePremul[n]);
};

/**
 * pop predefined blendmode / switch back to previous blendmode
 * @function popBlendMode
 * @memberof Context
 * @instance
 */
Context.prototype.popBlendMode = function ()
{
    this._stackBlendMode.pop();
    this._stackBlendModePremul.pop();

    const n = this._stackBlendMode.length - 1;

    this.popBlend(this._stackBlendMode[n] !== constants_CONSTANTS.BLEND_MODES.BLEND_NONE);

    if (n >= 0) this._setBlendMode(this._stackBlendMode[n], this._stackBlendModePremul[n]);
};


// --------------------------------------
// state stencil

Context.prototype._stackStencil = [];

/**
 * enable / disable stencil testing

* @function pushStencil
 * @memberof Context
 * @instance
 * @param {Boolean} b enable
 */
Context.prototype.pushStencil = function (b)
{
    this._stackStencil.push(b);
    if (!b) this.gl.disable(this.gl.STENCIL_TEST);
    else this.gl.enable(this.gl.STENCIL_TEST);
};

/**
 * pop stencil test state and set the previous state
 * @function popStencil
 * @memberof Context
 * @instance
 */
Context.prototype.popStencil = function ()
{
    this._stackStencil.pop();

    if (!this._stackStencil[this._stackStencil.length - 1]) this.gl.disable(this.gl.STENCIL_TEST);
    else this.gl.enable(this.gl.STENCIL_TEST);
};

// --------------------------------------


Context.prototype.glGetAttribLocation = function (prog, name)
{
    const l = this.gl.getAttribLocation(prog, name);
    // if (l == -1)
    // {
    //     this._log.warn("get attr loc -1 ", name);
    // }
    return l;
};


/**
 * should an op now draw helpermeshes
 * @function shouldDrawHelpers
 * @memberof Context
 * @param op
 * @instance
 */
Context.prototype.shouldDrawHelpers = function (op)
{
    if (this.frameStore.shadowPass) return false;
    if (!op.patch.isEditorMode()) return false;

    // const fb = this.getCurrentFrameBuffer();
    // if (fb && fb.getWidth)
    // {
    //     const fbshould = this.canvasWidth / this.canvasHeight == fb.getWidth() / fb.getHeight();
    //     if (!fbshould) return false;
    // }

    return gui.shouldDrawOverlay;// || (CABLES.UI.renderHelperCurrent && op.isCurrentUiOp());
};

Context.prototype._setBlendMode = function (blendMode, premul)
{
    const gl = this.gl;

    if (blendMode == constants_CONSTANTS.BLEND_MODES.BLEND_NONE)
    {
        // this.gl.disable(this.gl.BLEND);
    }
    else if (blendMode == constants_CONSTANTS.BLEND_MODES.BLEND_ADD)
    {
        if (premul)
        {
            gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_ADD);
            gl.blendFuncSeparate(gl.ONE, gl.ONE, gl.ONE, gl.ONE);
        }
        else
        {
            gl.blendEquation(gl.FUNC_ADD);
            gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
        }
    }
    else if (blendMode == constants_CONSTANTS.BLEND_MODES.BLEND_SUB)
    {
        if (premul)
        {
            gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_ADD);
            gl.blendFuncSeparate(gl.ZERO, gl.ZERO, gl.ONE_MINUS_SRC_COLOR, gl.ONE_MINUS_SRC_ALPHA);
        }
        else
        {
            gl.blendEquation(gl.FUNC_ADD);
            gl.blendFunc(gl.ZERO, gl.ONE_MINUS_SRC_COLOR);
        }
    }
    else if (blendMode == constants_CONSTANTS.BLEND_MODES.BLEND_MUL)
    {
        if (premul)
        {
            gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_ADD);
            gl.blendFuncSeparate(gl.ZERO, gl.SRC_COLOR, gl.ZERO, gl.SRC_ALPHA);
        }
        else
        {
            gl.blendEquation(gl.FUNC_ADD);
            gl.blendFunc(gl.ZERO, gl.SRC_COLOR);
        }
    }
    else if (blendMode == constants_CONSTANTS.BLEND_MODES.BLEND_NORMAL)
    {
        if (premul)
        {
            gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_ADD);
            gl.blendFuncSeparate(gl.ONE, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
        }
        else
        {
            gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_ADD);
            gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
        }
    }
    else
    {
        this._log.log("setblendmode: unknown blendmode");
    }
};

Context.prototype.createMesh = function (geom, options)
{
    if (CABLES.UTILS.isNumeric(options))options = { "glPrimitive": options }; // old constructor fallback...
    return new CGL.Mesh(this, geom, options);
};


/**
 * set cursor
 * @function setCursor
 * @memberof Context
 * @instance
 * @param {String} str css cursor string
 */
Context.prototype.setCursor = function (str)
{
    this._cursor = str;
};

/**
 * enable a webgl extension
 * @function enableExtension
 * @memberof Context
 * @instance
 * @param {String} name extension name
 * @returns {Object} extension object or null
 */
Context.prototype.enableExtension = function (name)
{
    if (!this.gl) return null;

    if (this._enabledExtensions.hasOwnProperty(name))
        return this._enabledExtensions[name];

    const o = this.gl.getExtension(name);
    this._enabledExtensions[name] = o;

    if (!o)
        this._log.warn("[cgl_state] extension not available " + name);
    // else
        // this._log.log("enabled extension", name);

    return o;
};

Context.prototype.checkTextureSize = function (x)
{
    x = x || 1;
    x = Math.floor(x);
    x = Math.min(x, this.maxTexSize);
    x = Math.max(x, 1);
    return x;
};





;// CONCATENATED MODULE: ./src/core/core_variable.js


/**
 * @type {Object}
 * @name PatchVariable
 * @param {String} name
 * @param {String|Number} value
 * @memberof Patch
 * @constructor
 */
class PatchVariable extends Events
{
    constructor(name, val, type)
    {
        super();
        this._name = name;
        this.type = type;
        this.setValue(val);
    }

    /**
     * keeping this for backwards compatibility in older
     * exports before using eventtarget
     *
     * @param cb
     */
    addListener(cb)
    {
        this.on("change", cb, "var");
    }

    /**
     * @function Variable.getValue
     * @memberof PatchVariable
     * @returns {String|Number|Boolean}
     */
    getValue()
    {
        return this._v;
    }

    /**
     * @function getName
     * @memberof PatchVariable
     * @instance
     * @returns {String|Number|Boolean}
     * @function
     */
    getName()
    {
        return this._name;
    }

    /**
     * @function setValue
     * @memberof PatchVariable
     * @instance
     * @param v
     * @returns {String|Number|Boolean}
     * @function
     */
    setValue(v)
    {
        this._v = v;
        this.emitEvent("change", v, this);
    }
}

/* harmony default export */ const core_variable = (PatchVariable);

;// CONCATENATED MODULE: ./src/core/core_patch.js













/**
 * Patch class, contains all operators,values,links etc. manages loading and running of the whole patch
 *
 * see {@link PatchConfig}
 *
 * @namespace external:CABLES#Patch
 * @hideconstructor
 * @param {PatchConfig} cfg The configuration object.
 * @class
 * @example
 * CABLES.patch=new CABLES.Patch(
 * {
 *     patch:pStr,
 *     glCanvasId:'glcanvas',
 *     glCanvasResizeToWindow:true,
 *     canvas:{powerPreference:"high-performance"},
 *     prefixAssetPath:'/assets/',
 *     prefixJsPath:'/js/',
 *     onError:function(e){console.log(e);}
 *     glslPrecision:'highp'
 * });
 */

const Patch = function (cfg)
{
    EventTarget.apply(this);

    this._log = new Logger("core_patch");
    this.ops = [];
    this.settings = {};
    this.config = cfg ||
        {
            "glCanvasResizeToWindow": false,
            "prefixAssetPath": "",
            "prefixJsPath": "",
            "silent": true,
            "onError": null,
            "onFinishedLoading": null,
            "onFirstFrameRendered": null,
            "onPatchLoaded": null,
            "fpsLimit": 0,
        };
    this.timer = new Timer();
    this.freeTimer = new Timer();
    this.animFrameOps = [];
    this.animFrameCallbacks = [];
    this.gui = false;
    CABLES.logSilent = this.silent = true;
    this.profiler = null;
    this.aborted = false;
    this._crashedOps = [];
    this._renderOneFrame = false;
    this._animReq = null;
    this._opIdCache = {};
    this._triggerStack = [];
    this.storeObjNames = false; // remove after may release

    this.loading = new LoadingStatus(this);

    this._volumeListeners = [];
    this._paused = false;
    this._frameNum = 0;
    this.instancing = new Instancing();
    this.onOneFrameRendered = null;
    this.namedTriggers = {};

    this._origData = null;
    this._frameNext = 0;
    this._frameInterval = 0;
    this._lastFrameTime = 0;
    this._frameWasdelayed = true;
    this.frameStore = {};
    this.deSerialized = false;
    this.reqAnimTimeStamp = 0;

    this.cgCanvas = null;

    if (!(function () { return !this; }())) console.log("not in strict mode: core patch");

    this._isLocal = document.location.href.indexOf("file:") === 0;

    if (this.config.hasOwnProperty("silent")) this.silent = CABLES.logSilent = this.config.silent;
    if (!this.config.hasOwnProperty("doRequestAnimation")) this.config.doRequestAnimation = true;

    if (!this.config.prefixAssetPath) this.config.prefixAssetPath = "";
    if (!this.config.prefixJsPath) this.config.prefixJsPath = "";
    if (!this.config.masterVolume) this.config.masterVolume = 1.0;

    this._variables = {};
    this._variableListeners = [];
    this.vars = {};
    if (cfg && cfg.vars) this.vars = cfg.vars; // vars is old!

    this.cgl = new Context(this);
    this.cgp = null;

    this._subpatchOpCache = {};

    this.cgl.setCanvas(this.config.glCanvasId || this.config.glCanvas || "glcanvas");
    if (this.config.glCanvasResizeToWindow === true) this.cgl.setAutoResize("window");
    if (this.config.glCanvasResizeToParent === true) this.cgl.setAutoResize("parent");
    this.loading.setOnFinishedLoading(this.config.onFinishedLoading);

    if (this.cgl.aborted) this.aborted = true;
    if (this.cgl.silent) this.silent = true;

    this.freeTimer.play();
    this.exec();

    if (!this.aborted)
    {
        if (this.config.patch)
        {
            this.deSerialize(this.config.patch);
        }
        else if (this.config.patchFile)
        {
            ajax(
                this.config.patchFile,
                (err, _data) =>
                {
                    const data = JSON.parse(_data);
                    if (err)
                    {
                        const txt = "";
                        this._log.error("err", err);
                        this._log.error("data", data);
                        this._log.error("data", data.msg);
                        return;
                    }
                    this.deSerialize(data);
                }
            );
        }
        this.timer.play();
    }

    console.log("made with https://cables.gl"); // eslint-disable-line
};

Patch.prototype.isPlaying = function ()
{
    return !this._paused;
};

Patch.prototype.isRenderingOneFrame = function ()
{
    return this._renderOneFrame;
};


Patch.prototype.renderOneFrame = function ()
{
    this._paused = true;
    this._renderOneFrame = true;
    this.exec();
    this._renderOneFrame = false;
};

/**
 * current number of frames per second
 * @function getFPS
 * @memberof Patch
 * @instance
 * @return {Number} fps
 */
Patch.prototype.getFPS = function ()
{
    this._log.error("deprecated getfps");
    return 0;
};

/**
 * returns true if patch is opened in editor/gui mode
 * @function isEditorMode
 * @memberof Patch
 * @instance
 * @return {Boolean} editor mode
 */
Patch.prototype.isEditorMode = function ()
{
    return this.config.editorMode === true;
};

/**
 * pauses patch execution
 * @function pause
 * @memberof Patch
 * @instance
 */
Patch.prototype.pause = function ()
{
    cancelAnimationFrame(this._animReq);
    this.emitEvent("pause");
    this._animReq = null;
    this._paused = true;
    this.freeTimer.pause();
};

/**
 * resumes patch execution
 * @function resume
 * @memberof Patch
 * @instance
 */
Patch.prototype.resume = function ()
{
    if (this._paused)
    {
        cancelAnimationFrame(this._animReq);
        this._paused = false;
        this.freeTimer.play();
        this.emitEvent("resume");
        this.exec();
    }
};

/**
 * set volume [0-1]
 * @function setVolume
 * @param {Number} v volume
 * @memberof Patch
 * @instance
 */
Patch.prototype.setVolume = function (v)
{
    this.config.masterVolume = v;
    for (let i = 0; i < this._volumeListeners.length; i++) this._volumeListeners[i].onMasterVolumeChanged(v);
};


/**
 * get asset path
 * @function getAssetPath
 * @memberof Patch
 * @param patchId
 * @instance
 */
Patch.prototype.getAssetPath = function (patchId = null)
{
    if (this.isEditorMode())
    {
        let id = patchId || gui.project()._id;
        return "/assets/" + id + "/";
    }
    else if (document.location.href.indexOf("cables.gl") > 0 || document.location.href.indexOf("cables.local") > 0)
    {
        const parts = document.location.pathname.split("/");
        let id = patchId || parts[parts.length - 1];
        return "/assets/" + id + "/";
    }
    else if (this.config.hasOwnProperty("assetPath"))
    {
        return this.config.assetPath;
    }
    else
    {
        return "assets/";
    }
};

/**
 * get js path
 * @function getJsPath
 * @memberof Patch
 * @instance
 */
Patch.prototype.getJsPath = function ()
{
    if (this.config.hasOwnProperty("jsPath"))
    {
        return this.config.jsPath;
    }
    else
    {
        return "js/";
    }
};

/**
 * get url/filepath for a filename
 * this uses prefixAssetpath in exported patches
 * @function getFilePath
 * @memberof Patch
 * @instance
 * @param {String} filename
 * @return {String} url
 */
Patch.prototype.getFilePath = function (filename)
{
    if (!filename) return filename;
    filename = String(filename);
    if (filename.indexOf("https:") === 0 || filename.indexOf("http:") === 0) return filename;
    if (filename.indexOf("data:") === 0) return filename;
    if (filename.indexOf("file:") === 0) return filename;
    filename = filename.replace("//", "/");
    if (filename.startsWith(this.config.prefixAssetPath)) filename = filename.replace(this.config.prefixAssetPath, "");
    return this.config.prefixAssetPath + filename + (this.config.suffixAssetPath || "");
};

Patch.prototype.clear = function ()
{
    this.emitEvent("patchClearStart");
    this.cgl.TextureEffectMesh = null;
    this.animFrameOps.length = 0;
    this.timer = new Timer();
    while (this.ops.length > 0) this.deleteOp(this.ops[0].id);

    this._opIdCache = {};
    this.emitEvent("patchClearEnd");
};

Patch.getOpClass = function (objName)
{
    const parts = objName.split(".");
    let opObj = null;

    try
    {
        if (parts.length == 2) opObj = window[parts[0]][parts[1]];
        else if (parts.length == 3) opObj = window[parts[0]][parts[1]][parts[2]];
        else if (parts.length == 4) opObj = window[parts[0]][parts[1]][parts[2]][parts[3]];
        else if (parts.length == 5) opObj = window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]];
        else if (parts.length == 6) opObj = window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]];
        else if (parts.length == 7) opObj = window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]][parts[6]];
        else if (parts.length == 8) opObj = window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]][parts[6]][parts[7]];
        else if (parts.length == 9) opObj = window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]][parts[6]][parts[7]][parts[8]];
        else if (parts.length == 10) opObj = window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]][parts[6]][parts[7]][parts[8]][parts[9]];
        return opObj;
    }
    catch (e)
    {
        return null;
    }
};

Patch.prototype.createOp = function (identifier, id, opName = null)
{
    let op = null;
    let objName = "";

    try
    {
        if (!identifier)
        {
            console.error("createop identifier false", identifier);
            console.log((new Error()).stack);
            return;
        }
        if (identifier.indexOf("Ops.") === -1)
        {
            // this should be a uuid, not a namespace
            // creating ops by id should be the default way from now on!
            const opId = identifier;



            if (CABLES.OPS[opId])
            {
                objName = CABLES.OPS[opId].objName;
                op = new CABLES.OPS[opId].f(this, objName, id, opId);
                op.opId = opId;
            }
            else
            {
                if (opName)
                {
                    identifier = opName;
                    this._log.warn("could not find op by id: " + opId);
                }
                else
                {
                    throw new Error("could not find op by id: " + opId, { "cause": "opId:" + opId });
                }
            }
        }

        if (!op)
        {
            // fallback: create by objname!
            objName = identifier;
            const parts = identifier.split(".");
            const opObj = Patch.getOpClass(objName);

            if (!opObj)
            {
                this.emitEvent("criticalError", { "title": "unknown op" + objName, "text": "unknown op: " + objName });

                this._log.error("unknown op: " + objName);
                throw new Error("unknown op: " + objName);
            }
            else
            {
                if (parts.length == 2) op = new window[parts[0]][parts[1]](this, objName, id);
                else if (parts.length == 3) op = new window[parts[0]][parts[1]][parts[2]](this, objName, id);
                else if (parts.length == 4) op = new window[parts[0]][parts[1]][parts[2]][parts[3]](this, objName, id);
                else if (parts.length == 5) op = new window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]](this, objName, id);
                else if (parts.length == 6) op = new window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]](this, objName, id);
                else if (parts.length == 7) op = new window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]][parts[6]](this, objName, id);
                else if (parts.length == 8) op = new window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]][parts[6]][parts[7]](this, objName, id);
                else if (parts.length == 9) op = new window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]][parts[6]][parts[7]][parts[8]](this, objName, id);
                else if (parts.length == 10) op = new window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]][parts[6]][parts[7]][parts[8]][parts[9]](this, objName, id);
                else console.log("parts.length", parts.length);
            }

            if (op)
            {
                op.opId = null;
                for (const i in CABLES.OPS)
                {
                    if (CABLES.OPS[i].objName == objName) op.opId = i;
                }
            }
        }
    }
    catch (e)
    {
        this._crashedOps.push(objName);

        this._log.error(e);
        this._log.error("[instancing error] " + objName, e);

        if (!this.isEditorMode())
        {
            this.exitError("INSTANCE_ERR", "Instancing Error: " + objName, e);
            throw new Error("instancing error 1" + objName);
        }
    }

    if (op)
    {
        op._objName = objName;
        op.patch = this;
    }
    else
    {
        this._log.log("no op was created!?", identifier, id);
    }
    return op;
};

/**
 * create a new op in patch
 * @function addOp
 * @memberof Patch
 * @instance
 * @param {string} opIdentifier uuid or name, e.g. Ops.Math.Sum
 * @param {Object} uiAttribs Attributes
 * @param {string} id
 * @param {boolean} fromDeserialize
 * @param {string} opName e.g. Ops.Math.Sum
 * @example
 * // add invisible op
 * patch.addOp('Ops.Math.Sum', { showUiAttribs: false });
 */
Patch.prototype.addOp = function (opIdentifier, uiAttribs, id, fromDeserialize, opName)
{
    const op = this.createOp(opIdentifier, id, opName);

    if (op)
    {
        uiAttribs = uiAttribs || {};
        if (uiAttribs.hasOwnProperty("errors")) delete uiAttribs.errors;
        if (uiAttribs.hasOwnProperty("error")) delete uiAttribs.error;
        uiAttribs.subPatch = uiAttribs.subPatch || 0;

        op.setUiAttribs(uiAttribs);
        if (op.onCreate) op.onCreate();

        if (op.hasOwnProperty("onAnimFrame")) this.addOnAnimFrame(op);
        if (op.hasOwnProperty("onMasterVolumeChanged")) this._volumeListeners.push(op);

        if (this._opIdCache[op.id])
        {
            this._log.warn("opid with id " + op.id + " already exists in patch!");
            this.deleteOp(op.id); // strange with subpatch ops: why is this needed, somehow ops get added twice ???.....
            // return;
        }

        this.ops.push(op);
        this._opIdCache[op.id] = op;

        if (this._subPatchCacheAdd) this._subPatchCacheAdd(uiAttribs.subPatch, op);
        this.emitEvent("onOpAdd", op, fromDeserialize);

        if (op.init) op.init();

        op.emitEvent("init", fromDeserialize);
    }
    else
    {
        this._log.error("addop: op could not be created: ", opIdentifier);
    }

    return op;
};

Patch.prototype.addOnAnimFrame = function (op)
{
    for (let i = 0; i < this.animFrameOps.length; i++) if (this.animFrameOps[i] == op) { return; }

    this.animFrameOps.push(op);
};

Patch.prototype.removeOnAnimFrame = function (op)
{
    for (let i = 0; i < this.animFrameOps.length; i++)
    {
        if (this.animFrameOps[i] == op)
        {
            this.animFrameOps.splice(i, 1);
            return;
        }
    }
};

Patch.prototype.addOnAnimFrameCallback = function (cb)
{
    this.animFrameCallbacks.push(cb);
};

Patch.prototype.removeOnAnimCallback = function (cb)
{
    for (let i = 0; i < this.animFrameCallbacks.length; i++)
    {
        if (this.animFrameCallbacks[i] == cb)
        {
            this.animFrameCallbacks.splice(i, 1);
            return;
        }
    }
};

Patch.prototype.deleteOp = function (opid, tryRelink, reloadingOp)
{
    let found = false;
    for (const i in this.ops)
    {
        if (this.ops[i].id == opid)
        {
            const op = this.ops[i];
            let reLinkP1 = null;
            let reLinkP2 = null;

            if (op)
            {
                found = true;
                if (tryRelink)
                {
                    if (op.portsIn.length > 0 && op.portsIn[0].isLinked() && (op.portsOut.length > 0 && op.portsOut[0].isLinked()))
                    {
                        if (op.portsIn[0].getType() == op.portsOut[0].getType() && op.portsIn[0].links[0])
                        {
                            reLinkP1 = op.portsIn[0].links[0].getOtherPort(op.portsIn[0]);
                            reLinkP2 = op.portsOut[0].links[0].getOtherPort(op.portsOut[0]);
                        }
                    }
                }

                const opToDelete = this.ops[i];
                opToDelete.removeLinks();

                if (this.onDelete)
                {
                    // todo: remove
                    this._log.warn("deprecated this.onDelete", this.onDelete);
                    this.onDelete(opToDelete);
                }

                this.ops.splice(i, 1);
                opToDelete.emitEvent("delete", opToDelete);
                this.emitEvent("onOpDelete", opToDelete, reloadingOp);

                if (this.clearSubPatchCache) this.clearSubPatchCache(opToDelete.uiAttribs.subPatch);

                if (opToDelete.onDelete) opToDelete.onDelete(reloadingOp);
                opToDelete.cleanUp();

                if (reLinkP1 !== null && reLinkP2 !== null)
                {
                    this.link(reLinkP1.op, reLinkP1.getName(), reLinkP2.op, reLinkP2.getName());
                }

                delete this._opIdCache[opid];
                break;
            }
        }
    }

    if (!found) this._log.warn("core patch deleteop: not found...", opid);
};

Patch.prototype.getFrameNum = function ()
{
    return this._frameNum;
};

Patch.prototype.emitOnAnimFrameEvent = function (time, delta)
{
    time = time || this.timer.getTime();

    for (let i = 0; i < this.animFrameCallbacks.length; ++i)
        if (this.animFrameCallbacks[i])
            this.animFrameCallbacks[i](time, this._frameNum, delta);

    for (let i = 0; i < this.animFrameOps.length; ++i)
        if (this.animFrameOps[i].onAnimFrame)
            this.animFrameOps[i].onAnimFrame(time, this._frameNum, delta);
};

Patch.prototype.renderFrame = function (timestamp)
{
    this.timer.update(this.reqAnimTimeStamp);
    this.freeTimer.update(this.reqAnimTimeStamp);
    const time = this.timer.getTime();
    const startTime = performance.now();
    this.cgl.frameStartTime = this.timer.getTime();

    const delta = timestamp - this.reqAnimTimeStamp || timestamp;

    this.emitOnAnimFrameEvent(null, delta);

    this.cgl.profileData.profileFrameDelta = delta;
    this.reqAnimTimeStamp = timestamp;
    this.cgl.profileData.profileOnAnimFrameOps = performance.now() - startTime;

    this.emitEvent("onRenderFrame", time);

    this._frameNum++;
    if (this._frameNum == 1)
    {
        if (this.config.onFirstFrameRendered) this.config.onFirstFrameRendered();
    }
};

Patch.prototype.exec = function (timestamp)
{
    if (!this._renderOneFrame && (this._paused || this.aborted)) return;
    this.emitEvent("reqAnimFrame");
    cancelAnimationFrame(this._animReq);

    this.config.fpsLimit = this.config.fpsLimit || 0;
    if (this.config.fpsLimit)
    {
        this._frameInterval = 1000 / this.config.fpsLimit;
    }

    const now = CABLES.now();
    const frameDelta = now - this._frameNext;

    if (this.isEditorMode())
    {
        if (!this._renderOneFrame)
        {
            if (now - this._lastFrameTime >= 500 && this._lastFrameTime !== 0 && !this._frameWasdelayed)
            {
                this._lastFrameTime = 0;
                setTimeout(this.exec.bind(this), 500);
                this.emitEvent("renderDelayStart");
                this._frameWasdelayed = true;
                return;
            }
        }
    }

    if (this._renderOneFrame || this.config.fpsLimit === 0 || frameDelta > this._frameInterval || this._frameWasdelayed)
    {
        this.renderFrame(timestamp);

        if (this._frameInterval) this._frameNext = now - (frameDelta % this._frameInterval);
    }

    if (this._frameWasdelayed)
    {
        this.emitEvent("renderDelayEnd");
        this._frameWasdelayed = false;
    }

    if (this._renderOneFrame)
    {
        if (this.onOneFrameRendered) this.onOneFrameRendered(); // todo remove everywhere and use propper event...
        this.emitEvent("renderedOneFrame");
        this._renderOneFrame = false;
    }


    if (this.config.doRequestAnimation) this._animReq = this.cgl.canvas.ownerDocument.defaultView.requestAnimationFrame(this.exec.bind(this));
};

/**
 * link two ops/ports
 * @function link
 * @memberof Patch
 * @instance
 * @param {Op} op1
 * @param {String} port1Name
 * @param {Op} op2
 * @param {String} port2Name
 * @param {boolean} lowerCase
 * @param {boolean} fromDeserialize
 */
Patch.prototype.link = function (op1, port1Name, op2, port2Name, lowerCase, fromDeserialize)
{
    if (!op1) return this._log.warn("link: op1 is null ");
    if (!op2) return this._log.warn("link: op2 is null");

    const port1 = op1.getPort(port1Name, lowerCase);
    const port2 = op2.getPort(port2Name, lowerCase);

    if (!port1) return op1._log.warn("port1 not found! " + port1Name + "(" + op1.objName + ")");
    if (!port2) return op1._log.warn("port2 not found! " + port2Name + " of " + op2.name + "(" + op2.objName + ")", op2);

    if (!port1.shouldLink(port1, port2) || !port2.shouldLink(port1, port2)) return false;

    if (Link.canLink(port1, port2))
    {
        const link = new Link(this);
        link.link(port1, port2);

        this.emitEvent("onLink", port1, port2, link, fromDeserialize);
        return link;
    }
};

Patch.prototype.serialize = function (options)
{
    const obj = {};

    options = options || {};
    obj.ops = [];
    obj.settings = this.settings;
    for (const i in this.ops)
    {
        const op = this.ops[i];
        obj.ops.push(op.getSerialized());
    }

    cleanJson(obj);

    if (options.asObject) return obj;
    return JSON.stringify(obj);
};

Patch.prototype.getOpsByRefId = function (refId)
{
    const perf = CABLES.UI.uiProfiler.start("[corepatchetend] getOpsByRefId");
    const refOps = [];
    const ops = gui.corePatch().ops;
    for (let i = 0; i < ops.length; i++)
        if (ops[i].storage && ops[i].storage.ref == refId) refOps.push(ops[i]);
    perf.finish();
    return refOps;
};


Patch.prototype.getOpById = function (opid)
{
    return this._opIdCache[opid];
};

Patch.prototype.getOpsByName = function (name)
{
    // TODO: is this still needed ? unclear behaviour....
    const arr = [];
    for (const i in this.ops)
        if (this.ops[i].name == name) arr.push(this.ops[i]);
    return arr;
};

Patch.prototype.getOpsByObjName = function (name)
{
    const arr = [];
    for (const i in this.ops)
        if (this.ops[i].objName == name) arr.push(this.ops[i]);
    return arr;
};

Patch.prototype.getOpsByOpId = function (opid)
{
    const arr = [];
    for (const i in this.ops)
        if (this.ops[i].opId == opid) arr.push(this.ops[i]);
    return arr;
};

Patch.prototype.loadLib = function (which)
{
    ajaxSync(
        "/ui/libs/" + which + ".js",
        (err, res) =>
        {
            const se = document.createElement("script");
            se.type = "text/javascript";
            se.text = res;
            document.getElementsByTagName("head")[0].appendChild(se);
        },
        "GET",
    );
    // open and send a synchronous request
    // xhrObj.open('GET', '/ui/libs/'+which+'.js', false);
    // xhrObj.send('');
    // add the returned content to a newly created script tag
};


Patch.prototype.getSubPatchOp = function (patchId, objName)
{
    for (const i in this.ops)
        if (this.ops[i].uiAttribs && this.ops[i].uiAttribs.subPatch == patchId && this.ops[i].objName == objName)
            return this.ops[i];

    return false;
};

Patch.prototype._addLink = function (opinid, opoutid, inName, outName)
{
    return this.link(this.getOpById(opinid), inName, this.getOpById(opoutid), outName, false, true);
};

Patch.prototype.deSerialize = function (obj, options)
{
    options = options || { "genIds": false, "createRef": false };
    if (this.aborted) return;
    const newOps = [];
    const loadingId = this.loading.start("core", "deserialize");

    this.namespace = obj.namespace || "";
    this.name = obj.name || "";

    if (typeof obj === "string") obj = JSON.parse(obj);

    this.settings = obj.settings;

    this.emitEvent("patchLoadStart");

    if (window.logStartup)logStartup("add " + obj.ops.length + " ops... ");

    const addedOps = [];

    // add ops...
    for (let iop = 0; iop < obj.ops.length; iop++)
    {
        const start = CABLES.now();
        const opData = obj.ops[iop];
        let op = null;

        try
        {
            if (opData.opId) op = this.addOp(opData.opId, opData.uiAttribs, opData.id, true, opData.objName);
            else op = this.addOp(opData.objName, opData.uiAttribs, opData.id, true);
        }
        catch (e)
        {
            this._log.error("[instancing error] op data:", opData, e);
            // throw new Error("could not create op by id: <b>" + (opData.objName || opData.opId) + "</b> (" + opData.id + ")");
        }

        if (op)
        {
            addedOps.push(op);
            if (options.genIds) op.id = shortId();
            op.portsInData = opData.portsIn;
            op._origData = JSON.parse(JSON.stringify(opData));
            op.storage = opData.storage;
            // if (opData.hasOwnProperty("disabled"))op.setEnabled(!opData.disabled);

            for (const ipi in opData.portsIn)
            {
                const objPort = opData.portsIn[ipi];
                if (objPort && objPort.hasOwnProperty("name"))
                {
                    const port = op.getPort(objPort.name);

                    if (port && (port.uiAttribs.display == "bool" || port.uiAttribs.type == "bool") && !isNaN(objPort.value)) objPort.value = objPort.value == true ? 1 : 0;
                    if (port && objPort.value !== undefined && port.type != CONSTANTS.OP.OP_PORT_TYPE_TEXTURE) port.set(objPort.value);

                    if (port)
                    {
                        port.deSerializeSettings(objPort);
                    }
                    else
                    {
                        // if (port.uiAttribs.hasOwnProperty("title"))
                        // {
                        //     op.preservedPortTitles = op.preservedPortTitles || {};
                        //     op.preservedPortTitles[port.name] = port.uiAttribs.title;
                        // }
                        op.preservedPortValues = op.preservedPortValues || {};
                        op.preservedPortValues[objPort.name] = objPort.value;
                    }
                }
            }

            for (const ipo in opData.portsOut)
            {
                const objPort = opData.portsOut[ipo];
                if (objPort && objPort.hasOwnProperty("name"))
                {
                    const port2 = op.getPort(objPort.name);

                    if (port2)
                    {
                        port2.deSerializeSettings(objPort);

                        if (port2.uiAttribs.hasOwnProperty("title"))
                        {
                            op.preservedPortTitles = op.preservedPortTitles || {};
                            op.preservedPortTitles[port2.name] = port2.uiAttribs.title;
                        }


                        if (port2.type != CONSTANTS.OP.OP_PORT_TYPE_TEXTURE && objPort.hasOwnProperty("value"))
                            port2.set(obj.ops[iop].portsOut[ipo].value);

                        if (objPort.expose) port2.setUiAttribs({ "expose": true });
                    }
                }
            }
            newOps.push(op);
        }

        const timeused = Math.round(100 * (CABLES.now() - start)) / 100;
        if (!this.silent && timeused > 5) console.log("long op init ", obj.ops[iop].objName, timeused);
    }
    if (window.logStartup)logStartup("add ops done");

    for (const i in this.ops)
    {
        if (this.ops[i].onLoadedValueSet)
        {
            this.ops[i].onLoadedValueSet(this.ops[i]._origData);
            this.ops[i].onLoadedValueSet = null;
            this.ops[i]._origData = null;
        }
        this.ops[i].emitEvent("loadedValueSet");
    }

    if (window.logStartup)logStartup("creating links");

    if (options.opsCreated)options.opsCreated(addedOps);
    // create links...
    if (obj.ops)
    {
        for (let iop = 0; iop < obj.ops.length; iop++)
        {
            if (obj.ops[iop].portsIn)
            {
                for (let ipi2 = 0; ipi2 < obj.ops[iop].portsIn.length; ipi2++)
                {
                    if (obj.ops[iop].portsIn[ipi2] && obj.ops[iop].portsIn[ipi2].links)
                    {
                        for (let ili = 0; ili < obj.ops[iop].portsIn[ipi2].links.length; ili++)
                        {
                            const l = this._addLink(
                                obj.ops[iop].portsIn[ipi2].links[ili].objIn,
                                obj.ops[iop].portsIn[ipi2].links[ili].objOut,
                                obj.ops[iop].portsIn[ipi2].links[ili].portIn,
                                obj.ops[iop].portsIn[ipi2].links[ili].portOut);

                            // const took = performance.now - startTime;
                            // if (took > 100)console.log(obj().ops[iop].portsIn[ipi2].links[ili].objIn, obj.ops[iop].portsIn[ipi2].links[ili].objOut, took);
                        }
                    }
                }
            }
            if (obj.ops[iop].portsOut)
                for (let ipi2 = 0; ipi2 < obj.ops[iop].portsOut.length; ipi2++)
                    if (obj.ops[iop].portsOut[ipi2] && obj.ops[iop].portsOut[ipi2].links)
                    {
                        for (let ili = 0; ili < obj.ops[iop].portsOut[ipi2].links.length; ili++)
                        {
                            if (obj.ops[iop].portsOut[ipi2].links[ili])
                            {
                                if (obj.ops[iop].portsOut[ipi2].links[ili].subOpRef)
                                {
                                    // lost link
                                    const outOp = this.getOpById(obj.ops[iop].portsOut[ipi2].links[ili].objOut);
                                    let dstOp = null;
                                    let theSubPatch = 0;

                                    for (let i = 0; i < this.ops.length; i++)
                                    {
                                        if (
                                            this.ops[i].storage &&
                                            this.ops[i].storage.ref == obj.ops[iop].portsOut[ipi2].links[ili].subOpRef &&
                                            outOp.uiAttribs.subPatch == this.ops[i].uiAttribs.subPatch
                                        )
                                        {
                                            theSubPatch = this.ops[i].patchId.get();
                                            break;
                                        }
                                    }

                                    for (let i = 0; i < this.ops.length; i++)
                                    {
                                        if (
                                            this.ops[i].storage &&
                                            this.ops[i].storage.ref == obj.ops[iop].portsOut[ipi2].links[ili].refOp &&
                                            this.ops[i].uiAttribs.subPatch == theSubPatch)
                                        {
                                            dstOp = this.ops[i];
                                            break;
                                        }
                                    }

                                    if (!dstOp) this._log.warn("could not find op for lost link");
                                    else
                                    {
                                        const l = this._addLink(
                                            dstOp.id,
                                            obj.ops[iop].portsOut[ipi2].links[ili].objOut,

                                            obj.ops[iop].portsOut[ipi2].links[ili].portIn,
                                            obj.ops[iop].portsOut[ipi2].links[ili].portOut);
                                    }
                                }
                                else
                                {
                                    const l = this._addLink(obj.ops[iop].portsOut[ipi2].links[ili].objIn, obj.ops[iop].portsOut[ipi2].links[ili].objOut, obj.ops[iop].portsOut[ipi2].links[ili].portIn, obj.ops[iop].portsOut[ipi2].links[ili].portOut);

                                    if (!l)
                                    {
                                        const op1 = this.getOpById(obj.ops[iop].portsOut[ipi2].links[ili].objIn);
                                        const op2 = this.getOpById(obj.ops[iop].portsOut[ipi2].links[ili].objOut);

                                        if (!op1)console.log("could not find link op1");
                                        if (!op2)console.log("could not find link op2");

                                        const p1Name = obj.ops[iop].portsOut[ipi2].links[ili].portIn;

                                        if (op1 && !op1.getPort(p1Name))
                                        {
                                            // console.log("PRESERVE port 1 not found", p1Name);

                                            op1.preservedPortLinks[p1Name] = op1.preservedPortLinks[p1Name] || [];
                                            op1.preservedPortLinks[p1Name].push(obj.ops[iop].portsOut[ipi2].links[ili]);
                                        }

                                        const p2Name = obj.ops[iop].portsOut[ipi2].links[ili].portOut;
                                        if (op2 && !op2.getPort(p2Name))
                                        {
                                            // console.log("PRESERVE port 2 not found", obj.ops[iop].portsOut[ipi2].links[ili].portOut);
                                            op2.preservedPortLinks[p1Name] = op2.preservedPortLinks[p1Name] || [];
                                            op2.preservedPortLinks[p1Name].push(obj.ops[iop].portsOut[ipi2].links[ili]);
                                        }
                                    }
                                }
                            }
                        }
                    }
        }
    }

    if (window.logStartup)logStartup("calling ops onloaded");

    for (const i in this.ops)
    {
        if (this.ops[i].onLoaded)
        {
            // TODO: deprecate!!!
            this.ops[i].onLoaded();
            this.ops[i].onLoaded = null;
        }
    }

    if (window.logStartup)logStartup("initializing ops...");
    for (const i in this.ops)
    {
        if (this.ops[i].init)
        {
            try
            {
                this.ops[i].init();
                this.ops[i].init = null;
            }
            catch (e)
            {
                console.error("op.init crash", e);
            }
        }
    }

    if (window.logStartup)logStartup("initializing vars...");

    if (this.config.variables)
        for (const varName in this.config.variables)
            this.setVarValue(varName, this.config.variables[varName]);

    if (window.logStartup)logStartup("initializing var ports");

    for (const i in this.ops)
    {
        this.ops[i].initVarPorts();
        delete this.ops[i].uiAttribs.pasted;
    }

    setTimeout(() => { this.loading.finished(loadingId); }, 100);

    if (this.config.onPatchLoaded) this.config.onPatchLoaded(this);

    this.deSerialized = true;
    this.emitEvent("patchLoadEnd", newOps, obj, options.genIds);
};

Patch.prototype.profile = function (enable)
{
    this.profiler = new Profiler(this);
    for (const i in this.ops)
    {
        this.ops[i].profile(enable);
    }
};

// ----------------------

/**
 * set variable value
 * @function setVariable
 * @memberof Patch
 * @instance
 * @param {String} name of variable
 * @param {Number|String|Boolean} val value
 */
Patch.prototype.setVariable = function (name, val)
{
    // if (this._variables.hasOwnProperty(name))
    if (this._variables[name] !== undefined)
    {
        this._variables[name].setValue(val);
    }
    else
    {
        this._log.warn("variable " + name + " not found!");
    }
};

Patch.prototype._sortVars = function ()
{
    if (!this.isEditorMode()) return;
    const ordered = {};
    Object.keys(this._variables).sort(
        (a, b) =>
        { return a.localeCompare(b, "en", { "sensitivity": "base" }); }
    ).forEach((key) =>
    {
        ordered[key] = this._variables[key];
    });
    this._variables = ordered;
};

/**
 * has variable
 * @function hasVariable
 * @memberof Patch
 * @instance
 * @param {String} name of variable
 */
Patch.prototype.hasVar = function (name)
{
    return this._variables[name] !== undefined;

    // return this._variables.hasOwnProperty(name);
};

// used internally
Patch.prototype.setVarValue = function (name, val, type)
{
    if (this.hasVar(name))
    {
        this._variables[name].setValue(val);
    }
    else
    {
        this._variables[name] = new core_variable(name, val, type);
        this._sortVars();
        this.emitEvent("variablesChanged");
    }
    return this._variables[name];
};
// old?
Patch.prototype.getVarValue = function (name, val)
{
    if (this._variables.hasOwnProperty(name)) return this._variables[name].getValue();
};

/**
 * @function getVar
 * @memberof Patch
 * @instance
 * @param {String} name
 * @return {Variable} variable
 */
Patch.prototype.getVar = function (name)
{
    if (this._variables.hasOwnProperty(name)) return this._variables[name];
};


Patch.prototype.deleteVar = function (name)
{
    for (let i = 0; i < this.ops.length; i++)
        for (let j = 0; j < this.ops[i].portsIn.length; j++)
            if (this.ops[i].portsIn[j].getVariableName() == name)
                this.ops[i].portsIn[j].setVariable(null);

    delete this._variables[name];
    this.emitEvent("variableDeleted", name);
    this.emitEvent("variablesChanged");
};

/**
 * @function getVars
 * @memberof Patch
 * @instance
 * @param t
 * @return {Array<Variable>} variables
 * @function
 */
Patch.prototype.getVars = function (t)
{
    if (t === undefined) return this._variables;

    const vars = [];
    if (t == CABLES.OP_PORT_TYPE_STRING) t = "string";
    if (t == CABLES.OP_PORT_TYPE_VALUE) t = "number";
    if (t == CABLES.OP_PORT_TYPE_ARRAY) t = "array";
    if (t == CABLES.OP_PORT_TYPE_OBJECT) t = "object";

    for (const i in this._variables)
    {
        if (!this._variables[i].type || this._variables[i].type == t) vars.push(this._variables[i]);
    }
    return vars;
};

/**
 * @function exitError
 * @memberof Patch
 * @instance
 * @param errorId
 * @param errorMessage
 * @param ex
 * @description cancel patch execution and quit showing an errormessage
 * @function
 */
Patch.prototype.exitError = function (errorId, errorMessage, ex)
{
    this.aborted = true;

    if (this && this.config && this.config.onError)
    {
        this.config.onError(errorId, errorMessage);
    }
    else
    {
        if (!this.isEditorMode())
        {
            const newDiv = document.createElement("div");

            const rect = this.cgl.canvas.getBoundingClientRect();

            newDiv.setAttribute("style", "position:absolute;border:5px solid red;padding:15px;background-color:black;color:white;font-family:monospace;");
            newDiv.style.top = rect.top + "px";
            newDiv.style.left = rect.left + "px";
            let str = "cables - An error occured:<br/>";
            str += "[" + errorId + "] - " + errorMessage;
            if (ex)str += "<br/>Exception: " + ex.message;
            newDiv.innerHTML = str;

            console.log(ex);
            const pe = this.cgl.canvas.parentElement;

            while (pe.hasChildNodes()) pe.removeChild(pe.lastChild);

            document.body.appendChild(newDiv);
        }
    }
};

/**
 * @function preRenderOps
 * @memberof Patch
 * @instance
 * @description invoke pre rendering of ops
 * @function
 */
Patch.prototype.preRenderOps = function ()
{
    this._log.log("prerendering...");

    for (let i = 0; i < this.ops.length; i++)
    {
        if (this.ops[i].preRender)
        {
            this.ops[i].preRender();
            this._log.log("prerender " + this.ops[i].objName);
        }
    }
};

/**
 * @function dispose
 * @memberof Patch
 * @instance
 * @description stop, dispose and cleanup patch
 */
Patch.prototype.dispose = function ()
{
    this.pause();
    this.clear();
    this.cgl.dispose();
};

Patch.prototype.pushTriggerStack = function (p)
{
    this._triggerStack.push(p);
};

Patch.prototype.popTriggerStack = function ()
{
    this._triggerStack.pop();
};

Patch.prototype.printTriggerStack = function ()
{
    if (this._triggerStack.length == 0)
    {
        // console.log("stack length", this._triggerStack.length); // eslint-disable-line
        return;
    }
    console.groupCollapsed( // eslint-disable-line
        "trigger port stack " + this._triggerStack[this._triggerStack.length - 1].op.objName + "." + this._triggerStack[this._triggerStack.length - 1].name,
    );

    const rows = [];
    for (let i = 0; i < this._triggerStack.length; i++)
    {
        rows.push(i + ". " + this._triggerStack[i].op.objName + " " + this._triggerStack[i].name);
    }

    console.table(rows); // eslint-disable-line
    console.groupEnd(); // eslint-disable-line
};

/**
 * returns document object of the patch could be != global document object when opening canvas ina popout window
 * @function getDocument
 * @memberof Patch
 * @instance
 * @return {Object} document
 */
Patch.prototype.getDocument = function ()
{
    return this.cgl.canvas.ownerDocument;
};

Patch.replaceOpIds = function (json, options)
{
    const opids = {};
    for (const i in json.ops)
    {
        opids[json.ops[i].id] = json.ops[i];
    }

    for (const j in json.ops)
    {
        for (const k in json.ops[j].portsOut)
        {
            const links = json.ops[j].portsOut[k].links;
            if (links)
            {
                let l = links.length;

                while (l--)
                {
                    if (links[l] && (!opids[links[l].objIn] || !opids[links[l].objOut]))
                    {
                        if (!options.doNotUnlinkLostLinks)
                        {
                            links.splice(l, 1);
                        }
                        else
                        {
                            if (options.fixLostLinks)
                            {
                                // console.log("lost link...?", links[l]);
                                const op = gui.corePatch().getOpById(links[l].objIn);
                                if (!op) console.log("op not found!");
                                else
                                {
                                    const outerOp = gui.patchView.getSubPatchOuterOp(op.uiAttribs.subPatch);
                                    if (outerOp)
                                    {
                                        op.storage = op.storage || {};
                                        op.storage.ref = op.storage.ref || CABLES.shortId();
                                        links[l].refOp = op.storage.ref;
                                        links[l].subOpRef = outerOp.storage.ref;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }



    for (const i in json.ops)
    {
        const op = json.ops[i];
        const oldId = op.id;
        let newId = CABLES.shortId();

        if (options.prefixHash) newId = prefixedHash(options.prefixHash + oldId);

        else if (options.prefixId) newId = options.prefixId + oldId;
        else if (options.refAsId) // when saving json
        {
            if (op.storage && op.storage.ref)
            {
                newId = op.storage.ref;
                delete op.storage.ref;
            }
            else
            {
                op.storage = op.storage || {};
                op.storage.ref = newId = CABLES.shortId();
            }
        }

        const newID = op.id = newId;

        if (options.oldIdAsRef) // when loading json
        {
            op.storage = op.storage || {};
            op.storage.ref = oldId;
        }

        for (const j in json.ops)
        {
            if (json.ops[j].portsIn)
                for (const k in json.ops[j].portsIn)
                {
                    if (json.ops[j].portsIn[k].links)
                    {
                        let l = json.ops[j].portsIn[k].links.length;

                        while (l--) if (json.ops[j].portsIn[k].links[l] === null) json.ops[j].portsIn[k].links.splice(l, 1);

                        for (l in json.ops[j].portsIn[k].links)
                        {
                            if (json.ops[j].portsIn[k].links[l].objIn === oldId) json.ops[j].portsIn[k].links[l].objIn = newID;
                            if (json.ops[j].portsIn[k].links[l].objOut === oldId) json.ops[j].portsIn[k].links[l].objOut = newID;
                        }
                    }
                }

            if (json.ops[j].portsOut)
                for (const k in json.ops[j].portsOut)
                {
                    if (json.ops[j].portsOut[k].links)
                    {
                        let l = json.ops[j].portsOut[k].links.length;

                        while (l--) if (json.ops[j].portsOut[k].links[l] === null) json.ops[j].portsOut[k].links.splice(l, 1);

                        for (l in json.ops[j].portsOut[k].links)
                        {
                            if (json.ops[j].portsOut[k].links[l].objIn === oldId) json.ops[j].portsOut[k].links[l].objIn = newID;
                            if (json.ops[j].portsOut[k].links[l].objOut === oldId) json.ops[j].portsOut[k].links[l].objOut = newID;
                        }
                    }
                }
        }
    }

    // set correct subpatch
    const subpatchIds = [];
    const fixedSubPatches = [];

    for (let i = 0; i < json.ops.length; i++)
    {
        // if (CABLES.Op.isSubPatchOpName(json.ops[i].objName))
        if (json.ops[i].storage && json.ops[i].storage.subPatchVer)
        {
            for (const k in json.ops[i].portsIn)
            {
                if (json.ops[i].portsIn[k].name === "patchId")
                {
                    let newId = shortId();

                    if (options.prefixHash) newId = prefixedHash(options.prefixHash + json.ops[i].portsIn[k].value);

                    const oldSubPatchId = json.ops[i].portsIn[k].value;
                    const newSubPatchId = json.ops[i].portsIn[k].value = newId;

                    subpatchIds.push(newSubPatchId);

                    for (let j = 0; j < json.ops.length; j++)
                    {
                        // op has no uiAttribs in export, we don't care about subpatches in export though
                        if (json.ops[j].uiAttribs)
                        {
                            if (json.ops[j].uiAttribs.subPatch === oldSubPatchId)
                            {
                                json.ops[j].uiAttribs.subPatch = newSubPatchId;
                                fixedSubPatches.push(json.ops[j].id);
                            }
                        }
                    }
                }
            }
        }
    }

    for (const kk in json.ops)
    {
        let found = false;
        for (let j = 0; j < fixedSubPatches.length; j++)
        {
            if (json.ops[kk].id === fixedSubPatches[j])
            {
                found = true;
                break;
            }
        }
        // op has no uiAttribs in export, we don't care about subpatches in export though
        if (!found && json.ops[kk].uiAttribs && options.parentSubPatchId != null)
            json.ops[kk].uiAttribs.subPatch = options.parentSubPatchId;
    }

    return json;
};

/**
 * remove an eventlistener
 * @instance
 * @function addEventListener
 * @param {String} name of event
 * @param {function} callback
 */

/**
 * remove an eventlistener
 * @instance
 * @function removeEventListener
 * @param {String} name of event
 * @param {function} callback
 */

/**
 * op added to patch event
 * @event onOpAdd
 *
 * @memberof Patch
 * @type {Object}
 * @property {Op} op new op
 */

/**
 * op deleted from patch
 * @event onOpDelete
 * @memberof Patch
 * @type {Object}
 * @property {Op} op that will be deleted
 */

/**
 * link event - two ports will be linked
 * @event onLink
 * @memberof Patch
 * @type {Object}
 * @property {Port} port1
 * @property {Port} port2
 */

/**
 * unlink event - a link was deleted
 * @event onUnLink
 * @memberof Patch
 * @type {Object}
 */

/**
 * variables has been changed / a variable has been added to the patch
 * @event variablesChanged
 * @memberof Patch
 * @type {Object}
 * @property {Port} port1
 * @property {Port} port2
 */

/**
 * configuration object for loading a patch
 * @typedef {Object} PatchConfig
 * @hideconstructor
 * @property {String} [prefixAssetPath=''] prefix for path to assets
 * @property {String} [assetPath=''] path to assets
 * @property {String} [jsPath=''] path to javascript files
 * @property {String} [glCanvasId='glcanvas'] dom element id of canvas element
 * @property {Function} [onError=null] called when an error occurs
 * @property {Function} [onFinishedLoading=null] called when patch finished loading all assets
 * @property {Function} [onFirstFrameRendered=null] called when patch rendered it's first frame
 * @property {Boolean} [glCanvasResizeToWindow=false] resize canvas automatically to window size
 * @property {Boolean} [doRequestAnimation=true] do requestAnimationFrame set to false if you want to trigger exec() from outside (only do if you know what you are doing)
 * @property {Boolean} [clearCanvasColor=true] clear canvas in transparent color every frame
 * @property {Boolean} [clearCanvasDepth=true] clear depth every frame
 * @property {Boolean} [glValidateShader=true] enable/disable validation of shaders *
 * @property {Boolean} [silent=false]
 * @property {Number} [fpsLimit=0] 0 for maximum possible frames per second
 * @property {String} [glslPrecision='mediump'] default precision for glsl shader
 *
 */

/* harmony default export */ const core_patch = (Patch);

;// CONCATENATED MODULE: ./src/core/embedding.js



const EMBED = {};

/**
 * add patch into html element (will create canvas and set size to fill containerElement)
 * @name CABLES.EMBED#addPatch
 * @param {object|string} _element containerElement dom element or id of element
 * @param {object} options patch options
 * @function
 */
EMBED.addPatch = function (_element, options)
{
    let el = _element;
    let id = generateUUID();
    if (typeof _element == "string")
    {
        id = _element;
        el = document.getElementById(id);

        if (!el)
        {
            console.error(id + " Polyshape Container Element not found!");
            return;
        }
    }

    const canvEl = document.createElement("canvas");
    canvEl.id = "glcanvas_" + id;
    canvEl.width = el.clientWidth;
    canvEl.height = el.clientHeight;

    window.addEventListener(
        "resize",
        function ()
        {
            this.setAttribute("width", el.clientWidth);
            this.height = el.clientHeight;
        }.bind(canvEl),
    );

    el.appendChild(canvEl);

    options = options || {};
    options.glCanvasId = canvEl.id;

    if (!options.onError)
    {
        options.onError = function (err)
        {
            console.error(err);
        };
    }

    CABLES.patch = new core_patch(options);
    return canvEl;
};



;// CONCATENATED MODULE: ./src/core/webaudio.js
/** @namespace WEBAUDIO */



const WEBAUDIO = {};

WEBAUDIO.toneJsInitialized = false;

/*
 * External JSDoc definitions
 */

/**
 * Part of the Web Audio API, the AudioBuffer interface represents a short audio asset residing in memory.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer}
 */

/**
 * Part of the Web Audio API, the AudioNode interface is a generic interface for representing an audio processing module.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioNode}
 */

/**
 * The AudioContext interface represents an audio-processing graph built from audio modules linked together
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioContext}
 */

/**
 * Checks if a global audio context has been created and creates
 * it if necessary. This audio context can be used for native Web Audio as well as Tone.js ops.
 * Associates the audio context with Tone.js if it is being used
 * @param {CABLES.Op} op - The operator which needs the Audio Context
 */
WEBAUDIO.createAudioContext = function (op)
{
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    if (window.AudioContext)
    {
        if (!window.audioContext)
        {
            window.audioContext = new AudioContext();
        }
        // check if tone.js lib is being used
        if (window.Tone && !WEBAUDIO.toneJsInitialized)
        {
            // set current audio context in tone.js
            Tone.setContext(window.audioContext);
            WEBAUDIO.toneJsInitialized = true;
        }
    }
    else
    {
        op.patch.config.onError("NO_WEBAUDIO", "Web Audio is not supported in this browser.");
        return;
    }
    return window.audioContext;
};

/**
 * Returns the audio context.
 * Before `createAudioContext` must have been called at least once.
 * It most cases you should use `createAudioContext`, which just returns the audio context
 * when it has been created already.
 */
WEBAUDIO.getAudioContext = function ()
{
    return window.audioContext;
};

/**
 * Creates an audio in port for the op with name `portName`
 * When disconnected it will disconnect the previous connected audio node
 * from the op's audio node.
 * @param {CABLES.Op} op - The operator to create the audio port in
 * @param {string} portName - The name of the port
 * @param {AudioNode} audioNode - The audionode incoming connections should connect to
 * @param {number} [inputChannelIndex=0] - If the audio node has multiple inputs, this is the index of the input channel to connect to
 * @returns {CABLES.Port|undefined} - The newly created audio in port or `undefined` if there was an error
 */
WEBAUDIO.createAudioInPort = function (op, portName, audioNode, inputChannelIndex)
{
    if (!op || !portName || !audioNode)
    {
        const msg = "ERROR: createAudioInPort needs three parameters, op, portName and audioNode";
        op.log(msg);
        throw new Error(msg);
        // return;
    }
    if (!inputChannelIndex)
    {
        inputChannelIndex = 0;
    }
    op.webAudio = op.webAudio || {};
    op.webAudio.audioInPorts = op.webAudio.audioInPorts || [];
    const port = op.inObject(portName);
    port.webAudio = {};
    port.webAudio.previousAudioInNode = null;
    port.webAudio.audioNode = audioNode;

    op.webAudio.audioInPorts[portName] = port;

    port.onChange = function ()
    {
        const audioInNode = port.get();
        // when port disconnected, disconnect audio nodes
        if (!audioInNode)
        {
            if (port.webAudio.previousAudioInNode)
            {
                try
                {
                    if (port.webAudio.previousAudioInNode.disconnect) port.webAudio.previousAudioInNode.disconnect(port.webAudio.audioNode, 0, inputChannelIndex);
                    op.setUiError("audioCtx", null);
                }
                catch (e)
                {
                    try
                    {
                        port.webAudio.previousAudioInNode.disconnect(port.webAudio.audioNode);
                    }
                    catch (er)
                    {
                        op.log(
                            "Disconnecting audio node with in/out port index, as well as without in/out-port-index did not work ",
                            e,
                        );
                        if (e.printStackTrace)
                        {
                            e.printStackTrace();
                        }
                        throw e;
                    }
                }
            }
        }
        else
        {
            try
            {
                if (audioInNode.connect)
                {
                    audioInNode.connect(port.webAudio.audioNode, 0, inputChannelIndex);
                    op.setUiError("audioCtx", null);
                }
                else op.setUiError("audioCtx", "The passed input is not an audio context. Please make sure you connect an audio context to the input.", 2);
            }
            catch (e)
            {
                op.log("Error: Failed to connect web audio node!", e);
                op.log("port.webAudio.audioNode", port.webAudio.audioNode);
                op.log("audioInNode: ", audioInNode);
                op.log("inputChannelIndex:", inputChannelIndex);
                op.log("audioInNode.connect: ", audioInNode.connect);
                throw e;
            }
        }
        port.webAudio.previousAudioInNode = audioInNode;
    };
    // TODO: Maybe add subtype to audio-node-object?
    return port;
};

/**
 * Sometimes it is necessary to replace a node of a port, if so all
 * connections to this node must be disconnected and connections to the new
 * node must be made.
 * Can be used for both Audio ports as well as AudioParam ports
 * if used with an AudioParam pass e.g. `synth.frequency` as newNode
 * @param {CABLES.Port} port - The port where the audio node needs to be replaced
 * @param oldNode
 * @param newNode
 */
WEBAUDIO.replaceNodeInPort = function (port, oldNode, newNode)
{
    const connectedNode = port.webAudio.previousAudioInNode;
    // check if connected
    if (connectedNode && connectedNode.disconnect)
    {
        try
        {
            connectedNode.disconnect(oldNode);
        }
        catch (e)
        {
            if (e.printStackTrace)
            {
                e.printStackTrace();
            }
            throw new Error("replaceNodeInPort: Could not disconnect old audio node. " + e.name + " " + e.message);
        }
        port.webAudio.audioNode = newNode;
        try
        {
            connectedNode.connect(newNode);
        }
        catch (e)
        {
            if (e.printStackTrace)
            {
                e.printStackTrace();
            }
            throw new Error("replaceNodeInPort: Could not connect to new node. " + e.name + " " + e.message);
        }
    }
};

/**
 * Creates an audio out port which takes care of (dis-)connecting on it’s own
 * @param {CABLES.op} op - The op to create an audio out port for
 * @param {string} portName - The name of the port to be created
 * @param {AudioNode} audioNode - The audio node to link to the port
 * @returns {(CABLES.Port|undefined)} - The newly created audio out port or `undefined` if there was an error
 */
WEBAUDIO.createAudioOutPort = function (op, portName, audioNode)
{
    if (!op || !portName || !audioNode)
    {
        const msg = "ERROR: createAudioOutPort needs three parameters, op, portName and audioNode";
        op.log(msg);
        throw new Error(msg);
    }

    const port = op.outObject(portName);
    // TODO: Maybe add subtype to audio-node-object?
    port.set(audioNode);
    return port;
};

/**
 * Creates an audio param in port for the op with name portName.
 * The port accepts other audio nodes as signals as well as values (numbers)
 * When the port is disconnected it will disconnect the previous connected audio node
 * from the op's audio node and restore the number value set before.
 * @param {CABLES.Op} op - The operator to create an audio param input port for
 * @param {string} portName - The name of the port to create
 * @param audioNode
 * @param options
 * @param defaultValue
 * @returns {(CABLES.Port|undefined)} - The newly created port, which takes care of (dis-)connecting on its own, or `undefined` if there was an error
 */
WEBAUDIO.createAudioParamInPort = function (op, portName, audioNode, options, defaultValue)
{
    if (!op || !portName || !audioNode)
    {
        op.log("ERROR: createAudioParamInPort needs three parameters, op, portName and audioNode");
        if (op && op.name) op.log("opname: ", op.name);
        op.log("portName", portName);
        op.log("audioNode: ", audioNode);
        return;
    }
    op.webAudio = op.webAudio || {};
    op.webAudio.audioInPorts = op.webAudio.audioInPorts || [];
    // var port = op.inObject(portName);
    const port = op.inDynamic(
        portName,
        [CONSTANTS.OP.OP_PORT_TYPE_VALUE, CONSTANTS.OP.OP_PORT_TYPE_OBJECT],
        options,
        defaultValue,
    );
    port.webAudio = {};
    port.webAudio.previousAudioInNode = null;
    port.webAudio.audioNode = audioNode;

    op.webAudio.audioInPorts[portName] = port;

    // port.onLinkChanged = function() {
    //   op.log("onLinkChanged");
    //   if(port.isLinked()) {
    //
    //       if(port.links[0].portOut.type === CABLES.CONSTANTS.OP.OP_PORT_TYPE_) { // value
    //
    //       } else if(port.links[0].portOut.type === CABLES.CONSTANTS.OP.OP_PORT_TYPE_OBJECT) { // object
    //
    //       }
    //   } else { // unlinked
    //
    //   }
    // };

    port.onChange = function ()
    {
        const audioInNode = port.get();
        const node = port.webAudio.audioNode;
        const audioCtx = WEBAUDIO.getAudioContext();

        if (audioInNode != undefined)
        {
            if (typeof audioInNode === "object" && audioInNode.connect)
            {
                try
                {
                    audioInNode.connect(node);
                }
                catch (e)
                {
                    op.log("Could not connect audio node: ", e);
                    if (e.printStackTrace)
                    {
                        e.printStackTrace();
                    }
                    throw e;
                }
                port.webAudio.previousAudioInNode = audioInNode;
            }
            else
            {
                // tone.js audio param
                if (node._param && node._param.minValue && node._param.maxValue)
                {
                    if (audioInNode >= node._param.minValue && audioInNode <= node._param.maxValue)
                    {
                        try
                        {
                            if (node.setValueAtTime)
                            {
                                node.setValueAtTime(audioInNode, audioCtx.currentTime);
                            }
                            else
                            {
                                node.value = audioInNode;
                            }
                        }
                        catch (e)
                        {
                            op.log("Possible AudioParam problem with tone.js op: ", e);
                            if (e.printStackTrace)
                            {
                                e.printStackTrace();
                            }
                            throw e;
                        }
                    }
                    else
                    {
                        op.log("Warning: The value for an audio parameter is out of range!");
                    }
                } // native Web Audio param
                else if (node.minValue && node.maxValue)
                {
                    if (audioInNode >= node.minValue && audioInNode <= node.maxValue)
                    {
                        try
                        {
                            if (node.setValueAtTime)
                            {
                                node.setValueAtTime(audioInNode, audioCtx.currentTime);
                            }
                            else
                            {
                                node.value = audioInNode;
                            }
                        }
                        catch (e)
                        {
                            op.log(
                                "AudioParam has minValue / maxValue defined, and value is in range, but setting the value failed! ",
                                e,
                            );
                            if (e.printStackTrace)
                            {
                                e.printStackTrace();
                            }
                            throw e;
                        }
                    }
                    else
                    {
                        op.log("Warning: The value for an audio parameter is out of range!");
                    }
                } // no min-max values, try anyway
                else
                {
                    try
                    {
                        if (node.setValueAtTime)
                        {
                            node.setValueAtTime(audioInNode, audioCtx.currentTime);
                        }
                        else
                        {
                            node.value = audioInNode;
                        }
                    }
                    catch (e)
                    {
                        op.log("Possible AudioParam problem (without minValue / maxValue): ", e);
                        if (e.printStackTrace)
                        {
                            e.printStackTrace();
                        }
                        throw e;
                    }
                }

                if (port.webAudio.previousAudioInNode && port.webAudio.previousAudioInNode.disconnect)
                {
                    try
                    {
                        port.webAudio.previousAudioInNode.disconnect(node);
                    }
                    catch (e)
                    {
                        op.log("Could not disconnect previous audio node: ", e);
                        throw e;
                    }
                    port.webAudio.previousAudioInNode = undefined;
                }
            }
        }
        else
        {
            // disconnected
            if (port.webAudio.previousAudioInNode)
            {
            }
        }
    };
    return port;
};


/**
 * Loads an audio file and updates the loading indicators when cables is run in the editor.
 * @param {CABLES.Patch} patch - The cables patch, when called from inside an op this is `op.patch`
 * @param {string} url - The url of the audio file to load
 * @param {function} onFinished - The callback to be called when the loading is finished, passes the AudioBuffer
 * @param {function} onError - The callback when there was an error loading the file, the rror message is passed
 * @param loadingTask
 * @see {@link https://developer.mozilla.org/de/docs/Web/API/AudioContext/decodeAudioData}
 */
WEBAUDIO.loadAudioFile = function (patch, url, onFinished, onError, loadingTask)
{
    const audioContext = WEBAUDIO.createAudioContext();

    let loadingId = null;
    if (loadingTask || loadingTask === undefined)
    {
        loadingId = patch.loading.start("audio", url);
        if (patch.isEditorMode()) gui.jobs().start({ "id": "loadaudio" + loadingId, "title": " loading audio (" + url + ")" });
    }
    const request = new XMLHttpRequest();
    if (!url)
    {
        return;
    }
    request.open("GET", url, true);
    request.responseType = "arraybuffer";
    // TODO: maybe crossorigin stuff needed?
    // Decode asynchronously
    request.onload = function ()
    {
        patch.loading.finished(loadingId);
        if (patch.isEditorMode()) gui.jobs().finish("loadaudio" + loadingId);
        audioContext.decodeAudioData(request.response, onFinished, onError);
    };
    request.send();
};

/**
 * Checks if the passed time is a valid time to be used in any of the Tone.js ops.
 * @param {(string|number)} t - The time to check
 * @returns {boolean} - True if time is valid, false if not
 */
WEBAUDIO.isValidToneTime = function (t)
{
    try
    {
        const time = new Tone.Time(t);
    }
    catch (e)
    {
        return false;
    }
    return true;
};

/**
 * Checks if the passed note is a valid note to be used with Tone.js
 * @param {string} note - The note to be checked, e.g. `"C4"`
 * @returns {boolean} - True if the note is a valid note, false otherwise
 */
WEBAUDIO.isValidToneNote = function (note)
{
    try
    {
        Tone.Frequency(note);
    }
    catch (e)
    {
        return false;
    }
    return true;
};



;// CONCATENATED MODULE: ./src/core/sessionvar.js
// todo: old... remove this from ops...

/**
 * todo: old... remove this from ops...
 *
 * @class
 */
const Variable = function ()
{
    let value = null;
    const changedCallbacks = [];

    this.onChanged = function (f)
    {
        changedCallbacks.push(f);
    };

    this.getValue = function ()
    {
        return value;
    };

    this.setValue = function (v)
    {
        value = v;
        this.emitChanged();
    };

    this.emitChanged = function ()
    {
        for (let i = 0; i < changedCallbacks.length; i++)
        {
            changedCallbacks[i]();
        }
    };
};



;// CONCATENATED MODULE: ./src/core/banchprofiler.js
class Branch
{
    constructor(name)
    {
        this.name = name;
        this.dur = 0;
        this._startTime = 0;
        this.childs = [];
    }

    start()
    {
        this._startTime = performance.now();
    }

    end()
    {
        this.dur = performance.now() - this._startTime;
    }

    push(name)
    {
        const b = new Branch(name);
        this.childs.push(b);
        b.start();
        return b;
    }

    print(level)
    {
        level = level || 0;

        let str = "";
        for (let i = 0; i < level; i++) str += "  ";

        for (let i = 0; i < this.childs.length; i++)
        {
            this.childs[i].print(level + 1);
        }
    }
}

// //////////////////////////////////////////

class BranchStack
{
    constructor()
    {
    }

    start()
    {
        this.root = new Branch("Root");
        this.root.start();

        this.current = this.root;
    }

    push(name)
    {
        if (!this.current) this.start();

        const prev = this.current;
        this.current = this.current.push(name);
        this.current.prev = prev;
        this.current.start();
        return this.current;
    }

    pop()
    {
        if (!this.current) return;
        this.current.end();
        this.current = this.current.prev;
    }

    finish()
    {
        this.current.end();
        this.root.print();
        this.current = null;
    }
}




;// CONCATENATED MODULE: ./src/core/cgp/cgp_uniform.js


class cgp_uniform_Uniform extends cg_uniform
{
    constructor(__shader, __type, __name, _value, _port2, _port3, _port4, _structUniformName, _structName, _propertyName)
    {
        super(__shader, __type, __name, _value, _port2, _port3, _port4, _structUniformName, _structName, _propertyName);
        this._loc = -1;
        this._cgl = __shader._cgl;
    }


    updateValueF() { }

    setValueF(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }

    updateValue2F() { }

    setValue2F(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }

    updateValue3F() { }

    setValue3F(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }

    updateValue4F() { }

    setValue4F(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }

    getSizeBytes()
    {
        if (this._type == "f") return 1 * 4;
        if (this._type == "i") return 1 * 4;
        if (this._type == "2i") return 2 * 4;
        if (this._type == "2f") return 2 * 4;
        if (this._type == "3f") return 3 * 4;
        if (this._type == "4f") return 4 * 4;
        if (this._type == "m4") return 4 * 4 * 4;

        this._log.warn("unknown type getSizeBytes");
        // if (this._type == "t") return "sampler2D";
        // if (this._type == "tc") return "samplerCube";
        // if (this._type == "b") return "bool";

        // if (t == "3f[]") return null; // ignore this for now...
        // if (t == "m4[]") return null; // ignore this for now...
        // if (t == "f[]") return null; // ignore this for now...
    }
}

;// CONCATENATED MODULE: ./src/core/cgp/cgp_shader.js




class cgp_shader_Shader
{
    constructor(_cgp, _name)
    {
        if (!_cgp) throw new Error("shader constructed without cgp " + _name);
        this._log = new Logger("cgp_shader");
        this._cgp = _cgp;
        this._name = _name;
        this._uniforms = [];

        if (!_name) this._log.stack("no shader name given");
        this._name = _name || "unknown";
        this.id = simpleId();
        this._isValid = true;
        this._compileReason = "";
        this.shaderModule = null;
        this._needsRecompile = true;

        this._src = "";
    }

    get isValid()
    {
        return this._isValid;
    }

    get uniforms()
    {
        return this._uniforms;
    }

    getName()
    {
        return this._name;
    }

    setWhyCompile(why)
    {
        this._compileReason = why;
    }

    setSource(src)
    {
        this._src = src;
        this.setWhyCompile("Source changed");
        this._needsRecompile = true;
    }

    compile()
    {
        this._isValid = true;
        console.log("compiling shader...", this._compileReason);
        this._cgp.pushErrorScope();
        this.shaderModule = this._cgp.device.createShaderModule({ "code": this._src });
        this._cgp.popErrorScope("cgp_shader " + this._name, this.error.bind(this));
        this._needsRecompile = false;
    }

    error(e)
    {
        this._isValid = false;
    }


    bind()
    {
        let sizes = {};
        for (let i = 0; i < this._uniforms.length; i++)
        {
            // console.log(this._uniforms[i]);
        }

        if (this._needsRecompile) this.compile();
    }

    /**
     * add a uniform to the fragment shader
     * @param {String} type ['f','t', etc]
     * @param {String} name
     * @param {any} valueOrPort value or port
     * @param p2
     * @param p3
     * @param p4
     * @memberof Shader
     * @instance
     * @function addUniformFrag
     * @returns {Uniform}
     */
    addUniformFrag(type, name, valueOrPort, p2, p3, p4)
    {
        const uni = new cgp_uniform_Uniform(this, type, name, valueOrPort, p2, p3, p4);
        uni.shaderType = "frag";
        return uni;
    }

    /**
     * add a uniform to the vertex shader
     * @param {String} type ['f','t', etc]
     * @param {String} name
     * @param {any} valueOrPort value or port
     * @param p2
     * @param p3
     * @param p4
     * @memberof Shader
     * @instance
     * @function addUniformVert
     * @returns {Uniform}
     */
    addUniformVert(type, name, valueOrPort, p2, p3, p4)
    {
        const uni = new cgp_uniform_Uniform(this, type, name, valueOrPort, p2, p3, p4);
        uni.shaderType = "vert";
        return uni;
    }

    /**
     * add a uniform to all shader programs
     * @param {String} type ['f','t', etc]
     * @param {String} name
     * @param {any} valueOrPort value or port
     * @param p2
     * @param p3
     * @param p4
     * @memberof Shader
     * @instance
     * @function addUniform
     * @returns {Uniform}
     */
    addUniform(type, name, valueOrPort, p2, p3, p4)
    {
        const uni = new cgp_uniform_Uniform(this, type, name, valueOrPort, p2, p3, p4);
        uni.shaderType = "both";
        return uni;
    }


    _addUniform(uni)
    {
        this._uniforms.push(uni);
        this.setWhyCompile("add uniform " + name);
        this._needsRecompile = true;
    }
}

;// CONCATENATED MODULE: ./src/core/cgp/cgl_shader_default.wgsl
/* harmony default export */ const cgl_shader_default = ("struct VSUniforms\n{\n    modelMatrix: mat4x4<f32>,\n    viewMatrix: mat4x4<f32>,\n    projMatrix: mat4x4<f32>,\n};\n\nstruct FSUniforms\n{\n    color:vec4<f32>\n};\n\n@group(0) @binding(0) var<uniform> vsUniforms: VSUniforms;\n@group(0) @binding(1) var<uniform> fsUniforms: FSUniforms;\n\nstruct MyVSInput\n{\n    @location(0) position: vec3<f32>,\n    @location(1) normal: vec3<f32>,\n    @location(2) texcoord: vec2<f32>,\n};\n\nstruct MyVSOutput\n{\n    @builtin(position) position: vec4<f32>,\n    @location(0) normal: vec3<f32>,\n    @location(1) texcoord: vec2<f32>,\n};\n\n@vertex\nfn myVSMain(v: MyVSInput) -> MyVSOutput\n{\n    var vsOut: MyVSOutput;\n    var pos =vec4<f32>(v.position, 1.0);\n\n    var mvMatrix=vsUniforms.viewMatrix * vsUniforms.modelMatrix;\n    vsOut.position = vsUniforms.projMatrix * mvMatrix * pos;\n\n    vsOut.normal = v.normal;\n    vsOut.texcoord = v.texcoord;\n    return vsOut;\n}\n\n@fragment\nfn myFSMain(v: MyVSOutput) -> @location(0) vec4<f32>\n{\n    return fsUniforms.color+vec4<f32>(.5,.5,.5,1.0);\n}\n\n");
;// CONCATENATED MODULE: ./src/core/cgp/cgp_state.js





// https://github.com/greggman/webgpu-utils
// https://developer.chrome.com/blog/from-webgl-to-webgpu/
// https://gpuweb.github.io/gpuweb/explainer/


/**
 * cables webgpu context/state manager
 * @class
 * @namespace external:CGP
 * @hideconstructor
 */
// const Context = function (_patch)
class WebGpuContext extends CGState
{
    constructor(_patch)
    {
        super();

        this.patch = _patch;

        this.gApi = CG.GAPI_WEBGPU;
        this._viewport = [0, 0, 256, 256];
        this._shaderStack = [];
        this._simpleShader = null;

        this._stackCullFaceFacing = [];
        this._stackDepthTest = [];
        this._stackCullFace = [];
        this._stackDepthFunc = [];
        this._stackDepthWrite = [];

        this.DEPTH_FUNCS = [
            "never",
            "always",
            "less",
            "less-equal",
            "greater",
            "greater-equal",
            "equal",
            "not-equal"
        ];

        this.CULL_MODES = [
            "none",
            "back",
            "front",
            "none" // both does not exist in webgpu
        ];
    }


    /// ////////////////////

    getViewPort()
    {
        return [0, 0, this.canvasWidth, this.canvasHeight];
    }

    renderStart(cgp, identTranslate, identTranslateView)
    {
        if (!this._simpleShader)
        {
            this._simpleShader = new cgp_shader_Shader(this, "simple default shader");
            this._simpleShader.setSource(cgl_shader_default);
            this._simpleShader.addUniformFrag("4f", "color", 1, 1, 0, 1);
        }

        this.fpsCounter.startFrame();

        this._startMatrixStacks(identTranslate, identTranslateView);
        this.setViewPort(0, 0, this.canvasWidth, this.canvasHeight);

        this.pushShader(this._simpleShader);
        this.pushDepthTest(true);
        this.pushDepthWrite(true);
        this.pushDepthFunc("less-equal");

        this.emitEvent("beginFrame");
    }

    renderEnd()
    {
        this._endMatrixStacks();

        this.popShader();
        this.popDepthFunc();
        this.popDepthWrite();
        this.popDepthTest();

        this.emitEvent("endFrame");
        this.fpsCounter.endFrame();
    }


    setViewPort(x, y, w, h)
    {
        this._viewport = [x, y, w, h];
    }

    /**
     * @function getViewPort
     * @memberof Context
     * @instance
     * @description get current gl viewport
     * @returns {Array} array [x,y,w,h]
     */
    getViewPort()
    {
        return this._viewPort;
    }


    createMesh(geom, glPrimitive)
    {
        return new CGP.Mesh(this, geom, glPrimitive);
    }

    getShader()
    {
        return {};
    }

    /**
     * push a shader to the shader stack
     * @function pushShader
     * @memberof Context
     * @instance
     * @param {Object} shader
     * @function
    */
    pushShader(shader)
    {
        this._shaderStack.push(shader);
        // currentShader = shader;
    }

    /**
     * pop current used shader from shader stack
     * @function popShader
     * @memberof Context
     * @instance
     * @function
     */
    popShader()
    {
        if (this._shaderStack.length === 0) throw new Error("Invalid shader stack pop!");
        this._shaderStack.pop();
        // currentShader = this._shaderStack[this._shaderStack.length - 1];
    }

    getShader()
    {
        return this._shaderStack[this._shaderStack.length - 1];
        // if (currentShader) if (!this.frameStore || ((this.frameStore.renderOffscreen === true) == currentShader.offScreenPass) === true) return currentShader;
        // for (let i = this._shaderStack.length - 1; i >= 0; i--) if (this._shaderStack[i]) if (this.frameStore.renderOffscreen == this._shaderStack[i].offScreenPass) return this._shaderStack[i];
    }

    pushErrorScope()
    {
        this.device.pushErrorScope("validation");
    }

    popErrorScope(name, cb)
    {
        this.device.popErrorScope().then((error) =>
        {
            if (error)
            {
                this.patch.emitEvent("criticalError", { "title": "WebGPU error \"" + name + "\"", "codeText": error.message });
                // if (this.patch.isEditorMode())console.log("WebGPU error " + this._name, error.message);

                console.warn("[cgp]", name, error.message, error, cb);
                if (cb)cb(error);
            }
        });
    }

    /**
     * push depth testing enabled state
     * @function pushDepthTest
     * @param {Boolean} b enabled
     * @memberof Context
     * @instance
     */
    pushDepthTest(b)
    {
        this._stackDepthTest.push(b);
    }

    /**
     * current state of depth testing
     * @function stateDepthTest
     * @returns {Boolean} enabled
     * @memberof Context
     * @instance
     */
    stateDepthTest()
    {
        return this._stackDepthTest[this._stackDepthTest.length - 1];
    }

    /**
     * pop depth testing state
     * @function popDepthTest
     * @memberof Context
     * @instance
     */
    popDepthTest()
    {
        this._stackDepthTest.pop();
    }

    // --------------------------------------
    // state depthwrite

    /**
     * push depth write enabled state
     * @function pushDepthWrite
     * @param {Boolean} b enabled
     * @memberof Context
     * @instance
     */
    pushDepthWrite(b)
    {
        b = b || false;
        this._stackDepthWrite.push(b);
    }

    /**
     * current state of depth writing
     * @function stateCullFace
     * @returns {Boolean} enabled
     * @memberof Context
     * @instance
     */
    stateDepthWrite()
    {
        return this._stackDepthWrite[this._stackDepthWrite.length - 1];
    }

    /**
     * pop depth writing state
     * @function popCullFace
     * @memberof Context
     * @instance
     */
    popDepthWrite()
    {
        this._stackDepthWrite.pop();
    }


    // --------------------------------------
    // state depthfunc


    /**
     * @function pushDepthFunc
     * @memberof Context
     * @instance
     * @param {string} f depth compare func
     */
    pushDepthFunc(f)
    {
        this._stackDepthFunc.push(f);
    }

    /**
     * @function stateDepthFunc
     * @memberof Context
     * @instance
     * @returns {string}
     */
    stateDepthFunc()
    {
        if (this._stackDepthFunc.length > 0) return this._stackDepthFunc[this._stackDepthFunc.length - 1];
        return false;
    }

    /**
     * pop depth compare func
     * @function popDepthFunc
     * @memberof Context
     * @instance
     */
    popDepthFunc()
    {
        this._stackDepthFunc.pop();
    }



    // --------------------------------------
    // state CullFace

    /**
     * push face culling face enabled state
     * @function pushCullFace
     * @param {Boolean} b enabled
     * @memberof Context
     * @instance
     */
    pushCullFace(b)
    {
        this._stackCullFace.push(b);
    }

    /**
     * current state of face culling
     * @function stateCullFace
     * @returns {Boolean} enabled
     * @memberof Context
     * @instance
     */
    stateCullFace()
    {
        return this._stackCullFace[this._stackCullFace.length - 1];
    }

    /**
 * pop face culling enabled state
 * @function popCullFace
 * @memberof Context
 * @instance
 */
    popCullFace()
    {
        this._stackCullFace.pop();
    }


    // --------------------------------------
    // state CullFace Facing


    /**
     * push face culling face side
     * @function pushCullFaceFacing
     * @memberof Context
     * @param b
     * @instance
     */

    pushCullFaceFacing(b)
    {
        this._stackCullFaceFacing.push(b);
    }

    /**
     * current state of face culling side
     * @function stateCullFaceFacing
     * @returns {Boolean} enabled
     * @memberof Context
     * @instance
     */
    stateCullFaceFacing()
    {
        return this._stackCullFaceFacing[this._stackCullFaceFacing.length - 1];
    }

    /**
     * pop face culling face side
     * @function popCullFaceFacing
     * @memberof Context
     * @instance
     */
    popCullFaceFacing()
    {
        this._stackCullFaceFacing.pop();
    }
}


;// CONCATENATED MODULE: ./src/core/cgp/cgp_uniformbuffer.js
class UniformBuffer
{
    constructor(shader, shaderType)
    {
        this._shaderType = shaderType; // frag, vert...
        this._shader = shader;
        this._cgp = shader._cgp;

        this._gpuBuffer = null;
        this._values = null;

        this._sizeBytes = 0;
        this.update();
    }

    update()
    {
        this._sizeBytes = 0;

        for (let i = 0; i < this._shader.uniforms.length; i++)
        {
            const uni = this._shader.uniforms[i];

            if (this._shaderType == uni.shaderType)
                this._sizeBytes += uni.getSizeBytes();
        }

        this._gpuBuffer = this._cgp.device.createBuffer(
            {
                "size": this._sizeBytes,
                "usage": GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
            });


        this._values = new Float32Array(this._sizeBytes / 4);
        this.updateUniformValues();
    }

    updateUniformValues()
    {
        let count = 0;
        for (let i = 0; i < this._shader.uniforms.length; i++)
        {
            const uni = this._shader.uniforms[i];
            if (uni.shaderType == this._shaderType)
            {
                if (uni.getSizeBytes() / 4 > 1)
                {
                    for (let j = 0; j < uni.getValue().length; j++)
                    {
                        this._values[count] = uni.getValue()[j];
                        count++;
                    }
                }
                else
                {
                    this._values[count] = uni.getValue();
                    count++;
                }
            }
        }


        this._cgp.device.queue.writeBuffer(
            this._gpuBuffer,
            0,
            this._values.buffer,
            this._values.byteOffset,
            this._values.byteLength
        );
    }
}

;// CONCATENATED MODULE: ./src/core/cgp/cgp_pipeline.js



class Pipeline
{
    constructor(_cgp, _name)
    {
        if (!_cgp) throw new Error("Pipeline constructed without cgp " + _name);
        this._cgp = _cgp;
        this._isValid = true;

        this._pipeCfg = null;
        this._renderPipeline = null;

        this._fsUniformBuffer = null;
        this._vsUniformBuffer = null;

        this._old = {};


        this.DEPTH_COMPARE_FUNCS_STRINGS = [
            "never",
            "less",
            "equal",
            "lessequal",
            "greater",
            "notequal",
            "greaterequal",
            "always"];
    }

    get isValid() { return this._isValid; }

    setPipeline(shader, mesh)
    {
        if (!mesh || !shader)
        {
            console.log("pipeline unknown shader/mesh");
            return;
        }

        let needsRebuild =
            !this._renderPipeline ||
            !this._pipeCfg ||
            this._old.mesh != mesh ||
            this._old.shader != shader ||
            mesh.needsPipelineUpdate ||
            shader.needsPipelineUpdate;

        if (this._pipeCfg)
        {
            if (this._pipeCfg.depthStencil.depthWriteEnabled != this._cgp.stateDepthWrite())
            {
                needsRebuild = true;
                this._pipeCfg.depthStencil.depthWriteEnabled = this._cgp.stateDepthWrite();
            }

            if (this._cgp.stateDepthTest() === false)
            {
                if (this._pipeCfg.depthStencil.depthCompare != "never")
                {
                    this._pipeCfg.depthStencil.depthCompare = "never";
                    needsRebuild = true;
                }
            }
            else
            if (this._pipeCfg.depthStencil.depthCompare != this._cgp.stateDepthFunc())
            {
                needsRebuild = true;
                this._pipeCfg.depthStencil.depthCompare = this._cgp.stateDepthFunc();
            }


            if (this._cgp.stateCullFace() === false)
            {
                if (this._pipeCfg.primitive.cullMode != "none")
                {
                    needsRebuild = true;
                    this._pipeCfg.primitive.cullMode = "none";
                }
            }
            else
            {
                needsRebuild = true;
                this._pipeCfg.primitive.cullMode = this._cgp.stateCullFaceFacing();
            }
        }

        if (needsRebuild)
        {
            if (!this._pipeCfg || this._old.shader != shader) this._pipeCfg = this.getPiplelineObject(shader, mesh);

            this._old.shader = shader;
            this._old.mesh = mesh;


            // try
            // {
            this._renderPipeline = this._cgp.device.createRenderPipeline(this._pipeCfg);
            // }
            // catch (e)
            // {
            //     console.error(e.message);
            // }

            this._bindUniforms(shader);
        }

        if (this._renderPipeline && this._isValid)
        {
            mat4.copy(this._matModel, this._cgp.mMatrix);
            mat4.copy(this._matView, this._cgp.vMatrix);
            mat4.copy(this._matProj, this._cgp.pMatrix);

            this._cgp.device.queue.writeBuffer(
                this._vsUniformBuffer,
                0,
                this._vsUniformValues.buffer,
                this._vsUniformValues.byteOffset,
                this._vsUniformValues.byteLength
            );

            this._uniBufFrag.updateUniformValues();

            this._cgp.passEncoder.setPipeline(this._renderPipeline);
            this._cgp.passEncoder.setBindGroup(0, this._bindGroup);
            // this._pipeline = this._cgp.device.createRenderPipeline(this._pipeCfg);
        }
    }

    getPiplelineObject(shader, mesh)
    {
        const pipeCfg = {
            "layout": "auto",
            "vertex": {
                "module": shader.shaderModule,
                "entryPoint": "myVSMain",
                "buffers": [
                    // position
                    {
                        "arrayStride": 3 * 4, // 3 floats, 4 bytes each
                        "attributes": [
                            { "shaderLocation": 0, "offset": 0, "format": "float32x3" },
                        ],
                    },
                    // normals
                    {
                        "arrayStride": 3 * 4, // 3 floats, 4 bytes each
                        "attributes": [
                            { "shaderLocation": 1, "offset": 0, "format": "float32x3" },
                        ],
                    },
                    // texcoords
                    {
                        "arrayStride": 2 * 4, // 2 floats, 4 bytes each
                        "attributes": [
                            { "shaderLocation": 2, "offset": 0, "format": "float32x2", },
                        ],
                    },
                ],
            },
            "fragment": {
                "module": shader.shaderModule,
                "entryPoint": "myFSMain",
                "targets": [
                    { "format": this._cgp.presentationFormat },
                ],
            },
            "primitive": {
                "topology": "triangle-list",
                "cullMode": "back", // back/none/front

                // "point-list",
                // "line-list",
                // "line-strip",
                // "triangle-list",
                // "triangle-strip"
            },
            "depthStencil": {
                "depthWriteEnabled": true,
                "depthCompare": "less",
                "format": "depth24plus",
            },

        };

        return pipeCfg;
    }


    _bindUniforms(shader)
    {
        this._cgp.pushErrorScope();


        const counts = { };

        this._uniBufFrag = new UniformBuffer(shader, "frag");

        // for (let i = 0; i < shader.uniforms.length; i++)
        // {
        //     const uni = shader.uniforms[i];
        //     const type = uni.shaderType;
        //     counts[type] = counts[type] || 0;


        //     counts[type] += uni.getSizeBytes();
        // }
        // console.log(counts, counts.frag);


        const vUniformBufferSize = 3 * 16 * 4; // 2 mat4s * 16 floats per mat * 4 bytes per float
        // const fUniformBufferSize = counts.frag;// 2 * 3 * 4; // 1 vec3 * 3 floats per vec3 * 4 bytes per float

        this._vsUniformBuffer = this._cgp.device.createBuffer({
            "size": vUniformBufferSize,
            "usage": GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
        });

        // this._fsUniformBuffer = this._cgp.device.createBuffer({
        //     "size": fUniformBufferSize,
        //     "usage": GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
        // });

        // this._fsUniformValues = new Float32Array(counts.frag / 4);

        this._vsUniformValues = new Float32Array(vUniformBufferSize / 4);

        this._matModel = this._vsUniformValues.subarray(0, 16);
        this._matView = this._vsUniformValues.subarray(16, 32);
        this._matProj = this._vsUniformValues.subarray(32, 48);


        // this._fsUniformValues[1] = 1.0;
        // this._fsUniformValues[0] = 1.0;
        // const lightDirection = this._fsUniformValues.subarray(0, 3);

        // console.log("pipeline bindgrouplayout ", pipeline.getBindGroupLayout(0));

        this._bindGroup = this._cgp.device.createBindGroup(
            {
                "layout": this._renderPipeline.getBindGroupLayout(0),
                "entries": [
                    { "binding": 0, "resource": { "buffer": this._vsUniformBuffer } },
                    { "binding": 1, "resource": { "buffer": this._uniBufFrag._gpuBuffer } }
                    //   { binding: 2, resource: sampler },
                    //   { binding: 3, resource: tex.createView() },
                ],
            });

        this._cgp.device.queue.writeBuffer(
            this._vsUniformBuffer,
            0,
            this._vsUniformValues.buffer,
            this._vsUniformValues.byteOffset,
            this._vsUniformValues.byteLength
        );

        this._uniBufFrag.updateUniformValues();
        this._cgp.popErrorScope("cgp_pipeline end", (e) =>
        {
            this._isValid = false;
        });
    }
}

;// CONCATENATED MODULE: ./src/core/cgp/cgp_mesh.js



class cgp_mesh_Mesh
{
    constructor(_cgp, __geom)
    {
        this._log = new Logger("cgl_mesh");
        this._cgp = _cgp;
        this._geom = null;
        this.numIndex = 0;

        this._pipe = new Pipeline(this._cgp);

        this._numNonIndexed = 0;
        this._positionBuffer = null;
        this._bufVerticesIndizes = null;
        this._attributes = [];

        this._needsPipelineUpdate = false;

        if (__geom) this.setGeom(__geom);
    }

    _createBuffer(device, data, usage)
    {
        const buffer = device.createBuffer({
            "size": data.byteLength,
            "usage": usage,
            "mappedAtCreation": true,
        });
        const dst = new data.constructor(buffer.getMappedRange());
        dst.set(data);
        buffer.unmap();
        return buffer;
    }

    /**
     * @function setGeom
     * @memberof Mesh
     * @instance
     * @description set geometry for mesh
     * @param {Geometry} geom geometry
     * @param {boolean} removeRef
     */
    setGeom(geom, removeRef)
    {
        this._needsPipelineUpdate = true;
        this._geom = geom;
        this._disposeAttributes();

        this._positionBuffer = this._createBuffer(this._cgp.device, new Float32Array(geom.vertices), GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST);

        let vi = geom.verticesIndices;
        if (!geom.isIndexed()) vi = Array.from(Array(geom.vertices.length / 3).keys());
        this._numIndices = vi.length;
        this._indicesBuffer = this._createBuffer(this._cgp.device, new Uint32Array(vi), GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST);

        if (geom.texCoords && geom.texCoords.length) this.setAttribute("texCoords", geom.texCoords, 2);
        if (geom.vertexNormals && geom.vertexNormals.length) this.setAttribute("normals", geom.vertexNormals, 3);
    }


    _disposeAttributes()
    {
        this._needsPipelineUpdate = true;
        for (let i = 0; i < this._attributes.length; i++)
        {
            this._attributes[i].buffer.destroy();
        }
        this._attributes.length = 0;
    }

    dispose()
    {
        this._disposeAttributes();
    }

    /**
     * @function setAttribute
     * @description update attribute
     * @memberof Mesh
     * @instance
     * @param {String} name attribute name
     * @param {Array} array data
     * @param {Number} itemSize
     * @param {Object} options
     */
    setAttribute(name, array, itemSize, options)
    {
        if (!array)
        {
            this._log.error("mesh addAttribute - no array given! " + name);
            throw new Error();
        }

        for (let i = 0; i < this._attributes.length; i++)
        {
            const attr = this._attributes[i];
            if (attr.name == name)
            {
                // if (attr.numItems === numItems)
                // {
                // }
                // else
                // {
                //     // this._log.log("wrong buffer size", this._geom.name, attr.name, attr.numItems, numItems);
                //     this._resizeAttr(array, attr);
                // }
                // normalBuffer = this._createBuffer(this._cgp.device, new Float32Array(geom.vertexNormals), GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST);

                // this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, attr.buffer);
                // this._bufferArray(array, attr);

                return attr;
            }
        }

        const buffer = this._createBuffer(this._cgp.device, new Float32Array(array), GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST);

        const attr = {
            "buffer": buffer,
            "name": name,
            // "cb": cb,
            // "itemSize": itemSize,
            // "numItems": numItems,
            // "startItem": 0,
            // "instanced": instanced,
            // "type": type
        };
        this._attributes.push(attr);

        return attr;
    }

    // setPipeline()
    // {

    //     this._cgp.passEncoder.setPipeline(this._pipe.getPiplelineObject(this._cgp.getShader(),this));


    // }

    render()
    {
        if (!this._positionBuffer) return;

        // this.setPipeline();

        const shader = this._cgp.getShader();
        if (shader)shader.bind();

        if (!this._cgp.getShader() || !this._cgp.getShader().isValid)
        {
            return;
        }

        this._pipe.setPipeline(this._cgp.getShader(), this);

        if (!this._pipe.isValid)
        {
            return;
        }


        this._cgp.passEncoder.setVertexBuffer(0, this._positionBuffer);
        for (let i = 0; i < this._attributes.length; i++)
        {
            this._cgp.passEncoder.setVertexBuffer(i + 1, this._attributes[i].buffer);
        }

        this._cgp.passEncoder.setIndexBuffer(this._indicesBuffer, "uint32");

        if (this._numNonIndexed)
            this._cgp.passEncoder.draw(this._numIndices);
        else
            this._cgp.passEncoder.drawIndexed(this._numIndices);

        // if (shader)shader.unbind();
    }
}

;// CONCATENATED MODULE: ./src/core/cgp/cgp_texture.js


class cgp_texture_Texture
{
    constructor(_cgp, options)
    {
        if (!_cgp) throw new Error("no cgp");
        this._log = new Logger("cgp_texture");
        this._cgp = _cgp;
        this.id = CABLES.uuid();

        options = options || {};

        this.name = options.name || "unknown";
    }

    /**
     * set texture data from an image/canvas object
     * @function initTexture
     * @memberof Texture
     * @instance
     * @param {Object} img image
     * @param {Number} filter
     */
    initTexture(img, filter)
    {
        this.width = img.width;
        this.height = img.height;

        this.textureType = "rgba8unorm";

        const textureDescriptor = {
            // Unlike in WebGL, the size of our texture must be set at texture creation time.
            // This means we have to wait until the image is loaded to create the texture, since we won't
            // know the size until then.
            "size": { "width": img.width, "height": img.height },
            "format": this.textureType,
            "usage": GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        };
        const texture = this._cgp.device.createTexture(textureDescriptor);

        this._cgp.device.queue.copyExternalImageToTexture({ "source": img }, { "texture": texture }, textureDescriptor.size);

        return texture;
    }

    getInfo()
    {
        const tex = this;
        const obj = {};

        obj.name = tex.name;
        obj.size = tex.width + " x " + tex.height;

        obj.textureType = tex.textureType;

        return obj;
    }
}


/**
 * @function load
 * @static
 * @memberof Texture
 * @description load an image from an url
 * @param {Context} cgp
 * @param {String} url
 * @param {Function} onFinished
 * @param {Object} settings
 * @return {Texture}
 */
cgp_texture_Texture.load = function (cgp, url, onFinished, settings)
{
    fetch(url).then((response) =>
    {
        response.blob().then((blob) =>
        {
            createImageBitmap(blob).then((imgBitmap) =>
            {
                const texture = new cgp_texture_Texture(cgp, { "name": url });
                texture.initTexture(imgBitmap);
                if (onFinished)onFinished(texture);
                else console.log("Texture.load no onFinished callback");
            });
        });
    });
};

;// CONCATENATED MODULE: ./src/core/cgp/index.js






const cgp_CGP = {
    "Context": WebGpuContext,
    "Shader": cgp_shader_Shader,
    "Mesh": cgp_mesh_Mesh,
    "Pipeline": Pipeline,
    "Texture": cgp_texture_Texture,
};

window.CGP = cgp_CGP;




;// CONCATENATED MODULE: ./src/core/cgl/cgl_framebuffer.js



// todo: convert to prototyped...

/**
 * a framebuffer
 * @constructor
 * @class
 * @constructs Framebuffer
 * @param {Context} _cgl cgl
 * @param {Number} _w width
 * @param {Number} _h height
 * @param {Object} options
 */
const Framebuffer = function (_cgl, _w, _h, options)
{
    const cgl = _cgl;
    this._log = new Logger("Framebuffer");
    this.valid = true;

    let depthTextureExt = cgl.gl.DEPTH_TEXTURE;
    if (!depthTextureExt) depthTextureExt = cgl.enableExtension("WEBGL_depth_texture");
    if (!depthTextureExt) depthTextureExt = cgl.enableExtension("WEBKIT_WEBGL_depth_texture");
    if (!depthTextureExt) depthTextureExt = cgl.enableExtension("MOZ_WEBGL_depth_texture");

    if (!depthTextureExt)
    {
        cgl.exitError("NO_DEPTH_TEXTURE", "no depth texture support");
        // return;
    }

    let width = _w || 512;
    let height = _h || 512;

    options = options || {
        "isFloatingPointTexture": false,
    };

    if (!options.hasOwnProperty("clear")) options.clear = true;
    if (!options.hasOwnProperty("filter")) options.filter = Texture.FILTER_LINEAR;

    const texture = new Texture(cgl, {
        "isFloatingPointTexture": options.isFloatingPointTexture,
        "filter": options.filter,
        "wrap": options.wrap || Texture.CLAMP_TO_EDGE
    });

    let textureDepth = null;
    if (depthTextureExt)
    {
        textureDepth = new Texture(cgl, {
            "isDepthTexture": true,
        });
    }
    this._options = options;

    const frameBuf = cgl.gl.createFramebuffer();
    const depthBuffer = cgl.gl.createRenderbuffer();

    this.getWidth = function ()
    {
        return width;
    };
    this.getHeight = function ()
    {
        return height;
    };

    /**
     * get native gl framebuffer
     * @function getGlFrameBuffer
     * @memberof Framebuffer
     * @returns {Object} framebuffer
     */
    this.getGlFrameBuffer = function ()
    {
        return frameBuf;
    };

    /**
     * get depth renderbuffer
     * @function getDepthRenderBuffer
     * @memberof Framebuffer
     * @returns {Object} renderbuffer
     */
    this.getDepthRenderBuffer = function ()
    {
        return depthBuffer;
    };

    /**
     * get color texture
     * @function getTextureColor
     * @memberof Framebuffer
     * @returns {Texture} rgba texture
     */
    this.getTextureColor = function ()
    {
        return texture;
    };

    /**
     * get depth texture
     * @function getTextureDepth
     * @memberof Framebuffer
     * @returns {Texture} depth texture
     */
    this.getTextureDepth = function ()
    {
        return textureDepth;
    };

    this.setFilter = function (f)
    {
        texture.filter = f;
        texture.setSize(width, height);
    };

    this.setSize = function (w, h)
    {
        if (w < 2) w = 2;
        if (h < 2) h = 2;

        width = Math.ceil(w);
        height = Math.ceil(h);

        cgl.profileData.profileFrameBuffercreate++;

        cgl.gl.bindFramebuffer(cgl.gl.FRAMEBUFFER, frameBuf);
        cgl.gl.bindRenderbuffer(cgl.gl.RENDERBUFFER, depthBuffer);

        texture.setSize(width, height);
        if (textureDepth) textureDepth.setSize(width, height);

        // if(depthTextureExt) cgl.gl.renderbufferStorage(cgl.gl.RENDERBUFFER, cgl.gl.DEPTH_COMPONENT16, width,height);
        if (depthTextureExt) cgl.gl.renderbufferStorage(cgl.gl.RENDERBUFFER, cgl.gl.DEPTH_COMPONENT16, width, height);

        cgl.gl.framebufferTexture2D(cgl.gl.FRAMEBUFFER, cgl.gl.COLOR_ATTACHMENT0, cgl.gl.TEXTURE_2D, texture.tex, 0);

        if (depthTextureExt)
        {
            cgl.gl.framebufferRenderbuffer(cgl.gl.FRAMEBUFFER, cgl.gl.DEPTH_ATTACHMENT, cgl.gl.RENDERBUFFER, depthBuffer);
            cgl.gl.framebufferTexture2D(
                cgl.gl.FRAMEBUFFER,
                cgl.gl.DEPTH_ATTACHMENT, // safari needs DEPTH_ATTACHMENT NOT DEPTH_ATTACHMENT16
                // cgl.gl.DEPTH_COMPONENT16,
                cgl.gl.TEXTURE_2D,
                textureDepth.tex,
                0,
            );
        }

        if (!cgl.gl.isFramebuffer(frameBuf)) throw new Error("Invalid framebuffer");
        const status = cgl.gl.checkFramebufferStatus(cgl.gl.FRAMEBUFFER);

        switch (status)
        {
        case cgl.gl.FRAMEBUFFER_COMPLETE:
            break;
        case cgl.gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
            this._log.warn("FRAMEBUFFER_INCOMPLETE_ATTACHMENT...", width, height, texture.tex, depthBuffer);
            this.valid = false;
            throw new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_ATTACHMENT");
        case cgl.gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
            this._log.warn("FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT");
            this.valid = false;
            throw new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT");
        case cgl.gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
            this._log.warn("FRAMEBUFFER_INCOMPLETE_DIMENSIONS");
            this.valid = false;
            throw new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_DIMENSIONS");
        case cgl.gl.FRAMEBUFFER_UNSUPPORTED:
            this._log.warn("FRAMEBUFFER_UNSUPPORTED");
            this.valid = false;
            this._log.warn(width, height, options);

            throw new Error("Incomplete framebuffer: FRAMEBUFFER_UNSUPPORTED");
        case 0x8CDB:
            this._log.warn("Incomplete: FRAMEBUFFER_INCOMPLETE_DRAW_BUFFER from ext. Or Safari/iOS undefined behaviour.");
            this.valid = false;
            break;
        default:
            this._log.warn("incomplete framebuffer", status);
            this.valid = false;
            throw new Error("Incomplete framebuffer: " + status);
        }

        cgl.gl.bindTexture(cgl.gl.TEXTURE_2D, null);
        cgl.gl.bindRenderbuffer(cgl.gl.RENDERBUFFER, null);
        cgl.gl.bindFramebuffer(cgl.gl.FRAMEBUFFER, null);
    };

    this.renderStart = function ()
    {
        cgl.pushModelMatrix();
        cgl.gl.bindFramebuffer(cgl.gl.FRAMEBUFFER, frameBuf);
        cgl.pushGlFrameBuffer(frameBuf);
        cgl.pushFrameBuffer(this);

        cgl.pushPMatrix();
        cgl.gl.viewport(0, 0, width, height);

        if (this._options.clear)
        {
            cgl.gl.clearColor(0, 0, 0, 0);
            cgl.gl.clear(cgl.gl.COLOR_BUFFER_BIT | cgl.gl.DEPTH_BUFFER_BIT);
        }
    };

    this.renderEnd = function ()
    {
        cgl.popPMatrix();
        cgl.gl.bindFramebuffer(cgl.gl.FRAMEBUFFER, cgl.popGlFrameBuffer());
        cgl.popFrameBuffer();

        cgl.popModelMatrix();
        cgl.resetViewPort();
    };


    this.delete = function ()
    {
        texture.delete();
        this.valid = false;
        if (textureDepth) textureDepth.delete();
        cgl.gl.deleteRenderbuffer(depthBuffer);
        cgl.gl.deleteFramebuffer(frameBuf);
    };

    this.dispose = this.delete;

    this.setSize(width, height);
};



;// CONCATENATED MODULE: ./src/core/cgl/cgl_framebuffer2.js
// * see framebuffer1






const Framebuffer2 = function (cgl, w, h, options)
{
    this._log = new Logger("cgl_framebuffer2");
    if (cgl.glVersion == 1) return this._log.error("framebuffer2 used on webgl1");
    this.Framebuffer2DrawTargetsDefault = null;
    this.Framebuffer2BlittingFramebuffer = null;
    this.Framebuffer2FinalFramebuffer = null;
    this._cgl = cgl;

    this._cgl.printError("before framebuffer2 constructor");

    this._width = 0;
    this._height = 0;
    this.valid = true;

    this._depthRenderbuffer = null;
    this._frameBuffer = null;
    this._textureFrameBuffer = null;
    this._colorRenderbuffers = [];
    this._drawTargetArray = [];
    this._disposed = false;

    if (!this.Framebuffer2BlittingFramebuffer) this.Framebuffer2BlittingFramebuffer = cgl.gl.createFramebuffer();
    if (!this.Framebuffer2FinalFramebuffer) this.Framebuffer2FinalFramebuffer = cgl.gl.createFramebuffer();

    if (!this.Framebuffer2DrawTargetsDefault) this.Framebuffer2DrawTargetsDefault = [cgl.gl.COLOR_ATTACHMENT0];

    this._options = options || {
        "isFloatingPointTexture": false,
    };

    // this._cgl.printError("fb2 before");

    this.name = this._options.name || "unknown";

    this._cgl.profileData.addHeavyEvent("framebuffer create", this.name);

    if (!this._options.hasOwnProperty("numRenderBuffers")) this._options.numRenderBuffers = 1;
    if (!this._options.hasOwnProperty("depth")) this._options.depth = true;
    if (!this._options.hasOwnProperty("clear")) this._options.clear = true;
    if (!this._options.hasOwnProperty("multisampling"))
    {
        this._options.multisampling = false;
        this._options.multisamplingSamples = 0;
    }

    if (this._options.multisamplingSamples)
    {
        if (this._cgl.glSlowRenderer) this._options.multisamplingSamples = 0;
        if (!this._cgl.gl.MAX_SAMPLES) this._options.multisamplingSamples = 0;
        else this._options.multisamplingSamples = Math.min(this._cgl.maxSamples, this._options.multisamplingSamples);
    }

    if (!this._options.hasOwnProperty("filter")) this._options.filter = Texture.FILTER_LINEAR;
    if (!this._options.hasOwnProperty("wrap")) this._options.wrap = Texture.WRAP_REPEAT;

    this._numRenderBuffers = this._options.numRenderBuffers;
    this._colorTextures = [];

    this.clearColors = [];
    for (let i = 0; i < this._numRenderBuffers; i++) this.clearColors.push([0, 0, 0, 1]);


    if (!options.pixelFormat)
    {
        if (options.isFloatingPointTexture) this._options.pixelFormat = Texture.PFORMATSTR_RGBA32F;
        else this._options.pixelFormat = Texture.PFORMATSTR_RGBA8UB;
    }


    for (let i = 0; i < this._numRenderBuffers; i++)
    {
        this._colorTextures[i] = new Texture(cgl, {
            "name": "fb2 " + this.name + " " + i,
            "isFloatingPointTexture": this._options.isFloatingPointTexture,
            "anisotropic": this._options.anisotropic || 0,
            "pixelFormat": this._options.pixelFormat,
            "filter": this._options.filter,
            "wrap": this._options.wrap,
        });
    }



    let fil = Texture.FILTER_NEAREST;
    if (this._options.shadowMap) fil = Texture.FILTER_LINEAR;

    const defaultTexSize = 512;

    if (this._options.depth)
    {
        this._textureDepth = new Texture(cgl,
            {
                "name": "fb2 depth " + this.name,
                "isDepthTexture": true,
                "filter": fil,
                "shadowMap": this._options.shadowMap || false,
                "width": w || defaultTexSize,
                "height": h || defaultTexSize,
            });
    }

    if (cgl.aborted) return;

    this.setSize(w || defaultTexSize, h || defaultTexSize);

    this._cgl.printError("framebuffer2 constructor");
};

Framebuffer2.prototype.getWidth = function ()
{
    return this._width;
};
Framebuffer2.prototype.getHeight = function ()
{
    return this._height;
};

Framebuffer2.prototype.getGlFrameBuffer = function ()
{
    return this._frameBuffer;
};

Framebuffer2.prototype.getDepthRenderBuffer = function ()
{
    return this._depthRenderbuffer;
};

Framebuffer2.prototype.getTextureColor = function ()
{
    return this._colorTextures[0];
};

Framebuffer2.prototype.getTextureColorNum = function (i)
{
    return this._colorTextures[i];
};

Framebuffer2.prototype.getTextureDepth = function ()
{
    return this._textureDepth;
};

Framebuffer2.prototype.setFilter = function (f)
{
    for (let i = 0; i < this._numRenderBuffers; i++)
    {
        this._colorTextures[i].filter = f;
        this._colorTextures[i].setSize(this._width, this._height);
    }
};

Framebuffer2.prototype.delete = Framebuffer2.prototype.dispose = function ()
{
    this._disposed = true;
    let i = 0;
    for (i = 0; i < this._numRenderBuffers; i++) this._colorTextures[i].delete();
    // this._texture.delete();
    if (this._textureDepth) this._textureDepth.delete();
    for (i = 0; i < this._numRenderBuffers; i++) this._cgl.gl.deleteRenderbuffer(this._colorRenderbuffers[i]);
    this._cgl.gl.deleteRenderbuffer(this._depthRenderbuffer);
    this._cgl.gl.deleteFramebuffer(this._frameBuffer);
    this._cgl.gl.deleteFramebuffer(this._textureFrameBuffer);
};

Framebuffer2.prototype.setSize = function (w, h)
{
    if (this._disposed) return this._log.warn("disposed framebuffer setsize...");
    this._cgl.profileData.addHeavyEvent("framebuffer resize", this.name);

    let i = 0;

    this._width = this._cgl.checkTextureSize(w);
    this._height = this._cgl.checkTextureSize(h);

    this._cgl.profileData.profileFrameBuffercreate++;

    if (this._frameBuffer)
    {
        for (i = 0; i < this._numRenderBuffers; i++) this._cgl.gl.deleteRenderbuffer(this._colorRenderbuffers[i]);
        // this._cgl.gl.deleteRenderbuffer(this._colorRenderbuffer);
        this._cgl.gl.deleteRenderbuffer(this._depthRenderbuffer);
        this._cgl.gl.deleteFramebuffer(this._frameBuffer);
        this._cgl.gl.deleteFramebuffer(this._textureFrameBuffer);
    }

    this._frameBuffer = this._cgl.gl.createFramebuffer();
    this._textureFrameBuffer = this._cgl.gl.createFramebuffer();

    const depth = this._options.depth;

    for (i = 0; i < this._numRenderBuffers; i++)
    {
        this._colorTextures[i].setSize(this._width, this._height);
    }

    for (i = 0; i < this._numRenderBuffers; i++)
    {
        const renderBuffer = this._cgl.gl.createRenderbuffer();

        // color renderbuffer

        this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuffer);
        this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, renderBuffer);

        const info = Texture.setUpGlPixelFormat(this._cgl, this._options.pixelFormat);
        let internFormat = info.glInternalFormat;

        // if (this._options.isFloatingPointTexture)
        // {
        if (CGL.Texture.isPixelFormatHalfFloat(info.pixelFormat))
        {
            if (!this._cgl.enableExtension("OES_texture_float_linear"))
            {
                this._options.filter = Texture.FILTER_NEAREST;
                this.setFilter(this._options.filter);
            }
        }
        else if (CGL.Texture.isPixelFormatFloat(info.pixelFormat))
        {
            if (!this._cgl.enableExtension("OES_texture_float_linear"))
            {
                this._log.warn("no linear pixelformat,using nearest");
                this._options.filter = Texture.FILTER_NEAREST;
                this.setFilter(this._options.filter);
            }
        }
        // else if (info.pixelFormat == Texture.PFORMATSTR_RGBA32F || info.pixelFormat == Texture.PFORMATSTR_R11FG11FB10F
        // else if (info.pixelFormat == Texture.PFORMATSTR_RGBA32F || info.pixelFormat == Texture.PFORMATSTR_R11FG11FB10F
        // else if (info.pixelFormat == Texture.PFORMATSTR_RG16F)
        // {
        //     const extcb = this._cgl.enableExtension("EXT_color_buffer_float");

        //     if (!this._cgl.enableExtension("OES_texture_float_linear"))
        //     {
        //         console.log("no linear pixelformat,switching to nearest");
        //         this._options.filter = Texture.FILTER_NEAREST;
        //         this.setFilter(this._options.filter);
        //     }
        // }
        // }

        if (this._options.multisampling && this._options.multisamplingSamples)
        {
            this._cgl.gl.renderbufferStorageMultisample(this._cgl.gl.RENDERBUFFER, this._options.multisamplingSamples, internFormat, this._width, this._height);
        }
        else
        {
            this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, internFormat, this._width, this._height);
        }



        this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0 + i, this._cgl.gl.RENDERBUFFER, renderBuffer);
        this._colorRenderbuffers[i] = renderBuffer;
    }

    // this._cgl.gl.bindFramebuffer(this._cgl.gl.DRAW_FRAMEBUFFER, this._textureFrameBuffer);
    this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._textureFrameBuffer);

    for (i = 0; i < this._numRenderBuffers; i++)
    {
        this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0 + i, this._cgl.gl.TEXTURE_2D, this._colorTextures[i].tex, 0);
    }

    if (this._options.depth)
    {
        this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.TEXTURE_2D, this._textureDepth.tex, 0);
    }

    // depth renderbuffer

    this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuffer);


    let depthType = this._cgl.gl.DEPTH_COMPONENT32F;

    if (this._cgl.glSlowRenderer) depthType = this._cgl.gl.DEPTH_COMPONENT16;
    if (depth)
    {
        this._textureDepth.setSize(this._width, this._height);
        this._depthRenderbuffer = this._cgl.gl.createRenderbuffer();

        this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, this._depthRenderbuffer);
        if (this._options.isFloatingPointTexture)
        {
            if (this._options.multisampling) this._cgl.gl.renderbufferStorageMultisample(this._cgl.gl.RENDERBUFFER, this._options.multisamplingSamples, depthType, this._width, this._height);
            else this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, depthType, this._width, this._height);
        }
        else if (this._options.multisampling)
        {
            this._cgl.gl.renderbufferStorageMultisample(this._cgl.gl.RENDERBUFFER, this._options.multisamplingSamples, depthType, this._width, this._height);
            // this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER,depthType, this._width, this._height);
        }
        else
        {
            this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, depthType, this._width, this._height);
        }

        this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.RENDERBUFFER, this._depthRenderbuffer);
    }

    // this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null);
    // this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._textureFrameBuffer);

    this._drawTargetArray.length = 0;
    for (i = 0; i < this._numRenderBuffers; i++) this._drawTargetArray.push(this._cgl.gl.COLOR_ATTACHMENT0 + i);

    // this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null);


    if (!this._cgl.gl.isFramebuffer(this._textureFrameBuffer)) this._log.warn("invalid framebuffer");// throw new Error("Invalid framebuffer");
    const status = this._cgl.gl.checkFramebufferStatus(this._cgl.gl.FRAMEBUFFER);

    if (status != this._cgl.gl.FRAMEBUFFER_COMPLETE)
    {
        this._log.error("framebuffer incomplete: " + this.name, this);
        this._log.log("options", this._options);
        this._log.log("options pixelformat", this._options.pixelFormat);

        switch (status)
        {
        case this._cgl.gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
            this._log.warn("FRAMEBUFFER_INCOMPLETE_ATTACHMENT...", this);
            throw new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_ATTACHMENT");
        case this._cgl.gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
            this._log.warn("FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT");
            throw new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT");
        case this._cgl.gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
            this._log.warn("FRAMEBUFFER_INCOMPLETE_DIMENSIONS");
            throw new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_DIMENSIONS");
        case this._cgl.gl.FRAMEBUFFER_UNSUPPORTED:
            this._log.warn("FRAMEBUFFER_UNSUPPORTED");
            throw new Error("Incomplete framebuffer: FRAMEBUFFER_UNSUPPORTED");
        default:
            this.valid = false;
            this._log.warn("incomplete framebuffer", status, this._frameBuffer);
            this._cgl.printError();
            this._cgl.exitError("Framebuffer incomplete...");

            this._frameBuffer = null;
            // debugger;
            throw new Error("Incomplete framebuffer: " + status);

        // throw("Incomplete framebuffer: " + status);
        }
    }

    this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null);
    this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, null);

    // this._cgl.printError("fb setsize");
};

Framebuffer2.prototype.renderStart = function ()
{
    if (this._disposed) return this._log.warn("disposed framebuffer renderStart...");
    this._cgl.checkFrameStarted("fb2 renderstart");
    this._cgl.pushModelMatrix(); // needed ??

    this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuffer);
    this._cgl.pushGlFrameBuffer(this._frameBuffer);
    this._cgl.pushFrameBuffer(this);

    this._cgl.pushPMatrix();
    this._cgl.pushViewPort(0, 0, this._width, this._height);

    this._cgl.gl.drawBuffers(this._drawTargetArray);

    if (this._options.clear)
    {
        this._cgl.gl.clearColor(0, 0, 0, 0);
        this._cgl.gl.clear(this._cgl.gl.COLOR_BUFFER_BIT | this._cgl.gl.DEPTH_BUFFER_BIT);
    }
};

Framebuffer2.prototype.clear = function ()
{
    if (this._numRenderBuffers <= 1)
    {
        this._cgl.gl.bindFramebuffer(this._cgl.gl.READ_FRAMEBUFFER, this._frameBuffer);
        this._cgl.gl.bindFramebuffer(this._cgl.gl.DRAW_FRAMEBUFFER, this._textureFrameBuffer);
    }
    else this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuffer);

    this._cgl.gl.drawBuffers(this._drawTargetArray);

    for (let i = 0; i < this._numRenderBuffers; i++)
    {
        this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0 + i, this._cgl.gl.TEXTURE_2D, this._colorTextures[i].tex, 0);
        this._cgl.gl.clearBufferfv(this._cgl.gl.COLOR, i, this.clearColors[i]);
    }
    this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null);
};

Framebuffer2.prototype.renderEnd = function ()
{
    if (this._disposed) return this._log.warn("disposed framebuffer renderEnd...");
    this._cgl.popPMatrix();

    this._cgl.profileData.profileFramebuffer++;


    if (this._numRenderBuffers <= 1)
    {
        this._cgl.gl.bindFramebuffer(this._cgl.gl.READ_FRAMEBUFFER, this._frameBuffer);
        this._cgl.gl.bindFramebuffer(this._cgl.gl.DRAW_FRAMEBUFFER, this._textureFrameBuffer);

        this._cgl.gl.clearBufferfv(this._cgl.gl.COLOR, 0, [0.0, 0.0, 0.0, 1.0]);
        this._cgl.gl.blitFramebuffer(0, 0, this._width, this._height, 0, 0, this._width, this._height, this._cgl.gl.COLOR_BUFFER_BIT | this._cgl.gl.DEPTH_BUFFER_BIT, this._cgl.gl.NEAREST);
    }
    else
    {
        this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this.Framebuffer2BlittingFramebuffer);
        this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.RENDERBUFFER, this._depthRenderbuffer);

        this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this.Framebuffer2FinalFramebuffer);
        this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.TEXTURE_2D, this._textureDepth.tex, 0);

        for (let i = 0; i < this._numRenderBuffers; i++)
        {
            this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this.Framebuffer2BlittingFramebuffer);
            this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.RENDERBUFFER, this._colorRenderbuffers[i]);


            this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this.Framebuffer2FinalFramebuffer);
            this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.TEXTURE_2D, this._colorTextures[i].tex, 0);

            this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null);

            this._cgl.gl.bindFramebuffer(this._cgl.gl.READ_FRAMEBUFFER, this.Framebuffer2BlittingFramebuffer);
            this._cgl.gl.bindFramebuffer(this._cgl.gl.DRAW_FRAMEBUFFER, this.Framebuffer2FinalFramebuffer);

            // this._cgl.gl.clearBufferfv(this._cgl.gl.COLOR, i, [0.0, 0.0, 0.0, 1.0]);



            let flags = this._cgl.gl.COLOR_BUFFER_BIT;
            if (i == 0) flags |= this._cgl.gl.DEPTH_BUFFER_BIT;

            this._cgl.gl.blitFramebuffer(0, 0, this._width, this._height, 0, 0, this._width, this._height, flags, this._cgl.gl.NEAREST);
        }
    }

    this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.popGlFrameBuffer());
    this._cgl.popFrameBuffer();

    this._cgl.popModelMatrix();
    // this._cgl.resetViewPort();
    this._cgl.popViewPort();


    if (this._colorTextures[0].filter == Texture.FILTER_MIPMAP)
    {
        for (let i = 0; i < this._numRenderBuffers; i++)
        {
            this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, this._colorTextures[i].tex);
            this._colorTextures[i].updateMipMap();
            this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, null);
        }
    }
};



/// ///////

;// CONCATENATED MODULE: ./src/core/cgl/cgl_marker.js
const Marker = function (_cgl) // deprecated...
{
    this.draw = function (cgl, _size, depthTest) {};
};

const WirePoint = function (cgl) // deprecated...
{
    this.render = function (_cgl, _size) {};
};

const WireCube = function (cgl) // deprecated...
{
    this.render = function (_cgl, sizeX, sizeY, sizeZ) {};
};

;// CONCATENATED MODULE: ./src/core/cgl/cgl_unicolorshader.js


class UniColorShader
{
    constructor(_cgl)
    {
        this.shader = new CGL.Shader(_cgl, "markermaterial");

        const frag = ""
            .endl() + "void main()"
            .endl() + "{"
            .endl() + "    outColor = vec4(color.rgb,1.0);"
            .endl() + "}";


        const vert = ""
            .endl() + "IN vec3 vPosition;"
            .endl() + "UNI mat4 projMatrix;"
            .endl() + "UNI mat4 mvMatrix;"

            .endl() + "void main()"
            .endl() + "{"
            .endl() + "   gl_Position = projMatrix * mvMatrix * vec4(vPosition,1.0);"
            .endl() + "}";

        this.shader.setSource(vert, frag);
        this.coloruni = this.shader.addUniformFrag("4f", "color", [1, 0.777, 1, 1]);
    }

    setColor(r, g, b, a)
    {
        this.coloruni.set(r, g, b, a);
    }
}

;// CONCATENATED MODULE: ./src/core/cgl/index.js






















const cgl_CGL = {
    "Framebuffer": Framebuffer,
    "Framebuffer2": Framebuffer2,
    "Geometry": Geometry,
    "BoundingBox": BoundingBox,
    "Marker": Marker,
    "WirePoint": WirePoint,
    "WireCube": WireCube,
    "MatrixStack": MatrixStack,
    "Mesh": Mesh,
    "MESH": MESH,
    "ShaderLibMods": ShaderLibMods,
    "Shader": Shader,
    "Uniform": Uniform,
    "MESHES": MESHES,
    "Context": Context,
    "Texture": Texture,
    "TextureEffect": TextureEffect,
    "isWindows": isWindows,
    "getWheelSpeed": getWheelSpeed,
    "getWheelDelta": getWheelDelta,
    "onLoadingAssetsFinished": onLoadingAssetsFinished,
    "ProfileData": ProfileData,
    "UniColorShader": UniColorShader,
    ...constants_CONSTANTS.BLEND_MODES,
    ...constants_CONSTANTS.SHADER,
    ...constants_CONSTANTS.MATH,
    ...constants_CONSTANTS.BLEND_MODES,
};

window.CGL = cgl_CGL;





;// CONCATENATED MODULE: ./src/core/index.js




















window.CABLES = window.CABLES || {};

CABLES.CGL = cgl_CGL;
CABLES.CG = CG;
CABLES.CGP = cgp_CGP;
CABLES.EMBED = EMBED;
CABLES.Link = Link;
CABLES.Port = Port;
CABLES.Op = Op;
CABLES.Profiler = Profiler;
CABLES.Patch = core_patch;
CABLES.Instancing = Instancing;
CABLES.Timer = Timer;
CABLES.WEBAUDIO = WEBAUDIO;
CABLES.Variable = Variable;
CABLES.LoadingStatus = LoadingStatus;
CABLES.now = now;
CABLES.internalNow = internalNow;
CABLES.BranchStack = BranchStack;
CABLES.Branch = Branch;


CABLES = Object.assign(CABLES,
    base64_namespaceObject,
    utils_namespaceObject,
    anim_namespaceObject,
    CONSTANTS.PORT,
    CONSTANTS.PACO,
    CONSTANTS.ANIM,
    CONSTANTS.OP
);

/* harmony default export */ const core = (CABLES);

if (!(function () { return !this; }())) console.warn("not in strict mode: index core"); // eslint-disable-line

CABLES = __webpack_exports__["default"];
/******/ })()
;


var CABLES = CABLES || {}; CABLES.build = {"timestamp":1722937938908,"created":"2024-08-06T09:52:18.908Z","git":{"branch":"master","commit":"48eb1154f5c0cf63e5b955a25737840b6c78929f","date":"1722863548","message":"Merge branch 'develop' of github.com:cables-gl/cables into develop"}};
(()=>{"use strict";var t={d:(n,a)=>{for(var r in a)t.o(a,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:a[r]})},o:(t,n)=>Object.prototype.hasOwnProperty.call(t,n),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},n={};t.r(n),t.d(n,{ARRAY_TYPE:()=>f,EPSILON:()=>M,RANDOM:()=>l,equals:()=>d,setMatrixArrayType:()=>v,toRadian:()=>m});var a={};t.r(a),t.d(a,{LDU:()=>j,add:()=>z,adjoint:()=>S,clone:()=>y,copy:()=>p,create:()=>x,determinant:()=>R,equals:()=>Y,exactEquals:()=>Q,frob:()=>V,fromRotation:()=>D,fromScaling:()=>F,fromValues:()=>w,identity:()=>q,invert:()=>P,mul:()=>_,multiply:()=>T,multiplyScalar:()=>X,multiplyScalarAndAdd:()=>Z,rotate:()=>I,scale:()=>E,set:()=>g,str:()=>L,sub:()=>B,subtract:()=>O,transpose:()=>A});var r={};t.r(r),t.d(r,{add:()=>it,clone:()=>k,copy:()=>U,create:()=>N,determinant:()=>J,equals:()=>ft,exactEquals:()=>Mt,frob:()=>ot,fromRotation:()=>at,fromScaling:()=>rt,fromTranslation:()=>ut,fromValues:()=>C,identity:()=>W,invert:()=>H,mul:()=>lt,multiply:()=>K,multiplyScalar:()=>ct,multiplyScalarAndAdd:()=>st,rotate:()=>$,scale:()=>tt,set:()=>G,str:()=>et,sub:()=>vt,subtract:()=>ht,translate:()=>nt});var u={};t.r(u),t.d(u,{add:()=>Yt,adjoint:()=>At,clone:()=>dt,copy:()=>xt,create:()=>bt,determinant:()=>Pt,equals:()=>Nt,exactEquals:()=>Bt,frob:()=>Qt,fromMat2d:()=>Lt,fromMat4:()=>mt,fromQuat:()=>Vt,fromRotation:()=>Dt,fromScaling:()=>Ft,fromTranslation:()=>Et,fromValues:()=>yt,identity:()=>qt,invert:()=>gt,mul:()=>kt,multiply:()=>St,multiplyScalar:()=>Zt,multiplyScalarAndAdd:()=>_t,normalFromMat4:()=>jt,projection:()=>zt,rotate:()=>Tt,scale:()=>It,set:()=>pt,str:()=>Ot,sub:()=>Ut,subtract:()=>Xt,translate:()=>Rt,transpose:()=>wt});var e={};t.r(e),t.d(e,{add:()=>Ln,adjoint:()=>nn,clone:()=>Ct,copy:()=>Gt,create:()=>Wt,determinant:()=>an,equals:()=>Qn,exactEquals:()=>On,frob:()=>Fn,fromQuat:()=>An,fromQuat2:()=>xn,fromRotation:()=>ln,fromRotationTranslation:()=>dn,fromRotationTranslationScale:()=>wn,fromRotationTranslationScaleOrigin:()=>gn,fromScaling:()=>fn,fromTranslation:()=>Mn,fromValues:()=>Ht,fromXRotation:()=>vn,fromYRotation:()=>bn,fromZRotation:()=>mn,frustum:()=>Pn,getRotation:()=>qn,getScaling:()=>pn,getTranslation:()=>yn,identity:()=>Kt,invert:()=>tn,lookAt:()=>In,mul:()=>Yn,multiply:()=>rn,multiplyScalar:()=>jn,multiplyScalarAndAdd:()=>zn,ortho:()=>Tn,perspective:()=>Sn,perspectiveFromFieldOfView:()=>Rn,rotate:()=>on,rotateX:()=>hn,rotateY:()=>cn,rotateZ:()=>sn,scale:()=>en,set:()=>Jt,str:()=>Dn,sub:()=>Xn,subtract:()=>Vn,targetTo:()=>En,translate:()=>un,transpose:()=>$t});var o={};t.r(o),t.d(o,{add:()=>Wn,angle:()=>wa,bezier:()=>va,ceil:()=>Jn,clone:()=>_n,copy:()=>kn,create:()=>Zn,cross:()=>Ma,dist:()=>Da,distance:()=>ua,div:()=>Ea,divide:()=>Hn,dot:()=>sa,equals:()=>Sa,exactEquals:()=>Pa,floor:()=>Kn,forEach:()=>ja,fromValues:()=>Nn,hermite:()=>la,inverse:()=>ha,len:()=>La,length:()=>Bn,lerp:()=>fa,max:()=>ta,min:()=>$n,mul:()=>Ia,multiply:()=>Gn,negate:()=>ia,normalize:()=>ca,random:()=>ba,rotateX:()=>ya,rotateY:()=>pa,rotateZ:()=>qa,round:()=>na,scale:()=>aa,scaleAndAdd:()=>ra,set:()=>Un,sqrDist:()=>Fa,sqrLen:()=>Va,squaredDistance:()=>ea,squaredLength:()=>oa,str:()=>Aa,sub:()=>Ta,subtract:()=>Cn,transformMat3:()=>da,transformMat4:()=>ma,transformQuat:()=>xa,zero:()=>ga});var i={};t.r(i),t.d(i,{add:()=>Za,ceil:()=>ka,clone:()=>Oa,copy:()=>Ya,create:()=>za,cross:()=>or,dist:()=>xr,distance:()=>Ka,div:()=>dr,divide:()=>Na,dot:()=>er,equals:()=>vr,exactEquals:()=>lr,floor:()=>Ua,forEach:()=>wr,fromValues:()=>Qa,inverse:()=>rr,len:()=>pr,length:()=>tr,lerp:()=>ir,max:()=>Ca,min:()=>Wa,mul:()=>mr,multiply:()=>Ba,negate:()=>ar,normalize:()=>ur,random:()=>hr,round:()=>Ga,scale:()=>Ha,scaleAndAdd:()=>Ja,set:()=>Xa,sqrDist:()=>yr,sqrLen:()=>qr,squaredDistance:()=>$a,squaredLength:()=>nr,str:()=>fr,sub:()=>br,subtract:()=>_a,transformMat4:()=>cr,transformQuat:()=>sr,zero:()=>Mr});var h={};t.r(h),t.d(h,{add:()=>$r,calculateW:()=>Fr,clone:()=>Gr,conjugate:()=>Yr,copy:()=>Jr,create:()=>gr,dot:()=>au,equals:()=>su,exactEquals:()=>cu,exp:()=>Lr,fromEuler:()=>Zr,fromMat3:()=>Xr,fromValues:()=>Hr,getAngle:()=>Rr,getAxisAngle:()=>Sr,identity:()=>Ar,invert:()=>Qr,len:()=>eu,length:()=>uu,lerp:()=>ru,ln:()=>Vr,mul:()=>tu,multiply:()=>Tr,normalize:()=>hu,pow:()=>jr,random:()=>Or,rotateX:()=>Ir,rotateY:()=>Er,rotateZ:()=>Dr,rotationTo:()=>Mu,scale:()=>nu,set:()=>Kr,setAxes:()=>lu,setAxisAngle:()=>Pr,slerp:()=>zr,sqlerp:()=>fu,sqrLen:()=>iu,squaredLength:()=>ou,str:()=>_r});var c={};t.r(c),t.d(c,{add:()=>Ou,clone:()=>bu,conjugate:()=>Nu,copy:()=>wu,create:()=>vu,dot:()=>Zu,equals:()=>Ku,exactEquals:()=>Ju,fromMat4:()=>qu,fromRotation:()=>pu,fromRotationTranslation:()=>xu,fromRotationTranslationValues:()=>du,fromTranslation:()=>yu,fromValues:()=>mu,getDual:()=>Su,getReal:()=>Pu,getTranslation:()=>Iu,identity:()=>gu,invert:()=>Bu,len:()=>Uu,length:()=>ku,lerp:()=>_u,mul:()=>Yu,multiply:()=>Qu,normalize:()=>Gu,rotateAroundAxis:()=>zu,rotateByQuatAppend:()=>Vu,rotateByQuatPrepend:()=>ju,rotateX:()=>Du,rotateY:()=>Fu,rotateZ:()=>Lu,scale:()=>Xu,set:()=>Au,setDual:()=>Tu,setReal:()=>Ru,sqrLen:()=>Cu,squaredLength:()=>Wu,str:()=>Hu,translate:()=>Eu});var s={};t.r(s),t.d(s,{add:()=>ue,angle:()=>De,ceil:()=>he,clone:()=>te,copy:()=>ae,create:()=>$u,cross:()=>ge,dist:()=>Xe,distance:()=>be,div:()=>Ye,divide:()=>ie,dot:()=>we,equals:()=>je,exactEquals:()=>Ve,floor:()=>ce,forEach:()=>Be,fromValues:()=>ne,inverse:()=>pe,len:()=>ze,length:()=>de,lerp:()=>Ae,max:()=>Me,min:()=>se,mul:()=>Qe,multiply:()=>oe,negate:()=>ye,normalize:()=>qe,random:()=>Pe,rotate:()=>Ee,round:()=>fe,scale:()=>le,scaleAndAdd:()=>ve,set:()=>re,sqrDist:()=>Ze,sqrLen:()=>_e,squaredDistance:()=>me,squaredLength:()=>xe,str:()=>Le,sub:()=>Oe,subtract:()=>ee,transformMat2:()=>Se,transformMat2d:()=>Re,transformMat3:()=>Te,transformMat4:()=>Ie,zero:()=>Fe});var M=1e-6,f="undefined"!=typeof Float32Array?Float32Array:Array,l=Math.random;function v(t){f=t}var b=Math.PI/180;function m(t){return t*b}function d(t,n){return Math.abs(t-n)<=M*Math.max(1,Math.abs(t),Math.abs(n))}function x(){var t=new f(4);return f!=Float32Array&&(t[1]=0,t[2]=0),t[0]=1,t[3]=1,t}function y(t){var n=new f(4);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n}function p(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t}function q(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t}function w(t,n,a,r){var u=new f(4);return u[0]=t,u[1]=n,u[2]=a,u[3]=r,u}function g(t,n,a,r,u){return t[0]=n,t[1]=a,t[2]=r,t[3]=u,t}function A(t,n){if(t===n){var a=n[1];t[1]=n[2],t[2]=a}else t[0]=n[0],t[1]=n[2],t[2]=n[1],t[3]=n[3];return t}function P(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=a*e-u*r;return o?(o=1/o,t[0]=e*o,t[1]=-r*o,t[2]=-u*o,t[3]=a*o,t):null}function S(t,n){var a=n[0];return t[0]=n[3],t[1]=-n[1],t[2]=-n[2],t[3]=a,t}function R(t){return t[0]*t[3]-t[2]*t[1]}function T(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=a[0],h=a[1],c=a[2],s=a[3];return t[0]=r*i+e*h,t[1]=u*i+o*h,t[2]=r*c+e*s,t[3]=u*c+o*s,t}function I(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=Math.sin(a),h=Math.cos(a);return t[0]=r*h+e*i,t[1]=u*h+o*i,t[2]=r*-i+e*h,t[3]=u*-i+o*h,t}function E(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=a[0],h=a[1];return t[0]=r*i,t[1]=u*i,t[2]=e*h,t[3]=o*h,t}function D(t,n){var a=Math.sin(n),r=Math.cos(n);return t[0]=r,t[1]=a,t[2]=-a,t[3]=r,t}function F(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=n[1],t}function L(t){return"mat2("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}function V(t){return Math.hypot(t[0],t[1],t[2],t[3])}function j(t,n,a,r){return t[2]=r[2]/r[0],a[0]=r[0],a[1]=r[1],a[3]=r[3]-t[2]*a[1],[t,n,a]}function z(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t}function O(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t[3]=n[3]-a[3],t}function Q(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]}function Y(t,n){var a=t[0],r=t[1],u=t[2],e=t[3],o=n[0],i=n[1],h=n[2],c=n[3];return Math.abs(a-o)<=M*Math.max(1,Math.abs(a),Math.abs(o))&&Math.abs(r-i)<=M*Math.max(1,Math.abs(r),Math.abs(i))&&Math.abs(u-h)<=M*Math.max(1,Math.abs(u),Math.abs(h))&&Math.abs(e-c)<=M*Math.max(1,Math.abs(e),Math.abs(c))}function X(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t}function Z(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t[3]=n[3]+a[3]*r,t}Math.hypot||(Math.hypot=function(){for(var t=0,n=arguments.length;n--;)t+=arguments[n]*arguments[n];return Math.sqrt(t)});var _=T,B=O;function N(){var t=new f(6);return f!=Float32Array&&(t[1]=0,t[2]=0,t[4]=0,t[5]=0),t[0]=1,t[3]=1,t}function k(t){var n=new f(6);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n}function U(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t}function W(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t}function C(t,n,a,r,u,e){var o=new f(6);return o[0]=t,o[1]=n,o[2]=a,o[3]=r,o[4]=u,o[5]=e,o}function G(t,n,a,r,u,e,o){return t[0]=n,t[1]=a,t[2]=r,t[3]=u,t[4]=e,t[5]=o,t}function H(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=n[4],i=n[5],h=a*e-r*u;return h?(h=1/h,t[0]=e*h,t[1]=-r*h,t[2]=-u*h,t[3]=a*h,t[4]=(u*i-e*o)*h,t[5]=(r*o-a*i)*h,t):null}function J(t){return t[0]*t[3]-t[1]*t[2]}function K(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=n[4],h=n[5],c=a[0],s=a[1],M=a[2],f=a[3],l=a[4],v=a[5];return t[0]=r*c+e*s,t[1]=u*c+o*s,t[2]=r*M+e*f,t[3]=u*M+o*f,t[4]=r*l+e*v+i,t[5]=u*l+o*v+h,t}function $(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=n[4],h=n[5],c=Math.sin(a),s=Math.cos(a);return t[0]=r*s+e*c,t[1]=u*s+o*c,t[2]=r*-c+e*s,t[3]=u*-c+o*s,t[4]=i,t[5]=h,t}function tt(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=n[4],h=n[5],c=a[0],s=a[1];return t[0]=r*c,t[1]=u*c,t[2]=e*s,t[3]=o*s,t[4]=i,t[5]=h,t}function nt(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=n[4],h=n[5],c=a[0],s=a[1];return t[0]=r,t[1]=u,t[2]=e,t[3]=o,t[4]=r*c+e*s+i,t[5]=u*c+o*s+h,t}function at(t,n){var a=Math.sin(n),r=Math.cos(n);return t[0]=r,t[1]=a,t[2]=-a,t[3]=r,t[4]=0,t[5]=0,t}function rt(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=n[1],t[4]=0,t[5]=0,t}function ut(t,n){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=n[0],t[5]=n[1],t}function et(t){return"mat2d("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+")"}function ot(t){return Math.hypot(t[0],t[1],t[2],t[3],t[4],t[5],1)}function it(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t[4]=n[4]+a[4],t[5]=n[5]+a[5],t}function ht(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t[3]=n[3]-a[3],t[4]=n[4]-a[4],t[5]=n[5]-a[5],t}function ct(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t[4]=n[4]*a,t[5]=n[5]*a,t}function st(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t[3]=n[3]+a[3]*r,t[4]=n[4]+a[4]*r,t[5]=n[5]+a[5]*r,t}function Mt(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]}function ft(t,n){var a=t[0],r=t[1],u=t[2],e=t[3],o=t[4],i=t[5],h=n[0],c=n[1],s=n[2],f=n[3],l=n[4],v=n[5];return Math.abs(a-h)<=M*Math.max(1,Math.abs(a),Math.abs(h))&&Math.abs(r-c)<=M*Math.max(1,Math.abs(r),Math.abs(c))&&Math.abs(u-s)<=M*Math.max(1,Math.abs(u),Math.abs(s))&&Math.abs(e-f)<=M*Math.max(1,Math.abs(e),Math.abs(f))&&Math.abs(o-l)<=M*Math.max(1,Math.abs(o),Math.abs(l))&&Math.abs(i-v)<=M*Math.max(1,Math.abs(i),Math.abs(v))}var lt=K,vt=ht;function bt(){var t=new f(9);return f!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[5]=0,t[6]=0,t[7]=0),t[0]=1,t[4]=1,t[8]=1,t}function mt(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[4],t[4]=n[5],t[5]=n[6],t[6]=n[8],t[7]=n[9],t[8]=n[10],t}function dt(t){var n=new f(9);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],n}function xt(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t}function yt(t,n,a,r,u,e,o,i,h){var c=new f(9);return c[0]=t,c[1]=n,c[2]=a,c[3]=r,c[4]=u,c[5]=e,c[6]=o,c[7]=i,c[8]=h,c}function pt(t,n,a,r,u,e,o,i,h,c){return t[0]=n,t[1]=a,t[2]=r,t[3]=u,t[4]=e,t[5]=o,t[6]=i,t[7]=h,t[8]=c,t}function qt(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function wt(t,n){if(t===n){var a=n[1],r=n[2],u=n[5];t[1]=n[3],t[2]=n[6],t[3]=a,t[5]=n[7],t[6]=r,t[7]=u}else t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8];return t}function gt(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=n[4],i=n[5],h=n[6],c=n[7],s=n[8],M=s*o-i*c,f=-s*e+i*h,l=c*e-o*h,v=a*M+r*f+u*l;return v?(v=1/v,t[0]=M*v,t[1]=(-s*r+u*c)*v,t[2]=(i*r-u*o)*v,t[3]=f*v,t[4]=(s*a-u*h)*v,t[5]=(-i*a+u*e)*v,t[6]=l*v,t[7]=(-c*a+r*h)*v,t[8]=(o*a-r*e)*v,t):null}function At(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=n[4],i=n[5],h=n[6],c=n[7],s=n[8];return t[0]=o*s-i*c,t[1]=u*c-r*s,t[2]=r*i-u*o,t[3]=i*h-e*s,t[4]=a*s-u*h,t[5]=u*e-a*i,t[6]=e*c-o*h,t[7]=r*h-a*c,t[8]=a*o-r*e,t}function Pt(t){var n=t[0],a=t[1],r=t[2],u=t[3],e=t[4],o=t[5],i=t[6],h=t[7],c=t[8];return n*(c*e-o*h)+a*(-c*u+o*i)+r*(h*u-e*i)}function St(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=n[8],f=a[0],l=a[1],v=a[2],b=a[3],m=a[4],d=a[5],x=a[6],y=a[7],p=a[8];return t[0]=f*r+l*o+v*c,t[1]=f*u+l*i+v*s,t[2]=f*e+l*h+v*M,t[3]=b*r+m*o+d*c,t[4]=b*u+m*i+d*s,t[5]=b*e+m*h+d*M,t[6]=x*r+y*o+p*c,t[7]=x*u+y*i+p*s,t[8]=x*e+y*h+p*M,t}function Rt(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=n[8],f=a[0],l=a[1];return t[0]=r,t[1]=u,t[2]=e,t[3]=o,t[4]=i,t[5]=h,t[6]=f*r+l*o+c,t[7]=f*u+l*i+s,t[8]=f*e+l*h+M,t}function Tt(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=n[8],f=Math.sin(a),l=Math.cos(a);return t[0]=l*r+f*o,t[1]=l*u+f*i,t[2]=l*e+f*h,t[3]=l*o-f*r,t[4]=l*i-f*u,t[5]=l*h-f*e,t[6]=c,t[7]=s,t[8]=M,t}function It(t,n,a){var r=a[0],u=a[1];return t[0]=r*n[0],t[1]=r*n[1],t[2]=r*n[2],t[3]=u*n[3],t[4]=u*n[4],t[5]=u*n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t}function Et(t,n){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=n[0],t[7]=n[1],t[8]=1,t}function Dt(t,n){var a=Math.sin(n),r=Math.cos(n);return t[0]=r,t[1]=a,t[2]=0,t[3]=-a,t[4]=r,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function Ft(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=0,t[4]=n[1],t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function Lt(t,n){return t[0]=n[0],t[1]=n[1],t[2]=0,t[3]=n[2],t[4]=n[3],t[5]=0,t[6]=n[4],t[7]=n[5],t[8]=1,t}function Vt(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=a+a,i=r+r,h=u+u,c=a*o,s=r*o,M=r*i,f=u*o,l=u*i,v=u*h,b=e*o,m=e*i,d=e*h;return t[0]=1-M-v,t[3]=s-d,t[6]=f+m,t[1]=s+d,t[4]=1-c-v,t[7]=l-b,t[2]=f-m,t[5]=l+b,t[8]=1-c-M,t}function jt(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=n[4],i=n[5],h=n[6],c=n[7],s=n[8],M=n[9],f=n[10],l=n[11],v=n[12],b=n[13],m=n[14],d=n[15],x=a*i-r*o,y=a*h-u*o,p=a*c-e*o,q=r*h-u*i,w=r*c-e*i,g=u*c-e*h,A=s*b-M*v,P=s*m-f*v,S=s*d-l*v,R=M*m-f*b,T=M*d-l*b,I=f*d-l*m,E=x*I-y*T+p*R+q*S-w*P+g*A;return E?(E=1/E,t[0]=(i*I-h*T+c*R)*E,t[1]=(h*S-o*I-c*P)*E,t[2]=(o*T-i*S+c*A)*E,t[3]=(u*T-r*I-e*R)*E,t[4]=(a*I-u*S+e*P)*E,t[5]=(r*S-a*T-e*A)*E,t[6]=(b*g-m*w+d*q)*E,t[7]=(m*p-v*g-d*y)*E,t[8]=(v*w-b*p+d*x)*E,t):null}function zt(t,n,a){return t[0]=2/n,t[1]=0,t[2]=0,t[3]=0,t[4]=-2/a,t[5]=0,t[6]=-1,t[7]=1,t[8]=1,t}function Ot(t){return"mat3("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+")"}function Qt(t){return Math.hypot(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8])}function Yt(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t[4]=n[4]+a[4],t[5]=n[5]+a[5],t[6]=n[6]+a[6],t[7]=n[7]+a[7],t[8]=n[8]+a[8],t}function Xt(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t[3]=n[3]-a[3],t[4]=n[4]-a[4],t[5]=n[5]-a[5],t[6]=n[6]-a[6],t[7]=n[7]-a[7],t[8]=n[8]-a[8],t}function Zt(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=n[7]*a,t[8]=n[8]*a,t}function _t(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t[3]=n[3]+a[3]*r,t[4]=n[4]+a[4]*r,t[5]=n[5]+a[5]*r,t[6]=n[6]+a[6]*r,t[7]=n[7]+a[7]*r,t[8]=n[8]+a[8]*r,t}function Bt(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]&&t[6]===n[6]&&t[7]===n[7]&&t[8]===n[8]}function Nt(t,n){var a=t[0],r=t[1],u=t[2],e=t[3],o=t[4],i=t[5],h=t[6],c=t[7],s=t[8],f=n[0],l=n[1],v=n[2],b=n[3],m=n[4],d=n[5],x=n[6],y=n[7],p=n[8];return Math.abs(a-f)<=M*Math.max(1,Math.abs(a),Math.abs(f))&&Math.abs(r-l)<=M*Math.max(1,Math.abs(r),Math.abs(l))&&Math.abs(u-v)<=M*Math.max(1,Math.abs(u),Math.abs(v))&&Math.abs(e-b)<=M*Math.max(1,Math.abs(e),Math.abs(b))&&Math.abs(o-m)<=M*Math.max(1,Math.abs(o),Math.abs(m))&&Math.abs(i-d)<=M*Math.max(1,Math.abs(i),Math.abs(d))&&Math.abs(h-x)<=M*Math.max(1,Math.abs(h),Math.abs(x))&&Math.abs(c-y)<=M*Math.max(1,Math.abs(c),Math.abs(y))&&Math.abs(s-p)<=M*Math.max(1,Math.abs(s),Math.abs(p))}var kt=St,Ut=Xt;function Wt(){var t=new f(16);return f!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t}function Ct(t){var n=new f(16);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],n[9]=t[9],n[10]=t[10],n[11]=t[11],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15],n}function Gt(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],t}function Ht(t,n,a,r,u,e,o,i,h,c,s,M,l,v,b,m){var d=new f(16);return d[0]=t,d[1]=n,d[2]=a,d[3]=r,d[4]=u,d[5]=e,d[6]=o,d[7]=i,d[8]=h,d[9]=c,d[10]=s,d[11]=M,d[12]=l,d[13]=v,d[14]=b,d[15]=m,d}function Jt(t,n,a,r,u,e,o,i,h,c,s,M,f,l,v,b,m){return t[0]=n,t[1]=a,t[2]=r,t[3]=u,t[4]=e,t[5]=o,t[6]=i,t[7]=h,t[8]=c,t[9]=s,t[10]=M,t[11]=f,t[12]=l,t[13]=v,t[14]=b,t[15]=m,t}function Kt(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function $t(t,n){if(t===n){var a=n[1],r=n[2],u=n[3],e=n[6],o=n[7],i=n[11];t[1]=n[4],t[2]=n[8],t[3]=n[12],t[4]=a,t[6]=n[9],t[7]=n[13],t[8]=r,t[9]=e,t[11]=n[14],t[12]=u,t[13]=o,t[14]=i}else t[0]=n[0],t[1]=n[4],t[2]=n[8],t[3]=n[12],t[4]=n[1],t[5]=n[5],t[6]=n[9],t[7]=n[13],t[8]=n[2],t[9]=n[6],t[10]=n[10],t[11]=n[14],t[12]=n[3],t[13]=n[7],t[14]=n[11],t[15]=n[15];return t}function tn(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=n[4],i=n[5],h=n[6],c=n[7],s=n[8],M=n[9],f=n[10],l=n[11],v=n[12],b=n[13],m=n[14],d=n[15],x=a*i-r*o,y=a*h-u*o,p=a*c-e*o,q=r*h-u*i,w=r*c-e*i,g=u*c-e*h,A=s*b-M*v,P=s*m-f*v,S=s*d-l*v,R=M*m-f*b,T=M*d-l*b,I=f*d-l*m,E=x*I-y*T+p*R+q*S-w*P+g*A;return E?(E=1/E,t[0]=(i*I-h*T+c*R)*E,t[1]=(u*T-r*I-e*R)*E,t[2]=(b*g-m*w+d*q)*E,t[3]=(f*w-M*g-l*q)*E,t[4]=(h*S-o*I-c*P)*E,t[5]=(a*I-u*S+e*P)*E,t[6]=(m*p-v*g-d*y)*E,t[7]=(s*g-f*p+l*y)*E,t[8]=(o*T-i*S+c*A)*E,t[9]=(r*S-a*T-e*A)*E,t[10]=(v*w-b*p+d*x)*E,t[11]=(M*p-s*w-l*x)*E,t[12]=(i*P-o*R-h*A)*E,t[13]=(a*R-r*P+u*A)*E,t[14]=(b*y-v*q-m*x)*E,t[15]=(s*q-M*y+f*x)*E,t):null}function nn(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=n[4],i=n[5],h=n[6],c=n[7],s=n[8],M=n[9],f=n[10],l=n[11],v=n[12],b=n[13],m=n[14],d=n[15];return t[0]=i*(f*d-l*m)-M*(h*d-c*m)+b*(h*l-c*f),t[1]=-(r*(f*d-l*m)-M*(u*d-e*m)+b*(u*l-e*f)),t[2]=r*(h*d-c*m)-i*(u*d-e*m)+b*(u*c-e*h),t[3]=-(r*(h*l-c*f)-i*(u*l-e*f)+M*(u*c-e*h)),t[4]=-(o*(f*d-l*m)-s*(h*d-c*m)+v*(h*l-c*f)),t[5]=a*(f*d-l*m)-s*(u*d-e*m)+v*(u*l-e*f),t[6]=-(a*(h*d-c*m)-o*(u*d-e*m)+v*(u*c-e*h)),t[7]=a*(h*l-c*f)-o*(u*l-e*f)+s*(u*c-e*h),t[8]=o*(M*d-l*b)-s*(i*d-c*b)+v*(i*l-c*M),t[9]=-(a*(M*d-l*b)-s*(r*d-e*b)+v*(r*l-e*M)),t[10]=a*(i*d-c*b)-o*(r*d-e*b)+v*(r*c-e*i),t[11]=-(a*(i*l-c*M)-o*(r*l-e*M)+s*(r*c-e*i)),t[12]=-(o*(M*m-f*b)-s*(i*m-h*b)+v*(i*f-h*M)),t[13]=a*(M*m-f*b)-s*(r*m-u*b)+v*(r*f-u*M),t[14]=-(a*(i*m-h*b)-o*(r*m-u*b)+v*(r*h-u*i)),t[15]=a*(i*f-h*M)-o*(r*f-u*M)+s*(r*h-u*i),t}function an(t){var n=t[0],a=t[1],r=t[2],u=t[3],e=t[4],o=t[5],i=t[6],h=t[7],c=t[8],s=t[9],M=t[10],f=t[11],l=t[12],v=t[13],b=t[14],m=t[15];return(n*o-a*e)*(M*m-f*b)-(n*i-r*e)*(s*m-f*v)+(n*h-u*e)*(s*b-M*v)+(a*i-r*o)*(c*m-f*l)-(a*h-u*o)*(c*b-M*l)+(r*h-u*i)*(c*v-s*l)}function rn(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=n[8],f=n[9],l=n[10],v=n[11],b=n[12],m=n[13],d=n[14],x=n[15],y=a[0],p=a[1],q=a[2],w=a[3];return t[0]=y*r+p*i+q*M+w*b,t[1]=y*u+p*h+q*f+w*m,t[2]=y*e+p*c+q*l+w*d,t[3]=y*o+p*s+q*v+w*x,y=a[4],p=a[5],q=a[6],w=a[7],t[4]=y*r+p*i+q*M+w*b,t[5]=y*u+p*h+q*f+w*m,t[6]=y*e+p*c+q*l+w*d,t[7]=y*o+p*s+q*v+w*x,y=a[8],p=a[9],q=a[10],w=a[11],t[8]=y*r+p*i+q*M+w*b,t[9]=y*u+p*h+q*f+w*m,t[10]=y*e+p*c+q*l+w*d,t[11]=y*o+p*s+q*v+w*x,y=a[12],p=a[13],q=a[14],w=a[15],t[12]=y*r+p*i+q*M+w*b,t[13]=y*u+p*h+q*f+w*m,t[14]=y*e+p*c+q*l+w*d,t[15]=y*o+p*s+q*v+w*x,t}function un(t,n,a){var r,u,e,o,i,h,c,s,M,f,l,v,b=a[0],m=a[1],d=a[2];return n===t?(t[12]=n[0]*b+n[4]*m+n[8]*d+n[12],t[13]=n[1]*b+n[5]*m+n[9]*d+n[13],t[14]=n[2]*b+n[6]*m+n[10]*d+n[14],t[15]=n[3]*b+n[7]*m+n[11]*d+n[15]):(r=n[0],u=n[1],e=n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=n[8],f=n[9],l=n[10],v=n[11],t[0]=r,t[1]=u,t[2]=e,t[3]=o,t[4]=i,t[5]=h,t[6]=c,t[7]=s,t[8]=M,t[9]=f,t[10]=l,t[11]=v,t[12]=r*b+i*m+M*d+n[12],t[13]=u*b+h*m+f*d+n[13],t[14]=e*b+c*m+l*d+n[14],t[15]=o*b+s*m+v*d+n[15]),t}function en(t,n,a){var r=a[0],u=a[1],e=a[2];return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=n[3]*r,t[4]=n[4]*u,t[5]=n[5]*u,t[6]=n[6]*u,t[7]=n[7]*u,t[8]=n[8]*e,t[9]=n[9]*e,t[10]=n[10]*e,t[11]=n[11]*e,t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],t}function on(t,n,a,r){var u,e,o,i,h,c,s,f,l,v,b,m,d,x,y,p,q,w,g,A,P,S,R,T,I=r[0],E=r[1],D=r[2],F=Math.hypot(I,E,D);return F<M?null:(I*=F=1/F,E*=F,D*=F,u=Math.sin(a),o=1-(e=Math.cos(a)),i=n[0],h=n[1],c=n[2],s=n[3],f=n[4],l=n[5],v=n[6],b=n[7],m=n[8],d=n[9],x=n[10],y=n[11],p=I*I*o+e,q=E*I*o+D*u,w=D*I*o-E*u,g=I*E*o-D*u,A=E*E*o+e,P=D*E*o+I*u,S=I*D*o+E*u,R=E*D*o-I*u,T=D*D*o+e,t[0]=i*p+f*q+m*w,t[1]=h*p+l*q+d*w,t[2]=c*p+v*q+x*w,t[3]=s*p+b*q+y*w,t[4]=i*g+f*A+m*P,t[5]=h*g+l*A+d*P,t[6]=c*g+v*A+x*P,t[7]=s*g+b*A+y*P,t[8]=i*S+f*R+m*T,t[9]=h*S+l*R+d*T,t[10]=c*S+v*R+x*T,t[11]=s*S+b*R+y*T,n!==t&&(t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t)}function hn(t,n,a){var r=Math.sin(a),u=Math.cos(a),e=n[4],o=n[5],i=n[6],h=n[7],c=n[8],s=n[9],M=n[10],f=n[11];return n!==t&&(t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[4]=e*u+c*r,t[5]=o*u+s*r,t[6]=i*u+M*r,t[7]=h*u+f*r,t[8]=c*u-e*r,t[9]=s*u-o*r,t[10]=M*u-i*r,t[11]=f*u-h*r,t}function cn(t,n,a){var r=Math.sin(a),u=Math.cos(a),e=n[0],o=n[1],i=n[2],h=n[3],c=n[8],s=n[9],M=n[10],f=n[11];return n!==t&&(t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[0]=e*u-c*r,t[1]=o*u-s*r,t[2]=i*u-M*r,t[3]=h*u-f*r,t[8]=e*r+c*u,t[9]=o*r+s*u,t[10]=i*r+M*u,t[11]=h*r+f*u,t}function sn(t,n,a){var r=Math.sin(a),u=Math.cos(a),e=n[0],o=n[1],i=n[2],h=n[3],c=n[4],s=n[5],M=n[6],f=n[7];return n!==t&&(t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[0]=e*u+c*r,t[1]=o*u+s*r,t[2]=i*u+M*r,t[3]=h*u+f*r,t[4]=c*u-e*r,t[5]=s*u-o*r,t[6]=M*u-i*r,t[7]=f*u-h*r,t}function Mn(t,n){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=n[0],t[13]=n[1],t[14]=n[2],t[15]=1,t}function fn(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=n[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=n[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function ln(t,n,a){var r,u,e,o=a[0],i=a[1],h=a[2],c=Math.hypot(o,i,h);return c<M?null:(o*=c=1/c,i*=c,h*=c,r=Math.sin(n),e=1-(u=Math.cos(n)),t[0]=o*o*e+u,t[1]=i*o*e+h*r,t[2]=h*o*e-i*r,t[3]=0,t[4]=o*i*e-h*r,t[5]=i*i*e+u,t[6]=h*i*e+o*r,t[7]=0,t[8]=o*h*e+i*r,t[9]=i*h*e-o*r,t[10]=h*h*e+u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t)}function vn(t,n){var a=Math.sin(n),r=Math.cos(n);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=r,t[6]=a,t[7]=0,t[8]=0,t[9]=-a,t[10]=r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function bn(t,n){var a=Math.sin(n),r=Math.cos(n);return t[0]=r,t[1]=0,t[2]=-a,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=a,t[9]=0,t[10]=r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function mn(t,n){var a=Math.sin(n),r=Math.cos(n);return t[0]=r,t[1]=a,t[2]=0,t[3]=0,t[4]=-a,t[5]=r,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function dn(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=r+r,h=u+u,c=e+e,s=r*i,M=r*h,f=r*c,l=u*h,v=u*c,b=e*c,m=o*i,d=o*h,x=o*c;return t[0]=1-(l+b),t[1]=M+x,t[2]=f-d,t[3]=0,t[4]=M-x,t[5]=1-(s+b),t[6]=v+m,t[7]=0,t[8]=f+d,t[9]=v-m,t[10]=1-(s+l),t[11]=0,t[12]=a[0],t[13]=a[1],t[14]=a[2],t[15]=1,t}function xn(t,n){var a=new f(3),r=-n[0],u=-n[1],e=-n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=r*r+u*u+e*e+o*o;return M>0?(a[0]=2*(i*o+s*r+h*e-c*u)/M,a[1]=2*(h*o+s*u+c*r-i*e)/M,a[2]=2*(c*o+s*e+i*u-h*r)/M):(a[0]=2*(i*o+s*r+h*e-c*u),a[1]=2*(h*o+s*u+c*r-i*e),a[2]=2*(c*o+s*e+i*u-h*r)),dn(t,n,a),t}function yn(t,n){return t[0]=n[12],t[1]=n[13],t[2]=n[14],t}function pn(t,n){var a=n[0],r=n[1],u=n[2],e=n[4],o=n[5],i=n[6],h=n[8],c=n[9],s=n[10];return t[0]=Math.hypot(a,r,u),t[1]=Math.hypot(e,o,i),t[2]=Math.hypot(h,c,s),t}function qn(t,n){var a=new f(3);pn(a,n);var r=1/a[0],u=1/a[1],e=1/a[2],o=n[0]*r,i=n[1]*u,h=n[2]*e,c=n[4]*r,s=n[5]*u,M=n[6]*e,l=n[8]*r,v=n[9]*u,b=n[10]*e,m=o+s+b,d=0;return m>0?(d=2*Math.sqrt(m+1),t[3]=.25*d,t[0]=(M-v)/d,t[1]=(l-h)/d,t[2]=(i-c)/d):o>s&&o>b?(d=2*Math.sqrt(1+o-s-b),t[3]=(M-v)/d,t[0]=.25*d,t[1]=(i+c)/d,t[2]=(l+h)/d):s>b?(d=2*Math.sqrt(1+s-o-b),t[3]=(l-h)/d,t[0]=(i+c)/d,t[1]=.25*d,t[2]=(M+v)/d):(d=2*Math.sqrt(1+b-o-s),t[3]=(i-c)/d,t[0]=(l+h)/d,t[1]=(M+v)/d,t[2]=.25*d),t}function wn(t,n,a,r){var u=n[0],e=n[1],o=n[2],i=n[3],h=u+u,c=e+e,s=o+o,M=u*h,f=u*c,l=u*s,v=e*c,b=e*s,m=o*s,d=i*h,x=i*c,y=i*s,p=r[0],q=r[1],w=r[2];return t[0]=(1-(v+m))*p,t[1]=(f+y)*p,t[2]=(l-x)*p,t[3]=0,t[4]=(f-y)*q,t[5]=(1-(M+m))*q,t[6]=(b+d)*q,t[7]=0,t[8]=(l+x)*w,t[9]=(b-d)*w,t[10]=(1-(M+v))*w,t[11]=0,t[12]=a[0],t[13]=a[1],t[14]=a[2],t[15]=1,t}function gn(t,n,a,r,u){var e=n[0],o=n[1],i=n[2],h=n[3],c=e+e,s=o+o,M=i+i,f=e*c,l=e*s,v=e*M,b=o*s,m=o*M,d=i*M,x=h*c,y=h*s,p=h*M,q=r[0],w=r[1],g=r[2],A=u[0],P=u[1],S=u[2],R=(1-(b+d))*q,T=(l+p)*q,I=(v-y)*q,E=(l-p)*w,D=(1-(f+d))*w,F=(m+x)*w,L=(v+y)*g,V=(m-x)*g,j=(1-(f+b))*g;return t[0]=R,t[1]=T,t[2]=I,t[3]=0,t[4]=E,t[5]=D,t[6]=F,t[7]=0,t[8]=L,t[9]=V,t[10]=j,t[11]=0,t[12]=a[0]+A-(R*A+E*P+L*S),t[13]=a[1]+P-(T*A+D*P+V*S),t[14]=a[2]+S-(I*A+F*P+j*S),t[15]=1,t}function An(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=a+a,i=r+r,h=u+u,c=a*o,s=r*o,M=r*i,f=u*o,l=u*i,v=u*h,b=e*o,m=e*i,d=e*h;return t[0]=1-M-v,t[1]=s+d,t[2]=f-m,t[3]=0,t[4]=s-d,t[5]=1-c-v,t[6]=l+b,t[7]=0,t[8]=f+m,t[9]=l-b,t[10]=1-c-M,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function Pn(t,n,a,r,u,e,o){var i=1/(a-n),h=1/(u-r),c=1/(e-o);return t[0]=2*e*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=2*e*h,t[6]=0,t[7]=0,t[8]=(a+n)*i,t[9]=(u+r)*h,t[10]=(o+e)*c,t[11]=-1,t[12]=0,t[13]=0,t[14]=o*e*2*c,t[15]=0,t}function Sn(t,n,a,r,u){var e,o=1/Math.tan(n/2);return t[0]=o/a,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=o,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=u&&u!==1/0?(e=1/(r-u),t[10]=(u+r)*e,t[14]=2*u*r*e):(t[10]=-1,t[14]=-2*r),t}function Rn(t,n,a,r){var u=Math.tan(n.upDegrees*Math.PI/180),e=Math.tan(n.downDegrees*Math.PI/180),o=Math.tan(n.leftDegrees*Math.PI/180),i=Math.tan(n.rightDegrees*Math.PI/180),h=2/(o+i),c=2/(u+e);return t[0]=h,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=c,t[6]=0,t[7]=0,t[8]=-(o-i)*h*.5,t[9]=(u-e)*c*.5,t[10]=r/(a-r),t[11]=-1,t[12]=0,t[13]=0,t[14]=r*a/(a-r),t[15]=0,t}function Tn(t,n,a,r,u,e,o){var i=1/(n-a),h=1/(r-u),c=1/(e-o);return t[0]=-2*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*h,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*c,t[11]=0,t[12]=(n+a)*i,t[13]=(u+r)*h,t[14]=(o+e)*c,t[15]=1,t}function In(t,n,a,r){var u,e,o,i,h,c,s,f,l,v,b=n[0],m=n[1],d=n[2],x=r[0],y=r[1],p=r[2],q=a[0],w=a[1],g=a[2];return Math.abs(b-q)<M&&Math.abs(m-w)<M&&Math.abs(d-g)<M?Kt(t):(s=b-q,f=m-w,l=d-g,u=y*(l*=v=1/Math.hypot(s,f,l))-p*(f*=v),e=p*(s*=v)-x*l,o=x*f-y*s,(v=Math.hypot(u,e,o))?(u*=v=1/v,e*=v,o*=v):(u=0,e=0,o=0),i=f*o-l*e,h=l*u-s*o,c=s*e-f*u,(v=Math.hypot(i,h,c))?(i*=v=1/v,h*=v,c*=v):(i=0,h=0,c=0),t[0]=u,t[1]=i,t[2]=s,t[3]=0,t[4]=e,t[5]=h,t[6]=f,t[7]=0,t[8]=o,t[9]=c,t[10]=l,t[11]=0,t[12]=-(u*b+e*m+o*d),t[13]=-(i*b+h*m+c*d),t[14]=-(s*b+f*m+l*d),t[15]=1,t)}function En(t,n,a,r){var u=n[0],e=n[1],o=n[2],i=r[0],h=r[1],c=r[2],s=u-a[0],M=e-a[1],f=o-a[2],l=s*s+M*M+f*f;l>0&&(s*=l=1/Math.sqrt(l),M*=l,f*=l);var v=h*f-c*M,b=c*s-i*f,m=i*M-h*s;return(l=v*v+b*b+m*m)>0&&(v*=l=1/Math.sqrt(l),b*=l,m*=l),t[0]=v,t[1]=b,t[2]=m,t[3]=0,t[4]=M*m-f*b,t[5]=f*v-s*m,t[6]=s*b-M*v,t[7]=0,t[8]=s,t[9]=M,t[10]=f,t[11]=0,t[12]=u,t[13]=e,t[14]=o,t[15]=1,t}function Dn(t){return"mat4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+", "+t[9]+", "+t[10]+", "+t[11]+", "+t[12]+", "+t[13]+", "+t[14]+", "+t[15]+")"}function Fn(t){return Math.hypot(t[0],t[1],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15])}function Ln(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t[4]=n[4]+a[4],t[5]=n[5]+a[5],t[6]=n[6]+a[6],t[7]=n[7]+a[7],t[8]=n[8]+a[8],t[9]=n[9]+a[9],t[10]=n[10]+a[10],t[11]=n[11]+a[11],t[12]=n[12]+a[12],t[13]=n[13]+a[13],t[14]=n[14]+a[14],t[15]=n[15]+a[15],t}function Vn(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t[3]=n[3]-a[3],t[4]=n[4]-a[4],t[5]=n[5]-a[5],t[6]=n[6]-a[6],t[7]=n[7]-a[7],t[8]=n[8]-a[8],t[9]=n[9]-a[9],t[10]=n[10]-a[10],t[11]=n[11]-a[11],t[12]=n[12]-a[12],t[13]=n[13]-a[13],t[14]=n[14]-a[14],t[15]=n[15]-a[15],t}function jn(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=n[7]*a,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=n[11]*a,t[12]=n[12]*a,t[13]=n[13]*a,t[14]=n[14]*a,t[15]=n[15]*a,t}function zn(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t[3]=n[3]+a[3]*r,t[4]=n[4]+a[4]*r,t[5]=n[5]+a[5]*r,t[6]=n[6]+a[6]*r,t[7]=n[7]+a[7]*r,t[8]=n[8]+a[8]*r,t[9]=n[9]+a[9]*r,t[10]=n[10]+a[10]*r,t[11]=n[11]+a[11]*r,t[12]=n[12]+a[12]*r,t[13]=n[13]+a[13]*r,t[14]=n[14]+a[14]*r,t[15]=n[15]+a[15]*r,t}function On(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]&&t[6]===n[6]&&t[7]===n[7]&&t[8]===n[8]&&t[9]===n[9]&&t[10]===n[10]&&t[11]===n[11]&&t[12]===n[12]&&t[13]===n[13]&&t[14]===n[14]&&t[15]===n[15]}function Qn(t,n){var a=t[0],r=t[1],u=t[2],e=t[3],o=t[4],i=t[5],h=t[6],c=t[7],s=t[8],f=t[9],l=t[10],v=t[11],b=t[12],m=t[13],d=t[14],x=t[15],y=n[0],p=n[1],q=n[2],w=n[3],g=n[4],A=n[5],P=n[6],S=n[7],R=n[8],T=n[9],I=n[10],E=n[11],D=n[12],F=n[13],L=n[14],V=n[15];return Math.abs(a-y)<=M*Math.max(1,Math.abs(a),Math.abs(y))&&Math.abs(r-p)<=M*Math.max(1,Math.abs(r),Math.abs(p))&&Math.abs(u-q)<=M*Math.max(1,Math.abs(u),Math.abs(q))&&Math.abs(e-w)<=M*Math.max(1,Math.abs(e),Math.abs(w))&&Math.abs(o-g)<=M*Math.max(1,Math.abs(o),Math.abs(g))&&Math.abs(i-A)<=M*Math.max(1,Math.abs(i),Math.abs(A))&&Math.abs(h-P)<=M*Math.max(1,Math.abs(h),Math.abs(P))&&Math.abs(c-S)<=M*Math.max(1,Math.abs(c),Math.abs(S))&&Math.abs(s-R)<=M*Math.max(1,Math.abs(s),Math.abs(R))&&Math.abs(f-T)<=M*Math.max(1,Math.abs(f),Math.abs(T))&&Math.abs(l-I)<=M*Math.max(1,Math.abs(l),Math.abs(I))&&Math.abs(v-E)<=M*Math.max(1,Math.abs(v),Math.abs(E))&&Math.abs(b-D)<=M*Math.max(1,Math.abs(b),Math.abs(D))&&Math.abs(m-F)<=M*Math.max(1,Math.abs(m),Math.abs(F))&&Math.abs(d-L)<=M*Math.max(1,Math.abs(d),Math.abs(L))&&Math.abs(x-V)<=M*Math.max(1,Math.abs(x),Math.abs(V))}var Yn=rn,Xn=Vn;function Zn(){var t=new f(3);return f!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t}function _n(t){var n=new f(3);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n}function Bn(t){var n=t[0],a=t[1],r=t[2];return Math.hypot(n,a,r)}function Nn(t,n,a){var r=new f(3);return r[0]=t,r[1]=n,r[2]=a,r}function kn(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t}function Un(t,n,a,r){return t[0]=n,t[1]=a,t[2]=r,t}function Wn(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t}function Cn(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t}function Gn(t,n,a){return t[0]=n[0]*a[0],t[1]=n[1]*a[1],t[2]=n[2]*a[2],t}function Hn(t,n,a){return t[0]=n[0]/a[0],t[1]=n[1]/a[1],t[2]=n[2]/a[2],t}function Jn(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t}function Kn(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t}function $n(t,n,a){return t[0]=Math.min(n[0],a[0]),t[1]=Math.min(n[1],a[1]),t[2]=Math.min(n[2],a[2]),t}function ta(t,n,a){return t[0]=Math.max(n[0],a[0]),t[1]=Math.max(n[1],a[1]),t[2]=Math.max(n[2],a[2]),t}function na(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t}function aa(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t}function ra(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t}function ua(t,n){var a=n[0]-t[0],r=n[1]-t[1],u=n[2]-t[2];return Math.hypot(a,r,u)}function ea(t,n){var a=n[0]-t[0],r=n[1]-t[1],u=n[2]-t[2];return a*a+r*r+u*u}function oa(t){var n=t[0],a=t[1],r=t[2];return n*n+a*a+r*r}function ia(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t}function ha(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t}function ca(t,n){var a=n[0],r=n[1],u=n[2],e=a*a+r*r+u*u;return e>0&&(e=1/Math.sqrt(e)),t[0]=n[0]*e,t[1]=n[1]*e,t[2]=n[2]*e,t}function sa(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}function Ma(t,n,a){var r=n[0],u=n[1],e=n[2],o=a[0],i=a[1],h=a[2];return t[0]=u*h-e*i,t[1]=e*o-r*h,t[2]=r*i-u*o,t}function fa(t,n,a,r){var u=n[0],e=n[1],o=n[2];return t[0]=u+r*(a[0]-u),t[1]=e+r*(a[1]-e),t[2]=o+r*(a[2]-o),t}function la(t,n,a,r,u,e){var o=e*e,i=o*(2*e-3)+1,h=o*(e-2)+e,c=o*(e-1),s=o*(3-2*e);return t[0]=n[0]*i+a[0]*h+r[0]*c+u[0]*s,t[1]=n[1]*i+a[1]*h+r[1]*c+u[1]*s,t[2]=n[2]*i+a[2]*h+r[2]*c+u[2]*s,t}function va(t,n,a,r,u,e){var o=1-e,i=o*o,h=e*e,c=i*o,s=3*e*i,M=3*h*o,f=h*e;return t[0]=n[0]*c+a[0]*s+r[0]*M+u[0]*f,t[1]=n[1]*c+a[1]*s+r[1]*M+u[1]*f,t[2]=n[2]*c+a[2]*s+r[2]*M+u[2]*f,t}function ba(t,n){n=n||1;var a=2*l()*Math.PI,r=2*l()-1,u=Math.sqrt(1-r*r)*n;return t[0]=Math.cos(a)*u,t[1]=Math.sin(a)*u,t[2]=r*n,t}function ma(t,n,a){var r=n[0],u=n[1],e=n[2],o=a[3]*r+a[7]*u+a[11]*e+a[15];return o=o||1,t[0]=(a[0]*r+a[4]*u+a[8]*e+a[12])/o,t[1]=(a[1]*r+a[5]*u+a[9]*e+a[13])/o,t[2]=(a[2]*r+a[6]*u+a[10]*e+a[14])/o,t}function da(t,n,a){var r=n[0],u=n[1],e=n[2];return t[0]=r*a[0]+u*a[3]+e*a[6],t[1]=r*a[1]+u*a[4]+e*a[7],t[2]=r*a[2]+u*a[5]+e*a[8],t}function xa(t,n,a){var r=a[0],u=a[1],e=a[2],o=a[3],i=n[0],h=n[1],c=n[2],s=u*c-e*h,M=e*i-r*c,f=r*h-u*i,l=u*f-e*M,v=e*s-r*f,b=r*M-u*s,m=2*o;return s*=m,M*=m,f*=m,l*=2,v*=2,b*=2,t[0]=i+s+l,t[1]=h+M+v,t[2]=c+f+b,t}function ya(t,n,a,r){var u=[],e=[];return u[0]=n[0]-a[0],u[1]=n[1]-a[1],u[2]=n[2]-a[2],e[0]=u[0],e[1]=u[1]*Math.cos(r)-u[2]*Math.sin(r),e[2]=u[1]*Math.sin(r)+u[2]*Math.cos(r),t[0]=e[0]+a[0],t[1]=e[1]+a[1],t[2]=e[2]+a[2],t}function pa(t,n,a,r){var u=[],e=[];return u[0]=n[0]-a[0],u[1]=n[1]-a[1],u[2]=n[2]-a[2],e[0]=u[2]*Math.sin(r)+u[0]*Math.cos(r),e[1]=u[1],e[2]=u[2]*Math.cos(r)-u[0]*Math.sin(r),t[0]=e[0]+a[0],t[1]=e[1]+a[1],t[2]=e[2]+a[2],t}function qa(t,n,a,r){var u=[],e=[];return u[0]=n[0]-a[0],u[1]=n[1]-a[1],u[2]=n[2]-a[2],e[0]=u[0]*Math.cos(r)-u[1]*Math.sin(r),e[1]=u[0]*Math.sin(r)+u[1]*Math.cos(r),e[2]=u[2],t[0]=e[0]+a[0],t[1]=e[1]+a[1],t[2]=e[2]+a[2],t}function wa(t,n){var a=Nn(t[0],t[1],t[2]),r=Nn(n[0],n[1],n[2]);ca(a,a),ca(r,r);var u=sa(a,r);return u>1?0:u<-1?Math.PI:Math.acos(u)}function ga(t){return t[0]=0,t[1]=0,t[2]=0,t}function Aa(t){return"vec3("+t[0]+", "+t[1]+", "+t[2]+")"}function Pa(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]}function Sa(t,n){var a=t[0],r=t[1],u=t[2],e=n[0],o=n[1],i=n[2];return Math.abs(a-e)<=M*Math.max(1,Math.abs(a),Math.abs(e))&&Math.abs(r-o)<=M*Math.max(1,Math.abs(r),Math.abs(o))&&Math.abs(u-i)<=M*Math.max(1,Math.abs(u),Math.abs(i))}var Ra,Ta=Cn,Ia=Gn,Ea=Hn,Da=ua,Fa=ea,La=Bn,Va=oa,ja=(Ra=Zn(),function(t,n,a,r,u,e){var o,i;for(n||(n=3),a||(a=0),i=r?Math.min(r*n+a,t.length):t.length,o=a;o<i;o+=n)Ra[0]=t[o],Ra[1]=t[o+1],Ra[2]=t[o+2],u(Ra,Ra,e),t[o]=Ra[0],t[o+1]=Ra[1],t[o+2]=Ra[2];return t});function za(){var t=new f(4);return f!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0,t[3]=0),t}function Oa(t){var n=new f(4);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n}function Qa(t,n,a,r){var u=new f(4);return u[0]=t,u[1]=n,u[2]=a,u[3]=r,u}function Ya(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t}function Xa(t,n,a,r,u){return t[0]=n,t[1]=a,t[2]=r,t[3]=u,t}function Za(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t}function _a(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t[3]=n[3]-a[3],t}function Ba(t,n,a){return t[0]=n[0]*a[0],t[1]=n[1]*a[1],t[2]=n[2]*a[2],t[3]=n[3]*a[3],t}function Na(t,n,a){return t[0]=n[0]/a[0],t[1]=n[1]/a[1],t[2]=n[2]/a[2],t[3]=n[3]/a[3],t}function ka(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t[3]=Math.ceil(n[3]),t}function Ua(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t[3]=Math.floor(n[3]),t}function Wa(t,n,a){return t[0]=Math.min(n[0],a[0]),t[1]=Math.min(n[1],a[1]),t[2]=Math.min(n[2],a[2]),t[3]=Math.min(n[3],a[3]),t}function Ca(t,n,a){return t[0]=Math.max(n[0],a[0]),t[1]=Math.max(n[1],a[1]),t[2]=Math.max(n[2],a[2]),t[3]=Math.max(n[3],a[3]),t}function Ga(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t[3]=Math.round(n[3]),t}function Ha(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t}function Ja(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t[3]=n[3]+a[3]*r,t}function Ka(t,n){var a=n[0]-t[0],r=n[1]-t[1],u=n[2]-t[2],e=n[3]-t[3];return Math.hypot(a,r,u,e)}function $a(t,n){var a=n[0]-t[0],r=n[1]-t[1],u=n[2]-t[2],e=n[3]-t[3];return a*a+r*r+u*u+e*e}function tr(t){var n=t[0],a=t[1],r=t[2],u=t[3];return Math.hypot(n,a,r,u)}function nr(t){var n=t[0],a=t[1],r=t[2],u=t[3];return n*n+a*a+r*r+u*u}function ar(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=-n[3],t}function rr(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t[3]=1/n[3],t}function ur(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=a*a+r*r+u*u+e*e;return o>0&&(o=1/Math.sqrt(o)),t[0]=a*o,t[1]=r*o,t[2]=u*o,t[3]=e*o,t}function er(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]+t[3]*n[3]}function or(t,n,a,r){var u=a[0]*r[1]-a[1]*r[0],e=a[0]*r[2]-a[2]*r[0],o=a[0]*r[3]-a[3]*r[0],i=a[1]*r[2]-a[2]*r[1],h=a[1]*r[3]-a[3]*r[1],c=a[2]*r[3]-a[3]*r[2],s=n[0],M=n[1],f=n[2],l=n[3];return t[0]=M*c-f*h+l*i,t[1]=-s*c+f*o-l*e,t[2]=s*h-M*o+l*u,t[3]=-s*i+M*e-f*u,t}function ir(t,n,a,r){var u=n[0],e=n[1],o=n[2],i=n[3];return t[0]=u+r*(a[0]-u),t[1]=e+r*(a[1]-e),t[2]=o+r*(a[2]-o),t[3]=i+r*(a[3]-i),t}function hr(t,n){var a,r,u,e,o,i;n=n||1;do{o=(a=2*l()-1)*a+(r=2*l()-1)*r}while(o>=1);do{i=(u=2*l()-1)*u+(e=2*l()-1)*e}while(i>=1);var h=Math.sqrt((1-o)/i);return t[0]=n*a,t[1]=n*r,t[2]=n*u*h,t[3]=n*e*h,t}function cr(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3];return t[0]=a[0]*r+a[4]*u+a[8]*e+a[12]*o,t[1]=a[1]*r+a[5]*u+a[9]*e+a[13]*o,t[2]=a[2]*r+a[6]*u+a[10]*e+a[14]*o,t[3]=a[3]*r+a[7]*u+a[11]*e+a[15]*o,t}function sr(t,n,a){var r=n[0],u=n[1],e=n[2],o=a[0],i=a[1],h=a[2],c=a[3],s=c*r+i*e-h*u,M=c*u+h*r-o*e,f=c*e+o*u-i*r,l=-o*r-i*u-h*e;return t[0]=s*c+l*-o+M*-h-f*-i,t[1]=M*c+l*-i+f*-o-s*-h,t[2]=f*c+l*-h+s*-i-M*-o,t[3]=n[3],t}function Mr(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=0,t}function fr(t){return"vec4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}function lr(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]}function vr(t,n){var a=t[0],r=t[1],u=t[2],e=t[3],o=n[0],i=n[1],h=n[2],c=n[3];return Math.abs(a-o)<=M*Math.max(1,Math.abs(a),Math.abs(o))&&Math.abs(r-i)<=M*Math.max(1,Math.abs(r),Math.abs(i))&&Math.abs(u-h)<=M*Math.max(1,Math.abs(u),Math.abs(h))&&Math.abs(e-c)<=M*Math.max(1,Math.abs(e),Math.abs(c))}var br=_a,mr=Ba,dr=Na,xr=Ka,yr=$a,pr=tr,qr=nr,wr=function(){var t=za();return function(n,a,r,u,e,o){var i,h;for(a||(a=4),r||(r=0),h=u?Math.min(u*a+r,n.length):n.length,i=r;i<h;i+=a)t[0]=n[i],t[1]=n[i+1],t[2]=n[i+2],t[3]=n[i+3],e(t,t,o),n[i]=t[0],n[i+1]=t[1],n[i+2]=t[2],n[i+3]=t[3];return n}}();function gr(){var t=new f(4);return f!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t[3]=1,t}function Ar(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function Pr(t,n,a){a*=.5;var r=Math.sin(a);return t[0]=r*n[0],t[1]=r*n[1],t[2]=r*n[2],t[3]=Math.cos(a),t}function Sr(t,n){var a=2*Math.acos(n[3]),r=Math.sin(a/2);return r>M?(t[0]=n[0]/r,t[1]=n[1]/r,t[2]=n[2]/r):(t[0]=1,t[1]=0,t[2]=0),a}function Rr(t,n){var a=au(t,n);return Math.acos(2*a*a-1)}function Tr(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=a[0],h=a[1],c=a[2],s=a[3];return t[0]=r*s+o*i+u*c-e*h,t[1]=u*s+o*h+e*i-r*c,t[2]=e*s+o*c+r*h-u*i,t[3]=o*s-r*i-u*h-e*c,t}function Ir(t,n,a){a*=.5;var r=n[0],u=n[1],e=n[2],o=n[3],i=Math.sin(a),h=Math.cos(a);return t[0]=r*h+o*i,t[1]=u*h+e*i,t[2]=e*h-u*i,t[3]=o*h-r*i,t}function Er(t,n,a){a*=.5;var r=n[0],u=n[1],e=n[2],o=n[3],i=Math.sin(a),h=Math.cos(a);return t[0]=r*h-e*i,t[1]=u*h+o*i,t[2]=e*h+r*i,t[3]=o*h-u*i,t}function Dr(t,n,a){a*=.5;var r=n[0],u=n[1],e=n[2],o=n[3],i=Math.sin(a),h=Math.cos(a);return t[0]=r*h+u*i,t[1]=u*h-r*i,t[2]=e*h+o*i,t[3]=o*h-e*i,t}function Fr(t,n){var a=n[0],r=n[1],u=n[2];return t[0]=a,t[1]=r,t[2]=u,t[3]=Math.sqrt(Math.abs(1-a*a-r*r-u*u)),t}function Lr(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=Math.sqrt(a*a+r*r+u*u),i=Math.exp(e),h=o>0?i*Math.sin(o)/o:0;return t[0]=a*h,t[1]=r*h,t[2]=u*h,t[3]=i*Math.cos(o),t}function Vr(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=Math.sqrt(a*a+r*r+u*u),i=o>0?Math.atan2(o,e)/o:0;return t[0]=a*i,t[1]=r*i,t[2]=u*i,t[3]=.5*Math.log(a*a+r*r+u*u+e*e),t}function jr(t,n,a){return Vr(t,n),nu(t,t,a),Lr(t,t),t}function zr(t,n,a,r){var u,e,o,i,h,c=n[0],s=n[1],f=n[2],l=n[3],v=a[0],b=a[1],m=a[2],d=a[3];return(e=c*v+s*b+f*m+l*d)<0&&(e=-e,v=-v,b=-b,m=-m,d=-d),1-e>M?(u=Math.acos(e),o=Math.sin(u),i=Math.sin((1-r)*u)/o,h=Math.sin(r*u)/o):(i=1-r,h=r),t[0]=i*c+h*v,t[1]=i*s+h*b,t[2]=i*f+h*m,t[3]=i*l+h*d,t}function Or(t){var n=l(),a=l(),r=l(),u=Math.sqrt(1-n),e=Math.sqrt(n);return t[0]=u*Math.sin(2*Math.PI*a),t[1]=u*Math.cos(2*Math.PI*a),t[2]=e*Math.sin(2*Math.PI*r),t[3]=e*Math.cos(2*Math.PI*r),t}function Qr(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=a*a+r*r+u*u+e*e,i=o?1/o:0;return t[0]=-a*i,t[1]=-r*i,t[2]=-u*i,t[3]=e*i,t}function Yr(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=n[3],t}function Xr(t,n){var a,r=n[0]+n[4]+n[8];if(r>0)a=Math.sqrt(r+1),t[3]=.5*a,a=.5/a,t[0]=(n[5]-n[7])*a,t[1]=(n[6]-n[2])*a,t[2]=(n[1]-n[3])*a;else{var u=0;n[4]>n[0]&&(u=1),n[8]>n[3*u+u]&&(u=2);var e=(u+1)%3,o=(u+2)%3;a=Math.sqrt(n[3*u+u]-n[3*e+e]-n[3*o+o]+1),t[u]=.5*a,a=.5/a,t[3]=(n[3*e+o]-n[3*o+e])*a,t[e]=(n[3*e+u]+n[3*u+e])*a,t[o]=(n[3*o+u]+n[3*u+o])*a}return t}function Zr(t,n,a,r){var u=.5*Math.PI/180;n*=u,a*=u,r*=u;var e=Math.sin(n),o=Math.cos(n),i=Math.sin(a),h=Math.cos(a),c=Math.sin(r),s=Math.cos(r);return t[0]=e*h*s-o*i*c,t[1]=o*i*s+e*h*c,t[2]=o*h*c-e*i*s,t[3]=o*h*s+e*i*c,t}function _r(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}var Br,Nr,kr,Ur,Wr,Cr,Gr=Oa,Hr=Qa,Jr=Ya,Kr=Xa,$r=Za,tu=Tr,nu=Ha,au=er,ru=ir,uu=tr,eu=uu,ou=nr,iu=ou,hu=ur,cu=lr,su=vr,Mu=(Br=Zn(),Nr=Nn(1,0,0),kr=Nn(0,1,0),function(t,n,a){var r=sa(n,a);return r<-.999999?(Ma(Br,Nr,n),La(Br)<1e-6&&Ma(Br,kr,n),ca(Br,Br),Pr(t,Br,Math.PI),t):r>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):(Ma(Br,n,a),t[0]=Br[0],t[1]=Br[1],t[2]=Br[2],t[3]=1+r,hu(t,t))}),fu=(Ur=gr(),Wr=gr(),function(t,n,a,r,u,e){return zr(Ur,n,u,e),zr(Wr,a,r,e),zr(t,Ur,Wr,2*e*(1-e)),t}),lu=(Cr=bt(),function(t,n,a,r){return Cr[0]=a[0],Cr[3]=a[1],Cr[6]=a[2],Cr[1]=r[0],Cr[4]=r[1],Cr[7]=r[2],Cr[2]=-n[0],Cr[5]=-n[1],Cr[8]=-n[2],hu(t,Xr(t,Cr))});function vu(){var t=new f(8);return f!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0),t[3]=1,t}function bu(t){var n=new f(8);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n}function mu(t,n,a,r,u,e,o,i){var h=new f(8);return h[0]=t,h[1]=n,h[2]=a,h[3]=r,h[4]=u,h[5]=e,h[6]=o,h[7]=i,h}function du(t,n,a,r,u,e,o){var i=new f(8);i[0]=t,i[1]=n,i[2]=a,i[3]=r;var h=.5*u,c=.5*e,s=.5*o;return i[4]=h*r+c*a-s*n,i[5]=c*r+s*t-h*a,i[6]=s*r+h*n-c*t,i[7]=-h*t-c*n-s*a,i}function xu(t,n,a){var r=.5*a[0],u=.5*a[1],e=.5*a[2],o=n[0],i=n[1],h=n[2],c=n[3];return t[0]=o,t[1]=i,t[2]=h,t[3]=c,t[4]=r*c+u*h-e*i,t[5]=u*c+e*o-r*h,t[6]=e*c+r*i-u*o,t[7]=-r*o-u*i-e*h,t}function yu(t,n){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t[4]=.5*n[0],t[5]=.5*n[1],t[6]=.5*n[2],t[7]=0,t}function pu(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=0,t[5]=0,t[6]=0,t[7]=0,t}function qu(t,n){var a=gr();qn(a,n);var r=new f(3);return yn(r,n),xu(t,a,r),t}function wu(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t}function gu(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t}function Au(t,n,a,r,u,e,o,i,h){return t[0]=n,t[1]=a,t[2]=r,t[3]=u,t[4]=e,t[5]=o,t[6]=i,t[7]=h,t}var Pu=Jr;function Su(t,n){return t[0]=n[4],t[1]=n[5],t[2]=n[6],t[3]=n[7],t}var Ru=Jr;function Tu(t,n){return t[4]=n[0],t[5]=n[1],t[6]=n[2],t[7]=n[3],t}function Iu(t,n){var a=n[4],r=n[5],u=n[6],e=n[7],o=-n[0],i=-n[1],h=-n[2],c=n[3];return t[0]=2*(a*c+e*o+r*h-u*i),t[1]=2*(r*c+e*i+u*o-a*h),t[2]=2*(u*c+e*h+a*i-r*o),t}function Eu(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=.5*a[0],h=.5*a[1],c=.5*a[2],s=n[4],M=n[5],f=n[6],l=n[7];return t[0]=r,t[1]=u,t[2]=e,t[3]=o,t[4]=o*i+u*c-e*h+s,t[5]=o*h+e*i-r*c+M,t[6]=o*c+r*h-u*i+f,t[7]=-r*i-u*h-e*c+l,t}function Du(t,n,a){var r=-n[0],u=-n[1],e=-n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=i*o+s*r+h*e-c*u,f=h*o+s*u+c*r-i*e,l=c*o+s*e+i*u-h*r,v=s*o-i*r-h*u-c*e;return Ir(t,n,a),r=t[0],u=t[1],e=t[2],o=t[3],t[4]=M*o+v*r+f*e-l*u,t[5]=f*o+v*u+l*r-M*e,t[6]=l*o+v*e+M*u-f*r,t[7]=v*o-M*r-f*u-l*e,t}function Fu(t,n,a){var r=-n[0],u=-n[1],e=-n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=i*o+s*r+h*e-c*u,f=h*o+s*u+c*r-i*e,l=c*o+s*e+i*u-h*r,v=s*o-i*r-h*u-c*e;return Er(t,n,a),r=t[0],u=t[1],e=t[2],o=t[3],t[4]=M*o+v*r+f*e-l*u,t[5]=f*o+v*u+l*r-M*e,t[6]=l*o+v*e+M*u-f*r,t[7]=v*o-M*r-f*u-l*e,t}function Lu(t,n,a){var r=-n[0],u=-n[1],e=-n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=i*o+s*r+h*e-c*u,f=h*o+s*u+c*r-i*e,l=c*o+s*e+i*u-h*r,v=s*o-i*r-h*u-c*e;return Dr(t,n,a),r=t[0],u=t[1],e=t[2],o=t[3],t[4]=M*o+v*r+f*e-l*u,t[5]=f*o+v*u+l*r-M*e,t[6]=l*o+v*e+M*u-f*r,t[7]=v*o-M*r-f*u-l*e,t}function Vu(t,n,a){var r=a[0],u=a[1],e=a[2],o=a[3],i=n[0],h=n[1],c=n[2],s=n[3];return t[0]=i*o+s*r+h*e-c*u,t[1]=h*o+s*u+c*r-i*e,t[2]=c*o+s*e+i*u-h*r,t[3]=s*o-i*r-h*u-c*e,i=n[4],h=n[5],c=n[6],s=n[7],t[4]=i*o+s*r+h*e-c*u,t[5]=h*o+s*u+c*r-i*e,t[6]=c*o+s*e+i*u-h*r,t[7]=s*o-i*r-h*u-c*e,t}function ju(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=a[0],h=a[1],c=a[2],s=a[3];return t[0]=r*s+o*i+u*c-e*h,t[1]=u*s+o*h+e*i-r*c,t[2]=e*s+o*c+r*h-u*i,t[3]=o*s-r*i-u*h-e*c,i=a[4],h=a[5],c=a[6],s=a[7],t[4]=r*s+o*i+u*c-e*h,t[5]=u*s+o*h+e*i-r*c,t[6]=e*s+o*c+r*h-u*i,t[7]=o*s-r*i-u*h-e*c,t}function zu(t,n,a,r){if(Math.abs(r)<M)return wu(t,n);var u=Math.hypot(a[0],a[1],a[2]);r*=.5;var e=Math.sin(r),o=e*a[0]/u,i=e*a[1]/u,h=e*a[2]/u,c=Math.cos(r),s=n[0],f=n[1],l=n[2],v=n[3];t[0]=s*c+v*o+f*h-l*i,t[1]=f*c+v*i+l*o-s*h,t[2]=l*c+v*h+s*i-f*o,t[3]=v*c-s*o-f*i-l*h;var b=n[4],m=n[5],d=n[6],x=n[7];return t[4]=b*c+x*o+m*h-d*i,t[5]=m*c+x*i+d*o-b*h,t[6]=d*c+x*h+b*i-m*o,t[7]=x*c-b*o-m*i-d*h,t}function Ou(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t[4]=n[4]+a[4],t[5]=n[5]+a[5],t[6]=n[6]+a[6],t[7]=n[7]+a[7],t}function Qu(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=a[4],h=a[5],c=a[6],s=a[7],M=n[4],f=n[5],l=n[6],v=n[7],b=a[0],m=a[1],d=a[2],x=a[3];return t[0]=r*x+o*b+u*d-e*m,t[1]=u*x+o*m+e*b-r*d,t[2]=e*x+o*d+r*m-u*b,t[3]=o*x-r*b-u*m-e*d,t[4]=r*s+o*i+u*c-e*h+M*x+v*b+f*d-l*m,t[5]=u*s+o*h+e*i-r*c+f*x+v*m+l*b-M*d,t[6]=e*s+o*c+r*h-u*i+l*x+v*d+M*m-f*b,t[7]=o*s-r*i-u*h-e*c+v*x-M*b-f*m-l*d,t}var Yu=Qu;function Xu(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=n[7]*a,t}var Zu=au;function _u(t,n,a,r){var u=1-r;return Zu(n,a)<0&&(r=-r),t[0]=n[0]*u+a[0]*r,t[1]=n[1]*u+a[1]*r,t[2]=n[2]*u+a[2]*r,t[3]=n[3]*u+a[3]*r,t[4]=n[4]*u+a[4]*r,t[5]=n[5]*u+a[5]*r,t[6]=n[6]*u+a[6]*r,t[7]=n[7]*u+a[7]*r,t}function Bu(t,n){var a=Wu(n);return t[0]=-n[0]/a,t[1]=-n[1]/a,t[2]=-n[2]/a,t[3]=n[3]/a,t[4]=-n[4]/a,t[5]=-n[5]/a,t[6]=-n[6]/a,t[7]=n[7]/a,t}function Nu(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=n[3],t[4]=-n[4],t[5]=-n[5],t[6]=-n[6],t[7]=n[7],t}var ku=uu,Uu=ku,Wu=ou,Cu=Wu;function Gu(t,n){var a=Wu(n);if(a>0){a=Math.sqrt(a);var r=n[0]/a,u=n[1]/a,e=n[2]/a,o=n[3]/a,i=n[4],h=n[5],c=n[6],s=n[7],M=r*i+u*h+e*c+o*s;t[0]=r,t[1]=u,t[2]=e,t[3]=o,t[4]=(i-r*M)/a,t[5]=(h-u*M)/a,t[6]=(c-e*M)/a,t[7]=(s-o*M)/a}return t}function Hu(t){return"quat2("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+")"}function Ju(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]&&t[6]===n[6]&&t[7]===n[7]}function Ku(t,n){var a=t[0],r=t[1],u=t[2],e=t[3],o=t[4],i=t[5],h=t[6],c=t[7],s=n[0],f=n[1],l=n[2],v=n[3],b=n[4],m=n[5],d=n[6],x=n[7];return Math.abs(a-s)<=M*Math.max(1,Math.abs(a),Math.abs(s))&&Math.abs(r-f)<=M*Math.max(1,Math.abs(r),Math.abs(f))&&Math.abs(u-l)<=M*Math.max(1,Math.abs(u),Math.abs(l))&&Math.abs(e-v)<=M*Math.max(1,Math.abs(e),Math.abs(v))&&Math.abs(o-b)<=M*Math.max(1,Math.abs(o),Math.abs(b))&&Math.abs(i-m)<=M*Math.max(1,Math.abs(i),Math.abs(m))&&Math.abs(h-d)<=M*Math.max(1,Math.abs(h),Math.abs(d))&&Math.abs(c-x)<=M*Math.max(1,Math.abs(c),Math.abs(x))}function $u(){var t=new f(2);return f!=Float32Array&&(t[0]=0,t[1]=0),t}function te(t){var n=new f(2);return n[0]=t[0],n[1]=t[1],n}function ne(t,n){var a=new f(2);return a[0]=t,a[1]=n,a}function ae(t,n){return t[0]=n[0],t[1]=n[1],t}function re(t,n,a){return t[0]=n,t[1]=a,t}function ue(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t}function ee(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t}function oe(t,n,a){return t[0]=n[0]*a[0],t[1]=n[1]*a[1],t}function ie(t,n,a){return t[0]=n[0]/a[0],t[1]=n[1]/a[1],t}function he(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t}function ce(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t}function se(t,n,a){return t[0]=Math.min(n[0],a[0]),t[1]=Math.min(n[1],a[1]),t}function Me(t,n,a){return t[0]=Math.max(n[0],a[0]),t[1]=Math.max(n[1],a[1]),t}function fe(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t}function le(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t}function ve(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t}function be(t,n){var a=n[0]-t[0],r=n[1]-t[1];return Math.hypot(a,r)}function me(t,n){var a=n[0]-t[0],r=n[1]-t[1];return a*a+r*r}function de(t){var n=t[0],a=t[1];return Math.hypot(n,a)}function xe(t){var n=t[0],a=t[1];return n*n+a*a}function ye(t,n){return t[0]=-n[0],t[1]=-n[1],t}function pe(t,n){return t[0]=1/n[0],t[1]=1/n[1],t}function qe(t,n){var a=n[0],r=n[1],u=a*a+r*r;return u>0&&(u=1/Math.sqrt(u)),t[0]=n[0]*u,t[1]=n[1]*u,t}function we(t,n){return t[0]*n[0]+t[1]*n[1]}function ge(t,n,a){var r=n[0]*a[1]-n[1]*a[0];return t[0]=t[1]=0,t[2]=r,t}function Ae(t,n,a,r){var u=n[0],e=n[1];return t[0]=u+r*(a[0]-u),t[1]=e+r*(a[1]-e),t}function Pe(t,n){n=n||1;var a=2*l()*Math.PI;return t[0]=Math.cos(a)*n,t[1]=Math.sin(a)*n,t}function Se(t,n,a){var r=n[0],u=n[1];return t[0]=a[0]*r+a[2]*u,t[1]=a[1]*r+a[3]*u,t}function Re(t,n,a){var r=n[0],u=n[1];return t[0]=a[0]*r+a[2]*u+a[4],t[1]=a[1]*r+a[3]*u+a[5],t}function Te(t,n,a){var r=n[0],u=n[1];return t[0]=a[0]*r+a[3]*u+a[6],t[1]=a[1]*r+a[4]*u+a[7],t}function Ie(t,n,a){var r=n[0],u=n[1];return t[0]=a[0]*r+a[4]*u+a[12],t[1]=a[1]*r+a[5]*u+a[13],t}function Ee(t,n,a,r){var u=n[0]-a[0],e=n[1]-a[1],o=Math.sin(r),i=Math.cos(r);return t[0]=u*i-e*o+a[0],t[1]=u*o+e*i+a[1],t}function De(t,n){var a=t[0],r=t[1],u=n[0],e=n[1],o=a*a+r*r;o>0&&(o=1/Math.sqrt(o));var i=u*u+e*e;i>0&&(i=1/Math.sqrt(i));var h=(a*u+r*e)*o*i;return h>1?0:h<-1?Math.PI:Math.acos(h)}function Fe(t){return t[0]=0,t[1]=0,t}function Le(t){return"vec2("+t[0]+", "+t[1]+")"}function Ve(t,n){return t[0]===n[0]&&t[1]===n[1]}function je(t,n){var a=t[0],r=t[1],u=n[0],e=n[1];return Math.abs(a-u)<=M*Math.max(1,Math.abs(a),Math.abs(u))&&Math.abs(r-e)<=M*Math.max(1,Math.abs(r),Math.abs(e))}var ze=de,Oe=ee,Qe=oe,Ye=ie,Xe=be,Ze=me,_e=xe,Be=function(){var t=$u();return function(n,a,r,u,e,o){var i,h;for(a||(a=2),r||(r=0),h=u?Math.min(u*a+r,n.length):n.length,i=r;i<h;i+=a)t[0]=n[i],t[1]=n[i+1],e(t,t,o),n[i]=t[0],n[i+1]=t[1];return n}}();window.glMatrix=n,window.mat2=a,window.mat2d=r,window.mat3=u,window.mat4=e,window.quat=h,window.quat2=c,window.vec2=s,window.vec3=o,window.vec4=i})();
//# sourceMappingURL=libs.core.js.map
if(!CABLES.exportedPatches)CABLES.exportedPatches={};CABLES.exportedPatches["WFsTKk"]={_id:"66b33d3d0c36c042c3f62348",ops:[{id:"q7wd38utu",uiAttribs:{},portsIn:[{name:"Max Pixel Density (DPR)",value:2},{name:"FPS Limit",value:0},{name:"Reduce FPS unfocussed",value:0},{name:"Transparent",value:0},{name:"Active",value:1}],portsOut:[{name:"trigger",links:[{portIn:"exe",portOut:"trigger",objIn:"6095owhmp",objOut:"q7wd38utu"}]},{name:"width",value:758},{name:"height",value:386},{name:"Pixel Density",value:1}],objName:"Ops.Gl.MainLoop_v2"},{id:"6095owhmp",uiAttribs:{},portsOut:[{name:"trigger 0",links:[{portIn:"render",portOut:"trigger 0",objIn:"8yw6lrko0",objOut:"6095owhmp"}]},{name:"trigger 5",links:[{portIn:"Render",portOut:"trigger 5",objIn:"tvubqq84w",objOut:"6095owhmp"}]},{name:"trigger 11",links:[{portIn:"Render",portOut:"trigger 11",objIn:"v0h82xzw4",objOut:"6095owhmp"}]},{name:"trigger 15",links:[{portIn:"render",portOut:"trigger 15",objIn:"ky2sl2x36",objOut:"6095owhmp"},{portIn:"exe",portOut:"trigger 15",objIn:"u11xko5ey",objOut:"6095owhmp"}]}],objName:"Ops.Trigger.Sequence"},{id:"201l16qw6",uiAttribs:{},portsIn:[{name:"Render Mesh",value:1},{name:"Width",value:5},{name:"Length",value:5},{name:"Height",value:5},{name:"Center",value:1},{name:"Mapping index",value:0},{name:"Mapping",value:"Side"},{name:"Bias",value:0},{name:"Flip X",value:1},{name:"Top",value:1},{name:"Bottom",value:1},{name:"Left",value:1},{name:"Right",value:1},{name:"Front",value:1},{name:"Back",value:1}],portsOut:[{name:"Next",links:[{portIn:"exe",portOut:"Next",objIn:"3ckb3w9fd",objOut:"201l16qw6"}]},{name:"geometry",links:[{portIn:"geom",portOut:"geometry",objIn:"3ckb3w9fd",objOut:"201l16qw6"}]}],objName:"Ops.Gl.Meshes.Cube_v2"},{id:"8yw6lrko0",uiAttribs:{},portsIn:[{name:"Size index",value:0},{name:"Size",value:"Canvas"},{name:"texture width",value:758},{name:"texture height",value:386},{name:"Auto Aspect",value:1},{name:"filter index",value:1},{name:"filter",value:"linear"},{name:"Wrap index",value:1},{name:"Wrap",value:"Repeat"},{name:"MSAA index",value:0},{name:"MSAA",value:"none"},{name:"Pixel Format index",value:4},{name:"Pixel Format",value:"RGBA 8bit ubyte"},{name:"Depth",value:1},{name:"Clear",value:1}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"dgsnh9gh6",objOut:"8yw6lrko0"}]},{name:"texture",links:[{portIn:"Image",portOut:"texture",objIn:"9i2s3h6sh",objOut:"8yw6lrko0"}]},{name:"textureDepth",links:[{portIn:"Depth Texture",portOut:"textureDepth",objIn:"som0i0dui",objOut:"8yw6lrko0"}]}],objName:"Ops.Gl.RenderToTexture_v3"},{id:"ky2sl2x36",uiAttribs:{},portsIn:[{name:"Scale index",value:0},{name:"Scale",value:"Stretch"},{name:"Flip Y",value:0},{name:"Flip X",value:0}],objName:"Ops.Gl.Meshes.FullscreenRectangle_v2"},{id:"v0h82xzw4",uiAttribs:{},portsIn:[{name:"Size index",value:0},{name:"Size",value:"Auto"},{name:"Width",value:640},{name:"Height",value:480},{name:"Filter index",value:1},{name:"Filter",value:"linear"},{name:"Wrap index",value:1},{name:"Wrap",value:"repeat"},{name:"Anisotropic index",value:0},{name:"Anisotropic",value:"0"},{name:"Pixel Format index",value:4},{name:"Pixel Format",value:"RGBA 8bit ubyte"},{name:"R",value:0},{name:"G",value:0},{name:"B",value:0},{name:"A",value:0}],portsOut:[{name:"Next",links:[{portIn:"render",portOut:"Next",objIn:"som0i0dui",objOut:"v0h82xzw4"}]},{name:"texture_out",links:[{portIn:"Texture In",portOut:"texture_out",objIn:"4j3hoj09n",objOut:"v0h82xzw4"},{portIn:"mask",portOut:"texture_out",objIn:"5n4a95bkc",objOut:"v0h82xzw4"}]},{name:"Aspect Ratio",value:1.9637305699481866},{name:"Texture Width",value:758},{name:"Texture Height",value:386}],objName:"Ops.Gl.ImageCompose.ImageCompose_v4"},{id:"som0i0dui",uiAttribs:{},portsIn:[{name:"Focus",value:.803},{name:"Width",value:.005},{name:"Invert",value:1},{name:"farplane",value:.83}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"vq11uecni",objOut:"som0i0dui"}]}],objName:"Ops.Gl.ImageCompose.DepthTextureFocus_v2"},{id:"tvubqq84w",uiAttribs:{},portsIn:[{name:"Size index",value:0},{name:"Size",value:"Auto"},{name:"Width",value:640},{name:"Height",value:480},{name:"Filter index",value:1},{name:"Filter",value:"linear"},{name:"Wrap index",value:1},{name:"Wrap",value:"repeat"},{name:"Anisotropic index",value:0},{name:"Anisotropic",value:"0"},{name:"Pixel Format index",value:4},{name:"Pixel Format",value:"RGBA 8bit ubyte"},{name:"R",value:0},{name:"G",value:0},{name:"B",value:0},{name:"A",value:0}],portsOut:[{name:"Next",links:[{portIn:"render",portOut:"Next",objIn:"9i2s3h6sh",objOut:"tvubqq84w"}]},{name:"texture_out",links:[{portIn:"Texture",portOut:"texture_out",objIn:"ky2sl2x36",objOut:"tvubqq84w"}]},{name:"Aspect Ratio",value:1.9637305699481866},{name:"Texture Width",value:758},{name:"Texture Height",value:386}],objName:"Ops.Gl.ImageCompose.ImageCompose_v4"},{id:"9i2s3h6sh",uiAttribs:{},portsIn:[{name:"blendMode index",value:0},{name:"blendMode",value:"normal"},{name:"amount",value:1},{name:"Premultiplied",value:0},{name:"Alpha Mask",value:0},{name:"removeAlphaSrc",value:0},{name:"Mask Src index",value:1},{name:"Mask Src",value:"luminance"},{name:"Invert alpha channel",value:0},{name:"Aspect Ratio",value:0},{name:"Stretch Axis index",value:0},{name:"Stretch Axis",value:"X"},{name:"Position",value:0},{name:"Crop",value:0},{name:"flip x",value:0},{name:"flip y",value:0},{name:"Transform",value:0},{name:"Scale X",value:1},{name:"Scale Y",value:1},{name:"Position X",value:0},{name:"Position Y",value:0},{name:"Rotation",value:0},{name:"Clip Repeat",value:0}],portsOut:[{name:"trigger",links:[{portIn:"Render",portOut:"trigger",objIn:"l34o9htxu",objOut:"9i2s3h6sh"},{portIn:"render",portOut:"trigger",objIn:"5n4a95bkc",objOut:"9i2s3h6sh"}]}],objName:"Ops.Gl.ImageCompose.DrawImage_v3"},{id:"5n4a95bkc",uiAttribs:{},portsIn:[{name:"amount",value:10},{name:"direction index",value:0},{name:"direction",value:"both"},{name:"Fast",value:1}],objName:"Ops.Gl.ImageCompose.Blur"},{id:"vq11uecni",uiAttribs:{},portsIn:[{name:"amount",value:2},{name:"direction index",value:0},{name:"direction",value:"both"},{name:"Fast",value:1}],objName:"Ops.Gl.ImageCompose.Blur"},{id:"hj45y0smw",uiAttribs:{},portsIn:[{name:"r",value:.9764705882352941},{name:"g",value:.7450980392156862},{name:"b",value:.20392156862745103},{name:"a",value:1}],portsOut:[{name:"outr",value:.9764705882352941},{name:"outg",value:.7450980392156862},{name:"outb",value:.20392156862745103},{name:"outa",value:1},{name:"Hex",value:"F9BE34"}],objName:"Ops.Color.ColorValue"},{id:"zzgbbseef",uiAttribs:{},portsIn:[{name:"r",value:.9607843137254902},{name:"g",value:.6313725490196079},{name:"b",value:.10196078431372554},{name:"a",value:1}],portsOut:[{name:"outr",links:[{portIn:"Diffuse R",portOut:"outr",objIn:"gbhf594yn",objOut:"zzgbbseef"}]},{name:"outg",links:[{portIn:"Diffuse G",portOut:"outg",objIn:"gbhf594yn",objOut:"zzgbbseef"}]},{name:"outb",links:[{portIn:"Diffuse B",portOut:"outb",objIn:"gbhf594yn",objOut:"zzgbbseef"}]},{name:"outa",value:1},{name:"Hex",value:"F5A11A"}],objName:"Ops.Color.ColorValue"},{id:"ueg5ghnoz",uiAttribs:{},portsIn:[{name:"r",value:.8705882352941177},{name:"g",value:.23529411764705882},{name:"b",value:.3764705882352942},{name:"a",value:1}],portsOut:[{name:"outr",links:[{portIn:"R",portOut:"outr",objIn:"eiwkil9wo",objOut:"ueg5ghnoz"},{portIn:"Specular R",portOut:"outr",objIn:"eiwkil9wo",objOut:"ueg5ghnoz"}]},{name:"outg",links:[{portIn:"G",portOut:"outg",objIn:"eiwkil9wo",objOut:"ueg5ghnoz"},{portIn:"Specular G",portOut:"outg",objIn:"eiwkil9wo",objOut:"ueg5ghnoz"}]},{name:"outb",links:[{portIn:"B",portOut:"outb",objIn:"eiwkil9wo",objOut:"ueg5ghnoz"},{portIn:"Specular B",portOut:"outb",objIn:"eiwkil9wo",objOut:"ueg5ghnoz"}]},{name:"outa",value:1},{name:"Hex",value:"DE3C60"}],objName:"Ops.Color.ColorValue"},{id:"l59li4twp",uiAttribs:{},portsIn:[{name:"r",value:.4901960784313724},{name:"g",value:.12941176470588237},{name:"b",value:.6196078431372549},{name:"a",value:1}],portsOut:[{name:"outr",value:.4901960784313724},{name:"outg",value:.12941176470588237},{name:"outb",value:.6196078431372549},{name:"outa",value:1},{name:"Hex",value:"7D219E"}],objName:"Ops.Color.ColorValue"},{id:"vi0ik259y",uiAttribs:{},portsIn:[{name:"r",value:.05882352941176466},{name:"g",value:.5647058823529412},{name:"b",value:.7647058823529411},{name:"a",value:1}],portsOut:[{name:"outr",value:.05882352941176466},{name:"outg",value:.5647058823529412},{name:"outb",value:.7647058823529411},{name:"outa",value:1},{name:"Hex",value:"0F90C3"}],objName:"Ops.Color.ColorValue"},{id:"3ckb3w9fd",uiAttribs:{},portsIn:[{name:"Scale",value:1},{name:"Limit Instances",value:0},{name:"Limit",value:100},{name:"Scale Array",value:0},{name:"Rotations",value:0},{name:"Rotation Type index",value:0},{name:"Rotation Type",value:"Euler"},{name:"Billboarding index",value:0},{name:"Billboarding",value:"Off"},{name:"Material blend mode index",value:0},{name:"Material blend mode",value:"Multiply"},{name:"Colors",value:0},{name:"TexCoords",value:0}],portsOut:[{name:"Num",value:27}],objName:"Ops.Gl.MeshInstancer_v4"},{id:"h9dpstsqh",uiAttribs:{},portsIn:[{name:"num x",value:3},{name:"num y",value:3},{name:"num z",value:3},{name:"mul",value:18.43},{name:"center",value:1}],portsOut:[{name:"Array out",links:[{portIn:"positions",portOut:"Array out",objIn:"3ckb3w9fd",objOut:"h9dpstsqh"}]},{name:"Total points",value:27},{name:"Array length",value:81}],objName:"Ops.Array.PointArray.PointsCube"},{id:"dgsnh9gh6",uiAttribs:{},portsIn:[{name:"Axis index",value:0},{name:"Axis",value:"Vertical"},{name:"fov y",value:15,title:"FOV Degrees"},{name:"frustum near",value:.1},{name:"frustum far",value:1e4},{name:"Auto Aspect Ratio",value:1},{name:"Aspect Ratio",value:0}],portsOut:[{name:"trigger",links:[{portIn:"Trigger In",portOut:"trigger",objIn:"eiwkil9wo",objOut:"dgsnh9gh6"}]},{name:"Aspect",value:1.9637305699481866}],objName:"Ops.Gl.Perspective"},{id:"u5bpn2h2z",uiAttribs:{},portsIn:[{name:"posX",value:0},{name:"posY",value:0},{name:"posZ",value:-197.95},{name:"scale",value:1},{name:"rotZ",value:0}],portsOut:[{name:"trigger",links:[{portIn:"Render",portOut:"trigger",objIn:"201l16qw6",objOut:"u5bpn2h2z"}]}],objName:"Ops.Gl.Matrix.Transform"},{id:"l34o9htxu",uiAttribs:{},portsIn:[{name:"Blend Mode index",value:0},{name:"Blend Mode",value:"normal"},{name:"Alpha Mask index",value:0},{name:"Alpha Mask",value:"Off"},{name:"Amount",value:1},{name:"Strength",value:1},{name:"Radius",value:.475},{name:"Sharp",value:.237},{name:"Aspect",value:1},{name:"r",value:0},{name:"g",value:0},{name:"b",value:0},{name:"Alpha",value:1}],objName:"Ops.Gl.ImageCompose.Vignette_v3"},{id:"4j3hoj09n",uiAttribs:{},portsIn:[{name:"Show Info",value:0},{name:"Visualize outside 0-1 index",value:1},{name:"Visualize outside 0-1",value:"Anim"},{name:"Alpha index",value:0},{name:"Alpha",value:"A"},{name:"Show Color",value:0},{name:"X",value:.5},{name:"Y",value:.5}],portsOut:[{name:"Info",value:""}],objName:"Ops.Ui.VizTexture"},{id:"begwdg5eq",uiAttribs:{},portsIn:[{name:"Cast Light",value:1},{name:"Intensity",value:3.5},{name:"Radius",value:15},{name:"X",value:-35.68019996611163},{name:"Y",value:-5.43662699835691},{name:"Z",value:.75},{name:"R",value:1},{name:"G",value:1},{name:"B",value:1},{name:"Specular R",value:1},{name:"Specular G",value:1},{name:"Specular B",value:1},{name:"Falloff",value:.5},{name:"Cast Shadow",value:1},{name:"Rendering Active",value:1},{name:"Map Size index",value:1},{name:"Map Size",value:512},{name:"Shadow Strength",value:1},{name:"Near",value:.1},{name:"Far",value:30},{name:"Bias",value:.004},{name:"Polygon Offset",value:0}],portsOut:[{name:"Trigger Out",links:[{portIn:"Execute",portOut:"Trigger Out",objIn:"gbhf594yn",objOut:"begwdg5eq"}]},{name:"World Position X",value:-35.680198669433594},{name:"World Position Y",value:-5.43662691116333},{name:"World Position Z",value:.75}],objName:"Ops.Gl.Phong.PointLight_v5"},{id:"gbhf594yn",uiAttribs:{},portsIn:[{name:"Diffuse A",value:1},{name:"Double Sided",value:0},{name:"Colorize Texture",value:0}],portsOut:[{name:"next",links:[{portIn:"render",portOut:"next",objIn:"u5bpn2h2z",objOut:"gbhf594yn"},{portIn:"exe",portOut:"next",objIn:"ky28zqi5b",objOut:"gbhf594yn"},{portIn:"exe",portOut:"next",objIn:"wbexhb1cw",objOut:"gbhf594yn"}]}],objName:"Ops.Gl.Phong.LambertMaterial_v2"},{id:"eiwkil9wo",uiAttribs:{},portsIn:[{name:"Cast Light",value:1},{name:"Intensity",value:.55},{name:"X",value:-.24655636491160168},{name:"Y",value:.49499959431739793},{name:"Z",value:5},{name:"Cast Shadow",value:0},{name:"Rendering Active",value:1},{name:"Map Size index",value:1},{name:"Map Size",value:512},{name:"Shadow Strength",value:1},{name:"LR-BottomTop",value:8},{name:"Near",value:.1},{name:"Far",value:30},{name:"Bias",value:.004},{name:"Polygon Offset",value:0},{name:"Normal Offset",value:0},{name:"Blur Amount",value:0},{name:"Enable Advanced",value:0},{name:"MSAA index",value:0},{name:"MSAA",value:"none"},{name:"Texture Filter index",value:0},{name:"Texture Filter",value:"Linear"},{name:"Anisotropic index",value:0},{name:"Anisotropic",value:"0"}],portsOut:[{name:"Trigger Out",links:[{portIn:"render",portOut:"Trigger Out",objIn:"hgf78d7rv",objOut:"eiwkil9wo"}]}],objName:"Ops.Gl.Phong.DirectionalLight_v5"},{id:"ky28zqi5b",uiAttribs:{},portsIn:[{name:"min",value:20},{name:"max",value:30},{name:"random seed",value:0},{name:"duration",value:.1},{name:"pause between",value:5},{name:"easing index",value:0},{name:"easing",value:"linear"}],portsOut:[{name:"result",links:[{portIn:"rotX",portOut:"result",objIn:"u5bpn2h2z",objOut:"ky28zqi5b"}]}],objName:"Ops.Anim.RandomAnim"},{id:"wbexhb1cw",uiAttribs:{},portsIn:[{name:"min",value:45},{name:"max",value:60},{name:"random seed",value:0},{name:"duration",value:1},{name:"pause between",value:10},{name:"easing index",value:0},{name:"easing",value:"linear"}],portsOut:[{name:"result",links:[{portIn:"rotY",portOut:"result",objIn:"u5bpn2h2z",objOut:"wbexhb1cw"}]}],objName:"Ops.Anim.RandomAnim"},{id:"u11xko5ey",uiAttribs:{},portsIn:[{name:"min",value:.013},{name:"max",value:.0144},{name:"random seed",value:0},{name:"duration",value:.1},{name:"pause between",value:10},{name:"easing index",value:0},{name:"easing",value:"linear"}],portsOut:[{name:"result",links:[{portIn:"nearplane",portOut:"result",objIn:"som0i0dui",objOut:"u11xko5ey"}]}],objName:"Ops.Anim.RandomAnim"},{id:"hgf78d7rv",uiAttribs:{},portsIn:[{name:"min distance",value:1},{name:"max distance",value:999999},{name:"min rot y",value:0},{name:"max rot y",value:0},{name:"initial radius",value:2},{name:"initial axis y",value:.5},{name:"initial axis x",value:.25},{name:"Smoothness",value:1},{name:"Speed X",value:1},{name:"Speed Y",value:1},{name:"Active",value:1},{name:"Allow Panning",value:1},{name:"Allow Zooming",value:1},{name:"Allow Rotation",value:1},{name:"restricted",value:1},{name:"Identity",value:1}],portsOut:[{name:"trigger",links:[{portIn:"Trigger In",portOut:"trigger",objIn:"begwdg5eq",objOut:"hgf78d7rv"}]},{name:"radius",value:2},{name:"Rot X",value:90},{name:"Rot Y",value:90}],objName:"Ops.Gl.Matrix.OrbitControls_v3"}],export:{time:"2024-08-07 14:12",service:"github",exportNumber:3}};if(!CABLES.exportedPatch){CABLES.exportedPatch=CABLES.exportedPatches["WFsTKk"]}"use strict";var CABLES=CABLES||{};CABLES.OPS=CABLES.OPS||{};var Ops=Ops||{};Ops.Gl=Ops.Gl||{};Ops.Ui=Ops.Ui||{};Ops.Anim=Ops.Anim||{};Ops.Array=Ops.Array||{};Ops.Color=Ops.Color||{};Ops.Trigger=Ops.Trigger||{};Ops.Gl.Phong=Ops.Gl.Phong||{};Ops.Gl.Matrix=Ops.Gl.Matrix||{};Ops.Gl.Meshes=Ops.Gl.Meshes||{};Ops.Gl.ImageCompose=Ops.Gl.ImageCompose||{};Ops.Array.PointArray=Ops.Array.PointArray||{};Ops.Gl.MainLoop_v2=function(){CABLES.Op.apply(this,arguments);const i=this;const e=i.attachments={};const t=i.inFloat("Max Pixel Density (DPR)",2),s=i.inValue("FPS Limit",0),n=i.inValueBool("Reduce FPS unfocussed",false),r=i.inValueBool("Transparent",false),a=i.inValueBool("Active",1),o=i.outTrigger("trigger"),l=i.outNumber("width"),h=i.outNumber("height"),u=i.outNumber("Pixel Density");i.onAnimFrame=I;t.onChange=x;const c=i.patch.cgl;let f=0;let g=0;let d=null;let _=false;if(!i.patch.cgl)i.uiAttr({error:"No webgl cgl context"});const p=vec3.create();vec3.set(p,0,0,0);const m=vec3.create();vec3.set(m,0,0,-2);let T=null;let A=true;let E=true;window.addEventListener("blur",()=>{A=false});window.addEventListener("focus",()=>{A=true});document.addEventListener("visibilitychange",()=>{E=!document.hidden});S();c.mainloopOp=this;function x(){v();if(CABLES.UI){if(t.get()<1)i.patch.cgl.canvas.style.imageRendering="pixelated"}i.patch.cgl.updateSize();if(CABLES.UI)gui.setLayout()}a.onChange=function(){i.patch.removeOnAnimFrame(i);if(a.get()){i.setUiAttrib({extendTitle:""});i.onAnimFrame=I;i.patch.addOnAnimFrame(i);i.log("adding again!")}else{i.setUiAttrib({extendTitle:"Inactive"})}};function b(){if(n.get()){if(!E)return 10;if(!A)return 30}return s.get()}i.onDelete=function(){c.gl.clearColor(0,0,0,0);c.gl.clear(c.gl.COLOR_BUFFER_BIT|c.gl.DEPTH_BUFFER_BIT)};function v(){if(t.get()!=0)i.patch.cgl.pixelDensity=Math.min(t.get(),window.devicePixelRatio);else i.patch.cgl.pixelDensity=window.devicePixelRatio}function I(e){if(!a.get())return;if(c.aborted||c.canvas.clientWidth===0||c.canvas.clientHeight===0)return;i.patch.cg=c;v();const t=performance.now();i.patch.config.fpsLimit=b();if(c.canvasWidth==-1){c.setCanvas(i.patch.config.glCanvasId);return}if(c.canvasWidth!=l.get()||c.canvasHeight!=h.get()){l.set(c.canvasWidth/1);h.set(c.canvasHeight/1)}if(CABLES.now()-g>1e3){CGL.fpsReport=CGL.fpsReport||[];if(i.patch.loading.getProgress()>=1&&g!==0)CGL.fpsReport.push(f);f=0;g=CABLES.now()}CGL.MESH.lastShader=null;CGL.MESH.lastMesh=null;c.renderStart(c,p,m);if(!r.get())c.gl.clearColor(0,0,0,1);else c.gl.clearColor(0,0,0,0);c.gl.clear(c.gl.COLOR_BUFFER_BIT|c.gl.DEPTH_BUFFER_BIT);o.trigger();if(CGL.MESH.lastMesh)CGL.MESH.lastMesh.unBind();if(CGL.Texture.previewTexture){if(!CGL.Texture.texturePreviewer)CGL.Texture.texturePreviewer=new CGL.Texture.texturePreview(c);CGL.Texture.texturePreviewer.render(CGL.Texture.previewTexture)}c.renderEnd(c);i.patch.cg=null;if(!r.get()){c.gl.clearColor(1,1,1,1);c.gl.colorMask(false,false,false,true);c.gl.clear(c.gl.COLOR_BUFFER_BIT);c.gl.colorMask(true,true,true,true)}if(!c.frameStore.phong)c.frameStore.phong={};f++;u.set(i.patch.cgl.pixelDensity);i.patch.cgl.profileData.profileMainloopMs=performance.now()-t}function S(){clearTimeout(d);d=setTimeout(()=>{if(i.patch.getOpsByObjName(i.name).length>1){i.setUiError("multimainloop","there should only be one mainloop op!");if(!_)_=i.patch.addEventListener("onOpDelete",S)}else i.setUiError("multimainloop",null,1)},500)}};Ops.Gl.MainLoop_v2.prototype=new CABLES.Op;CABLES.OPS["f1029550-d877-42da-9b1e-63a5163a0350"]={f:Ops.Gl.MainLoop_v2,objName:"Ops.Gl.MainLoop_v2"};Ops.Trigger.Sequence=function(){CABLES.Op.apply(this,arguments);const r=this;const e=r.attachments={};const t=r.inTrigger("exe"),i=r.inTriggerButton("Clean up connections");r.setUiAttrib({resizable:true,resizableY:false,stretchPorts:true});const s=[],a=[],n=16;let o=null,l=[];t.onTriggered=c;i.onTriggered=f;i.setUiAttribs({hideParam:true,hidePort:true});for(let t=0;t<n;t++){const g=r.outTrigger("trigger "+t);a.push(g);g.onLinkChanged=u;if(t<n-1){let e=r.inTrigger("exe "+t);e.onTriggered=c;s.push(e)}}h();function h(){l.length=0;for(let e=0;e<a.length;e++)if(a[e].links.length>0)l.push(a[e])}function u(){h();clearTimeout(o);o=setTimeout(()=>{let t=false;for(let e=0;e<a.length;e++)if(a[e].links.length>1)t=true;i.setUiAttribs({hideParam:!t});if(r.isCurrentUiOp())r.refreshParams()},60)}function c(){for(let e=0;e<l.length;e++)l[e].trigger()}function f(){let s=0;for(let i=0;i<a.length;i++){let t=[];if(a[i].links.length>1)for(let e=1;e<a[i].links.length;e++){while(a[s].links.length>0)s++;t.push(a[i].links[e]);const n=a[i].links[e].getOtherPort(a[i]);r.patch.link(r,"trigger "+s,n.op,n.name);s++}for(let e=0;e<t.length;e++)t[e].remove()}u();h()}};Ops.Trigger.Sequence.prototype=new CABLES.Op;CABLES.OPS["a466bc1f-06e9-4595-8849-bffb9fe22f99"]={f:Ops.Trigger.Sequence,objName:"Ops.Trigger.Sequence"};Ops.Gl.Meshes.Cube_v2=function(){CABLES.Op.apply(this,arguments);const a=this;const e=a.attachments={};const t=a.inTrigger("Render"),i=a.inValueBool("Render Mesh",true),o=a.inValue("Width",1),l=a.inValue("Length",1),h=a.inValue("Height",1),u=a.inValueBool("Center",true),c=a.inSwitch("Mapping",["Side","Cube +-","SideWrap"],"Side"),f=a.inValue("Bias",0),g=a.inValueBool("Flip X",true),d=a.inValueBool("Top",true),_=a.inValueBool("Bottom",true),p=a.inValueBool("Left",true),m=a.inValueBool("Right",true),T=a.inValueBool("Front",true),A=a.inValueBool("Back",true),s=a.outTrigger("Next"),E=a.outObject("geometry",null,"geometry");const n=a.patch.cgl;a.toWorkPortsNeedToBeLinked(t);a.toWorkShouldNotBeChild("Ops.Gl.TextureEffects.ImageCompose",CABLES.OP_PORT_TYPE_FUNCTION);a.setPortGroup("Mapping",[c,f,g]);a.setPortGroup("Geometry",[o,h,l,u]);a.setPortGroup("Sides",[d,_,p,m,T,A]);let x=null,b=null,v=true,I=true;f.onChange=g.onChange=d.onChange=_.onChange=p.onChange=m.onChange=T.onChange=A.onChange=c.onChange=o.onChange=h.onChange=l.onChange=u.onChange=r;function r(){I=true}t.onLinkChanged=function(){if(!t.isLinked())E.set(null);else E.setRef(x)};t.onTriggered=function(){if(I)S();if(i.get()&&b&&v)b.render(n.getShader());s.trigger()};a.preRender=function(){S();if(b&&n)b.render(n.getShader())};function S(){if(!x)x=new CGL.Geometry("cubemesh");x.clear();let e=o.get();let t=-1*o.get();let i=h.get();let s=-1*h.get();let n=l.get();let r=-1*l.get();if(!u.get()){t=0;s=0;r=0}else{e*=.5;t*=.5;i*=.5;s*=.5;n*=.5;r*=.5}P(x,e,i,n,t,s,r);if(c.get()=="Side")C(x,1,1,1);else if(c.get()=="SideWrap")C(x,e,i,n);else R(x);x.verticesIndices=[];if(d.get())x.verticesIndices.push(8,9,10,8,10,11);if(_.get())x.verticesIndices.push(12,13,14,12,14,15);if(p.get())x.verticesIndices.push(20,21,22,20,22,23);if(m.get())x.verticesIndices.push(16,17,18,16,18,19);if(A.get())x.verticesIndices.push(4,5,6,4,6,7);if(T.get())x.verticesIndices.push(0,1,2,0,2,3);if(x.verticesIndices.length===0)v=false;else v=true;if(b)b.dispose();if(a.patch.cg)b=a.patch.cg.createMesh(x,{opId:a.id});E.setRef(x);I=false}a.onDelete=function(){if(b)b.dispose()};function C(e,t,i,s){const n=f.get();let r=1-n;let a=0+n;if(g.get()){[r,a]=[a,r]}let o=1-n;let l=0+n;e.setTexCoords([t*a,i*o,t*r,i*o,t*r,i*l,t*a,i*l,t*r,i*o,t*r,i*l,t*a,i*l,t*a,i*o,t*a,s*l,t*a,s*o,t*r,s*o,t*r,s*l,t*r,i*l,t*a,i*l,t*a,i*o,t*r,i*o,s*r,i*o,s*r,i*l,s*a,i*l,s*a,i*o,s*a,i*o,s*r,i*o,s*r,i*l,s*a,i*l])}function R(e,t,i,s,n,r,a){const o=.25;const l=1/3;const h=f.get();let u=0;if(g.get())u=1;const c=[];c.push(u+o+h,l*2-h,u+o*2-h,l*2-h,u+o*2-h,l+h,u+o+h,l+h,u+o*4-h,l*2-h,u+o*4-h,l+h,u+o*3+h,l+h,u+o*3+h,l*2-h);if(g.get())c.push(o+h,0-h,o*2-h,0-h,o*2-h,l*1+h,o+h,l*1+h,o+h,l*3+h,o+h,l*2-h,o*2-h,l*2-h,o*2-h,l*3+h);else c.push(o+h,0+h,o+h,l*1-h,o*2-h,l*1-h,o*2-h,0+h,o+h,l*3-h,o*2-h,l*3-h,o*2-h,l*2+h,o+h,l*2+h);c.push(u+o*3-h,1-l-h,u+o*3-h,1-l*2+h,u+o*2+h,1-l*2+h,u+o*2+h,1-l-h,u+o*0+h,1-l-h,u+o*1-h,1-l-h,u+o*1-h,1-l*2+h,u+o*0+h,1-l*2+h);e.setTexCoords(c)}function P(e,t,i,s,n,r,a){e.vertices=[n,r,s,t,r,s,t,i,s,n,i,s,n,r,a,n,i,a,t,i,a,t,r,a,n,i,a,n,i,s,t,i,s,t,i,a,n,r,a,t,r,a,t,r,s,n,r,s,t,r,a,t,i,a,t,i,s,t,r,s,n,r,a,n,r,s,n,i,s,n,i,a];e.vertexNormals=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0]);e.tangents=new Float32Array([0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1]);e.biTangents=new Float32Array([-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1])}};Ops.Gl.Meshes.Cube_v2.prototype=new CABLES.Op;CABLES.OPS["37b92ba4-cea5-42ae-bf28-a513ca28549c"]={f:Ops.Gl.Meshes.Cube_v2,objName:"Ops.Gl.Meshes.Cube_v2"};Ops.Gl.RenderToTexture_v3=function(){CABLES.Op.apply(this,arguments);const n=this;const e=n.attachments={};const t=n.inTrigger("render"),i=n.inSwitch("Size",["Canvas","Manual"],"Canvas"),s=n.inValueInt("texture width",512),r=n.inValueInt("texture height",512),a=n.inBool("Auto Aspect",true),o=n.inSwitch("filter",["nearest","linear","mipmap"],"linear"),l=n.inSwitch("Wrap",["Clamp","Repeat","Mirror"],"Repeat"),h=n.inSwitch("MSAA",["none","2x","4x","8x"],"none"),u=n.outTrigger("trigger"),c=n.outTexture("texture"),f=n.outTexture("textureDepth"),g=n.inDropDown("Pixel Format",CGL.Texture.PIXELFORMATS,CGL.Texture.PFORMATSTR_RGBA8UB),d=n.inValueBool("Depth",true),_=n.inValueBool("Clear",true);const p=n.patch.cgl;let m=null;let T=true;n.setPortGroup("Size",[i,s,r,a]);g.onChange=d.onChange=_.onChange=o.onChange=l.onChange=h.onChange=E;i.onChange=A;t.onTriggered=n.preRender=x;A();function A(){s.setUiAttribs({greyout:i.get()!="Manual"});r.setUiAttribs({greyout:i.get()!="Manual"});a.setUiAttribs({greyout:i.get()!="Manual"})}function E(){T=true}function x(){CGL.TextureEffect.checkOpNotInTextureEffect(n);if(!m||T){if(m)m.delete();let i=CGL.Texture.WRAP_REPEAT;if(l.get()=="Clamp")i=CGL.Texture.WRAP_CLAMP_TO_EDGE;else if(l.get()=="Mirror")i=CGL.Texture.WRAP_MIRRORED_REPEAT;let s=CGL.Texture.FILTER_NEAREST;if(o.get()=="nearest")s=CGL.Texture.FILTER_NEAREST;else if(o.get()=="linear")s=CGL.Texture.FILTER_LINEAR;else if(o.get()=="mipmap")s=CGL.Texture.FILTER_MIPMAP;if(g.get().indexOf("loat")&&o.get()=="mipmap")n.setUiError("fpmipmap","Can't use mipmap and float texture at the same time");else n.setUiError("fpmipmap",null);if(p.glVersion>=2){let e=true;let t=4;if(h.get()=="none"){t=0;e=false}if(h.get()=="2x")t=2;if(h.get()=="4x")t=4;if(h.get()=="8x")t=8;m=new CGL.Framebuffer2(p,8,8,{name:"render2texture "+n.id,pixelFormat:g.get(),multisampling:e,multisamplingSamples:t,wrap:i,filter:s,depth:d.get(),clear:_.get()})}else{m=new CGL.Framebuffer(p,8,8,{isFloatingPointTexture:false,clear:_.get()})}if(m&&m.valid){f.set(m.getTextureDepth());T=false}else{m=null;T=true}}let e=a.get();if(i.get()=="Canvas"){e=true;s.set(n.patch.cgl.checkTextureSize(p.canvasWidth));r.set(n.patch.cgl.checkTextureSize(p.canvasHeight))}if(m.getWidth()!=n.patch.cgl.checkTextureSize(s.get())||m.getHeight()!=n.patch.cgl.checkTextureSize(r.get())){m.setSize(n.patch.cgl.checkTextureSize(s.get()),n.patch.cgl.checkTextureSize(r.get()))}m.renderStart(p);p.pushViewPort(0,0,s.get(),r.get());if(e)mat4.perspective(p.pMatrix,45,s.get()/r.get(),.1,1e3);u.trigger();m.renderEnd(p);p.popViewPort();f.setRef(m.getTextureDepth());c.setRef(m.getTextureColor())}};Ops.Gl.RenderToTexture_v3.prototype=new CABLES.Op;CABLES.OPS["41eec5c7-c480-477a-be81-04c3efac8357"]={f:Ops.Gl.RenderToTexture_v3,objName:"Ops.Gl.RenderToTexture_v3"};Ops.Gl.Meshes.FullscreenRectangle_v2=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={shader_frag:"UNI sampler2D tex;\nIN vec2 texCoord;\n\nvoid main()\n{\n    outColor= texture(tex,texCoord);\n}\n\n",shader_vert:"{{MODULES_HEAD}}\n\nIN vec3 vPosition;\nUNI mat4 projMatrix;\nUNI mat4 mvMatrix;\n\nOUT vec2 texCoord;\nIN vec2 attrTexCoord;\n\nvoid main()\n{\n   vec4 pos=vec4(vPosition,  1.0);\n\n   texCoord=vec2(attrTexCoord.x,(1.0-attrTexCoord.y));\n\n   gl_Position = projMatrix * mvMatrix * pos;\n}\n"};const i=e.inTrigger("render"),s=e.inSwitch("Scale",["Stretch","Fit"],"Fit"),n=e.inValueBool("Flip Y"),r=e.inValueBool("Flip X"),a=e.inTexture("Texture"),o=e.outTrigger("trigger");const l=e.patch.cgl;let h=null;let u=new CGL.Geometry("fullscreen rectangle");let c=0,f=0,g=0,d=0;e.toWorkShouldNotBeChild("Ops.Gl.TextureEffects.ImageCompose",CABLES.OP_PORT_TYPE_FUNCTION);e.toWorkPortsNeedToBeLinked(i);r.onChange=v;n.onChange=v;i.onTriggered=b;a.onLinkChanged=A;s.onChange=x;const _=new CGL.Shader(l,"fullscreenrectangle",this);_.setModules(["MODULE_VERTEX_POSITION","MODULE_COLOR","MODULE_BEGIN_FRAG"]);_.setSource(t.shader_vert,t.shader_frag);_.fullscreenRectUniform=new CGL.Uniform(_,"t","tex",0);_.aspectUni=new CGL.Uniform(_,"f","aspectTex",0);let p=false;let m=true;let T=false;A();x();a.onChange=function(){m=true};function A(){if(!CABLES.UI)return;n.setUiAttribs({greyout:!a.isLinked()});r.setUiAttribs({greyout:!a.isLinked()});s.setUiAttribs({greyout:!a.isLinked()})}function E(){let e=a.get();if(e)p=true;else p=false}e.preRender=function(){E();_.bind();if(h)h.render(_);b()};function x(){T=s.get()=="Fit"}function b(){if(l.viewPort[2]!=g||l.viewPort[3]!=d||!h)I();if(m)E();l.pushPMatrix();mat4.identity(l.pMatrix);mat4.ortho(l.pMatrix,0,g,d,0,-10,1e3);l.pushModelMatrix();mat4.identity(l.mMatrix);l.pushViewMatrix();mat4.identity(l.vMatrix);if(T&&a.get()){const i=a.get().width/a.get().height;let e=d;let t=d*i;if(t>g){e=g*1/i;t=g}l.pushViewPort((g-t)/2,(d-e)/2,t,e)}if(p){if(a.get())l.setTexture(0,a.get().tex);h.render(_)}else{h.render(l.getShader())}l.gl.clear(l.gl.DEPTH_BUFFER_BIT);l.popPMatrix();l.popModelMatrix();l.popViewMatrix();if(T&&a.get())l.popViewPort();o.trigger()}function v(){h=null}function I(){if(l.viewPort[2]==g&&l.viewPort[3]==d&&h)return;let e=0,t=0;g=l.viewPort[2];d=l.viewPort[3];u.vertices=new Float32Array([e+g,t+d,0,e,t+d,0,e+g,t,0,e,t,0]);let i=null;if(n.get())i=new Float32Array([1,0,0,0,1,1,0,1]);else i=new Float32Array([1,1,0,1,1,0,0,0]);if(r.get()){i[0]=0;i[2]=1;i[4]=0;i[6]=1}u.setTexCoords(i);u.verticesIndices=new Uint16Array([2,1,0,3,1,2]);u.vertexNormals=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1]);u.tangents=new Float32Array([-1,0,0,-1,0,0,-1,0,0,-1,0,0]);u.biTangents==new Float32Array([0,-1,0,0,-1,0,0,-1,0,0,-1,0]);if(!h)h=new CGL.Mesh(l,u);else h.setGeom(u)}};Ops.Gl.Meshes.FullscreenRectangle_v2.prototype=new CABLES.Op;CABLES.OPS["fb70721a-eac2-4ff5-a5a2-5c59e2393972"]={f:Ops.Gl.Meshes.FullscreenRectangle_v2,objName:"Ops.Gl.Meshes.FullscreenRectangle_v2"};Ops.Gl.ImageCompose.ImageCompose_v4=function(){CABLES.Op.apply(this,arguments);const i=this;const e=i.attachments={imgcomp_frag:"IN vec2 texCoord;\nUNI vec4 bgColor;\nUNI sampler2D tex;\n#ifdef USE_UVTEX\nUNI sampler2D UVTex;\n#endif\n\nvoid main()\n{\n\n    #ifndef USE_TEX\n        outColor=bgColor;\n    #endif\n    #ifdef USE_TEX\n        #ifndef USE_UVTEX\n        outColor=texture(tex,texCoord);\n        #else\n        outColor=texture(tex,texture(UVTex,texCoord).xy);\n        #endif\n    #endif\n\n\n\n}\n"};const t=i.patch.cgl,s=i.inTrigger("Render"),n=i.inTexture("Base Texture"),r=i.inTexture("UV Texture"),a=i.inSwitch("Size",["Auto","Canvas","Manual"],"Auto"),o=i.inValueInt("Width",640),l=i.inValueInt("Height",480),h=i.inSwitch("Filter",["nearest","linear","mipmap"],"linear"),u=i.inValueSelect("Wrap",["clamp to edge","repeat","mirrored repeat"],"repeat"),c=i.inSwitch("Anisotropic",["0","1","2","4","8","16"],"0"),f=i.inDropDown("Pixel Format",CGL.Texture.PIXELFORMATS,CGL.Texture.PFORMATSTR_RGBA8UB),g=i.inValueSlider("R",0),d=i.inValueSlider("G",0),_=i.inValueSlider("B",0),p=i.inValueSlider("A",0),m=i.outTrigger("Next"),T=i.outTexture("texture_out",CGL.Texture.getEmptyTexture(t)),A=i.outNumber("Aspect Ratio"),E=i.outNumber("Texture Width"),U=i.outNumber("Texture Height");i.setPortGroup("Texture Size",[a,o,l]);i.setPortGroup("Texture Parameters",[u,c,h,f]);g.setUiAttribs({colorPick:true});i.setPortGroup("Color",[g,d,_,p]);i.toWorkPortsNeedToBeLinked(s);const w=[0,0,0,0];let x=null;let b=null;let v=true;let B=false;let I=null;let G=null;let V=null;let D=null;u.onChange=h.onChange=c.onChange=f.onChange=k;n.onLinkChanged=a.onChange=r.onChange=M;s.onTriggered=i.preRender=N;M();function S(){if(x)x.delete();if(b)b.delete();b=null;x=new CGL.TextureEffect(t,{isFloatingPointTexture:CGL.Texture.isPixelFormatFloat(f.get()),name:i.name});const e=Math.min(t.maxAnisotropic,parseFloat(c.get()));b=new CGL.Texture(t,{anisotropic:e,name:"image_compose_v2_"+i.id,pixelFormat:f.get(),filter:C(),wrap:R(),width:P(),height:O()});x.setSourceTexture(b);E.set(P());U.set(O());A.set(P()/O());T.set(CGL.Texture.getEmptyTexture(t));v=false;M()}function C(){if(h.get()=="nearest")return CGL.Texture.FILTER_NEAREST;else if(h.get()=="linear")return CGL.Texture.FILTER_LINEAR;else if(h.get()=="mipmap")return CGL.Texture.FILTER_MIPMAP}function R(){if(u.get()=="repeat")return CGL.Texture.WRAP_REPEAT;else if(u.get()=="mirrored repeat")return CGL.Texture.WRAP_MIRRORED_REPEAT;else if(u.get()=="clamp to edge")return CGL.Texture.WRAP_CLAMP_TO_EDGE}function P(){let e=0;if(n.get()&&a.get()=="Auto")e=n.get().width;else if(a.get()=="Auto"||a.get()=="Canvas")e=t.canvasWidth;else if(a.get()=="ViewPort")e=t.getViewPort()[2];else e=Math.ceil(o.get());return i.patch.cgl.checkTextureSize(e)}function O(){let e=0;if(n.get()&&a.get()=="Auto")e=n.get().height;else if(a.get()=="Auto"||a.get()=="Canvas")e=t.canvasHeight;else if(a.get()=="ViewPort")e=t.getViewPort()[3];else e=Math.ceil(l.get());return i.patch.cgl.checkTextureSize(e)}function k(){v=true}function X(){if((P()!=b.width||O()!=b.height||b.pixelFormat!=f.get()||b.filter!=C()||b.wrap!=R())&&(P()!==0&&O()!==0)){S();x.setSourceTexture(b);T.set(CGL.Texture.getEmptyTexture(t));T.set(b);y();F()}}function y(){let e=null;if(a.get()=="Manual"){e=null}else if(a.get()=="Auto"){if(n.get())e="Input Texture";else e="Canvas Size";e+=": "+P()+" x "+O()}let t=false;t=a.uiAttribs.info!=e;a.setUiAttribs({info:e});if(t)i.refreshParams()}function L(){if(I)I.toggleDefine("USE_TEX",n.isLinked());if(I)I.toggleDefine("USE_UVTEX",r.isLinked())}function M(){c.setUiAttribs({greyout:C()!=CGL.Texture.FILTER_MIPMAP});g.setUiAttribs({greyout:n.isLinked()});_.setUiAttribs({greyout:n.isLinked()});d.setUiAttribs({greyout:n.isLinked()});p.setUiAttribs({greyout:n.isLinked()});o.setUiAttribs({greyout:a.get()!="Manual"});l.setUiAttribs({greyout:a.get()!="Manual"});if(b)if(CGL.Texture.isPixelFormatFloat(f.get())&&C()==CGL.Texture.FILTER_MIPMAP)i.setUiError("fpmipmap","Don't use mipmap and 32bit at the same time, many systems do not support this.");else i.setUiError("fpmipmap",null);y();L();F()}function F(){if(b)if(n.isLinked()&&n.get()&&b.isFloatingPoint()!=n.get().isFloatingPoint())i.setUiError("textypediff","Warning: Mixing floating point and non floating point texture can result in data/precision loss",1);else i.setUiError("textypediff",null)}i.preRender=()=>{N()};function z(){if(!I){I=new CGL.Shader(t,"copytextureshader");I.setSource(I.getDefaultVertexShader(),e.imgcomp_frag);G=new CGL.Uniform(I,"t","tex",0);V=new CGL.Uniform(I,"t","UVTex",1);D=new CGL.Uniform(I,"4f","bgColor",g,d,_,p);L()}t.pushShader(I);t.currentTextureEffect.bind();if(n.get())t.setTexture(0,n.get().tex);if(r.get())t.setTexture(1,r.get().tex);t.currentTextureEffect.finish();t.popShader()}function N(){if(!x||v)S();t.pushBlend(false);X();const e=t.currentTextureEffect;t.currentTextureEffect=x;t.currentTextureEffect.imgCompVer=3;t.currentTextureEffect.width=o.get();t.currentTextureEffect.height=l.get();x.setSourceTexture(b);x.startEffect(n.get()||CGL.Texture.getEmptyTexture(t,B),true);z();m.trigger();t.pushViewPort(0,0,o.get(),l.get());x.endEffect();T.setRef(x.getCurrentSourceTexture());t.popViewPort();t.popBlend();t.currentTextureEffect=e}};Ops.Gl.ImageCompose.ImageCompose_v4.prototype=new CABLES.Op;CABLES.OPS["17212e2b-d692-464c-8f8d-2d511dd3410a"]={f:Ops.Gl.ImageCompose.ImageCompose_v4,objName:"Ops.Gl.ImageCompose.ImageCompose_v4"};Ops.Gl.ImageCompose.DepthTextureFocus_v2=function(){CABLES.Op.apply(this,arguments);const t=this;const e=t.attachments={depth_focus_frag:"IN vec2 texCoord;\nUNI sampler2D image;\nUNI float nearPlane;\nUNI float farPlane;\nUNI float focus; // center\nUNI float width;\n\n\nvoid main()\n{\n    float depthFromTexture = texture(image,texCoord).r;\n\n    float z_viewSpace = (nearPlane * farPlane) / (farPlane - depthFromTexture * (farPlane - nearPlane));\n    z_viewSpace = abs(z_viewSpace - (focus));\n    z_viewSpace = smoothstep(0.0, width, z_viewSpace);\n\n    #ifndef INVERT\n        z_viewSpace = 1. - z_viewSpace;\n    #endif\n\n    outColor = vec4(vec3(z_viewSpace), 1.);\n}"};const i=t.inTrigger("render");const s=t.inTexture("Depth Texture");const n=t.inFloat("Focus",.5);const r=t.inFloat("Width",.2);const a=t.inBool("Invert",false);const o=t.inFloat("nearplane",.1);const l=t.inFloat("farplane",100);const h=t.outTrigger("trigger");t.setPortGroup("Frustum",[l,o]);t.setPortGroup("Focus Settings",[a,n,r]);const u=t.patch.cgl;const c=new CGL.Shader(u,t.name,t);const f=e.depth_focus_frag||"";c.setSource(c.getDefaultVertexShader(),f);const g=new CGL.Uniform(c,"t","depthTexture",0);const d=new CGL.Uniform(c,"f","farPlane",l);const _=new CGL.Uniform(c,"f","nearPlane",o);const p=new CGL.Uniform(c,"f","focus",n);const m=new CGL.Uniform(c,"f","width",r);const T=new CGL.Uniform(c,"f","aspectRatio",0);a.onChange=function(){if(a.get())c.define("INVERT");else c.removeDefine("INVERT")};i.onTriggered=function(){if(!CGL.TextureEffect.checkOpInEffect(t))return;if(s.get()&&s.get().tex){const e=u.currentTextureEffect.getCurrentSourceTexture().height/u.currentTextureEffect.getCurrentSourceTexture().width;T.set(e);u.pushShader(c);u.currentTextureEffect.bind();u.setTexture(0,s.get().tex);u.currentTextureEffect.finish();u.popShader()}h.trigger()}};Ops.Gl.ImageCompose.DepthTextureFocus_v2.prototype=new CABLES.Op;CABLES.OPS["f84ac22e-664e-4ff1-b23f-539ac1f5c67e"]={f:Ops.Gl.ImageCompose.DepthTextureFocus_v2,objName:"Ops.Gl.ImageCompose.DepthTextureFocus_v2"};Ops.Gl.ImageCompose.DrawImage_v3=function(){CABLES.Op.apply(this,arguments);const s=this;const e=s.attachments={drawimage_frag:"#ifdef HAS_TEXTURES\n    IN vec2 texCoord;\n    UNI sampler2D tex;\n    UNI sampler2D image;\n#endif\n\n#ifdef TEX_TRANSFORM\n    IN mat3 transform;\n#endif\n// UNI float rotate;\n\n{{CGL.BLENDMODES}}\n\n#ifdef HAS_TEXTUREALPHA\n   UNI sampler2D imageAlpha;\n#endif\n\nUNI float amount;\n\n#ifdef ASPECT_RATIO\n    UNI float aspectTex;\n    UNI float aspectPos;\n#endif\n\nvoid main()\n{\n    vec4 blendRGBA=vec4(0.0,0.0,0.0,1.0);\n\n    #ifdef HAS_TEXTURES\n        vec2 tc=texCoord;\n\n        #ifdef TEX_FLIP_X\n            tc.x=1.0-tc.x;\n        #endif\n        #ifdef TEX_FLIP_Y\n            tc.y=1.0-tc.y;\n        #endif\n\n        #ifdef ASPECT_RATIO\n            #ifdef ASPECT_AXIS_X\n                tc.y=(1.0-aspectPos)-(((1.0-aspectPos)-tc.y)*aspectTex);\n            #endif\n            #ifdef ASPECT_AXIS_Y\n                tc.x=(1.0-aspectPos)-(((1.0-aspectPos)-tc.x)/aspectTex);\n            #endif\n        #endif\n\n        #ifdef TEX_TRANSFORM\n            vec3 coordinates=vec3(tc.x, tc.y,1.0);\n            tc=(transform * coordinates ).xy;\n        #endif\n\n        blendRGBA=texture(image,tc);\n\n        vec3 blend=blendRGBA.rgb;\n        vec4 baseRGBA=texture(tex,texCoord);\n        vec3 base=baseRGBA.rgb;\n\n\n        #ifdef PREMUL\n            blend.rgb = (blend.rgb) + (base.rgb * (1.0 - blendRGBA.a));\n        #endif\n\n        vec3 colNew=_blend(base,blend);\n\n\n\n\n        #ifdef REMOVE_ALPHA_SRC\n            blendRGBA.a=1.0;\n        #endif\n\n        #ifdef HAS_TEXTUREALPHA\n            vec4 colImgAlpha=texture(imageAlpha,tc);\n            float colImgAlphaAlpha=colImgAlpha.a;\n\n            #ifdef ALPHA_FROM_LUMINANCE\n                vec3 gray = vec3(dot(vec3(0.2126,0.7152,0.0722), colImgAlpha.rgb ));\n                colImgAlphaAlpha=(gray.r+gray.g+gray.b)/3.0;\n            #endif\n\n            #ifdef ALPHA_FROM_INV_UMINANCE\n                vec3 gray = vec3(dot(vec3(0.2126,0.7152,0.0722), colImgAlpha.rgb ));\n                colImgAlphaAlpha=1.0-(gray.r+gray.g+gray.b)/3.0;\n            #endif\n\n            #ifdef INVERT_ALPHA\n                colImgAlphaAlpha=clamp(colImgAlphaAlpha,0.0,1.0);\n                colImgAlphaAlpha=1.0-colImgAlphaAlpha;\n            #endif\n\n            blendRGBA.a=colImgAlphaAlpha*blendRGBA.a;\n        #endif\n    #endif\n\n    float am=amount;\n\n    #ifdef CLIP_REPEAT\n        if(tc.y>1.0 || tc.y<0.0 || tc.x>1.0 || tc.x<0.0)\n        {\n            // colNew.rgb=vec3(0.0);\n            am=0.0;\n        }\n    #endif\n\n    #ifdef ASPECT_RATIO\n        #ifdef ASPECT_CROP\n            if(tc.y>1.0 || tc.y<0.0 || tc.x>1.0 || tc.x<0.0)\n            {\n                colNew.rgb=base.rgb;\n                am=0.0;\n            }\n\n        #endif\n    #endif\n\n\n\n    #ifndef PREMUL\n        blendRGBA.rgb=mix(colNew,base,1.0-(am*blendRGBA.a));\n        blendRGBA.a=clamp(baseRGBA.a+(blendRGBA.a*am),0.,1.);\n    #endif\n\n    #ifdef PREMUL\n        // premultiply\n        // blendRGBA.rgb = (blendRGBA.rgb) + (baseRGBA.rgb * (1.0 - blendRGBA.a));\n        blendRGBA=vec4(\n            mix(colNew.rgb,base,1.0-(am*blendRGBA.a)),\n            blendRGBA.a*am+baseRGBA.a\n            );\n    #endif\n\n    #ifdef ALPHA_MASK\n    blendRGBA.a=baseRGBA.a;\n    #endif\n\n    outColor=blendRGBA;\n}\n\n\n\n\n\n\n\n",drawimage_vert:"IN vec3 vPosition;\nIN vec2 attrTexCoord;\nIN vec3 attrVertNormal;\n\nUNI mat4 projMatrix;\nUNI mat4 mvMatrix;\n\nOUT vec2 texCoord;\n// OUT vec3 norm;\n\n#ifdef TEX_TRANSFORM\n    UNI float posX;\n    UNI float posY;\n    UNI float scaleX;\n    UNI float scaleY;\n    UNI float rotate;\n    OUT mat3 transform;\n#endif\n\nvoid main()\n{\n   texCoord=attrTexCoord;\n//   norm=attrVertNormal;\n\n   #ifdef TEX_TRANSFORM\n        vec3 coordinates=vec3(attrTexCoord.x, attrTexCoord.y,1.0);\n        float angle = radians( rotate );\n        vec2 scale= vec2(scaleX,scaleY);\n        vec2 translate= vec2(posX,posY);\n\n        transform = mat3(   scale.x * cos( angle ), scale.x * sin( angle ), 0.0,\n            - scale.y * sin( angle ), scale.y * cos( angle ), 0.0,\n            - 0.5 * scale.x * cos( angle ) + 0.5 * scale.y * sin( angle ) - 0.5 * translate.x*2.0 + 0.5,  - 0.5 * scale.x * sin( angle ) - 0.5 * scale.y * cos( angle ) - 0.5 * translate.y*2.0 + 0.5, 1.0);\n   #endif\n\n   gl_Position = projMatrix * mvMatrix * vec4(vPosition,  1.0);\n}\n"};const t=s.inTrigger("render"),i=CGL.TextureEffect.AddBlendSelect(s,"blendMode"),n=s.inValueSlider("amount",1),r=s.inTexture("Image"),a=s.inValueBool("Premultiplied",false),o=s.inValueBool("Alpha Mask",false),l=s.inValueBool("removeAlphaSrc",false),h=s.inTexture("Mask"),u=s.inValueSelect("Mask Src",["alpha channel","luminance","luminance inv"],"luminance"),c=s.inValueBool("Invert alpha channel"),f=s.inValueBool("Aspect Ratio",false),g=s.inValueSelect("Stretch Axis",["X","Y"],"X"),d=s.inValueSlider("Position",0),_=s.inValueBool("Crop",false),p=s.outTrigger("trigger");i.set("normal");const m=s.patch.cgl;const T=new CGL.Shader(m,"drawimage");h.onLinkChanged=A;s.setPortGroup("Mask",[h,u,c]);s.setPortGroup("Aspect Ratio",[f,d,_,g]);function A(){if(h.isLinked()){l.setUiAttribs({greyout:true});u.setUiAttribs({greyout:false});c.setUiAttribs({greyout:false})}else{l.setUiAttribs({greyout:false});u.setUiAttribs({greyout:true});c.setUiAttribs({greyout:true})}}s.toWorkPortsNeedToBeLinked(r);T.setSource(e.drawimage_vert,e.drawimage_frag);const E=new CGL.Uniform(T,"t","tex",0),U=new CGL.Uniform(T,"t","image",1),w=new CGL.Uniform(T,"t","imageAlpha",2),x=new CGL.Uniform(T,"f","aspectTex",1),B=new CGL.Uniform(T,"f","aspectPos",d);f.onChange=_.onChange=g.onChange=b;function b(){T.removeDefine("ASPECT_AXIS_X");T.removeDefine("ASPECT_AXIS_Y");T.removeDefine("ASPECT_CROP");d.setUiAttribs({greyout:!f.get()});_.setUiAttribs({greyout:!f.get()});g.setUiAttribs({greyout:!f.get()});if(f.get()){T.define("ASPECT_RATIO");if(_.get())T.define("ASPECT_CROP");if(g.get()=="X")T.define("ASPECT_AXIS_X");if(g.get()=="Y")T.define("ASPECT_AXIS_Y")}else{T.removeDefine("ASPECT_RATIO");if(_.get())T.define("ASPECT_CROP");if(g.get()=="X")T.define("ASPECT_AXIS_X");if(g.get()=="Y")T.define("ASPECT_AXIS_Y")}}const v=s.inValueBool("flip x");const I=s.inValueBool("flip y");let S=s.inValueBool("Transform");let C=s.inValueSlider("Scale X",1);let R=s.inValueSlider("Scale Y",1);let P=s.inValue("Position X",0);let O=s.inValue("Position Y",0);let y=s.inValue("Rotation",0);const L=s.inValueBool("Clip Repeat",false);const G=new CGL.Uniform(T,"f","scaleX",C);const V=new CGL.Uniform(T,"f","scaleY",R);const D=new CGL.Uniform(T,"f","posX",P);const k=new CGL.Uniform(T,"f","posY",O);const X=new CGL.Uniform(T,"f","rotate",y);S.onChange=M;function M(){T.toggleDefine("TEX_TRANSFORM",S.get());C.setUiAttribs({greyout:!S.get()});R.setUiAttribs({greyout:!S.get()});P.setUiAttribs({greyout:!S.get()});O.setUiAttribs({greyout:!S.get()});y.setUiAttribs({greyout:!S.get()})}CGL.TextureEffect.setupBlending(s,T,i,n);const z=new CGL.Uniform(T,"f","amount",n);t.onTriggered=N;L.onChange=h.onChange=a.onChange=o.onChange=c.onChange=I.onChange=v.onChange=l.onChange=u.onChange=F;M();A();b();F();function F(){T.toggleDefine("REMOVE_ALPHA_SRC",l.get());T.toggleDefine("ALPHA_MASK",o.get());T.toggleDefine("CLIP_REPEAT",L.get());T.toggleDefine("HAS_TEXTUREALPHA",h.get()&&h.get().tex);T.toggleDefine("TEX_FLIP_X",v.get());T.toggleDefine("TEX_FLIP_Y",I.get());T.toggleDefine("INVERT_ALPHA",c.get());T.toggleDefine("ALPHA_FROM_LUMINANCE",u.get()=="luminance");T.toggleDefine("ALPHA_FROM_INV_UMINANCE",u.get()=="luminance_inv");T.toggleDefine("PREMUL",a.get())}function N(){if(!CGL.TextureEffect.checkOpInEffect(s))return;const e=r.get();if(e&&e.tex&&n.get()>0){m.pushShader(T);m.currentTextureEffect.bind();const t=m.currentTextureEffect.getCurrentSourceTexture();m.setTexture(0,t.tex);const i=1/(m.currentTextureEffect.getWidth()/m.currentTextureEffect.getHeight())*(e.width/e.height);x.setValue(i);m.setTexture(1,e.tex);if(h.get()&&h.get().tex){m.setTexture(2,h.get().tex)}m.pushBlendMode(CGL.BLEND_NONE,true);m.currentTextureEffect.finish();m.popBlendMode();m.popShader()}p.trigger()}};Ops.Gl.ImageCompose.DrawImage_v3.prototype=new CABLES.Op;CABLES.OPS["8f6b2f15-fcb0-4597-90c0-e5173f2969fe"]={f:Ops.Gl.ImageCompose.DrawImage_v3,objName:"Ops.Gl.ImageCompose.DrawImage_v3"};Ops.Gl.ImageCompose.Blur=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={blur_frag:"IN vec2 texCoord;\nUNI sampler2D tex;\nUNI float dirX;\nUNI float dirY;\nUNI float amount;\n\n#ifdef HAS_MASK\n    UNI sampler2D imageMask;\n#endif\n\nfloat random(vec3 scale, float seed)\n{\n    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\n\nvoid main()\n{\n    vec4 color = vec4(0.0);\n    float total = 0.0;\n\n    float am=amount;\n    #ifdef HAS_MASK\n        am=amount*texture(imageMask,texCoord).r;\n        if(am<=0.02)\n        {\n            outColor=texture(tex, texCoord);\n            return;\n        }\n    #endif\n\n    vec2 delta=vec2(dirX*am*0.01,dirY*am*0.01);\n\n\n    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n\n    #ifdef MOBILE\n        offset = 0.1;\n    #endif\n\n    #if defined(FASTBLUR) && !defined(MOBILE)\n        const float range=5.0;\n    #else\n        const float range=20.0;\n    #endif\n\n    for (float t = -range; t <= range; t+=1.0)\n    {\n        float percent = (t + offset - 0.5) / range;\n        float weight = 1.0 - abs(percent);\n        vec4 smpl = texture(tex, texCoord + delta * percent);\n\n        smpl.rgb *= smpl.a;\n\n        color += smpl * weight;\n        total += weight;\n    }\n\n    outColor= color / total;\n\n    outColor.rgb /= outColor.a + 0.00001;\n\n\n\n}\n"};const i=e.inTrigger("render");const s=e.outTrigger("trigger");const n=e.inValueFloat("amount");const r=e.inSwitch("direction",["both","vertical","horizontal"],"both");const a=e.inValueBool("Fast",true);const o=e.patch.cgl;n.set(10);let l=new CGL.Shader(o,"blur");l.define("FASTBLUR");a.onChange=function(){if(a.get())l.define("FASTBLUR");else l.removeDefine("FASTBLUR")};l.setSource(l.getDefaultVertexShader(),t.blur_frag);let h=new CGL.Uniform(l,"t","tex",0);let u=new CGL.Uniform(l,"f","dirX",0);let c=new CGL.Uniform(l,"f","dirY",0);let f=new CGL.Uniform(l,"f","width",0);let g=new CGL.Uniform(l,"f","height",0);let d=new CGL.Uniform(l,"f","amount",n.get());n.onChange=function(){d.setValue(n.get())};let _=new CGL.Uniform(l,"t","imageMask",1);let p=false;function m(){if(o.currentTextureEffect.getCurrentSourceTexture().width==o.canvasWidth&&o.currentTextureEffect.getCurrentSourceTexture().height==o.canvasHeight){e.setUiError("warning","Full screen blurs are slow! Try reducing the resolution to 1/2 or a 1/4",0)}else{e.setUiError("warning",null)}}let T=0;r.onChange=function(){if(r.get()=="both")T=0;if(r.get()=="horizontal")T=1;if(r.get()=="vertical")T=2};let A=e.inTexture("mask");A.onChange=function(){if(A.get()&&A.get().tex)l.define("HAS_MASK");else l.removeDefine("HAS_MASK")};i.onTriggered=function(){if(!CGL.TextureEffect.checkOpInEffect(e))return;o.pushShader(l);f.setValue(o.currentTextureEffect.getCurrentSourceTexture().width);g.setValue(o.currentTextureEffect.getCurrentSourceTexture().height);m();if(T===0||T==2){o.currentTextureEffect.bind();o.setTexture(0,o.currentTextureEffect.getCurrentSourceTexture().tex);if(A.get()&&A.get().tex){o.setTexture(1,A.get().tex)}u.setValue(0);c.setValue(1);o.currentTextureEffect.finish()}if(T===0||T==1){o.currentTextureEffect.bind();o.setTexture(0,o.currentTextureEffect.getCurrentSourceTexture().tex);if(A.get()&&A.get().tex){o.setTexture(1,A.get().tex)}u.setValue(1);c.setValue(0);o.currentTextureEffect.finish()}o.popShader();s.trigger()}};Ops.Gl.ImageCompose.Blur.prototype=new CABLES.Op;CABLES.OPS["54f26f53-f637-44c1-9bfb-a2f2b722e998"]={f:Ops.Gl.ImageCompose.Blur,objName:"Ops.Gl.ImageCompose.Blur"};Ops.Color.ColorValue=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const i=e.inValueSlider("r",Math.random());const s=e.inValueSlider("g",Math.random());const n=e.inValueSlider("b",Math.random());i.setUiAttribs({colorPick:true});const r=e.inValueSlider("a",1);const a=e.outNumber("outr");const o=e.outNumber("outg");const l=e.outNumber("outb");const h=e.outNumber("outa");const u=e.outNumber("Hex","000000");const c=e.outArray("Array");i.onChange=s.onChange=n.onChange=r.onChange=g;function f(e){let t=Math.round(e*255).toString(16);if(t.length===1){t="0"+t}return t.toUpperCase()}function g(){a.set(i.get());o.set(s.get());l.set(n.get());h.set(r.get());let e=f(i.get())+f(s.get())+f(n.get());u.set(e);c.set([i.get(),s.get(),n.get(),r.get()])}g()};Ops.Color.ColorValue.prototype=new CABLES.Op;CABLES.OPS["7caa37c8-f2a7-49f2-a29c-96af362abca0"]={f:Ops.Color.ColorValue,objName:"Ops.Color.ColorValue"};Ops.Gl.MeshInstancer_v4=function(){CABLES.Op.apply(this,arguments);const _=this;const e=_.attachments={billboard_vert:"\n#ifdef BILLBOARDING\n\n    modelViewMatrix[0][0] = 1.0;\n    modelViewMatrix[0][1] = 0.0;\n    modelViewMatrix[0][2] = 0.0;\n\n    #ifndef BILLBOARDING_CYLINDRIC\n        modelViewMatrix[1][0] = 0.0;\n        modelViewMatrix[1][1] = 1.0;\n        modelViewMatrix[1][2] = 0.0;\n    #endif\n\n    modelViewMatrix[2][0] = 0.0;\n    modelViewMatrix[2][1] = 0.0;\n    modelViewMatrix[2][2] = 1.0;\n\n#endif",instancer_body_frag:"#define INSTANCING\n#ifdef COLORIZE_INSTANCES\n    #ifdef BLEND_MODE_MULTIPLY\n        col.rgb *= frag_instColor.rgb;\n        col.a *= frag_instColor.a;\n    #endif\n\n    #ifdef BLEND_MODE_ADD\n        col.rgb += frag_instColor.rgb;\n        col.a += frag_instColor.a;\n    #endif\n\n    #ifdef BLEND_MODE_NONE\n        col.rgb = frag_instColor.rgb;\n        col.a = frag_instColor.a;\n    #endif\n#endif\n",instancer_body_vert:"\n\n#ifdef HAS_TEXCOORDS\ntexCoord=(texCoord*instTexCoords.zw)+instTexCoords.xy;\n#endif\n\nmMatrix*=instMat;\npos.xyz*=MOD_scale;\n\n#ifdef HAS_COLORS\nfrag_instColor=instColor;\n#endif\n#ifndef HAS_COLORS\nfrag_instColor=vec4(1.0);\n#endif\n\n\nfrag_instIndex=instanceIndex;\n\n",instancer_head_frag:"IN vec4 frag_instColor;\n\n#ifdef WEBGL2\n    flat IN float frag_instIndex;\n#endif\n#ifdef WEBGL1\n    IN float frag_instIndex;\n#endif\n",instancer_head_vert:"\nIN vec4 instColor;\nIN mat4 instMat;\nIN vec4 instTexCoords;\nIN float instanceIndex;\nOUT mat4 instModelMat;\nOUT vec4 frag_instColor;\n\n#ifdef WEBGL2\n    flat OUT float frag_instIndex;\n#endif\n#ifdef WEBGL1\n    OUT float frag_instIndex;\n#endif\n\n\n\n#define INSTANCING\n\n"};const t=_.inTrigger("exe"),i=_.inObject("geom",null,"geometry"),s=_.inValue("Scale",1),n=_.inValueBool("Limit Instances",false),r=_.inValueInt("Limit",100),p=_.inArray("positions",3),m=_.inArray("Scale Array",3),T=_.inArray("Rotations",3),A=_.inSwitch("Rotation Type",["Euler","Quaternions","Normals"],"Euler"),a=_.inSwitch("Billboarding",["Off","Spherical","Cylindrical"],"Off"),o=_.inSwitch("Material blend mode",["Multiply","Add","Normal"],"Multiply"),E=_.inArray("Colors",4),x=_.inArray("TexCoords",4),l=_.outTrigger("Trigger Out"),h=_.outNumber("Num");_.setPortGroup("Limit Number of Instances",[r,n]);_.setPortGroup("Parameters",[m,T,p,A]);_.toWorkPortsNeedToBeLinked(i);_.toWorkPortsNeedToBeLinked(t);i.ignoreValueSerialize=true;const u=_.patch.cgl;const b=mat4.create();let v=new Float32Array(1),I=new Float32Array(1),S=new Float32Array(1),C=null,R=true,P=0,O=true,y=true,L=true;const M=new CGL.ShaderModifier(u,_.name,{opId:_.id});M.addModule({name:"MODULE_VERTEX_POSITION",title:_.name,priority:-2,srcHeadVert:e.instancer_head_vert,srcBodyVert:e.instancer_body_vert});M.addModule({name:"MODULE_VERTEX_MOVELVIEW",title:_.name+"_billboard",srcBodyVert:e.billboard_vert});M.addModule({name:"MODULE_COLOR",priority:-2,title:_.name,srcHeadFrag:e.instancer_head_frag,srcBodyFrag:e.instancer_body_frag});M.addUniformVert("f","MOD_scale",s);let F=true;o.onChange=()=>{F=true};n.onChange=d;t.onTriggered=U;t.onLinkChanged=function(){if(!t.isLinked())f()};d();T.onChange=m.onChange=p.onChange=A.onChange=function(){L=true;R=true};a.onChange=x.onChange=function(){y=true;R=true;F=true};E.onChange=function(){O=true;R=true;F=true};function c(){O=true,L=true;R=true}function N(){M.toggleDefine("BILLBOARDING",a.get()!="Off");M.toggleDefine("BILLBOARDING_CYLINDRIC",a.get()=="Cylindrical");M.toggleDefine("COLORIZE_INSTANCES",E.get());M.toggleDefine("TEXCOORDS_INSTANCES",x.get());M.toggleDefine("BLEND_MODE_MULTIPLY",o.get()==="Multiply");M.toggleDefine("BLEND_MODE_ADD",o.get()==="Add");M.toggleDefine("BLEND_MODE_NONE",o.get()==="Normal");F=false}i.onChange=function(){if(C)C.dispose();if(!i.get()){C=null;return}C=new CGL.Mesh(u,i.get());c()};function f(){}function g(){if(!C)return;let e=p.get();if(!e)e=[0,0,0];P=Math.floor(e.length/3);if(F)N();const i=E.get();const s=x.get();const n=m.get();const r=A.get()=="Quaternions";const a=A.get()=="Euler";const o=A.get()=="Normals";let t=3;if(r)t=4;T.setUiAttribs({stride:t});if(n&&n.length!=e.length)_.setUiError("lengthScales","Scales array has wrong length");else _.setUiError("lengthScales",null);if(v.length!=P*16)v=new Float32Array(P*16);if(I.length!=P*4){O=true;I=new Float32Array(P*4)}if(S.length!=P*4){y=true;S=new Float32Array(P*4)}const l=T.get();for(let t=0;t<P;t++){mat4.identity(b);mat4.translate(b,b,[e[t*3],e[t*3+1],e[t*3+2]]);if(l){if(r){const h=mat4.create();const u=[l[t*4+0],l[t*4+1],l[t*4+2],l[t*4+3]];quat.normalize(u,u);mat4.fromQuat(h,u);mat4.mul(b,b,h)}else if(o){const c=[l[t*3+0],l[t*3+1],l[t*3+2]];const f=[1,0,0];const g=vec3.create();vec3.cross(g,f,c);vec3.normalize(g,g);const d=Math.acos(vec3.dot(f,c));const u=quat.create();quat.setAxisAngle(u,g,d);quat.normalize(u,u);const h=mat4.create();mat4.fromQuat(h,u);mat4.mul(b,b,h)}if(a){mat4.rotateX(b,b,l[t*3+0]*CGL.DEG2RAD);mat4.rotateY(b,b,l[t*3+1]*CGL.DEG2RAD);mat4.rotateZ(b,b,l[t*3+2]*CGL.DEG2RAD)}}if(O&&i){I[t*4+0]=i[t*4+0];I[t*4+1]=i[t*4+1];I[t*4+2]=i[t*4+2];I[t*4+3]=i[t*4+3]}if(y&&s){S[t*4+0]=s[t*4+0];S[t*4+1]=s[t*4+1];S[t*4+2]=s[t*4+2];S[t*4+3]=s[t*4+3]}if(n&&n.length>t)mat4.scale(b,b,[n[t*3],n[t*3+1],n[t*3+2]]);else mat4.scale(b,b,[1,1,1]);for(let e=0;e<16;e++)v[t*16+e]=b[e]}C.setNumInstances(P);if(L)C.addAttribute("instMat",v,16);if(O)C.addAttribute("instColor",I,4,{instanced:true});if(y)C.addAttribute("instTexCoords",S,4,{instanced:true});M.toggleDefine("HAS_TEXCOORDS",s);M.toggleDefine("HAS_COLORS",i);O=false;R=false}function d(){r.setUiAttribs({greyout:!n.get()})}function U(){if(!C)return;if(R)g();M.bind();if(n.get())C.setNumInstances(Math.min(P,r.get()));else C.setNumInstances(P);h.set(C.numInstances);if(C.numInstances>0)C.render(u.getShader());l.trigger();M.unbind()}};Ops.Gl.MeshInstancer_v4.prototype=new CABLES.Op;CABLES.OPS["cb58f461-a0bd-4159-a3cb-5e396198b4e9"]={f:Ops.Gl.MeshInstancer_v4,objName:"Ops.Gl.MeshInstancer_v4"};Ops.Array.PointArray.PointsCube=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const u=e.inValueInt("num x",5),c=e.inValueInt("num y",5),f=e.inValueInt("num z",5),g=e.inValue("mul",1),d=e.inValueBool("center",true),_=e.outArray("Array out"),p=e.outNumber("Total points"),m=e.outNumber("Array length");let T=[];_.set(T);u.onChange=c.onChange=f.onChange=g.onChange=d.onChange=i;function i(){T.length=0;let e=0;let t=0;let i=0;if(d.get()){e=(u.get()-1)*g.get()/2;t=(c.get()-1)*g.get()/2;i=(f.get()-1)*g.get()/2}let s=0;let n=0;let r=0;let a=g.get();for(var o=0;o<f.get();o++){r=o*a-i;for(var l=0;l<c.get();l++){n=l*a-t;for(var h=0;h<u.get();h++){s=h*a-e;T.push(s);T.push(n);T.push(r)}}}p.set(h*l*o);_.set(null);_.set(T);m.set(T.length)}i()};Ops.Array.PointArray.PointsCube.prototype=new CABLES.Op;CABLES.OPS["6030193b-089c-4565-a7b8-d837501ded52"]={f:Ops.Array.PointArray.PointsCube,objName:"Ops.Array.PointArray.PointsCube"};Ops.Gl.Perspective=function(){CABLES.Op.apply(this,arguments);const t=this;const e=t.attachments={};const i=t.inTrigger("render"),s=t.inSwitch("Axis",["Vertical","Horizontal"],"Vertical"),n=t.inValueFloat("fov y",45),r=t.inValueFloat("frustum near",.1),a=t.inValueFloat("frustum far",20),o=t.inValueBool("Auto Aspect Ratio",true),l=t.inValue("Aspect Ratio"),h=t.outTrigger("trigger"),u=t.outNumber("Aspect");n.onChange=a.onChange=r.onChange=g;n.setUiAttribs({title:"FOV Degrees"});t.setPortGroup("Field of View",[n]);t.setPortGroup("Frustrum",[r,a]);let c=0;let f=0;g();s.onChange=()=>{f=0;if(s.get()=="Horizontal")f=1};i.onTriggered=function(){const e=t.patch.cg;if(!e)return;c=e.getViewPort()[2]/e.getViewPort()[3];if(!o.get())c=l.get();u.set(c);e.pushPMatrix();if(f==0)mat4.perspective(e.pMatrix,n.get()*.0174533,c,r.get(),a.get());else d(e.pMatrix,n.get()*.0174533,c,r.get(),a.get());h.trigger();e.popPMatrix()};function g(){t.patch.cgl.frameStore.perspective={fovy:n.get(),zFar:a.get(),zNear:r.get()}}function d(e,t,i,s,n){let r;let a=1/t*2;e[0]=a;e[1]=0;e[2]=0;e[3]=0;e[4]=0;e[5]=a/(1/i);e[6]=0;e[7]=0;e[8]=0;e[9]=0;e[11]=-1;e[12]=0;e[13]=0;e[15]=0;if(n!=null&&n!==Infinity){r=1/(s-n);e[10]=(n+s)*r;e[14]=2*n*s*r}else{e[10]=-1;e[14]=-2*s}return e}};Ops.Gl.Perspective.prototype=new CABLES.Op;CABLES.OPS["7a78e163-d28c-4f70-a6d0-6d952da79f50"]={f:Ops.Gl.Perspective,objName:"Ops.Gl.Perspective"};Ops.Gl.Matrix.Transform=function(){CABLES.Op.apply(this,arguments);const i=this;const e=i.attachments={};const t=i.inTrigger("render"),s=i.inValue("posX",0),n=i.inValue("posY",0),r=i.inValue("posZ",0),a=i.inValue("scale",1),o=i.inValue("rotX",0),l=i.inValue("rotY",0),h=i.inValue("rotZ",0),u=i.outTrigger("trigger");i.setPortGroup("Rotation",[o,l,h]);i.setPortGroup("Position",[s,n,r]);i.setPortGroup("Scale",[a]);i.setUiAxisPorts(s,n,r);i.toWorkPortsNeedToBeLinked(t,u);const c=vec3.create();const f=vec3.create();const g=mat4.create();mat4.identity(g);let d=false,_=false,p=true,m=true,T=true;o.onChange=l.onChange=h.onChange=I;s.onChange=n.onChange=r.onChange=b;a.onChange=v;t.onTriggered=function(){let e=false;if(p){E();e=true}if(m){x();e=true}if(T)e=true;if(e)A();const t=i.patch.cg||i.patch.cgl;t.pushModelMatrix();mat4.multiply(t.mMatrix,t.mMatrix,g);u.trigger();t.popModelMatrix();if(CABLES.UI){if(!s.isLinked()&&!n.isLinked()&&!r.isLinked()){gui.setTransform(i.id,s.get(),n.get(),r.get());if(i.isCurrentUiOp())gui.setTransformGizmo({posX:s,posY:n,posZ:r})}}};function A(){mat4.identity(g);if(_)mat4.translate(g,g,c);if(o.get()!==0)mat4.rotateX(g,g,o.get()*CGL.DEG2RAD);if(l.get()!==0)mat4.rotateY(g,g,l.get()*CGL.DEG2RAD);if(h.get()!==0)mat4.rotateZ(g,g,h.get()*CGL.DEG2RAD);if(d)mat4.scale(g,g,f);T=false}function E(){_=false;if(s.get()!==0||n.get()!==0||r.get()!==0)_=true;vec3.set(c,s.get(),n.get(),r.get());p=false}function x(){d=true;vec3.set(f,a.get(),a.get(),a.get());m=false}function b(){p=true}function v(){m=true}function I(){T=true}A()};Ops.Gl.Matrix.Transform.prototype=new CABLES.Op;CABLES.OPS["650baeb1-db2d-4781-9af6-ab4e9d4277be"]={f:Ops.Gl.Matrix.Transform,objName:"Ops.Gl.Matrix.Transform"};Ops.Gl.ImageCompose.Vignette_v3=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={vignette_frag:"IN vec2 texCoord;\nUNI sampler2D tex;\nUNI float lensRadius1;\nUNI float aspect;\nUNI float amount;\nUNI float strength;\nUNI float sharp;\n\nUNI vec3 vcol;\n\n{{CGL.BLENDMODES3}}\n\nvoid main()\n{\n    vec4 base=texture(tex,texCoord);\n    vec4 vvcol=vec4(vcol,1.0);\n    vec4 col=texture(tex,texCoord);\n    vec2 tcPos=vec2(texCoord.x,(texCoord.y-0.5)*aspect+0.5);\n    float dist = distance(tcPos, vec2(0.5,0.5));\n    float am = (1.0-smoothstep( (lensRadius1+0.5), (lensRadius1*0.99+0.5)*sharp, dist));\n\n    col=mix(col,vvcol,am*strength);\n\n    #ifndef ALPHA\n        outColor=cgl_blendPixel(base,col,amount);\n    #endif\n\n    #ifdef ALPHA\n        outColor=vec4(base.rgb,base.a*(1.0-am*strength));\n    #endif\n}\n"};const i=e.inTrigger("Render"),s=CGL.TextureEffect.AddBlendSelect(e,"Blend Mode","normal"),n=CGL.TextureEffect.AddBlendAlphaMask(e),r=e.inValueSlider("Amount",1),a=e.outTrigger("Trigger"),o=e.inValueSlider("Strength",1),l=e.inValueSlider("Radius",.3),h=e.inValueSlider("Sharp",.25),u=e.inValue("Aspect",1),c=e.inValueSlider("r",0),f=e.inValueSlider("g",0),g=e.inValueSlider("b",0),d=e.inBool("Alpha",false);c.setUiAttribs({colorPick:true});const _=e.patch.cgl;const p=new CGL.Shader(_,"vignette");p.setSource(p.getDefaultVertexShader(),t.vignette_frag);const m=new CGL.Uniform(p,"t","tex",0),T=new CGL.Uniform(p,"f","amount",r),A=new CGL.Uniform(p,"f","lensRadius1",l),E=new CGL.Uniform(p,"f","aspect",u),x=new CGL.Uniform(p,"f","strength",o),b=new CGL.Uniform(p,"f","sharp",h),v=new CGL.Uniform(p,"3f","vcol",c,f,g);CGL.TextureEffect.setupBlending(e,p,s,r,n);d.onChange=I;I();function I(){p.toggleDefine("ALPHA",d.get());c.setUiAttribs({greyout:d.get()});f.setUiAttribs({greyout:d.get()});g.setUiAttribs({greyout:d.get()})}i.onTriggered=function(){if(!CGL.TextureEffect.checkOpInEffect(e,3))return;_.pushShader(p);_.currentTextureEffect.bind();_.setTexture(0,_.currentTextureEffect.getCurrentSourceTexture().tex);_.currentTextureEffect.finish();_.popShader();a.trigger()}};Ops.Gl.ImageCompose.Vignette_v3.prototype=new CABLES.Op;CABLES.OPS["588302cb-f5a7-4129-90d2-ba66212d69e5"]={f:Ops.Gl.ImageCompose.Vignette_v3,objName:"Ops.Gl.ImageCompose.Vignette_v3"};Ops.Ui.VizTexture=function(){CABLES.Op.apply(this,arguments);const w=this;const i=w.attachments={viztex_frag:"IN vec2 texCoord;\nUNI sampler2D tex;\nUNI samplerCube cubeMap;\nUNI float width;\nUNI float height;\nUNI float type;\nUNI float time;\n\nfloat LinearizeDepth(float d,float zNear,float zFar)\n{\n    float z_n = 2.0 * d - 1.0;\n    return 2.0 * zNear / (zFar + zNear - z_n * (zFar - zNear));\n}\n\nvoid main()\n{\n    vec4 col=vec4(vec3(0.),0.0);\n\n    vec4 colTex=texture(tex,texCoord);\n\n\n\n    if(type==1.0)\n    {\n        vec4 depth=vec4(0.);\n        vec2 localST=texCoord;\n        localST.y = 1. - localST.y;\n\n        localST.t = mod(localST.t*3.,1.);\n        localST.s = mod(localST.s*4.,1.);\n\n        #ifdef WEBGL2\n            #define texCube texture\n        #endif\n        #ifdef WEBGL1\n            #define texCube textureCube\n        #endif\n\n//         //Due to the way my depth-cubeMap is rendered, objects to the -x,y,z side is projected to the positive x,y,z side\n//         //Inside where top/bottom is to be drawn?\n        if (texCoord.s*4.> 1. && texCoord.s*4.<2.)\n        {\n            //Bottom (-y) quad\n            if (texCoord.t*3. < 1.)\n            {\n                vec3 dir=vec3(localST.s*2.-1.,-1.,-localST.t*2.+1.);//Due to the (arbitrary) way I choose as up in my depth-viewmatrix, i her emultiply the latter coordinate with -1\n                depth = texCube(cubeMap, dir);\n            }\n            //top (+y) quad\n            else if (texCoord.t*3. > 2.)\n            {\n                vec3 dir=vec3(localST.s*2.-1.,1.,localST.t*2.-1.);//Get lower y texture, which is projected to the +y part of my cubeMap\n                depth = texCube(cubeMap, dir);\n            }\n            else//Front (-z) quad\n            {\n                vec3 dir=vec3(localST.s*2.-1.,-localST.t*2.+1.,1.);\n                depth = texCube(cubeMap, dir);\n            }\n        }\n//         //If not, only these ranges should be drawn\n        else if (texCoord.t*3. > 1. && texCoord.t*3. < 2.)\n        {\n            if (texCoord.x*4. < 1.)//left (-x) quad\n            {\n                vec3 dir=vec3(-1.,-localST.t*2.+1.,localST.s*2.-1.);\n                depth = texCube(cubeMap, dir);\n            }\n            else if (texCoord.x*4. < 3.)//right (+x) quad (front was done above)\n            {\n                vec3 dir=vec3(1,-localST.t*2.+1.,-localST.s*2.+1.);\n                depth = texCube(cubeMap, dir);\n            }\n            else //back (+z) quad\n            {\n                vec3 dir=vec3(-localST.s*2.+1.,-localST.t*2.+1.,-1.);\n                depth = texCube(cubeMap, dir);\n            }\n        }\n        // colTex = vec4(vec3(depth),1.);\n        colTex = vec4(depth);\n    }\n\n    if(type==2.0)\n    {\n       float near = 0.1;\n       float far = 50.;\n       float depth = LinearizeDepth(colTex.r, near, far);\n       colTex.rgb = vec3(depth);\n    }\n\n\n\n\n    #ifdef ANIM_RANGE\n\n        if(colTex.r>1.0 || colTex.r<0.0)\n            colTex.r=mod(colTex.r,1.0)*0.5+(sin(colTex.r+mod(colTex.r*3.0,1.0)+time*5.0)*0.5+0.5)*0.5;\n        if(colTex.g>1.0 || colTex.g<0.0)\n            colTex.g=mod(colTex.g,1.0)*0.5+(sin(colTex.g+mod(colTex.g*3.0,1.0)+time*5.0)*0.5+0.5)*0.5;\n        if(colTex.b>1.0 || colTex.b<0.0)\n            colTex.b=mod(colTex.b,1.0)*0.5+(sin(colTex.b+mod(colTex.b*3.0,1.0)+time*5.0)*0.5+0.5)*0.5;\n\n    #endif\n\n\n    // #ifdef ANIM_RANGE\n    //     if(colTex.r>1.0 || colTex.r<0.0)\n    //     {\n    //         float r=mod( time+colTex.r,1.0)*0.5+0.5;\n    //         colTex.r=r;\n    //     }\n    //     if(colTex.g>1.0 || colTex.g<0.0)\n    //     {\n    //         float r=mod( time+colTex.g,1.0)*0.5+0.5;\n    //         colTex.g=r;\n    //     }\n    //     if(colTex.b>1.0 || colTex.b<0.0)\n    //     {\n    //         float r=mod( time+colTex.b,1.0)*0.5+0.5;\n    //         colTex.b=r;\n    //     }\n    // #endif\n\n    #ifdef MOD_RANGE\n        colTex.r=mod(colTex.r,1.0001);\n        colTex.g=mod(colTex.g,1.0001);\n        colTex.b=mod(colTex.b,1.0001);\n\n    #endif\n\n    #ifdef ALPHA_ONE\n        colTex.a=1.0;\n    #endif\n    #ifdef ALPHA_INV\n        colTex.a=1.0-colTex.a;\n    #endif\n\n    outColor = mix(col,colTex,colTex.a);\n}\n\n",viztex_vert:"IN vec3 vPosition;\nIN vec2 attrTexCoord;\nOUT vec2 texCoord;\nUNI mat4 projMatrix;\nUNI mat4 modelMatrix;\nUNI mat4 viewMatrix;\n\nvoid main()\n{\n    texCoord=vec2(attrTexCoord.x,1.0-attrTexCoord.y);\n    vec4 pos = vec4( vPosition, 1. );\n    mat4 mvMatrix=viewMatrix * modelMatrix;\n    gl_Position = projMatrix * mvMatrix * pos;\n}"};const B=w.inTexture("Texture In"),G=w.inBool("Show Info",false),e=w.inSwitch("Visualize outside 0-1",["Off","Anim","Modulo"],"Anim"),t=w.inSwitch("Alpha",["A","1","1-A"],"A"),V=w.inBool("Show Color",false),D=w.inFloatSlider("X",.5),k=w.inFloatSlider("Y",.5),s=w.outTexture("Texture Out"),X=w.outString("Info");w.setUiAttrib({height:150,resizable:true});const z=new CABLES.Timer;let n=null;let H=null;let j=null;let Y="";t.onChange=e.onChange=a;V.onChange=r;r();if(CABLES.UI){z.play();w.checkMainloopExists()}function r(){D.setUiAttribs({greyout:!V.get()});k.setUiAttribs({greyout:!V.get()})}B.onChange=()=>{const e=B.get();s.setRef(e);let t="";if(B.get()&&B.isLinked())t=B.links[0].getOtherPort(B).name;w.setUiAttrib({extendTitle:t})};function a(){if(!n)return;n.toggleDefine("MOD_RANGE",e.get()=="Modulo");n.toggleDefine("ANIM_RANGE",e.get()=="Anim");n.toggleDefine("ALPHA_INV",t.get()=="1-A");n.toggleDefine("ALPHA_ONE",t.get()=="1");w.checkMainloopExists()}w.renderVizLayerGl=(u,c)=>{if(!B.isLinked())return;if(!c.useGl)return;const f=B;const g=5;const d=g+1;const e=CABLES.UI.uiProfiler.start("previewlayer texture");const _=f.op.patch.cgl;if(!this._emptyCubemap)this._emptyCubemap=CGL.Texture.getEmptyCubemapTexture(_);f.op.patch.cgl.profileData.profileTexPreviews++;const p=f.get()||CGL.Texture.getEmptyTexture(_);if(!this._mesh){const t=new CGL.Geometry("vizTexture rect");t.vertices=[1,1,0,-1,1,0,1,-1,0,-1,-1,0];t.texCoords=[1,1,0,1,1,0,0,0];t.verticesIndices=[0,1,2,3,1,2];this._mesh=new CGL.Mesh(_,t)}if(!this._shader){this._shader=new CGL.Shader(_,"glpreviewtex");this._shader.setModules(["MODULE_VERTEX_POSITION","MODULE_COLOR","MODULE_BEGIN_FRAG"]);this._shader.setSource(i.viztex_vert,i.viztex_frag);this._shaderTexUniform=new CGL.Uniform(this._shader,"t","tex",g);this._shaderTexCubemapUniform=new CGL.Uniform(this._shader,"tc","cubeMap",d);n=this._shader;a();this._shaderTexUniformW=new CGL.Uniform(this._shader,"f","width",p.width);this._shaderTexUniformH=new CGL.Uniform(this._shader,"f","height",p.height);this._shaderTypeUniform=new CGL.Uniform(this._shader,"f","type",0);this._shaderTimeUniform=new CGL.Uniform(this._shader,"f","time",0)}_.pushPMatrix();const m=[p.width,p.height];const T=f.op.patch.cgl.canvasWidth>m[0]&&f.op.patch.cgl.canvasHeight>m[1];if(T){mat4.ortho(_.pMatrix,0,f.op.patch.cgl.canvasWidth,f.op.patch.cgl.canvasHeight,0,.001,11)}else mat4.ortho(_.pMatrix,-1,1,1,-1,.001,11);const A=_.getTexture(g);const E=_.getTexture(d);let x=0;if(p){if(p.cubemap)x=1;if(p.textureType==CGL.Texture.TYPE_DEPTH)x=2;if(x==0||x==2){_.setTexture(g,p.tex);_.setTexture(d,this._emptyCubemap.cubemap,_.gl.TEXTURE_CUBE_MAP)}else if(x==1){_.setTexture(d,p.cubemap,_.gl.TEXTURE_CUBE_MAP)}z.update();this._shaderTimeUniform.setValue(z.get());this._shaderTypeUniform.setValue(x);let t=[f.op.patch.cgl.canvasWidth,f.op.patch.cgl.canvasHeight];_.gl.clearColor(0,0,0,0);_.gl.clear(_.gl.COLOR_BUFFER_BIT|_.gl.DEPTH_BUFFER_BIT);_.pushModelMatrix();if(T){t=m;mat4.translate(_.mMatrix,_.mMatrix,[m[0]/2,m[1]/2,0]);mat4.scale(_.mMatrix,_.mMatrix,[m[0]/2,m[1]/2,0])}this._mesh.render(this._shader);_.popModelMatrix();if(x==0)_.setTexture(g,A);if(x==1)_.setTexture(d,E);_.popPMatrix();_.resetViewPort();const b=[c.width,c.height];const v=false;if(p.width>p.height)b[1]=c.width*m[1]/m[0];else{b[1]=c.width*(m[1]/m[0]);if(b[1]>c.height){const R=c.height/b[1];b[0]*=R;b[1]*=R}}const I=b[0]>m[0]&&b[1]>m[1];u.imageSmoothingEnabled=true;u.fillStyle="#ffffff";u.fillRect(c.x,c.y-10,10,10);u.fillStyle="#000000";u.fillRect(c.x,c.y-10,5,5);u.fillRect(c.x+5,c.y-10+5,5,5);let e=c.height;let i=10*c.width/e;let s=e/10;let n=c.width/i;for(let t=0;t<i;t++)for(let e=0;e<10;e++){if((t+e)%2==0)u.fillStyle="#333333";else u.fillStyle="#393939";u.fillRect(c.x+n*t,c.y+s*e,n,s)}u.fillStyle="#222";const S=(c.width-b[0])/2;const C=(e-b[1])/2;let r=c.x+(c.width-b[0])/2;let a=c.y+(e-b[1])/2;let o=b[0];let l=b[1];if(e-b[1]<0){r=c.x+(c.width-b[0]*e/b[1])/2;a=c.y;o=b[0]*e/b[1];l=e}u.fillRect(c.x,c.y,r-c.x,e);u.fillRect(c.x+o+r-c.x,c.y,o,e);u.fillRect(c.x,c.y,c.width,C);u.fillRect(c.x,c.y+b[1]+C,c.width,C);if(_.canvas&&_.canvasWidth>0&&_.canvasHeight>0&&_.canvas.width>0&&_.canvas.height>0){try{const P=o/t[0]>3||l/t[1]>3;const O=o/t[0]>10||l/t[1]>10;if(m[1]==1){u.imageSmoothingEnabled=false;u.drawImage(_.canvas,0,0,t[0],t[1],c.x,c.y,c.width,e);u.imageSmoothingEnabled=true}else if(m[0]==1){u.imageSmoothingEnabled=false;u.drawImage(_.canvas,0,0,t[0],t[1],c.x,c.y,c.width,e);u.imageSmoothingEnabled=true}else if(b[0]!=0&&b[1]!=0&&c.width!=0&&e!=0&&o!=0&&l!=0){u.imageSmoothingEnabled=!P;u.drawImage(_.canvas,0,0,t[0],t[1],r,a,o,l)}if(O){const y=o/t[0];const L=l/t[1];u.imageSmoothingEnabled=true;u.lineWidth=1;u.globalAlpha=.5;u.beginPath();for(let e=0;e<=t[0];e++){u.moveTo(r+e*y,a);u.lineTo(r+e*y,a+l)}for(let e=0;e<=t[1];e++){u.moveTo(r,a+e*L);u.lineTo(r+o,a+e*L)}u.strokeStyle="#555";u.stroke();u.globalAlpha=1}}catch(e){console.error("canvas drawimage exception...",e)}}let h="";if(G.get()){if(f.get()&&f.get().getInfoOneLine)h+=f.get().getInfoOneLine()+"\n"}if(V.get()){h+=Y+"\n";const M=r+o*D.get();const F=a+l*k.get();u.fillStyle="#000";u.fillRect(M-1,F-10,3,20);u.fillRect(M,F-1,20,3);u.fillStyle="#fff";u.fillRect(M-1,F-10,1,20);u.fillRect(M-10,F-1,20,1)}w.setUiAttrib({comment:h});X.set(h);if(V.get()){const N=_.gl;const U=B.get();if(!U){Y="";return}if(!H)H=N.createFramebuffer();if(!j)j=new CGL.PixelReader;N.bindFramebuffer(N.FRAMEBUFFER,H);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,U.tex,0);N.bindFramebuffer(N.FRAMEBUFFER,null);j.read(_,H,U.pixelFormat,D.get()*U.width,U.height-k.get()*U.height,1,1,e=>{if(!CGL.Texture.isPixelFormatFloat(U.pixelFormat)){Y="Pixel Float: "+Math.floor(e[0]/255*100)/100;if(!isNaN(e[1]))Y+=", "+Math.floor(e[1]/255*100)/100;if(!isNaN(e[2]))Y+=", "+Math.floor(e[2]/255*100)/100;if(!isNaN(e[3]))Y+=", "+Math.floor(e[3]/255*100)/100;Y+="\n";if(U.pixelFormat.indexOf("ubyte")>0){Y+="Pixel UByte: ";Y+=Math.round(e[0]);if(!isNaN(e[1]))Y+=", "+Math.round(e[1]);if(!isNaN(e[2]))Y+=", "+Math.round(e[2]);if(!isNaN(e[3]))Y+=", "+Math.round(e[3]);Y+="\n"}}else{Y="Pixel Float: "+Math.round(e[0]*100)/100+", "+Math.round(e[1]*100)/100+", "+Math.round(e[2]*100)/100+", "+Math.round(e[3]*100)/100;Y+="\n"}})}}_.gl.clearColor(0,0,0,0);_.gl.clear(_.gl.COLOR_BUFFER_BIT|_.gl.DEPTH_BUFFER_BIT);e.finish()}};Ops.Ui.VizTexture.prototype=new CABLES.Op;CABLES.OPS["4ea2d7b0-ca74-45db-962b-4d1965ac20c0"]={f:Ops.Ui.VizTexture,objName:"Ops.Ui.VizTexture"};Ops.Gl.Phong.PointLight_v5=function(){CABLES.Op.apply(this,arguments);const e=this;const U=e.attachments={};const t=e.patch.cgl;const w=t.gl;const B=CGL.MESHES.getSimpleRect(t,"fullscreenRectangle");function G(e){this.type=e.type||"point";this.color=e.color||[1,1,1];this.specular=e.specular||[0,0,0];this.position=e.position||null;this.intensity=e.intensity||1;this.radius=e.radius||1;this.falloff=e.falloff||1;this.spotExponent=e.spotExponent||1;this.cosConeAngle=Math.cos(CGL.DEG2RAD*this.coneAngle);this.conePointAt=e.conePointAt||[0,0,0];this.castShadow=e.castShadow||false;return this}const i=e.inTrigger("Trigger In");const s=e.inBool("Cast Light",true);const n=e.inFloat("Intensity",2);const r=e.inFloat("Radius",15);const a=e.inFloat("X",0);const o=e.inFloat("Y",2);const l=e.inFloat("Z",.75);const h=[a,o,l];e.setPortGroup("Position",h);const u=e.inFloat("R",.8);const c=e.inFloat("G",.8);const f=e.inFloat("B",.8);u.setUiAttribs({colorPick:true});const g=[u,c,f];e.setPortGroup("Color",g);const d=e.inFloat("Specular R",1);const _=e.inFloat("Specular G",1);const p=e.inFloat("Specular B",1);d.setUiAttribs({colorPick:true});const m=[d,_,p];e.setPortGroup("Specular Color",m);const T=e.inFloatSlider("Falloff",.5);const V=[n,s,r];e.setPortGroup("Light Attributes",V);const A=e.inBool("Cast Shadow",false);const E=e.inBool("Rendering Active",true);const x=e.inSwitch("Map Size",[256,512,1024,2048],512);const b=e.inFloatSlider("Shadow Strength",1);const v=e.inFloat("Near",.1);const I=e.inFloat("Far",30);const S=e.inFloatSlider("Bias",.004);const C=e.inInt("Polygon Offset",0);e.setPortGroup("",[A]);e.setPortGroup("Shadow Map Settings",[x,E,b,v,I,S,C]);const D=[v,I];x.setUiAttribs({greyout:!A.get()});E.setUiAttribs({greyout:!A.get()});b.setUiAttribs({greyout:!A.get()});v.setUiAttribs({greyout:!A.get()});S.setUiAttribs({greyout:!A.get()});I.setUiAttribs({greyout:!A.get()});C.setUiAttribs({greyout:!A.get()});let R=false;A.onChange=function(){R=true;L=true;x.setUiAttribs({greyout:!A.get()});E.setUiAttribs({greyout:!A.get()});b.setUiAttribs({greyout:!A.get()});v.setUiAttribs({greyout:!A.get()});I.setUiAttribs({greyout:!A.get()});S.setUiAttribs({greyout:!A.get()});C.setUiAttribs({greyout:!A.get()})};const P=e.outTrigger("Trigger Out");const O=e.outObject("Cubemap",null,"texture");const k=e.outNumber("World Position X");const X=e.outNumber("World Position Y");const z=e.outNumber("World Position Z");const y=new CGL.Light(t,{type:"point",position:[0,1,2].map(function(e){return h[e].get()}),color:[0,1,2].map(function(e){return g[e].get()}),specular:[0,1,2].map(function(e){return m[e].get()}),intensity:n.get(),radius:r.get(),falloff:T.get(),shadowStrength:b.get(),shadowBias:S.get()});y.castLight=s.get();let L=false;a.onChange=o.onChange=l.onChange=u.onChange=c.onChange=f.onChange=d.onChange=_.onChange=p.onChange=n.onChange=s.onChange=r.onChange=T.onChange=v.onChange=I.onChange=b.onChange=function(){L=true};x.onChange=function(){R=true};function H(){if(A.get()){const e=x.get();y.createFramebuffer(e,e,{});y.createShadowMapShader()}R=false}const j=vec3.create();const Y=vec3.create();const M=vec3.create();const F=vec3.create();function W(){if(t.frameStore.shadowPass)return;if(CABLES.UI)gui.setTransform(e.id,a.get(),o.get(),l.get());if(e.isCurrentUiOp()){gui.setTransformGizmo({posX:a,posY:o,posZ:l});t.pushModelMatrix();mat4.translate(t.mMatrix,t.mMatrix,F);CABLES.GL_MARKER.drawSphere(e,r.get());t.popModelMatrix()}}let N=false;i.onTriggered=function(){if(R){if(t.frameStore.shadowPass)return;H()}if(!t.frameStore.shadowPass){if(!y.isUsed&&!N){e.setUiError("lightUsed","No operator is using this light. Make sure this op is positioned before an operator that uses lights. Also make sure there is an operator that uses lights after this.",1);N=true}else if(!y.isUsed&&N){}else if(y.isUsed&&N){e.setUiError("lightUsed",null);N=false}else if(y.isUsed&&!N){}y.isUsed=false}if(L){y.position=[0,1,2].map(function(e){return h[e].get()});y.color=[0,1,2].map(function(e){return g[e].get()});y.specular=[0,1,2].map(function(e){return m[e].get()});y.intensity=n.get();y.radius=r.get();y.falloff=T.get();y.castShadow=A.get();y.castLight=s.get();y.updateProjectionMatrix(null,v.get(),I.get(),null);L=false}if(!t.frameStore.lightStack)t.frameStore.lightStack=[];vec3.set(F,a.get(),o.get(),l.get());vec3.transformMat4(M,F,t.mMatrix);y.position=M;k.set(y.position[0]);X.set(y.position[1]);z.set(y.position[2]);if(!t.frameStore.shadowPass)W();t.frameStore.lightStack.push(y);if(A.get()){if(E.get())y.renderPasses(C.get(),null,function(){P.trigger()});if(!t.frameStore.shadowPass){t.frameStore.lightStack.pop();y.castShadow=A.get();y.shadowBias=S.get();y.shadowStrength=b.get();if(y.shadowCubeMap){if(y.shadowCubeMap.cubemap){O.set(null);O.set(y.shadowCubeMap);if(E.get()){y.positionForShadowMap=[y.position[0],y.position[1],y.position[2]]}}}t.frameStore.lightStack.push(y)}}else{O.set(null)}P.trigger();t.frameStore.lightStack.pop()}};Ops.Gl.Phong.PointLight_v5.prototype=new CABLES.Op;CABLES.OPS["54e5d3f5-e3f4-4381-990d-d5e32b9a2d39"]={f:Ops.Gl.Phong.PointLight_v5,objName:"Ops.Gl.Phong.PointLight_v5"};Ops.Gl.Phong.LambertMaterial_v2=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={lambert_frag:"{{MODULES_HEAD}}\n\n#define AMBIENT 0\n#define POINT 1\n#define DIRECTIONAL 2\n#define SPOT 3\n\nIN vec3 norm;\nIN vec4 modelPos;\n\n// UNI mat4 normalMatrix;\nIN mat3 normalMatrix; // when instancing...\n\nIN vec2 texCoord;\n\nIN vec3 mvNormal;\nIN vec3 mvTangent;\nIN vec3 mvBiTangent;\n\nUNI vec4 materialColor;//r,g,b,a;\n\nstruct Light {\n    vec3 position;\n    vec3 color;\n    // * SPOT LIGHT * //\n    #ifdef HAS_SPOT\n        vec3 conePointAt;\n        #define COSCONEANGLE x\n        #define COSCONEANGLEINNER y\n        #define SPOTEXPONENT z\n        vec3 spotProperties;\n    #endif\n\n    #define INTENSITY x\n    #define ATTENUATION y\n    #define FALLOFF z\n    #define RADIUS w\n    vec4 lightProperties;\n\n    int type;\n    int castLight;\n    #define CASTLIGHT x\n    #define TYPE y\n    ivec2 castLightType;\n};\n#ifdef HAS_TEXTURES\n    #ifdef HAS_TEXTURE_DIFFUSE\n        UNI sampler2D texDiffuse;\n    #endif\n#endif\n\nUNI Light lights[NUM_LIGHTS];\n\n// * UTILITY FUNCTIONS */\nfloat when_gt(float x, float y) { return max(sign(x - y), 0.0); } // comparator function\nfloat when_eq(float x, float y) { return 1. - abs(sign(x - y)); } // comparator function\nfloat when_neq(float x, float y) { return abs(sign(x - y)); } // comparator function\n\n\n// * LIGHT CALCULATIONS */\nfloat CalculateFalloff(float radius, float falloff, float distLight)\n{\n    float denom = distLight / radius + 1.0;\n    float attenuation = 1.0 / (denom*denom);\n    float t = (attenuation - 0.1) / (1.0 - 0.1);\n\n    t = t * (20.0 * (1. - falloff) * 20.0 * (1. - falloff));\n\n    return min(1.0,max(t, 0.0));\n}\n\nfloat Falloff2(vec3 lightDirection, float falloff) {\n    float distanceSquared = dot(lightDirection, lightDirection);\n    float factor = distanceSquared * falloff;\n    float smoothFactor = clamp(1. - factor * factor, 0., 1.);\n    float attenuation = smoothFactor * smoothFactor;\n\n    return attenuation * 1. / max(distanceSquared, 0.00001);\n}\n\n#ifdef HAS_SPOT\n    float CalculateSpotLightEffect(vec3 lightPosition, vec3 conePointAt, float cosConeAngle, float cosConeAngleInner, float spotExponent, vec3 lightDirection) {\n        vec3 spotLightDirection = normalize(lightPosition-conePointAt);\n        float spotAngle = dot(-lightDirection, spotLightDirection);\n        float epsilon = cosConeAngle - cosConeAngleInner;\n\n        float spotIntensity = clamp((spotAngle - cosConeAngle)/epsilon, 0.0, 1.0);\n        spotIntensity = pow(spotIntensity, max(0.01, spotExponent));\n\n        return max(0., spotIntensity);\n    }\n#endif\nvec3 CalculateDiffuseColor(vec3 lightDirection, vec3 normal, vec3 lightColor, vec3 materialColor, inout float lambert) {\n    lambert = clamp(dot(lightDirection, normal), 0., 1.);\n    vec3 diffuseColor = lambert * lightColor * materialColor;\n    return diffuseColor;\n}\n\n\n// MAIN\nvoid main()\n{\n    {{MODULE_BEGIN_FRAG}}\n\n    vec4 col=vec4(0.0);\n    vec3 normal = normalize(mat3(normalMatrix)*norm);\n\n    #ifdef DOUBLE_SIDED\n        if(!gl_FrontFacing) normal = normal*-1.0;\n    #endif\n\n    vec3 matColor = materialColor.rgb;\n\n    #ifdef HAS_TEXTURES\n        #ifdef HAS_TEXTURE_DIFFUSE\n            matColor = texture(texDiffuse, texCoord).rgb;\n            #ifdef COLORIZE_TEXTURE\n                matColor *= materialColor.rgb;\n            #endif\n        #endif\n    #endif\n\n    for(int l=0;l<NUM_LIGHTS;l++) {\n        if (lights[l].castLightType.TYPE == AMBIENT) {\n            col.rgb += lights[l].lightProperties.INTENSITY * lights[l].color;\n        } else {\n            if (lights[l].castLightType.CASTLIGHT == 0) continue;\n\n            vec3 lightModelDiff= lights[l].position - modelPos.xyz;\n            vec3 lightDirection = normalize(lightModelDiff);\n\n            if (lights[l].castLightType.TYPE == DIRECTIONAL) lightDirection = lights[l].position;\n\n            float lambert = 1.; // inout variable\n            vec3 diffuseColor = CalculateDiffuseColor(lightDirection, normal, lights[l].color, matColor, lambert);\n\n            if (lights[l].castLightType.TYPE != DIRECTIONAL) diffuseColor *= Falloff2(lightDirection, lights[l].lightProperties.FALLOFF);\n\n            #ifdef HAS_SPOT\n                if (lights[l].castLightType.TYPE == SPOT) diffuseColor *= CalculateSpotLightEffect(\n                    lights[l].position, lights[l].conePointAt, lights[l].spotProperties.COSCONEANGLE,\n                    lights[l].spotProperties.COSCONEANGLEINNER, lights[l].spotProperties.SPOTEXPONENT,\n                    lightDirection\n                );\n            #endif\n\n            diffuseColor *= lights[l].lightProperties.INTENSITY;\n            col.rgb += diffuseColor;\n        }\n    }\n\n\n    col.a = materialColor.a;\n\n    {{MODULE_COLOR}}\n\n    // col.rgb=norm.rgb;\n\n    outColor = col;\n}\n",lambert_vert:"#define TEX_REPEAT_X x;\n#define TEX_REPEAT_Y y;\n#define TEX_OFFSET_X z;\n#define TEX_OFFSET_Y w;\n\nIN vec3 vPosition;\nIN vec3 attrVertNormal;\nIN vec2 attrTexCoord;\n\nIN vec3 attrTangent;\nIN vec3 attrBiTangent;\nIN float attrVertIndex;\n\nUNI mat4 projMatrix;\nUNI mat4 modelMatrix;\nUNI mat4 viewMatrix;\n\nOUT vec3 norm;\nOUT mat4 mvMatrix;\nOUT mat3 normalMatrix;\nOUT vec4 modelPos;\nOUT vec2 texCoord;\n{{MODULES_HEAD}}\n\nmat3 transposeMat3(mat3 m)\n{\n    return mat3(\n        m[0][0], m[1][0], m[2][0],\n        m[0][1], m[1][1], m[2][1],\n        m[0][2], m[1][2], m[2][2]);\n}\n\nmat3 inverseMat3(mat3 m)\n{\n    float a00 = m[0][0], a01 = m[0][1], a02 = m[0][2];\n    float a10 = m[1][0], a11 = m[1][1], a12 = m[1][2];\n    float a20 = m[2][0], a21 = m[2][1], a22 = m[2][2];\n\n    float b01 = a22 * a11 - a12 * a21;\n    float b11 = -a22 * a10 + a12 * a20;\n    float b21 = a21 * a10 - a11 * a20;\n\n    float det = a00 * b01 + a01 * b11 + a02 * b21;\n\n    return mat3(b01, (-a22 * a01 + a02 * a21), (a12 * a01 - a02 * a11),\n        b11, (a22 * a00 - a02 * a20), (-a12 * a00 + a02 * a10),\n        b21, (-a21 * a00 + a01 * a20), (a11 * a00 - a01 * a10)) / det;\n}\n\nvoid main()\n{\n    vec4 pos = vec4( vPosition, 1. );\n    mat4 mMatrix=modelMatrix;\n    vec3 tangent=attrTangent,\n        bitangent=attrBiTangent;\n\n    texCoord=attrTexCoord;\n    texCoord.y = 1. - texCoord.y;\n\n    norm=attrVertNormal;\n\n    {{MODULE_VERTEX_POSITION}}\n\n    normalMatrix = transposeMat3(inverseMat3(mat3(mMatrix)));\n\n\n    // this needs only to be done when instancing....\n\n    mat4 modelViewMatrix=viewMatrix*mMatrix;\n    {{MODULE_VERTEX_MOVELVIEW}}\n    mvMatrix=modelViewMatrix;\n\n\n    modelPos=mMatrix*pos;\n\n    gl_Position = projMatrix * modelViewMatrix * pos;\n}\n"};const s={ambient:0,point:1,directional:2,spot:3};const i=e.inTrigger("Execute"),n=e.inValueSlider("Diffuse R",Math.random()),r=e.inValueSlider("Diffuse G",Math.random()),a=e.inValueSlider("Diffuse B",Math.random()),o=e.inValueSlider("Diffuse A",1);n.setUiAttribs({colorPick:true});e.setPortGroup("Diffuse Color",[n,r,a,o]);const l=e.inBool("Double Sided",false);l.setUiAttribs({hidePort:true});l.onChange=function(){p.toggleDefine("DOUBLE_SIDED",l.get())};e.setPortGroup("Material Properties",[l]);e.toWorkPortsNeedToBeLinked(i);e.toWorkShouldNotBeChild("Ops.Gl.TextureEffects.ImageCompose",CABLES.OP_PORT_TYPE_FUNCTION);const h=e.inTexture("Diffuse Texture");let u=null;const c=null;h.onChange=g;const f=e.inBool("Colorize Texture",false);f.onChange=function(){p.toggleDefine("COLORIZE_TEXTURE",f.get())};e.setPortGroup("Texture",[h,f]);function g(){if(h.get()){if(!p.hasDefine("HAS_TEXTURE_DIFFUSE")){p.define("HAS_TEXTURE_DIFFUSE");if(!u)u=new CGL.Uniform(p,"t","texDiffuse",0)}}else{p.removeUniform("texDiffuse");p.removeDefine("HAS_TEXTURE_DIFFUSE");u=null}}const d=e.outTrigger("next");const _=e.patch.cgl;const p=new CGL.Shader(_,"LambertMaterial");p.define("NUM_LIGHTS","1");const m=new CGL.Uniform(p,"4f","materialColor",n,r,a,o);p.uniformColorDiffuse=m;const T=e.outObject("Shader");T.set(p);const A=_.maxUniformsFrag;const E=A===64?6:16;p.setSource(t.lambert_vert,t.lambert_frag);const x=[{type:"point",position:[0,2,1],intensity:1,attenuation:0,falloff:.5,radius:80,castLight:1}];p.define("MAX_LIGHTS",E.toString());let b=null;function v(){b={color:new CGL.Uniform(p,"3f","lights[0].color",[1,1,1]),position:new CGL.Uniform(p,"3f","lights[0].position",[0,11,0]),lightProperties:new CGL.Uniform(p,"4f","lights[0].lightProperties",[1,1,1,1]),conePointAt:new CGL.Uniform(p,"3f","lights[0].conePointAt",vec3.create()),spotProperties:new CGL.Uniform(p,"3f","lights[0].spotProperties",[0,0,0,0]),castLightType:new CGL.Uniform(p,"2i","lights[0].castLightType",[0,0])}}function I(e){p.define("NUM_LIGHTS","1");if(p.hasDefine("HAS_SPOT")){p.removeDefine("HAS_SPOT")}if(p.hasDefine("HAS_DIRECTIONAL")){p.removeDefine("HAS_DIRECTIONAL")}if(p.hasDefine("HAS_AMBIENT")){p.removeDefine("HAS_AMBIENT")}if(!p.hasDefine("HAS_POINT"))p.define("HAS_POINT");b.position.setValue(e.position);b.color.setValue(e.color);b.lightProperties.setValue([e.intensity,e.attenuation,e.falloff,e.radius]);b.castLightType.setValue([1,s[e.type]]);b.conePointAt.setValue(e.conePointAt);b.spotProperties.setValue([e.cosConeAngle,e.cosConeAngleInner,e.spotExponent])}const S=[];const C={directional:false,spot:false,ambient:false,point:false};function R(t){for(let e=0;e<S.length;e+=1){S[e]=null}C.directional=false;C.spot=false;C.ambient=false;C.point=false;for(let e=0;e<t.length;e+=1){if(e===E)return;S[e]=null;const i=t[e];const s=i.type;if(!C[s])C[s]=true;if(!S[e]){S[e]={color:new CGL.Uniform(p,"3f","lights["+e+"].color",[1,1,1]),position:new CGL.Uniform(p,"3f","lights["+e+"].position",[0,11,0]),lightProperties:new CGL.Uniform(p,"4f","lights["+e+"].lightProperties",[1,1,1,1]),conePointAt:new CGL.Uniform(p,"3f","lights["+e+"].conePointAt",vec3.create()),spotProperties:new CGL.Uniform(p,"3f","lights["+e+"].spotProperties",[0,0,0,0]),castLightType:new CGL.Uniform(p,"2i","lights["+e+"].castLightType",[0,0])}}}for(let e=0,t=Object.keys(C);e<t.length;e+=1){const n=t[e];p.toggleDefine("HAS_"+n.toUpperCase(),C[n])}}function P(t){for(let e=0;e<t.length;e+=1){const i=t[e];i.isUsed=true;S[e].position.setValue(i.position);S[e].color.setValue(i.color);S[e].lightProperties.setValue([i.intensity,i.attenuation,i.falloff,i.radius]);S[e].conePointAt.setValue(i.conePointAt);S[e].spotProperties.setValue([i.cosConeAngle,i.cosConeAngleInner,i.spotExponent]);S[e].castLightType.setValue([Number(i.castLight),s[i.type]])}}let O=0;function y(e){if(e.length!==O){R(e);O=e.length;p.define("NUM_LIGHTS",""+Math.max(O,1));P(e)}else{P(e)}}const L=mat4.create();function M(){if(!_.frameStore.lightStack||!_.frameStore.lightStack.length){if(!b)v();mat4.invert(L,_.vMatrix);x[0].position=[L[12],L[13],L[14]];I(x[0]);O=-1}else{if(p){if(_.frameStore.lightStack){if(_.frameStore.lightStack.length){b=null;y(_.frameStore.lightStack)}}}}}i.onTriggered=function(){if(!p){e.log("lambert has no shader...");return}if(_.frameStore.lightStack){if(_.frameStore.lightStack.length===0)e.setUiError("deflight","Default light is enabled. Please add lights to your patch to make this warning disappear.",1);else e.setUiError("deflight",null)}_.pushShader(p);p.popTextures();M();if(h.get())p.pushTexture(u,h.get().tex);d.trigger();_.popShader()};g()};Ops.Gl.Phong.LambertMaterial_v2.prototype=new CABLES.Op;CABLES.OPS["d69316f1-bde9-4645-8280-c635a8982e0d"]={f:Ops.Gl.Phong.LambertMaterial_v2,objName:"Ops.Gl.Phong.LambertMaterial_v2"};Ops.Gl.Phong.DirectionalLight_v5=function(){CABLES.Op.apply(this,arguments);const t=this;const e=t.attachments={};const i=t.patch.cgl;const B=t.inTrigger("Trigger In");const s=t.inBool("Cast Light",true);const n=t.inFloat("Intensity",1);const G=[s,n];t.setPortGroup("Light Attributes",G);const r=t.inFloat("X",0);const a=t.inFloat("Y",3);const o=t.inFloat("Z",5);const l=[r,a,o];t.setPortGroup("Direction",l);const h=t.inFloat("R",1);const u=t.inFloat("G",1);const c=t.inFloat("B",1);h.setUiAttribs({colorPick:true});const f=[h,u,c];t.setPortGroup("Color",f);const g=t.inFloat("Specular R",.2);const d=t.inFloat("Specular G",.2);const _=t.inFloat("Specular B",.2);g.setUiAttribs({colorPick:true});const p=[g,d,_];t.setPortGroup("Specular Color",p);const m=t.inBool("Cast Shadow",false);const T=t.inBool("Rendering Active",true);const A=t.inSwitch("Map Size",[256,512,1024,2048],512);const E=t.inFloatSlider("Shadow Strength",1);const x=t.inFloat("LR-BottomTop",8);const b=t.inFloat("Near",.1);const v=t.inFloat("Far",30);const I=t.inFloatSlider("Bias",.004);const S=t.inInt("Polygon Offset",0);const C=t.inFloatSlider("Normal Offset",0);const R=t.inFloatSlider("Blur Amount",0);t.setPortGroup("",[m]);t.setPortGroup("Shadow Map Settings",[A,T,E,x,b,v,I,S,C,R]);A.setUiAttribs({greyout:true});T.setUiAttribs({greyout:true});E.setUiAttribs({greyout:true});x.setUiAttribs({greyout:true,hidePort:true});b.setUiAttribs({greyout:true,hidePort:true});v.setUiAttribs({greyout:true,hidePort:true});I.setUiAttribs({greyout:true,hidePort:true});C.setUiAttribs({greyout:true,hidePort:true});S.setUiAttribs({greyout:true,hidePort:true});R.setUiAttribs({greyout:true});const P=t.inBool("Enable Advanced",false);const O=t.inSwitch("MSAA",["none","2x","4x","8x"],"none");const y=t.inSwitch("Texture Filter",["Linear","Nearest","Mip Map"],"Linear");const L=t.inSwitch("Anisotropic",[0,1,2,4,8,16],"0");O.setUiAttribs({greyout:true,hidePort:true});y.setUiAttribs({greyout:true,hidePort:true});L.setUiAttribs({greyout:true,hidePort:true});t.setPortGroup("Advanced Options",[P,O,y,L]);P.onChange=function(){O.setUiAttribs({greyout:!P.get()});y.setUiAttribs({greyout:!P.get()});L.setUiAttribs({greyout:!P.get()})};const V=t.outTrigger("Trigger Out");const M=t.outTexture("Shadow Map");let D=1/Number(A.get());const F=new CGL.Light(i,{type:"directional",position:[0,1,2].map(function(e){return l[e].get()}),color:[0,1,2].map(function(e){return f[e].get()}),specular:[0,1,2].map(function(e){return p[e].get()}),intensity:n.get(),castShadow:false,shadowStrength:E.get()});F.castLight=s.get();let N=false;function k(){N=true;const e=Number(O.get().charAt(0));let t=null;const i=Number(L.get());if(y.get()=="Linear"){t=CGL.Texture.FILTER_LINEAR}else if(y.get()=="Nearest"){t=CGL.Texture.FILTER_NEAREST}else if(y.get()=="Mip Map"){t=CGL.Texture.FILTER_MIPMAP}const s=Number(A.get());const n={isFloatingPointTexture:true,filter:t};if(e)Object.assign(n,{multisampling:true,multisamplingSamples:e});Object.assign(n,{anisotropic:i});F.createFramebuffer(s,s,n);F.createBlurEffect(n);N=false}function X(){const e=Number(A.get());D=1/e;if(m.get()){F.createFramebuffer(Number(A.get()),Number(A.get()),{});F.createShadowMapShader();F.createBlurEffect({});F.createBlurShader();F.updateProjectionMatrix(x.get(),b.get(),v.get(),null)}if(P.get())k();N=false;U=true}O.onChange=L.onChange=y.onChange=A.onChange=function(){N=true};h.onChange=u.onChange=c.onChange=g.onChange=d.onChange=_.onChange=r.onChange=a.onChange=o.onChange=I.onChange=n.onChange=s.onChange=E.onChange=C.onChange=z;let U=false;function z(e){U=true}m.onChange=function(){N=true;U=true;const e=m.get();A.setUiAttribs({greyout:!e});T.setUiAttribs({greyout:!e});E.setUiAttribs({greyout:!e});x.setUiAttribs({greyout:!e});b.setUiAttribs({greyout:!e});v.setUiAttribs({greyout:!e});R.setUiAttribs({greyout:!e});I.setUiAttribs({greyout:!e});C.setUiAttribs({greyout:!e});S.setUiAttribs({greyout:!e})};x.onChange=b.onChange=v.onChange=function(){U=true};function H(){if(i.shouldDrawHelpers(t)){gui.setTransformGizmo({posX:r,posY:a,posZ:o});CABLES.GL_MARKER.drawLineSourceDest(t,-200*F.position[0],-200*F.position[1],-200*F.position[2],200*F.position[0],200*F.position[1],200*F.position[2])}}let w=false;B.onTriggered=function(){if(N){if(i.frameStore.shadowPass)return;X()}if(!i.frameStore.shadowPass){if(!F.isUsed&&!w){t.setUiError("lightUsed","No operator is using this light. Make sure this op is positioned before an operator that uses lights. Also make sure there is an operator that uses lights after this.",1);w=true}else if(!F.isUsed&&w){}else if(F.isUsed&&w){t.setUiError("lightUsed",null);w=false}else if(F.isUsed&&!w){}F.isUsed=false}if(U){F.color=[h.get(),u.get(),c.get()];F.specular=[g.get(),d.get(),_.get()];F.intensity=n.get();F.castLight=s.get();F.position=[r.get(),a.get(),o.get()];F.updateProjectionMatrix(x.get(),b.get(),v.get(),null);F.castShadow=m.get();F.normalOffset=C.get();F.shadowBias=I.get();F.shadowStrength=E.get();U=false}if(!i.frameStore.lightStack)i.frameStore.lightStack=[];if(!i.frameStore.shadowPass)H();i.frameStore.lightStack.push(F);if(m.get()){const e=1.5*R.get()*D;if(T.get())F.renderPasses(S.get(),e,function(){V.trigger()});F.blurAmount=R.get();M.set(null);M.set(F.getShadowMapDepth());i.frameStore.lightStack.pop();i.frameStore.lightStack.push(F)}else{M.set(null)}V.trigger();i.frameStore.lightStack.pop()}};Ops.Gl.Phong.DirectionalLight_v5.prototype=new CABLES.Op;CABLES.OPS["9f41bf91-f4e0-4ce4-89d8-72627b76261e"]={f:Ops.Gl.Phong.DirectionalLight_v5,objName:"Ops.Gl.Phong.DirectionalLight_v5"};Ops.Anim.RandomAnim=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const i=e.inTrigger("exe"),s=e.inValue("min",0),n=e.inValue("max",1),r=e.inValue("random seed",0),a=e.inValue("duration",.5),o=e.inValue("pause between",0),l=e.outTrigger("Next"),h=e.outNumber("result"),u=e.outTrigger("Looped");const c=new CABLES.Anim;c.createPort(e,"easing",p);e.setPortGroup("Timing",[a,o]);e.setPortGroup("Value",[s,n,r]);e.toWorkPortsNeedToBeLinked(i);let f=0;s.onChange=n.onChange=o.onChange=r.onChange=a.onChange=d;let g=true;function d(){g=true}function _(){const e=s.get();return Math.seededRandom()*(n.get()-e)+e}function p(){Math.randomSeed=r.get()+f*100;m(_());g=false}function m(e){c.clear();c.setValue(CABLES.now()/1e3,e);if(o.get()!==0)c.setValue(CABLES.now()/1e3+o.get(),e);c.setValue(a.get()+CABLES.now()/1e3+o.get(),_())}i.onTriggered=T;function T(){if(g)p();const e=CABLES.now()/1e3;const t=c.getValue(e);if(c.hasEnded(e)){f++;c.clear();m(t);u.trigger()}h.set(t);l.trigger()}};Ops.Anim.RandomAnim.prototype=new CABLES.Op;CABLES.OPS["2d2e5f0e-b69f-4789-9a48-1ee6ade5049a"]={f:Ops.Anim.RandomAnim,objName:"Ops.Anim.RandomAnim"};Ops.Gl.Matrix.OrbitControls_v3=function(){CABLES.Op.apply(this,arguments);const n=this;const w=n.attachments={};const B=n.inTrigger("render"),r=n.inValueFloat("min distance",1),a=n.inValueFloat("max distance",999999),o=n.inValue("min rot y",0),l=n.inValue("max rot y",0),t=n.inValue("initial radius",2),i=n.inValueSlider("initial axis y",.5),s=n.inValueSlider("initial axis x",.25),e=n.inValueSlider("Smoothness",1),G=n.inValue("Speed X",1),V=n.inValue("Speed Y",1),D=n.inValueBool("Active",true),k=n.inValueBool("Allow Panning",true),X=n.inValueBool("Allow Zooming",true),z=n.inValueBool("Allow Rotation",true),H=n.inValueBool("restricted",true),j=n.inBool("Identity",true),Y=n.inTriggerButton("Reset"),W=n.outTrigger("trigger"),K=n.outNumber("radius"),q=n.outNumber("Rot X"),Q=n.outNumber("Rot Y");n.setPortGroup("Initial Values",[i,s,t]);n.setPortGroup("Interaction",[e,G,V]);n.setPortGroup("Boundaries",[o,l,r,a]);const Z=Math.PI;const h=Math.PI*2;const u=vec3.create(),c=vec3.create(),f=mat4.create(),J=mat4.create(),g=vec3.create(),$=vec3.create(),d=vec3.create(),_=vec3.create(),p=vec3.create(),m=vec3.create();let T=vec3.create(),A=false,E=5,x=0,b=0,v=0,I=0,S=0,C=0,ee=1,R=null,te=true,ie=[0,0,0,0,0,0],P=0;n.onDelete=U;e.onChange=ne;t.onChange=Y.onTriggered=se;T=y(0);vec3.set(c,0,0,0);vec3.set(u,0,1,0);ne();se();function se(){let e=0;if(S%h<-Z){e=-h;S%=-h}else if(S%h>Z){e=h;S%=h}else S%=h;C%=Math.PI;vec3.set(g,0,0,0);vec3.set(c,0,0,0);vec3.set(u,0,1,0);v=s.get()*Math.PI*2+e;I=i.get()-.5;E=t.get();T=y(I)}function ne(){ee=e.get()*10+1}function O(e,t){if(te)return t;return e+(t-e)/ee}B.onTriggered=function(){const e=n.patch.cg;if(!e)return;if(!R){fe(e.canvas);N()}e.pushViewMatrix();S=O(S,v);C=O(C,I);let t=(C+.5)*180;if(o.get()!==0&&t<o.get()){t=o.get();C=P}else if(l.get()!==0&&t>l.get()){t=l.get();C=P}else{P=C}const i=S*CGL.RAD2DEG;Q.set(t);q.set(i);re(T,C);vec3.add(d,T,g);vec3.add(p,c,g);_[0]=O(_[0],d[0]);_[1]=O(_[1],d[1]);_[2]=O(_[2],d[2]);m[0]=O(m[0],p[0]);m[1]=O(m[1],p[1]);m[2]=O(m[2],p[2]);const s=vec3.create();if(j.get())mat4.identity(e.vMatrix);mat4.lookAt(f,_,m,u);mat4.rotate(f,f,S,u);mat4.multiply(e.vMatrix,e.vMatrix,f);W.trigger();e.popViewMatrix();te=false};function re(e,t){if(E<r.get())E=r.get();if(E>a.get())E=a.get();K.set(E);let i=0,s=0;s=360*t/2*CGL.DEG2RAD;vec3.set(e,Math.cos(s)*E,Math.sin(s)*E,0);return e}function y(e){if(E<r.get())E=r.get();if(E>a.get())E=a.get();K.set(E);let t=0,i=0;const s=vec3.create();i=360*e/2*CGL.DEG2RAD;vec3.set(s,Math.cos(i)*E,Math.sin(i)*E,0);return s}function L(e){if(!A)return;const t=e.clientX;const i=e.clientY;let s=t-x;let n=i-b;s*=G.get();n*=V.get();if(e.buttons==2&&k.get()){g[2]+=s*.01;g[1]+=n*.01}else if(e.buttons==4&&X.get()){E+=n*.05;T=y(I)}else{if(z.get()){v+=s*.003;I+=n*.002;if(H.get()){if(I>.5)I=.5;if(I<-.5)I=-.5}}}x=t;b=i}function M(e){x=e.clientX;b=e.clientY;A=true;try{R.setPointerCapture(e.pointerId)}catch(e){}}function F(e){A=false;try{R.releasePointerCapture(e.pointerId)}catch(e){}}function ae(){const e=n.patch.cg.canvas;if(document.pointerLockElement===e||document.mozPointerLockElement===e||document.webkitPointerLockElement===e)document.addEventListener("mousemove",L,false)}function oe(e){}s.onChange=function(){S=v=s.get()*Math.PI*2};i.onChange=function(){C=I=i.get()-.5;T=y(I)};const le=function(e){if(X.get()){const t=CGL.getWheelSpeed(e)*.06;E+=parseFloat(t)*1.2;T=y(I)}};const he=function(e){if(e.touches&&e.touches.length>0)M(e.touches[0])};const ue=function(e){F()};const ce=function(e){if(e.touches&&e.touches.length>0)L(e.touches[0])};D.onChange=function(){if(D.get())N();else U()};function fe(e){U();R=e;N()}function N(){if(!R)return;R.addEventListener("pointermove",L);R.addEventListener("pointerdown",M);R.addEventListener("pointerup",F);R.addEventListener("pointerleave",F);R.addEventListener("pointerenter",oe);R.addEventListener("contextmenu",function(e){e.preventDefault()});R.addEventListener("wheel",le,{passive:true})}function U(){if(!R)return;R.removeEventListener("pointermove",L);R.removeEventListener("pointerdown",M);R.removeEventListener("pointerup",F);R.removeEventListener("pointerleave",F);R.removeEventListener("pointerenter",F);R.removeEventListener("wheel",le)}};Ops.Gl.Matrix.OrbitControls_v3.prototype=new CABLES.Op;CABLES.OPS["0655b098-d2a8-4ce2-a0b9-ecb2c78f873a"]={f:Ops.Gl.Matrix.OrbitControls_v3,objName:"Ops.Gl.Matrix.OrbitControls_v3"};window.addEventListener("load",function(e){CABLES.jsLoaded=new Event("CABLES.jsLoaded");document.dispatchEvent(CABLES.jsLoaded)});(()=>{"use strict";var e={};class u{constructor(e){this.initiator=e}stack(e){console.info("["+this.initiator+"] ",e);console.log((new Error).stack)}groupCollapsed(e){if(CABLES.UI&&CABLES.UI.logFilter.filterLog({initiator:this.initiator,level:0},...arguments)||!CABLES.logSilent)console.log("["+this.initiator+"]",...arguments);console.groupCollapsed("["+this.initiator+"] "+e)}table(e){console.table(e)}groupEnd(){console.groupEnd()}error(){if(CABLES.UI&&CABLES.UI.logFilter.filterLog({initiator:this.initiator,level:2},...arguments)||!CABLES.logSilent)console.error("["+this.initiator+"]",...arguments)}errorGui(){if(CABLES.UI)CABLES.UI.logFilter.filterLog({initiator:this.initiator,level:2},...arguments)}warn(){if(CABLES.UI&&CABLES.UI.logFilter.filterLog({initiator:this.initiator,level:1},...arguments)||!CABLES.logSilent)console.warn("["+this.initiator+"]",...arguments)}verbose(){if(CABLES.UI&&CABLES.UI.logFilter.filterLog({initiator:this.initiator,level:0},...arguments)||!CABLES.logSilent)console.log("["+this.initiator+"]",...arguments)}info(){if(CABLES.UI&&CABLES.UI.logFilter.filterLog({initiator:this.initiator,level:0},...arguments)||!CABLES.logSilent)console.info("["+this.initiator+"]",...arguments)}log(){if(CABLES.UI&&CABLES.UI.logFilter.filterLog({initiator:this.initiator,level:0},...arguments)||!CABLES.logSilent)console.log("["+this.initiator+"]",...arguments)}logGui(){if(CABLES.UI)CABLES.UI.logFilter.filterLog({initiator:this.initiator,level:0},...arguments)}userInteraction(e){}}const n={};n.float32Concat=function(e,t){if(!(e instanceof Float32Array))e=new Float32Array(e);if(!(t instanceof Float32Array))t=new Float32Array(t);const i=new Float32Array(e.length+t.length);i.set(e);i.set(t,e.length);return i};const w=function(e){let t=e.split(".")[e.split(".").length-1];if(t.contains(CONSTANTS.OP.OP_VERSION_PREFIX)){const i=t.split(CONSTANTS.OP.OP_VERSION_PREFIX)[1];t=t.substring(0,t.length-(CONSTANTS.OP.OP_VERSION_PREFIX+i).length)}return t};const B=function(t){for(let e=t.length-1;e>0;e--){const i=Math.floor(Math.seededRandom()*(e+1));const s=t[e];t[e]=t[i];t[i]=s}return t};const t={};const i=function(){let e=Math.random().toString(36).substr(2,9);if(t.hasOwnProperty(e))e=i();t[e]=true;return e};const G=null&&i;const s=function(){let i=(new Date).getTime();const e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{const t=(i+Math.random()*16)%16|0;i=Math.floor(i/16);return(e=="x"?t:t&3|8).toString(16)});return e};const V=null&&s;const D=null&&s;function r(e){for(const t in e){if(e[t]&&typeof objValue==="object"&&e[t].constructor===Object)e[t]=r(e[t]);if(e[t]===null||e[t]===undefined)delete e[t];else if(Array.isArray(e[t])&&e[t].length==0)delete e[t]}return e}const a=function(i,e="id"){let s=0;if(Array.prototype.reduce){s=i.split("").reduce((e,t)=>{e=(e<<5)-e+t.charCodeAt(0);return e&e},0)}else{if(i.length>0){for(let t=0;t<i.length;t++){let e=i.charCodeAt(t);s=(s<<5)-s+e;s&=s}}}return e+""+s};const k=null&&a;let o=0;const X=function(){o++;return o};const z=function(e){const t=Math.max(0,Math.min(1,(e-0)/(1-0)));e=t*t*(3-2*t);return e};const H=function(e){const t=Math.max(0,Math.min(1,(e-0)/(1-0)));e=t*t*t*(t*(t*6-15)+10);return e};const j=function(e,t,i){return Math.min(Math.max(e,t),i)};const Y=function(e,t,i,s,n,r){if(e>=i)return n;if(e<=t)return s;let a=false;const o=Math.min(t,i);const l=Math.max(t,i);if(o!=t)a=true;let h=false;const u=Math.min(s,n);const c=Math.max(s,n);if(u!=s)h=true;let f=0;let g=0;if(a)f=(l-e)*(c-u)/(l-o);else f=(e-o)*(c-u)/(l-o);if(h)g=c-f;else g=f+u;if(!r)return g;if(r==1){e=Math.max(0,Math.min(1,(g-s)/(n-s)));return s+e*e*(3-2*e)*(n-s)}if(r==2){e=Math.max(0,Math.min(1,(g-s)/(n-s)));return s+e*e*e*(e*(e*6-15)+10)*(n-s)}return g};Math.randomSeed=1;Math.setRandomSeed=function(e){Math.randomSeed=e*50728129;if(e!=0){Math.randomSeed=Math.seededRandom()*17624813;Math.randomSeed=Math.seededRandom()*9737333}};Math.seededRandom=function(e,t){if(Math.randomSeed===0)Math.randomSeed=Math.random()*999;e=e||1;t=t||0;Math.randomSeed=(Math.randomSeed*9301+49297)%233280;const i=Math.randomSeed/233280;return t+i*(e-t)};n.isNumeric=function(e){return!isNaN(parseFloat(e))&&isFinite(e)};n.isArray=function(e){return Object.prototype.toString.call(e)==="[object Array]"};String.prototype.endl=function(){return this+"\n"};String.prototype.startsWith=function(e){return this.indexOf(e)===0};String.prototype.endsWith=String.prototype.endsWith||function(e){return this.match(e+"$")==e};String.prototype.contains=String.prototype.contains||function(e){return this.indexOf(e)>-1};const W=function(e=""){if(!e)return"";if(e.startsWith("data:"))return;if(e.contains("?"))e+="&";else e+="?";return e+"cache="+CABLES.uuid()};const K=function(t,i){if(!t)return null;i=i||[];i.length=t.length;for(let e=0;e<t.length;e++){i[e]=t[e]}return i};const q=function(e){let t=CABLES.filename(e);const i=t.split(".");t=i[0];return t};const Q=function(){console.log("logstack",(new Error).stack)};const Z=function(e){let t="";if(!e)return"";if(e.startsWith("data:")&&e.contains(":")){const i=e.split(",");return i[0]}let i=(e+"").split("/");if(i.length>0){const s=i[i.length-1];let e=s.split("?");t=e[0]}return t||""};const J=function(e,t,i,s,n){h({url:e,cb:t,method:i,data:s,contenttype:n,sync:true})};const $=function(e,t,i,s,n,r,a={},o={}){const l={url:e,cb:t,method:i,data:s,contenttype:n,sync:false,jsonP:r,headers:a};if(o&&o.credentials)l.credentials=o.credentials;h(l)};const h=function(t){if(!t.hasOwnProperty("asynch"))t.asynch=true;let i;try{i=new XMLHttpRequest}catch(e){}i.onreadystatechange=function(){if(i.readyState!=4)return;if(t.cb){if(i.status==200||i.status==0)t.cb(false,i.responseText,i);else t.cb(true,i.responseText,i)}};try{i.open(t.method?t.method.toUpperCase():"GET",t.url,!t.sync)}catch(e){if(t.cb&&e)t.cb(true,e.msg,i)}if(typeof t.headers==="object"){if(t.headers){const s=Object.keys(t.headers);for(let e=0;e<s.length;e++){const n=s[e];const r=t.headers[n];i.setRequestHeader(n,r)}}}if(t.credentials&&t.credentials!=="omit"){i.withCredentials=true}try{if(!t.post&&!t.data){i.send()}else{i.setRequestHeader("Content-type",t.contenttype?t.contenttype:"application/x-www-form-urlencoded");i.send(t.data||t.post)}}catch(e){if(t.cb)t.cb(true,e.msg,i)}};const ee=function(e){if(!e&&e!==0)return"Unidentified";const t={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"};if(t[e]){return t[e]}else{return String.fromCharCode(e)}};window.performance=window.performance||{offset:Date.now(),now:function e(){return Date.now()-this.offset}};const l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";const c=new Uint8Array(256);for(let e=0;e<l.length;e++)c[l.charCodeAt(e)]=e;const f=c;const te=function(e){if(e.buffer)e=e.buffer;let t=new Uint8Array(e),i,s=t.length,n="";for(i=0;i<s;i+=3){n+=l[t[i]>>2];n+=l[(t[i]&3)<<4|t[i+1]>>4];n+=l[(t[i+1]&15)<<2|t[i+2]>>6];n+=l[t[i+2]&63]}if(s%3===2)n=n.substring(0,n.length-1)+"=";else if(s%3===1)n=n.substring(0,n.length-2)+"==";return n};const g=function(e){let t=e.length*.75,i=e.length,s,n=0,r,a,o,l;if(e[e.length-1]==="="){t--;if(e[e.length-2]==="=")t--}let h=new ArrayBuffer(t),u=new Uint8Array(h);for(s=0;s<i;s+=4){r=f[e.charCodeAt(s)];a=f[e.charCodeAt(s+1)];o=f[e.charCodeAt(s+2)];l=f[e.charCodeAt(s+3)];u[n++]=r<<2|a>>4;u[n++]=(a&15)<<4|o>>2;u[n++]=(o&3)<<6|l&63}return h};class d{constructor(e){this._init();this._first=true;this._wireMesh=null;if(e)this.apply(e)}_init(){this._max=[-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE];this._min=[Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE];this._center=[0,0,0];this._size=[0,0,0];this._maxAxis=0;this._first=true}get maxAxis(){return this._maxAxis||1}get size(){return this._size}get center(){return this._center}get x(){return this._center[0]}get y(){return this._center[1]}get z(){return this._center[2]}get minX(){return this._min[0]}get minY(){return this._min[1]}get minZ(){return this._min[2]}get maxX(){return this._max[0]}get maxY(){return this._max[1]}get maxZ(){return this._max[2]}apply(t,e){if(!t){return}if(t instanceof d){const i=t;this.applyPos(i.maxX,i.maxY,i.maxZ);this.applyPos(i.minX,i.minY,i.minZ)}else{for(let e=0;e<t.vertices.length;e+=3)this.applyPos(t.vertices[e],t.vertices[e+1],t.vertices[e+2])}this.calcCenterSize()}copy(){return new d(this)}get changed(){return!(this._max[0]==-Number.MAX_VALUE&&this._max[1]==-Number.MAX_VALUE&&this._max[2]==-Number.MAX_VALUE)}applyPos(e,t,i){if(e==Number.MAX_VALUE||e==-Number.MAX_VALUE||t==Number.MAX_VALUE||t==-Number.MAX_VALUE||i==Number.MAX_VALUE||i==-Number.MAX_VALUE)return;if(!CABLES.UTILS.isNumeric(e)||!CABLES.UTILS.isNumeric(t)||!CABLES.UTILS.isNumeric(i))return;if(this._first){this._max[0]=e;this._max[1]=t;this._max[2]=i;this._min[0]=e;this._min[1]=t;this._min[2]=i;this._first=false;return}this._max[0]=Math.max(this._max[0],e);this._max[1]=Math.max(this._max[1],t);this._max[2]=Math.max(this._max[2],i);this._min[0]=Math.min(this._min[0],e);this._min[1]=Math.min(this._min[1],t);this._min[2]=Math.min(this._min[2],i)}calcCenterSize(){if(this._first)return;this._size[0]=this._max[0]-this._min[0];this._size[1]=this._max[1]-this._min[1];this._size[2]=this._max[2]-this._min[2];this._center[0]=(this._min[0]+this._max[0])/2;this._center[1]=(this._min[1]+this._max[1])/2;this._center[2]=(this._min[2]+this._max[2])/2;this._maxAxis=Math.max(this._size[2],Math.max(this._size[0],this._size[1]))}mulMat4(e){if(this._first){this._max[0]=0;this._max[1]=0;this._max[2]=0;this._min[0]=0;this._min[1]=0;this._min[2]=0;this._first=false}vec3.transformMat4(this._max,this._max,e);vec3.transformMat4(this._min,this._min,e);this.calcCenterSize()}render(e,t,i){if(!this._wireMesh)this._wireMesh=new CGL.WireCube(e);e.pushModelMatrix();mat4.translate(e.mMatrix,e.mMatrix,this._center);if(CABLES.UI&&i){CABLES.UI.OverlayMeshes.drawCube(i,this._size[0]/2,this._size[1]/2,this._size[2]/2)}e.popModelMatrix()}}const _=function(e){this.name=e||"unknown";this._log=new u("cgl_geometry");this.faceVertCount=3;this.glPrimitive=null;this._attributes={};this._vertices=[];this.verticesIndices=[];this.isGeometry=true;this.morphTargets=[];Object.defineProperty(this,"vertices",{get(){return this._vertices},set(e){this.setVertices(e)}});Object.defineProperty(this,"texCoords",{get(){const e=this.getAttribute("texCoords");if(!e)return[];return e.data},set(e){this.setAttribute("texCoords",e,2)}});Object.defineProperty(this,"vertexNormals",{get(){const e=this.getAttribute("vertexNormals");if(!e)return[];return e.data},set(e){this.setAttribute("vertexNormals",e,3)}});Object.defineProperty(this,"tangents",{get(){const e=this.getAttribute("tangents");if(!e)return[];return e.data},set(e){this.setAttribute("tangents",e,3)}});Object.defineProperty(this,"biTangents",{get(){const e=this.getAttribute("biTangents");if(!e)return[];return e.data},set(e){this.setAttribute("biTangents",e,3)}});Object.defineProperty(this,"vertexColors",{get(){const e=this.getAttribute("vertexColors");if(!e)return[];return e.data},set(e){this.setAttribute("vertexColors",e,4)}})};_.prototype.clear=function(){this._vertices=new Float32Array([]);this.verticesIndices=[];this.texCoords=new Float32Array([]);this.vertexNormals=new Float32Array([]);this.tangents=[];this.biTangents=[];this._attributes={}};_.prototype.getAttributes=function(){return this._attributes};_.prototype.getAttribute=function(e){for(const t in this._attributes){if(this._attributes[t].name==e)return this._attributes[t]}return null};_.prototype.setAttribute=function(e,t,i){let s="";if(!i||i>4){console.log("itemsize wrong?",i,e);this._log.stack("itemsize");i=3}if(i==1)s="float";else if(i==2)s="vec2";else if(i==3)s="vec3";else if(i==4)s="vec4";const n={name:e,data:t,itemSize:i,type:s};this._attributes[e]=n};_.prototype.copyAttribute=function(e,t){const i=this.getAttribute(e);t.setAttribute(e,new Float32Array(i.data),i.itemSize)};_.prototype.setVertices=function(e){if(e instanceof Float32Array)this._vertices=e;else this._vertices=new Float32Array(e)};_.prototype.setTexCoords=function(e){if(e instanceof Float32Array)this.texCoords=e;else this.texCoords=new Float32Array(e)};_.prototype.calcNormals=function(e){const t={smooth:e};this.calculateNormals(t)};_.prototype.flipNormals=function(t,i,s){let n=vec3.create();if(t==undefined)t=1;if(i==undefined)i=1;if(s==undefined)s=1;for(let e=0;e<this.vertexNormals.length;e+=3){vec3.set(n,this.vertexNormals[e+0],this.vertexNormals[e+1],this.vertexNormals[e+2]);n[0]*=-t;n[1]*=-i;n[2]*=-s;vec3.normalize(n,n);this.vertexNormals[e+0]=n[0];this.vertexNormals[e+1]=n[1];this.vertexNormals[e+2]=n[2]}};_.prototype.getNumTriangles=function(){if(this.verticesIndices&&this.verticesIndices.length)return this.verticesIndices.length/3;return this.vertices.length/3};_.prototype.flipVertDir=function(){const t=[];t.length=this.verticesIndices.length;for(let e=0;e<this.verticesIndices.length;e+=3){t[e]=this.verticesIndices[e+2];t[e+1]=this.verticesIndices[e+1];t[e+2]=this.verticesIndices[e]}this.verticesIndices=t};_.prototype.setPointVertices=function(t){if(t.length%3!==0){this._log.error("SetPointVertices: Array must be multiple of three.");return}if(!(t instanceof Float32Array))this.vertices=new Float32Array(t);else this.vertices=t;if(!(this.texCoords instanceof Float32Array))this.texCoords=new Float32Array(t.length/3*2);this.verticesIndices.length=t.length/3;for(let e=0;e<t.length/3;e++){this.verticesIndices[e]=e;this.texCoords[e*2]=0;this.texCoords[e*2+1]=0}};_.prototype.merge=function(t){if(!t)return;if(this.isIndexed()!=t.isIndexed()){if(this.isIndexed()){this.unIndex(false,true)}if(t.isIndexed()){const e=t.copy();e.unIndex(false,true);t=e}}const i=this.verticesIndices.length;const s=this._vertices.length/3;this.verticesIndices.length+=t.verticesIndices.length;for(let e=0;e<t.verticesIndices.length;e++)this.verticesIndices[i+e]=t.verticesIndices[e]+s;this.vertices=n.float32Concat(this._vertices,t.vertices);this.texCoords=n.float32Concat(this.texCoords,t.texCoords);this.vertexNormals=n.float32Concat(this.vertexNormals,t.vertexNormals);this.tangents=n.float32Concat(this.tangents,t.tangents);this.biTangents=n.float32Concat(this.biTangents,t.biTangents)};_.prototype.copy=function(){const t=new _(this.name+" copy");t.faceVertCount=this.faceVertCount;t.glPrimitive=this.glPrimitive;t.setVertices(this._vertices.slice(0));if(this.verticesIndices){t.verticesIndices.length=this.verticesIndices.length;for(let e=0;e<this.verticesIndices.length;e++)t.verticesIndices[e]=this.verticesIndices[e]}for(let e in this._attributes)this.copyAttribute(e,t);t.morphTargets.length=this.morphTargets.length;for(let e=0;e<this.morphTargets.length;e++)t.morphTargets[e]=this.morphTargets[e];return t};_.prototype.calculateNormals=function(t){t=t||{};if(t.smooth===false)this.unIndex();const i=vec3.create();const s=vec3.create();const n=vec3.create();function r(e){vec3.subtract(i,e[0],e[1]);vec3.subtract(s,e[0],e[2]);vec3.cross(n,i,s);vec3.normalize(n,n);if(t&&t.forceZUp){if(n[2]<0){n[0]*=-1;n[1]*=-1;n[2]*=-1}}return n}this.getVertexVec=function(e){const t=[0,0,0];t[0]=this.vertices[e*3+0];t[1]=this.vertices[e*3+1];t[2]=this.vertices[e*3+2];return t};if(!(this.vertexNormals instanceof Float32Array)||this.vertexNormals.length!=this.vertices.length)this.vertexNormals=new Float32Array(this.vertices.length);for(let e=0;e<this.vertices.length;e++){this.vertexNormals[e]=0}if(!this.isIndexed()){const a=[];for(let e=0;e<this.vertices.length;e+=9){const o=[[this.vertices[e+0],this.vertices[e+1],this.vertices[e+2]],[this.vertices[e+3],this.vertices[e+4],this.vertices[e+5]],[this.vertices[e+6],this.vertices[e+7],this.vertices[e+8]]];const l=r(o);a.push(l[0],l[1],l[2],l[0],l[1],l[2],l[0],l[1],l[2])}this.vertexNormals=a}else{const h=[];h.length=Math.floor(this.verticesIndices.length/3);for(let e=0;e<this.verticesIndices.length;e+=3){const o=[this.getVertexVec(this.verticesIndices[e+0]),this.getVertexVec(this.verticesIndices[e+1]),this.getVertexVec(this.verticesIndices[e+2])];h[e/3]=r(o);this.vertexNormals[this.verticesIndices[e+0]*3+0]+=h[e/3][0];this.vertexNormals[this.verticesIndices[e+0]*3+1]+=h[e/3][1];this.vertexNormals[this.verticesIndices[e+0]*3+2]+=h[e/3][2];this.vertexNormals[this.verticesIndices[e+1]*3+0]+=h[e/3][0];this.vertexNormals[this.verticesIndices[e+1]*3+1]+=h[e/3][1];this.vertexNormals[this.verticesIndices[e+1]*3+2]+=h[e/3][2];this.vertexNormals[this.verticesIndices[e+2]*3+0]+=h[e/3][0];this.vertexNormals[this.verticesIndices[e+2]*3+1]+=h[e/3][1];this.vertexNormals[this.verticesIndices[e+2]*3+2]+=h[e/3][2]}for(let t=0;t<this.verticesIndices.length;t+=3){for(let e=0;e<3;e++){const u=[this.vertexNormals[this.verticesIndices[t+e]*3+0],this.vertexNormals[this.verticesIndices[t+e]*3+1],this.vertexNormals[this.verticesIndices[t+e]*3+2]];vec3.normalize(u,u);this.vertexNormals[this.verticesIndices[t+e]*3+0]=u[0];this.vertexNormals[this.verticesIndices[t+e]*3+1]=u[1];this.vertexNormals[this.verticesIndices[t+e]*3+2]=u[2]}}}};_.prototype.calcTangentsBitangents=function(){if(!this.vertices.length){return}if(!this.vertexNormals.length){return}if(!this.texCoords.length){const E=this.vertices.length/3*2;this.texCoords=new Float32Array(E);for(let e=0;e<E;e+=1)this.texCoords[e]=0}if(!this.verticesIndices||!this.verticesIndices.length){return}if(this.verticesIndices.length%3!==0){this._log.error("Vertex indices mismatch!");return}const t=this.verticesIndices.length/3;const i=this.vertices.length/3;this.tangents=new Float32Array(this.vertexNormals.length);this.biTangents=new Float32Array(this.vertexNormals.length);const s=[];s.length=i*2;const n=vec3.create();const r=vec3.create();const a=vec3.create();const o=vec2.create();const l=vec2.create();const h=vec2.create();const u=vec3.create();const c=vec3.create();for(let e=0;e<t;e+=1){const x=this.verticesIndices[e*3];const b=this.verticesIndices[e*3+1];const v=this.verticesIndices[e*3+2];vec3.set(n,this.vertices[x*3],this.vertices[x*3+1],this.vertices[x*3+2]);vec3.set(r,this.vertices[b*3],this.vertices[b*3+1],this.vertices[b*3+2]);vec3.set(a,this.vertices[v*3],this.vertices[v*3+1],this.vertices[v*3+2]);vec2.set(o,this.texCoords[x*2],this.texCoords[x*2+1]);vec2.set(l,this.texCoords[b*2],this.texCoords[b*2+1]);vec2.set(h,this.texCoords[v*2],this.texCoords[v*2+1]);const I=r[0]-n[0];const S=a[0]-n[0];const C=r[1]-n[1];const R=a[1]-n[1];const P=r[2]-n[2];const O=a[2]-n[2];const y=l[0]-o[0];const L=h[0]-o[0];const M=l[1]-o[1];const F=h[1]-o[1];const N=1/(y*F-L*M);vec3.set(u,(F*I-M*S)*N,(F*C-M*R)*N,(F*P-M*O)*N);vec3.set(c,(y*S-L*I)*N,(y*R-L*C)*N,(y*O-L*P)*N);s[x]=u;s[b]=u;s[v]=u;s[x+i]=c;s[b+i]=c;s[v+i]=c}const f=vec3.create();const g=vec3.create();const d=vec3.create();const _=vec3.create();const p=vec3.create();const m=vec3.create();const T=vec3.create();const A=vec3.create();for(let e=0;e<i;e+=1){if(!s[e])continue;vec3.set(f,this.vertexNormals[e*3],this.vertexNormals[e*3+1],this.vertexNormals[e*3+2]);vec3.set(g,s[e][0],s[e][1],s[e][2]);const U=vec3.dot(f,g);vec3.scale(p,f,U);vec3.subtract(m,g,p);vec3.normalize(A,m);vec3.cross(T,f,g);const w=1;vec3.scale(d,A,1/w);vec3.cross(_,f,d);this.tangents[e*3+0]=d[0];this.tangents[e*3+1]=d[1];this.tangents[e*3+2]=d[2];this.biTangents[e*3+0]=_[0];this.biTangents[e*3+1]=_[1];this.biTangents[e*3+2]=_[2]}};_.prototype.isIndexed=function(){if(this._vertices.length==0)return true;return this.verticesIndices.length!=0};_.prototype.unIndex=function(e,t){const i=[];const s=[];let n=0;for(let e in this._attributes){const r=this._attributes[e];let i=[];for(let t=0;t<this.verticesIndices.length;t+=3){for(let e=0;e<3;e++){if(r.itemSize==3)i.push(r.data[this.verticesIndices[t+e]*3+0],r.data[this.verticesIndices[t+e]*3+1],r.data[this.verticesIndices[t+e]*3+2]);else if(r.itemSize==4)i.push(r.data[this.verticesIndices[t+e]*4+0],r.data[this.verticesIndices[t+e]*4+1],r.data[this.verticesIndices[t+e]*4+2],r.data[this.verticesIndices[t+e]*4+3]);else if(r.itemSize==2)i.push(r.data[this.verticesIndices[t+e]*2+0],r.data[this.verticesIndices[t+e]*2+1]);else if(r.itemSize==1)i.push(r.data[this.verticesIndices[t+e]]);else console.log("unknown attr",r)}}this.setAttribute(r.name,i,r.itemSize)}for(let e=0;e<this.verticesIndices.length;e+=3){i.push(this.vertices[this.verticesIndices[e+0]*3+0],this.vertices[this.verticesIndices[e+0]*3+1],this.vertices[this.verticesIndices[e+0]*3+2]);s.push(n);n++;i.push(this.vertices[this.verticesIndices[e+1]*3+0],this.vertices[this.verticesIndices[e+1]*3+1],this.vertices[this.verticesIndices[e+1]*3+2]);s.push(n);n++;i.push(this.vertices[this.verticesIndices[e+2]*3+0],this.vertices[this.verticesIndices[e+2]*3+1],this.vertices[this.verticesIndices[e+2]*3+2]);s.push(n);n++}this.vertices=i;this.verticesIndices=[];if(e)this.verticesIndices=s;if(!t)this.calculateNormals()};_.prototype.calcBarycentric=function(){let t=[];t.length=this.vertices.length;for(let e=0;e<this.vertices.length;e++)t[e]=0;let i=0;for(let e=0;e<this.vertices.length;e+=3){t[e+i]=1;i++;if(i==3)i=0}this.setAttribute("attrBarycentric",t,3)};_.prototype.getBounds=function(){return new d(this)};_.prototype.center=function(e,t,i){if(e===undefined){e=true;t=true;i=true}let s=0;const n=this.getBounds();const r=[n.minX+(n.maxX-n.minX)/2,n.minY+(n.maxY-n.minY)/2,n.minZ+(n.maxZ-n.minZ)/2];for(s=0;s<this.vertices.length;s+=3){if(this.vertices[s+0]==this.vertices[s+0]){if(e)this.vertices[s+0]-=r[0];if(t)this.vertices[s+1]-=r[1];if(i)this.vertices[s+2]-=r[2]}}return r};_.prototype.mapTexCoords2d=function(){const t=this.getBounds();const i=this.vertices.length/3;this.texCoords=new Float32Array(i*2);for(let e=0;e<i;e++){const s=this.vertices[e*3+0];const n=this.vertices[e*3+1];this.texCoords[e*2+0]=s/(t.maxX-t.minX)+.5;this.texCoords[e*2+1]=1-n/(t.maxY-t.minY)+.5}};_.prototype.getInfoOneLine=function(){let e="";if(this.faceVertCount==3&&this.verticesIndices)e+=this.verticesIndices.length/3;else e+=0;e+=" tris ";if(this.vertices)e+=this.vertices.length/3;else e+=0;e+=" verts";return e};_.prototype.getInfo=function(){const e={};if(this.faceVertCount==3&&this.verticesIndices)e.numFaces=this.verticesIndices.length/3;else e.numFaces=0;if(this.verticesIndices&&this.verticesIndices.length)e.indices=this.verticesIndices.length;if(this.vertices)e.numVerts=this.vertices.length/3;else e.numVerts=0;if(this.vertexNormals)e.numNormals=this.vertexNormals.length/3;else e.numNormals=0;if(this.texCoords)e.numTexCoords=this.texCoords.length/2;else e.numTexCoords=0;if(this.tangents)e.numTangents=this.tangents.length/3;else e.numTangents=0;if(this.biTangents)e.numBiTangents=this.biTangents.length/3;else e.numBiTangents=0;if(this.biTangents)e.numBiTangents=this.biTangents.length/3;else e.numBiTangents=0;if(this.vertexColors)e.numVertexColors=this.vertexColors.length/4;else e.numVertexColors=0;if(this.getAttributes())e.numAttribs=Object.keys(this.getAttributes()).length;else e.numAttribs=0;e.isIndexed=this.isIndexed();return e};_.buildFromFaces=function(t,e,i){const s=[];const n=[];for(let e=0;e<t.length;e+=3){const a=t[e+0];const o=t[e+1];const l=t[e+2];const h=[-1,-1,-1];if(i)for(let e=0;e<s.length;e+=3){if(s[e+0]==a[0]&&s[e+1]==a[1]&&s[e+2]==a[2])h[0]=e/3;if(s[e+0]==o[0]&&s[e+1]==o[1]&&s[e+2]==o[2])h[1]=e/3;if(s[e+0]==l[0]&&s[e+1]==l[1]&&s[e+2]==l[2])h[2]=e/3}if(h[0]==-1){s.push(a[0],a[1],a[2]);h[0]=(s.length-1)/3}if(h[1]==-1){s.push(o[0],o[1],o[2]);h[1]=(s.length-1)/3}if(h[2]==-1){s.push(l[0],l[1],l[2]);h[2]=(s.length-1)/3}n.push(parseInt(h[0],10));n.push(parseInt(h[1],10));n.push(parseInt(h[2],10))}const r=new _(e);r.name=e;r.vertices=s;r.verticesIndices=n;return r};_.json2geom=function(t){const i=new _("jsonMeshGeom");i.verticesIndices=[];i.vertices=t.vertices||[];i.vertexNormals=t.normals||[];i.vertexColors=t.colors||[];i.tangents=t.tangents||[];i.biTangents=t.bitangents||[];if(t.texturecoords)i.setTexCoords(t.texturecoords[0]);if(t.vertices_b64)i.vertices=new Float32Array(g(t.vertices_b64));if(t.normals_b64)i.vertexNormals=new Float32Array(g(t.normals_b64));if(t.tangents_b64)i.tangents=new Float32Array(g(t.tangents_b64));if(t.bitangents_b64)i.biTangents=new Float32Array(g(t.bitangents_b64));if(t.texturecoords_b64)i.setTexCoords(new Float32Array(g(t.texturecoords_b64[0])));if(t.faces_b64){i.verticesIndices=new Uint32Array(g(t.faces_b64))}else{i.verticesIndices.length=t.faces.length*3;for(let e=0;e<t.faces.length;e++){i.verticesIndices[e*3]=t.faces[e][0];i.verticesIndices[e*3+1]=t.faces[e][1];i.verticesIndices[e*3+2]=t.faces[e][2]}}return i};const p=function(){this._log=new u("eventtarget");this._eventCallbacks={};this._logName="";this._logEvents=false;this._listeners={};this.addEventListener=this.on=function(e,t,i){const s={id:(i||"")+CABLES.simpleId(),name:e,cb:t};if(!this._eventCallbacks[e])this._eventCallbacks[e]=[s];else this._eventCallbacks[e].push(s);this._listeners[s.id]=s;return s.id};this.hasEventListener=function(e,t){if(e&&!t){if(this._listeners[e])return true;else return false}else{this._log.warn("old eventtarget function haseventlistener!");if(e&&t){if(this._eventCallbacks[e]){const i=this._eventCallbacks[e].indexOf(t);if(i==-1)return false;return true}}}};this.hasListenerForEventName=function(e){return this._eventCallbacks[e]&&this._eventCallbacks[e].length>0};this.removeEventListener=this.off=function(s,t){if(s===null||s===undefined)return;if(!t){const n=this._listeners[s];if(!n){this._log.log("could not find event...");return}let i=true;while(i){i=false;let t=-1;for(let e=0;e<this._eventCallbacks[n.name].length;e++){if(this._eventCallbacks[n.name][e].id.startsWith(s)){i=true;t=e}}if(t!==-1){this._eventCallbacks[n.name].splice(t,1);delete this._listeners[s]}}return}this._log.info("[eventtaget] ","old function signature: removeEventListener! use listener id");this._log.log((new Error).stack);let i=null;for(let e=0;e<this._eventCallbacks[s].length;e++)if(this._eventCallbacks[s][e].cb==t)i=e;if(i!==null){delete this._eventCallbacks[i]}else this._log.warn("removeEventListener not found "+s)};this.logEvents=function(e,t){this._logEvents=e;this._logName=t};this.emitEvent=function(t,i,s,n,r,a,o){if(this._logEvents)this._log.log("[event] ",this._logName,t,this._eventCallbacks);if(this._eventCallbacks[t]){for(let e=0;e<this._eventCallbacks[t].length;e++){if(this._eventCallbacks[t][e]){this._eventCallbacks[t][e].cb(i,s,n,r,a,o)}}}else{if(this._logEvents)this._log.log("[event] has no event callback",t,this._eventCallbacks)}}};const m={ANIM:{EASINGS:["linear","absolute","smoothstep","smootherstep","Cubic In","Cubic Out","Cubic In Out","Expo In","Expo Out","Expo In Out","Sin In","Sin Out","Sin In Out","Quart In","Quart Out","Quart In Out","Quint In","Quint Out","Quint In Out","Back In","Back Out","Back In Out","Elastic In","Elastic Out","Bounce In","Bounce Out"],EASING_LINEAR:0,EASING_ABSOLUTE:1,EASING_SMOOTHSTEP:2,EASING_SMOOTHERSTEP:3,EASING_CUBICSPLINE:4,EASING_CUBIC_IN:5,EASING_CUBIC_OUT:6,EASING_CUBIC_INOUT:7,EASING_EXPO_IN:8,EASING_EXPO_OUT:9,EASING_EXPO_INOUT:10,EASING_SIN_IN:11,EASING_SIN_OUT:12,EASING_SIN_INOUT:13,EASING_BACK_IN:14,EASING_BACK_OUT:15,EASING_BACK_INOUT:16,EASING_ELASTIC_IN:17,EASING_ELASTIC_OUT:18,EASING_BOUNCE_IN:19,EASING_BOUNCE_OUT:21,EASING_QUART_IN:22,EASING_QUART_OUT:23,EASING_QUART_INOUT:24,EASING_QUINT_IN:25,EASING_QUINT_OUT:26,EASING_QUINT_INOUT:27},OP:{OP_PORT_TYPE_VALUE:0,OP_PORT_TYPE_NUMBER:0,OP_PORT_TYPE_FUNCTION:1,OP_PORT_TYPE_TRIGGER:1,OP_PORT_TYPE_OBJECT:2,OP_PORT_TYPE_TEXTURE:2,OP_PORT_TYPE_ARRAY:3,OP_PORT_TYPE_DYNAMIC:4,OP_PORT_TYPE_STRING:5,OP_VERSION_PREFIX:"_v"},PORT:{PORT_DIR_IN:0,PORT_DIR_OUT:1},PACO:{PACO_CLEAR:0,PACO_VALUECHANGE:1,PACO_OP_DELETE:2,PACO_UNLINK:3,PACO_LINK:4,PACO_LOAD:5,PACO_OP_CREATE:6,PACO_OP_ENABLE:7,PACO_OP_DISABLE:8,PACO_UIATTRIBS:9,PACO_VARIABLES:10,PACO_TRIGGERS:11,PACO_PORT_SETVARIABLE:12,PACO_PORT_SETANIMATED:13,PACO_PORT_ANIM_UPDATED:14,PACO_DESERIALIZE:15}};const T=function(e){this.time=0;this.value=0;this.onChange=null;this._easing=0;this.cb=null;this.cbTriggered=false;this.setEasing(m.ANIM.EASING_LINEAR);this.set(e)};T.cubicSpline=function(e,t,i){let s=t.value,n=t.bezTangOut,r=i.value,a=i.bezTangIn;let o=e;let l=o*o;let h=l*o;return(2*h-3*l+1)*s+(h-2*l+o)*n+(-2*h+3*l)*r+(h-l)*a};T.easeCubicSpline=function(e,t){return T.cubicSpline(e,this,t)};T.linear=function(e,t,i){return parseFloat(t.value)+parseFloat(i.value-t.value)*e};T.easeLinear=function(e,t){return T.linear(e,this,t)};T.easeAbsolute=function(e,t){return this.value};const A=function(e){return e=2**(10*(e-1))};T.easeExpoIn=function(e,t){e=A(e);return T.linear(e,this,t)};const E=function(e){e=-(2**(-10*e))+1;return e};T.easeExpoOut=function(e,t){e=E(e);return T.linear(e,this,t)};const x=function(e){e*=2;if(e<1){e=.5*2**(10*(e-1))}else{e--;e=.5*(-(2**(-10*e))+2)}return e};T.easeExpoInOut=function(e,t){e=x(e);return T.linear(e,this,t)};T.easeSinIn=function(e,t){e=-1*Math.cos(e*Math.PI/2)+1;return T.linear(e,this,t)};T.easeSinOut=function(e,t){e=Math.sin(e*Math.PI/2);return T.linear(e,this,t)};T.easeSinInOut=function(e,t){e=-.5*(Math.cos(Math.PI*e)-1);return T.linear(e,this,t)};const b=function(e){e=e*e*e;return e};T.easeCubicIn=function(e,t){e=b(e);return T.linear(e,this,t)};T.easeInQuint=function(e,t){e=e*e*e*e*e;return T.linear(e,this,t)};T.easeOutQuint=function(e,t){e=(e-=1)*e*e*e*e+1;return T.linear(e,this,t)};T.easeInOutQuint=function(e,t){if((e/=.5)<1)e=.5*e*e*e*e*e;else e=.5*((e-=2)*e*e*e*e+2);return T.linear(e,this,t)};T.easeInQuart=function(e,t){e=e*e*e*e;return T.linear(e,this,t)};T.easeOutQuart=function(e,t){e=-1*((e-=1)*e*e*e-1);return T.linear(e,this,t)};T.easeInOutQuart=function(e,t){if((e/=.5)<1)e=.5*e*e*e*e;else e=-.5*((e-=2)*e*e*e-2);return T.linear(e,this,t)};T.bounce=function(e){if((e/=1)<1/2.75)e=7.5625*e*e;else if(e<2/2.75)e=7.5625*(e-=1.5/2.75)*e+.75;else if(e<2.5/2.75)e=7.5625*(e-=2.25/2.75)*e+.9375;else e=7.5625*(e-=2.625/2.75)*e+.984375;return e};T.easeInBounce=function(e,t){return T.linear(T.bounce(e),this,t)};T.easeOutBounce=function(e,t){return T.linear(T.bounce(e),this,t)};T.easeInElastic=function(e,t){let i=1.70158;let s=0;let n=1;const r=0;const a=1;const o=1;if(e===0)e=r;else if((e/=a)==1)e=r+o;else{if(!s)s=a*.3;if(n<Math.abs(o)){n=o;i=s/4}else i=s/(2*Math.PI)*Math.asin(o/n);e=-(n*2**(10*(e-=1))*Math.sin((e*a-i)*(2*Math.PI)/s))+r}return T.linear(e,this,t)};T.easeOutElastic=function(e,t){let i=1.70158;let s=0;let n=1;const r=0;const a=1;const o=1;if(e===0)e=r;else if((e/=a)==1)e=r+o;else{if(!s)s=a*.3;if(n<Math.abs(o)){n=o;i=s/4}else i=s/(2*Math.PI)*Math.asin(o/n);e=n*2**(-10*e)*Math.sin((e*a-i)*(2*Math.PI)/s)+o+r}return T.linear(e,this,t)};T.easeInBack=function(e,t){const i=1.70158;e=e*e*((i+1)*e-i);return T.linear(e,this,t)};T.easeOutBack=function(e,t){const i=1.70158;e=(e=e/1-1)*e*((i+1)*e+i)+1;return T.linear(e,this,t)};T.easeInOutBack=function(e,t){let i=1.70158;const s=1/2;if((e/=1/2)<1)e=s*(e*e*(((i*=1.525)+1)*e-i));else e=s*((e-=2)*e*(((i*=1.525)+1)*e+i)+2);return T.linear(e,this,t)};const v=function(e){e--;e=e*e*e+1;return e};T.easeCubicOut=function(e,t){e=v(e);return T.linear(e,this,t)};const I=function(e){e*=2;if(e<1)e=.5*e*e*e;else{e-=2;e=.5*(e*e*e+2)}return e};T.easeCubicInOut=function(e,t){e=I(e);return T.linear(e,this,t)};T.easeSmoothStep=function(e,t){const i=Math.max(0,Math.min(1,e));e=i*i*(3-2*i);return T.linear(e,this,t)};T.easeSmootherStep=function(e,t){const i=Math.max(0,Math.min(1,(e-0)/(1-0)));e=i*i*i*(i*(i*6-15)+10);return T.linear(e,this,t)};T.prototype.setEasing=function(e){this._easing=e;if(this._easing==m.ANIM.EASING_LINEAR)this.ease=T.easeLinear;else if(this._easing==m.ANIM.EASING_ABSOLUTE)this.ease=T.easeAbsolute;else if(this._easing==m.ANIM.EASING_SMOOTHSTEP)this.ease=T.easeSmoothStep;else if(this._easing==m.ANIM.EASING_SMOOTHERSTEP)this.ease=T.easeSmootherStep;else if(this._easing==m.ANIM.EASING_CUBIC_IN)this.ease=T.easeCubicIn;else if(this._easing==m.ANIM.EASING_CUBIC_OUT)this.ease=T.easeCubicOut;else if(this._easing==m.ANIM.EASING_CUBIC_INOUT)this.ease=T.easeCubicInOut;else if(this._easing==m.ANIM.EASING_EXPO_IN)this.ease=T.easeExpoIn;else if(this._easing==m.ANIM.EASING_EXPO_OUT)this.ease=T.easeExpoOut;else if(this._easing==m.ANIM.EASING_EXPO_INOUT)this.ease=T.easeExpoInOut;else if(this._easing==m.ANIM.EASING_SIN_IN)this.ease=T.easeSinIn;else if(this._easing==m.ANIM.EASING_SIN_OUT)this.ease=T.easeSinOut;else if(this._easing==m.ANIM.EASING_SIN_INOUT)this.ease=T.easeSinInOut;else if(this._easing==m.ANIM.EASING_BACK_OUT)this.ease=T.easeOutBack;else if(this._easing==m.ANIM.EASING_BACK_IN)this.ease=T.easeInBack;else if(this._easing==m.ANIM.EASING_BACK_INOUT)this.ease=T.easeInOutBack;else if(this._easing==m.ANIM.EASING_ELASTIC_IN)this.ease=T.easeInElastic;else if(this._easing==m.ANIM.EASING_ELASTIC_OUT)this.ease=T.easeOutElastic;else if(this._easing==m.ANIM.EASING_ELASTIC_INOUT)this.ease=T.easeElasticInOut;else if(this._easing==m.ANIM.EASING_BOUNCE_IN)this.ease=T.easeInBounce;else if(this._easing==m.ANIM.EASING_BOUNCE_OUT)this.ease=T.easeOutBounce;else if(this._easing==m.ANIM.EASING_QUART_OUT)this.ease=T.easeOutQuart;else if(this._easing==m.ANIM.EASING_QUART_IN)this.ease=T.easeInQuart;else if(this._easing==m.ANIM.EASING_QUART_INOUT)this.ease=T.easeInOutQuart;else if(this._easing==m.ANIM.EASING_QUINT_OUT)this.ease=T.easeOutQuint;else if(this._easing==m.ANIM.EASING_QUINT_IN)this.ease=T.easeInQuint;else if(this._easing==m.ANIM.EASING_QUINT_INOUT)this.ease=T.easeInOutQuint;else if(this._easing==m.ANIM.EASING_CUBICSPLINE){this.ease=T.easeCubicSpline}else{this._easing=m.ANIM.EASING_LINEAR;this.ease=T.easeLinear}};T.prototype.trigger=function(){this.cb();this.cbTriggered=true};T.prototype.setValue=function(e){this.value=e;if(this.onChange!==null)this.onChange()};T.prototype.set=function(e){if(e){if(e.e)this.setEasing(e.e);if(e.cb){this.cb=e.cb;this.cbTriggered=false}if(e.b){}if(e.hasOwnProperty("t"))this.time=e.t;if(e.hasOwnProperty("time"))this.time=e.time;if(e.hasOwnProperty("v"))this.value=e.v;else if(e.hasOwnProperty("value"))this.value=e.value}if(this.onChange!==null)this.onChange()};T.prototype.getSerialized=function(){const e={};e.t=this.time;e.v=this.value;e.e=this._easing;return e};T.prototype.getEasing=function(){return this._easing};const S=function(e){p.apply(this);e=e||{};this.keys=[];this.onChange=null;this.stayInTimeline=false;this.loop=false;this._log=new u("Anim");this._lastKeyIndex=0;this._cachedIndex=0;this.name=e.name||null;this.defaultEasing=e.defaultEasing||m.ANIM.EASING_LINEAR;this.onLooped=null;this._timesLooped=0;this._needsSort=false};S.prototype.forceChangeCallback=function(){if(this.onChange!==null)this.onChange();this.emitEvent("onChange",this)};S.prototype.getLoop=function(){return this.loop};S.prototype.setLoop=function(e){this.loop=e;this.emitEvent("onChange",this)};S.prototype.hasEnded=function(e){if(this.keys.length===0)return true;if(this.keys[this._lastKeyIndex].time<=e)return true;return false};S.prototype.isRising=function(e){if(this.hasEnded(e))return false;const t=this.getKeyIndex(e);if(this.keys[t].value<this.keys[t+1].value)return true;return false};S.prototype.clearBefore=function(e){const t=this.getValue(e);const i=this.getKeyIndex(e);this.setValue(e,t);if(i>1)this.keys.splice(0,i);this._updateLastIndex()};S.prototype.clear=function(e){let t=0;if(e)t=this.getValue(e);this.keys.length=0;this._updateLastIndex();if(e)this.setValue(e,t);if(this.onChange!==null)this.onChange();this.emitEvent("onChange",this)};S.prototype.sortKeys=function(){this.keys.sort((e,t)=>{return parseFloat(e.time)-parseFloat(t.time)});this._updateLastIndex();this._needsSort=false;if(this.keys.length%1e3==0)console.log(this.name,this.keys.length)};S.prototype.getLength=function(){if(this.keys.length===0)return 0;return this.keys[this.keys.length-1].time};S.prototype.getKeyIndex=function(t){let i=0;let s=0;if(this._cachedIndex&&this.keys.length>this._cachedIndex&&t>=this.keys[this._cachedIndex].time)s=this._cachedIndex;for(let e=s;e<this.keys.length;e++){if(t>=this.keys[e].time)i=e;if(this.keys[e].time>t){if(t!=0)this._cachedIndex=i;return i}}return i};S.prototype.setValue=function(t,i,s){let n=null;if(this.keys.length==0||t<=this.keys[this.keys.length-1].time)for(let e=0;e<this.keys.length;e++)if(this.keys[e].time==t){n=this.keys[e];this.keys[e].setValue(i);this.keys[e].cb=s;break}if(!n){n=new T({time:t,value:i,e:this.defaultEasing,cb:s});this.keys.push(n);this._updateLastIndex()}if(this.onChange)this.onChange();this.emitEvent("onChange",this);this._needsSort=true;return n};S.prototype.setKeyEasing=function(e,t){if(this.keys[e]){this.keys[e].setEasing(t);this.emitEvent("onChange",this)}};S.prototype.getSerialized=function(){const t={};t.keys=[];t.loop=this.loop;for(let e=0;e<this.keys.length;e++)t.keys.push(this.keys[e].getSerialized());return t};S.prototype.getKey=function(e){const t=this.getKeyIndex(e);return this.keys[t]};S.prototype.getNextKey=function(e){let t=this.getKeyIndex(e)+1;if(t>=this.keys.length)t=this.keys.length-1;return this.keys[t]};S.prototype.isFinished=function(e){if(this.keys.length<=0)return true;return e>this.keys[this.keys.length-1].time};S.prototype.isStarted=function(e){if(this.keys.length<=0)return false;return e>=this.keys[0].time};S.prototype.getValue=function(e){if(this.keys.length===0){return 0}if(this._needsSort)this.sortKeys();if(!this.loop&&e>this.keys[this._lastKeyIndex].time){if(this.keys[this._lastKeyIndex].cb&&!this.keys[this._lastKeyIndex].cbTriggered)this.keys[this._lastKeyIndex].trigger();return this.keys[this._lastKeyIndex].value}if(e<this.keys[0].time){return this.keys[0].value}if(this.loop&&e>this.keys[this._lastKeyIndex].time){const a=e/this.keys[this._lastKeyIndex].time;if(a>this._timesLooped){this._timesLooped++;if(this.onLooped)this.onLooped()}e=(e-this.keys[0].time)%(this.keys[this._lastKeyIndex].time-this.keys[0].time);e+=this.keys[0].time}const t=this.getKeyIndex(e);if(t>=this._lastKeyIndex){if(this.keys[this._lastKeyIndex].cb&&!this.keys[this._lastKeyIndex].cbTriggered)this.keys[this._lastKeyIndex].trigger();return this.keys[this._lastKeyIndex].value}const i=t+1;const s=this.keys[t];const n=this.keys[i];if(s.cb&&!s.cbTriggered)s.trigger();if(!n)return-1;const r=(e-s.time)/(n.time-s.time);if(!s.ease)this.log._warn("has no ease",s,n);return s.ease(r,n)};S.prototype._updateLastIndex=function(){this._lastKeyIndex=this.keys.length-1};S.prototype.addKey=function(e){if(e.time===undefined){this.log.warn("key time undefined, ignoring!")}else{this.keys.push(e);if(this.onChange!==null)this.onChange();this.emitEvent("onChange",this)}this._updateLastIndex()};S.prototype.easingFromString=function(e){if(e=="linear")return m.ANIM.EASING_LINEAR;if(e=="absolute")return m.ANIM.EASING_ABSOLUTE;if(e=="smoothstep")return m.ANIM.EASING_SMOOTHSTEP;if(e=="smootherstep")return m.ANIM.EASING_SMOOTHERSTEP;if(e=="Cubic In")return m.ANIM.EASING_CUBIC_IN;if(e=="Cubic Out")return m.ANIM.EASING_CUBIC_OUT;if(e=="Cubic In Out")return m.ANIM.EASING_CUBIC_INOUT;if(e=="Expo In")return m.ANIM.EASING_EXPO_IN;if(e=="Expo Out")return m.ANIM.EASING_EXPO_OUT;if(e=="Expo In Out")return m.ANIM.EASING_EXPO_INOUT;if(e=="Sin In")return m.ANIM.EASING_SIN_IN;if(e=="Sin Out")return m.ANIM.EASING_SIN_OUT;if(e=="Sin In Out")return m.ANIM.EASING_SIN_INOUT;if(e=="Back In")return m.ANIM.EASING_BACK_IN;if(e=="Back Out")return m.ANIM.EASING_BACK_OUT;if(e=="Back In Out")return m.ANIM.EASING_BACK_INOUT;if(e=="Elastic In")return m.ANIM.EASING_ELASTIC_IN;if(e=="Elastic Out")return m.ANIM.EASING_ELASTIC_OUT;if(e=="Bounce In")return m.ANIM.EASING_BOUNCE_IN;if(e=="Bounce Out")return m.ANIM.EASING_BOUNCE_OUT;if(e=="Quart Out")return m.ANIM.EASING_QUART_OUT;if(e=="Quart In")return m.ANIM.EASING_QUART_IN;if(e=="Quart In Out")return m.ANIM.EASING_QUART_INOUT;if(e=="Quint Out")return m.ANIM.EASING_QUINT_OUT;if(e=="Quint In")return m.ANIM.EASING_QUINT_IN;if(e=="Quint In Out")return m.ANIM.EASING_QUINT_INOUT};S.prototype.createPort=function(e,t,i){const s=e.inDropDown(t,m.ANIM.EASINGS,"Cubic Out");s.set("linear");s.defaultValue="linear";s.onChange=function(){this.defaultEasing=this.easingFromString(s.get());this.emitEvent("onChangeDefaultEasing",this);if(i)i()}.bind(this);return s};S.slerpQuaternion=function(e,t,i,s,n,r){if(!S.slerpQuaternion.q1){S.slerpQuaternion.q1=quat.create();S.slerpQuaternion.q2=quat.create()}const a=i.getKeyIndex(e);let o=a+1;if(o>=i.keys.length)o=i.keys.length-1;if(a==o){quat.set(t,i.keys[a].value,s.keys[a].value,n.keys[a].value,r.keys[a].value)}else{const l=i.keys[a].time;const h=i.keys[o].time;const u=(e-l)/(h-l);quat.set(S.slerpQuaternion.q1,i.keys[a].value,s.keys[a].value,n.keys[a].value,r.keys[a].value);quat.set(S.slerpQuaternion.q2,i.keys[o].value,s.keys[o].value,n.keys[o].value,r.keys[o].value);quat.slerp(t,S.slerpQuaternion.q1,S.slerpQuaternion.q2,u)}return t};const C={Key:T};const R=function(e,t,i,s){p.apply(this);this.data={};this._log=new u("core_port");this.direction=m.PORT.PORT_DIR_IN;this.id=String(CABLES.simpleId());this._op=e;this.links=[];this.value=0;this.name=t;this.type=i||m.OP.OP_PORT_TYPE_VALUE;this.uiAttribs=s||{};this.anim=null;this._oldAnimVal=-5711;this.defaultValue=null;this._uiActiveState=true;this.ignoreValueSerialize=false;this.onLinkChanged=null;this.crashed=false;this._valueBeforeLink=null;this._lastAnimFrame=-1;this._animated=false;this.onValueChanged=null;this.onTriggered=null;this.onUiActiveStateChange=null;this.changeAlways=false;this.forceRefChange=false;this._useVariableName=null;this.activityCounter=0;this.apf=0;this.activityCounterStartFrame=0;this._tempLastUiValue=null;Object.defineProperty(this,"title",{get(){return this.uiAttribs.title||this.name}});Object.defineProperty(this,"parent",{get(){this._log.stack("use port.op, not .parent");return this._op}});Object.defineProperty(this,"op",{get(){return this._op}});Object.defineProperty(this,"val",{get(){this._log.warn("val getter deprecated!",this);this._log.stack("val getter deprecated");return this.get()},set(e){this._log.warn("val setter deprecated!",this);this._log.stack("val setter deprecated");this.setValue(e)}})};R.prototype.copyLinkedUiAttrib=function(e,t){if(!CABLES.UI)return;if(!this.isLinked())return;const i={};i[e]=this.links[0].getOtherPort(this).getUiAttrib(e);t.setUiAttribs(i)};R.prototype.getValueForDisplay=function(){let e=this.value;if(typeof this.value==="string"||this.value instanceof String){if(e.length>1e3){e=e.substring(0,999);e+="..."}if(this.uiAttribs&&this.uiAttribs.display=="boolnum"){e+=" - ";if(!this.value)e+="false";else e+="true"}e=e.replace(/[\u00A0-\u9999<>\&]/g,function(e){return"&#"+e.charCodeAt(0)+";"});if(e.length>100)e=e.substring(0,100)}else{e=this.value}return e};R.prototype.onAnimToggle=function(){};R.prototype._onAnimToggle=function(){this.onAnimToggle()};R.prototype.remove=function(){this.removeLinks();this._op.removePort(this)};R.prototype.setUiAttribs=function(e){let t=false;if(!this.uiAttribs)this.uiAttribs={};for(const i in e){if(e[i]===undefined){delete this.uiAttribs[i];continue}if(this.uiAttribs[i]!=e[i])t=true;this.uiAttribs[i]=e[i];if(i=="group"&&this.indexPort)this.indexPort.setUiAttribs({group:e[i]})}if(e.hasOwnProperty("expose"))this._op.patch.emitEvent("subpatchExpose",this._op.uiAttribs.subPatch);if(t)this.emitEvent("onUiAttrChange",e,this)};R.prototype.getUiAttribs=function(){return this.uiAttribs};R.prototype.getUiAttrib=function(e){if(!this.uiAttribs||!this.uiAttribs.hasOwnProperty(e)){return null}return this.uiAttribs[e]};R.prototype.get=function(){if(this._animated&&this._lastAnimFrame!=this._op.patch.getFrameNum()){this._lastAnimFrame=this._op.patch.getFrameNum();this.value=this.anim.getValue(this._op.patch.timer.getTime());this._oldAnimVal=this.value;this.forceChange()}return this.value};R.prototype.setRef=function(e){this.forceRefChange=true;this.set(e)};R.prototype.set=R.prototype.setValue=function(e){if(e===undefined)e=null;if(this._op.enabled&&!this.crashed){if(e!==this.value||this.changeAlways||this.type==m.OP.OP_PORT_TYPE_TEXTURE||this.type==m.OP.OP_PORT_TYPE_ARRAY){if(this._animated){this.anim.setValue(this._op.patch.timer.getTime(),e)}else{try{this.value=e;this.forceChange()}catch(e){this.crashed=true;this.setValue=function(e){};this.onTriggered=function(){};this._log.error("exception in ",this._op);this._log.error(e);this._op.patch.emitEvent("exception",e,this._op)}if(this._op&&this._op.patch&&this._op.patch.isEditorMode()&&this.type==m.OP.OP_PORT_TYPE_TEXTURE)gui.texturePreview().updateTexturePort(this)}if(this.direction==m.PORT.PORT_DIR_OUT)for(let e=0;e<this.links.length;++e)this.links[e].setValue()}}};R.prototype.updateAnim=function(){if(this._animated){this.value=this.get();if(this._oldAnimVal!=this.value||this.changeAlways){this._oldAnimVal=this.value;this.forceChange()}this._oldAnimVal=this.value}};R.prototype.forceChange=function(){if(this.onValueChanged||this.onChange){}this._activity();this.emitEvent("change",this.value,this);if(this.onChange)this.onChange(this,this.value);else if(this.onValueChanged)this.onValueChanged(this,this.value)};R.prototype.getTypeString=function(){if(this.type==m.OP.OP_PORT_TYPE_VALUE)return"Number";if(this.type==m.OP.OP_PORT_TYPE_FUNCTION)return"Trigger";if(this.type==m.OP.OP_PORT_TYPE_OBJECT)return"Object";if(this.type==m.OP.OP_PORT_TYPE_DYNAMIC)return"Dynamic";if(this.type==m.OP.OP_PORT_TYPE_ARRAY)return"Array";if(this.type==m.OP.OP_PORT_TYPE_STRING)return"String";return"Unknown"};R.prototype.deSerializeSettings=function(e){if(!e)return;if(e.animated)this.setAnimated(e.animated);if(e.useVariable)this.setVariableName(e.useVariable);if(e.title)this.setUiAttribs({title:e.title});if(e.expose)this.setUiAttribs({expose:true});if(e.order)this.setUiAttribs({order:e.order});if(e.multiPortManual)this.setUiAttribs({multiPortManual:e.multiPortManual});if(e.multiPortNum)this.setUiAttribs({multiPortNum:e.multiPortNum});if(e.anim){if(!this.anim)this.anim=new S({name:"port "+this.name});this._op._hasAnimPort=true;this.anim.addEventListener("onChange",()=>{this._op.patch.emitEvent("portAnimUpdated",this._op,this,this.anim)});if(e.anim.loop)this.anim.loop=e.anim.loop;for(const t in e.anim.keys){this.anim.keys.push(new C.Key(e.anim.keys[t]))}this.anim.sortKeys()}};R.prototype.setInitialValue=function(e){if(this.op.preservedPortLinks[this.name]){for(let e=0;e<this.op.preservedPortLinks[this.name].length;e++){const t=this.op.preservedPortLinks[this.name][e];this.op.patch._addLink(t.objIn,t.objOut,t.portIn,t.portOut)}}if(this.op.preservedPortValues&&this.op.preservedPortValues.hasOwnProperty(this.name)&&this.op.preservedPortValues[this.name]!==undefined){this.set(this.op.preservedPortValues[this.name])}else if(e!==undefined)this.set(e);if(e!==undefined)this.defaultValue=e};R.prototype.getSerialized=function(){let e={name:this.getName()};if(!this.ignoreValueSerialize&&this.links.length===0){if(this.type==m.OP.OP_PORT_TYPE_OBJECT&&this.value&&this.value.tex){}else e.value=this.value}if(this._useVariableName)e.useVariable=this._useVariableName;if(this._animated)e.animated=true;if(this.anim)e.anim=this.anim.getSerialized();if(this.uiAttribs.multiPortNum)e.multiPortNum=this.uiAttribs.multiPortNum;if(this.uiAttribs.multiPortManual)e.multiPortManual=this.uiAttribs.multiPortManual;if(this.uiAttribs.display=="file")e.display=this.uiAttribs.display;if(this.uiAttribs.expose){e.expose=true;if(this.uiAttribs.hasOwnProperty("order"))e.order=this.uiAttribs.order}if(this.uiAttribs.title)e.title=this.uiAttribs.title;if((this.preserveLinks||this.direction==m.PORT.PORT_DIR_OUT)&&this.links.length>0){e.links=[];for(const t in this.links){if(!this.links[t].ignoreInSerialize&&(this.links[t].portIn&&this.links[t].portOut))e.links.push(this.links[t].getSerialized())}}if(this.direction==m.PORT.PORT_DIR_IN&&this.links.length>0){for(const t in this.links){if(!this.links[t].portIn||!this.links[t].portOut)continue;const i=this.links[t].getOtherPort(this);if(i.op.isInBlueprint2&&this.op.isInBlueprint2){if(i.op.isInBlueprint2()&&!this.op.isInBlueprint2()){e.links=e.links||[];e.links.push(this.links[t].getSerialized())}}}}if(e.links&&e.links.length==0)delete e.links;if(this.type===m.OP.OP_PORT_TYPE_FUNCTION)delete e.value;if(this.type===m.OP.OP_PORT_TYPE_FUNCTION&&this.links.length==0)e=null;if(e&&Object.keys(e).length==1&&e.name)e=null;r(e);return e};R.prototype.shouldLink=function(){return true};R.prototype.removeLinks=function(){let e=0;while(this.links.length>0){e++;if(e>5e3){this._log.warn("could not delete links... / infinite loop");this.links.length=0;break}this.links[0].remove()}};R.prototype.removeLink=function(e){for(const t in this.links)if(this.links[t]==e)this.links.splice(t,1);if(this.direction==m.PORT.PORT_DIR_IN){if(this.type==m.OP.OP_PORT_TYPE_VALUE)this.setValue(this._valueBeforeLink||0);else this.setValue(this._valueBeforeLink||null)}if(CABLES.UI&&this._op.checkLinkTimeWarnings)this._op.checkLinkTimeWarnings();if(this.onLinkChanged)this.onLinkChanged();this.emitEvent("onLinkChanged");this.emitEvent("onLinkRemoved");this._op.emitEvent("onLinkChanged")};R.prototype.getName=function(){return this.name};R.prototype.getTitle=function(){if(this.uiAttribs.title)return this.uiAttribs.title;return this.name};R.prototype.addLink=function(e){this._valueBeforeLink=this.value;this.links.push(e);if(CABLES.UI&&this._op.checkLinkTimeWarnings)this._op.checkLinkTimeWarnings();if(this.onLinkChanged)this.onLinkChanged();this.emitEvent("onLinkChanged");this._op.emitEvent("onLinkChanged")};R.prototype.getLinkTo=function(e){for(const t in this.links)if(this.links[t].portIn==e||this.links[t].portOut==e)return this.links[t]};R.prototype.removeLinkTo=function(e){for(const t in this.links){if(this.links[t].portIn==e||this.links[t].portOut==e){this.links[t].remove();if(CABLES.UI&&this._op.checkLinkTimeWarnings)this._op.checkLinkTimeWarnings();if(this.onLinkChanged)this.onLinkChanged();this.emitEvent("onLinkChanged");this.emitEvent("onLinkRemoved");return}}};R.prototype.isLinkedTo=function(e){for(const t in this.links)if(this.links[t].portIn==e||this.links[t].portOut==e)return true;return false};R.prototype._activity=function(){this.activityCounter++};R.prototype.trigger=function(){const t=this.links.length;this._activity();if(t===0)return;if(!this._op.enabled)return;let i=null;try{for(let e=0;e<t;++e){if(this.links[e].portIn){i=this.links[e].portIn;i.op.patch.pushTriggerStack(i);i._onTriggered();i.op.patch.popTriggerStack()}if(this.links[e])this.links[e].activity()}}catch(e){i.op.enabled=false;if(this._op.patch.isEditorMode()){if(i.op.onError)i.op.onError(e)}this._log.error("exception in port: "+i.op.name,i.op);this._log.error(e)}};R.prototype.call=function(){this._log.warn("call deprecated - use trigger() ");this.trigger()};R.prototype.execute=function(){this._log.warn("### execute port: "+this.getName(),this.goals.length)};R.prototype.setVariableName=function(e){this._useVariableName=e;this._op.patch.on("variableRename",(e,t)=>{if(e!=this._useVariableName)return;this._useVariableName=t})};R.prototype.getVariableName=function(){return this._useVariableName};R.prototype.setVariable=function(e){this.setAnimated(false);const t={useVariable:false};if(this._variableIn&&this._varChangeListenerId){this._variableIn.off(this._varChangeListenerId);this._variableIn=null}if(e){this._variableIn=this._op.patch.getVar(e);if(!this._variableIn){this._log.warn("PORT VAR NOT FOUND!!!",e)}else{if(this.type==m.OP.OP_PORT_TYPE_OBJECT){this._varChangeListenerId=this._variableIn.on("change",()=>{this.set(null);this.set(this._variableIn.getValue())})}else{this._varChangeListenerId=this._variableIn.on("change",this.set.bind(this))}this.set(this._variableIn.getValue())}this._useVariableName=e;t.useVariable=true;t.variableName=this._useVariableName}else{t.variableName=this._useVariableName=null;t.useVariable=false}this.setUiAttribs(t);this._op.patch.emitEvent("portSetVariable",this._op,this,e)};R.prototype._handleNoTriggerOpAnimUpdates=function(e){let t=false;for(let e=0;e<this._op.portsIn.length;e++){if(this._op.portsIn.type==m.OP.OP_PORT_TYPE_FUNCTION){t=true;break}}if(!t){if(e)this._notriggerAnimUpdate=this._op.patch.on("onRenderFrame",()=>{this.updateAnim()});else this._op.patch.removeEventListener(this._notriggerAnimUpdate)}};R.prototype.setAnimated=function(e){if(this._animated!=e){this._animated=e;this._op._hasAnimPort=true;if(this._animated&&!this.anim){this.anim=new S({name:"port "+this.name});this.anim.addEventListener("onChange",()=>{this._op.patch.emitEvent("portAnimUpdated",this._op,this,this.anim)})}this._onAnimToggle()}this._handleNoTriggerOpAnimUpdates(e);if(!e){this.anim=null}this.setUiAttribs({isAnimated:this._animated})};R.prototype.toggleAnim=function(){this._animated=!this._animated;if(this._animated&&!this.anim){this.anim=new S({name:"port "+this.name});this.anim.addEventListener("onChange",()=>{this._op.patch.emitEvent("portAnimUpdated",this._op,this,this.anim)})}this.setAnimated(this._animated);this._onAnimToggle();this.setUiAttribs({isAnimated:this._animated})};R.prototype.getType=function(){return this.type};R.prototype.isLinked=function(){return this.links.length>0||this._animated||this._useVariableName!=null};R.prototype.isBoundToVar=function(){const e=this._useVariableName!=null;this.uiAttribs.boundToVar=e;return e};R.prototype.isAnimated=function(){return this._animated};R.prototype.isHidden=function(){return this.uiAttribs.hidePort};R.prototype._onTriggered=function(e){this._activity();this._op.updateAnims();if(this._op.enabled&&this.onTriggered)this.onTriggered(e);if(this._op.enabled)this.emitEvent("trigger")};R.prototype._onSetProfiling=function(e){this._op.patch.profiler.add("port",this);this.setValue(e);this._op.patch.profiler.add("port",null)};R.prototype._onTriggeredProfiling=function(){if(this._op.enabled&&this.onTriggered){this._op.patch.profiler.add("port",this);this.onTriggered();this._op.patch.profiler.add("port",null)}};R.prototype.getUiActiveState=function(){return this._uiActiveState};R.prototype.setUiActiveState=function(e){this._uiActiveState=e;if(this.onUiActiveStateChange)this.onUiActiveStateChange()};R.prototype.onValueChange=function(e){this.onChange=e};R.prototype.hidePort=function(){};R.portTypeNumberToString=function(e){if(e==m.OP.OP_PORT_TYPE_VALUE)return"value";if(e==m.OP.OP_PORT_TYPE_FUNCTION)return"function";if(e==m.OP.OP_PORT_TYPE_OBJECT)return"object";if(e==m.OP.OP_PORT_TYPE_ARRAY)return"array";if(e==m.OP.OP_PORT_TYPE_STRING)return"string";if(e==m.OP.OP_PORT_TYPE_DYNAMIC)return"dynamic";return"unknown"};class P{constructor(e,t,i,s,n,r,a,o,l,h){this._log=new u("cg_uniform");this._type=t;this._name=i;this._shader=e;this._value=1e-5;this._oldValue=null;this._port=null;this._structName=l;this._structUniformName=o;this._propertyName=h;this._shader._addUniform(this);this.needsUpdate=true;this.shaderType=null;this.comment=null;if(t=="f"){this.set=this.setValue=this.setValueF.bind(this);this.updateValue=this.updateValueF.bind(this)}else if(t=="f[]"){this.set=this.setValue=this.setValueArrayF.bind(this);this.updateValue=this.updateValueArrayF.bind(this)}else if(t=="2f[]"){this.set=this.setValue=this.setValueArray2F.bind(this);this.updateValue=this.updateValueArray2F.bind(this)}else if(t=="3f[]"){this.set=this.setValue=this.setValueArray3F.bind(this);this.updateValue=this.updateValueArray3F.bind(this)}else if(t=="4f[]"){this.set=this.setValue=this.setValueArray4F.bind(this);this.updateValue=this.updateValueArray4F.bind(this)}else if(t=="i"){this.set=this.setValue=this.setValueI.bind(this);this.updateValue=this.updateValueI.bind(this)}else if(t=="2i"){this.set=this.setValue=this.setValue2I.bind(this);this.updateValue=this.updateValue2I.bind(this)}else if(t=="3i"){this.set=this.setValue=this.setValue3I.bind(this);this.updateValue=this.updateValue3I.bind(this)}else if(t=="4i"){this.set=this.setValue=this.setValue4I.bind(this);this.updateValue=this.updateValue4I.bind(this)}else if(t=="b"){this.set=this.setValue=this.setValueBool.bind(this);this.updateValue=this.updateValueBool.bind(this)}else if(t=="4f"){this.set=this.setValue=this.setValue4F.bind(this);this.updateValue=this.updateValue4F.bind(this)}else if(t=="3f"){this.set=this.setValue=this.setValue3F.bind(this);this.updateValue=this.updateValue3F.bind(this)}else if(t=="2f"){this.set=this.setValue=this.setValue2F.bind(this);this.updateValue=this.updateValue2F.bind(this)}else if(t=="t"){this.set=this.setValue=this.setValueT.bind(this);this.updateValue=this.updateValueT.bind(this)}else if(t=="tc"){this.set=this.setValue=this.setValueT.bind(this);this.updateValue=this.updateValueT.bind(this)}else if(t=="t[]"){this.set=this.setValue=this.setValueArrayT.bind(this);this.updateValue=this.updateValueArrayT.bind(this)}else if(t=="m4"||t=="m4[]"){this.set=this.setValue=this.setValueM4.bind(this);this.updateValue=this.updateValueM4.bind(this)}else throw new Error("Unknown uniform type");if(typeof s=="object"&&s instanceof R){this._port=s;this._value=this._port.get();if(n&&r&&a){if(!(n instanceof R)||!(r instanceof R)||!(a instanceof R)){this._log.error("[cgl_uniform] mixed port/value parameter for vec4 ",this._name)}this._value=[0,0,0,0];this._port2=n;this._port3=r;this._port4=a;this._port.on("change",this.updateFromPort4f.bind(this));this._port2.on("change",this.updateFromPort4f.bind(this));this._port3.on("change",this.updateFromPort4f.bind(this));this._port4.on("change",this.updateFromPort4f.bind(this));this.updateFromPort4f()}else if(n&&r){if(!(n instanceof R)||!(r instanceof R)){this._log.error("[cgl_uniform] mixed port/value parameter for vec4 ",this._name)}this._value=[0,0,0];this._port2=n;this._port3=r;this._port.on("change",this.updateFromPort3f.bind(this));this._port2.on("change",this.updateFromPort3f.bind(this));this._port3.on("change",this.updateFromPort3f.bind(this));this.updateFromPort3f()}else if(n){if(!(n instanceof R)){this._log.error("[cgl_uniform] mixed port/value parameter for vec4 ",this._name)}this._value=[0,0];this._port2=n;this._port.on("change",this.updateFromPort2f.bind(this));this._port2.on("change",this.updateFromPort2f.bind(this));this.updateFromPort2f()}else{this._port.on("change",this.updateFromPort.bind(this))}}else this._value=s;this.setValue(this._value);this.needsUpdate=true}getType(){return this._type}getName(){return this._name}getValue(){return this._value}getShaderType(){return this.shaderType}isStructMember(){return!!this._structName}updateFromPort4f(){this._value[0]=this._port.get();this._value[1]=this._port2.get();this._value[2]=this._port3.get();this._value[3]=this._port4.get();this.setValue(this._value)}updateFromPort3f(){this._value[0]=this._port.get();this._value[1]=this._port2.get();this._value[2]=this._port3.get();this.setValue(this._value)}updateFromPort2f(){this._value[0]=this._port.get();this._value[1]=this._port2.get();this.setValue(this._value)}updateFromPort(){this.setValue(this._port.get())}}const O=P;class y extends O{constructor(e,t,i,s,n,r,a,o,l,h){super(e,t,i,s,n,r,a,o,l,h);this._loc=-1;this._cgl=e._cgl}get name(){return this._name}copy(e){const t=new y(e,this._type,this._name,this._value,this._port2,this._port3,this._port4,this._structUniformName,this._structName,this._propertyName);t.shaderType=this.shaderType;return t}getGlslTypeString(){return y.glslTypeString(this._type)}_isValidLoc(){return this._loc!=-1}resetLoc(){this._loc=-1;this.needsUpdate=true}bindTextures(){}getLoc(){return this._loc}updateFromPort4f(){this._value[0]=this._port.get();this._value[1]=this._port2.get();this._value[2]=this._port3.get();this._value[3]=this._port4.get();this.setValue(this._value)}updateFromPort3f(){this._value[0]=this._port.get();this._value[1]=this._port2.get();this._value[2]=this._port3.get();this.setValue(this._value)}updateFromPort2f(){this._value[0]=this._port.get();this._value[1]=this._port2.get();this.setValue(this._value)}updateFromPort(){this.setValue(this._port.get())}updateValueF(){if(!this._isValidLoc())this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name);else this.needsUpdate=false;this._shader.getCgl().gl.uniform1f(this._loc,this._value);this._cgl.profileData.profileUniformCount++}setValueF(e){if(e!=this._value){this.needsUpdate=true;this._value=e}}updateValueI(){if(!this._isValidLoc())this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name);else this.needsUpdate=false;this._shader.getCgl().gl.uniform1i(this._loc,this._value);this._cgl.profileData.profileUniformCount++}updateValue2I(){if(!this._value)return;if(!this._isValidLoc()){this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name);this._cgl.profileData.profileShaderGetUniform++;this._cgl.profileData.profileShaderGetUniformName=this._name}this._shader.getCgl().gl.uniform2i(this._loc,this._value[0],this._value[1]);this.needsUpdate=false;this._cgl.profileData.profileUniformCount++}updateValue3I(){if(!this._value)return;if(!this._isValidLoc()){this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name);this._cgl.profileData.profileShaderGetUniform++;this._cgl.profileData.profileShaderGetUniformName=this._name}this._shader.getCgl().gl.uniform3i(this._loc,this._value[0],this._value[1],this._value[2]);this.needsUpdate=false;this._cgl.profileData.profileUniformCount++}updateValue4I(){if(!this._isValidLoc()){this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name);this._cgl.profileData.profileShaderGetUniform++;this._cgl.profileData.profileShaderGetUniformName=this._name}this._shader.getCgl().gl.uniform4i(this._loc,this._value[0],this._value[1],this._value[2],this._value[3]);this._cgl.profileData.profileUniformCount++}setValueI(e){if(e!=this._value){this.needsUpdate=true;this._value=e}}setValue2I(e){if(!e)return;if(!this._oldValue){this._oldValue=[e[0]-1,1];this.needsUpdate=true}else if(e[0]!=this._oldValue[0]||e[1]!=this._oldValue[1]){this._oldValue[0]=e[0];this._oldValue[1]=e[1];this.needsUpdate=true}this._value=e}setValue3I(e){if(!e)return;if(!this._oldValue){this._oldValue=[e[0]-1,1,2];this.needsUpdate=true}else if(e[0]!=this._oldValue[0]||e[1]!=this._oldValue[1]||e[2]!=this._oldValue[2]){this._oldValue[0]=e[0];this._oldValue[1]=e[1];this._oldValue[2]=e[2];this.needsUpdate=true}this._value=e}setValue4I(e){this.needsUpdate=true;this._value=e||vec4.create()}updateValueBool(){if(!this._isValidLoc())this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name);else this.needsUpdate=false;this._shader.getCgl().gl.uniform1i(this._loc,this._value?1:0);this._cgl.profileData.profileUniformCount++}setValueBool(e){if(e!=this._value){this.needsUpdate=true;this._value=e}}setValueArray4F(e){this.needsUpdate=true;this._value=e}updateValueArray4F(){if(!this._isValidLoc())this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name);else this.needsUpdate=false;if(!this._value)return;this._shader.getCgl().gl.uniform4fv(this._loc,this._value);this._cgl.profileData.profileUniformCount++}setValueArray3F(e){this.needsUpdate=true;this._value=e}updateValueArray3F(){if(!this._isValidLoc())this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name);else this.needsUpdate=false;if(!this._value)return;this._shader.getCgl().gl.uniform3fv(this._loc,this._value);this._cgl.profileData.profileUniformCount++}setValueArray2F(e){this.needsUpdate=true;this._value=e}updateValueArray2F(){if(!this._isValidLoc())this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name);else this.needsUpdate=false;if(!this._value)return;this._shader.getCgl().gl.uniform2fv(this._loc,this._value);this._cgl.profileData.profileUniformCount++}setValueArrayF(e){this.needsUpdate=true;this._value=e}updateValueArrayF(){if(!this._isValidLoc())this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name);else this.needsUpdate=false;if(!this._value)return;this._shader.getCgl().gl.uniform1fv(this._loc,this._value);this._cgl.profileData.profileUniformCount++}setValueArrayT(e){this.needsUpdate=true;this._value=e}updateValue3F(){if(!this._value)return;if(!this._isValidLoc()){this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name);this._cgl.profileData.profileShaderGetUniform++;this._cgl.profileData.profileShaderGetUniformName=this._name}this._shader.getCgl().gl.uniform3f(this._loc,this._value[0],this._value[1],this._value[2]);this.needsUpdate=false;this._cgl.profileData.profileUniformCount++}setValue3F(e){if(!e)return;if(!this._oldValue){this._oldValue=[e[0]-1,1,2];this.needsUpdate=true}else if(e[0]!=this._oldValue[0]||e[1]!=this._oldValue[1]||e[2]!=this._oldValue[2]){this._oldValue[0]=e[0];this._oldValue[1]=e[1];this._oldValue[2]=e[2];this.needsUpdate=true}this._value=e}updateValue2F(){if(!this._value)return;if(!this._isValidLoc()){this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name);this._cgl.profileData.profileShaderGetUniform++;this._cgl.profileData.profileShaderGetUniformName=this._name}this._shader.getCgl().gl.uniform2f(this._loc,this._value[0],this._value[1]);this.needsUpdate=false;this._cgl.profileData.profileUniformCount++}setValue2F(e){if(!e)return;if(!this._oldValue){this._oldValue=[e[0]-1,1];this.needsUpdate=true}else if(e[0]!=this._oldValue[0]||e[1]!=this._oldValue[1]){this._oldValue[0]=e[0];this._oldValue[1]=e[1];this.needsUpdate=true}this._value=e}updateValue4F(){if(!this._isValidLoc()){this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name);this._cgl.profileData.profileShaderGetUniform++;this._cgl.profileData.profileShaderGetUniformName=this._name}if(!this._value){this._log.warn("no value for uniform",this._name,this);this._value=[0,0,0,0]}this.needsUpdate=false;this._shader.getCgl().gl.uniform4f(this._loc,this._value[0],this._value[1],this._value[2],this._value[3]);this._cgl.profileData.profileUniformCount++}setValue4F(e){if(typeof this.value=="number")this.value=vec4.create();if(!e)return;if(!this._oldValue){this._oldValue=[e[0]-1,1,2,3];this.needsUpdate=true}else if(e[0]!=this._oldValue[0]||e[1]!=this._oldValue[1]||e[2]!=this._oldValue[2]||e[3]!=this._oldValue[3]){this._oldValue[0]=e[0];this._oldValue[1]=e[1];this._oldValue[2]=e[2];this.needsUpdate=true}this._value=e}updateValueM4(){if(!this._isValidLoc()){this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name);this._cgl.profileData.profileShaderGetUniform++;this._cgl.profileData.profileShaderGetUniformName=this._name}if(!this._value||this._value.length%16!=0)return console.log("this.name",this._name,this._value);this._shader.getCgl().gl.uniformMatrix4fv(this._loc,false,this._value);this._cgl.profileData.profileUniformCount++}setValueM4(e){this.needsUpdate=true;this._value=e||mat4.create()}updateValueArrayT(){if(!this._isValidLoc())this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name);else this.needsUpdate=false;if(!this._value)return;this._shader.getCgl().gl.uniform1iv(this._loc,this._value);this._cgl.profileData.profileUniformCount++}updateValueT(){if(!this._isValidLoc()){this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name);this._cgl.profileData.profileShaderGetUniform++;this._cgl.profileData.profileShaderGetUniformName=this._name}this._cgl.profileData.profileUniformCount++;this._shader.getCgl().gl.uniform1i(this._loc,this._value);this.needsUpdate=false}setValueT(e){this.needsUpdate=true;this._value=e}}y.glslTypeString=e=>{if(e=="f")return"float";if(e=="b")return"bool";if(e=="i")return"int";if(e=="2i")return"ivec2";if(e=="2f")return"vec2";if(e=="3f")return"vec3";if(e=="4f")return"vec4";if(e=="m4")return"mat4";if(e=="t")return"sampler2D";if(e=="tc")return"samplerCube";if(e=="3f[]")return null;if(e=="m4[]")return null;if(e=="f[]")return null;console.warn("[CGL UNIFORM] unknown glsl type string ",e)};const L={SHADERVAR_VERTEX_POSITION:"vPosition",SHADERVAR_VERTEX_NUMBER:"attrVertIndex",SHADERVAR_VERTEX_NORMAL:"attrVertNormal",SHADERVAR_VERTEX_TEXCOORD:"attrTexCoord",SHADERVAR_INSTANCE_MMATRIX:"instMat",SHADERVAR_VERTEX_COLOR:"attrVertColor",SHADERVAR_INSTANCE_INDEX:"instanceIndex",SHADERVAR_UNI_PROJMAT:"projMatrix",SHADERVAR_UNI_VIEWMAT:"viewMatrix",SHADERVAR_UNI_MODELMAT:"modelMatrix",SHADERVAR_UNI_NORMALMAT:"normalMatrix",SHADERVAR_UNI_INVVIEWMAT:"inverseViewMatrix",SHADERVAR_UNI_INVPROJMAT:"invProjMatrix",SHADERVAR_UNI_MATERIALID:"materialId",SHADERVAR_UNI_OBJECTID:"objectId",SHADERVAR_UNI_VIEWPOS:"camPos"};const ie={BLEND_NONE:0,BLEND_NORMAL:1,BLEND_ADD:2,BLEND_SUB:3,BLEND_MUL:4};const se=180/Math.PI;const ne=Math.PI/180;const M={MATH:{DEG2RAD:ne,RAD2DEG:se},SHADER:L,BLEND_MODES:ie};function re(e){e.prototype.hasFeedbacks=function(){return this._feedBacks.length>0};e.prototype.removeFeedbacks=function(e){if(!this._feedbacks)return;this._feedbacks.length=0;this._feedBacksChanged=true};e.prototype.setAttributeFeedback=function(){};e.prototype.setFeedback=function(e,t,i){let s={nameOut:t};let n=false;this.unBindFeedbacks();for(let e=0;e<this._feedBacks.length;e++){if(this._feedBacks[e].nameOut==t){s=this._feedBacks[e];n=true}}if(!n)this._feedBacksChanged=true;s.initialArr=i;s.attrib=e;if(s.outBuffer)this._cgl.gl.deleteBuffer(s.outBuffer);s.outBuffer=this._cgl.gl.createBuffer();this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER,s.outBuffer);this._cgl.gl.bufferData(this._cgl.gl.ARRAY_BUFFER,s.initialArr,this._cgl.gl.STATIC_DRAW);this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER,s.attrib.buffer);this._cgl.gl.bufferData(this._cgl.gl.ARRAY_BUFFER,s.initialArr,this._cgl.gl.STATIC_DRAW);if(!n)this._feedBacks.push(s);return s};e.prototype.bindFeedback=function(t){if(!this._feedBacks||this._feedBacks.length===0)return;if(this._transformFeedBackLoc==-1)this._transformFeedBackLoc=this._cgl.gl.createTransformFeedback();this._cgl.gl.bindTransformFeedback(this._cgl.gl.TRANSFORM_FEEDBACK,this._transformFeedBackLoc);let i=false;for(let e=0;e<this._feedBacks.length;e++){const s=this._feedBacks[e];if(s.attrib==t){i=true;this._cgl.gl.bindBufferBase(this._cgl.gl.TRANSFORM_FEEDBACK_BUFFER,e,s.outBuffer)}}if(!i){}};e.prototype.drawFeedbacks=function(e,t){let i=0;if(this._feedBacksChanged){const s=[];this._cgl.gl.bindTransformFeedback(this._cgl.gl.TRANSFORM_FEEDBACK,this._transformFeedBackLoc);for(i=0;i<this._feedBacks.length;i++)s.push(this._feedBacks[i].nameOut);e.setFeedbackNames(s);console.log("feedbacknames",s);e.compile();this._feedBacksChanged=false;this._cgl.gl.bindTransformFeedback(this._cgl.gl.TRANSFORM_FEEDBACK,null);console.log("changed finished");return}this._cgl.gl.beginTransformFeedback(this.glPrimitive);this._cgl.gl.drawArrays(t,0,this._feedBacks[0].attrib.numItems);this._cgl.gl.endTransformFeedback();this.unBindFeedbacks();this.feedBacksSwapBuffers()};e.prototype.unBindFeedbacks=function(){for(let e=0;e<this._feedBacks.length;e++){this._cgl.gl.bindBufferBase(this._cgl.gl.TRANSFORM_FEEDBACK_BUFFER,e,null)}this._cgl.gl.bindTransformFeedback(this._cgl.gl.TRANSFORM_FEEDBACK,null)};e.prototype.feedBacksSwapBuffers=function(){for(let e=0;e<this._feedBacks.length;e++){const t=this._feedBacks[e].attrib.buffer;this._feedBacks[e].attrib.buffer=this._feedBacks[e].outBuffer;this._feedBacks[e].outBuffer=t}}}const F={};F.lastMesh=null;const N=function(e,t,i){this._cgl=e;let s=i||{};if(CABLES.UTILS.isNumeric(s))s={glPrimitive:i};this._log=new u("cgl_mesh");this._bufVertexAttrib=null;this._bufVerticesIndizes=this._cgl.gl.createBuffer();this._indexType=this._cgl.gl.UNSIGNED_SHORT;this._attributes=[];this._attribLocs={};this._geom=null;this._lastShader=null;this._numInstances=0;this._glPrimitive=s.glPrimitive;this.opId=s.opId||"";this._preWireframeGeom=null;this.addVertexNumbers=false;this._name="unknown";this.feedBackAttributes=[];this.setGeom(t);this._feedBacks=[];this._feedBacksChanged=false;this._transformFeedBackLoc=-1;this._lastAttrUpdate=0;this.memFreed=false;this._cgl.profileData.addHeavyEvent("mesh constructed",this._name);this._queryExt=null;Object.defineProperty(this,"numInstances",{get(){return this._numInstances},set(e){this.setNumInstances(e)}})};N.prototype.freeMem=function(){this.memFreed=true;for(let e=0;e<this._attributes.length;e++){this._attributes[e].floatArray=null}};N.prototype.updateVertices=function(e){this.setAttribute(M.SHADER.SHADERVAR_VERTEX_POSITION,e.vertices,3);this._numVerts=e.vertices.length/3};N.prototype.setAttributePointer=function(t,i,s,n){for(let e=0;e<this._attributes.length;e++){if(this._attributes[e].name==t){if(!this._attributes[e].pointer)this._attributes[e].pointer=[];this._attributes[e].pointer.push({loc:-1,name:i,stride:s,offset:n,instanced:t==M.SHADER.SHADERVAR_INSTANCE_MMATRIX})}}};N.prototype.getAttribute=function(t){for(let e=0;e<this._attributes.length;e++)if(this._attributes[e].name==t)return this._attributes[e]};N.prototype.setAttributeRange=function(e,t,i,s){if(!e)return;if(!i&&!s)return;if(!e.name){this._log.stack("no attrname?!")}this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER,e.buffer);this._cgl.profileData.profileMeshAttributes+=s-i||0;this._cgl.profileData.profileSingleMeshAttribute[this._name]=this._cgl.profileData.profileSingleMeshAttribute[this._name]||0;this._cgl.profileData.profileSingleMeshAttribute[this._name]+=s-i||0;if(e.numItems<t.length/e.itemSize){this._resizeAttr(t,e)}if(s>t.length){if(CABLES.platform.isDevEnv())this._log.log(this._cgl.canvas.id+" "+e.name+" buffersubdata out of bounds ?",t.length,s,i,e);return}if(this._cgl.glVersion==1)this._cgl.gl.bufferSubData(this._cgl.gl.ARRAY_BUFFER,0,t);else this._cgl.gl.bufferSubData(this._cgl.gl.ARRAY_BUFFER,i*4,t,i,s-i)};N.prototype._resizeAttr=function(e,t){if(t.buffer)this._cgl.gl.deleteBuffer(t.buffer);t.buffer=this._cgl.gl.createBuffer();this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER,t.buffer);this._bufferArray(e,t);t.numItems=e.length/t.itemSize};N.prototype._bufferArray=function(e,t){let i=t.floatArray||null;if(!e)return;if(this._cgl.debugOneFrame){console.log("_bufferArray",e.length,t.name)}if(!(e instanceof Float32Array)){if(t&&i&&i.length==e.length){i.set(e)}else{i=new Float32Array(e);if(this._cgl.debugOneFrame){console.log("_bufferArray create new float32array",e.length,t.name)}if(e.length>1e4){this._cgl.profileData.profileNonTypedAttrib++;this._cgl.profileData.profileNonTypedAttribNames="("+this._name+":"+t.name+")"}}}else i=e;t.arrayLength=i.length;t.floatArray=null;this._cgl.gl.bufferData(this._cgl.gl.ARRAY_BUFFER,i,this._cgl.gl.DYNAMIC_DRAW)};N.prototype.addAttribute=N.prototype.updateAttribute=N.prototype.setAttribute=function(e,t,i,s){if(!t){this._log.error("mesh addAttribute - no array given! "+e);throw new Error}let n=null;let r=false;let a=0;const o=t.length/i;this._cgl.profileData.profileMeshAttributes+=o||0;if(typeof s=="function"){n=s}if(typeof s=="object"){if(s.cb)n=s.cb;if(s.instanced)r=s.instanced}if(e==M.SHADER.SHADERVAR_INSTANCE_MMATRIX)r=true;for(a=0;a<this._attributes.length;a++){const u=this._attributes[a];if(u.name==e){if(u.numItems===o){}else{this._resizeAttr(t,u)}this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER,u.buffer);this._bufferArray(t,u);return u}}const l=this._cgl.gl.createBuffer();this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER,l);let h=this._cgl.gl.FLOAT;if(s&&s.type)h=s.type;const u={buffer:l,name:e,cb:n,itemSize:i,numItems:o,startItem:0,instanced:r,type:h};this._bufferArray(t,u);if(e==M.SHADER.SHADERVAR_VERTEX_POSITION)this._bufVertexAttrib=u;this._attributes.push(u);this._attribLocs={};return u};N.prototype.getAttributes=function(){return this._attributes};N.prototype.updateTexCoords=function(e){if(e.texCoords&&e.texCoords.length>0){this.setAttribute(M.SHADER.SHADERVAR_VERTEX_TEXCOORD,e.texCoords,2)}else{const t=new Float32Array(Math.round(e.vertices.length/3*2));this.setAttribute(M.SHADER.SHADERVAR_VERTEX_TEXCOORD,t,2)}};N.prototype.updateNormals=function(e){if(e.vertexNormals&&e.vertexNormals.length>0){this.setAttribute(M.SHADER.SHADERVAR_VERTEX_NORMAL,e.vertexNormals,3)}else{const t=new Float32Array(Math.round(e.vertices.length));this.setAttribute(M.SHADER.SHADERVAR_VERTEX_NORMAL,t,3)}};N.prototype._setVertexNumbers=function(e){if(!this._verticesNumbers||this._verticesNumbers.length!=this._numVerts||e){if(e)this._verticesNumbers=e;else{this._verticesNumbers=new Float32Array(this._numVerts);for(let e=0;e<this._numVerts;e++)this._verticesNumbers[e]=e}this.setAttribute(M.SHADER.SHADERVAR_VERTEX_NUMBER,this._verticesNumbers,1,(e,t,i)=>{if(!i.uniformNumVertices)i.uniformNumVertices=new y(i,"f","numVertices",this._numVerts);i.uniformNumVertices.setValue(this._numVerts)})}};N.prototype.setVertexIndices=function(t){if(!this._bufVerticesIndizes){this._log.warn("no bufVerticesIndizes: "+this._name);return}if(t.length>0){if(t instanceof Float32Array)this._log.warn("vertIndices float32Array: "+this._name);for(let e=0;e<t.length;e++){if(t[e]>=this._numVerts){this._log.warn("invalid index in "+this._name,e,t[e]);return}}this._cgl.gl.bindBuffer(this._cgl.gl.ELEMENT_ARRAY_BUFFER,this._bufVerticesIndizes);if(t.length>65535){this.vertIndicesTyped=new Uint32Array(t);this._indexType=this._cgl.gl.UNSIGNED_INT}else if(t instanceof Uint32Array){this.vertIndicesTyped=t;this._indexType=this._cgl.gl.UNSIGNED_INT}else if(!(t instanceof Uint16Array)){this.vertIndicesTyped=new Uint16Array(t);this._indexType=this._cgl.gl.UNSIGNED_SHORT}else this.vertIndicesTyped=t;this._cgl.gl.bufferData(this._cgl.gl.ELEMENT_ARRAY_BUFFER,this.vertIndicesTyped,this._cgl.gl.DYNAMIC_DRAW);this._bufVerticesIndizes.itemSize=1;this._bufVerticesIndizes.numItems=t.length}else this._bufVerticesIndizes.numItems=0};N.prototype.setGeom=function(e,t){this._geom=e;if(e.glPrimitive!=null)this._glPrimitive=e.glPrimitive;if(this._geom&&this._geom.name)this._name="mesh "+this._geom.name;F.lastMesh=null;this._cgl.profileData.profileMeshSetGeom++;this._disposeAttributes();this.updateVertices(this._geom);this.setVertexIndices(this._geom.verticesIndices);if(this.addVertexNumbers)this._setVertexNumbers();const i=this._geom.getAttributes();const s={texCoords:M.SHADER.SHADERVAR_VERTEX_TEXCOORD,vertexNormals:M.SHADER.SHADERVAR_VERTEX_NORMAL,vertexColors:M.SHADER.SHADERVAR_VERTEX_COLOR,tangents:"attrTangent",biTangents:"attrBiTangent"};for(const n in i)if(i[n].data&&i[n].data.length)this.setAttribute(s[n]||n,i[n].data,i[n].itemSize);if(t){this._geom=null}};N.prototype._preBind=function(t){for(let e=0;e<this._attributes.length;e++)if(this._attributes[e].cb)this._attributes[e].cb(this._attributes[e],this._geom,t)};N.prototype._checkAttrLengths=function(){if(this.memFreed)return;for(let e=0;e<this._attributes.length;e++){if(this._attributes[e].arrayLength/this._attributes[e].itemSize<this._attributes[0].arrayLength/this._attributes[0].itemSize){let e="unknown";if(this._geom)e=this._geom.name}}};N.prototype._bind=function(t){if(!t.isValid())return;let i=[];if(this._attribLocs[t.id])i=this._attribLocs[t.id];else this._attribLocs[t.id]=i;this._lastShader=t;if(t.lastCompile>this._lastAttrUpdate||i.length!=this._attributes.length){this._lastAttrUpdate=t.lastCompile;for(let e=0;e<this._attributes.length;e++)i[e]=-1}for(let e=0;e<this._attributes.length;e++){const s=this._attributes[e];if(i[e]==-1){if(s._attrLocationLastShaderTime!=t.lastCompile){s._attrLocationLastShaderTime=t.lastCompile;i[e]=this._cgl.glGetAttribLocation(t.getProgram(),s.name);this._cgl.profileData.profileAttrLoc++}}if(i[e]!=-1){this._cgl.gl.enableVertexAttribArray(i[e]);this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER,s.buffer);if(s.instanced){if(s.itemSize<=4){if(!s.itemSize||s.itemSize==0)this._log.warn("instanced attrib itemsize error",this._geom.name,s);this._cgl.gl.vertexAttribPointer(i[e],s.itemSize,s.type,false,s.itemSize*4,0);this._cgl.gl.vertexAttribDivisor(i[e],1)}else if(s.itemSize==16){const n=16*4;this._cgl.gl.vertexAttribPointer(i[e],4,s.type,false,n,0);this._cgl.gl.enableVertexAttribArray(i[e]+1);this._cgl.gl.vertexAttribPointer(i[e]+1,4,s.type,false,n,4*4*1);this._cgl.gl.enableVertexAttribArray(i[e]+2);this._cgl.gl.vertexAttribPointer(i[e]+2,4,s.type,false,n,4*4*2);this._cgl.gl.enableVertexAttribArray(i[e]+3);this._cgl.gl.vertexAttribPointer(i[e]+3,4,s.type,false,n,4*4*3);this._cgl.gl.vertexAttribDivisor(i[e],1);this._cgl.gl.vertexAttribDivisor(i[e]+1,1);this._cgl.gl.vertexAttribDivisor(i[e]+2,1);this._cgl.gl.vertexAttribDivisor(i[e]+3,1)}else{this._log.warn("unknown instance attrib size",s.name)}}else{if(!s.itemSize||s.itemSize==0)this._log.warn("attrib itemsize error",this._name,s);this._cgl.gl.vertexAttribPointer(i[e],s.itemSize,s.type,false,s.itemSize*4,0);if(s.pointer){for(let e=0;e<s.pointer.length;e++){const r=s.pointer[e];if(r.loc==-1)r.loc=this._cgl.glGetAttribLocation(t.getProgram(),r.name);this._cgl.profileData.profileAttrLoc++;this._cgl.gl.enableVertexAttribArray(r.loc);this._cgl.gl.vertexAttribPointer(r.loc,s.itemSize,s.type,false,r.stride,r.offset)}}this.bindFeedback(s)}}}if(this._bufVerticesIndizes&&this._bufVerticesIndizes.numItems!==0)this._cgl.gl.bindBuffer(this._cgl.gl.ELEMENT_ARRAY_BUFFER,this._bufVerticesIndizes)};N.prototype.unBind=function(){const e=this._lastShader;this._lastShader=null;if(!e)return;let t=[];if(this._attribLocs[e.id])t=this._attribLocs[e.id];else this._attribLocs[e.id]=t;F.lastMesh=null;for(let e=0;e<this._attributes.length;e++){if(this._attributes[e].instanced){if(this._attributes[e].itemSize<=4){if(t[e]!=-1)this._cgl.gl.vertexAttribDivisor(t[e],0);if(t[e]>=0)this._cgl.gl.disableVertexAttribArray(t[e])}else{this._cgl.gl.vertexAttribDivisor(t[e],0);this._cgl.gl.vertexAttribDivisor(t[e]+1,0);this._cgl.gl.vertexAttribDivisor(t[e]+2,0);this._cgl.gl.vertexAttribDivisor(t[e]+3,0);this._cgl.gl.disableVertexAttribArray(t[e]+1);this._cgl.gl.disableVertexAttribArray(t[e]+2);this._cgl.gl.disableVertexAttribArray(t[e]+3)}}if(t[e]!=-1)this._cgl.gl.disableVertexAttribArray(t[e])}};N.prototype.meshChanged=function(){return this._cgl.lastMesh&&this._cgl.lastMesh!=this};N.prototype.printDebug=function(e){console.log("--attributes");for(let e=0;e<this._attributes.length;e++){console.log("attribute "+e+" "+this._attributes[e].name)}};N.prototype.setNumVertices=function(e){this._bufVertexAttrib.numItems=e};N.prototype.getNumVertices=function(){return this._bufVertexAttrib.numItems};N.prototype.render=function(i){if(!i||!i.isValid()||this._cgl.aborted)return;this._checkAttrLengths();if(this._geom){if(this._preWireframeGeom&&!i.wireframe&&!this._geom.isIndexed()){this.setGeom(this._preWireframeGeom);this._preWireframeGeom=null}if(i.wireframe){let e=false;if(this._geom.isIndexed()){if(!this._preWireframeGeom){this._preWireframeGeom=this._geom;this._geom=this._geom.copy()}this._geom.unIndex();e=true}if(!this._geom.getAttribute("attrBarycentric")){if(!this._preWireframeGeom){this._preWireframeGeom=this._geom;this._geom=this._geom.copy()}e=true;this._geom.calcBarycentric()}if(e)this.setGeom(this._geom)}}let e=false;if(F.lastMesh!=this){if(F.lastMesh)F.lastMesh.unBind();e=true}if(e)this._preBind(i);if(!i.bind())return;this._bind(i);if(this.addVertexNumbers)this._setVertexNumbers();F.lastMesh=this;let t=this._cgl.gl.TRIANGLES;if(this._glPrimitive!==undefined)t=this._glPrimitive;if(i.glPrimitive!==null)t=i.glPrimitive;let s=1;let n=this._cgl.profileData.doProfileGlQuery;let r=false;if(n){let e=this._name+" - "+i.getName()+" #"+i.id;if(this._numInstances)e+=" instanced "+this._numInstances+"x";let t=this._cgl.profileData.glQueryData[e];if(!t)t={id:e,num:0};if(i.opId)t.shaderOp=i.opId;if(this.opId)t.meshOp=this.opId;this._cgl.profileData.glQueryData[e]=t;if(!this._queryExt&&this._queryExt!==false)this._queryExt=this._cgl.enableExtension("EXT_disjoint_timer_query_webgl2")||false;if(this._queryExt){if(t._drawQuery){const a=this._cgl.gl.getQueryParameter(t._drawQuery,this._cgl.gl.QUERY_RESULT_AVAILABLE);if(a){const o=this._cgl.gl.getQueryParameter(t._drawQuery,this._cgl.gl.QUERY_RESULT);const l=o/1e6;t._times=t._times||0;t._times+=l;t._numcount++;t.when=performance.now();t._drawQuery=null;t.queryStarted=false}}if(!t.queryStarted){t._drawQuery=this._cgl.gl.createQuery();this._cgl.gl.beginQuery(this._queryExt.TIME_ELAPSED_EXT,t._drawQuery);r=t.queryStarted=true}}}if(this.hasFeedbacks()){this.drawFeedbacks(i,t)}else if(!this._bufVerticesIndizes||this._bufVerticesIndizes.numItems===0){if(t==this._cgl.gl.TRIANGLES)s=3;if(this._numInstances===0)this._cgl.gl.drawArrays(t,this._bufVertexAttrib.startItem,this._bufVertexAttrib.numItems-this._bufVertexAttrib.startItem);else this._cgl.gl.drawArraysInstanced(t,this._bufVertexAttrib.startItem,this._bufVertexAttrib.numItems,this._numInstances)}else{if(t==this._cgl.gl.TRIANGLES)s=3;if(this._numInstances===0){this._cgl.gl.drawElements(t,this._bufVerticesIndizes.numItems,this._indexType,0)}else{this._cgl.gl.drawElementsInstanced(t,this._bufVerticesIndizes.numItems,this._indexType,0,this._numInstances)}}if(this._cgl.debugOneFrame&&this._cgl.gl.getError()!=this._cgl.gl.NO_ERROR){this._log.error("mesh draw gl error");this._log.error("mesh",this);this._log.error("shader",i);const h=[];for(let e=0;e<this._cgl.gl.getProgramParameter(i.getProgram(),this._cgl.gl.ACTIVE_ATTRIBUTES);e++){const u=this._cgl.gl.getActiveAttrib(i.getProgram(),e).name;this._log.error("attrib ",u)}}this._cgl.profileData.profileMeshNumElements+=this._bufVertexAttrib.numItems/s*(this._numInstances||1);this._cgl.profileData.profileMeshDraw++;if(n&&r){this._cgl.gl.endQuery(this._queryExt.TIME_ELAPSED_EXT)}this._cgl.printError("mesh render "+this._name);this.unBind()};N.prototype.setNumInstances=function(t){t=Math.max(0,t);if(this._numInstances!=t){this._numInstances=t;const i=new Float32Array(t);for(let e=0;e<t;e++)i[e]=e;this.setAttribute(M.SHADER.SHADERVAR_INSTANCE_INDEX,i,1,{instanced:true})}};N.prototype._disposeAttributes=function(){if(!this._attributes)return;for(let e=0;e<this._attributes.length;e++){if(this._attributes[e].buffer){this._cgl.gl.deleteBuffer(this._attributes[e].buffer);this._attributes[e].buffer=null}}this._attributes.length=0};N.prototype.dispose=function(){if(this._bufVertexAttrib&&this._bufVertexAttrib.buffer)this._cgl.gl.deleteBuffer(this._bufVertexAttrib.buffer);if(this._bufVerticesIndizes)this._cgl.gl.deleteBuffer(this._bufVerticesIndizes);this._bufVerticesIndizes=null;this._disposeAttributes()};re(N);const U={};U.getSimpleRect=function(e,t){const i=new _(t);i.vertices=[1,1,0,-1,1,0,1,-1,0,-1,-1,0];i.texCoords=[1,1,0,1,1,0,0,0];i.verticesIndices=[0,1,2,2,1,3];i.vertexNormals=[0,0,0,0,0,0,0,0,0,0,0,0];return new N(e,i)};U.getSimpleCube=function(e,t){const i=new _(t);i.vertices=[-1,-1,1,1,-1,1,1,1,1,-1,1,1,-1,-1,-1,1,-1,-1,1,1,-1,-1,1,-1,-1,1,-1,1,1,-1,1,1,1,-1,1,1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,1,-1,1,1,1,1,1,1,-1,-1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1];i.setTexCoords([0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0]);i.verticesIndices=[0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23];i.vertexNormals=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0]);i.tangents=new Float32Array([0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1]);i.biTangents=new Float32Array([-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1]);return new N(e,i)};class ae{constructor(e,t,i){this.cgl=e;this._options=i;this.fb=null;let s=i.shader;this._useDefaultShader=true;if(i.shader)this._useDefaultShader=false;i.numRenderBuffers=i.numRenderBuffers||1;if(!s){s="".endl()+"IN vec2 texCoord;";for(let e=0;e<i.numRenderBuffers;e++){s=s.endl()+"UNI sampler2D tex"+e+";".endl()}s=s.endl()+"void main()".endl()+"{";if(i.numRenderBuffers==1){s=s.endl()+"    outColor= texture(tex0,texCoord);".endl()}else for(let e=0;e<i.numRenderBuffers;e++){s=s.endl()+"outColor"+e+" = texture(tex"+e+",texCoord);".endl()}s=s.endl()+"}"}const n=i.vertexShader||"".endl()+"IN vec3 vPosition;".endl()+"IN vec2 attrTexCoord;".endl()+"OUT vec2 texCoord;".endl()+"void main()".endl()+"{".endl()+"   texCoord=attrTexCoord;".endl()+"   gl_Position = vec4(vPosition,  1.0);".endl()+"}";this.bgShader=new CGL.Shader(e,"corelib copytexture "+t);this.bgShader.setSource(n,s);if(!i.vertexShader)this.bgShader.ignoreMissingUniforms=true;new CGL.Uniform(this.bgShader,"t","tex",0);new CGL.Uniform(this.bgShader,"t","tex1",1);new CGL.Uniform(this.bgShader,"t","tex2",2);new CGL.Uniform(this.bgShader,"t","tex3",3);this.mesh=U.getSimpleRect(this.cgl,"texEffectRect")}setSize(e,t){this._options.width=e;this._options.height=t}copy(e,t,i,s,n){const r=this.cgl;if(!e)e=CGL.Texture.getEmptyTexture(this.cgl);let a=this._options.width||e.width,o=this._options.height||e.height;if(this.fb){if(a<=0)a=8;if(o<=0)o=8;if(this.fb.getWidth()!=a||this.fb.getHeight()!=o)this.fb.setSize(a,o)}else{let e=CGL.Texture.FILTER_LINEAR;let t=CGL.Texture.WRAP_CLAMP_TO_EDGE;if(this._options.isFloatingPointTexture)e=CGL.Texture.FILTER_NEAREST;if(this._options.hasOwnProperty("filter"))e=this._options.filter;if(this._options.hasOwnProperty("wrap"))t=this._options.wrap;const l={isFloatingPointTexture:this._options.isFloatingPointTexture,pixelFormat:this._options.pixelFormat,numRenderBuffers:this._options.numRenderBuffers||1,filter:e,wrap:t};if(r.glVersion==1)this.fb=new CGL.Framebuffer(r,a,o,l);else this.fb=new CGL.Framebuffer2(r,a,o,l)}r.frameStore.renderOffscreen=true;this.fb.renderStart(r);r.setTexture(0,e.tex);if(t)r.setTexture(1,t.tex);if(i)r.setTexture(2,i.tex);if(s)r.setTexture(3,s.tex);if(n)r.setTexture(4,n.tex);r.pushShader(this.bgShader);this.mesh.render(this.bgShader);r.popShader();this.fb.renderEnd();r.frameStore.renderOffscreen=false;return this.fb.getTextureColor()}dispose(){if(this.fb)this.fb.dispose();if(this.bgShader)this.bgShader.dispose();if(this.mesh)this.mesh.dispose()}}CGL.CopyTexture=ae;((this.CGL=this.CGL||{}).COREMODULES=this.CGL.COREMODULES||{}).Copytexture=e.Copytexture})();(()=>{"use strict";var e={};class t{constructor(e,t,i){this._cgl=e;this._name=t;this._origShaders={};this._uniforms=[];this._structUniforms=[];this._definesToggled={};this._defines={};this._mods=[];this._textures=[];this._boundShader=null;this._changedDefines=true;this._changedUniforms=true;this._modulesChanged=false;this.needsTexturePush=false;this._lastShader=null;this._attributes=[];if(i&&i.opId)this.opId=i.opId;if(this._cgl.glVersion==1){this._cgl.enableExtension("OES_texture_float");this._cgl.enableExtension("OES_texture_float_linear");this._cgl.enableExtension("OES_texture_half_float");this._cgl.enableExtension("OES_texture_half_float_linear")}}bind(e,t){const i=e||this._cgl.getShader();if(!i)return;this._boundShader=this._origShaders[i.id];let s=false;if(this._boundShader&&this._lastShader!=this._boundShader.shader){if(!this._boundShader.shader.hasModule(this._mods[0].id))s=true}if(s||!this._boundShader||i.lastCompile!=this._boundShader.lastCompile||this._modulesChanged||i._needsRecompile){if(this._boundShader)this._boundShader.shader.dispose();if(i._needsRecompile)i.compile();this._boundShader=this._origShaders[i.id]={lastCompile:i.lastCompile,orig:i,shader:i.copy()};this._addModulesToShader(this._boundShader.shader);this._updateDefinesShader(this._boundShader.shader);this._updateUniformsShader(this._boundShader.shader)}this._boundShader.wireframe=i.wireframe;if(this._changedDefines)this._updateDefines();if(this._changedUniforms)this._updateUniforms();if(t!==false)this._cgl.pushShader(this._boundShader.shader);this._boundShader.shader.copyUniformValues(this._boundShader.orig);if(this.needsTexturePush){for(let e=0;e<this._textures.length;e+=1){const n=this._textures[e][0];const r=this._textures[e][1];const a=this._textures[e][2];if(this._getUniform(n)){const o=this.getPrefixedName(n);const l=this._boundShader.shader.getUniform(o);if(l)this._boundShader.shader.pushTexture(l,r,a)}}this.needsTexturePush=false;this._textures.length=0}this._modulesChanged=false;this._boundShader.shader.fromMod=this;if(this.onBind)this.onBind(this._boundShader.shader);return this._boundShader.shader}unbind(e){if(this._boundShader){if(e!==false)this._cgl.popShader()}this._boundShader=null}_addModulesToShader(t){let i;if(this._mods.length>1)i=this._mods[0];for(let e=0;e<this._mods.length;e++)t.addModule(this._mods[e],i)}_removeModulesFromShader(e){for(const t in this._origShaders)this._origShaders[t].shader.removeModule(e)}addModule(e){this._mods.push(e);this._modulesChanged=true}removeModule(t){const i=[];let s=false;for(let e=0;e<this._mods.length;e++){if(this._mods[e].title==t){s=true;this._removeModulesFromShader(this._mods[e]);i.push(e)}}for(let e=i.length-1;e>=0;e-=1)this._mods.splice(i[e],1);this._modulesChanged=true}_updateUniformsShader(s){for(let e=0;e<this._uniforms.length;e++){const t=this._uniforms[e];const i=this.getPrefixedName(t.name);if(!s.hasUniform(i)&&!t.structName){let e=null;if(t.shaderType==="both"){e=s.addUniformBoth(t.type,i,t.v1,t.v2,t.v3,t.v4);e.comment="mod: "+this._name}else if(t.shaderType==="frag"){e=s.addUniformFrag(t.type,i,t.v1,t.v2,t.v3,t.v4);e.comment="mod: "+this._name}else if(t.shaderType==="vert"){e=s.addUniformVert(t.type,i,t.v1,t.v2,t.v3,t.v4);e.comment="mod: "+this._name}}}for(let i=0;i<this._structUniforms.length;i+=1){const n=this._structUniforms[i];let e=n.uniformName;let t=n.structName;const r=n.members;e=this.getPrefixedName(n.uniformName);t=this.getPrefixedName(n.structName);if(n.shaderType==="frag"){s.addUniformStructFrag(t,e,r)}if(n.shaderType==="vert"){s.addUniformStructVert(t,e,r)}if(n.shaderType==="both"){s.addUniformStructBoth(t,e,r)}}}_updateUniforms(){for(const e in this._origShaders)this._updateUniformsShader(this._origShaders[e].shader);this._changedUniforms=false}_setUniformValue(e,t,i){const s=e.getUniform(t);if(s)s.setValue(i)}setUniformValue(e,t){const i=this._getUniform(e);if(!i)return;const s=this.getPrefixedName(e);for(const n in this._origShaders){this._setUniformValue(this._origShaders[n].shader,s,t)}}hasUniform(e){return this._getUniform(e)}_getUniform(t){for(let e=0;e<this._uniforms.length;e++){if(this._uniforms[e].name==t)return this._uniforms[e];if(this._uniforms[e].structName){if(this._uniforms[e].propertyName==t)return this._uniforms[e]}}return false}_getStructUniform(t){for(let e=0;e<this._structUniforms.length;e+=1)if(this._structUniforms[e].uniformName===t)return this._structUniforms[e];return null}_isStructUniform(t){for(let e=0;e<this._uniforms.length;e++){if(this._uniforms[e].name==t)return false;if(this._uniforms[e].structName){if(this._uniforms[e].propertyName==t)return true}}return false}addUniform(t,i,s,n,r,a,o,l,h,u){if(!this._getUniform(i)){let e="both";if(u)e=u;this._uniforms.push({type:t,name:i,v1:s,v2:n,v3:r,v4:a,structUniformName:o,structName:l,propertyName:h,shaderType:e});this._changedUniforms=true}}addUniformFrag(e,t,i,s,n,r){this.addUniform(e,t,i,s,n,r,null,null,null,"frag");this._changedUniforms=true}addUniformVert(e,t,i,s,n,r){this.addUniform(e,t,i,s,n,r,null,null,null,"vert");this._changedUniforms=true}addUniformBoth(e,t,i,s,n,r){this.addUniform(e,t,i,s,n,r,null,null,null,"both");this._changedUniforms=true}addUniformStruct(t,i,s,n){for(let e=0;e<s.length;e+=1){const r=s[e];if((r.type==="2i"||r.type==="i"||r.type==="3i")&&n==="both")console.error("Adding an integer struct member to both shaders can potentially error. Please use different structs for each shader. Error occured in struct:",t," with member:",r.name," of type:",r.type,".");if(!this._getUniform(i+"."+r.name)){this.addUniform(r.type,i+"."+r.name,r.v1,r.v2,r.v3,r.v4,i,t,r.name,n)}}if(!this._getStructUniform(i)){this._structUniforms.push({structName:t,uniformName:i,members:s,shaderType:n})}}addUniformStructVert(e,t,i){this.addUniformStruct(e,t,i,"vert")}addUniformStructFrag(e,t,i){this.addUniformStruct(e,t,i,"frag")}addUniformStructBoth(e,t,i){this.addUniformStruct(e,t,i,"both")}addAttribute(t){for(let e=0;e<this._attributes.length;e++){if(this._attributes[e].name==t.name&&this._attributes[e].nameFrag==t.nameFrag)return}this._attributes.push(t)}pushTexture(e,t,i){if(!t)throw new Error("no texture given to texturestack");this._textures.push([e,t,i]);this.needsTexturePush=true}_removeUniformFromShader(e,t){if(t.hasUniform(e))t.removeUniform(e)}removeUniform(t){if(this._getUniform(t)){for(let e=this._uniforms.length-1;e>=0;e-=1){const i=t;if(this._uniforms[e].name==t&&!this._uniforms[e].structName){for(const s in this._origShaders){this._removeUniformFromShader(this.getPrefixedName(i),this._origShaders[s].shader)}this._uniforms.splice(e,1)}}this._changedUniforms=true}}removeUniformStruct(t){if(this._getStructUniform(t)){for(let e=this._structUniforms.length-1;e>=0;e-=1){const i=this._structUniforms[e];if(i.uniformName===t){for(const s in this._origShaders){for(let e=0;e<i.members.length;e+=1){const n=i.members[e];this._removeUniformFromShader(this.getPrefixedName(n.name),this._origShaders[s].shader)}}this._structUniforms.splice(e,1)}}this._changedUniforms=true}}getPrefixedName(e){const t=this._mods[0].group;if(t===undefined){return}if(e.startsWith("MOD_")){e=e.substr("MOD_".length);e="mod"+t+"_"+e}return e}_updateDefinesShader(e){for(const t in this._defines){const i=this.getPrefixedName(t);if(this._defines[t]!==null&&this._defines[t]!==undefined)e.define(i,this._defines[t]);else e.removeDefine(i)}for(const t in this._definesToggled){const i=this.getPrefixedName(t);e.toggleDefine(i,this._definesToggled[t])}}_updateDefines(){for(const e in this._origShaders)this._updateDefinesShader(this._origShaders[e].shader);this._changedDefines=false}define(e,t){if(t===undefined)t=true;this._defines[e]=t;this._changedDefines=true}removeDefine(e){this._defines[e]=null;this._changedDefines=true}hasDefine(e){if(this._defines[e]!==null&&this._defines[e]!==undefined)return true;return false}toggleDefine(e,t){this._changedDefines=true;this._definesToggled[e]=t}currentShader(){if(!this._boundShader)return null;return this._boundShader.shader}dispose(){}}CGL.ShaderModifier=t;((this.CGL=this.CGL||{}).COREMODULES=this.CGL.COREMODULES||{}).Shadermodifier=e.Shadermodifier})();(()=>{"use strict";var e={};class t{constructor(){this.pixelData=null;this._finishedFence=true;this._size=0;this._pbo=null}_fence(r){const a=r.gl;this._finishedFence=false;return new Promise(function(t,i){if(r.aborted)return;let s=a.fenceSync(a.SYNC_GPU_COMMANDS_COMPLETE,0);if(!s)return;a.flush();function n(){if(r.aborted)return;const e=a.clientWaitSync(s,0,0);if(e==a.WAIT_FAILED){console.error("fence wait failed");if(i)i()}else if(e==a.TIMEOUT_EXPIRED){return setTimeout(n,0)}else if(e==a.CONDITION_SATISFIED){t();a.deleteSync(s)}else if(e==a.ALREADY_SIGNALED){t();a.deleteSync(s)}else{console.log("unknown fence status",e)}}n()})}read(e,t,i,s,n,r,a,o){if(CABLES.UI)if(!CABLES.UI.loaded||performance.now()-CABLES.UI.loadedTime<1e3)return;if(!this._finishedFence)return;const l=e.gl;let h=1;if(e.aborted)return;if(!t)return;if(i===CGL.Texture.TYPE_FLOAT)i=CGL.Texture.PFORMATSTR_RGBA32F;let u=CGL.Texture.isPixelFormatFloat(i);if(u)h=4;if(CGL.Texture.isPixelFormatHalfFloat(i))h=2;const c=CGL.Texture.setUpGlPixelFormat(e,i);const f=c.numColorChannels*r*a;if(r==0||a==0||f==0)return;if(!this._pixelData||this._size!=f*h){if(u)this._pixelData=new Float32Array(f*h);else this._pixelData=new Uint8Array(f);this._size=f*h}let g=l.UNSIGNED_BYTE;if(u)g=l.FLOAT;if(this._size==0||!this._pixelData){console.error("readpixel size 0",this._size,r,a);return}if(this._finishedFence){this._pbo=l.createBuffer();l.bindBuffer(l.PIXEL_PACK_BUFFER,this._pbo);l.bufferData(l.PIXEL_PACK_BUFFER,this._pixelData.byteLength,l.DYNAMIC_READ);l.bindFramebuffer(l.FRAMEBUFFER,t);l.bindBuffer(l.PIXEL_PACK_BUFFER,this._pbo);e.profileData.profileFencedPixelRead++;l.readPixels(s,n,r,a,l.RGBA,c.glDataType,0);l.bindBuffer(l.PIXEL_PACK_BUFFER,null);l.bindFramebuffer(l.FRAMEBUFFER,null)}let d=this._pixelData.byteLength;if(this._finishedFence&&this._pbo)this._fence(e).then(e=>{this._wasTriggered=false;this._finishedFence=true;if(!e&&this._pixelData&&this._pixelData.byteLength==d){l.bindBuffer(l.PIXEL_PACK_BUFFER,this._pbo);l.getBufferSubData(l.PIXEL_PACK_BUFFER,0,this._pixelData);l.bindBuffer(l.PIXEL_PACK_BUFFER,null);if(o)o(this._pixelData)}l.deleteBuffer(this._pbo);this._pbo=null});return true}}CGL.PixelReader=t;((this.CGL=this.CGL||{}).COREMODULES=this.CGL.COREMODULES||{}).Pixelreader=e.Pixelreader})();(()=>{"use strict";var e={};function t(){return`
IN vec3 vPosition;
IN vec2 attrTexCoord;
IN vec3 attrVertNormal;
IN float attrVertIndex;
IN vec3 attrTangent;
IN vec3 attrBiTangent;

UNI mat4 projMatrix;
UNI mat4 modelMatrix;
UNI mat4 viewMatrix;


OUT vec2 texCoord;
OUT vec3 norm;

{{MODULES_HEAD}}

${this.type==="point"?"OUT vec3 modelPos;":""}
void main() {
    texCoord=attrTexCoord;
    texCoord.y = 1. - texCoord.y;
    norm=attrVertNormal;
    vec4 pos = vec4(vPosition, 1.0);
    mat4 mMatrix=modelMatrix;
    vec3 tangent = attrTangent;
    vec3 bitangent = attrBiTangent;

    {{MODULE_VERTEX_POSITION}}

    mat4 mvMatrix=viewMatrix * mMatrix;
    vec4 vPos = projMatrix * mvMatrix * pos;
    ${this.type==="point"?"modelPos = (mMatrix * pos).xyz;":""}
    gl_Position = vPos;
}
`}function i(){return`
   {{MODULES_HEAD}}
   ${this.type==="point"?"IN vec3 modelPos;":""}
   ${this.type==="point"?"UNI vec3 inLightPosition;":""}
   ${this.type==="point"?"UNI vec2 inNearFar;":""}

    IN vec2 texCoord;

    void main() {
        {{MODULE_BEGIN_FRAG}}
        vec4 col = vec4(1.);


        outColor = vec4(1.);

        {{MODULE_COLOR}}

        ${this.type==="point"?"vec3 fromLightToFrag = (modelPos - inLightPosition);":""}


        ${this.type==="point"?"float depth = (length(fromLightToFrag) - inNearFar.x) / (inNearFar.y - inNearFar.x);":"float depth = gl_FragCoord.z;"}

        float dx = dFdx(depth); // for biasing depth-per-pixel
        float dy = dFdy(depth); // for biasing depth-per-pixel

        float clampedDerivative = clamp(dot(dx, dx) + dot(dy, dy), 0., 1.);
        float moment2 = dot(depth, depth) + 0.25 * clampedDerivative;

        outColor.x = depth;
        outColor.y = moment2;
        outColor.z = depth;
    }
`}function s(){if(this.type==="point")return"";return`

IN vec3 vPosition;
IN vec2 attrTexCoord;

OUT vec2 texCoord;
OUT vec2 coord0;
OUT vec2 coord1;
OUT vec2 coord2;
OUT vec2 coord3;
OUT vec2 coord4;
OUT vec2 coord5;
OUT vec2 coord6;

UNI mat4 projMatrix;
UNI mat4 mvMatrix;
UNI mat4 modelMatrix;

UNI vec2 inXY;

void main() {
    texCoord=attrTexCoord;

    vec4 pos = vec4(vPosition,  1.0);

    {{MODULE_VERTEX_POSITION}}

    coord3 = attrTexCoord;


    coord0 = attrTexCoord + (-3.0368997744118595 * inXY);
    coord0 = clamp(coord0, 0., 1.);
    coord1 = attrTexCoord + (-2.089778445362373 * inXY);
    coord1 = clamp(coord1, 0., 1.);
    coord2 = attrTexCoord + (-1.2004366090034069 * inXY);
    coord2 = clamp(coord2, 0., 1.);
    coord4 = attrTexCoord + (1.2004366090034069 * inXY);
    coord4 = clamp(coord4, 0., 1.);
    coord5 = attrTexCoord + (2.089778445362373* inXY);
    coord5 = clamp(coord5, 0., 1.);
    coord6 = attrTexCoord + (3.0368997744118595 * inXY);
    coord6 = clamp(coord6, 0., 1.);

    gl_Position = projMatrix * mvMatrix * pos;
}
    `}function n(){if(this.type==="point")return"";return`
UNI sampler2D tex;

IN vec2 coord0;
IN vec2 coord1;
IN vec2 coord2;
IN vec2 coord3;
IN vec2 coord4;
IN vec2 coord5;
IN vec2 coord6;

void main() {

    vec4 color = vec4(0.0);


    color.xyz += texture(tex, coord0).xyz * 0.06927096443792478;  // 1/64
    color.xyz += texture(tex, coord1).xyz * 0.1383328848652136;   // 6/64
    color.xyz += texture(tex, coord2).xyz * 0.21920904690397863;  // 15/64
    color.xyz += texture(tex, coord3).xyz * 0.14637421;           // 20/64
    color.xyz += texture(tex, coord4).xyz * 0.21920904690397863;  // 15/64
    color.xyz += texture(tex, coord5).xyz * 0.1383328848652136;   // 6/64
    color.xyz += texture(tex, coord6).xyz * 0.06927096443795711;  // 1/64

    color.a = 1.;

    outColor = color;
}
    `}function r(e,t){this.type=t.type||"point";this.color=t.color||[1,1,1];this.specular=t.specular||[0,0,0];this.position=t.position||null;this.intensity=t.intensity||1;this.radius=t.radius||1;this.falloff=t.falloff||1;this.spotExponent=t.spotExponent||1;this.cosConeAngleInner=t.cosConeAngleInner||0;this.cosConeAngle=t.cosConeAngle||0;this.conePointAt=t.conePointAt||[0,0,0];this.castShadow=t.castShadow||false;this.nearFar=t.nearFar||[0,0];this.normalOffset=t.normalOffset||0;this.shadowBias=t.shadowBias||0;this.shadowStrength=t.shadowStrength||0;this.lightMatrix=null;this.shadowMap=null;this.shadowMapDepth=null;this.shadowCubeMap=null;this._cgl=e;this.state={isUpdating:false};this._framebuffer=null;this._shaderShadowMap={shader:null,uniforms:{lightPosition:null,nearFar:null},matrices:{modelMatrix:mat4.create(),viewMatrix:mat4.create(),projMatrix:mat4.create(),biasMatrix:mat4.fromValues(.5,0,0,0,0,.5,0,0,0,0,.5,0,.5,.5,.5,1)},vectors:{lookAt:vec3.create(),camPos:vec3.create(),up:vec3.fromValues(0,1,0)}};this._effectBlur=null;this._shaderBlur={shader:null,uniforms:{XY:null}};this._cubemap=null;return this}r.prototype.getModifiableParameters=function(){return["color","specular","position","intensity","radius","falloff","spotExponent","cosConeAngleInner","cosConeAngle","conePointAt"]};r.prototype.createProjectionMatrix=r.prototype.updateProjectionMatrix=function(e,t,i,s){if(this.type==="spot"){mat4.perspective(this._shaderShadowMap.matrices.projMatrix,-2*CGL.DEG2RAD*s,1,t,i)}else if(this.type==="directional"){mat4.ortho(this._shaderShadowMap.matrices.projMatrix,-1*e,e,-1*e,e,t,i)}else if(this.type==="point"){mat4.perspective(this._shaderShadowMap.matrices.projMatrix,CGL.DEG2RAD*90,1,t,i);this.nearFar=[t,i]}};r.prototype.hasFramebuffer=function(){return!!this._framebuffer};r.prototype.hasShadowMapShader=function(){return!!this._shaderShadowMap.shader};r.prototype.hasBlurShader=function(){return!!this._shaderBlur.shader};r.prototype.hasBlurEffect=function(){return!!this._effectBlur};r.prototype.getShadowMap=function(){if(this.type==="point")return null;return this._framebuffer.getTextureColor()};r.prototype.getShadowMapDepth=function(){if(this.type==="point")return null;return this._framebuffer.getTextureDepth()};r.prototype.createFramebuffer=function(e,t,i){this.state.isUpdating=true;const s=e||512;const n=t||512;if(this.type==="point"){if(!this.hasCubemap()){this._cubemap=new CGL.CubemapFramebuffer(this._cgl,s,n,{name:"point light shadowmap"})}else{this._cubemap.setSize(s,n)}this._cubemap.setCamPos(this.position);this._cubemap.setMatrices(this._shaderShadowMap.matrices.modelMatrix,this._shaderShadowMap.matrices.viewMatrix,this._shaderShadowMap.matrices.projMatrix);this.state.isUpdating=false;return}if(this.hasFramebuffer())this._framebuffer.delete();if(i){if(i.filter){i.isFloatingPointTexture=i.filter!==CGL.Texture.FILTER_MIPMAP}}if(this._cgl.glVersion==1){this._framebuffer=new CGL.Framebuffer(this._cgl,s,n,{isFloatingPointTexture:true,filter:CGL.Texture.FILTER_LINEAR,wrap:CGL.Texture.WRAP_CLAMP_TO_EDGE,...i})}else{this._framebuffer=new CGL.Framebuffer2(this._cgl,s,n,{isFloatingPointTexture:true,filter:CGL.Texture.FILTER_LINEAR,wrap:CGL.Texture.WRAP_CLAMP_TO_EDGE,...i})}this.state.isUpdating=false};r.prototype.hasCubemap=function(){return!!this._cubemap};r.prototype.setFramebufferSize=function(e){if(this.hasFramebuffer())this._framebuffer.setSize(e,e)};r.prototype.createShadowMapShader=function(e,t){if(this.hasShadowMapShader())return;this.state.isUpdating=true;this._shaderShadowMap.shader=new CGL.Shader(this._cgl,"shadowPass"+this.type.charAt(0).toUpperCase()+this.type.slice(1));this._shaderShadowMap.shader.setModules(["MODULE_VERTEX_POSITION","MODULE_COLOR","MODULE_BEGIN_FRAG"]);const i=e||this.getShadowPassVertexShader();const s=t||this.getShadowPassFragmentShader();this._shaderShadowMap.shader.setSource(i,s);this._shaderShadowMap.shader.offScreenPass=true;if(this.type==="point"){this._shaderShadowMap.uniforms.lightPosition=new CGL.Uniform(this._shaderShadowMap.shader,"3f","inLightPosition",vec3.create());this._shaderShadowMap.uniforms.nearFar=new CGL.Uniform(this._shaderShadowMap.shader,"2f","inNearFar",vec2.create())}if(this._cgl.glVersion==1){this._cgl.enableExtension("OES_texture_float");this._cgl.enableExtension("OES_texture_float_linear");this._cgl.enableExtension("OES_texture_half_float");this._cgl.enableExtension("OES_texture_half_float_linear");this._shaderShadowMap.shader.enableExtension("GL_OES_standard_derivatives");this._shaderShadowMap.shader.enableExtension("GL_OES_texture_float");this._shaderShadowMap.shader.enableExtension("GL_OES_texture_float_linear");this._shaderShadowMap.shader.enableExtension("GL_OES_texture_half_float");this._shaderShadowMap.shader.enableExtension("GL_OES_texture_half_float_linear")}this.state.isUpdating=false};r.prototype.createBlurEffect=function(e){if(this.type==="point")return;this.state.isUpdating=true;if(this.hasBlurEffect())this._effectBlur.delete();this._effectBlur=new CGL.TextureEffect(this._cgl,{isFloatingPointTexture:true,filter:CGL.Texture.FILTER_LINEAR,wrap:CGL.Texture.WRAP_CLAMP_TO_EDGE,...e});this.state.isUpdating=false};r.prototype.createBlurShader=function(e,t){if(this.hasBlurShader()){return}if(this.type==="point")return;this.state.isUpdating=true;const i=e||this.getBlurPassVertexShader();const s=t||this.getBlurPassFragmentShader();this._shaderBlur.shader=new CGL.Shader(this._cgl,"blurPass"+this.type.charAt(0).toUpperCase()+this.type.slice(1));this._shaderBlur.shader.setModules(["MODULE_VERTEX_POSITION","MODULE_COLOR","MODULE_BEGIN_FRAG"]);this._shaderBlur.shader.setSource(i,s);this._shaderBlur.uniforms.XY=new CGL.Uniform(this._shaderBlur.shader,"2f","inXY",vec2.create());this._shaderBlur.shader.offScreenPass=true;this.state.isUpdating=false};r.prototype.renderPasses=function(e,t,i){if(this.state.isUpdating)return;if(this._cgl.frameStore.shadowPass)return;this._cgl.pushCullFace(true);this._cgl.pushCullFaceFacing(this._cgl.gl.FRONT);this._cgl.gl.enable(this._cgl.gl.POLYGON_OFFSET_FILL);this._cgl.gl.polygonOffset(e,e);this._cgl.frameStore.renderOffscreen=true;this._cgl.frameStore.shadowPass=true;this._cgl.pushBlend(false);this._cgl.gl.colorMask(true,true,this.type==="point",this.type==="point");this.renderShadowPass(i);this._cgl.gl.cullFace(this._cgl.gl.BACK);this._cgl.gl.disable(this._cgl.gl.CULL_FACE);this._cgl.gl.disable(this._cgl.gl.POLYGON_OFFSET_FILL);if(this.type!=="point")this.renderBlurPass(t);this._cgl.gl.colorMask(true,true,true,true);this._cgl.popBlend();this._cgl.popCullFaceFacing();this._cgl.popCullFace();this._cgl.frameStore.shadowPass=false;this._cgl.frameStore.renderOffscreen=false;if(this.type!=="point"){this.shadowMap=this._framebuffer.getTextureColor();this.shadowMapDepth=this._framebuffer.getTextureDepth()}else{this.shadowMap=null;this.shadowMapDepth=null}};r.prototype.renderShadowPass=function(t){if(this.state.isUpdating)return;if(this.type==="point"){this._shaderShadowMap.uniforms.nearFar.setValue(this.nearFar);this._shaderShadowMap.uniforms.lightPosition.setValue(this.position);this._cubemap.setCamPos(this.position);this._cubemap.setMatrices(this._shaderShadowMap.matrices.modelMatrix,this._shaderShadowMap.matrices.viewMatrix,this._shaderShadowMap.matrices.projMatrix);this._cgl.pushShader(this._shaderShadowMap.shader);this._cubemap.renderStart();for(let e=0;e<6;e+=1){this._cubemap.renderStartCubemapFace(e);if(t)t();this._cubemap.renderEndCubemapFace()}this._cubemap.renderEnd();this._cgl.popShader();this.shadowCubeMap=this._cubemap.getTextureColor();return}this._cgl.pushShader(this._shaderShadowMap.shader);this._cgl.pushModelMatrix();this._cgl.pushViewMatrix();this._cgl.pushPMatrix();this._framebuffer.renderStart(this._cgl);mat4.copy(this._cgl.mMatrix,this._shaderShadowMap.matrices.modelMatrix);vec3.set(this._shaderShadowMap.vectors.camPos,this.position[0],this.position[1],this.position[2]);if(this.type==="spot")vec3.set(this._shaderShadowMap.vectors.lookAt,this.conePointAt[0],this.conePointAt[1],this.conePointAt[2]);mat4.lookAt(this._cgl.vMatrix,this._shaderShadowMap.vectors.camPos,this._shaderShadowMap.vectors.lookAt,this._shaderShadowMap.vectors.up);mat4.copy(this._cgl.pMatrix,this._shaderShadowMap.matrices.projMatrix);if(!this.lightMatrix)this.lightMatrix=mat4.create();mat4.mul(this.lightMatrix,this._cgl.pMatrix,this._cgl.vMatrix);mat4.mul(this.lightMatrix,this._cgl.mMatrix,this.lightMatrix);mat4.mul(this.lightMatrix,this._shaderShadowMap.matrices.biasMatrix,this.lightMatrix);this._cgl.gl.clearColor(1,1,1,1);this._cgl.gl.clear(this._cgl.gl.DEPTH_BUFFER_BIT|this._cgl.gl.COLOR_BUFFER_BIT);if(t)t();this._framebuffer.renderEnd(this._cgl);this._cgl.popPMatrix();this._cgl.popModelMatrix();this._cgl.popViewMatrix();this._cgl.popShader()};r.prototype.renderBlurPass=function(e){if(this.state.isUpdating)return;this._cgl.pushShader(this._shaderBlur.shader);this._effectBlur.setSourceTexture(this._framebuffer.getTextureColor());this._effectBlur.startEffect();this._effectBlur.bind();this._cgl.setTexture(0,this._effectBlur.getCurrentSourceTexture().tex);this._shaderBlur.uniforms.XY.setValue([e,0]);this._effectBlur.finish();this._effectBlur.bind();this._cgl.setTexture(0,this._effectBlur.getCurrentSourceTexture().tex);this._shaderBlur.uniforms.XY.setValue([0,e]);this._effectBlur.finish();this._effectBlur.endEffect();this._cgl.popShader()};r.prototype.getShadowPassVertexShader=t;r.prototype.getShadowPassFragmentShader=i;r.prototype.getBlurPassVertexShader=s;r.prototype.getBlurPassFragmentShader=n;CGL.Light=r;((this.CGL=this.CGL||{}).COREMODULES=this.CGL.COREMODULES||{}).Light=e.Light})();(()=>{"use strict";var e={};class i{constructor(e){this.initiator=e}stack(e){console.info("["+this.initiator+"] ",e);console.log((new Error).stack)}groupCollapsed(e){if(CABLES.UI&&CABLES.UI.logFilter.filterLog({initiator:this.initiator,level:0},...arguments)||!CABLES.logSilent)console.log("["+this.initiator+"]",...arguments);console.groupCollapsed("["+this.initiator+"] "+e)}table(e){console.table(e)}groupEnd(){console.groupEnd()}error(){if(CABLES.UI&&CABLES.UI.logFilter.filterLog({initiator:this.initiator,level:2},...arguments)||!CABLES.logSilent)console.error("["+this.initiator+"]",...arguments)}errorGui(){if(CABLES.UI)CABLES.UI.logFilter.filterLog({initiator:this.initiator,level:2},...arguments)}warn(){if(CABLES.UI&&CABLES.UI.logFilter.filterLog({initiator:this.initiator,level:1},...arguments)||!CABLES.logSilent)console.warn("["+this.initiator+"]",...arguments)}verbose(){if(CABLES.UI&&CABLES.UI.logFilter.filterLog({initiator:this.initiator,level:0},...arguments)||!CABLES.logSilent)console.log("["+this.initiator+"]",...arguments)}info(){if(CABLES.UI&&CABLES.UI.logFilter.filterLog({initiator:this.initiator,level:0},...arguments)||!CABLES.logSilent)console.info("["+this.initiator+"]",...arguments)}log(){if(CABLES.UI&&CABLES.UI.logFilter.filterLog({initiator:this.initiator,level:0},...arguments)||!CABLES.logSilent)console.log("["+this.initiator+"]",...arguments)}logGui(){if(CABLES.UI)CABLES.UI.logFilter.filterLog({initiator:this.initiator,level:0},...arguments)}userInteraction(e){}}const s=8;const u=function(e,t={}){if(!e)throw new Error("no cgl");this._log=new i("cgl_texture");this._cgl=e;this.pixelFormat=t.pixelFormat||u.PFORMATSTR_RGBA8UB;this.tex=this._cgl.gl.createTexture();this.id=CABLES.uuid();this.width=0;this.height=0;this.loading=false;this.flip=true;this.flipped=false;this.shadowMap=false;this.deleted=false;this.image=null;this.anisotropic=0;this.filter=u.FILTER_NEAREST;this.wrap=u.WRAP_CLAMP_TO_EDGE;this.texTarget=this._cgl.gl.TEXTURE_2D;if(t&&t.type)this.texTarget=t.type;this.textureType=u.TYPE_DEFAULT;this.unpackAlpha=true;this._fromData=true;this.name="unknown";this._glDataType=-1;this._glInternalFormat=-1;this._glDataFormat=-1;if(t){this.name=t.name||this.name;if(t.isDepthTexture){this.textureType=u.TYPE_DEPTH}if(t.isFloatingPointTexture===true)this.textureType=u.TYPE_FLOAT;if("textureType"in t)this.textureType=t.textureType;if("filter"in t)this.filter=t.filter;if("wrap"in t)this.wrap=t.wrap;if("unpackAlpha"in t)this.unpackAlpha=t.unpackAlpha;if("flip"in t)this.flip=t.flip;if("shadowMap"in t)this.shadowMap=t.shadowMap;if("anisotropic"in t)this.anisotropic=t.anisotropic}else{t={}}if(!t.pixelFormat&&t.isFloatingPointTexture)this.pixelFormat=u.PFORMATSTR_RGBA32F;if(this.textureType==u.TYPE_DEPTH)this.pixelFormat=u.PFORMATSTR_DEPTH;if(!t.width)t.width=s;if(!t.height)t.height=s;this._cgl.profileData.profileTextureNew++;this.setFormat(u.setUpGlPixelFormat(this._cgl,this.pixelFormat));this._cgl.profileData.addHeavyEvent("texture created",this.name,t.width+"x"+t.height);this.setSize(t.width,t.height);this.getInfoOneLine()};u.prototype.isFloatingPoint=function(){return u.isPixelFormatFloat(this.pixelFormat)};u.prototype.compareSettings=function(e){if(!e)return false;return e.width==this.width&&e.height==this.height&&e.filter==this.filter&&e.wrap==this.wrap&&e.textureType==this.textureType&&e.unpackAlpha==this.unpackAlpha&&e.anisotropic==this.anisotropic&&e.shadowMap==this.shadowMap&&e.texTarget==this.texTarget&&e.flip==this.flip};u.prototype.clone=function(){const e=new u(this._cgl,{name:this.name,filter:this.filter,anisotropic:this.anisotropic,wrap:this.wrap,textureType:this.textureType,pixelFormat:this.pixelFormat,unpackAlpha:this.unpackAlpha,flip:this.flip,width:this.width,height:this.height});this._cgl.profileData.addHeavyEvent("texture created",this.name,this.width+"x"+this.height);if(!this.compareSettings(e)){this._log.error("Cloned texture settings do not compare!");this._log.error(this);this._log.error(e)}return e};u.prototype.setFormat=function(e){this.pixelFormat=e.pixelFormat;this._glDataFormat=e.glDataFormat;this._glInternalFormat=e.glInternalFormat;this._glDataType=e.glDataType};u.setUpGlPixelFormat=function(e,t){const i={};if(!t){e._log.error("no pixelformatstr!");e._log.log((new Error).stack);t=u.PFORMATSTR_RGBA8UB}i.pixelFormatBase=t;i.pixelFormat=t;i.glDataType=e.gl.UNSIGNED_BYTE;i.glInternalFormat=e.gl.RGBA8;i.glDataFormat=e.gl.RGBA;let s=e.gl.FLOAT;if(e.glUseHalfFloatTex){if(t==u.PFORMATSTR_RGBA32F)t=u.PFORMATSTR_RGBA16F;if(t==u.PFORMATSTR_RG32F)t=u.PFORMATSTR_RG16F;if(t==u.PFORMATSTR_R32F)t=u.PFORMATSTR_R16F}if(t.contains("16bit")){if(e.glVersion==2){const n=e.enableExtension("EXT_color_buffer_half_float");if(!n){console.warn("no 16bit extension, fallback to 32bit",t);if(t==u.PFORMATSTR_RGBA16F)t=u.PFORMATSTR_RGBA32F;if(t==u.PFORMATSTR_RGB16F)t=u.PFORMATSTR_RGB32F;if(t==u.PFORMATSTR_RG16F)t=u.PFORMATSTR_RG32F;if(t==u.PFORMATSTR_R16F)t=u.PFORMATSTR_R32F}else{s=e.gl.HALF_FLOAT}}}if(e.glVersion==1){i.glInternalFormat=e.gl.RGBA;if(t==u.PFORMATSTR_RGBA16F||t==u.PFORMATSTR_RG16F||t==u.PFORMATSTR_R16F){const r=e.enableExtension("OES_texture_half_float");if(!r)throw new Error("no half float texture extension");s=r.HALF_FLOAT_OES}}if(t==u.PFORMATSTR_RGBA8UB){}else if(t==u.PFORMATSTR_RGB565){i.glInternalFormat=e.gl.RGB565;i.glDataFormat=e.gl.RGB}else if(t==u.PFORMATSTR_R8UB){i.glInternalFormat=e.gl.R8;i.glDataFormat=e.gl.RED}else if(t==u.PFORMATSTR_RG8UB){i.glInternalFormat=e.gl.RG8;i.glDataFormat=e.gl.RG}else if(t==u.PFORMATSTR_RGB8UB){i.glInternalFormat=e.gl.RGB8;i.glDataFormat=e.gl.RGB}else if(t==u.PFORMATSTR_SRGBA8){i.glInternalFormat=e.gl.SRGB8_ALPHA8}else if(t==u.PFORMATSTR_R32F){i.glInternalFormat=e.gl.R32F;i.glDataFormat=e.gl.RED;i.glDataType=s}else if(t==u.PFORMATSTR_R16F){i.glInternalFormat=e.gl.R16F;i.glDataType=s;i.glDataFormat=e.gl.RED}else if(t==u.PFORMATSTR_RG16F){i.glInternalFormat=e.gl.RG16F;i.glDataType=s;i.glDataFormat=e.gl.RG}else if(t==u.PFORMATSTR_RGBA16F){if(e.glVersion==1)i.glInternalFormat=e.gl.RGBA;else i.glInternalFormat=e.gl.RGBA16F;i.glDataType=s}else if(t==u.PFORMATSTR_R11FG11FB10F){i.glInternalFormat=e.gl.R11F_G11F_B10F;i.glDataType=s;i.glDataFormat=e.gl.RGB}else if(t==u.PFORMATSTR_RGBA32F){if(e.glVersion==1)i.glInternalFormat=e.gl.RGBA;else i.glInternalFormat=e.gl.RGBA32F;i.glDataType=s}else if(t==u.PFORMATSTR_DEPTH){if(e.glVersion==1){i.glInternalFormat=e.gl.DEPTH_COMPONENT;i.glDataType=e.gl.UNSIGNED_SHORT;i.glDataFormat=e.gl.DEPTH_COMPONENT}else{i.glInternalFormat=e.gl.DEPTH_COMPONENT32F;i.glDataType=e.gl.FLOAT;i.glDataFormat=e.gl.DEPTH_COMPONENT}}else{console.log("unknown pixelformat ",t)}if(t.contains("32bit")||t==u.PFORMATSTR_R11FG11FB10F){if(e.glVersion==2)e.enableExtension("EXT_color_buffer_float");if(e.glVersion==2)e.enableExtension("EXT_float_blend");e.enableExtension("OES_texture_float_linear")}i.numColorChannels=1;if(t.startsWith("R"))i.numColorChannels=1;if(t.startsWith("RG"))i.numColorChannels=2;if(t.startsWith("RGB"))i.numColorChannels=3;if(t.startsWith("RGBA"))i.numColorChannels=4;if(!i.glDataType||!i.glInternalFormat||!i.glDataFormat)console.log("pixelformat wrong ?!",t,i.glDataType,i.glInternalFormat,i.glDataFormat,this);return i};u.prototype.setSize=function(e,t){if(this._cgl.aborted)return;if(e!=e||e<=0||!e)e=s;if(t!=t||t<=0||!t)t=s;if(e>this._cgl.maxTexSize||t>this._cgl.maxTexSize)this._log.error("texture size too big! "+e+"x"+t+" / max: "+this._cgl.maxTexSize);e=Math.min(e,this._cgl.maxTexSize);t=Math.min(t,this._cgl.maxTexSize);e=Math.floor(e);t=Math.floor(t);if(this.width==e&&this.height==t)return;e=this._cgl.checkTextureSize(e);t=this._cgl.checkTextureSize(t);this.width=e;this.height=t;this.deleted=false;this.setFormat(u.setUpGlPixelFormat(this._cgl,this.pixelFormat));this.shortInfoString=this.getInfoOneLine();this._cgl.gl.bindTexture(this.texTarget,this.tex);this._cgl.profileData.profileTextureResize++;const i=null;this._cgl.gl.texImage2D(this.texTarget,0,this._glInternalFormat,e,t,0,this._glDataFormat,this._glDataType,i);this._setFilter();this.updateMipMap();this._cgl.gl.bindTexture(this.texTarget,null)};u.prototype.initFromData=function(e,t,i,s,n){this.filter=s;this.wrap=n;if(s==undefined)this.filter=u.FILTER_LINEAR;if(n==undefined)this.wrap=u.WRAP_CLAMP_TO_EDGE;this.width=t;this.height=i;this._fromData=true;this.deleted=false;if(this.height>this._cgl.maxTexSize||this.width>this._cgl.maxTexSize){const r=CGL.Texture.getTempTexture(this._cgl);this.width=r.width;this.height=r.height;this.tex=r.tex;this._log.error("[cgl_texture] texture size to big!!!",this.width,this.height,this._cgl.maxTexSize);return}if(this.flip)this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_FLIP_Y_WEBGL,this.flip);this._cgl.gl.bindTexture(this.texTarget,this.tex);this.setFormat(u.setUpGlPixelFormat(this._cgl,this.pixelFormat));this._cgl.gl.texImage2D(this.texTarget,0,this._glInternalFormat,t,i,0,this._glDataFormat,this._glDataType,e);this._setFilter();this.updateMipMap();if(this.flip)this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_FLIP_Y_WEBGL,false);this._cgl.gl.bindTexture(this.texTarget,null)};u.prototype.updateMipMap=function(){if((this._cgl.glVersion==2||this.isPowerOfTwo())&&this.filter==u.FILTER_MIPMAP){this._cgl.gl.generateMipmap(this.texTarget);this._cgl.profileData.profileGenMipMap++}};u.prototype.initTexture=function(e,t){this._cgl.printError("before initTexture");this._cgl.checkFrameStarted("texture inittexture");this._fromData=false;this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.unpackAlpha);if(e.width||e.videoWidth)this.width=e.videoWidth||e.width;if(e.height||e.videoHeight)this.height=e.videoHeight||e.height;if(t!==undefined)this.filter=t;if(e.height>this._cgl.maxTexSize||e.width>this._cgl.maxTexSize){const i=CGL.Texture.getTempTexture(this._cgl);this.width=i.width;this.height=i.height;this.tex=i.tex;this._log.error("[cgl_texture] texture size to big!!!",e.width,e.height,this._cgl.maxTexSize);return}this._cgl.gl.bindTexture(this.texTarget,this.tex);this.deleted=false;this.flipped=!this.flip;if(this.flipped)this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_FLIP_Y_WEBGL,this.flipped);this.setFormat(u.setUpGlPixelFormat(this._cgl,this.pixelFormat));this._cgl.gl.texImage2D(this.texTarget,0,this._glInternalFormat,this._glDataFormat,this._glDataType,e);this._setFilter();this.updateMipMap();this._cgl.gl.bindTexture(this.texTarget,null);this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,false);if(this.flipped)this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_FLIP_Y_WEBGL,false);this.getInfoOneLine();this._cgl.printError("initTexture")};u.prototype.dispose=u.prototype.delete=function(){if(this.loading){return}this.deleted=true;this.width=0;this.height=0;this._cgl.profileData.profileTextureDelete++;this._cgl.gl.deleteTexture(this.tex);this.image=null;this.tex=null};u.prototype.isPowerOfTwo=function(){return u.isPowerOfTwo(this.width)&&u.isPowerOfTwo(this.height)};u.prototype.printInfo=function(){console.log(this.getInfo())};u.prototype.getInfoReadable=function(){const e=this.getInfo();let t="";e.name=e.name.substr(0,e.name.indexOf("?rnd="));for(const i in e){t+="* "+i+":  **"+e[i]+"**\n"}return t};u.prototype.getInfoOneLine=function(){let e=""+this.width+"x"+this.height;e+=" ";e+=this.pixelFormat;if(this.filter===CGL.Texture.FILTER_NEAREST)e+=" nearest";if(this.filter===CGL.Texture.FILTER_LINEAR)e+=" linear";if(this.filter===CGL.Texture.FILTER_MIPMAP)e+=" mipmap";if(this.wrap===CGL.Texture.WRAP_CLAMP_TO_EDGE)e+=" clamp";if(this.wrap===CGL.Texture.WRAP_REPEAT)e+=" repeat";if(this.wrap===CGL.Texture.WRAP_MIRRORED_REPEAT)e+=" repeatmir";this.shortInfoString=e;return e};u.prototype.getInfoOneLineShort=function(){let e=""+this.width+"x"+this.height;e+=" ";e+=this.pixelFormat;this.shortInfoString=e;return e};u.prototype.getInfo=function(){return u.getTexInfo(this)};u.prototype._setFilter=function(){this._cgl.printError("before _setFilter");if(!this._fromData){this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.unpackAlpha)}if(this.shadowMap){this._cgl.gl.texParameteri(this._cgl.gl.TEXTURE_2D,this._cgl.gl.TEXTURE_COMPARE_MODE,this._cgl.gl.COMPARE_REF_TO_TEXTURE);this._cgl.gl.texParameteri(this._cgl.gl.TEXTURE_2D,this._cgl.gl.TEXTURE_COMPARE_FUNC,this._cgl.gl.LEQUAL)}if(this.textureType==u.TYPE_FLOAT&&this.filter==u.FILTER_MIPMAP){this.filter=u.FILTER_LINEAR;this._log.stack("texture: HDR and mipmap filtering at the same time is not possible")}if(this._cgl.glVersion==1&&!this.isPowerOfTwo()){this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_MAG_FILTER,this._cgl.gl.NEAREST);this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_MIN_FILTER,this._cgl.gl.NEAREST);this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_WRAP_S,this._cgl.gl.CLAMP_TO_EDGE);this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_WRAP_T,this._cgl.gl.CLAMP_TO_EDGE);this.filter=u.FILTER_NEAREST;this.wrap=u.WRAP_CLAMP_TO_EDGE}else{if(this.wrap==u.WRAP_CLAMP_TO_EDGE){this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_WRAP_S,this._cgl.gl.CLAMP_TO_EDGE);this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_WRAP_T,this._cgl.gl.CLAMP_TO_EDGE)}else if(this.wrap==u.WRAP_REPEAT){this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_WRAP_S,this._cgl.gl.REPEAT);this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_WRAP_T,this._cgl.gl.REPEAT)}else if(this.wrap==u.WRAP_MIRRORED_REPEAT){this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_WRAP_S,this._cgl.gl.MIRRORED_REPEAT);this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_WRAP_T,this._cgl.gl.MIRRORED_REPEAT)}if(this.filter==u.FILTER_NEAREST){this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_MAG_FILTER,this._cgl.gl.NEAREST);this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_MIN_FILTER,this._cgl.gl.NEAREST)}else if(this.filter==u.FILTER_LINEAR){this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_MIN_FILTER,this._cgl.gl.LINEAR);this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_MAG_FILTER,this._cgl.gl.LINEAR)}else if(this.filter==u.FILTER_MIPMAP){this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_MAG_FILTER,this._cgl.gl.LINEAR);this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_MIN_FILTER,this._cgl.gl.LINEAR_MIPMAP_LINEAR)}else{this._log.log("unknown texture filter!",this.filter);throw new Error("unknown texture filter!"+this.filter)}if(this.anisotropic){const e=this._cgl.enableExtension("EXT_texture_filter_anisotropic");if(this._cgl.maxAnisotropic){const t=Math.min(this._cgl.maxAnisotropic,this.anisotropic);this._cgl.gl.texParameterf(this._cgl.gl.TEXTURE_2D,e.TEXTURE_MAX_ANISOTROPY_EXT,t)}}}this.getInfoOneLine();this._cgl.printError("_setFilter")};u.load=function(i,s,n,e){if(!s)return n({error:true});let r=null;if(!i.patch.loading.existByName(s))r=i.patch.loading.start("cgl.texture",s);const a=new u(i);a.name=s;a.image=new Image;a.image.crossOrigin="anonymous";a.loading=true;if(e&&e.hasOwnProperty("filter"))a.filter=e.filter;if(e&&e.hasOwnProperty("flip"))a.flip=e.flip;if(e&&e.hasOwnProperty("wrap"))a.wrap=e.wrap;if(e&&e.hasOwnProperty("anisotropic"))a.anisotropic=e.anisotropic;if(e&&e.hasOwnProperty("unpackAlpha"))a.unpackAlpha=e.unpackAlpha;if(e&&e.hasOwnProperty("pixelFormat"))a.pixelFormat=e.pixelFormat;a.image.onabort=a.image.onerror=e=>{console.warn("[cgl.texture.load] error loading texture",s,e);a.loading=false;if(r)i.patch.loading.finished(r);const t={error:true};if(n)n(t,a)};a.image.onload=function(e){i.addNextFrameOnceCallback(()=>{a.initTexture(a.image);if(r)i.patch.loading.finished(r);a.loading=false;if(n)n(null,a)})};a.image.src=s;return a};u.getTempTexture=function(e){if(!e)console.error("[getTempTexture] no cgl!");if(!e.tempTexture)e.tempTexture=u.getTemporaryTexture(e,256,u.FILTER_LINEAR,u.REPEAT);return e.tempTexture};u.getErrorTexture=function(e){if(!e)console.error("[getTempTexture] no cgl!");if(!e.errorTexture)e.errorTexture=u.getTemporaryTexture(e,256,u.FILTER_LINEAR,u.REPEAT,1,.2,.2);return e.errorTexture};u.getEmptyTexture=function(e,t){if(t)return u.getEmptyTextureFloat(e);if(!e)console.error("[getEmptyTexture] no cgl!");if(e.tempTextureEmpty)return e.tempTextureEmpty;e.tempTextureEmpty=new u(e,{name:"emptyTexture"});const i=new Uint8Array(8*8*4).fill(0);for(let e=0;e<8*8*4;e+=4)i[e+3]=0;e.tempTextureEmpty.initFromData(i,8,8,u.FILTER_NEAREST,u.WRAP_REPEAT);return e.tempTextureEmpty};u.getEmptyTextureFloat=function(e){if(!e)console.error("[getEmptyTextureFloat] no cgl!");if(e.tempTextureEmptyFloat)return e.tempTextureEmptyFloat;e.tempTextureEmptyFloat=new u(e,{name:"emptyTexture",isFloatingPointTexture:true});const t=new Float32Array(8*8*4).fill(1);for(let e=0;e<8*8*4;e+=4)t[e+3]=0;e.tempTextureEmptyFloat.initFromData(t,8,8,u.FILTER_NEAREST,u.WRAP_REPEAT);return e.tempTextureEmptyFloat};u.getRandomTexture=function(e){if(!e)console.error("[getRandomTexture] no cgl!");if(e.randomTexture)return e.randomTexture;const t=256;const i=new Uint8Array(t*t*4);for(let e=0;e<t*t;e++){i[e*4+0]=Math.random()*255;i[e*4+1]=Math.random()*255;i[e*4+2]=Math.random()*255;i[e*4+3]=255}e.randomTexture=new u(e);e.randomTexture.initFromData(i,t,t,u.FILTER_NEAREST,u.WRAP_REPEAT);return e.randomTexture};u.getRandomFloatTexture=function(e){if(!e)console.error("[getRandomTexture] no cgl!");if(e.getRandomFloatTexture)return e.getRandomFloatTexture;const t=256;const i=new Float32Array(t*t*4);for(let e=0;e<t*t;e++){i[e*4+0]=(Math.random()-.5)*2;i[e*4+1]=(Math.random()-.5)*2;i[e*4+2]=(Math.random()-.5)*2;i[e*4+3]=1}e.getRandomFloatTexture=new u(e,{isFloatingPointTexture:true});e.getRandomFloatTexture.initFromData(i,t,t,u.FILTER_NEAREST,u.WRAP_REPEAT);return e.getRandomFloatTexture};u.getBlackTexture=function(e){if(!e)this._log.error("[getBlackTexture] no cgl!");if(e.blackTexture)return e.blackTexture;const t=8;const i=new Uint8Array(t*t*4);for(let e=0;e<t*t;e++){i[e*4+0]=i[e*4+1]=i[e*4+2]=0;i[e*4+3]=255}e.blackTexture=new u(e);e.blackTexture.initFromData(i,t,t,u.FILTER_NEAREST,u.WRAP_REPEAT);return e.blackTexture};u.getEmptyCubemapTexture=function(t){const i=[t.gl.TEXTURE_CUBE_MAP_POSITIVE_X,t.gl.TEXTURE_CUBE_MAP_NEGATIVE_X,t.gl.TEXTURE_CUBE_MAP_POSITIVE_Y,t.gl.TEXTURE_CUBE_MAP_NEGATIVE_Y,t.gl.TEXTURE_CUBE_MAP_POSITIVE_Z,t.gl.TEXTURE_CUBE_MAP_NEGATIVE_Z];const e=t.gl.createTexture();const s=t.gl.TEXTURE_CUBE_MAP;const n=u.FILTER_NEAREST;const r=u.WRAP_CLAMP_TO_EDGE;const a=8;const o=8;t.profileData.profileTextureNew++;t.gl.bindTexture(s,e);t.profileData.profileTextureResize++;for(let e=0;e<6;e+=1){const l=new Uint8Array(8*8*4);t.gl.texImage2D(i[e],0,t.gl.RGBA,8,8,0,t.gl.RGBA,t.gl.UNSIGNED_BYTE,l);t.gl.texParameteri(s,t.gl.TEXTURE_MAG_FILTER,t.gl.NEAREST);t.gl.texParameteri(s,t.gl.TEXTURE_MIN_FILTER,t.gl.NEAREST);t.gl.texParameteri(s,t.gl.TEXTURE_WRAP_S,t.gl.CLAMP_TO_EDGE);t.gl.texParameteri(s,t.gl.TEXTURE_WRAP_T,t.gl.CLAMP_TO_EDGE)}t.gl.bindTexture(s,null);return{id:CABLES.uuid(),tex:e,cubemap:e,width:a,height:o,filter:n,wrap:r,unpackAlpha:true,flip:true,_fromData:true,name:"emptyCubemapTexture",anisotropic:0}};u.getTempGradientTexture=function(e){if(!e)console.error("[getTempGradientTexture] no cgl!");if(e.tempTextureGradient)return e.tempTextureGradient;const t=new u(e);const i=256;const s=new Uint8Array(i*i*4);for(let t=0;t<i;t++){for(let e=0;e<i;e++){s[(e+t*i)*4+0]=s[(e+t*i)*4+1]=s[(e+t*i)*4+2]=255-t;s[(e+t*i)*4+3]=255}}t.initFromData(s,i,i,u.FILTER_NEAREST,u.WRAP_REPEAT);e.tempTextureGradient=t;return t};u.getTemporaryTexture=function(e,i,t,s,n,r,a){if(n===undefined)n=1;if(r===undefined)r=1;if(a===undefined)a=1;const o=new u(e);const l=[];for(let t=0;t<i;t++){for(let e=0;e<i;e++){if((e+t)%64<32){l.push((200+t/i*25+e/i*25)*n);l.push((200+t/i*25+e/i*25)*r);l.push((200+t/i*25+e/i*25)*a)}else{l.push((40+t/i*25+e/i*25)*n);l.push((40+t/i*25+e/i*25)*r);l.push((40+t/i*25+e/i*25)*a)}l.push(255)}}const h=new Uint8Array(l);o.initFromData(h,i,i,t,s);return o};u.createFromImage=function(e,t,i){i=i||{};const s=new u(e,i);s.flip=false;s.image=t;s.width=t.videoWidth||t.width||8;s.height=t.videoHeight||t.height||8;if(i.hasOwnProperty("wrap"))s.wrap=i.wrap;s.initTexture(t,i.filter);return s};u.fromImage=function(e,t,i,s){console.error("deprecated texture from image...");const n=new u(e);n.flip=false;if(i)n.filter=i;if(s)n.wrap=s;n.image=t;n.initTexture(t);return n};u.isPowerOfTwo=function(e){return e==1||e==2||e==4||e==8||e==16||e==32||e==64||e==128||e==256||e==512||e==1024||e==2048||e==4096||e==8192||e==16384};u.getTexInfo=function(e){const t={};t.name=e.name;t["power of two"]=e.isPowerOfTwo();t.size=e.width+" x "+e.height;let i=e.texTarget;if(e.texTarget==e._cgl.gl.TEXTURE_2D)i="TEXTURE_2D";t.target=i;t.unpackAlpha=e.unpackAlpha;if(e.cubemap)t.cubemap=true;if(e.textureType==u.TYPE_FLOAT)t.textureType="TYPE_FLOAT";if(e.textureType==u.TYPE_HALF_FLOAT)t.textureType="TYPE_HALF_FLOAT";else if(e.textureType==u.TYPE_DEPTH)t.textureType="TYPE_DEPTH";else if(e.textureType==u.TYPE_DEFAULT)t.textureType="TYPE_DEFAULT";else t.textureType="UNKNOWN "+this.textureType;if(e.wrap==u.WRAP_CLAMP_TO_EDGE)t.wrap="CLAMP_TO_EDGE";else if(e.wrap==u.WRAP_REPEAT)t.wrap="WRAP_REPEAT";else if(e.wrap==u.WRAP_MIRRORED_REPEAT)t.wrap="WRAP_MIRRORED_REPEAT";else t.wrap="UNKNOWN";if(e.filter==u.FILTER_NEAREST)t.filter="FILTER_NEAREST";else if(e.filter==u.FILTER_LINEAR)t.filter="FILTER_LINEAR";else if(e.filter==u.FILTER_MIPMAP)t.filter="FILTER_MIPMAP";else t.filter="UNKNOWN";t.pixelFormat=e.pixelFormat||"unknown";return t};u.FILTER_NEAREST=0;u.FILTER_LINEAR=1;u.FILTER_MIPMAP=2;u.WRAP_REPEAT=0;u.WRAP_MIRRORED_REPEAT=1;u.WRAP_CLAMP_TO_EDGE=2;u.TYPE_DEFAULT=0;u.TYPE_DEPTH=1;u.TYPE_FLOAT=2;u.PFORMATSTR_RGB565="RGB 5/6/5bit ubyte";u.PFORMATSTR_R8UB="R 8bit ubyte";u.PFORMATSTR_RG8UB="RG 8bit ubyte";u.PFORMATSTR_RGB8UB="RGB 8bit ubyte";u.PFORMATSTR_RGBA8UB="RGBA 8bit ubyte";u.PFORMATSTR_SRGBA8="SRGBA 8bit ubyte";u.PFORMATSTR_R11FG11FB10F="RGB 11/11/10bit float";u.PFORMATSTR_R16F="R 16bit float";u.PFORMATSTR_RG16F="RG 16bit float";u.PFORMATSTR_RGB16F="RGB 16bit float";u.PFORMATSTR_RGBA16F="RGBA 16bit float";u.PFORMATSTR_R32F="R 32bit float";u.PFORMATSTR_RG32F="RG 32bit float";u.PFORMATSTR_RGB32F="RGB 32bit float";u.PFORMATSTR_RGBA32F="RGBA 32bit float";u.PFORMATSTR_DEPTH="DEPTH";u.PIXELFORMATS=[u.PFORMATSTR_RGB565,u.PFORMATSTR_R8UB,u.PFORMATSTR_RG8UB,u.PFORMATSTR_RGB8UB,u.PFORMATSTR_RGBA8UB,u.PFORMATSTR_SRGBA8,u.PFORMATSTR_R11FG11FB10F,u.PFORMATSTR_R16F,u.PFORMATSTR_RG16F,u.PFORMATSTR_RGBA16F,u.PFORMATSTR_R32F,u.PFORMATSTR_RGBA32F];u.isPixelFormatFloat=e=>{return(e||"").contains("float")};u.isPixelFormatHalfFloat=e=>{return(e||"").contains("float")&&(e||"").contains("16bit")};const n=8;class r{constructor(e,t){this.id=CABLES.uuid();this.name=t.name||"unknown cubemap texture";this._cgl=e;this.textureType=u.TYPE_DEFAULT;this._options=t;this._cubemapFaces=[this._cgl.gl.TEXTURE_CUBE_MAP_POSITIVE_X,this._cgl.gl.TEXTURE_CUBE_MAP_NEGATIVE_X,this._cgl.gl.TEXTURE_CUBE_MAP_POSITIVE_Y,this._cgl.gl.TEXTURE_CUBE_MAP_NEGATIVE_Y,this._cgl.gl.TEXTURE_CUBE_MAP_POSITIVE_Z,this._cgl.gl.TEXTURE_CUBE_MAP_NEGATIVE_Z];this.cubemap=this.tex=this._cgl.gl.createTexture();this.texTarget=this._cgl.gl.TEXTURE_CUBE_MAP;this.width=n;this.height=n;this.filter=t.filter||CGL.Texture.FILTER_NEAREST;this.wrap=t.wrap||CGL.Texture.WRAP_CLAMP_TO_EDGE;this.unpackAlpha=t.unpackAlpha||true;this.flip=t.flip||true;if(!t.hasOwnProperty("pixelFormat")||!t.pixelFormat){if(t.isFloatingPointTexture)t.pixelFormat=u.PFORMATSTR_RGBA32F;else t.pixelFormat=u.PFORMATSTR_RGBA8UB}this.pixelFormat=t.pixelFormat;this._cgl.profileData.profileTextureNew++;this.setSize(t.width,t.height)}getInfo(){return{pixelFormat:this.pixelFormat}}setSize(e,t){this.delete();this.cubemap=this.tex=this._cgl.gl.createTexture();this._cgl.checkFrameStarted("cubemap corelib setsize");if(e!=e||e<=0||!e)e=n;if(t!=t||t<=0||!t)t=n;if(e>this._cgl.maxTexSize||t>this._cgl.maxTexSize)console.error("texture size too big! "+e+"x"+t+" / max: "+this._cgl.maxTexSize);e=Math.min(e,this._cgl.maxTexSize);t=Math.min(t,this._cgl.maxTexSize);e=Math.floor(e);t=Math.floor(t);this.width=e;this.height=t;this._cgl.gl.bindTexture(this.texTarget,this.tex);this._cgl.profileData.profileTextureResize++;const i=u.setUpGlPixelFormat(this._cgl,this._options.pixelFormat);this.pixelFormat=i.pixelFormat;if(CGL.Texture.isPixelFormatHalfFloat(i.pixelFormat)){const s=this._cgl.enableExtension("EXT_color_buffer_half_float");if(!this._cgl.enableExtension("OES_texture_float_linear")){this.filter=u.FILTER_NEAREST}}else if(CGL.Texture.isPixelFormatFloat(i.pixelFormat)){if(!this._cgl.enableExtension("OES_texture_float_linear")){console.log("no linear pixelformat,using nearest");this.filter=u.FILTER_NEAREST}}for(let e=0;e<6;e++){this._cgl.gl.texImage2D(this._cubemapFaces[e],0,i.glInternalFormat,this.width,this.height,0,i.glDataFormat,i.glDataType,null)}this._setFilter();this.updateMipMap();this._cgl.gl.bindTexture(this.texTarget,null)}_setFilter(){this._cgl.checkFrameStarted("cubemap corelib");this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.unpackAlpha);if(CGL.Texture.isPixelFormatFloat(this.pixelFormat)&&this.filter==CGL.Texture.FILTER_MIPMAP){console.log("texture: HDR and mipmap filtering at the same time is not possible");this.filter=CGL.Texture.FILTER_LINEAR}if(this._cgl.glVersion==1&&!u.isPowerOfTwo()){this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_MAG_FILTER,this._cgl.gl.NEAREST);this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_MIN_FILTER,this._cgl.gl.NEAREST);this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_WRAP_S,this._cgl.gl.CLAMP_TO_EDGE);this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_WRAP_T,this._cgl.gl.CLAMP_TO_EDGE);this.filter=CGL.Texture.FILTER_NEAREST;this.wrap=CGL.Texture.WRAP_CLAMP_TO_EDGE}else{if(this.wrap==CGL.Texture.WRAP_CLAMP_TO_EDGE){this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_WRAP_S,this._cgl.gl.CLAMP_TO_EDGE);this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_WRAP_T,this._cgl.gl.CLAMP_TO_EDGE)}else if(this.wrap==CGL.Texture.WRAP_REPEAT){this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_WRAP_S,this._cgl.gl.REPEAT);this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_WRAP_T,this._cgl.gl.REPEAT)}else if(this.wrap==CGL.Texture.WRAP_MIRRORED_REPEAT){this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_WRAP_S,this._cgl.gl.MIRRORED_REPEAT);this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_WRAP_T,this._cgl.gl.MIRRORED_REPEAT)}else{throw new Error("[CubemapTexture] unknown texture filter!"+this.filter)}if(this.filter==CGL.Texture.FILTER_NEAREST){this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_MAG_FILTER,this._cgl.gl.NEAREST);this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_MIN_FILTER,this._cgl.gl.NEAREST)}else if(this.filter==CGL.Texture.FILTER_LINEAR){this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_MIN_FILTER,this._cgl.gl.LINEAR);this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_MAG_FILTER,this._cgl.gl.LINEAR)}else if(this.filter==CGL.Texture.FILTER_MIPMAP){this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_MAG_FILTER,this._cgl.gl.LINEAR);this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_MIN_FILTER,this._cgl.gl.LINEAR_MIPMAP_LINEAR)}else{throw new Error("[CubemapTexture] unknown texture filter!"+this.filter)}}}updateMipMap(){if(this.filter==CGL.Texture.FILTER_MIPMAP){this._cgl.gl.bindTexture(this.texTarget,this.tex);this._cgl.gl.generateMipmap(this.texTarget);this._cgl.profileData.profileGenMipMap++}}delete(){this._cgl.gl.deleteTexture(this.tex)}}class t{constructor(e,t,i,s){this._cgl=e;this.width=t||8;this.height=i||8;this._cubemapProperties=[{face:this._cgl.gl.TEXTURE_CUBE_MAP_POSITIVE_X,lookAt:vec3.fromValues(1,0,0),up:vec3.fromValues(0,-1,0)},{face:this._cgl.gl.TEXTURE_CUBE_MAP_NEGATIVE_X,lookAt:vec3.fromValues(-1,0,0),up:vec3.fromValues(0,-1,0)},{face:this._cgl.gl.TEXTURE_CUBE_MAP_POSITIVE_Y,lookAt:vec3.fromValues(0,1,0),up:vec3.fromValues(0,0,1)},{face:this._cgl.gl.TEXTURE_CUBE_MAP_NEGATIVE_Y,lookAt:vec3.fromValues(0,-1,0),up:vec3.fromValues(0,0,-1)},{face:this._cgl.gl.TEXTURE_CUBE_MAP_POSITIVE_Z,lookAt:vec3.fromValues(0,0,1),up:vec3.fromValues(0,-1,0)},{face:this._cgl.gl.TEXTURE_CUBE_MAP_NEGATIVE_Z,lookAt:vec3.fromValues(0,0,-1),up:vec3.fromValues(0,-1,0)}];this._lookAtTemp=vec3.fromValues(0,0,0);this.camPos=vec3.fromValues(0,0,0);this._modelMatrix=mat4.create();this._viewMatrix=mat4.create();this._projectionMatrix=mat4.perspective(mat4.create(),CGL.DEG2RAD*90,1,.1,1e3);this._depthRenderbuffer=null;this._framebuffer=null;this._depthbuffer=null;this._textureDepth=null;this._options=s||{};this.name=this._options.name||"unknown cubemapframebuffer";if(!this._options.hasOwnProperty("numRenderBuffers"))this._options.numRenderBuffers=1;if(!this._options.hasOwnProperty("depth"))this._options.depth=true;if(!this._options.hasOwnProperty("clear"))this._options.clear=true;if(!this._options.hasOwnProperty("multisampling")){this._options.multisampling=false;this._options.multisamplingSamples=0}if(this._options.multisamplingSamples){if(this._cgl.glSlowRenderer)this._options.multisamplingSamples=0;if(!this._cgl.gl.MAX_SAMPLES)this._options.multisamplingSamples=0;else this._options.multisamplingSamples=Math.min(this._cgl.gl.getParameter(this._cgl.gl.MAX_SAMPLES),this._options.multisamplingSamples)}if(!this._options.hasOwnProperty("filter"))this._options.filter=CGL.Texture.FILTER_LINEAR;if(!this._options.hasOwnProperty("wrap"))this._options.wrap=CGL.Texture.WRAP_CLAMP_TO_EDGE;this._cgl.checkFrameStarted("cubemap framebuffer");let n=s.pixeFormat;if(!n&&s.isFloatingPointTexture)n=CGL.Texture.PFORMATSTR_RGBA32F;this.texture=new r(this._cgl,{width:this.width,height:this.height,pixelFormat:s.pixelFormat,filter:this._options.filter,wrap:this._options.wrap,name:this.name+" cubemaptexture"});this.initializeRenderbuffers();this.setSize(this.width,this.height)}initializeRenderbuffers(){this._framebuffer=this._cgl.gl.createFramebuffer();this._depthbuffer=this._cgl.gl.createRenderbuffer();this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER,this._framebuffer);this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER,this._depthbuffer);this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER,this._cgl.gl.DEPTH_COMPONENT16,this.width,this.height);this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER,this._cgl.gl.DEPTH_ATTACHMENT,this._cgl.gl.RENDERBUFFER,this._depthbuffer);this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER,null);this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER,null)}getWidth(){return this.width}getHeight(){return this.height}getGlFrameBuffer(){return this._framebuffer}getDepthRenderBuffer(){return this._depthRenderbuffer}getTextureColor(){return this.texture}getTextureDepth(){return this._textureDepth}dispose(){if(this.texture)this.texture=this.texture.delete();if(this._framebuffer)this._cgl.gl.deleteFramebuffer(this._framebuffer);if(this._depthRenderbuffer)this._cgl.gl.deleteRenderbuffer(this._depthbuffer)}delete(){this.dispose()}setSize(e,t){this._cgl.printError("before cubemap setsize");this.width=Math.floor(e);this.height=Math.floor(t);this.width=Math.min(this.width,this._cgl.maxTexSize);this.height=Math.min(this.height,this._cgl.maxTexSize);this._cgl.profileData.profileFrameBuffercreate++;this._framebuffer=this._cgl.gl.createFramebuffer();this._depthbuffer=this._cgl.gl.createRenderbuffer();this.texture.setSize(this.width,this.height);this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER,this._framebuffer);this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER,this._depthbuffer);this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER,this._cgl.gl.DEPTH_COMPONENT16,this.width,this.height);this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER,this._cgl.gl.DEPTH_ATTACHMENT,this._cgl.gl.RENDERBUFFER,this._depthbuffer);if(!this._cgl.gl.isFramebuffer(this._framebuffer)){console.error("invalid framebuffer...")}const i=this._cgl.gl.checkFramebufferStatus(this._cgl.gl.FRAMEBUFFER);this.checkErrorsByStatus(i);this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_CUBE_MAP,null);this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER,null);this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER,null);this._cgl.printError("cubemap setsize")}checkErrorsByStatus(e){switch(e){case this._cgl.gl.FRAMEBUFFER_COMPLETE:break;case this._cgl.gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:console.error("FRAMEBUFFER_INCOMPLETE_ATTACHMENT...",this.width,this.height,this.texture.tex,this._depthBuffer);throw new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_ATTACHMENT");case this._cgl.gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:console.error("FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT");throw new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT");case this._cgl.gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:console.error("FRAMEBUFFER_INCOMPLETE_DIMENSIONS");throw new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_DIMENSIONS");case this._cgl.gl.FRAMEBUFFER_UNSUPPORTED:console.error("FRAMEBUFFER_UNSUPPORTED");throw new Error("Incomplete framebuffer: FRAMEBUFFER_UNSUPPORTED");case 36059:console.error("Incomplete: FRAMEBUFFER_INCOMPLETE_DRAW_BUFFER from ext. Or Safari/iOS undefined behaviour.");break;default:console.error("incomplete framebuffer",e);console.log(this);throw new Error("Incomplete framebuffer: "+e)}}setFilter(e){this.texture.filter=e;this.texture.setSize(this.width,this.height)}setCamPos(e){this.camPos=e||this.camPos}setMatrices(e,t,i){this._modelMatrix=e||this._modelMatrix;this._viewMatrix=t||this._viewMatrix;this._projectionMatrix=i||this._projectionMatrix}renderStart(){this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_CUBE_MAP,this.texture.tex);this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER,this._framebuffer);this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER,this._depthbuffer);this._cgl.gl.viewport(0,0,this.width,this.height);this._cgl.pushGlFrameBuffer(this._framebuffer);this._cgl.pushFrameBuffer(this)}renderStartCubemapFace(e){this._cgl.pushModelMatrix();this._cgl.pushViewMatrix();this._cgl.pushPMatrix();this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER,this._cgl.gl.COLOR_ATTACHMENT0,this._cubemapProperties[e].face,this.texture.tex,0);this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER,this._cgl.gl.DEPTH_ATTACHMENT,this._cgl.gl.RENDERBUFFER,this._depthbuffer);if(this._options.clear){this._cgl.gl.clearColor(0,0,0,1);this._cgl.gl.clear(this._cgl.gl.COLOR_BUFFER_BIT|this._cgl.gl.DEPTH_BUFFER_BIT)}this.setMatricesCubemapFace(e)}setMatricesCubemapFace(e){mat4.copy(this._cgl.mMatrix,this._modelMatrix);vec3.add(this._lookAtTemp,this.camPos,this._cubemapProperties[e].lookAt);mat4.lookAt(this._cgl.vMatrix,this.camPos,this._lookAtTemp,this._cubemapProperties[e].up);mat4.copy(this._cgl.pMatrix,this._projectionMatrix)}renderEndCubemapFace(){this._cgl.popPMatrix();this._cgl.popModelMatrix();this._cgl.popViewMatrix()}renderEnd(){this._cgl.profileData.profileFramebuffer++;if(this._cgl.glVersion!==1){this._cgl.gl.bindFramebuffer(this._cgl.gl.READ_FRAMEBUFFER,this._framebuffer)}this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER,this._cgl.popGlFrameBuffer());this._cgl.popFrameBuffer();this._cgl.resetViewPort();this.updateMipMap()}updateMipMap(){if(!this.texture)return;this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_CUBE_MAP,this.texture.tex);this.texture.updateMipMap();this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_CUBE_MAP,null)}}CGL.CubemapFramebuffer=t;((this.CGL=this.CGL||{}).COREMODULES=this.CGL.COREMODULES||{}).Cubemapframebuffer=e.Cubemapframebuffer})();