const { createApp } = Vue

createApp({

    data() {

      return {

        contacts: [
            {
                name: 'Michele',
                avatar: './img/avatar_1.jpg',
                lastAccess: 'Ultimo accesso oggi alle 12:00',
                visible: true,
                messages: [
    
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: './img/avatar_2.jpg',
                lastAccess: 'Ultimo accesso ieri alle 18:23',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: './img/avatar_3.jpg',
                lastAccess: 'Ultimo accesso oggi alle 03:01',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: './img/avatar_4.jpg',
                lastAccess: 'Ultimo accesso oggi alle 21:56',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: './img/avatar_5.jpg',
                lastAccess: 'Ultimo accesso oggi alle 09:20',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: './img/avatar_6.jpg',
                lastAccess: 'Ultimo accesso ieri alle 13:46',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: './img/avatar_7.jpg',
                lastAccess: 'Ultimo accesso oggi alle 17:10',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: './img/avatar_8.jpg',
                lastAccess: 'Ultimo accesso oggi alle 14:25',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            }
        ],
        
        activeIndex: 0,
        // rimozione notifiche
        isRemoved: false,
        // nuovo messaggio 
        newMessage: '',
        // ricerca contatti
        searchValue: '',
        // toggle dark mode
        toggleDark: false,
    }   
},

methods: {
    changeActiveIndex(contactIndex) {
        this.activeIndex = contactIndex;
    },
    
    removeNotification() {
        this.isRemoved = true;
    },

    toggleDarkMode() {
        this.toggleDark = !this.toggleDark;
    },
      
    addNewMessage() {
          
          const pushText = {
              date: '10/01/2020 15:50:00',
              message: this.newMessage,
              status: 'sent',
            }
            
            
            if(this.newMessage == '') {
                
                // return false;
                
            } else {
                
                this.contacts[this.activeIndex].messages.push(pushText)
                
                this.newMessage = '';   
            }
            
    },
        
        
    addResponse() {
            
        setTimeout(() => {

                const response = {
                    date: '10/01/2020 15:50:01',
                    message: 'OK!',
                    status: 'received',
                }
                
                
                this.contacts[this.activeIndex].messages.push(response);

                
        }, 1000);
    },
        
},

computed: {
    userList () {
        if(this.searchValue.trim().length > 0) {
            return this.contacts.filter((contact) => contact.name.toLowerCase().includes(this.searchValue.trim().toLowerCase()))
        }
        return this.contacts
    }
}
    
}).mount('#app')
