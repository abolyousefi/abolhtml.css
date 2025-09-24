const map = L.map("map-container", {
    zoomControl: false,
    attributionControl: false,
}).setView([36.5755139, 53.0566417], 15);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// تعریف آیکون قرمز
var redIcon = new L.Icon({
    iconUrl:
        "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
    shadowUrl: "https://unpkg.com/leaflet/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

L.marker([36.5755139, 53.0566417], { icon: redIcon }).addTo(map);
