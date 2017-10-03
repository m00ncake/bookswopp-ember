import DS from 'ember-data';

export default DS.Model.extend({
    isPopular: DS.attr('boolean'),
    image: DS.attr('string'),
    title: DS.attr('string'),
    author: DS.attr('string')
});
