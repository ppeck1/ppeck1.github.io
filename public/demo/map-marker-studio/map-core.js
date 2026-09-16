(() => {
  "use strict";

  const safeText = value => String(value ?? "").replace(/[&<>'"]/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[char]));

  function pinIcon(count) {
    const label = count > 1 ? String(count) : "";
    return L.divIcon({
      className: "pin-icon-wrap",
      html: `<span class="pin-marker"><span>${label}</span></span>`,
      iconSize: [32, 40], iconAnchor: [16, 38], tooltipAnchor: [0, -34], popupAnchor: [0, -34]
    });
  }

  function regionFor(record) {
    if (record.lat > 50 && record.lng < -129) return "alaska";
    if (record.lat < 25.5 && record.lng < -150) return "hawaii";
    return "continental";
  }

  function stateStyle() {
    return { color: "#8fa2b2", weight: 1.1, fillColor: "#e7eef3", fillOpacity: 1 };
  }

  function addStates(map, data) {
    return L.geoJSON(data, {
      style: stateStyle,
      onEachFeature: (feature, layer) => {
        layer.bindTooltip(`${feature.properties.name} (${feature.properties.code})`, { sticky: true, className: "state-tooltip" });
        layer.on({
          mouseover: () => layer.setStyle({ fillColor: "#d6e3ec", weight: 1.6 }),
          mouseout: () => layer.setStyle(stateStyle())
        });
      }
    }).addTo(map);
  }

  function makeMap(id, data, options = {}) {
    const map = L.map(id, {
      zoomControl: options.zoomControl !== false,
      attributionControl: options.attribution !== false,
      dragging: true,
      scrollWheelZoom: options.scrollWheelZoom !== false,
      doubleClickZoom: true,
      boxZoom: true,
      keyboard: true,
      minZoom: options.minZoom || 2,
      maxZoom: 9,
      zoomSnap: .25
    });
    if (map.attributionControl) {
      map.attributionControl.setPrefix(false);
      map.attributionControl.addAttribution("Boundaries: U.S. Census Bureau");
    }
    const states = addStates(map, data);
    map.fitBounds(states.getBounds(), { padding: options.padding || [12, 12] });
    return { map, markers: L.layerGroup().addTo(map) };
  }

  function grouped(records) {
    const groups = new Map();
    records.forEach(record => {
      const key = `${regionFor(record)}:${record.lat.toFixed(4)},${record.lng.toFixed(4)}`;
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(record);
    });
    return [...groups.values()];
  }

  function create(options = {}) {
    if (!window.L || !window.US_STATES_GEOJSON) throw new Error("Map files are incomplete.");
    const maps = {
      continental: makeMap(options.mainId || "map", US_STATES_GEOJSON.continental, { minZoom: 3, padding: [16, 16] }),
      alaska: makeMap(options.alaskaId || "alaska-map", US_STATES_GEOJSON.alaska, { zoomControl: false, attribution: false, scrollWheelZoom: false, padding: [6, 6] }),
      hawaii: makeMap(options.hawaiiId || "hawaii-map", US_STATES_GEOJSON.hawaii, { zoomControl: false, attribution: false, scrollWheelZoom: false, padding: [6, 6] })
    };

    function render(records, query = "") {
      Object.values(maps).forEach(entry => entry.markers.clearLayers());
      const term = query.trim().toLowerCase();
      const filtered = records.filter(record => !term || `${record.name} ${record.location} ${record.team || ""}`.toLowerCase().includes(term));
      grouped(filtered).forEach(group => {
        const first = group[0];
        const target = maps[regionFor(first)];
        const names = group.map(record => `<div>${safeText(record.name)}${record.team ? `<span class="tooltip-team">${safeText(record.team)}</span>` : ""}</div>`).join("");
        L.marker([first.lat, first.lng], { icon: pinIcon(group.length) })
          .bindTooltip(names, { direction: "top", className: "pin-tooltip", opacity: 1 })
          .bindPopup(`<strong>${safeText(first.location)}</strong><div>${names}</div>`)
          .addTo(target.markers);
      });
      if (options.onCount) options.onCount(filtered.length);
      return filtered.length;
    }

    function invalidate() {
      Object.values(maps).forEach(entry => entry.map.invalidateSize());
    }

    return { render, invalidate };
  }

  window.MapMarkerMap = { create, safeText };
})();

