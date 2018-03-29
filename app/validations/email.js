import {
    validatePresence,
    validateLength,
    validateFormat,
    // validateInclusion,
  } from 'ember-changeset-validations/validators';
  
  export default {
    emailAddress: [
      validatePresence({ presence: true,
        message: 'Please input a valid email address'}),
      validateLength({ allowBlank: false }),
      validateFormat({
        // type: 'email',
        regex: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/      
      }),
    ]
  };