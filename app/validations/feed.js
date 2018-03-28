import {
    validatePresence,
    validateLength,
    validateFormat,
    // validateInclusion,
  } from 'ember-changeset-validations/validators';
  
  export default {
    feedURL: [validatePresence(true),
      validateLength({ allowBlank: false }),
      validateFormat({ type: 'url' }),
    ]
  };