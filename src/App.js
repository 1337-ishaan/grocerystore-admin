import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

const App = () => {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     books: []
  //   };
  // }

  const [groceryItems, setGroceryItems] = useState([]);

    useEffect(() => {
      axios.get('http://178.128.51.49:3010/api/groceryItems')
      .then(res => {
        setGroceryItems(res.data);
        console.log(groceryItems);
      });
  },[]);

  // render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              GROCERY CATALOG
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/create"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add Grocery Item</Link></h4>
            <h4><Link to="/orderHistory"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Orders History</Link></h4>

            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {groceryItems.map(item =>
                  <tr>
                    <td><Link to={`/show/${item._id}`}>{item.name}</Link></td>
                    <td>{item.description}</td>
                    <td>{item.price}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        
      </div>
    );
}

export default App;
