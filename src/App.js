import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  useEffect(()=>{
    if(Notification.permission !== 'granted'){
      Notification.requestPermission().then();
    }    
  },[])

  function msg(){
    navigator.serviceWorker.controller.postMessage({
      message:'Hello, service worker~~~'
    })
  }


  return (
    <div className="App">
      <header className="App-header">
        {/* <button onClick={msg}>알림메세지</button> */}
        <button id='msg'>알림메세지</button>


        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
