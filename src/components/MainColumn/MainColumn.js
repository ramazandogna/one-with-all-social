import React, { useContext } from 'react';

import { GlobalContext } from '../../context/GlobalState';

function MainColumn() {
   const { likeCount, setLikeCount } = useContext(GlobalContext);

   const DislikeClick = () => {
      setLikeCount(likeCount - 1);
   };

   const LikeClick = () => {
      setLikeCount(likeCount + 1);
   };
   return (
      <div className="main-column">
         <h2 className="main-column-title">Homepage</h2>
         <div className="main-column-share">
            <p className="main-column-tweet">Neler Oluyor??</p>
         </div>
         <div className="main-column-user-container">
            <div className="main-column-user">
               <span>
                  <a href="#" className="main-column-user-profile"></a>
               </span>
               <div>
                  <div className="user-head">
                     <h2 className="main-column-user-name">User Name</h2>
                  </div>
                  <p className="tweet-content">
                     123123123 123123123 123123123 123123 123123123 123123
                     123123123 123123123 123123123 123123 123123123 123123
                     123123123 123123123 123123123 123123 123123123 123123
                     123123123 123123123 123123123 123123 123123123 123123
                     123123123 123123123 123123123 123123 123123123 123123
                  </p>
               </div>
            </div>
            <div className="buttons">
               <button onClick={LikeClick} className="like-button">
                  +1
               </button>
               <button onClick={DislikeClick} className="dislike-button">
                  -1
               </button>
               <div className="like-count">{likeCount}</div>
            </div>
         </div>
      </div>
   );
}

export default MainColumn;
