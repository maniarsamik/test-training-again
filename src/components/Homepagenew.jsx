import React, { Component } from 'react'

class HomepageNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{ "name": "Maruti", "id": 1 }, { "name": "Hyundai", "id": 2 }, { "name": "Mercedez", "id": 3 }], cart: [],
        };
        
    }
    handleClick = (id, name, i) => {
        var total = this.state.cart.length;
        var newId = total + 1;
        const obj = { "name": name, "id": newId };
        const newData = this.state.data;
        newData.splice(i, 1);
        const newArray = this.state.cart;
        newArray.push(obj);
        this.setState({ cart: newArray, data: newData });
        //const list = this.state.data;
        //const keyIndex = list.indexOf(key);
        //list.push(i);
        //this.setState({ data : list });
        //let copy = Object.assign({},  data[rowInfo.index]);
        // newArray.push(list);
        // this.setState({ data : newArray });
    }
    onClickClose = (d) => {
        const list = this.state.cart;
        const obj = this.state.cart[d];
        const newArray = this.state.data;
        newArray.push(obj);
        list.splice(d, 1);
        this.setState({ cart: list, data: newArray });
    }
    render() {
        const postlistdata = this.state.data.map((d, i) =>
            <tr>
                <td key={d.name}>{d.name}</td>
                <td><button onClick={() => this.handleClick(d.id,d.name, i)} type="submit" className="btn btn-success ml-3 add-cart-btn">Add to Cart</button></td>
            </tr>
        );
        const cartListdata = this.state.cart.map((d, i) =>
            <tr>
                <td key={d.name}>{d.name}</td>
                <td><button className="btn btn-danger" onClick={() => this.onClickClose(i)}>Remove</button></td>
            </tr>
        );
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Product List</th>
                                    <th>Addto cart</th>
                                </tr>
                            </thead>
                            <tbody>
                                {postlistdata}
                            </tbody>
                        </table>
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Product List</th>
                                    <th>Addto cart</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartListdata}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomepageNew