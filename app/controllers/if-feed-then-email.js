import Controller from '@ember/controller';
import UserValidations from '../validations/email';

export default Controller.extend({
    emailAddress: '',
    UserValidations,
    actions: {
        saveEmail() {
            // let adr = this.get('emailADR');
            let adr = document.getElementById('emailADR-input-emailAddress').value;
            localStorage.setItem("newEmailADR", adr)
            window.location.href = "summary";
            // var storedEmail = window.localStorage.getItem("newEmailADR");
        },
    },
});
