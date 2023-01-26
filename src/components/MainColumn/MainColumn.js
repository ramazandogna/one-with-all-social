import React, { useContext, useEffect, useState } from 'react';

import { GlobalContext } from '../../context/GlobalState';
import axios from 'axios';

function MainColumn() {
   // Functions

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

   // useStates

   const [posts, setPosts] = useState([]);

   // useContext

   const {
      likeCount,
      setLikeCount,
      isLikeDisabled,
      setIsLikeDisabled,
      isDislikeDisabled,
      setIsDislikeDisabled,
   } = useContext(GlobalContext);

   //useEffect

   useEffect(() => {
      axios
         .get('https://jsonplaceholder.typicode.com/posts')
         .then((res) => {
            setPosts(res.data);
         })
         .catch((err) => {
            console.error(err);
         });
   }, []);

   return (
      <div className="main-column">
         <h2 className="main-column-title">Anasayfa</h2>
         <div className="main-column-tweet">
            <p className="whats-going-on">Neler Oluyor??</p>
         </div>
         {posts.map((post) => (
            <div key={post.id} className="main-column-user-container">
               <div className="main-column-user">
                  <span>
                     <a href="#" className="main-column-user-profile"></a>
                  </span>

                  <div>
                     <div className="user-head">
                        <h2 className="main-column-user-name">{post.title}</h2>
                     </div>
                     <p className="tweet-content">{post.body}</p>
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
         ))}
      </div>
   );
}

export default MainColumn;
