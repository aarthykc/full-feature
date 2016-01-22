var argv = require("minimist")(process.argv.slice(2)),
    path = require("path"),
    tileReduce = require("tile-reduce");

var tag = ((argv._.length > 0) ? argv._[0] : process.env.tag);
var bbox = ((argv._.length > 0) ? argv._[1] : process.env.bbox);
var array = JSON.parse("[" + bbox+ "]");

tileReduce({
    bbox: array,
    zoom: 12,
    map: path.join(__dirname, '/full.feature.magic.js'),
    sources: [{name: 'osm', mbtiles: path.join(__dirname, '../../../aarthychandrasekhar/data/qa-tiles/india.mbtiles')}],
    mapOptions: { key : tag }
})
.on('reduce', function(num) {
})
.on('end', function() {
});
