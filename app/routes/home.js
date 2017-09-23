import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        let book = {
            image: './assets/images/book-1.png',
            title: 'The Wonderful Things You Will Be',
            author: 'Emily Winfield Martin'
        }
        return [book, book, book, book, book, book];
    }
});
