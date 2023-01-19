import { Link } from 'react-router-dom';
import React from 'react';

function Sidebar() {
   return (
      <div className="sidebar-menu">
         <div className="sidebar-logo">LOGO</div>
         <ul class="sidebar-menu-ul">
            <li class="sidebar-menu-element">
               <a href="#">Home</a>
            </li>
            <li class="sidebar-menu-element">
               <a href="#">About</a>
            </li>
            <li class="sidebar-menu-element">
               <a href="#">Contact</a>
            </li>
         </ul>
      </div>
   );
}

export default Sidebar;
