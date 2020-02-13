import React from "react";
import { withRouter } from "react-router-dom";

class BusinessShow extends React.Component {
  state = {
    businessData: {}
  };

  componentDidMount() {
    this.props
      .fetchBusiness(this.props.businessId)
      .then(businessData =>
        this.setState({ businessData: businessData.business.data })
      );
  }

  render() {
    console.log(this.state.businessData);
    return (
      <h1>Hello</h1>
    );
  }
}
export default withRouter(BusinessShow);