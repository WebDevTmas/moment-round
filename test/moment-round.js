var moment = require('moment');
var assert = require('assert');
var assert = require('should');

require('../src/moment-round');

describe('Moment', function() {

  describe('#round()', function() {

    it('should return a moment rounded to given second', function() {
      var m = moment('2015-05-05 15:37:23', 'YYYY-MM-DD HH:mm:ss');
      m = m.round(5, 'second');
      m.format('YYYY-MM-DD HH:mm:ss').should.equal('2015-05-05 15:37:25');

      m = moment('2015-05-05 15:37:08', 'YYYY-MM-DD HH:mm:ss');
      m = m.round(18, 'seconds');
      m.format('YYYY-MM-DD HH:mm:ss').should.equal('2015-05-05 15:37:00');
    });

    it('should return a moment rounded to given minute', function() {
      var m = moment('2015-05-05 15:37:23', 'YYYY-MM-DD HH:mm:ss');
      m = m.round(5, 'minutes');
      m.format('YYYY-MM-DD HH:mm:ss').should.equal('2015-05-05 15:35:00');

      m = moment('2015-05-05 15:37:23', 'YYYY-MM-DD HH:mm:ss');
      m = m.round(18, 'minute');
      m.format('YYYY-MM-DD HH:mm:ss').should.equal('2015-05-05 15:36:00');
    });

    it('should return a moment rounded to given hour', function() {
      var m = moment('2015-05-05 15:37:23', 'YYYY-MM-DD HH:mm:ss');
      m = m.round(5, 'hour');
      m.format('YYYY-MM-DD HH:mm:ss').should.equal('2015-05-05 15:00:00');

      m = moment('2015-05-05 15:37:23', 'YYYY-MM-DD HH:mm:ss');
      m = m.round(8, 'hours');
      m.format('YYYY-MM-DD HH:mm:ss').should.equal('2015-05-05 16:00:00');
    });

  });

  describe('#ceil()', function() {

    it('should return a moment rounded up to given second', function() {
      var m = moment('2015-05-05 15:37:23', 'YYYY-MM-DD HH:mm:ss');
      m = m.ceil(5, 'second');
      m.format('YYYY-MM-DD HH:mm:ss').should.equal('2015-05-05 15:37:25');

      m = moment('2015-05-05 15:37:08', 'YYYY-MM-DD HH:mm:ss');
      m = m.ceil(18, 'seconds');
      m.format('YYYY-MM-DD HH:mm:ss').should.equal('2015-05-05 15:37:18');
    });

    it('should return a moment rounded up to given minute', function() {
      var m = moment('2015-05-05 15:37:23', 'YYYY-MM-DD HH:mm:ss');
      m = m.ceil(5, 'minutes');
      m.format('YYYY-MM-DD HH:mm:ss').should.equal('2015-05-05 15:40:00');

      m = moment('2015-05-05 15:37:23', 'YYYY-MM-DD HH:mm:ss');
      m = m.ceil(18, 'minute');
      m.format('YYYY-MM-DD HH:mm:ss').should.equal('2015-05-05 15:54:00');
    });

    it('should return a moment rounded up to given hour', function() {
      var m = moment('2015-05-05 15:37:23', 'YYYY-MM-DD HH:mm:ss');
      m = m.ceil(5, 'hour');
      m.format('YYYY-MM-DD HH:mm:ss').should.equal('2015-05-05 20:00:00');

      m = moment('2015-05-05 16:37:23', 'YYYY-MM-DD HH:mm:ss');
      m = m.ceil(8, 'hours');
      m.format('YYYY-MM-DD HH:mm:ss').should.equal('2015-05-06 00:00:00');
    });
    
  });

  describe('#floor()', function() {

    it('should return a moment rounded down to given second', function() {
      var m = moment('2015-05-05 15:37:23', 'YYYY-MM-DD HH:mm:ss');
      m = m.floor(5, 'second');
      m.format('YYYY-MM-DD HH:mm:ss').should.equal('2015-05-05 15:37:20');

      m = moment('2015-05-05 15:37:08', 'YYYY-MM-DD HH:mm:ss');
      m = m.floor(18, 'seconds');
      m.format('YYYY-MM-DD HH:mm:ss').should.equal('2015-05-05 15:37:00');
    });

    it('should return a moment rounded down to given minute', function() {
      var m = moment('2015-05-05 15:37:23', 'YYYY-MM-DD HH:mm:ss');
      m = m.floor(5, 'minutes');
      m.format('YYYY-MM-DD HH:mm:ss').should.equal('2015-05-05 15:35:00');

      m = moment('2015-05-05 15:37:23', 'YYYY-MM-DD HH:mm:ss');
      m = m.floor(18, 'minute');
      m.format('YYYY-MM-DD HH:mm:ss').should.equal('2015-05-05 15:36:00');
    });

    it('should return a moment rounded down to given hour', function() {
      var m = moment('2015-05-05 15:37:23', 'YYYY-MM-DD HH:mm:ss');
      m = m.floor(5, 'hour');
      m.format('YYYY-MM-DD HH:mm:ss').should.equal('2015-05-05 15:00:00');

      m = moment('2015-05-05 15:37:23', 'YYYY-MM-DD HH:mm:ss');
      m = m.floor(8, 'hours');
      m.format('YYYY-MM-DD HH:mm:ss').should.equal('2015-05-05 08:00:00');
    });
    
  });

});
