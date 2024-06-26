import React, {Component} from "react";

export default class Product extends Component {
    state = {
        product: this.props.product
    }
    render() {
        // console.log(this.props)
        return (
            <div className="col-lg-6">
                <div className="card m-2">
                    <div className="card-body">

                        <div className="text-muted"> 
                            # {this.state.product.id}
                            <span className="pull-right hand-icon" onClick={() => this.props.onDelete(this.state.product)}><i className="fa fa-times"></i></span>
                        </div>
                        <h5 className="pt-5 border-top">{this.state.product.name}</h5>
                        <div className="">$ {this.state.product.price}</div>
                    </div>
                    {/* card body ends */}

                    <div className="card-footer text-right">
                        <div className="float-left">
                            <span className="badge bg-secondary">{this.state.product.quantity}</span>
                            <div className="btn-group">
                                <button className="btn btn-outline-success" onClick={() => {this.props.onIncrement(this.state.product, 10) }}>+</button>
                                <button className="btn btn-outline-success" onClick={() => {this.props.onDecrement(this.state.product, 0) }}>-</button>
                            </div>
                        </div>

                        <div className="float-right">
                            {this.props.children}
                        </div>
                    </div>                    
                </div>
            </div>
        )
    }
}