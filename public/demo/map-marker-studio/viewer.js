(() => {
  "use strict";
  const records = (window.COWORKER_MAP_DATA || []).filter(item => window.CoworkerData ? CoworkerData.validRecord(item) : item && Number.isFinite(item.lat) && Number.isFinite(item.lng));
  const count = document.querySelector("#pin-count");
  const empty = document.querySelector("#empty-state");
  const app = MapMarkerMap.create({ onCount: value => { if (count) count.textContent = value; } });
  app.render(records);
  if (empty) empty.hidden = records.length > 0;
  document.querySelector("#search")?.addEventListener("input", event => app.render(records, event.target.value));
  window.addEventListener("resize", app.invalidate);
})();
