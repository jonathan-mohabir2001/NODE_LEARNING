// Lab 03 Created By Jonathan M.
// This is the client side of the lab. React router is also demonstrated in this project
// Components are all written under this JS file So code is easier to see.
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
// Children of Browser Router are imported above.

import { useState } from 'react';
// use state and use effect imported below.

/*
Use state is a hook which allows for state variables within components. 
This allows us to handle changing data within this application. 

To see this functionality refer to the functional componenent named: 
BUTTON COMPONENT 
*/

import { useEffect } from 'react';
// use effect is imported in order to work with the fetching of the api from express app.

// the function below app will render two things. The navigation component and the button
// Routes are defined within here so the pages can be changed to view the project.
function App() {
  return (
    <div className="App">
      <Navigation />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/button" element={<ButtonComponent />} />
        <Route path="/backend" element={<GetBackend />} />
      </Routes>
    </div>
  );
}
// this component contains the link children of BrowserRouter.
// these links allow for the ability to click on the text to move to the next page.
function Navigation() {
  return (
    <div>
      <header>
        <Link to="/home">Click me to go home. </Link>
      </header>
      <header>
        <Link to="/button">Click on me to view the button for this lab </Link>
      </header>
      <header>
        <Link to="/backend">Click me to talk to express backend</Link>
      </header>
    </div>
  );
}

// just a random home page with hopes and dreams.
function Home() {
  return (
    <div className="App-header">
      <h1>This is home page</h1>
      <h3>React is soooo fun, not even joking.</h3>
      <h3>I jus wanna be a full stack dev already...this lab is gonna help</h3>
    </div>
  );
}

// Functional component which will demonstrate a button to fetch to an API!
function ButtonComponent() {
  // url constant declared and assigned the link of the random image.

  const [data, setData] = useState({ data: [] });
  //this statement will hold the state of the data incoming from the array.
  const [isLoading, setIsLoading] = useState(false);
  // this statement will hold the state of the loading status of the fetch call.
  // this statement is needed for the loading functionality of the button.
  const [err, setErr] = useState('');
  // this statement will hold the state of the error if there are any.

  //fetching of this api will be done through the use of an asynchrnous function below.

  const handleClick = async () => {
    setIsLoading(true);
    // loading state set to true.

    // try catch method will be coded below.

    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random', {
        // the response is assinged an awaiting function which is fetching the random dog.
        method: 'GET',
        // method set to get as we are looking for a result.
        headers: {
          // accepting the json object coming from the url.
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        // if the resoponse is not ok....
        throw new Error(`Error status is: ${response.status}`);
        // throw an error and a message.
        // message is written using tilde, and accessing the status property of the response object.
      }

      const result = await response.json();
      // constant result is assigned an await with the response in a json method.

      console.log('Result of fetch is: ', JSON.stringify(result, null, 4));
      // log message of the fetch.

      setData(result);
      // the set data hook passed the result constant
    } catch (err) {
      setErr(err.message);
      // set error hook passed the message of the error.
    } finally {
      setIsLoading(false);
      // finally statement with loading hook passed the false hook.
    }
  };
  // end of function function.
  return (
    <div className="App-header">
      <h1>Best button ever below....</h1>
      <h3>Refer to console to check status of fetch</h3>
      <button onClick={handleClick}>FETCH A DOG.</button>
      {isLoading && <h2>Loading result!....</h2>}
    </div>
  );
}

function GetBackend() {
/*
This componenet will be responsible for communicating with 
the express backend to get the images from the uploads folder 
containing some images of dogs. 
*/

const [backendData, setBackendData] = useState([]); 





  return (
    <div className="App-header">
      
      <h2>EXPRESS SERVER FETCH IN THIS COMPONENT.</h2>
    

    





    </div>
  );
}

export default App;
