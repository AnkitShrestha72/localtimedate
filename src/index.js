import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; 


const root = ReactDOM.createRoot(document.getElementById('root'));

function timer (){
  
  const time = (
      <div>
        <h1>Hello World from Nepal</h1>
        <h2>Showing local time {new Date().toLocaleString()}</h2>
        
      </div>
      

  );
  root.render( time , 
   <React.StrictMode>
    <App/>
   </React.StrictMode>);
}

setInterval(timer, 1000);










