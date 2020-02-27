import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
import { render } from '@testing-library/react';

class DishDetail extends Component{
    componentDidMount(){
        console.log("Menu Component componenetDidMount is invoked");
    }

    componentDidUpdate(){
        console.log('DIshdetail Component componentDidUpdate invoked');
    }
    renderDish(dish){
        return(
            <div className = "col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src = {dish.image} alt = {dish.name} />
                    <CardBody>
                        <CardTitle heading>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
    renderInfo(info){
        if (info != null)
            return(
                <div className = "col-12 cold-md-5 m-1">
                    <h3>Information</h3>
                        <li className = "list-styled">
                            {info.map((comment) =>{
                             return (
                                <li key = {info.id}>
                                    <p>{info.comment}</p>
                                    <p>{info.author}</p>
                                </li>
                            );
                            })}
                        </li>
                </div>
            );
        else
            return(
                <div></div>
            );
    }
    render() {
        console.log("DD Component render is invoked");
        if (this.props.dish != null)
            return(
                <div class = "container">
                    <div className = "row">
                        {this.renderDish(this.props.dish)}
                        {this.renderInfo(this.props.dish.comment)}
                    </div>
                </div>
            );
        else
            return (
                <div></div>
            );
    }
}





export default DishDetail;

