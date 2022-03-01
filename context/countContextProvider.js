import React, {createContext, useContext} from 'react';

const countContext = createContext();

export default function countContextProvider({children}) {
  const [count, setCount] = React.useState(0);

  return (
    <countContext.Provider value={(count, setCount)}>
      {children}
    </countContext.Provider>
  );
}

export function useCountContext() {
  return useContext(countContext);
}