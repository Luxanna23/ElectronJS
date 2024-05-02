"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stationsByGenre = exports.stations = exports.stationStartsWith = exports.allStations = exports.numLiveStations = exports.stationIsLive = exports.liveStations = exports.liveStationsRaw = exports.listeners = exports.allListeners = exports.hasStation = exports.stationNames = exports.relatedGenres = exports.genre = exports.genresRaw = exports.genres = exports.hasLetter = exports.letters = exports.serverTime = exports.serverStatus = exports.isServerRunning = void 0;

var _query = require("./query");

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Gets the boolean value if the server is running
 * or not
 * 
 * @returns {Promise.<string>} true = running
 */
const isServerRunning = async function () {
  const resp = await (0, _query.query)('server_status');
  return resp.running;
};
/**
 * Gets the status object of the server
 *
 * @returns {Promise.<object>} server status object {running:boolean, message:string}
 */


exports.isServerRunning = isServerRunning;

const serverStatus = async function () {
  const resp = await (0, _query.query)('server_status');
  return resp;
};
/**
 * Gets the time from the server 
 *
 * @returns {Promise.<string>} time as string
 */


exports.serverStatus = serverStatus;

const serverTime = async function () {
  const resp = await (0, _query.query)('time');
  return resp;
};
/**
 * Gets unique array of all first letters of stations
 *
 * @returns {Promise.<array>} first letters of all stations
 */


exports.serverTime = serverTime;

const letters = async function () {
  const resp = await (0, _query.query)('letters');
  return resp;
};
/**
 * Determines if any stations starts with a certain letter
 *
 * @param {string} letter - letter to test
 * @returns {Promise.<boolean>} if a station begins with the given letter
 */


exports.letters = letters;

const hasLetter = async function (letter) {
  const resp = await (0, _query.query)('letters');
  return resp.indexOf(letter) !== -1;
};
/**
 * Get all genres available
 *
 * @returns {Promise.<array>} all genres
 */


exports.hasLetter = hasLetter;

const genres = async function () {
  const resp = await (0, _query.query)('genres');
  return resp.map(g => g.name);
};
/**
 * Gets raw object of all genres
 *
 * @return {Promise.<array>} array of genre objects {name:string, score:number, related:[string,...]}
 */


exports.genres = genres;

const genresRaw = async function () {
  const resp = await (0, _query.query)('genres');
  return resp;
};
/**
 * Gets raw genres objects related to another genre
 *
 * @param {string} genre - an existing genre
 * @returns {Promise.<array>} array of raw related genres objects {name:string, score:number, related:[string, ...]}
 */


exports.genresRaw = genresRaw;

const genre = async function (genre) {
  const resp = await (0, _query.query)('genres');
  const selGen = resp.filter(g => g.name === genre);
  return selGen[0];
};
/* Gets all genres related to antother genre
 *
 * @param {string} genre - an existing genre
 * @returns {Promise.<array>} genres
 */


exports.genre = genre;

const relatedGenres = async function (genre) {
  const resp = await (0, _query.query)('genres');
  const selGen = resp.filter(g => g.name === genre);
  return selGen[0].related;
};
/**
 * Gets all station names
 *
 * @returns {Promise.<array>} all station names
 */


exports.relatedGenres = relatedGenres;

const stationNames = async function () {
  const resp = await (0, _query.query)('station_names');
  return resp;
};
/**
 * Indicates if a station exists
 *
 * @param {string} station - station to test
 * @returns {Promise.<boolean>} if station tested exists
 */


exports.stationNames = stationNames;

const hasStation = async function (station) {
  const resp = await (0, _query.query)('station_names');
  return resp.indexOf(station) !== -1;
};
/**
 * Gets total number of listeners
 *
 * @returns {Promise.<number>} number of current listeners
 */


exports.hasStation = hasStation;

const allListeners = async function () {
  const resp = await (0, _query.query)('listeners');
  let sum = 0;

  for (let key in resp) {
    sum += parseInt(resp[key]);
  }

  return sum;
};
/**
 * Gets listeners for a particular station
 *
 * @param {string} station - station to get listeners for
 * @returns {Promise.<number>} number of listeners for station
 */


exports.allListeners = allListeners;

const listeners = async function (station) {
  const resp = await (0, _query.query)('listeners');
  return resp[station];
};
/**
 * Get raw objects of all stations broadcasting live
 *
 * @returns {Promise.<array>} array of station objects broadcasting live
 */


exports.listeners = listeners;

