'use strict';
var turf = require('turf');

module.exports = function(data, tile, writeData, done) {
	var tag = global.mapOptions.key;
	var s = tag.split('=');
	var keys = s[0];
	var value = s[1];
	var layer = data.osm.osm;

	var result = layer.features.filter(function(val) {
		if(val.properties[keys]  && val.properties[keys] === value){
			return true;
		}
	});

	if (result.length > 0) {
		var fc = turf.featurecollection(result);
		writeData(JSON.stringify(fc) + '\n');
	}
	done(null, null);
};
