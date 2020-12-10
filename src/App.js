import "bootswatch/dist/lux/bootstrap.min.css";

import MenuLogic from './Scripts/logic-components/MenuLogic.js';
import Navbar from './Components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MenuLogic/>
    </div>
  );
}

export default App;
