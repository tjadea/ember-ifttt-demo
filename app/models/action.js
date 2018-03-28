import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    colour: DS.attr('string'),
    icon: DS.attr('string'),
    link: DS.attr('string'),
    triggers: DS.hasMany('type'),
});
