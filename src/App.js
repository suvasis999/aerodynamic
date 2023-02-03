import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Splash from "./screen/Splash/Splash";
import Login from "./screen/Login/Login";
import Game from "./screen/Game/Game";
import PrivateRoute from './utilis/HOC/PrivateRoute';
import GameList from './screen/GameList/GameList';
import Home from './screen/Home/Home';
import Contact from './screen/Contact/Contact';

const App = () => {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Contact" element={<Contact/>}/>
          <Route exact path="/Splash" element={<Splash/>}/>
          <Route exact path="/login" element={<Login/>}/>
          
          <Route exact element={<PrivateRoute  />}>
           <Route exact path="/gamelist" element={<GameList />} />
            <Route exact path="Game/:Id"  element={<Game />} />
           </Route>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
