import Header from './components/Header/Header';
import './App.css';
import React from 'react';
import { Component } from 'react';
import HomePage from './components/HomePage/HomePage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UploadPage from './components/UploadPage/UploadPage';

function App() {
    return (
    <BrowserRouter>
      <div>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/upload" component={UploadPage} />
        <Route path="/:id" component={HomePage} />
      </Switch>
      </div>
      </BrowserRouter>
    )
  }

export default App;
