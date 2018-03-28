import Route from '@ember/routing/route';

export default Route.extend({
    model: function() {
        // return this.store.findAll('list');
       this.store.findRecord('list', 3);
       return this.store.findAll('type');
    }
});
