import React, { Component } from 'react'

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{ "name": "Samik", "id": 1 }, { "name": "Gopal", "id": 2 }]
        };
        this.handleClick = this.handleClick.bind(this);
    }
    onClickClose = (d) => {
        const list = this.state.data;
        list.splice(d, 1);
        this.setState({ data: list });
    }
    handleClick = () => {
        const obj = { 'name': this.refs.itemName.value, "id": this.state.data.length + 1 };
        const newArray = this.state.data.slice();
        newArray.push(obj);
        this.setState({ data : newArray });
    }
    render() {
        const postlistdata = this.state.data.map((d, i) =>
            <tr>
                <td>{d.name}</td>
                <td><button className="btn btn-danger" onClick={() => this.onClickClose(i)}>Remove</button></td>
            </tr>
        );
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="form-group d-flex">
                            <input type="text" ref="itemName" className="form-control" placeholder="add a new car name to product list..." />
                            <button onClick={this.handleClick} type="submit" className="btn btn-success ml-3 add-cart-btn">Add to Cart</button>
                        </div>
                    </div>
                </div>
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
                    </div>
                </div>
            </div>
        );
    }
}

export default Homepage