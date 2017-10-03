import Ember from 'ember';
const { computed } = Ember;

export default Ember.Controller.extend({
    popularBooks: computed.filterBy('model', 'isPopular')
    // popularBooks: computed('model', function (){
    //     return this.get('model').filter(function(book) {
    //         return book.get('isPopular');
    //     });
    // })
});
