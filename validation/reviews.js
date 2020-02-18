const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateReviewInput(data){
    let errors = {};
    data.author = validText(data.author) ? data.author : '';
    data.body = validText(data.body) ? data.body : '';
    data.business = validText(data.business) ? data.business : '';

    if (Validator.isEmpty(data.body)){
        errors.body = 'Review cannot be empty'
    }
    if (!Validator.isLength(data.body, {min: 1, max: 1000 })){
        errors.text = 'Review must be between 1 and 1000 characters'
    }
    
    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};


//author, body, business