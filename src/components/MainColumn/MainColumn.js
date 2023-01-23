import React, { Component } from 'react';

class MainColumn extends Component {
   render() {
      return (
         <div className="main-column">
            <h2 className="main-column-title">Homepage</h2>
            <div className="main-column-share">
               <p className="main-column-tweet">Neler Oluyor??</p>
            </div>
            <div className="main-column-user-container">
               <div className="main-column-user">
                  <span>
                     <a href="" className="main-column-user-profile"></a>
                  </span>
                  <div>
                     <h2 className="main-column-user-name">User Name</h2>
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
                  <button className="like-button">+1</button>
                  <button className="dislike-button">+1</button>
               </div>
            </div>
         </div>
      );
   }
}

export default MainColumn;
