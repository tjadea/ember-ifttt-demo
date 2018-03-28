import Route from '@ember/routing/route';
import RSVP from 'rsvp';
// import $ from 'jquery';

export default Route.extend({
    model() {
        return RSVP.hash({    
            summaryInfo: "If new feed item from " + localStorage.getItem(
                "newFeedURL") + ", then send me an email at " + localStorage.getItem(
                "newEmailADR") + ".",
        });
    },
    actions: {
        submit() {
            alert('Confirmed');
            window.location.href = "/";
        }
    }
});
