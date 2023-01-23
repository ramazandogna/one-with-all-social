import './App.css';

import MainColumn from './components/MainColumn/MainColumn';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
   return (
      <div className="container">
         <span className="column1">
            <Sidebar />
         </span>
         <span className="column2">
            <MainColumn />
         </span>
         <span className="column3"></span>
      </div>
   );
}

export default App;
