import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

function GlobalState({ children }) {
   const [likeCount, setLikeCount] = useState(0);
   const [isLikeDisabled, setIsLikeDisabled] = useState(false);
   const [isDislikeDisabled, setIsDislikeDisabled] = useState(true);

   return (
      <GlobalContext.Provider
         value={{
            likeCount,
            setLikeCount,
            isLikeDisabled,
            setIsLikeDisabled,
            isDislikeDisabled,
            setIsDislikeDisabled,
         }}
      >
         {children}
      </GlobalContext.Provider>
   );
}

export default GlobalState;
