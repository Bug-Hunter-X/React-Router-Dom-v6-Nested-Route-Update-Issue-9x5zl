# React Router Dom v6 Nested Route Update Issue

This repository demonstrates a bug in React Router Dom v6 related to nested routes and component updates.  When navigating between routes with nested components that rely on route parameters, the nested components may fail to update correctly, leading to stale data being displayed. 

## Bug Description
The problem arises when a nested component's state or props depend on route parameters passed down from a parent component.  Upon navigation, the parent component receives updated parameters, but the nested component might not re-render or update its internal state appropriately, resulting in inconsistent UI behavior.

## How to Reproduce
Clone this repository, install the dependencies (`npm install`), and run the development server (`npm start`). Navigate between the home and about pages. Observe that while the parent route updates correctly, the nested component might not reflect the changes in route parameters.

## Solution
The solution provided in `bugSolution.js` addresses this issue by employing techniques like `useParams` hook to correctly access and update the nested component's state based on route changes. The solution includes implementation notes to clarify the approaches used.

## Technologies Used
- React
- React Router Dom v6
