'use strict';

describe('Feature Test:', function() {

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function(){
    expect(thermostat.temp()).toEqual(20);
  });

});
