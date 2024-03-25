import React, {Component} from "react";

export default class CustomerList extends Component {
    state = { 
        pageTitle: "Customers", customerCount: 5,
        customers: [
            {id:1, name: "Ravi", phone: "123456", photo: "https://picsum.photos/id/1010/60"},
            {id:2, name: "Nirmala", phone: "2346157", photo: "https://picsum.photos/id/1011/60"},
            {id:3, name: "Joseph", phone: null, photo: "https://picsum.photos/id/1012/60"},
            {id:4, name: "Hannah", phone: "", photo: "https://picsum.photos/id/1013/60"}
        ]
    }

    render() {
        return( 
            <div>
                <h4 className="m-1 p-1">
                    {this.state.pageTitle}
                    <span className="badge bg-secondary m-2">{this.state.customerCount}</span>

                    <button className="btn btn-info" onClick={this.onRefreshClick}>Refresh</button>
                </h4>

                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.getCustomerRow()}
                    </tbody>
                </table>
            </div>
        )
    }

    onRefreshClick = () => {
        this.setState({customerCount:7})
    }

    getPhoneToRender = (phone) => {
        return phone ? phone : <div className="bg-warning p-2 text-center">#</div>
    }

    getCustomerRow = () => {
        return(        
            this.state.customers.map((cust, index) => {
            return (
                <tr key={cust.id}>
                    <td>{cust.id}</td>
                    <td>
                        <img src={cust.photo} />
                        <div>
                            <button className="btn btn-info" onClick={ () => {this.onChangePictureClick(cust, index)}}>Change</button>    
                        </div>
                    </td>
                    <td>{cust.name}</td>
                    <td>{this.getPhoneToRender(cust.phone)}</td>
                </tr>
            )})
        )
    }

    onChangePictureClick = (cust, index) => {
        console.log(cust)
        let custArr = this.state.customers
        console.log(custArr)
        // custArr[index].photo = "https://picsum.photos/id/1014/60"
        cust.photo = "https://picsum.photos/id/1015/60"
        this.setState({customers:custArr})
    }

}