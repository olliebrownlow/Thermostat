'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.temp()).toEqual(20);
  });

  it('can increase the temperature', function() {
    thermostat.up();
    expect(thermostat.temp()).toEqual(21);
  });

  it('can decrease the temperature', function() {
    thermostat.down();
    thermostat.down();
    expect(thermostat.temp()).toEqual(18);
  });

  it('has a minimum temperature of 10 degrees', function() {
    thermostat._temp = 10;
    expect( function(){ thermostat.down(); }).toThrow("Minimum temperature is 10 degrees")
  });

  it('starts with a power saving mode set to on', function() {
    expect(thermostat.powerSavingMode()).toBe(true);
  });

  it('has a maximum temp of 25 when powerSavingMode is on', function() {
    thermostat._temp = 25;
    thermostat._isPowerSavingMode = true;
    expect( function(){ thermostat.up(); }).toThrow("Power Saving Mode is on: Maximum temp is 25 degrees")
  });

  it('has a maximum temp of 32 when powerSavingMode is off', function() {
    thermostat._temp = 32;
    thermostat._isPowerSavingMode = false;
    expect( function(){ thermostat.up(); }).toThrow("Maximum temp is 32 degrees")
  });

  it('has a power saving mode toggle switch that can switch psm off', function() {
    thermostat.psmSwitch();
    expect(thermostat.powerSavingMode()).toBe(false);
  });

  it('has a power saving mode toggle switch that can switch psm on', function() {
    thermostat._isPowerSavingMode = false;
    thermostat.psmSwitch();
    expect(thermostat.powerSavingMode()).toBe(true);
  });

  it('has a reset button', function() {
    thermostat._temp = 30;
    thermostat.reset();
    expect(thermostat.temp()).toEqual(20);
  });

  describe('currentUsage', function() {

    it('will return low-usage when temp is less than 18', function() {
      thermostat._temp = 17;
      expect(thermostat.currentUsage()).toEqual('low-usage');
    });

    it('will return medium-usage when temp is between 18 and 24', function() {
      thermostat._temp = 20;
      expect(thermostat.currentUsage()).toEqual('medium-usage');
    });

    it('will return high-usage when temp above 24', function() {
      thermostat._temp = 26;
      expect(thermostat.currentUsage()).toEqual('high-usage');
    });
  });
});
