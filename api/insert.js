//'use strict';
var AWS = require("aws-sdk");
var docClient = new AWS.DynamoDB.DocumentClient({endpoint: 'http://localhost:8000'});


/**
 * Copyright 2010-2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * This file is licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License. A copy of
 * the License is located at
 *
 * http://aws.amazon.com/apache2.0/
 *
 * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
*/
var AWS = require("aws-sdk");

AWS.config.update({
    region: "us-west-2",
    endpoint: "http://localhost:8000"
  });

var docClient = new AWS.DynamoDB.DocumentClient({endpoint: 'http://localhost:8000'});


var params = {
    RequestItems: {
        Market: [
            { 
                PutRequest: {
                    Item: {     
                        itemID: "1",
                        itemName: "Panela",
                        itemCount: "2",
                        itemMeasureUnity: "Libra",
                        itemPrice: "2K"
                    }
                }
            },
            { 
                PutRequest: {
                    Item: {     
                        itemID: "2",
                        itemName: "Yuca",
                        itemCount: "5",
                        itemMeasureUnity: "Kilo",
                        itemPrice: "1K"
                    }
                }
            },
            { 
                PutRequest: {
                    Item: {     
                        itemID: "3",
                        itemName: "Leche",
                        itemCount: "5",
                        itemMeasureUnity: "Litro",
                        itemPrice: "2K"
                    }
                }
            }
        ],
    },
    ReturnConsumedCapacity: 'NONE', 
    ReturnItemCollectionMetrics: 'NONE', 
};

console.log("Adding a new item...");
docClient.batchWrite(params, function(err, data) {
    if (err) {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Added item:", JSON.stringify(data, null, 2));
    }
});
/*
docClient.batchWrite(params, function(err, data) {
    if (err) ppJson(err); 
    else ppJson(data); 
});*/