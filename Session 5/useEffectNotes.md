# useEffect() hook

1. **Purpose**: The `useEffect` hook is used to perform side effects in functional components. It allows you to synchronize your component with external systems, such as APIs, timers, or subscriptions.

2. **Execution Timing**: The `useEffect` hook runs after the render phase, which means it does not block the browser from painting the screen. This is important for performance and user experience.

## Three Phases of useEffect

- **Mounting**: The effect runs after the component mounts. This is where you can perform initial data fetching or subscriptions.

- **Updating**: The effect runs after every render, including the initial mount. You can control when the effect runs by specifying dependencies in the dependency array.

- **Unmounting**: The cleanup function returned by the effect runs before the component unmounts. This is where you can clean up subscriptions, timers, or any other resources that need to be released.

3. **Dependency Array**: The second argument to `useEffect` is an array of dependencies. If you pass an empty array (`[]`), the effect runs only once after the initial render. If you pass specific values, the effect runs whenever those values change.

## How to use useEffect and the dependency array

1. **No Dependencies**: If you don't provide a dependency array, the effect runs after every render. This can lead to performance issues and infinite loops if not handled carefully.

```javascript
useEffect(() => {
  // Code to run after every render
});
```

2. **Empty Dependency Array**: If you provide an empty array, the effect runs only once after the initial render. This is useful for one-time setup tasks.

```javascript
useEffect(() => {
  // Code to run only once after the initial render
}, []);
```

3. **Specific Dependencies**: If you provide specific values in the dependency array, the effect runs whenever those values change. This allows you to control when the effect should run.

```javascript
useEffect(() => {
  // Code to run when 'value' changes
}, [value]);
```