const liveStationsRaw = async function () {
  const resp = await (0, _query.query)('stations/live');
  return resp;
};
/**
 * Get names of all stations broadcasting live
 *
 * @returns {Promise.<array>} all stations broadcasting live
 */


exports.liveStationsRaw = liveStationsRaw;

const liveStations = async function () {
  const resp = await (0, _query.query)('stations/live');
  return resp.map(s => s.name);
};
/**
 * Determine if a station is currently broadcasting live
 *
 * @param {string} station - station to test
 * @returns {Promise.<boolean>} if station is broadcasting live
 */


exports.liveStations = liveStations;

const stationIsLive = async function (station) {
  const resp = await (0, _query.query)('stations/live');
  return resp.filter(s => s.name === station).length !== 0;
};
/**
 * Indicate how many stations are broadcasting live
 *
 * @returns {Promise.<number>} number of stations broadcasting live
 */


exports.stationIsLive = stationIsLive;

const numLiveStations = async function () {
  const resp = await (0, _query.query)('stations/live');
  return resp.length;
};

exports.numLiveStations = numLiveStations;

const assignOptions = function (options = {}) {
  const allowedKeys = ['lat', 'long', 'offset', 'limit'];

  if (!(options instanceof Object)) {
    throw 'not an Object';
  }

  if (options.lat && !options.long || options.long && !options.lat) {
    throw 'both lat and long are required';
  }

  if (options.offset && !options.limit) {
    throw 'offset requires limit';
  }

  for (const key in options) {
    if (!allowedKeys.includes(key)) {
      throw `${key} is not an allowed option`;
    }
  }

  return options;
};

const formatResult = function (resp) {
  if (resp.items) {
    let {
      items: stations
    } = resp,
        pagination = _objectWithoutProperties(resp, ["items"]);

    return {
      stations,
      pagination
    };
  } else {
    return resp;
  }
};
/**
 * Gets all Stations
 *
 * @param {object} options - {limit:number, offset:number, lat:number, long:number}
 * @returns {Promise.<array>} an array of station objects
 */


const allStations = async function (options = {}) {
  const cops = assignOptions(options);
  const resp = await (0, _query.query)('/stations', cops);
  return formatResult(resp);
};
/**
 * Get stations beginning with a certain letter or number
 *
 * @param {(string|number)} startw - station starts with
 * @param {object} options - {limit:number, offset:number, lat:number, long:number}
 * @returns {Promise.<array>} array of station objects
 */


exports.allStations = allStations;

const stationStartsWith = async function (startw, options = {}) {
  const cops = assignOptions(options);

  if (parseInt(startw)) {
    const resp = await (0, _query.query)('/stations/numbers', cops);
    const filteredResults = resp.filter(s => s.name[0] == startw);
    return formatResult(filteredResults);
  } else {
    const resp = await (0, _query.query)(`/stations/letter/${startw}`, cops);
    return formatResult(resp);
  }
};
/**
 * Gets information for specific stations
 *
 * @param {array} stations - array of station names
 * @param {object} options - {lat:number, long:number}
 * @returns {Promise.<array>} array of station objects
 */


exports.stationStartsWith = stationStartsWith;

const stations = async function (stations, options = {}) {
  if (options.offset || options.limit) {
    throw 'can not use limit and/or offset with this list';
  }

  const cops = assignOptions(options);
  const resp = await (0, _query.query)(`stations/${stations}`, cops);
  return resp;
};
/**
 * Get all stations of a particular genre
 *
 * @param {string} genre - genre to search for
 * @param {object} options - {limit:number, offset:number, lat:number, long:number}
 * @returns {Promise.<array>} array of station objects
 */


exports.stations = stations;

const stationsByGenre = async function (genre, options = {}) {
  const cops = assignOptions(options);
  const resp = await (0, _query.query)(`stations/genre/${genre}`, cops);
  return resp;
};
/**
 * Search
 * (?-mix:\A\/station\/([\w\d_\-]+)\/images\/([\w\d_\-]+)\Z)
 * @todo not implemented yet
 */

/**
 * Song Change JSON Stream
 * /song_change.stream.json
 * @todo not implemented yet
 */

/**
 * Song Change WebSocket
 * /song_change.ws.json
 * @todo not implemented yet
 */

/**
 * Song Change Chunks (last 50)
 * /song_change.chunk.json
 * {Song, ...}
 * @todo not implemented yet
 */

/**
 * Teaser
 * /teaser
 * [{headline: String, schedule:[], link:String, img_l: String, img_m: String, img_s: String}, ...]
 * @todo not implemented yet
 */


exports.stationsByGenre = stationsByGenre;