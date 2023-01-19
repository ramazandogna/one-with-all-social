import './App.css';

import Sidebar from './components/sidebar';

function App() {
   return (
      <div className="container">
         <span className="column">
            <Sidebar />
         </span>
         <span className="column"></span>
         <span className="column"></span>
      </div>
   );
}

export default App;
