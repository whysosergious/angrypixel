import './App.css';
import './AppGeneral.css';
import './typography.css';
import {
	BrowserRouter as Router,
	Route
} from "react-router-dom";

// components
import Dash from 'Pages/Dash';
import Content from 'Pages/Content';
import Navigation from 'Navigation/index';


const App = () => {
  return (
    <div className="App">
			<Router>
				<Navigation />
				<Route path="/dash" component={ Dash } />
				<Route path="/content" component={ Content } />
			</Router>
    </div>
  );
}

export default App;
