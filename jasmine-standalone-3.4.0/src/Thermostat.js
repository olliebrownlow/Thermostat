'use strict';

function Thermostat() {
  this._temp = 20;
  this._isPowerSavingMode = true;
  this._DEFAULT_TEMP = 20;
  this._MAX_TEMP_PSM_ON = 25;
  this._MAX_TEMP_PSM_OFF = 32;
  this._MIN_TEMP = 10;
}

Thermostat.prototype.temp = function() {
  return this._temp;
}

Thermostat.prototype.powerSavingMode = function() {
  return this._isPowerSavingMode;
}

Thermostat.prototype.up = function() {
  if (this._temp === this._MAX_TEMP_PSM_OFF && this._isPowerSavingMode === false) throw "Maximum temp is 32 degrees";
  if (this._temp === this._MAX_TEMP_PSM_ON && this._isPowerSavingMode === true) throw "Power Saving Mode is on: Maximum temp is 25 degrees";
  return this._temp++;
}

Thermostat.prototype.down = function() {
  if (this._temp === this._MIN_TEMP) throw "Minimum temperature is 10 degrees";
  this._temp--;
}

Thermostat.prototype.psmSwitch = function() {
  this._isPowerSavingMode = !this._isPowerSavingMode;
}

Thermostat.prototype.reset = function() {
  this._temp = this._DEFAULT_TEMP;
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
