import './App.css';

import Sidebar from './components/Sidebar';

function App() {
   return (
      <div className="container">
         <span className="column">
            <Sidebar />
         </span>
         <span className="column">column 2 / Homepage</span>
         <span className="column">column 3 / info</span>
      </div>
   );
}

export default App;
