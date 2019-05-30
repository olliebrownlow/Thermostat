'use strict';

function Thermostat() {
  this._temp = 20;
  this._isPowerSavingMode = true;
}

Thermostat.prototype.temp = function() {
  return this._temp;
}

Thermostat.prototype.powerSavingMode = function() {
  return this._isPowerSavingMode;
}

Thermostat.prototype.up = function() {
  if (this._temp === 32 && this._isPowerSavingMode === false) throw "Maximum temp is 32 degrees";
  if (this._temp === 25 && this._isPowerSavingMode === true) throw "Power Saving Mode is on: Maximum temp is 25 degrees";
  return this._temp++;
}

Thermostat.prototype.down = function() {
  if (this._temp === 10) throw "Minimum temperature is 10 degrees";
  this._temp--;
}

Thermostat.prototype.psmSwitch = function() {
  if (this._isPowerSavingMode === false) return this._isPowerSavingMode = true;
  if (this._isPowerSavingMode === true) return this._isPowerSavingMode = false;
}

Thermostat.prototype.reset = function() {
  this._temp = 20;
}

Thermostat.prototype.currentUsage = function () {
  if (this._temp < 18) {
    return 'low-usage';
  } else if (this._temp >= 18 && this._temp < 25) {
    return 'medium-usage';
  } else if (this._temp > 24) {
    return 'high-usage';
  }

}
