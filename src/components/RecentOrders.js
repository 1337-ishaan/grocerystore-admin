import { Link } from "react-router-dom";

const OrderHistory = () => {
  return (
    <div id="layoutSidenav_content">
        <Link to="/">Grocery List</Link>
      <main>
        <div className="container-fluid">
          <h2 className="mt-30 page-title">Dashboard</h2>
          <ol className="breadcrumb mb-30">
            <li className="breadcrumb-item active">Dashboard</li>
          </ol>
          <div className="row ">
            <div className="col-xl-3 col-md-6 ">
              <div className="dashboard-report-card purple">
                <div className="card-content text-center py-3 card ">
                  <span className="card-title">Order Pending</span>
                  <span className="card-count">2</span>
                </div>
              
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="dashboard-report-card red">
                <div className="card-content text-center py-3 card">
                  <span className="card-title">Order Cancel</span>
                  <span className="card-count">0</span>
                </div>
             
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="dashboard-report-card info">
                <div className="card-content text-center py-3 card">
                  <span className="card-title">Order Process</span>
                  <span className="card-count">5</span>
                </div>
            
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="dashboard-report-card text-success">
                <div className="card-content text-center py-3 card">
                  <span className="card-title">Today Income</span>
                  <span className="card-count">₹ 9568.00</span>
                </div>
              </div>
            </div> 
            <div className="col-xl-12 mt-3  col-md-12">
              <div className="card card-static-2 p-3 mb-30">
                <div className="card-title-2">
                  <h4>Recent Orders</h4>
                  <Link to="/viewAllOrders" className="view-btn hover-btn">
                    View All
                  </Link>
                </div>
                <div className="card-body-table">
                  <div className="table-responsive">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};


export default OrderHistory;
