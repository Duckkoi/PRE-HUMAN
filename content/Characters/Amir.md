<!-- Leaflet CSS -->
<link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />

<!-- Map container -->
<div id="worldMap" style="height:500px; width:100%; border:1px solid #aaa;"></div>

<!-- Leaflet JS -->
<script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
<script>
  // Map bounds [top-left, bottom-right] in pixels
  Var bounds = [[0, 0], [2048, 4096]]; // [y, x]

  // Create map
  var map = L.map ('worldMap', {
    crs: L.CRS. Simple,
    MinZoom: -2.5,
    MaxZoom: 2,
    Zoom: -1,
    Center: [1024, 2048], // lat, lng
  });

  // Add image overlay
  var image = L.imageOverlay ('content/assets/Untitled (1).Jpg', bounds). AddTo (map);

  // Fit the map to the image bounds
  Map.FitBounds (bounds);

  // Optional: tweak zoom delta
  Map. Options. ZoomDelta = 0.4;
</script>

Test 2