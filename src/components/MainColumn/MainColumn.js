import React, { Component } from 'react';

class MainColumn extends Component {
   render() {
      return (
         <div className="main-column">
            <h2>Homepage</h2>
            <div className="main-column-share">
               <div className="main-column-profile"></div>
               <div className="main-column-tweet">Neler Oluyor??</div>
            </div>
         </div>
      );
   }
}

export default MainColumn;
