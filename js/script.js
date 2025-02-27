const { createApp } = Vue;

createApp({
  data() {
    return {
      liveStatus: 0,  
      searchQuery: '',
      contacts: [
        {
          name: 'Ciro',
          avatar: 'img/ciro.jpeg',
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
          name: 'Lotito',
          avatar: 'img/Lotito.jpg',
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
          name: 'Sandro Nesta',
          avatar: 'img/Alessandro-Nesta.jpg',
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
          name: 'Veron',
          avatar: 'img/Veron.jpg',
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
          name: 'Giorgio Chinaglia',
          avatar: 'img/Giorgio Chinaglia.jpg',
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
          name: 'Beppe Signori',
          avatar: 'img/Signori.webp',
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
          name: 'Peruzzi',
          avatar: 'img/Peruzzi.jpg',
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
          name: 'Simeone',
          avatar: 'img/Simeone.jpg',
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
      ]
    }
  },
  computed: {  //Filtro per nomi contatti;
    filteredContacts() {
      
      //Ritorna un valore fitrato;  
      return this.contacts.filter(contact => //Crea un indice (Contact) tra (Contacts); 
        contact.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
    
  },
  methods:{

    // Passo l'argomento index corrispondente all'utente, in base ad esso si aggiornerà la chat visualizzabile a schermo.
    stateClass(index){
        
        // Cambio conversazione; 
        this.liveStatus = index;
    },
    sendMessage(){

        // Variabile per rimozione testo;
        let testoRemove = document.getElementById('barra');
            
        //Estrapolare il contenuto dell 'input bar
        let testo = document.getElementById('barra').value;

        if(testo !== ''){
            // Pushare il messaggio nell'array di oggetti del messaggio;
            this.contacts[this.liveStatus].messages.push({message: testo, status: 'sent'});
            
            // Rimozione del contenuto della barra
            testoRemove.value = '';

            setTimeout(() => {
              //Rispost dell'utente
              this.contacts[this.liveStatus].messages.push({message: 'ok', status: 'received'});
            },1000)
        }
            
    }   
  }
}).mount('#app');


