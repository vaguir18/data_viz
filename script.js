
// Add title
var title = L.control({position: 'topright'});
title.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info');
    div.innerHTML = '<h4>Global Arms Trade Network, 2000-2023</h4>';
    return div;
};
title.addTo(map);

// Add legend
var legend = L.control({position: 'bottomleft'});
legend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend');
    div.innerHTML = '<h4>Legend</h4>' +
        '<i style="background: red"></i> Country (Node)<br>' +
        '<i style="background: blue"></i> Arms Transfer (Edge)<br>' +
        '<i style="background: linear-gradient(to right, blue, red)"></i> Transfer Intensity';
    return div;
};
legend.addTo(map);

// Add footer
var footer = L.control({position: 'bottomleft'});
footer.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'footer');
    div.innerHTML = 'This is an extract from the SIPRI Arms Transfers Database. The extract includes all arms trade made between 2000 and 2023 worldwide. The original Dataset did not have Geolocations. These have been added later by the author.<br>' +
        '<a href="https://medium.com/@geometrein/the-deadly-silk-road-5d18b82301d9" target="_blank">Original Source</a> | ' +
        '<a href="https://www.kaggle.com/datasets/geometrein/global-arms-transfer?resource=download" target="_blank">Downloaded from Kaggle</a>';
    return div;
};
footer.addTo(map);
