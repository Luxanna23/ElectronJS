"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _query = require("./query");

/** Class representing a specific station */
class Station {
  /**
   * Create a station object
   * @parem {string} station - the name of a station
   */
  constructor(station) {
    this.baseurl = `station/${station}`;
    this.genData = {};
  }

  async init() {
    this.genData = await this.info();
    return this;
  }
  /**
   * Gets the basic information about a station
   * 
   * @return {Promise} Object which contains basic station information
   */


  async info() {
    const url = `${this.baseurl}`;
    return await (0, _query.query)(url);
  }
  /**
  * Gets the information for the currently playing song 
  *
  * @return {Promise} Object containing the current song
  */


  async currentSong() {
    const url = `${this.baseurl}/current_song`;
    return await (0, _query.query)(url);
  }
  /**
   * Gets the information about the last song played
   *
   * @return {Promise} Object containing the last played song
   */


  async lastSong() {
    const url = `${this.baseurl}/last_songs`;
    return await (0, _query.query)(url);
  }
  /**
   * Gets the schedules for a station
   *
   * @return {Promise} An array of schedule objects
   */


  async schedule() {
    const url = `${this.baseurl}/schedule`;
    return await (0, _query.query)(url);
  }
  /**
   * Gets the playlists of a station
   *
   * @return {Promise} An array of playlist objects
   */


  async playlists() {
    const url = `${this.baseurl}/playlists`;
    return await (0, _query.query)(url);
  }
  /**
   * Gets the current number of listeners for a station
   * 
   * @return {Promise} An number representing the number of listeners
   */


  async listeners() {
    const url = `${this.baseurl}/listeners`;
    return await (0, _query.query)(url);
  }
  /**
   * Get the next artists who will play on a station
   *
   * @return {Promise} An array of objects in the form {artist: {name: <String>}}
   */


  async nextArtists() {
    const url = `${this.baseurl}/next_artists`;
    const resp = await (0, _query.query)(url);
    return resp.map(item => item.artist.name);
  }
  /**
   * Gets the specified number of genres. Will not
   * throw an error if more genres are requested then
   * are present
   *
   * @param {number} count - the number of genres to return
   * @return {array} An array of strings i.e. genres
   */


  genresC(count) {
    return this.genData.genres.slice(0, count);
  }
  /**
   * Gets the image based on type and size/orientation
   *
   * @param {string} type - 'station'|'background'
   * @param {string} size - 'sm'|'md'|'lg' 'portrait'|'landscape'
   * @return {string} The URL of the requested image
   */


  imagesSize(type, size = '') {
    switch (type) {
      case 'station':
        switch (size) {
          case 'sm':
            return this.genData.images.station_80x80;
            break;

          case 'md':
            return this.genData.images.station_120x120;
            break;

          case 'lg':
            return this.genData.images.station_640x640;
            break;

          default:
            return this.genData.images.station;
            break;
        }

      case 'background':
        switch (size) {
          case 'portrait':
            return this.genData.images.background_768x1024;
            break;

          case 'landscape':
            return this.genData.images.background_1024x768;
            break;

          default:
            return this.genData.background;
            break;
        }

    }
  }
  /**
   * Name of station
   * @returns {string} station name
   */


  get name() {
    return this.genData.name;
  }
  /**
   * Display Name of station
   * @returns {string} display name
   */


  get displayName() {
    return this.genData.display_name;
  }
  /**
   * URL of station on laut.fm
   * @returns {string} url
   */


  get pageUrl() {
    return this.genData.page_url;
  }
  /**
   * URL of station stream
   * @returns {string} url
   */


  get streamUrl() {
    return this.genData.stream_url;
  }
  /**
   * Format of the station
   * @returns {string} format
   */


  get format() {
    return this.genData.format;
  }
  /**
   * Description of the station
   * @returns {string} description
   */


  get description() {
    return this.genData.description;
  }
  /**
   * Djs for the station
   * @returns {string} Djs
   */


  get djs() {
    return this.genData.djs;
  }
  /**
   * DJ provided location for station
   * @returns {string} location
   */


  get location() {
    return this.genData.location;
  }
  /**
   * Latitude and Longitude of the station
   * @returns{array} [latitude, longitude]
   */


  get latLong() {
    const lat = this.genData.lat;
    const lng = this.genData.lng;
    return [lat, lng];
  }
  /**
   * Color of the station in RadioAdmin
   * @returns {string} hex color
   */


  get color() {
    return this.genData.color;
  }
  /**
   * Last time the station was updated
   * @returns {Date} update time
   */


  get updatedAt() {
    return this.genData.updated_at;
  }
  /**
   * Genres associated with the station
   * @returns {array.<string>} genres
   */


  get genres() {
    return this.genData.genres;
  }
  /**
   * If the station is currently active
   * @returns {boolean} active
   */


  get active() {
    return this.genData.active;
  }
  /**
   * The amazon alexa skill name
   * @returns {string} skill name
   */


  get skillName() {
    return this.genData.third_parties.amazon.skill_name;
  }
  /**
   * The amazon alexa invocation name
   * @returns {string} invocation name
   */


  get invocationName() {
    return this.genData.third_parties.amazon.invocation_name;
  }
  /**
   * The facebook page for the station
   * @returns {string} facebook url
   */


  get facebook() {
    return this.genData.third_parties.facebook.page;
  }
  /**
   * The URL of the twitter account for a station
   * @returns {string} twitter url
   */


  get twitterUrl() {
    return this.genData.third_parties.twitter.url;
  }
  /**
   * The twitter name associated with the station
   * @returns {string} twitter handle
   */


  get twitterName() {
    return this.genData.third_parties.twitter.name;
  }
  /**
   * The URL of an external station website
   * @return {string} external station url
   */


  get website() {
    return this.genData.third_parties.website.url;
  }
  /**
   * The URL of a station on phonostar
   * @return {string} phonostar url
   */


  get phonostarUrl() {
    return this.genData.third_parties.phonostar.url;
  }
  /**
   * The URL of a station on radio.de
   * @return {string} radio.de url
   */


  get radiodeUrl() {
    return this.genData.third_parties.radiode.url;
  }
  /**
   * Object containing associated images to a station
   * @returns {object} image size key, image url value
   */


  get images() {
    return this.genData.images;
  }
  /**
   * Object containing information about the currently playing
   * playlist
   *
   * @return {object} current playlist
   */


  get currentPlaylist() {
    return this.genData.current_playlist;
  }
  /**
   * Object containing information about he next playlist
   * @return {object} next playlist
   */


  get nextPlaylist() {
    return this.genData.next_playlists;
  }
  /**
   * The top artists on this station
   * @return {array} artists
   */


  get topArtists() {
    return this.genData.top_artists;
  }
  /**
   * The current rank of the station
   * @return {number} rank
   */


  get position() {
    return this.genData.position;
  }

  static count(count) {
    this.slice(count);
  }

}

exports.default = Station;