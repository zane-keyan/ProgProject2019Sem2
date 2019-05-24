import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRental } from "../store/actions/rentalActions";
import RentalItem from "../components/RentalItem";
import { isEmpty } from "../util/validationHelpers";

import { notifyReturnSucceed } from "./ToastContent";
class Rental extends Component {
  componentDidMount() {
    if (this.props.currentUser) {
      this.props.onFetchRental(this.props.currentUser._id);
    }
  }
  render() {
    if (this.props.rentals !== null) {
      var rentalItems = this.props.rentals.map(item => (
        <RentalItem
          key={item._id}
          rental={item}
          onReturn={this.props.onReturn}
        />
      ));
    }
    return (
      <React.Fragment>
        <div className="tab-content-container">
          <h1 className="display-3">Rentals</h1>
          {isEmpty(rentalItems) ? (
            <p className="text-muted">No rental record found</p>
          ) : (
            rentalItems
          )}
        </div>
      </React.Fragment>
    );
  }
}
function mapPropsToState(state) {
  return {
    currentUser: state.auth.user,
    rentals: state.rentals.fetchedRentals
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchRental: user_id => {
      dispatch(fetchRental(user_id));
    },
    onReturn: () => {
      //return item...//

      //display notification on home page
      notifyReturnSucceed();
    }
  };
};

export default connect(
  mapPropsToState,
  mapDispatchToProps
)(Rental);
