![npm](https://img.shields.io/npm/v/lautfm-api.svg)
![NPM](https://img.shields.io/npm/l/lautfm-api.svg)
![npm](https://img.shields.io/npm/dw/lautfm-api.svg)
![Travis (.org) branch](https://img.shields.io/travis/fvhockney/lautfm-api/master.svg)

# Importable Public API for Laut.fm

This is an importable wrapper for the Laut.fm public API. It features the ability to import only the functions that a user needs in any particular file. It is also compatible with tree shaking when used with a build system like webpack.

## Important Information

This liberary uses promises and ES\* code. It is meant to be used as part of a build system and may/will need polyfilling to work in your environment. You **will** have to pollyfill promises as a minimum. This liberary is *not* meant to be consumed directly by browsers. If you are interested in a liberary that can be used directly in the browser, without polyfilling, or without promises, take a look at the wonderful liberary at <https://github.com/lautde/lautfm\_js\_tools>.

## Documentation

Full documentation can be found at <https://fvhockney.github.io/lautfm-api>

## Installation

```bash
npm i lautfm-api
```

- You will need to install `axios` and `@babel/polyfill` as peer dependencies in order to use this liberary.

## Use

Import entire liberary
```js
import * as lautapi from 'lautfm-api'

api.isServerRunning()
    .then( data => console.log( data ) )
    .catch( error => console.error( error ) )

api.genres()
    .then( data => console.log( data ) )
    .catch( error => console.error( error ) )

```

Import only specific functions
```js
import { isServerRunning, genres } from 'lautfm-api'

isServerRunning()
    .then( data => console.log( data ) )
    .catch( error => console.error( error ) )

genres()
    .then( data => console.log( data ) )
    .catch( error => console.error( error ) )

```

If you are already in a function you can mark it as async and use the more concise `async/await` syntax
```js
import { isServerRunning } from 'lautfm-api'

const isRunning = async () => {
    try {
        const data = await isServerRunning()
        console.log( data )
    } catch ( error ) {
        console.error( error )
    }
}

isRunning()
```

You can also create an object to work with a specific station
```js
import { Station } from 'lautfm-api'

const eins = new Station( 'eins' )
eins.lastSong()
    .then( data => console.log( data ) )
    .catch( error => console.error( error ) )
```

Or if you can initialize a station and have access to quite a bit of information without having to make multiple requests
```js
import { Station } from 'lautfm-api'

( async () => {
    const eins = await new Station( 'eins' ).init()

    console.log( eins.name )
    console.log( eins.currentPlaylist )

    // You can still use other async methods after initializing
    // if you still need more information

    const einsPlaylists = await eins.playlists()
    console.log( einsPlaylists )
  })()
```

## Tests

```bash
npm run test
```

## Collaboration

Collaboration on this project is welcome. Feel free to fork the project and to submit a pull request with additional functionality. It would be most helpful if you submit tests (preferably by adding them to the appropriate file) and ensure that the entire test suite runs. If you are not able to run tests, that is ok; however, it will slow down the pace of merging pull requests.
