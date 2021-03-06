/* Catalog search - main API to the other modules

   Copyright 2014 Commons Machinery http://commonsmachinery.se/

   Distributed under an AGPL_v3 license, please see LICENSE in the top dir.
*/

'use strict';

var db = require('./lib/db');
var hashDb = require('./lib/hashDb');
var lookup = require('./lib/lookup');

// External libs
var Promise = require('bluebird');

exports.createLookup = lookup.createLookup;
exports.lookupURI = lookup.lookupURI;
exports.lookupHash = lookup.lookupHash;

exports.init = function() {
    return Promise.all([
        db.connect(),
        hashDb.connect(),
    ]);
};
