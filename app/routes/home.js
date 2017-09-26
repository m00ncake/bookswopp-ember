import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        let book01 = {
            isPopular: false,
            image: './assets/images/book-1.png',
            title: 'The Wonderful Things You Will Be',
            author: 'Emily Winfield Martin'
        };
        let book02 = {
            isPopular: false,            
            image: './assets/images/book-2.png',
            title: 'The Green Tree',
            author: 'Shelly Silverton'
        };
        let book03 = {
            isPopular: false,            
            image: './assets/images/book-3.png',
            title: 'Dragon Loves Tacos',
            author: 'Adam Rubin'
        };
        let book04 = {
            isPopular: false,            
            image: './assets/images/book-4.png',
            title: 'If Animals Kissed Good Night',
            author: 'Kate Bloomfield'
        };
        let book05 = {
            isPopular: false,            
            image: './assets/images/book-5.png',
            title: 'The Monsters At the End of This Book',
            author: 'Grover'
        };
        let book06 = {
            isPopular: false,          
            image: './assets/images/book-6.png',
            title: 'The Rainbow Fish',
            author: 'Marcus Penter'
        };
        let book07 = {
            isPopular: true,          
            image: './assets/images/book-6.png',
            title: 'The Rainbow Fish',
            author: 'Marcus Penter'
        };
        let book08 = {
            isPopular: true,          
            image: './assets/images/book-6.png',
            title: 'The Rainbow Fish',
            author: 'Marcus Penter'
        };
        let book09 = {
            isPopular: true,          
            image: './assets/images/book-6.png',
            title: 'The Rainbow Fish',
            author: 'Marcus Penter'
        };
        let book10 = {
            isPopular: true,          
            image: './assets/images/book-6.png',
            title: 'The Rainbow Fish',
            author: 'Marcus Penter'
        };
        let book11 = {
            isPopular: true,          
            image: './assets/images/book-6.png',
            title: 'The Rainbow Fish',
            author: 'Marcus Penter'
        };
        let book12 = {
            isPopular: true,          
            image: './assets/images/book-6.png',
            title: 'The Rainbow Fish',
            author: 'Marcus Penter'
        };
        return [book01, book02, book03, book04, book05, book06];
    }
});
