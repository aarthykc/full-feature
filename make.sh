function usage(){
	echo "Usage: make.sh [--\\\"building=yes\\\"]"
}
bbox=$2
node lib/index.js $1 $bbox | tippecanoe -fo  file.mbtiles;

mapbox-upload srividya.fullFeature file.mbtiles;
