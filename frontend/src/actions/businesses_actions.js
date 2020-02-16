import * as BusinessAPIUtil from "../util/businesses_api_util";

export const RECEIVE_BUSINESS = "RECEIVE_BUSINESS";

export const receiveBusiness = business => ({
  type: RECEIVE_BUSINESS,
  business
});

export const fetchBusiness = businessId => dispatch => (
 BusinessAPIUtil.fetchBusiness(businessId).then(business => (
    dispatch(receiveBusiness(business))
  ))
);
