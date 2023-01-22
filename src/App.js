import './App.css';

import MainColumn from './components/MainColumn/MainColumn';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
   return (
      <div className="container">
         <span className="column">
            <Sidebar />
         </span>
         <span className="column">
            <MainColumn />
         </span>
         <span className="column">column 3 / info</span>
      </div>
   );
}

export default App;
