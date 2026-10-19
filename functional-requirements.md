# Functional Requirements

## Overview
Little Moments is a simple web app that helps parents and caregivers quickly find a toddler activity that fits their situation. The app should stay lightweight, mobile-friendly, and privacy-safe.

## Primary goal
The app should suggest one low-prep activity based on a few simple filters such as age, energy level, time available, and whether the activity should happen indoors or outdoors.

## User roles
This app is intended for:
- parents
- caregivers
- grandparents
- anyone supervising a toddler at home

## Core functional requirements

### 1. Activity selection
The app shall allow the user to select filters for:
- age range
- energy level
- time available
- space type (indoors, outdoors, or either)

### 2. Matching logic
The app shall filter the activity list based on the selected criteria and return only activities that match all chosen filters where possible.

### 3. Random recommendation
The app shall randomly choose one activity from the matching list and show it to the user.

### 4. Activity details
Each recommended activity shall display:
- activity name
- short description
- setup items
- step-by-step instructions
- safety notes

### 5. Empty state
If no activity matches the selected filters, the app shall display a friendly message explaining that no exact match was found and suggest trying different filters.

### 6. Surprise feature
The app shall include a "Surprise me" action that suggests a random activity from the full list without requiring filter selection.

### 7. Privacy
The app shall not require account creation, sign-in, or personal child information.

### 8. Safety support
The app shall show safety information for each activity and clearly remind users that adult supervision is required.

### 9. Mobile usability
The app shall be usable on mobile devices and keep controls readable and easy to tap.

### 10. Browser-only operation
The app shall function as a static web app without a backend, server-side database, or external service dependency.

## Non-functional requirements

### Simplicity
The system should remain easy to understand and easy to maintain without a large setup process.

### Accessibility
The app should support basic keyboard and screen-reader usability as much as practical for a small static interface.

### Maintainability
The activity data should be easy to add to, remove from, or edit without major refactoring.

## Assumptions
- Activity ideas are intended for toddlers in early childhood.
- The app is not a medical or developmental assessment tool.
- Caregivers are expected to adapt activities to their environment and child needs.

## Acceptance criteria
The app is considered successful when:
- a user can choose filters and receive a matching activity
- the result includes setup, steps, and safety notes
- the app works without any login flow
- the app remains easy to run locally in a browser
- the app does not collect or store personal details
