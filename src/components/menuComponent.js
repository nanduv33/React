import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
class Menu extends Component {
    constructor(props) {
        super(props); 
        
        console.log("Menu Component constructor is invoked");

    }
    componentDidMount(){
        console.log("Menu Component componenetDidMount is invoked");
    }

    

    renderDish(dish){
        if (dish != null){
            return(
                <Card >
                    <CardImg width = "100%" src = {dish.image} alt = {dish.name} />
                    <CardBody>
                        <CardTitle heading>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }

    onDishSelect(dishId){
        this.setState({selectedDish:dishId});
    }
    render(){
        const menu = this.props.dishes.map((dish)=>{
            return(
                <div key = {dish.id} className = "col-12 col-md-5 m-1">
                    <Card onClick={()=> this.props.onClick(dish.id)}>
                        
                        <CardImg width = "100%" src = {dish.image} alt = {dish.name} />
                        
                        <CardImgOverlay body className = "ml-5">
                            <CardTitle heading>{dish.name}</CardTitle>
                            
                        </CardImgOverlay>
                    </Card>
                </div> /* every item requires a key, so React can uniquely identify elements */
            );
        });
        console.log("Menu Component constructor is invoked");

        return(
            <div className = "container">
                <div className = "row">
                    
                    {menu}
                    
                </div>
                <div className = "row">
                    
                </div>
            </div>
        );
    }
}
export default Menu