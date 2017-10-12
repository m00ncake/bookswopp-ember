import Ember from 'ember';

export default Ember.Controller.extend({
    username: 'john',
    email: 'john@example.com',
    password: '123456',
    zipcode: '92808',
    actions: {
        createUser() {
            this.store.createRecord('user', {
                username: this.get('username'),
                email: this.get('email'),
                password: this.get('password'),
                zipcode: this.get('zipcode') 
            });
        } 
    }
});
