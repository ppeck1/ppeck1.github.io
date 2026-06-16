---
title: "PyPortal Titano Weather + Clock (CircuitPython Firmware)"
description: "A portrait-mode desk display that pulls live weather + time over Wi‑Fi and renders a legible UI on constrained hardware."
date: 2025-11
tags: ["embedded", "circuitpython", "firmware", "iot", "ui", "apis"]
status: active
github: "https://github.com/ppeck1/pyportal-titano-weather-clock"
image: "/assets/Images/projects/pyportal_titano_weather_clock_example.png"
imageAlt: "PyPortal Titano portrait weather and clock display running on hardware."
priority: 18
---

> **TL;DR:** A real, desk‑running firmware project (not a simulator) that integrates Wi‑Fi APIs, UI layout, and hardware constraints into a stable portrait display.

## What it is
A portrait‑mode weather + clock display built in **CircuitPython** for the **Adafruit PyPortal Titano (480×320)**. It refreshes time/date + weather over Wi‑Fi, renders a clean “at a glance” interface, and uses the onboard light sensor for **automatic brightness/dimming**.

## Why it exists
I wanted a **complete embedded project** that forced me to handle the real things that break on hardware: networking, refresh timing, UI constraints, storage limits, and readability. The Titano is *less documented* than smaller PyPortal examples, so this became a “learn by building” reference I could trust.

![PyPortal Titano Weather + Clock](/assets/Images/projects/pyportal_titano_weather_clock_example.png)


## Core features
- **Large digital clock** with smooth refresh
- **Date** (weekday + MM/DD)
- **Weather** (temperature + icon) via **Open‑Meteo API**
- **Portrait UI** optimized for **480×320**
- **Auto brightness** via onboard light sensor
- **Graceful fallback** when offline (keeps running even if the network doesn’t cooperate)

## Architecture (simple on purpose)
- `code.py` is the runtime entrypoint on the device (CIRCUITPY drive)
- `secrets.py` holds Wi‑Fi + timezone config (never committed with real credentials)
- bitmap icon sheet + pixel font keep the UI crisp and cheap to render

## Setup (fast start)
Prereq: your Titano shows up as the **CIRCUITPY** drive.

1) Install CircuitPython for PyPortal Titano  
2) Copy these to the board:
- `code.py`
- `weather_icons_32x32_9.bmp`
- `fonts/04b30-20.bdf`

3) Create `secrets.py` on the board:
```python
secrets = {
  "ssid": "YOUR_WIFI_NAME",
  "password": "YOUR_WIFI_PASSWORD",
  "timezone": "Region/City"
}
```

## What this proves
This is a compact but complete example of:
- **Firmware logic + state discipline** (the screen must reflect reality)
- **External API integration** under constrained conditions
- **UI design for constrained systems** (readable, low‑latency, minimal surprise)
- **Debugging on real hardware** (timing, network, rendering, storage)
- **Operational reliability** mindset: graceful failure beats brittle “perfect paths”

## Next iterations (roadmap)
- Touch settings menu
- Offline visual indicator
- Minimal UI mode
- Theme variations (high contrast / low‑light)

## Links
- GitHub repo: https://github.com/ppeck1/pyportal-titano-weather-clock
- (Optional) Related: Adafruit’s PyPortal Titano weather station guide (good baseline reference)

