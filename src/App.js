import './App.css';

import MainPage from './components/Main/MainPage';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
   return (
      <div className="container">
         <span className="column">
            <Sidebar />
         </span>
         <span className="column">
            <MainPage />
         </span>
         <span className="column">column 3 / info</span>
      </div>
   );
}

export default App;
