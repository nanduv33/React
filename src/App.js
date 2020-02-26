import React from 'react';
import logo from './logo.svg';
import {Navbar, NavbarBrand, Nav} from 'reactstrap'
import Menu from './components/menuComponent';
import './App.css';

function App() {
  return (
    <div>
     <Navbar dark color = "primary">
       <div className = "container">
         <NavbarBrand href = "/">Restaurant</NavbarBrand>
       </div>
     </Navbar>
     <Menu />
    </div>
  );
}

export default App;
