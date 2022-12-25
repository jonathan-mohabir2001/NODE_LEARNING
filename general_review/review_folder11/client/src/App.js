/*
In this project, React is used to display 
the front end of the application.

My Backend is a Node.js server that uses express.js as 
well, and some implementations of MongoDB. 

Components will be found in the src under components dir. 
*/
import './App.css';

import Home from './components/Home';
import About from './components/About';
import Message from './components/Message';

import { Route, Link} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My React App</h1>
      </header>
    </div>
  );
}
export default App;
