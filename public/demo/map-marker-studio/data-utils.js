(() => {
  "use strict";
  const STATE_CENTERS = {
    alabama:[32.806671,-86.791130],alaska:[61.370716,-152.404419],arizona:[33.729759,-111.431221],arkansas:[34.969704,-92.373123],california:[36.116203,-119.681564],colorado:[39.059811,-105.311104],connecticut:[41.597782,-72.755371],delaware:[39.318523,-75.507141],florida:[27.766279,-81.686783],georgia:[33.040619,-83.643074],hawaii:[21.094318,-157.498337],idaho:[44.240459,-114.478828],illinois:[40.349457,-88.986137],indiana:[39.849426,-86.258278],iowa:[42.011539,-93.210526],kansas:[38.526600,-96.726486],kentucky:[37.668140,-84.670067],louisiana:[31.169546,-91.867805],maine:[44.693947,-69.381927],maryland:[39.063946,-76.802101],massachusetts:[42.230171,-71.530106],michigan:[43.326618,-84.536095],minnesota:[45.694454,-93.900192],mississippi:[32.741646,-89.678696],missouri:[38.456085,-92.288368],montana:[46.921925,-110.454353],nebraska:[41.125370,-98.268082],nevada:[38.313515,-117.055374],"new hampshire":[43.452492,-71.563896],"new jersey":[40.298904,-74.521011],"new mexico":[34.840515,-106.248482],"new york":[42.165726,-74.948051],"north carolina":[35.630066,-79.806419],"north dakota":[47.528912,-99.784012],ohio:[40.388783,-82.764915],oklahoma:[35.565342,-96.928917],oregon:[44.572021,-122.070938],pennsylvania:[40.590752,-77.209755],"rhode island":[41.680893,-71.511780],"south carolina":[33.856892,-80.945007],"south dakota":[44.299782,-99.438828],tennessee:[35.747845,-86.692345],texas:[31.054487,-97.563461],utah:[40.150032,-111.862434],vermont:[44.045876,-72.710686],virginia:[37.769337,-78.169968],washington:[47.400902,-121.490494],"west virginia":[38.491226,-80.954453],wisconsin:[44.268543,-89.616508],wyoming:[42.755966,-107.302490],"district of columbia":[38.9072,-77.0369]
  };
  const ABBR = {al:"alabama",ak:"alaska",az:"arizona",ar:"arkansas",ca:"california",co:"colorado",ct:"connecticut",de:"delaware",fl:"florida",ga:"georgia",hi:"hawaii",id:"idaho",il:"illinois",in:"indiana",ia:"iowa",ks:"kansas",ky:"kentucky",la:"louisiana",me:"maine",md:"maryland",ma:"massachusetts",mi:"michigan",mn:"minnesota",ms:"mississippi",mo:"missouri",mt:"montana",ne:"nebraska",nv:"nevada",nh:"new hampshire",nj:"new jersey",nm:"new mexico",ny:"new york",nc:"north carolina",nd:"north dakota",oh:"ohio",ok:"oklahoma",or:"oregon",pa:"pennsylvania",ri:"rhode island",sc:"south carolina",sd:"south dakota",tn:"tennessee",tx:"texas",ut:"utah",vt:"vermont",va:"virginia",wa:"washington",wv:"west virginia",wi:"wisconsin",wy:"wyoming",dc:"district of columbia"};

  const validRecord = item => item && typeof item.name === "string" && typeof item.location === "string" && Number.isFinite(item.lat) && Number.isFinite(item.lng);
  const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

  async function geocode(rawLocation) {
    const location = rawLocation.trim();
    const stateKey = location.toLowerCase().replace(/\./g, "");
    const state = STATE_CENTERS[ABBR[stateKey] || stateKey];
    if (state) return { lat: state[0], lng: state[1] };
    if (/^\d{5}(?:-\d{4})?$/.test(location)) {
      const response = await fetch(`https://api.zippopotam.us/us/${location.slice(0,5)}`);
      if (!response.ok) throw new Error("That ZIP code could not be found.");
      const data = await response.json();
      return { lat: Number(data.places[0].latitude), lng: Number(data.places[0].longitude) };
    }
    let parts = location.split(",").map(part => part.trim()).filter(Boolean);
    if (parts.length === 1) {
      const match = location.match(/^(.+?)\s+([a-z]{2})$/i);
      if (match) parts = [match[1], match[2]];
    }
    if (parts.length === 2) {
      const stateInput = parts[1].toLowerCase().replace(/\./g, "");
      const stateName = ABBR[stateInput] || stateInput;
      const code = Object.keys(ABBR).find(key => ABBR[key] === stateName);
      if (code) {
        const response = await fetch(`https://api.zippopotam.us/us/${code}/${encodeURIComponent(parts[0])}`);
        if (response.ok) {
          const data = await response.json();
          if (data.places?.[0]) return { lat: Number(data.places[0].latitude), lng: Number(data.places[0].longitude) };
        }
      }
    }
    throw new Error("Location not found. Use a ZIP code or city and state, such as Columbus, OH.");
  }

  function parseCSV(text) {
    const rows = []; let row = [], field = "", quoted = false;
    for (let i = 0; i < text.length; i++) {
      const char = text[i], next = text[i + 1];
      if (char === '"' && quoted && next === '"') { field += '"'; i++; }
      else if (char === '"') quoted = !quoted;
      else if (char === "," && !quoted) { row.push(field); field = ""; }
      else if ((char === "\n" || char === "\r") && !quoted) {
        if (char === "\r" && next === "\n") i++;
        row.push(field); if (row.some(value => value.trim())) rows.push(row); row = []; field = "";
      } else field += char;
    }
    row.push(field); if (row.some(value => value.trim())) rows.push(row);
    if (rows.length < 2) return [];
    const headers = rows.shift().map(value => value.trim().toLowerCase());
    const ni = headers.indexOf("name"), li = headers.indexOf("location"), ti = headers.indexOf("team");
    if (ni < 0 || li < 0) throw new Error('CSV needs "name" and "location" columns.');
    return rows.map(cols => ({name:cols[ni]||"",location:cols[li]||"",team:ti>=0?cols[ti]||"":""})).filter(item => item.name.trim() && item.location.trim());
  }

  function download(filename, content, type = "text/plain") {
    const link = document.createElement("a");
    link.href = URL.createObjectURL(new Blob([content], { type }));
    link.download = filename; link.click();
    setTimeout(() => URL.revokeObjectURL(link.href), 1000);
  }

  window.CoworkerData = { validRecord, geocode, parseCSV, download, wait };
})();
