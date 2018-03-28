import DS from 'ember-data';

export default DS.Model.extend({
    list: DS.belongsTo('list', {async: false}),
    info: DS.attr('string'),
    key: DS.attr('string'),
    link: DS.attr('string'),
    title: DS.attr('string'),
    colour: DS.attr('string'),
});
