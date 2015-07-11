# moment-round

This is a plugin for [moment.js][moment] and will round date/time to a given interval.

## Examples

``` javascript
var m = new moment(); // 2015-06-18 15:30:19
moment.round(5, 'seconds'); // 2015-06-18 15:30:20
moment.ceil(3, 'minutes'); // 2015-06-18 15:33:00
moment.floor(16, 'hours'); // 2015-06-18 00:00:00
moment.ceil(21, 'hours'); // 2015-06-18 21:00:00
moment.ceil(20, 'hours'); // 2015-06-19 00:00:00
```

Possible values to round to are `hours`, `minutes`, `seconds`

## Installation

### Browser

``` html
<script src="moment.js"></script>
<script src="moment-round.js"></script>
```

### Node /NPM

``` sh
npm install moment-round --save-dev
```

And then `require` it:

``` javascript
var moment = require('moment');
require('moment-round');
```

### Bower

``` sh
bower install moment-round
```

## Running tests
```
gulp test
```

## License

moment-round is [LICENSED][license].

[license]: https://creativecommons.org/licenses/by-sa/3.0/us/
[moment]: http://momentjs.com/
