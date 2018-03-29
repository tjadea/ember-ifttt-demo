import {
    validatePresence,
    validateLength,
    validateFormat,
    // validateInclusion,
  } from 'ember-changeset-validations/validators';
  
  export default {
    feedURL: [validatePresence(true),
      validateLength({ allowBlank: false }),
      validateFormat({ 
        // type: 'url',
        regex: /^(http:\/\/)?[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+$/
     }),
    ]
  };