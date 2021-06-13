import "bootswatch/dist/lux/bootstrap.min.css";


import MenuLogic from './Scripts/logic-components/MenuLogic.js';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage.jsx';
import PngMenu from './Pages/PngMenu.jsx'; 

import { Switch, Route, HashRouter as Router} from 'react-router-dom';

function App() {
  

  return (
    <Router>
      <header>
        <Navbar/>
      </header>
      <Switch>
        <Route exact path ='/' component={PngMenu}>
          <PngMenu/>
        </Route>


        {/* PAGINAS DEL MENU */}
        <Route exact path ='/menu' component={PngMenu}>
          <PngMenu/>
        </Route>
        <Route exact path ='/sandwiches' component={MenuLogic}>
          <MenuLogic dbName='sandwiches'/>
        </Route>
        <Route exact path ='/ensaladas' component={MenuLogic}>
          <MenuLogic dbName='ensaladas'/>
        </Route>
        <Route exact path ='/sopas' component={MenuLogic}>
          <MenuLogic dbName='sopas'/>
        </Route>
        <Route exact path ='/nieves' component={MenuLogic}>
          <MenuLogic dbName='nieves'/>
        </Route>
        <Route exact path ='/paletas' component={MenuLogic}>
          <MenuLogic dbName='paletas'/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

