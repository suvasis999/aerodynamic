import React, { useEffect } from 'react';
import logo from './download.jpeg';
import './App.css';

import { useSelector } from "react-redux";

function Download() {
  const data = useSelector(state => state.authRoot.isAuthenticated);
 
  useEffect(() => {
     console.log(data);
  }, [data]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <h2>
          Download IOS Applicatoion
        </h2>
        
        <a href="itms-services://?action=download-manifest&amp; 
    url=https://aerodynamic.vercel.app/application/manifest.plist" className="App-link" 
    target="_blank"
    rel='noopener noreferrer'>
    Download Application
</a>
      </header>
    </div>
  );
}

export default Download;
