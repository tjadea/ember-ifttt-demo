import Controller from '@ember/controller';
import UserValidations from '../validations/email';

export default Controller.extend({
    emailADR: '',
    UserValidations,
    actions: {
        saveEmail() {
            // let adr = this.get('emailADR');
            let adr = document.getElementById('emailADR-input-emailADR').value;
            localStorage.setItem("newEmailADR", adr)
            window.location.href = "summary";
            // var storedEmail = window.localStorage.getItem("newEmailADR");
        },
        // submit(model) {
        //     const adr = this.get('emailADR');
        //     window.localStorage.setItem("newEmailADR", adr)
        //     // console.log('submit', model)
        //     model.save()
        //   }
    },
});
