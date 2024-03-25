import React, {Component} from "react";
import Product from "./Product"

export default class ShoppingCart extends Component{
    state = {
        products: [
            {id:1, name:"iphone", price: 8900, quantity: 0},
            {id:2, name:"Sony Camera", price: 4500, quantity: 0},
            {id:3, name:"Samsung QLED TV", price: 10000, quantity: 0},
            {id:4, name:"iPad Pro", price: 7900, quantity: 0},
            {id:5, name:"Xbox", price: 8900, quantity: 0},
            {id:6, name:"Dell Monitor", price: 8900, quantity: 0}
        ]
    }

    render (){
        return (
            <div className="container-fluid">
                <h4>Shopping Cart</h4>

                <div className="row">{this.state.products.map( (prod) => {
                    return (
                        <Product key={prod.id} product={prod} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement}
                        onDelete={this.handleDelete} >
                            <button className="btn btn-primary">Buy Now</button>
                        </Product>
                    )
                })}</div>
            </div>
        )
    }
    // render ends

    handleIncrement = (product, maxValue) => {
        // console.log("Increment", product)
        let allProducts = [...this.state.products]
        let index = allProducts.indexOf(product)
        // console.log(allProducts[index])
        if(allProducts[index].quantity < maxValue) {
            allProducts[index].quantity++

            this.setState({products: allProducts})
        }
    }

    handleDecrement = (product, minValue) => {
        // console.log("Decrement", product)
        let allProducts = [...this.state.products]
        let index = allProducts.indexOf(product)
        // console.log(allProducts[index])
        if(allProducts[index].quantity > minValue) {
            allProducts[index].quantity--

            this.setState({products: allProducts})
        }
    }

    handleDelete = (product) => {
        // console.log('delete')
        let allProducts = [...this.state.products]
        let index = allProducts.indexOf(product)
        if(window.confirm("Are you sure?")){
            allProducts.splice(index, 1)

            this.setState({products: allProducts})
        }
    }
}