const { createApp } = Vue

  createApp({

    data() {

      return {
        contacts: [
            {
                name: 'Michele',
                avatar: 'img/avatar-1.jpg'
            },
            {
                name: 'Fabio',
                avatar: 'img/avatar-2.jpg'
            },
            {
                name: 'Samuele',
                avatar: 'img/avatar-3.jpg'
            },
            {
                name: 'Alessandro B.',
                avatar: 'img/avatar-4.jpg'
            },
            {
                name: 'Alessandro L.',
                avatar: 'img/avatar-5.jpg'
            },
            {
                name: 'Claudia',
                avatar: 'img/avatar-6.jpg'
            },
            {
                name: 'Federico',
                avatar: 'img/avatar-7.jpg'
            },
            {
                name: 'Davide',
                avatar: 'img/avatar-8.jpg'
            }
        ],

        index: 0,
    }
}

}).mount('#app')
