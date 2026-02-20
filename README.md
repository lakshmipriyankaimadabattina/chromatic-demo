# Chromatic Visual Regression Testing Demo

A demonstration project for **CS Masters — Software DevOps Methods and Tools**.

## What This Project Does

This project demonstrates how **Chromatic** integrates with **Storybook** to provide
automated visual regression testing in a CI/CD pipeline.

Every time code is pushed, Chromatic automatically:
1. Builds all Storybook components
2. Takes pixel-perfect screenshots
3. Compares them with the approved baseline
4. Flags any visual differences for review

## Tech Stack

- React (Create React App)
- Storybook 7
- Chromatic (Visual Regression Testing)
- GitHub Actions (CI/CD)

## How to Run Locally
```bash
npm install
npm run storybook       # Opens Storybook on http://localhost:6006
```

## How to Run Chromatic
```bash
npx chromatic --project-token=<your-token>
```

## Live Chromatic Dashboard

[View Builds on Chromatic](https://www.chromatic.com/setup?appId=6996355c965ac50e84faf88f)

## Project Structure
```
src/
  stories/
    Button.jsx          # Button component
    Button.stories.jsx  # Button stories for Storybook
```
