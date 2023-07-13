import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import VolunteerForm from './components/VolunteerForm';
import OpportunityList from './components/OpportunityList';
import "./App.css";


const App = () => {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/volunteer" element={<VolunteerForm/>} />
          <Route path="/opportunities" element={<OpportunityList/>} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
