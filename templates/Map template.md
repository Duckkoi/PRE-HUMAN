---
Map_height_y: 2048
Map_width_x: 4096
Scale_pixels: 268
Scale_pixels_range: 25
MapCalc 1: 0
mapCalc1: 0.09328358208955223
map_height_y: 2048
map_width_x: 4096
scale_pixels: 268
scale_pixels_range: 25
---

> [!NOTE]- Quick Calculator  
> Map Height in Pixels: `INPUT[number:map_height_y]`  
> Map Width in Pixels: `INPUT[number:map_width_x]`  
> lat: `VIEW[{map_height_y} / 2][math]`  
> long: `VIEW[{map_width_x} / 2][math]`  
> How Many Pixels In Scale: `INPUT[number:scale_pixels]`  
> How Many Units in Scale: `INPUT[number:scale_pixels_range]`  
> Scale: `VIEW[1/({scale_pixels}/{scale_pixels_range})][math:mapCalc1]`



```leaflet  
id: WorldMap ### Must be unique with no spaces  
image: [[Untitled (1).jpg]] ### Link to the map image file. Do not add a ! in front of the image  
bounds: [[0,0], [2048, 4096]] ### Size of the map in px Height_y, Width_x. Ignore 0,0  
height: 500px ### Size of the leaflet embed in px on your screen  
width: 100% ### Size of the leaflet embed in your note  
lat: 1024 ### To center the map, make this half of the map height.  
long: 2048 ### To center the map, make this half of the map width.  
minZoom: -2.5 ### Controls how far away from the map you can zoom out. Hover over the target icon to see the current level.  
maxZoom: 2 ### Controls how far towards the map you can zoom in. Hover over the target icon to see the current level.  
defaultZoom: -1 ### Sets the default zoom level when the map loads. Hover over the target icon to see the current level.  
zoomDelta: 0.4 ### Adjust how much the zoom changes when you zoom in or out.  
unit: mi ### The value displayed when measuring so you know what type of unit is being measure.  
scale: 0.09328358208955223 ### Real units/px (resolution) of your map  
recenter: false  
darkmode: false ### marker
```
