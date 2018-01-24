  import React, { Component } from 'react';
  // import { Navbar, Jumbotron, Button } from 'react-bootstrap';


export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buyItems: ['milk', 'bread', 'fruit'],
      message: ''
    }

  }

  addItem(e) {
    e.preventDefault();
    const {buyItems} = this.state;
    const newItem = this.newItem.value;

    const isOnTheList = buyItems.includes(newItem);

    if(isOnTheList){

      this.setState({
        message: "this item is already on the list. "
      })

    } else {
      newItem !== '' && this.setState({ // check if the new item is empty
        buyItems: [...this.state.buyItems, newItem], // spread old items and add new item
        message: ''
      })
  }
    this.addForm.reset(); // reset form and make input empty
}

  removeItem(item) {
    // copy buyItems but remove if it's the one you clicked on
    const newBuyItems = this.state.buyItems.filter(buyItem => {
      return buyItem !== item;
    });
    // reset the state with the new list, minus the removed one
    this.setState({
      buyItems: [...newBuyItems]
    })
  }

  render() {
    const {buyItems, message} = this.state;
    return (
     <div>
      <header>
        <h1>Shopping List</h1>

        <form ref={input => this.addForm = input} className="form-inline" onSubmit={(e) => {this.addItem(e)}} >
          <div className="form-group">
            <label className="sr-only" htmlFor="newItemInput">Add New Item</label>
            <input ref={input => this.newItem = input} type="text" placeholder="Bread" className="form-control" id="newItemInput" />
          </div>
          <button type="submit" className="btn btn-primary">Add</button>
        </form>


      </header>
      <div className="content">
      {
        message !== '' && <p className="message text-danger">{message}</p>
      }
        <table className="table">
          <caption>Shopping List</caption>
          <thead>
            <tr>
              <th>#</th>
              <th>Item</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              buyItems.map(item => {
                return (
                  <tr key={item}>
                    <th scope="row">1</th>
                    <td>{item}</td>
                    <td className="text-right">
                      <button onClick={(e) => this.removeItem(item)} type="button" className="btn btn-default btn-sm">
                        Remove
                      </button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
    )
  }
}