import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Header from './components/Header';

const Routes = ()=>{
  
  return(
    <BrowserRouter>
     <Route path="/" exact component={Home}/>
     <Route path="/login" exact component={Login}/>
     <Route path="/header" exact component={Header}/>


    </BrowserRouter>
  );
}

export default Routes;