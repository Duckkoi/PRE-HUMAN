<!-- Leaflet CSS -->
<link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />

<!-- Map container -->
<div id="worldMap" style="height:500px; width:100%;"></div>

<!-- Leaflet JS -->
<script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
<script>
  // Create map
  var map = L.map ('worldMap', {
    crs: L.CRS. Simple,   // simple coordinate system for image maps
    MinZoom: -2.5,
    MaxZoom: 2,
    Zoom: -1
  });

  // Map bounds [top-left, bottom-right] in pixels
  Var bounds = [[0,0], [2048, 4096]];

  // Add image overlay
  L.imageOverlay ('content/assets/Untitled (1). Jpg', bounds). AddTo (map);

  // Center map
  Map.SetView ([1024, 2048], -1); // lat, long, defaultZoom

  // Optional: add zoom control
  Map. ZoomDelta = 0.4;
</script>

Test