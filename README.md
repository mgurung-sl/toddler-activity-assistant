# Little Moments

Little Moments is a simple toddler activity assistant for parents and caregivers. It suggests quick, low-prep activities using a small local list of ideas and does not collect personal information.

## Why this project is simple

- No framework
- No build step
- No external dependencies
- One page, one stylesheet, one script file
- All features can be tested manually in a browser

## Project files

- `index.html` contains the page structure.
- `styles.css` contains the mobile-friendly styling.
- `app.js` contains the activity data and the filter logic.
- `CONSTITUTION.md` lists the project rules.
- `MANUAL_TESTS.md` lists quick manual checks.

## Run locally

You can open `index.html` directly in a browser, or serve the folder locally:

```bash
cd /Users/manisha.gurung/Projects/toddler-activity-assistant
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Privacy and safety

- No accounts
- No analytics
- No cookies added by the app
- No personal details requested about children
- Every activity includes a short safety reminder

## Beginner notes

If you want to change the activity ideas, start in `app.js` and edit the `activities` array near the top of the file.