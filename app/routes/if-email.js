import Route from '@ember/routing/route';

export default Route.extend({
    model: function() {
        // return this.store.findAll('list');
       this.store.findRecord('action', 5);
       return this.store.findAll('type');
    }
});
