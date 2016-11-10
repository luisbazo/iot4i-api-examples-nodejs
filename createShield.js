/**
 * Copyright 2016 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the “License”);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an “AS IS” BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var request = require("request");
var config = require( "./config.js");
var csrfRequests = require("./csrfRequests.js");

/**
 * Creates a shield in the IoT4I system.
 * The connection information is taken from config.js
 */
var createShield = function(shield) {
  console.info("Using the /shield REST endpoint to create a new shield...");

  request({
    url: config.api + "/shield",
    method: "POST",
    json: true,
    jar: csrfRequests.cookieJar,
    headers: {
      "X-CSRF-Token": csrfRequests.csrfToken,
    },
    body: shield,
    auth: config.credentials
  },
  function (error, response, body) {
    if (error) {
      console.log("\tCreate shield failed. Reason is: " + error);
    }
    else if (response.statusCode != 200) {
      console.warn("\tCreate shield failed. Reason is: " + response.statusCode);
    }
    else {
      console.log("Succesfully created shield " + shield.name);
    }

    if (body) {
      console.dir(body);
    }
  });
};

// Create a sample shield.
var shieldliquiddetected = {
  "UUID": "26",	// must be unique
  "name": "demoshieldliquiddetected",
  "type": "Environmental Measurements",
  "description": "Demo detection if there is a water leak",
  "image": "shieldWater",
  "canBeDisabled": false,
  "hazardDetectionOnCloud": true,
  "jsCodeMethod": "demoShield",	// must exist as a function in the jscode for the shield code
  "actions": [
    "pushios"
  ],
  "potentialClaimAmount": "10",
  "shieldParameters": []
};

var shieldsensoropened = {
  "UUID": "27",	// must be unique
  "name": "shieldsensoropened",
  "type": "Environmental Measurements",
  "description": "Demo detection if there is a locked opened",
  "image": "shieldWater",
  "canBeDisabled": false,
  "hazardDetectionOnCloud": true,
  "jsCodeMethod": "demoShield",	// must exist as a function in the jscode for the shield code
  "actions": [
    "pushios"
  ],
  "potentialClaimAmount": "10",
  "shieldParameters": []
};

var shieldsmokedetected = {
  "UUID": "28",	// must be unique
  "name": "shieldsmokedetected",
  "type": "Environmental Measurements",
  "description": "Demo detection if there is a smoke",
  "image": "shieldWater",
  "canBeDisabled": false,
  "hazardDetectionOnCloud": true,
  "jsCodeMethod": "demoShield",	// must exist as a function in the jscode for the shield code
  "actions": [
    "pushios"
  ],
  "potentialClaimAmount": "10",
  "shieldParameters": []
};

var shieldmotion = {
  "UUID": "30",	// must be unique
  "name": "shieldMotion",
  "type": "Environmental Measurements Motion",
  "description": "Demo detection if there is motion in the room",
  "image": "shieldMotion",
  "canBeDisabled": false,
  "hazardDetectionOnCloud": true,
  "jsCodeMethod": "demoShield",	// must exist as a function in the jscode for the shield code
  "actions": [
    "pushios"
  ],
  "potentialClaimAmount": "10",
  "shieldParameters": []
};

var shieldtemperature = {
  "UUID": "31",	// must be unique
  "name": "shieldTemperature",
  "type": "Environmental Measurements Temperature",
  "description": "Demo detection if there is more than 20 C in the room",
  "image": "shieldTemperature",
  "canBeDisabled": false,
  "hazardDetectionOnCloud": true,
  "jsCodeMethod": "demoShield",	// must exist as a function in the jscode for the shield code
  "actions": [
    "pushios"
  ],
  "potentialClaimAmount": "10",
  "shieldParameters": []
};

csrfRequests.requestAPIWithCSRF(createShield, shieldtemperature);
//csrfRequests.requestAPIWithCSRF(createShield, shieldsensoropened);
//csrfRequests.requestAPIWithCSRF(createShield, shieldsmokedetected);
