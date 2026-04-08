# COMP3133 Lab Test 2a - SpaceX Mission App

## Student Information
- Name: Heemal Syangbo
- Student ID: 101532464
- Course: COMP3133

## App Description
This Angular application consumes the public SpaceX REST API and displays mission data.  
It includes a mission list, launch year filtering, and mission details pages.

## Features Implemented
- Angular standalone app with routing
- API integration with Angular `HttpClientModule`
- `mission-list` component for all launches
- `mission-filter` component with year filtering
- `mission-details` component for selected mission details
- TypeScript interface model for API data structure
- Service layer (`SpacexApiService`) for API requests
- Template control flow: `@for`, `@if`, `@switch`
- Angular Signals for local state (`missions`, `loading`, `selectedYear`)
- Forms support using `FormsModule` and `ReactiveFormsModule`
- Basic UI design with Angular Material

## Technologies
- Angular 21
- TypeScript
- Angular Material
- SpaceX REST API: [https://api.spacexdata.com/v3/launches](https://api.spacexdata.com/v3/launches)

## How to Run Locally
1. Open terminal in project folder:
   - `cd spacex-labtest2`
2. Install dependencies:
   - `npm install`
3. Start development server:
   - `npm start`
4. Open browser:
   - `http://localhost:4200`

## Build
- Run production build:
  - `npm run build`

## Screenshots (Add Before Submission)
Add screenshots to a folder (example: `screenshots/`) and reference them here:
- Running application
- Mission list page
- Filtered mission list by year
- Mission details page
- Code screenshots (components, service, API call)

Example markdown:
```md
![Mission List](screenshots/mission-list.png)
![Mission Details](screenshots/mission-details.png)
```

## Deployment
Deploy using Vercel or Render and add your live URL here before submission.

