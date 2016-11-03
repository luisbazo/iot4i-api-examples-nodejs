var DEMO_SHIELD_NAME = "shieldsmokedetected";
var DEMO_SHIELD_DELAY = 5000;
var DEMO_SHIELD_UUID = 26;
var demoSafelet = function(payload) {
	return (payload.smoke_detected);
};
var demoEntryCondition = function(payload) {
	return (payload.smoke_detected);
};
var demoMessage = function(payload) {
	return (constructMessage(payload, DEMO_SHIELD_UUID, 'Smoke Detected DemoHazard', 'A demo shield activated Smoke Detected!'));
};
var demoShield = function(payload){
	var shield = getShieldByName(DEMO_SHIELD_NAME);
	return (commonShield(payload, shield));
};
registerShield(DEMO_SHIELD_UUID, DEMO_SHIELD_NAME, demoEntryCondition, undefined, demoSafelet, demoMessage, DEMO_SHIELD_DELAY);
