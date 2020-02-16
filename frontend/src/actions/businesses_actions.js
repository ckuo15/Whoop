import * as BusinessAPIUtil from "../util/businesses_api_util";

export const RECEIVE_BUSINESS = "RECEIVE_BUSINESS";
export const RECEIVE_BUSINESS_PHOTO = "RECEIVE_BUSINESS_PHOTO";

export const receiveBusiness = business => ({
  type: RECEIVE_BUSINESS,
  business
});

export const receiveBusinessPhoto = businessPhoto =>({
  type: RECEIVE_BUSINESS_PHOTO,
  businessPhoto
});

export const fetchBusiness = businessId => dispatch => (
 BusinessAPIUtil.fetchBusiness(businessId).then(business => (
    dispatch(receiveBusiness(business))
  ))
);

export const addBusinessPhoto = (businessId, photoFile) => dispatch => ( // calls our axios util request and then dispatches to reducer
  BusinessAPIUtil.addBusinessPhoto(businessId, photoFile).then(businessPhoto => (
    dispatch(receiveBusinessPhoto(businessPhoto))
  ))
);
