import {
    validatePresence,
    validateLength,
    validateFormat,
    // validateInclusion,
  } from 'ember-changeset-validations/validators';
  
  export default {
    emailADR: [validatePresence(true),
      validateLength({ allowBlank: false }),
      validateFormat({ type: 'email' }),
    ]
  };