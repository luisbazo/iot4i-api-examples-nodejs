var DEMO_SHIELD_NAME = "shieldTemperature";
var DEMO_SHIELD_DELAY = 5000;
var DEMO_SHIELD_UUID = 31;
var demoSafelet = function(payload) {
	if (payload.temperature > 20.0)
		return (true);
	return true;
};
var demoEntryCondition = function(payload) {
	if (payload.temperature > 20.0)
		return (true);
	return true;
};
var demoMessage = function(payload) {
	return (constructMessage(payload, DEMO_SHIELD_UUID, 'Motion', 'A demo motion shield activated!'));
};
var demoShield = function(payload){
	var shield = getShieldByName(DEMO_SHIELD_NAME);
	return (commonShield(payload, shield));
};
registerShield(DEMO_SHIELD_UUID, DEMO_SHIELD_NAME, demoEntryCondition, undefined, demoSafelet, demoMessage, DEMO_SHIELD_DELAY);
