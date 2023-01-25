import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

function GlobalState({ children }) {
   const [likeCount, setLikeCount] = useState(10);

   return (
      <GlobalContext.Provider value={{ likeCount, setLikeCount }}>
         {children}
      </GlobalContext.Provider>
   );
}

export default GlobalState;
