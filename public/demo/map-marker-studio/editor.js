(() => {
  "use strict";
  const STORAGE_KEY = "map-marker-studio-v2-draft";
  const $ = selector => document.querySelector(selector);
  const shared = (window.COWORKER_MAP_DATA || []).filter(CoworkerData.validRecord);

  function loadDraft() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      if (Array.isArray(saved)) return saved.filter(CoworkerData.validRecord);
      const legacy = JSON.parse(localStorage.getItem("map-marker-studio-v1") || "null");
      if (Array.isArray(legacy)) return legacy.filter(CoworkerData.validRecord);
    } catch { /* use shared data */ }
    return shared.map(record => ({ ...record }));
  }

  let records = loadDraft();
  let editingId = null;
  const mapApp = MapMarkerMap.create({ onCount: value => { $("#pin-count").textContent = value; } });

  function setStatus(target, message, kind = "") {
    target.textContent = message;
    target.className = `form-status ${kind}`;
  }

  function persist() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
    render();
  }

  function render() {
    mapApp.render(records, $("#search").value);
    $("#empty-state").hidden = records.length > 0;
    $("#table-count").textContent = `${records.length} ${records.length === 1 ? "record" : "records"}`;
    $("#table-empty").hidden = records.length > 0;
    $("#pin-rows").innerHTML = records.map(record => `<tr>
      <td><strong>${MapMarkerMap.safeText(record.name)}</strong></td>
      <td>${MapMarkerMap.safeText(record.location)}</td>
      <td>${MapMarkerMap.safeText(record.team || "—")}</td>
      <td><button class="edit-row" type="button" data-action="edit" data-id="${MapMarkerMap.safeText(record.id)}">Edit</button><button class="delete-row" type="button" data-action="remove" data-id="${MapMarkerMap.safeText(record.id)}">Remove</button></td>
    </tr>`).join("");
  }

  async function addRecord(item) {
    if (!item.name.trim() || !item.location.trim()) throw new Error("Name and location are required.");
    const coords = await CoworkerData.geocode(item.location);
    records.push({
      id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
      name: item.name.trim(), location: item.location.trim(), team: (item.team || "").trim(), ...coords
    });
  }

  async function updateRecord(item) {
    const index = records.findIndex(record => record.id === editingId);
    if (index < 0) throw new Error("That marker is no longer available.");
    const current = records[index];
    const coords = current.location === item.location.trim() ? {lat:current.lat,lng:current.lng} : await CoworkerData.geocode(item.location);
    records[index] = {...current,name:item.name.trim(),location:item.location.trim(),team:(item.team||"").trim(),...coords};
  }

  function endEdit() {
    editingId = null;
    $("#pin-form").reset();
    $("#add-button").textContent = "Add marker";
    $("#cancel-edit").hidden = true;
  }

  $("#pin-form").addEventListener("submit", async event => {
    event.preventDefault();
    const button = $("#add-button"); button.disabled = true; button.textContent = "Finding location…";
    setStatus($("#form-status"), "");
    try {
      const item = {name:$("#name").value,location:$("#location").value,team:$("#team").value};
      if (editingId) await updateRecord(item); else await addRecord(item);
      const message = editingId ? "Marker updated." : "Marker added.";
      persist(); endEdit(); setStatus($("#form-status"), message, "success");
    } catch (error) { setStatus($("#form-status"), error.message || "Marker could not be added.", "error"); }
    finally { button.disabled = false; button.textContent = editingId ? "Save changes" : "Add marker"; }
  });

  $("#pin-rows").addEventListener("click", event => {
    const button = event.target.closest("[data-id]"); if (!button) return;
    const record = records.find(item => item.id === button.dataset.id); if (!record) return;
    if (button.dataset.action === "edit") {
      editingId = record.id;
      $("#name").value = record.name; $("#location").value = record.location; $("#team").value = record.team || "";
      $("#add-button").textContent = "Save changes"; $("#cancel-edit").hidden = false; $("#name").focus();
    } else {
      records = records.filter(item => item.id !== record.id); if (editingId === record.id) endEdit(); persist();
    }
  });

  $("#cancel-edit").addEventListener("click", () => { endEdit(); setStatus($("#form-status"), ""); });

  $("#search").addEventListener("input", render);

  $("#clear-all").addEventListener("click", () => {
    if (!records.length || !confirm(`Remove all ${records.length} records from this draft?`)) return;
    records = []; persist();
  });

  $("#use-shared").addEventListener("click", () => {
    if (!confirm("Replace the current draft with the records from the shared map data?")) return;
    records = shared.map(record => ({ ...record })); persist();
    setStatus($("#save-status"), "Draft reset to the shared data file.", "success");
  });

  $("#csv-input").addEventListener("change", async event => {
    const file = event.target.files[0]; if (!file) return;
    const status = $("#import-status");
    try {
      const incoming = CoworkerData.parseCSV(await file.text());
      if (!incoming.length) throw new Error("No valid rows were found.");
      let added = 0, failed = 0;
      for (const item of incoming) {
        setStatus(status, `Placing ${added + failed + 1} of ${incoming.length}…`);
        try { await addRecord(item); added++; } catch { failed++; }
        await CoworkerData.wait(1050);
      }
      persist(); setStatus(status, `${added} added${failed ? `; ${failed} could not be located` : ""}.`, failed ? "error" : "success");
    } catch (error) { setStatus(status, error.message || "CSV could not be imported.", "error"); }
    event.target.value = "";
  });

  const csvCell = value => `"${String(value || "").replace(/"/g, '""')}"`;
  $("#download-csv").addEventListener("click", () => CoworkerData.download("map-pins.csv", ["name,location,team", ...records.map(r => [r.name,r.location,r.team].map(csvCell).join(","))].join("\n"), "text/csv"));
  $("#backup-json").addEventListener("click", () => CoworkerData.download("map-marker-studio-backup.json", JSON.stringify({version:2,records}, null, 2), "application/json"));

  $("#json-input").addEventListener("change", async event => {
    const file = event.target.files[0]; if (!file) return;
    try {
      const data = JSON.parse(await file.text()); const incoming = Array.isArray(data) ? data : data.records;
      if (!Array.isArray(incoming) || !incoming.every(CoworkerData.validRecord)) throw new Error("This is not a valid map backup.");
      records = incoming.map(record => ({...record,id:record.id || `${Date.now()}-${Math.random()}`})); persist();
      setStatus($("#import-status"), `${records.length} records restored.`, "success");
    } catch (error) { setStatus($("#import-status"), error.message || "Backup could not be restored.", "error"); }
    event.target.value = "";
  });

  $("#save-shared").addEventListener("click", () => {
    const data = JSON.stringify(records).replace(/</g, "\\u003c");
    CoworkerData.download("map-data.js", `window.COWORKER_MAP_DATA = ${data};\n`, "text/javascript");
    setStatus($("#save-status"), "Shared data file created. Replace dist/map-data.js with this download.", "success");
  });

  function standaloneHtml() {
    const bundle = window.COWORKER_EXPORT_BUNDLE;
    if (!bundle) throw new Error("The export bundle is missing.");
    const data = JSON.stringify(records).replace(/</g, "\\u003c");
    const title = "Map Marker Studio";
    return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title><style>${bundle.leafletCss}\n${bundle.appCss}</style></head><body class="viewer-page"><header class="topbar"><div><p class="eyebrow">TEAM DIRECTORY</p><h1>${title}</h1></div></header><main class="viewer-main"><section class="map-panel viewer-panel"><div class="map-toolbar"><div><h2>Where we are</h2><p><span id="employee-count">0</span> coworkers · Hover over a marker to see names</p></div><label class="search-field"><span class="sr-only">Search coworkers</span><input id="search" type="search" placeholder="Search name or location"></label></div><div class="map-stage"><div id="map"></div><div class="inset-stack"><div class="inset-frame alaska"><span>Alaska</span><div id="alaska-map"></div></div><div class="inset-frame hawaii"><span>Hawaii</span><div id="hawaii-map"></div></div></div><div id="empty-state" class="empty-state" hidden><strong>No markers yet</strong></div></div></section></main><footer>State boundaries: U.S. Census Bureau.</footer><script>${bundle.leafletJs}<\/script><script>${bundle.statesJs}<\/script><script>window.COWORKER_MAP_DATA=${data};<\/script><script>${bundle.dataUtilsJs}<\/script><script>${bundle.mapCoreJs}<\/script><script>${bundle.viewerJs}<\/script></body></html>`;
  }

  $("#create-viewer").addEventListener("click", () => {
    try {
      CoworkerData.download("map-marker-studio-view-only.html", standaloneHtml(), "text/html");
      setStatus($("#save-status"), "Standalone view-only map created.", "success");
    } catch (error) { setStatus($("#save-status"), error.message, "error"); }
  });

  window.addEventListener("resize", mapApp.invalidate);
  render();
})();
