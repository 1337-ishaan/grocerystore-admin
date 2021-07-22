import React from "react";
import { Link } from "react-router-dom";

const ViewAllOrders = () => {
  return (
    <>
    <Link to="/recentOrders">Back</Link>
      <table className="table ucp-table table-hover">
        <thead>
          <tr>
            <th style={{ width: 130 }}>Order ID</th>
            <th style={{ width: 130 }}>Payment Method</th>
            <th style={{ width: 200 }}>Order Date</th>
            <th style={{ width: 200 }}>Delivery Date</th>
            <th style={{ width: 130 }}>Status</th>
            <th style={{ width: 130 }}>Total</th>
            <th style={{ width: 100 }}>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#ORDER 123</td>
            <td>Card </td>
            <td></td>
            <td>2013-01-12 09:10</td>
            <td>Pending</td>
            <td>&#8377;5000</td>
            <td className="action-btns">
              <i className="fas fa-eye" />

              <i className="fas fa-edit" />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};


export default ViewAllOrders;