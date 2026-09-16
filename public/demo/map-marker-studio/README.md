# Map Marker Studio

A lightweight browser-based U.S. map editor for creating, editing, searching, and sharing reusable pins. It began as a way for remote coworkers to see how geographically distributed the group was, and is now generalized for meetups, communities, trips, field work, service areas, and other shared places.

## Open it

1. Unzip the download.
2. Open `dist/index.html` in a modern browser.
3. Add pins individually or import a CSV. The map updates while you edit.

CSV columns must be named `name`, `location`, and optionally `team`. Locations can be a five-digit ZIP code, city and state, or a full state name. See `dist/sample-pins.csv` for an example.

The editor stores its draft in that browser. Use **Backup data** before moving computers or clearing browser data.

## View and save

- `dist/index.html` is the editable version with a live map.
- `dist/viewer.html` is the included view-only version.
- Both pages load `dist/map-data.js`. Use **Save shared data**, then replace that file with the downloaded copy to publish the editor's current records to both pages.
- **Create view-only map** downloads one self-contained `map-marker-studio-view-only.html` file containing the current pins. It can be opened or shared without the rest of the folder.

The map and map software are included in the download. Viewing saved markers works offline and does not require an account, API key, or paid service. An internet connection is needed only when converting a new ZIP code or city/state into map coordinates. Full-state locations work offline.

State boundaries are derived from the U.S. Census Bureau's 2025 cartographic boundary files. Alaska and Hawaii use separate inset maps so they cannot overlap the continental states.

This version supports far more than 50 displayed markers. The generated view-only map is interactive, searchable, and does not expose editing controls.
