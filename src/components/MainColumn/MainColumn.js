import React, { useContext } from 'react';

import { GlobalContext } from '../../context/GlobalState';

function MainColumn() {
   const {
      likeCount,
      setLikeCount,
      isLikeDisabled,
      setIsLikeDisabled,
      isDislikeDisabled,
      setIsDislikeDisabled,
   } = useContext(GlobalContext);

   const LikeClick = () => {
      setIsLikeDisabled(true);
      setIsDislikeDisabled(false);
      setLikeCount(likeCount + 1);
   };

   const DislikeClick = () => {
      setIsLikeDisabled(false);
      setIsDislikeDisabled(true);
      if (likeCount > 0) {
         setLikeCount(likeCount - 1);
      }
   };

   return (
      <div className="main-column">
         <h2 className="main-column-title">Anasayfa</h2>
         <div className="main-column-tweet">
            <p className="whats-going-on">Neler Oluyor??</p>
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
                     Lorem Ipsum is simply dummy text of the printing and
                     typesetting industry. Lorem Ipsum has been the industry's
                     standard dummy text ever since the 1500s, when an unknown
                     printer took a galley of type and scrambled it to make a
                     type specimen book. It has survived not only five
                     centuries, but also the leap into electronic typesetting,
                     remaining essentially unchanged. It was popularised in the
                     1960s with the release of Letraset sheets containing Lorem
                     Ipsum passages, and more recently with desktop publishing
                     software like Aldus PageMaker including versions of Lorem
                     Ipsum.
                  </p>
               </div>
            </div>
            <div className="buttons">
               <button
                  disabled={isLikeDisabled}
                  onClick={LikeClick}
                  className="like-button"
               >
                  +1
               </button>
               <button
                  disabled={isDislikeDisabled}
                  onClick={DislikeClick}
                  className="dislike-button"
               >
                  -1
               </button>
               <div className="like-count"> ♡ {likeCount}</div>
            </div>
         </div>
      </div>
   );
}

export default MainColumn;
