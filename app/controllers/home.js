import Ember from 'ember';
const { computed } = Ember;

export default Ember.Controller.extend({
    popularBooks: computed.filterBy('model', 'isPopular'),
    actions: {
        gotoSignUp() {
            this.transitionToRoute('sign-up');
        }
    }
});
