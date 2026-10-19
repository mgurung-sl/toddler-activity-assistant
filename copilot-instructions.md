# Copilot Instructions for Little Moments

## Project purpose
This project is a small, privacy-friendly web app for parents and caregivers to find quick toddler activities. The app should stay lightweight, easy to understand, and easy to test by opening a single page in a browser.

## Tech stack
- Plain HTML
- Plain CSS
- Plain JavaScript
- No framework
- No build step
- No backend
- No user accounts or tracking

## Core principles
- Keep the app simple and easy to maintain.
- Prefer small, readable solutions over complex architecture.
- Avoid adding frameworks, packages, or build tooling unless clearly required.
- Keep changes focused on the app’s purpose: helping caregivers find safe, low-prep activities.
- Preserve the privacy-first approach: do not collect names, birthdays, photos, or personal child data.

## Design expectations
- Mobile-friendly layout.
- Clear and calm visual style.
- Simple forms and easy-to-read labels.
- Helpful text that supports busy caregivers, not technical jargon.
- Keep the interface friendly and approachable.

## Safety expectations
- Do not suggest risky activities without clear safety reminders.
- Keep safety notes visible when showing an activity.
- Be careful with content involving small objects, water, walking, or household items.
- Support supervision rather than replacing it.

## Coding style
- Prefer simple, direct JavaScript.
- Keep functions small and readable.
- Use clear variable names.
- Avoid over-engineering or introducing unnecessary abstractions.
- Keep HTML, CSS, and JavaScript separated as they already are in this project.

## Content expectations
- Activity ideas should be low-prep and realistic for home use.
- Each idea should be age-appropriate and easy to understand.
- Keep explanations short and practical.
- Focus on everyday scenarios in family routines.

## When proposing improvements
- Prefer small feature additions that are easy to test manually.
- Avoid backend dependencies unless there is a very strong reason.
- Favor browser-only features such as local filtering, localStorage, or UI polish.
- Keep the app beginner-friendly and approachable.

## Do not do
- Do not add user accounts, analytics, or tracking.
- Do not add heavy frameworks or complex tooling.
- Do not create a backend server for a simple static app.
- Do not overcomplicate the activity data model.
- Do not add personal data collection or child-identifying fields.

## Default approach
When making a change, assume the project should stay lightweight, static, and easy to run locally. Prefer improvements that help parents quickly find an activity without adding complexity or privacy risk.
