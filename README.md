# android_club_task5 (20BRS1163)

Assignment 4 - Using Context API for State Management<br>(Provider & Consumer Concept)

## Working

- Make a Provider [context/CountContextProvider.js](https://github.com/cmsvit/android_club_task5/blob/main/context/countContextProvider.js)
```js
const CountContext = createContext();

export default function CountContextProvider({children}) {
  const [count, setCount] = React.useState(0);
  const [count2, setCount2] = React.useState(0);
  const [count3, setCount3] = React.useState(0);

  return (
    <CountContext.Provider
      value={{count, setCount, count2, setCount2, count3, setCount3}}>
      {children}
    </CountContext.Provider>
  );
}

export function useCountContext() {
  return useContext(CountContext);
}
```

- Use the provider as a parent in the component tree [App.js](https://github.com/cmsvit/android_club_task5/blob/main/App.js)
```js
export default function App() {
  return (
    <CountContextProvider>
      <MainScreen />
    </CountContextProvider>
  );
}
```

- Use the context to access the variable and change state [components/MainScreen.js](https://github.com/cmsvit/android_club_task5/blob/main/components/MainScreen.js)
```js
export default function MainScreen() {
  const countContext = useCountContext();
  console.log('MainScreen: countContext', countContext);
```

```js
<Text style={styles.countText}>{countContext.count}</Text>
<Button
  mode="contained"
  onPress={() => countContext.setCount(countContext.count + 1)}>
  Increase by 1
</Button>
```

## Screenshot

If the below table with screenshots is not visible, please check the [screenshots folder](https://github.com/cmsvit/android_club_task5/tree/main/screenshots) in the repo.
| Initial State | When incremented|
|----|----|
|<img src="https://github.com/cmsvit/android_club_task5/blob/main/screenshots/initState.png" width="300" alt="Init State">|<img src="https://github.com/cmsvit/android_club_task5/blob/main/screenshots/incrementedState.png" width="300" alt="Incremented State"> |
