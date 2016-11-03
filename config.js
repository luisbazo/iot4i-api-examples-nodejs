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

/**
 * The configuration for the API Example.
 * <instanceid> -  replace in the API and Aggregator URLs with the value from the IoT4I service URL
 * <password> - read from the IoT4I Service Credentials page
 */
var config = module.exports = {
	api: "https://iot4insurance-api-e52019b4-5199-4eb9-8217-8e5727890e4a.mybluemix.net", // the URL must not end with /
	aggregator: "https://iot4i-aggregator-e52019b4-5199-4eb9-8217-8e5727890e4a.mybluemix.net", // the URL must not end with /
	credentials : {
		user: "Admin",
		pass: "4b11840b-4545-4e36-9469-26228398246d"
	}
};
