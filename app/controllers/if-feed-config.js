import Controller from '@ember/controller';
import UserValidations from '../validations/feed';

export default Controller.extend({
    feedURL: '',
    UserValidations,
    actions: {
        saveURL() {
            // const url = this.get('feedURL');
            let url = document.getElementById('feedURL-input-feedURL').value;
            window.localStorage.setItem("newFeedURL", url)
            window.location.href = "if-feed-then";
            // var storedFeed = window.localStorage.getItem("newFeedURL");
        },
        // submit(model) {
        //     const url = this.get('feedURL');
        //     window.localStorage.setItem("newFeedURL", url)
        //     window.location.href = "if-feed-then";
        //     // console.log('submit', model)
        //     model.save()
        //   }
    }
});
