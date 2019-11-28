import React, { Component } from 'react';

class ProductListData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{ "carname": "Maruti Baleno", "id": 1 }, { "carname": "Hyundai Creta", "id": 2 }, { "carname": "Kia Sealtos", "id": 2 },], cart: [],
        };
    }
    addProduct = (id, carname, d) => {
        const total = this.state.cart.length;
        const newId = total+1;
        const obj = {"carname": carname, "id": newId};
        const newArray = this.state.cart;
        newArray.push(obj);
        this.setState({cart: newArray});
    }
    removeProduct = (d,i) => {
        const list = this.state.cart;
        list.splice(d,1);
        this.setState({cart: list});
    }
    render() {
        const ProductList = this.state.data.map((d, i) =>
            <tr>
                <td>{d.carname}</td>
                <td><button onClick={() => this.addProduct(d.id, d.carname, d)} className="btn btn-success ml-3 add-cart-btn">Add</button></td>
            </tr>

        );
        const CartList = this.state.cart.map((d, i) =>
            <tr>
                <td>{d.carname}</td>
                <td><button onClick={() => this.removeProduct(d,i)} className="btn btn-danger ml-3">Remove</button></td>
            </tr>

        );
        return (
            <div className="container">
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Product List</th>
                                <th>Add to cart</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ProductList}
                        </tbody>
                    </table>
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Product List</th>
                                <th>Add to cart</th>
                            </tr>
                        </thead>
                        <tbody>
                            {CartList}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ProductListData;