# system-sibilant

**system-sibilant** is a SystemJS plugin for loading Sibilant code in the browser.

## Installation

Best used with Bower:

```shell
bower install system-sibilant
```

## Use

To use simple set your path to `sibilant.js` and then use:

```js
System.paths['sibilant'] = 'bower_components/system-sibilant/sibilant.js';

System.import('main.sibilant!sibilant');
```

## License

MIT
