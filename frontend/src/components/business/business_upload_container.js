import { connect } from "react-redux";
import { addBusinessPhoto } from "../../actions/businesses_actions";

import BusinessUpload from "./business_upload";

const mapStateToProps = (state, ownProps) => ({ // mapping this because we need user id and business id for photo upload
  userId: state.session.user.id,
  username: state.session.user.username,
  businessId: ownProps.match.params.business_id
});

const mapDispatchToProps = dispatch => ({ // our photo upload dispatch
  addBusinessPhoto: (businessId, photoFile) => dispatch(addBusinessPhoto(businessId, photoFile))
});

export default connect(mapStateToProps, mapDispatchToProps)(BusinessUpload);
