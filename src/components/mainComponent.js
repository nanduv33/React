import React, {Component} from 'react';
import {Navbar, NavbarBrand, Nav} from 'reactstrap'
import Menu from './menuComponent';

import DishDetail from './dishDetailComponent'
import {DISHES} from '../shared/dishes'

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      dishes: DISHES, 
      selectedDish: null
    };
  }
  onDishSelect(dishId){
    this.setState({selectedDish:dishId});  /*changing the states of SelectedDIsh*/
    }   
  render(){
  return (
    <div>
     <Navbar dark color = "primary">
       <div className = "container">
         <NavbarBrand href = "/">Restaurant</NavbarBrand>
       </div>
     </Navbar>
     <Menu dishes = {this.state.dishes}
        onClick={(dishId)=>this.onDishSelect(dishId)} />

     <DishDetail dish = {this.state.dishes.filter((dish)=>dish.id === this.state.selectedDish)[0]}/>
    </div>
  );
}
}

export default Main;