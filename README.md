# moment-round

This is a plugin for [moment.js][moment] and will round date/time to a given interval.

## Examples

``` javascript
var m = new moment(); 
m.format( 'YYYY-MM-DD HH:mm:ss.SSS' ); // 2015-06-18 15:30:19.123
m.round( 100, 'milliseconds' ); 
m.format( 'YYYY-MM-DD HH:mm:ss.SSS' ); // 2015-06-18 15:30:20.100
m.round(5, 'seconds'); 
m.format( 'YYYY-MM-DD HH:mm:ss.SSS' ); // 2015-06-18 15:30:20.000
m.ceil(3, 'minutes'); 
m.format( 'YYYY-MM-DD HH:mm:ss.SSS' ); // 2015-06-18 15:33:00.000
m.floor(16, 'hours'); 
m.format( 'YYYY-MM-DD HH:mm:ss.SSS' ); // 2015-06-18 00:00:00.000
m.ceil(21, 'hours'); 
m.format( 'YYYY-MM-DD HH:mm:ss.SSS' ); // 2015-06-18 21:00:00.000
m.ceil(20, 'hours'); 
m.format( 'YYYY-MM-DD HH:mm:ss.SSS' ); // 2015-06-19 00:00:00.000
```

Possible values to round to are `hours`, `minutes`, `seconds`, `milliseconds`

###Alias values

``` javascript
mm --> milliseconds
Milliseconds --> milliseconds
millisecond --> milliseconds
s --> seconds
Seconds --> seconds
second --> seconds
m --> minutes
Minutes --> minutes
minute --> minutes
h --> hours
H --> hours
Hours --> hours
hour --> hours
```

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
