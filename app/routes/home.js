import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        let book01 = {
            image: './assets/images/book-1.png',
            title: 'The Wonderful Things You Will Be',
            author: 'Emily Winfield Martin'
        };
        let book02 = {
            image: './assets/images/book-2.png',
            title: 'The Green Tree',
            author: 'Shelly Silverton'
        };
        let book03 = {
            image: './assets/images/book-3.png',
            title: 'Dragon Loves Tacos',
            author: 'Adam Rubin'
        };
        let book04 = {
            image: './assets/images/book-4.png',
            title: 'If Animals Kissed Good Night',
            author: 'Kate Bloomfield'
        };
        let book05 = {
            image: './assets/images/book-5.png',
            title: 'The Monsters At the End of This Book',
            author: 'Grover'
        };
        let book06 = {
            image: './assets/images/book-6.png',
            title: 'The Rainbow Fish',
            author: 'Marcus Penter'
        };
        return [book01, book02, book03, book04, book05, book06];
    }
});
