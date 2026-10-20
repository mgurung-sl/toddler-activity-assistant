# Little Moments

Little Moments is a simple toddler activity assistant for parents and caregivers. It suggests quick, low-prep activities using a local list of ideas and keeps everything private on the device.

## Why this project is simple

- No framework
- No build step
- No external dependencies
- One page, one stylesheet, one script file
- All features can be tested manually in a browser
- No server or backend is needed for the basic app to work

## What the app does

- lets parents choose filters like age, energy, time, and place
- shows one matching activity at a time
- offers extra ideas and quick picks when more matches are available
- lets users save favorite ideas in the browser
- keeps data in local storage instead of sending it anywhere

## Project files

- `index.html` contains the page structure and sections for filters, result card, saved ideas, and safety notes.
- `styles.css` contains the colorful, mobile-friendly styling and compact icon tags.
- `app.js` contains the activity data, filtering logic, favorites, quick picks, and result rendering.
- `MANUAL_TESTS.md` lists quick browser checks for validating the app.

## Run locally

You can open `index.html` directly in a browser, or serve the folder locally:

```bash
cd toddler-activity-assistant
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Privacy and safety

- No accounts
- No analytics
- No cookies added by the app
- No personal details requested about children
- Every activity includes a short safety reminder
- Favorite ideas are saved only in the browser using local storage

## Beginner notes

If you want to change the activity ideas, start in `app.js` and edit the `activities` array near the top of the file. You can also change the visual style in `styles.css` if you want a different theme or layout.