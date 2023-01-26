import React, { useContext, useEffect, useState } from 'react';

import { GlobalContext } from '../../context/GlobalState';
import axios from 'axios';

function MainColumn() {
   //useEffects

   useEffect(() => {
      // API çağrılarını yap
      axios
         .get('https://jsonplaceholder.typicode.com/posts')
         .then((res) => setPosts(res.data))
         .catch((err) => console.log(err));

      axios
         .get('https://jsonplaceholder.typicode.com/users')
         .then((res) => setUsers(res.data))
         .catch((err) => console.log(err));

      axios
         .get('https://jsonplaceholder.typicode.com/photos')
         .then((res) => setPhotos(res.data))
         .catch((err) => console.log(err));
   }, []);

   // Functions

   const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
         const j = Math.floor(Math.random() * (i + 1));
         [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
   };
   const shuffledPosts = shuffleArray(posts);

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
   const [users, setUsers] = useState([]);
   const [photos, setPhotos] = useState([]);

   // useContexts

   const {
      likeCount,
      setLikeCount,
      isLikeDisabled,
      setIsLikeDisabled,
      isDislikeDisabled,
      setIsDislikeDisabled,
   } = useContext(GlobalContext);

   return (
      <div className="main-column">
         <h2 className="main-column-title">Anasayfa</h2>
         <div className="main-column-tweet">
            <p className="whats-going-on">Neler Oluyor??</p>
         </div>
         {shuffledPosts.map((post) => {
            const user = users.find((user) => user.id === post.userId);
            const photo = photos.find((photo) => photo.id === post.userId);
            return (
               <div key={post.id} className="main-column-user-container">
                  <div className="main-column-user">
                     <span>
                        <img
                           className="main-column-user-profile"
                           src={photo.thumbnailUrl}
                           alt={user.name}
                        />
                     </span>

                     <div>
                        <div className="user-head">
                           <h2 className="main-column-user-name">
                              {user.name}
                           </h2>
                        </div>
                        <p className="tweet-content">{post.body}</p>
                     </div>
                  </div>
               </div>
            );
         })}
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
   );
}

export default MainColumn;
