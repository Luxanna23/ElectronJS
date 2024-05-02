function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

import { query } from './query';
/** Class representing a specific station */

var Station =
/*#__PURE__*/
function () {
  /**
   * Create a station object
   * @parem {string} station - the name of a station
   */
  function Station(station) {
    _classCallCheck(this, Station);

    this.baseurl = "station/".concat(station);
    this.genData = {};
  }

  _createClass(Station, [{
    key: "init",
    value: function () {
      var _init = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.info();

              case 2:
                this.genData = _context.sent;
                return _context.abrupt("return", this);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }()
    /**
     * Gets the basic information about a station
     * 
     * @return {Promise} Object which contains basic station information
     */

  }, {
    key: "info",
    value: function () {
      var _info = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var url;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                url = "".concat(this.baseurl);
                _context2.next = 3;
                return query(url);

              case 3:
                return _context2.abrupt("return", _context2.sent);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function info() {
        return _info.apply(this, arguments);
      }

      return info;
    }()
    /**
    * Gets the information for the currently playing song 
    *
    * @return {Promise} Object containing the current song
    */

  }, {
    key: "currentSong",
    value: function () {
      var _currentSong = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3() {
        var url;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                url = "".concat(this.baseurl, "/current_song");
                _context3.next = 3;
                return query(url);

              case 3:
                return _context3.abrupt("return", _context3.sent);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function currentSong() {
        return _currentSong.apply(this, arguments);
      }

      return currentSong;
    }()
    /**
     * Gets the information about the last song played
     *
     * @return {Promise} Object containing the last played song
     */

  }, {
    key: "lastSong",
    value: function () {
      var _lastSong = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4() {
        var url;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                url = "".concat(this.baseurl, "/last_songs");
                _context4.next = 3;
                return query(url);

              case 3:
                return _context4.abrupt("return", _context4.sent);

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function lastSong() {
        return _lastSong.apply(this, arguments);
      }

      return lastSong;
    }()
    /**
     * Gets the schedules for a station
     *
     * @return {Promise} An array of schedule objects
     */

  }, {
    key: "schedule",
    value: function () {
      var _schedule = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5() {
        var url;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                url = "".concat(this.baseurl, "/schedule");
                _context5.next = 3;
                return query(url);

              case 3:
                return _context5.abrupt("return", _context5.sent);

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function schedule() {
        return _schedule.apply(this, arguments);
      }

      return schedule;
    }()
    /**
     * Gets the playlists of a station
     *
     * @return {Promise} An array of playlist objects
     */

  }, {
    key: "playlists",
    value: function () {
      var _playlists = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6() {
        var url;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                url = "".concat(this.baseurl, "/playlists");
                _context6.next = 3;
                return query(url);

              case 3:
                return _context6.abrupt("return", _context6.sent);

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function playlists() {
        return _playlists.apply(this, arguments);
      }

      return playlists;
    }()
    /**
     * Gets the current number of listeners for a station
     * 
     * @return {Promise} An number representing the number of listeners
     */

  }, {
    key: "listeners",
    value: function () {
      var _listeners = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee7() {
        var url;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                url = "".concat(this.baseurl, "/listeners");
                _context7.next = 3;
                return query(url);

              case 3:
                return _context7.abrupt("return", _context7.sent);

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function listeners() {
        return _listeners.apply(this, arguments);
      }

      return listeners;
    }()
    /**
     * Get the next artists who will play on a station
     *
     * @return {Promise} An array of objects in the form {artist: {name: <String>}}
     */

  }, {
    key: "nextArtists",
    value: function () {
      var _nextArtists = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee8() {
        var url, resp;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                url = "".concat(this.baseurl, "/next_artists");
                _context8.next = 3;
                return query(url);

              case 3:
                resp = _context8.sent;
                return _context8.abrupt("return", resp.map(function (item) {
                  return item.artist.name;
                }));

              case 5:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function nextArtists() {
        return _nextArtists.apply(this, arguments);
      }

      return nextArtists;
    }()
    /**
     * Gets the specified number of genres. Will not
     * throw an error if more genres are requested then
     * are present
     *
     * @param {number} count - the number of genres to return
     * @return {array} An array of strings i.e. genres
     */

  }, {
    key: "genresC",
    value: function genresC(count) {
      return this.genData.genres.slice(0, count);
    }
    /**
     * Gets the image based on type and size/orientation
     *
     * @param {string} type - 'station'|'background'
     * @param {string} size - 'sm'|'md'|'lg' 'portrait'|'landscape'
     * @return {string} The URL of the requested image
     */

  }, {
    key: "imagesSize",
    value: function imagesSize(type) {
      var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

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

  }, {
    key: "name",
    get: function get() {
      return this.genData.name;
    }
    /**
     * Display Name of station
     * @returns {string} display name
     */

  }, {
    key: "displayName",
    get: function get() {
      return this.genData.display_name;
    }
    /**
     * URL of station on laut.fm
     * @returns {string} url
     */

  }, {
    key: "pageUrl",
    get: function get() {
      return this.genData.page_url;
    }
    /**
     * URL of station stream
     * @returns {string} url
     */

  }, {
    key: "streamUrl",
    get: function get() {
      return this.genData.stream_url;
    }
    /**
     * Format of the station
     * @returns {string} format
     */

  }, {
    key: "format",
    get: function get() {
      return this.genData.format;
    }
    /**
     * Description of the station
     * @returns {string} description
     */

  }, {
    key: "description",
    get: function get() {
      return this.genData.description;
    }
    /**
     * Djs for the station
     * @returns {string} Djs
     */

  }, {
    key: "djs",
    get: function get() {
      return this.genData.djs;
    }
    /**
     * DJ provided location for station
     * @returns {string} location
     */

  }, {
    key: "location",
    get: function get() {
      return this.genData.location;
    }
    /**
     * Latitude and Longitude of the station
     * @returns{array} [latitude, longitude]
     */

  }, {
    key: "latLong",
    get: function get() {
      var lat = this.genData.lat;
      var lng = this.genData.lng;
      return [lat, lng];
    }
    /**
     * Color of the station in RadioAdmin
     * @returns {string} hex color
     */

  }, {
    key: "color",
    get: function get() {
      return this.genData.color;
    }
    /**
     * Last time the station was updated
     * @returns {Date} update time
     */

  }, {
    key: "updatedAt",
    get: function get() {
      return this.genData.updated_at;
    }
    /**
     * Genres associated with the station
     * @returns {array.<string>} genres
     */

  }, {
    key: "genres",
    get: function get() {
      return this.genData.genres;
    }
    /**
     * If the station is currently active
     * @returns {boolean} active
     */

  }, {
    key: "active",
    get: function get() {
      return this.genData.active;
    }
    /**
     * The amazon alexa skill name
     * @returns {string} skill name
     */

  }, {
    key: "skillName",
    get: function get() {
      return this.genData.third_parties.amazon.skill_name;
    }
    /**
     * The amazon alexa invocation name
     * @returns {string} invocation name
     */

  }, {
    key: "invocationName",
    get: function get() {
      return this.genData.third_parties.amazon.invocation_name;
    }
    /**
     * The facebook page for the station
     * @returns {string} facebook url
     */

  }, {
    key: "facebook",
    get: function get() {
      return this.genData.third_parties.facebook.page;
    }
    /**
     * The URL of the twitter account for a station
     * @returns {string} twitter url
     */

  }, {
    key: "twitterUrl",
    get: function get() {
      return this.genData.third_parties.twitter.url;
    }
    /**
     * The twitter name associated with the station
     * @returns {string} twitter handle
     */

  }, {
    key: "twitterName",
    get: function get() {
      return this.genData.third_parties.twitter.name;
    }
    /**
     * The URL of an external station website
     * @return {string} external station url
     */

  }, {
    key: "website",
    get: function get() {
      return this.genData.third_parties.website.url;
    }
    /**
     * The URL of a station on phonostar
     * @return {string} phonostar url
     */

  }, {
    key: "phonostarUrl",
    get: function get() {
      return this.genData.third_parties.phonostar.url;
    }
    /**
     * The URL of a station on radio.de
     * @return {string} radio.de url
     */

  }, {
    key: "radiodeUrl",
    get: function get() {
      return this.genData.third_parties.radiode.url;
    }
    /**
     * Object containing associated images to a station
     * @returns {object} image size key, image url value
     */

  }, {
    key: "images",
    get: function get() {
      return this.genData.images;
    }
    /**
     * Object containing information about the currently playing
     * playlist
     *
     * @return {object} current playlist
     */

  }, {
    key: "currentPlaylist",
    get: function get() {
      return this.genData.current_playlist;
    }
    /**
     * Object containing information about he next playlist
     * @return {object} next playlist
     */

  }, {
    key: "nextPlaylist",
    get: function get() {
      return this.genData.next_playlists;
    }
    /**
     * The top artists on this station
     * @return {array} artists
     */

  }, {
    key: "topArtists",
    get: function get() {
      return this.genData.top_artists;
    }
    /**
     * The current rank of the station
     * @return {number} rank
     */

  }, {
    key: "position",
    get: function get() {
      return this.genData.position;
    }
  }], [{
    key: "count",
    value: function count(_count) {
      this.slice(_count);
    }
  }]);

  return Station;
}();

export { Station as default };